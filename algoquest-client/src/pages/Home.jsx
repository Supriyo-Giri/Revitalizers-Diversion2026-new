import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const checkUserStatus = async () => {
      const response = await axios.get("http://localhost:3001 /")  
      console.log(response);
      if (response.data.success === true) {
        setIsSuccess(true);
      }
      // if (isAuthenticated) {
      //   try {
      //     // const token = await getAccessTokenSilently();
      //     // const response = await axios.get("http://localhost:3001/api/user", {
      //     //   headers: {
      //     //     Authorization: `Bearer ${token}`,
      //     //   },
      //     // });
      //     const response = await axios.get("http://localhost:3001/api/user")  
      //     console.log(response);
      //     if (response.data.success === true) {
      //       setIsSuccess(true);
      //     }
      //   } catch (error) {
      //     console.error("Backend request failed:", error);
      //   }
      // }
    };

    checkUserStatus();
  }, []); // Runs on mount and when login state changes

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Home Page</h1>
      {isSuccess ? (
        <p style={{ color: "green" }}>Backend Verified: Success!</p>
      ) : (
        <p>Checking status or Not logged in...</p>
      )}
    </div>
  );
};

export default Home;
