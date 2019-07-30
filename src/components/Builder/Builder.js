import React, { useContext } from "react";

// Import the main context
import { UserContext } from "./UserContext";

// Components Imports
import UserInfos from "./UserInfos";
import JsonViewer from "./JsonViewer";

const Builder = () => {
  const [user] = useContext(UserContext);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-5">
          <h3>Enter your informations :</h3>
          <p>You have to make sure, that your informations are all clear.</p>
          <UserInfos />
        </div>
        <div className="col-md-7">
          <JsonViewer content={user} />
        </div>
      </div>
    </div>
  );
};

export default Builder;
