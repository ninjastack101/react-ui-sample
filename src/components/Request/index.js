import React from "react";
import Text from "../Text";
import Files from "../Files";
import User from "../User";
import "./request.css";

export default function Request({ requestJson }) {
  const frequency = requestJson.renewal_frequency_in_months;

  return (
    <div className="requested-table">
      <div className="requested-box">
        <div>
          <Text
            title="Requested by"
            value={
              <User
                name={`${requestJson.requested_by.first_name} ${requestJson.requested_by.last_name}`}
                src={requestJson.requested_by.profile_picture}
              />
            }
          />
        </div>
        <div>
          <Text title="Cost" value={`$ ${requestJson.cost}`} />
        </div>
        <div className="renewal-box">
          <div className="frequency-box">
            <Text
              title="Renewal Frequency"
              value={`${frequency} month${frequency > 1 ? "s" : ""}`}
            />
          </div>
          <div className="cost-box">
            <Text title="Annual Cost" value={`$ ${12 * requestJson.cost}`} />
          </div>
        </div>
        <div>
          <Text title="Expense Account" value={requestJson.expense_account} />
        </div>
        <div>
          <Text title="File" value={<Files files={requestJson.files} />} />
        </div>
        <div className="description-text">
          <Text title="Description" value={requestJson.description} />
        </div>
      </div>
      <div className="paying-text">
        Your company is already paying for {requestJson.service.name} on a
        recurring basis.
        <span> (1 instance owned by John Smith). </span>
      </div>
    </div>
  );
}
