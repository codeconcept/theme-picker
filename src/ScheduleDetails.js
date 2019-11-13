import React from "react";

const ScheduleDetails = ({ activity }) => {
  const { category, title, town } = activity;
  return (
    <div className="activity">
      <h1>{title}</h1>
      <div>
        {category} - {town}
      </div>
    </div>
  );
};

export default ScheduleDetails;
