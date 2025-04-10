import { Box, Button } from "@mui/material";
import React from "react";
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button startIcon={<GoogleIcon />} size="large" variant="contained"
      onClick={()=>{console.error('Login with google is not implemented')}}>
        Login With Google
      </Button>
    </Box>
  );
}

export default Login;
