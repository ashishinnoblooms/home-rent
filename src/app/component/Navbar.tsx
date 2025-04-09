"use client";
import {
  Typography,
  Link,
  Box,
  Container,
  Collapse,
  Fade,
  Grow,
  Slide,
} from "@mui/material";
import React from "react";
import YardTwoToneIcon from "@mui/icons-material/YardTwoTone";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [nav, setNav] = React.useState(false);
  const navLink = ["HOME", "ABOUT", "PROPERTY", "CONTACT", "ENQUIRY"];
  const handleClick = () => {
    setNav((prev) => !prev);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "white",
        zIndex: 99,
        margin: "0 auto",
        padding: "8px 10px",
        position: "sticky",
        top: "0",
        boxShadow: "0 5px 5px rgba(0, 0, 0, 0.5)",
        marginBottom: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minWidth: "200px",
          }}
        >
          <Link href="/">
            <YardTwoToneIcon
              sx={{
                padding: "5px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "1px dotted #00b98e",
                color: "#00b98e",
                margin: "0 8px 0 0",
              }}
            />
          </Link>
          <Link href="./" sx={{ textDecoration: "none" }}>
            <Typography
              fontSize="calc(1.375rem + 1.5vw)"
              fontWeight="700"
              color="#00b98e"
            >
              {" "}
              Home Rent
            </Typography>
          </Link>
        </Box>

        <Box
          sx={{
            minWidth: "30%",
            justifyContent: "space-between",
            alignItems: "center",
            display: { xs: "none", md: "flex" },
          }}
        >
          {navLink.map((links) => (
            <Link
              key={links}
              href={links === "HOME" ? `/` : `/${links.toLowerCase()}`}
              sx={{
                textDecoration: "none",
                color: "black",
                "&:hover": { color: "#00B98E" },
                "&:active": { color: "#00b98e" },
                fontSize: { xs: ".8rem", sm: "1rem" },
                fontWeight: 500,
                margin: { xs: "10px", md: "25px" },
              }}
            >
              {links}
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            border: "2px solid #00b98e",
            borderRadius: "5px",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#00b98e",
              color: "white",
            },
          }}
        >
          <MenuIcon onClick={handleClick} />
        </Box>
      </Box>
      <Collapse in={nav}>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {navLink.map((links) => (
              <Link
                key={links}
                href={links === "HOME" ? `/` : `/${links.toLowerCase()}`}
                sx={{
                  textDecoration: "none",
                  color: "black",
                  "&:hover": { color: "#00B98E" },
                  "&:active": { color: "#00b98e" },
                  fontSize: { xs: ".8rem", sm: "1rem" },
                  fontWeight: 500,
                  margin: "10px",
                }}
              >
                {links}
              </Link>
            ))}
          </Box>
      </Collapse>
    </Container>
  );
}


