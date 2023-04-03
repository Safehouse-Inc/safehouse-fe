import React from "react";
import { DDAASRequestTemplate } from "../../templates/DDAASRequestTemplate";
import { ReferenceCodeNotification } from "../../organisms/ReferenceCodeNotification";

export const DDAASSentPage = () => {
  return (
    <DDAASRequestTemplate>
      <ReferenceCodeNotification />
    </DDAASRequestTemplate>
  );
};
