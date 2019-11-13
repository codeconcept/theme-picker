import React from "react";
import MessageContext from "./MessageContext";

const ScheduleDetails = ({ activity }) => {
  const { category, title, town } = activity;
  return (
    <div className="activity">
      <h2>{title}</h2>
      <div>
        {category} - {town}
      </div>
      <MessageContext.Consumer>
        {value => <div style={{ fontSize: 11 }}>{value.message}</div>}
      </MessageContext.Consumer>
    </div>
  );
};

export default ScheduleDetails;
