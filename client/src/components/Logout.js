import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "652868653239-hji64o0nglv3p8h8e4j76n09pjoa1rv5.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Logout success");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
