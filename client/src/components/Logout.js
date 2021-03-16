import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "982596765497-1qh0mhtm8tk3sla8lmn3ebsa4pcq0cva.apps.googleusercontent.com";

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
