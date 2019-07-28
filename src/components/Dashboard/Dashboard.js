import React, { useState } from "react";

import UserInfos from "./UserInfos";
import JsonViewer from "./JsonViewer";

const Dashboard = () => {
  const [state, setState] = useState({
    firstname: "Micheal",
    lastname: "",
    birth: "",
    situation: "",
    adress: "",
    phone: "",
    email: "",
    language: [],
    career: [],
    education: [],
    skills: [],
    created_at: new Date()
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <UserInfos data={state}/>
        </div>
        <div className="col-md-8">
          <JsonViewer content={state}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
