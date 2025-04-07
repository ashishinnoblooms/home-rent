import { Box, Grid, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

export default function ImageElements() {
    return (
        <Grid container spacing={3} sx={{ marginBottom: "20px", paddingBottom: "20px", display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px"}}>
            <Grid
                size={{ xs: 12, md: 2, lg: 2 }} 
                sx={{
                    height: { xs: "auto", md: "400px" },
                    // maxWidth:{md:"550px"},
                    // width:"100%",
                    width: { xs: "90%", sm: "80%", md: "400px", },
                    bgcolor: "#EFFDF5",
                    borderRadius: "10px",
                    padding: "25px",
                    position: "relative",

                }}>

                <Box sx={{
                    height: { xs: "auto", md: "350px" },
                    maxWidth:{md:"550px"},
                    width:"100%",
                    // width: { xs: "90%", sm: "80%", md: "350px", },
                    border: "1px dashed green",
                    borderRadius: "10px",
                    padding: "30px",
                    alignItems: "start",
                    position: "relative",
                    bgcolor: "white",
                    // boxShadow:"0 0 20px rgb(88, 249, 157)"
                }}>
                    <Image src={"/client1.jpg"} height={120} width={120} style={{
                        borderRadius: "50%",
                        marginBottom: "30px",
                        position: "absolute",
                        left: "3%",
                        top: "2px",
                        //   zIndex:30,
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

            </Grid>
        </Grid>

    )
}
