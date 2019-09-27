import React from "react";
import "./approver.css";
import { stringToDate } from "../../utils/";

export default function Approver(props) {
  let dateElement;
  if (props.status === "accepted") {
    const date = stringToDate(props.created_date);
    dateElement = <div>Approved {date.toDateString()}</div>;
  } else if (props.status === "created") {
    const date = stringToDate(props.last_notified_time);
    dateElement = <div>Last notified {date.toDateString()}</div>;
  }
  return (
    <div className="approved-box">
      <div className="avatar">
        <img alt="User's Avatar" src={props.approver.profile_picture} />
      </div>
      <div className="details">
        <p
          title={`${props.approver.first_name} ${props.approver.last_name}`}
          className="name"
        >
          {props.approver.first_name} {props.approver.last_name}
        </p>
        <p title={props.approver.email} className="email">
          ({props.approver.email})
        </p>
        <div className="date">{dateElement}</div>
        {props.status === "accepted" ? (
          <div className="check-box">
            <img alt="checked" src="/assets/check-box.svg" />
          </div>
        ) : (
          <div className="check-box">
            <img alt="unchecked" src="/assets/uncheck.svg" />
          </div>
        )}
      </div>
    </div>
  );
}
