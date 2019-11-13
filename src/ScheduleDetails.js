import React from "react";
import MessageContext from "./MessageContext";

const ScheduleDetails = ({ activity }) => {
  const { category, title, town } = activity;
  return (
    <MessageContext.Consumer>
      {value => (
        <div className="activity">
          <h2>{title}</h2>
          <div>
            {category} - {town}
          </div>
          <div
            style={{
              fontSize: 12,
              color: value.theme === "day" ? "#c12527" : "#e0cbc4"
            }}
          >
            {value.message}
          </div>
        </div>
      )}
    </MessageContext.Consumer>
  );
};

export default ScheduleDetails;
