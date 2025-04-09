"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ImageElements from "./ImageElements";


const clientData: any = [
  { src: "/client1.jpg", alt: "client1", name: "JAZIYA", rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} />, description: " I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay." },
  { src: "/client2.jpg", alt: "client2", name: "FARZIYA", rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} />, description: "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay." },
  { src: "/client3.jpg", alt: "client3", name: "DANZI", rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} />, description: "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay." },
  { src: "/client4.jpg", alt: "client4", name: "MENK", rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} />, description: "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay." },
  { src: "/client4.jpg", alt: "client4", name: "MENK", rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} />, description: "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay." },
  { src: "/client4.jpg", alt: "client4", name: "MENK", rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} />, description: "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay." },
]


const ProductData=clientData.map((item:any)=>(
          <ImageElements src={item.src} alt={item.alt} name={item.name} rating={item.rating} description={item.description}  />
))

function Client() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1264 },
      items: 3,

      
    },
    desktop: {
      breakpoint: { max: 1664, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // const arrowStyle = {
  //   background: "transparent",
  //   border: 0,
  //   color: "#fff",
  //   fontSize: "80px"
  // };
  // const CustomRight = ({ onClick }:any) => (
  //   <Button className="arrow right" onClick={onClick} sx={arrowStyle}>
  //     <ArrowCircleLeftOutlinedIcon style={{ fontSize: "50px", backgroundColor:"red" }} />
  //   </Button>
  // );
  // const CustomLeft = ({ onClick }:any) => (
  //   <Button className="arrow left" onClick={onClick} sx={arrowStyle}>
  //     <ArrowCircleRightOutlinedIcon style={{ fontSize: "50px", backgroundColor:"red" }} />
  //   </Button>
  // );
 
  return (
    <>
      <Typography
        variant="h4"
        color="initial"
        fontWeight={"bold"}
        textAlign={"center"}
        lineHeight={2}
      >
        Our Clients Say!
      </Typography>
      <Typography
        component="p"
        color="initial"
        textAlign={"center"}
        sx={{ color: "gray" }}
        marginBottom={"80px"}
      >
        Luxurious PG and Flats for sale or rent in prime locations worldwide
        available now.
      </Typography>

      <Carousel
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          // autoPlaySpeed={1000}
          keyBoardControl={true}
          // arrows
          // showDots
          // swipeable
      >

       {/* <ImageElements /> */}
       {ProductData}
      
      </Carousel>
    </>
  );
}

export default Client;
