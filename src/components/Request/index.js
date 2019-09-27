import React from "react";
import Text from "../Text";
import Files from "../Files";
import User from "../User";
import "./request.css";

export default function Request({ requestJson }) {
  let data = requestJson;
  let frequency = data.renewal_frequency_in_months;

  return (
    <div className="requested-table">
      <div className="requested-box">
        <div>
          <Text
            title="Requested by"
            value={
              <User
                name={
                  data.requested_by.first_name +
                  " " +
                  data.requested_by.last_name
                }
                src={data.requested_by.profile_picture}
              />
            }
          />
        </div>
        <div>
          <Text title="Cost" value={`$` + data.cost} />
        </div>
        <div className="renewal-box">
          <div className="frequency-box">
            <Text
              title="Renewal Frequency"
              value={
                frequency === 1 ? frequency + " month" : frequency + " months"
              }
            />
          </div>
          <div className="cost-box">
            <Text title="Annual Cost" value={`$` + 12 * data.cost} />
          </div>
        </div>
        <div>
          <Text title="Expense Account" value={data.expense_account} />
        </div>
        <div>
          <Text title="File" value={<Files files={data.files} />} />
        </div>
        <div className="description-text">
          <Text title="Description" value={data.description} />
        </div>
      </div>
      <div className="paying-text">
        Your company is already paying for {data.service.name} on a recurring
        basis.
        <span> (1 instance owned by John Smith). </span>
      </div>
    </div>
  );
}
