import React from "react";
import "antd/dist/antd.css";
import "./index.css";

export const PatientDetails = ({ patientList }) => {
  console.log({ patientList });
  const { name, address, email, nhsNumber } = patientList.user;
  const { medications, medicalCondations } = patientList;
  return (
    <div className="patient">
      <h1>Patient Details</h1>
      <p>name: {name}</p>
      <p>email:{email}</p>
      <p>address:{address}</p>
      <p>nhsNumber:{nhsNumber}</p>
      <p className="condations">
        MedicalCondations:
        {medicalCondations
          .map(function (medC) {
            return medC;
          })
          .join(",")}
      </p>

      <p className="condations">
        Medications:
        {medications
          .map(function (medC) {
            return medC;
          })
          .join(",")}
      </p>
    </div>
  );
};
