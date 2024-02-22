import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const PrivateRouter = ({ children }) => {
  const authContext = useContext(AuthContext);
  console.log("Auth Context:", authContext);
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    console.log("PrivateRouter component mounted");
    return () => {
      console.log("PrivateRouter component unmounted");
    };
  }, []);

  console.log("PrivateRouter component rendered");
  console.log("Loading state:", loading);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (isLoading) {
    console.log("Loading state: true");
    return <Loading />;
  }

  if (user) {
    console.log("User authenticated:", user);
    return children;
  }

  console.log("User not authenticated, redirecting...");
  return (
    <Navigate to="/signup" state={{ from: location }} replace />
  );
};

export default PrivateRouter;
