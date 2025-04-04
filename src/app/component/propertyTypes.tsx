"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function PropertyTypes() {
  const properties = [
    { logo: "/flat.png", name: "Flat", count: "100", alt: "flat icon" },
    { logo: "/pg.png", name: "PG", count: "100", alt: "pg icon" },
    { logo: "/home.png", name: "Villa", count: "100", alt: "villa icon" },
  ];
  return (
    <Grid container padding={3}>
      <Grid size={12} textAlign="center">
        <Typography
          variant="h2"
          color="initial"
          fontWeight={700}
          padding="30px 0 10px"
        >
          Property Types
        </Typography>
        <Typography
          variant="subtitle1"
          color="#666565"
          fontSize="1.2rem"
          mb={3}
          fontWeight={400}
        >
          Luxurious PG and Flat for sale or rent in prime locations worldwide
          available now.
        </Typography>
      </Grid>

      {properties.map((property, index) => (
        <Grid
          size={{ xs: 12, md: 4, }}
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px dotted #00b98e",
            borderRadius: "2px",
            outline: "10px solid #EFFDF5 ", 
            padding:'20px',      
          }}
        >
          <Box sx={{ borderRadius: "50%", border: "10 px dotted #00b98e", width:'50px', height:"50px" }}>
            <Image
              src={property.logo}
              alt={property.alt}
              width={50}
              height={50}
            />
          </Box>
          <Typography variant="subtitle1" color="initial">
            {property.name}
          </Typography>
          <Typography variant="subtitle2" color="#00B98E">
            {property.count} Properties
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
