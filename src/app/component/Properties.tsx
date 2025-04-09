import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import BathtubSharpIcon from "@mui/icons-material/BathtubSharp";

export default function Properties() {
  const propertyImages = [
    { src: "/property-1.jpg", alt: "property 1", type: "Flat", price: "₹16,500", rentType: "Flat 2 BHK", location: "Dwarka, Delhi, India", size: "950 Sqft", style: "Furnished", quantity: "2 Bath" },
    { src: "/property-2.jpg", alt: "property 2", type: "PG", price: "₹8000", rentType: "Girls PG", location: "Janakpuri, Delhi, India", size: "1000 Sqft", style: "2 Bed", quantity: "1 Bath" },
    { src: "/property-3.jpg", alt: "property 3", type: "PG", price: "₹9500", rentType: "Boys Pg", location: "Sector 62, Noida, India", size: "850 Sqft", style: "1 Bed", quantity: "1 Bath" },
    { src: "/property-4.jpg", alt: "property 4", type: "PG", price: "₹12,345", rentType: "Coliving PG", location: "Sector 137, Noida, India", size: "900 Sqft", style: "3 Bed", quantity: "2 Bath" },
    { src: "/property-5.jpg", alt: "property 5", type: "Flat", price: "₹12,500", rentType: "Flat 3 BHK", location: "Sector 14, Gurgaon, India", size: "1000 Sqft", style: "Unfurnished", quantity: "2 Bath" },
    { src: "/property-6.jpg", alt: "property 6", type: "PG", price: "₹12,000", rentType: "Boys PG Near Sector 18", location: "Sector 18, Noida, India", size: "1100 Sqft", style: "4 Bed", quantity: "2 Bath" },
    // {src:"/property-7.jpg" ,alt:'property 7'},
    // {src:"/property-8.jpg" ,alt:'property 8'},
    // {src:"/property-9.jpg" ,alt:'property 9'},
  ];
  return (
    <>
      <Typography
        variant="h3"
        color="initial"
        sx={{
          fontWeight: "bold",
          fontFamily: "sans-serif",
          paddingTop: "80px",
          paddingLeft: "30px",
        }}
      >
        Property Listing
      </Typography>
      <Typography
        component="p"
        color="initial"
        sx={{
          fontSize: "20px",
          fontWeight: "regular",
          fontFamily: "sans-serif",
          paddingLeft: "30px",
          paddingTop: "15px",
          color: "gray",
          marginBottom: "70px",
        }}
      >
        Luxurious PG, homes and apartments for sale or rent in prime locations.
      </Typography>
      <Grid container spacing={4}>
        {propertyImages.map((img, index) => (
          // <Grid size={{ xs: 1, md: 4 }} key={index}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}
            sx={{
              position: "relative",
              // marginBottom: "30px",
              borderRadius: "5px",
              boxShadow: "0 0 5px gray",
            }}
          >
            <Box>
            <Image
              src={img.src}
              width={480}
              height={300}
              alt={img.alt}
              style={{
                objectFit: "cover",
                width: "100%",
                // height:"100%",
                borderRadius: "5px",
              }}
            /></Box>
            <Typography
              sx={{
                position: "absolute",
                left: "5%",
                top: "6%",
                height: "40px",
                width: "90px",
                bgcolor: "#00B98E",
                color: "white",
                fontSize: "bold",
                padding: "8px",
                borderRadius: "5px",
              }}
            >

              For Rent
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                left: "5%",
                top: "290px",
                transform: "translateY(-30%)",
                // height: "60px",
                // width: "60px",
                bgcolor: "white",
                color: "#00B98E",
                fontSize: "bold",
                padding: "3px 22px",
                borderRadius: "5px",
              }}
            >
              {img.type}
            </Typography>
            <Box
              sx={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                padding: "10px 10px",
                paddingTop: "20px",
              }}
            >
              <Box sx={{color: "#00B98E", fontWeight: "bold", fontSize: "20px", }}> {img.price} </Box>
                <Button sx={{color: "#00B98E", border: "1px solid #00B98E ","&:hover": { bgcolor: "#00B98E", color: "black" },}}>Book Now</Button>
            </Box>

              <Typography
                sx={{
                  // marginTop:"30px",
                  padding: "1px 20px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "black",
                  "&:hover": { color: "#00B98E" },
                }}
              >
                {img.rentType}
              </Typography>
           
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{color: "#00B98E", margin: "4px 7px",}}/>
              <Typography sx={{color: "gray",}}>{img.location}</Typography>
            </Box>

            <Box
              sx={{
                borderTop: "1px dashed green",
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Box sx={{borderRight: "1px dashed green", display: "flex", justifyContent: "center",alignItems: "center", }}>
                <Typography sx={{ color: "gray", padding: "1px 10px" }}>{img.size}</Typography>
              </Box>
              <Box sx={{ borderRight: "1px dashed green", display: "flex", justifyContent: "center", alignItems: "center", padding: "1px 20px",}}>
                <LocalHotelIcon sx={{ color: "#00B98E" }} />
                <Typography sx={{ color: "gray", padding: "1px 10px" }}> {img.style}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BathtubSharpIcon sx={{ color: "#00B98E" }} />
                <Typography sx={{ color: "gray", padding: "1px 10px" }}>
                  {img.quantity}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
        <Box sx={{ width: "400px", height: "70px", borderRadius: "10px", bgcolor: "#00B98E", marginBottom: "100px", display: "flex", justifyContent: "center" }} >
          <Button sx={{ padding: "20px 20px", }}>Browse More Property</Button>
        </Box>
      </Grid>


    </>

  );
}
