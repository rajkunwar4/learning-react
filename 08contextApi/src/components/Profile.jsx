import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login</div>;

  return (
    <>
      <div>Welcome <span className="font-bold">{user.username}</span></div>
      <div className="text-red-600">Pass hacked: <span className="font-bold">{user.password}</span></div>
    </>
  );
}

export default Profile;
