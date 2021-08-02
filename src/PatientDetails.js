import React from 'react'

export const PatientDetails = ({ patientList }) => {
  console.log({patientList})
   const { name, address, email, medicalConditions, medication, nhsNumber } =
     patientList.user;
  return (
    <div className="patient">
      <h1>Patient Details</h1>
      <p>name: {name}</p>
      <p>address:{address}</p>
      <p>email:{email}</p>
      <p>medicalConditions:{medicalConditions}</p>
      <p>medication:{medication}</p>
      <p>nhsNumber:{nhsNumber}</p>
    </div>
  );
  
}; 
