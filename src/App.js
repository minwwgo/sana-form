import React, { useState } from 'react'
import { PatientDetails } from './PatientDetails';
import { PatientForm } from './PatientForm'
function App() {
  const [patientList, setPatientList] = useState("");
  return (
    <div>
      Sana-tech
      <div className="app">
        <PatientForm setPatientList={setPatientList} />
        {patientList&& <PatientDetails patientList={patientList} />}
      </div>
    </div>
  );
}

export default App;
