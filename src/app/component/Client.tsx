
"use client"
import { Box, Grid, Typography } from '@mui/material'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'

function Client() {
  return (
    <>
      <Typography variant="h4" color="initial" fontWeight={"bold"} textAlign={"center"} lineHeight={2}>Our Clients Say!</Typography>
      <Typography component="p" color="initial" textAlign={"center"} sx={{ color: "gray" }} marginBottom={"80px"}>Luxurious PG and Flats for sale or rent in prime locations worldwide available now.</Typography>
      <Grid container sx={{
        marginBottom:"90px",
        paddingBottom:"700px"
      }}>
        <Box sx={{
          height: { xs: "auto", md: "300px" },
          width: { xs: "90%", sm: "80%", md: "550px", lg: "650px" },
          bgcolor: "#EFFDF5",
          borderRadius:"10px",
          padding: "30px 40px",
        }}>
          <Box sx={{
             height: { xs: "auto", md: "250px" },
             width: { xs: "90%", sm: "80%", md: "500px", lg: "600px" },
             border:"1px dashed green",
             borderRadius:"10px",
            padding:"30px",
             
          }}>
          I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.

          </Box>
        </Box>
      </Grid>


      {/* <Grid container spacing={3} justifyContent="center">

        <Grid size={{ xs: 10, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography component="p" color="initial" sx={{ height: { xs: "auto", md: "300px" }, width: { xs: "90%", sm: "80%", md: "500px", lg: "600px" }, border: "1px dashed green", padding: "30px", borderRadius: "2px", marginBottom: { xs: "40px", md: "90px" } }}>
            I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.
          </Typography>
        </Grid>

      <Grid size={{ xs: 10, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography component="p" color="initial" sx={{ height: { xs: "auto", md: "300px" }, width: { xs: "90%", sm: "80%", md: "500px", lg: "600px" }, border: "1px dashed green", borderRadius: "2px", padding: "30px", marginBottom: { xs: "40px", md: "90px" } }} >
          I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.
        </Typography>
      </Grid>

    </Grid > */}

    </>
  )
}

export default Client
