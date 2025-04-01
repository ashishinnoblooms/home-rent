"use client";
import {
  Email,
  Facebook,
  LinkedIn,
  LocationOn,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Footer() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#0E2E50",
        minHeight: "50vh",
        paddingTop: 10,
        paddingInline: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" color="white" fontWeight="bolder" paddingBlock="15px">
            Get In Touch
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            component="a"
            href="https://www.google.com/maps/place/Innoblooms:+Website+Designing+%7C+Web+Development+%7C+Digital+Marketing+%7C+Software+Development/@28.6227474,77.3932646,17z/data=!3m1!4b1!4m22!1m15!4m14!1m6!1m2!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!2sInnoblooms:+Website+Designing+%7C+Web+Development+%7C+Digital+Marketing+%7C+Software+Development,+Sector+63+A,+Noida,+Uttar+Pradesh!2m2!1d77.3958306!2d28.622817!1m6!1m2!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!2sC-47(SH-120,+Sector+63+A,+Noida,+Chotpur,+Uttar+Pradesh+201307!2m2!1d77.3958306!2d28.622817!3m5!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!8m2!3d28.6227427!4d77.3958395!16s%2Fg%2F11w234mhjf?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <LocationOn />
            <Typography sx={{ color: "rgba(255, 255, 255, 0.5)",  width:{xs:'100%', lg:'70%'}}}>
              C-47(SH-120), Sector 63 A, Noida, Chotpur, Uttar Pradesh 201301
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            component="a"
            href="tel: +91 8272833134"
            sx={{ color: "rgba(255, 255, 255, 0.5)", paddingTop: 1 }}
          >
            <Phone />
            <Typography sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
              (+91) 8979799833
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            component="a"
            href="mailto:jupiterenterprisesho@gmail.com"
            sx={{ color: "rgba(255, 255, 255, 0.5)", paddingTop: 1 }}
          >
            <Email />
            <Typography sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
              info@homerent.co.in
            </Typography>
          </Stack>
          <Box>
            <Box sx={{ pt: 2, display:'flex', gap:1}}>
              <IconButton
                sx={{
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.5)",
                  "&:hover": {
                    background: "white",
                    color: "#00B98E ",
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.5)",
                  "&:hover": {
                    background: "white",
                    color: "#00B98E ",
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.5)",
                  "&:hover": {
                    background: "white",
                    color: "#00B98E ",
                  },
                }}
              >
                <YouTube />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.5)",
                  "&:hover": {
                    background: "white",
                    color: "#00B98E ",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" color="white" fontWeight="bolder" paddingBlock="15px">
            Quick Links
          </Typography>
          <Link href={"www.google.com"}><Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom:'8px'}} display="flex" gap="5px" alignItems="center">
            <ChevronRightIcon/>About Us
          </Typography></Link>
          <Link href={"www.google.com"}><Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom:'8px'}}display="flex" gap="5px" alignItems="center">
          <ChevronRightIcon/>Contact Us
          </Typography></Link>
          <Link href={"www.google.com"}><Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom:'8px'}}display="flex" gap="5px" alignItems="center">
          <ChevronRightIcon/>Our Services
          </Typography></Link>
          <Link href={"www.google.com"}><Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom:'8px'}}display="flex" gap="5px" alignItems="center">
          <ChevronRightIcon/>Privacy Policy
          </Typography></Link>
          <Link href={"www.google.com"}><Typography sx={{ color: "rgba(255, 255, 255, 0.5)" }}display="flex" gap="5px" alignItems="center">
          <ChevronRightIcon/>Terms & Conditions
          </Typography></Link>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" color="white" fontWeight="bolder" paddingBlock="15px">
            Newsletter
          </Typography>
          <Typography variant="body2" color="white" gutterBottom>
              To get latest update subscribe to our updates
            </Typography>
            <Box sx={{ position: 'relative', maxWidth: 400, border:'1px solid white', borderRadius:"8px" }}>
              <TextField
                fullWidth
                placeholder="Your email"
                variant="outlined"
                size="small"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '& .MuiOutlinedInput-root': {
                    color: 'white ',
                    padding:'8px 90px 8px 5px'
                  },
                }}
              />
              <Button
                variant="contained"
                size="small"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 8,
                  padding:'3px 6px',
                  transform: 'translateY(-50%)',
                  color:'white',
                  backgroundColor:'#00B98E ',
                  fontSize:'1.1rem'
                }}
              >
                SignUp
              </Button>
            </Box>
        </Grid>
      </Grid>
      <Divider sx={{ bgcolor: "primary.light", marginTop: 2 }} />
      <Grid container paddingBlock={3} justifyContent="space-between" >
        <Grid item xs={12} md={6}>
        <Typography color="white" display="flex" gap="5px" alignItems="center">
         <CopyrightIcon sx={{fontSize:"1.2rem"}}/><Link href="#">Homerent</Link>, All Right Reserved. Designed By <Link href="https://innoblooms.com/index.html" target="_blank">Innoblooms</Link> 
        </Typography>
        </Grid>
        <Grid item xs={12} md={6} >
            <Box sx={{display:'flex', gap:"30px", marginLeft:"auto"}}>
              <Typography color="white"><Link href="#"></Link>Home</Typography>
              <Typography color="white"><Link href="#"></Link>Cookies</Typography>
              <Typography color="white"><Link href="#"></Link>Help</Typography>
              <Typography color="white"><Link href="#"></Link>FAQ</Typography>
            </Box>
        </Grid>
      </Grid>
    </Container>
  );
}


