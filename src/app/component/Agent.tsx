import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import CallSharpIcon from '@mui/icons-material/CallSharp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Image from 'next/image';



function Agent() {
    return (
        <>
            <Box sx={{ height: { xs: "auto", md: "500px" }, width: { xs: "95%", md: "90%", lg: "1500px" }, padding: { xs: "15px", md: "20px 25px 30px 25px" }, border: "1px", borderRadius: "9px", bgcolor: "#EFFDF5", margin: "auto", marginBottom: { xs: "40px", md: "50px" } }}>
                <Box sx={{ height: { xs: "auto", md: "460px" }, width: { xs: "100%", md: "calc(100% - 40px)", lg: "1460px" }, border: "1px dashed green", borderRadius: "2px", bgcolor: "white", margin: "auto" }}>

                    <Grid container>
                        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                            <Image
                                src="/image.jpg"
                                width={700}
                                height={450}
                                className="zoom-image"
                                style={{
                                    padding: 10,
                                    borderRadius: 20,
                                    maxHeight: 450,
                                    height: "auto",
                                    width: "100%",
                                    objectFit: "cover",
                                    cursor: "pointer",
                                    
                                    // "&:hover": {
                                    //     background: "#efefef"
                                    // },
                                }}

                                alt="Agent picture" />


                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ padding: { xs: "30px 20px", md: "80px 30px" }, textAlign: { md: "left" } }}>
                            <Typography variant="h3" color="initial" sx={{ fontSize: { xs: "2rem", md: "3rem" },width:"100%", maxWidth: { md: "700px", },  fontWeight: "bold" }}>Contact With Our Certified Agent</Typography>
                            <Typography component="p" color="initial" sx={{ width: { xs: "100%", md: "100%", lg: "560px" }, paddingTop: "20px" }}>Luxurious PG and Flats for sale or rent in prime locations worldwide available now.</Typography>
                            <Box sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "center",
                                justifyContent: { xs: "center", md: "flex-start" },
                                gap: "20px",
                                marginTop: "40px"
                            }}>
                                <Button variant="contained" sx={{
                                    width: { xs: "80%", md: "200px" },
                                    height: "60px",
                                    bgcolor: "green",
                                    whiteSpace: "nowrap"
                                }}>
                                    <CallSharpIcon sx={{ margin: "10px" }} />
                                    Make A Call
                                </Button>
                                <Button variant="contained" sx={{
                                    width: { xs: "80%", md: "250px" },
                                    height: "60px",
                                    bgcolor: "navy",
                                    whiteSpace: "nowrap"
                                }}>
                                    <CalendarMonthIcon sx={{ margin: "10px" }} />
                                    Get Appointment
                                </Button>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </Box>


        </>
    )
}

export default Agent




//  <Grid container sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
// <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
// {/* Replace with your actual image component */}
// <Box component="img"
//     src="your-image-source.jpg"
//     alt="Agent"
//     sx={{
//         width: "100%",
//         height: "auto",
//         maxHeight: { md: "460px" },
//         objectFit: "cover"
//     }}
// />
// </Grid>