import { faUserPlus } from "@fortawesome/free-solid-svg-icons/faUserPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "react-bootstrap/Button";

type ProfileSectionProps = {
  onContactCreate: (contactId: string) => void,
};

const ProfileSection = ({
  onContactCreate,
}: ProfileSectionProps) => {
  const openDialog = () => {
    const contactId = prompt("Please enter contact id to start a conversation:", "");
    if (contactId) {
      onContactCreate(contactId);
    }
  };

  return (
    <div className="mb-3 me-3 pe-1 d-flex flex-row justify-content-between">
      <div></div>
      <Button onClick={openDialog}>
        <FontAwesomeIcon icon={faUserPlus} size="lg" className="fa-fw" />
      </Button>
    </div>
  );
};

export default ProfileSection;
