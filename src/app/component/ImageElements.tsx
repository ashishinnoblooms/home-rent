import { Box, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

// const clientData: any = [
//     { src: "/client1.jpg", alt: "client1", name: "JAZIYA", rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} />, description: " I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay." },
//     { src: "/client2.jpg", alt: "client2", name: "FARZIYA", rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} />, description: "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay." },
//     { src: "/client3.jpg", alt: "client3", name: "DANZI", rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} />, description: "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay." },
//     { src: "/client4.jpg", alt: "client4", name: "MENK", rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} />, description: "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay." },
//     { src: "/client4.jpg", alt: "client4", name: "MENK", rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} />, description: "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay." },
//     { src: "/client4.jpg", alt: "client4", name: "MENK", rating: <Rating name="half-rating" defaultValue={4.5} precision={0.5} />, description: "I had a wonderful experience staying at this PG. The rooms were clean and spacious, and the staff was very friendly and helpful. The location was also very convenient, with easy access to public transportation and amenities. I would definitely recommend this PG to anyone looking for a comfortable and affordable place to stay." },
// ]


export default function ImageElements(props:any) {
    return (
            <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginBottom: "30px", padding: "6px", }}>
                {/* {clientData.map((item: any, index: any) => ( */}
                    <Box sx={{ minWidth: '350px', border: '9px solid #EFFDF5', padding: '10px', borderRadius: "20px" }}>
                        <Box>
                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "20px", }}>
                                <Box sx={{ width: '200px', height: '100px', display: "flex", justifyContent: "center", alignItems: "center", }}
                                >
                                    <Image
                                        src={props.src}
                                        height={70}
                                        width={100}
                                        style={{ borderRadius: "10%", border: "2px solid #EFFDF5", objectFit: 'cover' }}
                                        alt={props.alt}

                                    // layout="responsive"
                                    />
                                </Box>
                                <Typography>{props.name}</Typography>

                                {/* <Stack spacing={1} > */}
                                {props.rating}
                                {/* </Stack> */}

                            </Box>

                            <Box sx={{ textAlign: "justify", }}>
                                {props.description}
                            </Box>
                        </Box>




                    </Box>
                {/* ))} */}
            </Container>

    );
}
