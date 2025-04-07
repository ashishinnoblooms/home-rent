import { Label } from "@mui/icons-material";
import { Box, Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
// const[selected,setSelected]=useState("option1")

const property = [
  { label: "Property Type" },
  { label: "1 RK" },
  { label: "2 BHK" },
  { label: "Girls PG" },
  { label: "Boys PG" },
  { label: "Unisex PG" },
];
const select = [
  { label: "Select" },
  { label: "type" },
  { label: "luxury" },
  { label: "non-luxury" },
];
const select1 = [
  { label: "food" },
  { labe: "with food" },
  { label: "without food" },
];
const furnished = [
  { label: "Select" },
  { label: "furnishing" },
  { label: "furnished" },
  { label: "semi-furnished" },
  { label: "unfurnished" },
];
const location = [
  { label: "Location" },
  { label: "Noida" },
  { label: "Delhi" },
  { label: "Gurgoan" },
];
const sector = [
  { label: "Sector" },
  { label: "Sector 1" },
  { label: "Sector 2" },
  { label: "Sector 3" },
];
export default function PropertyList() {
  return (
    <Grid
      container
      spacing={3}
      sx={{ bgcolor: "#00B98E", padding: 5, marginBottom: "60px" }}
    >
      <Grid size={{ xs: 12, md: 1.5 }} sx={{ mb: { xs: 1, md: 0 } }}>
        <TextField
          sx={{
            width: "100%",
            maxWidth: { md: 200 },
            marginLeft: { xs: "auto" },
          }}
          InputProps={{
            style: {
              borderRadius: "5px",
              backgroundColor: "white",
              color: "gray",
            },
          }}
          select
          defaultValue="Property Type"
        >
          {property.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 6, md: 1.5 }} sx={{ mb: { xs: 1, md: 0 } }}>
        <TextField
          sx={{
            width: "100%",
            maxWidth: { md: 200 },
            marginLeft: { xs: "auto" },
          }}
          InputProps={{
            style: {
              borderRadius: "5px",
              backgroundColor: "white",
              color: "gray",
            },
          }}
          select
          defaultValue="Select"
        >
          {select.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid size={{ xs: 6, md: 1.5 }} sx={{ mb: { xs: 1, md: 0 } }}>
        <TextField
          sx={{
            width: "100%",
            maxWidth: { md: 200 },
            marginLeft: { xs: "auto" },
          }}
          InputProps={{
            style: {
              borderRadius: "5px",
              backgroundColor: "white",
              color: "gray",
            },
          }}
          select
          defaultValue="Select"
        >
          {furnished.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 1.5 }} sx={{ mb: { xs: 1, md: 0 } }}>
        <TextField
          sx={{
            width: "100%",
            maxWidth: { md: 200 },
            marginLeft: { xs: "auto" },
          }}
          InputProps={{
            style: {
              borderRadius: "5px",
              backgroundColor: "white",
              color: "gray",
            },
          }}
          select
          defaultValue="Location"
        >
          {location.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 1.5 }} sx={{ mb: { xs: 1, md: 0 } }}>
        <TextField
          sx={{
            width: "100%",
            maxWidth: { md: 200 },
            marginLeft: { xs: "auto" },
          }}
          InputProps={{
            style: {
              borderRadius: "5px",
              backgroundColor: "white",
              color: "gray",
            },
          }}
          select
          defaultValue="Sector"
        >
          {sector.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 2 }} sx={{}}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            MaxWidth: { md: 200 },
            height: "55px",
            bgcolor: "black",
            color: "white",
            textTransform: "capitalize",
            ml: { md: 10 },
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>

    //     {/* Location */}
    //     <Grid item xs={12} sm={6} md={2} sx={{ mb: { xs: 1, md: 0 } }}>
    //         <TextField
    //             sx={{
    //                 width: "100%",
    //                 maxWidth: { md: "200px" },
    //             }}
    //             InputProps={{
    //                 style: {
    //                     borderRadius: "5px",
    //                     backgroundColor: "white",
    //                     color: "gray",
    //                 }
    //             }}
    //             select
    //             defaultValue="Location"
    //         >
    //             {location.map((option) => (
    //                 <MenuItem key={option.label} value={option.label}>
    //                     {option.label}
    //                 </MenuItem>
    //             ))}
    //         </TextField>
    //     </Grid>

    //     {/* Search Button */}
    //     <Grid item xs={12} sm={6} md={2}>
    //         <Button
    //             variant="contained"
    //             sx={{
    //                 width: "100%",
    //                 maxWidth: { md: "200px" },
    //                 height: "55px",
    //                 bgcolor: "black",
    //                 color: "white",
    //                 textTransform: "capitalize",
    //                 ml: { md: "10px" }
    //             }}
    //         >
    //             Search
    //         </Button>
    //     </Grid>
    // </Grid>
  );
}
