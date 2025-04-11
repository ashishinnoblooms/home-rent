import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";

export default function () {
  const[email,setEmail]=useState("");
  const[password,setpassword]=useState("");
  return (
    <>
      <form>
        <Typography variant="h1" color="initial">
          {" "}
          WELCOME BACK TO HOME RENT
        </Typography>
        <Box>
          <Typography variant="h4" color="initial">
            LOGIN WITH EMAIL
          </Typography>
          <Typography variant="h4" color="initial">
            LOGIN WITH MOBILE
          </Typography>
        </Box>
        <Box sx={{ width: 500, maxWidth: "100%" }}>
          <TextField fullWidth label="Email" id="fullWidth" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Box>

        <Box sx={{ width: 500, maxWidth: "100%" }}>
          <TextField fullWidth label="Enter your password" id="fullWidth" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
        </Box>
      </form>
    </>
  );
}
