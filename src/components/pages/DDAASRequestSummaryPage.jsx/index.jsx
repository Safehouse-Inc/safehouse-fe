import React from "react";
import { DDAASRequestTemplate } from "../../templates/DDAASRequestTemplate";
import { DDAASRequestSummary } from "../../organisms/DDAASRequestSummary";

export const DDAASRequestSummaryPage = () => {
  return (
    <DDAASRequestTemplate title="Due Diligence Request Summary">
      <DDAASRequestSummary />
    </DDAASRequestTemplate>
  );
};
