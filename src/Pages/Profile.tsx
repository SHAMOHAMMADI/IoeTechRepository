import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import ProfileComponent from "../component/ProfileComponent";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../component/Context/UserContextProvider";
import axios from "axios";

const Profile = () => {
  useEffect(() => {
    axios.get("http://localhost:7100/info").then((res) => {});
  }, []);

  const { user, setUser, valid, setValid } = useContext(UserContext);
  console.table(user);
  return (
    <div>
      <NavBar />
      <ProfileComponent />
      <Footer />
    </div>
  );
};

export default Profile;
