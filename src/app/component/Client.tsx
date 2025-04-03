
"use client"
import { Grid, Typography } from '@mui/material'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 2
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 2
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

function Client() {
  return (
    <>
      <Typography variant="h4" color="initial" fontWeight={"bold"} textAlign={"center"} lineHeight={2}>Our Clients Say!</Typography>
      <Typography component="p" color="initial" textAlign={"center"} sx={{ color: "gray" }} marginBottom={"80px"}>Luxurious PG and Flats for sale or rent in prime locations worldwide available now.</Typography>




      {/* <Carousel swipeable={false}
  draggable={false}
  // showDots={true}
  responsive={responsive}
  // ssr={true} // means to render carousel on server-side.
  slidesToSlide={2}
  infinite={true}
  // autoPlay={false}
  // autoPlaySpeed={1000}
  // keyBoardControl={true}
  // customTransition='all .5'
  // transitionDuration={500}
  // containerClass='carousel-container'
  // removeArrowOnDeviceType={['tablet', 'mobile']}
  // deviceType={false}
  // dotListClass='custom-dot-list-style'
  // itemClass='carousel-item-padding-40-px'
  > */}
      {/* <Box sx={{ height: { xs: "auto", md: "500px" }, width: { xs: "95%", md: "90%", lg: "1500px" }, padding: { xs: "15px", md: "20px 25px 30px 25px" }, border: "1px", borderRadius: "9px", bgcolor: "#EFFDF5", margin: "auto", marginBottom: { xs: "40px", md: "80px" } }}></Box> */}
      <Grid container spacing={3} justifyContent="center">

        <Grid size={{ xs: 10, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography component="p" color="initial" sx={{ height: { xs: "auto", md: "300px" }, width: { xs: "90%", sm: "80%", md: "500px", lg: "600px" }, border: "1px dashed green", padding: "30px", borderRadius: "2px", marginBottom: { xs: "40px", md: "90px" } }}>
            I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.
          </Typography>
        </Grid>

      {/* </Box> */}
      <Grid size={{ xs: 10, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography component="p" color="initial" sx={{ height: { xs: "auto", md: "300px" }, width: { xs: "90%", sm: "80%", md: "500px", lg: "600px" }, border: "1px dashed green", borderRadius: "2px", padding: "30px", marginBottom: { xs: "40px", md: "90px" } }} >
          I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.
        </Typography>
      </Grid>

    </Grid >
      {/* </Carousel> */ }
    </>
  )
}

export default Client
