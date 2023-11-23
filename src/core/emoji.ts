import emojiJSON from "unicode-emoji-json";

export type Emoji = {
  slug: string,
  content: string,
};

export function findEmojis(keyword: string, limit: number) {
  return Object.entries(emojiJSON)
    .filter(([_symbol, emoji]) => emoji.name.toLowerCase().includes(keyword.toLowerCase()))
    .map<Emoji>(([symbol, emoji]) => ({ slug: emoji.slug, content: symbol }))
    .slice(0, limit);
}

export function findEmojiKeyword(text: string, caretPosition: number) {
  const colon = text.lastIndexOf(":", caretPosition);
  const lastWord = text.slice(colon, caretPosition);
  return lastWord.match(/^:(\w+)/)?.[1] ?? null;
}

export function replaceWithEmoji(text: string, caretPosition: number, emoji: string): [string, number] {
  const colon = text.lastIndexOf(":", caretPosition);
  const newText = text.slice(0, colon) + emoji + text.slice(caretPosition);
  const diff = text.length - newText.length;
  return [newText, caretPosition - diff];
}
