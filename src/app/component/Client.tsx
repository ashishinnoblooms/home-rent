
"use client"
import { Box, Grid, Typography } from '@mui/material'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ImageElements from './ImageElements';


function Client() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <Typography variant="h4" color="initial" fontWeight={"bold"} textAlign={"center"} lineHeight={2}>Our Clients Say!</Typography>
      <Typography component="p" color="initial" textAlign={"center"} sx={{ color: "gray" }} marginBottom={"80px"}>Luxurious PG and Flats for sale or rent in prime locations worldwide available now.</Typography>
      {/* <Box >
        <ArrowCircleLeftOutlinedIcon sx={{
          fontSize: 50,
          color: "#00B98E",
          
        }} />
      </Box> */}


      <Carousel

        swipeable={false}
        // draggable={false}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        // infinite={false}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={100}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={50}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"

      // responsive={responsive}
      >
        <ImageElements />
        <ImageElements />
        <ImageElements />
        <ImageElements />
        <ImageElements />
        <ImageElements />


        {/* <Grid container sx={{
          marginBottom: "20px",
          paddingBottom: "20px",
          gap: "50px",
        }}> */}
        {/* <Grid size={{ xs: 12, md: 4 }} sx={{
            height: { xs: "auto", md: "400px" },
            // maxWidth:{md:"550px"},
            // width:"100%",
            width: { xs: "90%", sm: "80%", md: "450px", },
            bgcolor: "#EFFDF5",
            borderRadius: "10px",
            padding: "25px",
            position: "relative",

          }}>
            <div>

              <Box sx={{
                height: { xs: "auto", md: "350px" },

                // maxWidth:{md:"550px"},
                // width:"100%",
                width: { xs: "90%", sm: "80%", md: "400px", },
                border: "1px dashed green",
                borderRadius: "10px",
                padding: "30px",
                alignItems: "start",
                position: "relative",
                bgcolor: "white",
              }}>
                <Image src={"/client1.jpg"} height={120} width={120} style={{
                  borderRadius: "50%",
                  marginBottom: "30px",
                  position: "absolute",
                  left: "40%",
                  top: "-70px",
                  // zIndex:1,
                  // transform: "translateX(-20%)",
                  border: "10px solid #EFFDF5"
                  // boxSizing:"border-box"
                }} alt='client1' />
                <Typography sx={{ textAlign: "center", margin: "5px", paddingTop: "30px", fontWeight: "bold" }}>JAZIYA</Typography>
                <Stack spacing={1} sx={{ justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
                  <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                </Stack>
                I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.
              </Box>
            </div>
          </Grid> */}

        {/* 
          <Grid size={{ xs: 12, md: 4 }} sx={{
            height: { xs: "auto", md: "400px" },
            // maxWidth:{md:"550px"},
            // width:"100%",
            width: { xs: "90%", sm: "80%", md: "450px", },
            bgcolor: "#EFFDF5",
            borderRadius: "10px",
            padding: "25px",
            position: "relative",

          }}>
          <div><Box sx={{
            height: { xs: "auto", md: "350px" },
            // width:"100%",
            width: { xs: "90%", sm: "80%", md: "400px", },
            border: "1px dashed green",
            borderRadius: "10px",
            padding: "30px",
            position: "relative",
            bgcolor: "white",
          }}>
            <Image src={"/client2.jpg"} height={120} width={120} style={{
              borderRadius: "50%",
              marginBottom: "30px",
              position: "absolute",
              left: "40%",
              top: "-60px",
              transform: "translateX(-20%)",
              boxSizing: "border-box",
              border: "10px solid #EFFDF5"
            }} alt='client2' />
            <Typography sx={{ textAlign: "center", margin: "5px", paddingTop: "30px", fontWeight: "bold" }}>RIYA</Typography>
            <Stack spacing={1} sx={{justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
              <Rating name="half-rating" defaultValue={3.5} precision={0.1} />
            </Stack>


            I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.
          </Box></div>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{
            height: { xs: "auto", md: "400px" },
            // maxWidth:{md:"550px"},
            // width:"100%",
            width: { xs: "90%", sm: "80%", md: "450px", },
            bgcolor: "#EFFDF5",
            borderRadius: "10px",
            padding: "25px",
            position: "relative",

          }}>
          <div><Box sx={{
            height: { xs: "auto", md: "350px" },
            // width:"100%",
            width: { xs: "90%", sm: "80%", md: "400px", },
            border: "1px dashed green",
            borderRadius: "10px",
            padding: "30px",
            position: "relative",
            bgcolor: "white",
          }}>
            <Image src={"/client3.jpg"} height={120} width={120} style={{
              borderRadius: "50%",
              marginBottom: "30px",
              position: "absolute",
              left: "40%",
              top: "-60px",
              transform: "translateX(-20%)",
              boxSizing: "border-box",
              border: "10px solid #EFFDF5"
            }} alt='client3' />
            <Typography sx={{ textAlign: "center", margin: "5px", paddingTop: "30px", fontWeight: "bold" }}>RIYA</Typography>
            <Stack spacing={1} sx={{justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
              <Rating name="half-rating" defaultValue={3.5} precision={0.1} />
            </Stack>


            I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.
          </Box></div>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{
            height: { xs: "auto", md: "400px" },
            // maxWidth:{md:"550px"},
            // width:"100%",
            width: { xs: "90%", sm: "80%", md: "450px", },
            bgcolor: "#EFFDF5",
            borderRadius: "10px",
            padding: "25px",
            position: "relative",

          }}>
          <div><Box sx={{
            height: { xs: "auto", md: "350px" },
            // width:"100%",
            width: { xs: "90%", sm: "80%", md: "400px", },
            border: "1px dashed green",
            borderRadius: "10px",
            padding: "30px",
            position: "relative",
            bgcolor: "white",
          }}>
            <Image src={"/client4.jpg"} height={120} width={120} style={{
              borderRadius: "50%",
              marginBottom: "30px",
              position: "absolute",
              left: "40%",
              top: "-60px",
              transform: "translateX(-20%)",
              boxSizing: "border-box",
              border: "10px solid #EFFDF5"
            }} alt='client4' />
            <Typography sx={{ textAlign: "center", margin: "5px", paddingTop: "30px", fontWeight: "bold" }}>RIYA</Typography>
            <Stack spacing={1} sx={{justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
              <Rating name="half-rating" defaultValue={3.5} precision={0.1} />
            </Stack>


            I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay.
          </Box></div>
          </Grid>

 */}


        {/* </Grid> */}
      </Carousel>

    </>
  )
}

export default Client
