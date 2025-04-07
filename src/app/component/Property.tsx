import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { relative } from 'path'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BathtubSharpIcon from '@mui/icons-material/BathtubSharp';

export default function Property() {
    const propertyImages = [
        { src: "/property-1.jpg", alt: 'property 1' },
        { src: "/property-2.jpg", alt: 'property 2' },
        { src: "/property-3.jpg", alt: 'property 3' },
        { src: "/property-4.jpg", alt: 'property 4' },
        { src: "/property-5.jpg", alt: 'property 5' },
        { src: "/property-6.jpg", alt: 'property 6' },
        // {src:"/property-7.jpg" ,alt:'property 7'},
        // {src:"/property-8.jpg" ,alt:'property 8'},
        // {src:"/property-9.jpg" ,alt:'property 9'},
    ]
    return (
        <>
            <Typography variant="h3" color="initial" sx={{
                fontWeight: "bold",
                fontFamily: "sans-serif",
                paddingTop: "80px",
                paddingLeft: "30px"
            }}>
                Property Listing
            </Typography>
            <Typography component="p" color="initial" sx={{
                fontSize: "20px",
                fontWeight: "regular",
                fontFamily: "sans-serif",
                paddingLeft: "30px",
                paddingTop: "15px",
                color: "gray",
                marginBottom: "70px"
            }}>
                Luxurious PG, homes and apartments for sale or rent in prime locations.
            </Typography>
            <Grid container spacing={4}>
                {
                    propertyImages.map((img, index) => (
                        <Grid size={{ xs: 1, md: 4 }} key={index} >
                            <Box sx={{ position: "relative", marginBottom: "30px",  borderRadius: "5px",boxShadow:"0 0 5px gray" }}>
                                <Image src={img.src} width={480} height={300} alt={img.alt} style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    // height:"100%",
                                    borderRadius: "5px"

                                }} />
                                <Typography sx={{
                                    position: "absolute",
                                    left: "5%",
                                    top: "6%",
                                    height: "40px",
                                    width: "90px",
                                    bgcolor: "#00B98E",
                                    color: "white",
                                    fontSize: "bold",
                                    padding: "8px",
                                    borderRadius: "5px"
                                }}> For Rent</Typography>
                                <Typography sx={{
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
                                    borderRadius: "5px"
                                }}>Flat</Typography>
                                <Box sx={{ display: "flex", alignItems: "center",padding:"10px 10px" }}>
                                    <Box sx={{
                                        paddingTop: "20px",
                                        color: "#00B98E",
                                        fontWeight: "bold",
                                        fontSize: "20px"
                                    }}>
                                        ₹16,500
                                    </Box>
                                    <Box sx={{ marginLeft: "60%", paddingTop: "30px", }}>
                                        <Button sx={{
                                            color: "#00B98E",
                                            //    height:"30px",
                                            //    width:"100%",
                                            border: "1px solid #00B98E ",
                                            "&:hover": { bgcolor: "#00B98E", color: "black" },


                                            //  marginLeft:"99px"
                                        }}>Book Now</Button>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        // marginTop:"30px",
                                        padding:"1px 20px",
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        color: "black",
                                        "&:hover": { color: "#00B98E", }
                                    }}>Flat 2 BHK</Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <LocationOnIcon sx={{
                                        color: "#00B98E",
                                        margin: "4px 7px"
                                    }} />
                                    <Typography sx={{
                                        color: "gray",
                                    }}>Dwarka, Delhi, India</Typography>
                                </Box>

                                <Box sx={{ borderTop: "1px dashed green", display: "flex", justifyContent: "space-around", width: "100%", }}>


                                    <Box sx={{ borderRight: "1px dashed green", display: "flex", justifyContent:"center",alignItems:"center", }}>
                                        <Typography sx={{ color: "gray", padding: "1px 10px" }}>950 Sqft</Typography>
                                    </Box>
                                    <Box sx={{borderRight: "1px dashed green", display: "flex", justifyContent:"center",alignItems:"center", padding: "1px 20px" }}>
                                        <LocalHotelIcon sx={{ color: "#00B98E" }} />
                                        <Typography sx={{ color: "gray", padding: "1px 10px" }}>Furnished</Typography>
                                    </Box>
                                    

                                    <Box sx={{ display: "flex", justifyContent:"center",alignItems:"center", }}>
                                        <BathtubSharpIcon sx={{ color: "#00B98E" }} />
                                        <Typography sx={{ color: "gray", padding: "1px 10px" }}> 2 Bath</Typography>
                                    </Box>
                                </Box>

                               
                            </Box>



                        </Grid>
                    ))

                }




            </Grid>
        </>
    )
}
