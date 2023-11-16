function getItemEntry(item: DataTransferItem): FileSystemEntry | null {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (item.webkitGetAsEntry) {
    return item.webkitGetAsEntry();
  }
  /* if (item.getAsEntry) {
    return item.getAsEntry();
  } */
  return null;
}

function isDirectory(entry: FileSystemEntry) {
  return entry.isDirectory;
}

async function convertEntryToFile(entry: FileSystemFileEntry) {
  return new Promise<File>((resolve, reject) => entry.file(resolve, reject));
}

function readDirectory(entry: FileSystemDirectoryEntry) {
  return new Promise<FileSystemEntry[]>((resolve, reject) => {
    const reader = entry.createReader();
    reader.readEntries(resolve, reject);
  });
}

async function getEntriesRecursively(entry: FileSystemEntry | null, collection: FileSystemFileEntry[] = [], path = "") {
  if (!entry) return [];
  if (isDirectory(entry)) {
    const entries = await readDirectory(entry as FileSystemDirectoryEntry);
    for (const e of entries) {
      await getEntriesRecursively(e, collection, path + entry.name + "/");
    }
  } else {
    collection.push(entry as FileSystemFileEntry);
  }
  return collection;
}

export async function getTransferredFiles(dataTransfer: DataTransfer) {
  const entries = Array.from(dataTransfer.items).map(getItemEntry);
  const allEntries = await Promise.all(entries.map(e => getEntriesRecursively(e)));
  const files = await Promise.all(allEntries.flat().map(e => convertEntryToFile(e)));
  return files;
}
