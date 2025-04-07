import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  Box,
  Container,
} from "@mui/material";
import React from "react";
import YardTwoToneIcon from "@mui/icons-material/YardTwoTone";

function Navbar() {
  const navLink = ["HOME", "ABOUT", "PROPERTY", "CONTACT", "Enquiry"];
  return (
    <>
      <Box>
        <Grid
          container
          spacing={1}
          sx={{
            height: { xs: "auto", md: "90px" },
            width: "100%",
            // minWidth:{xs:"1300px",md: "1400px" },
            // padding: { xs: "1px", md: "20px 25px 30px 25px" },
            border: "1px",
            borderRadius: "2px",
            boxShadow: "0 0 6px gray",
            bgcolor: "white",
            // margin: { md: "60px" },
            marginBottom: { xs: "40px", md: "80px" },
            position: "fixed",
            zIndex: "1",
          }}
        >
          <Grid size={{ xs: 6, md: 6 }}>
            <Box
              sx={{ marginLeft: { xs: "20px", md: "40px" }, display: "flex" }}
            >
              <Link href="./">
                <YardTwoToneIcon
                  sx={{
                    height: { xs: "50px", md: "70px" },
                    width: { xs: "50px", md: "70px" },
                    padding: "5px",
                    margin: "10px",
                    border: "1px dashed green",
                    color: "green",
                    borderRadius: "50%",
                    "&:hover": { cursor: "pointer" },
                  }}
                />
              </Link>
              <Link
                href="./"
                sx={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    textDecoration: "none",
                    color: "#00B98E",
                    fontWeight: "bold",
                    fontSize: { xs: "25px", md: "35px" },
                    marginTop: "15px",
                    marginBottom: { xs: "0", md: "40px" },
                  }}
                >
                  {" "}
                  HOME RENT
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, md: 6 }}>
            <Box sx={{ margin: "35px" }}>
              {navLink.map((links) => (
                <Link
                  key={links}
                  href={links === "HOME" ? `/` : `/${links.toLowerCase()}`}
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    "&:hover": { color: "#00B98E" },
                    fontSize: { xs: "12px", md: "15px" },
                    fontWeight: 500,
                    fontFamily: "sans-serif",
                    margin: { xs: "", md: "25px" },
                  }}
                >
                  {links}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Navbar;
