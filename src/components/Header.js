import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useNavigate, Link } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("balance");
    navigate("/");
    window.location.reload();
  };

  const loginToRegiter = () => {
    navigate("/login");
  };

  const logoutToRegister = () => {
    navigate("/register");
  };

  if (hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Link to="/">
          <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
          </Box>
        </Link>
        <Link to="/">
          <Button
            className="explore-button"
            startIcon={<ArrowBackIcon />}
            variant="text"
          >
            Back to explore
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>

      {children}

      <Stack direction="row" spacing={1} alignItems="center">
        {localStorage.getItem("username") ? (
          <>
            <Avatar
              src="avatar.png"
              alt={localStorage.getItem("username") || "profile"}
            />
            <p className="username-text"> {localStorage.getItem("username")}</p>

            <Button type="primary" onClick={logout}>
              {" "}
              Logout{" "}
            </Button>
          </>
        ) : (
          <>
            <Button onClick={loginToRegiter}> Login </Button>
            <Button variant="contained" onClick={logoutToRegister}>
              Register
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
