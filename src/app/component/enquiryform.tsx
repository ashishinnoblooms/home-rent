import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function Enquiryform() {
  const [select, setSelect] = React.useState({
    title: "",
    fname: "",
    lname: "",
    email: "",
    occupation: "",
    otherOccupation: "",
    enquiryType: "",

    enquiryDetails: "",
  });

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setSelect((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Grid container sx={{ backgroundColor: "#EFFDF5", padding: 5 }}>
      <Grid size={{ xs: 12, sm: 10, md: 8 }} margin="0 auto">
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{ color: "#0E2E50", paddingBlock: 2 }}
        >
          Get in Touch with Us
        </Typography>
        <Typography
          variant="body1"
          textAlign={"justify"}
          sx={{ color: "#0E2E50", paddingBottom: 3 }}
        >
          Looking for detailed information about our services or need to share
          your thoughts with us? Fill out this enquiry form to connect! Whether
          it's feedback, complaints, or questions, we're here to listen and
          help. Once we receive your submission, our team will thoroughly review
          it and reach out to you promptly—either via email or phone. Your voice
          matters to us!
        </Typography>
      </Grid>

      <Grid
        container
        size={{ xs: 12, sm: 10, md: 8 }}
        margin="0 auto"
        spacing={2}
      >
        <Grid size={{ xs: 12, sm: 2, md: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="title">Title</InputLabel>
            <Select
              labelId="title"
              name="title"
              value={select.title}
              label="Title"
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="miss">Miss</MenuItem>
              <MenuItem value="mrs">Mrs</MenuItem>
              <MenuItem value="ms">Ms</MenuItem>
              <MenuItem value="mr">Mr</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <TextField
            name="name"
            placeholder="Enter Your First Name"
            variant="outlined"
            size="medium"
            value={select.fname}
            onChange={(e: any) => handleChange(e)}
            label="First Name "
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <TextField
            name="name"
            placeholder="Enter Your Last Name"
            variant="outlined"
            size="medium"
            value={select.lname}
            onChange={(e: any) => handleChange(e)}
            label="Last Name"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <TextField
            name="email"
            placeholder="Enter Your Email"
            variant="outlined"
            size="medium"
            value={select.email}
            onChange={(e: any) => handleChange(e)}
            label="Your Email"
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormControl fullWidth>
            <InputLabel id="occupation">Occupation</InputLabel>
            <Select
              labelId="occupation"
              name="occupation"
              value={select.occupation}
              label="Occupation"
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="teacher">Teacher</MenuItem>
              <MenuItem value="engineer">Engineer</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {select.occupation === "other" && (
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <TextField
              name="otherOccupation"
              placeholder="Enter Your Occupation"
              variant="outlined"
              size="medium"
              value={select.otherOccupation}
              onChange={(e: any) => handleChange(e)}
              label="Your Occupation"
              fullWidth
            />
          </Grid>
        )}
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormControl fullWidth>
            <InputLabel id="enquiry-type">Enquiry Type</InputLabel>
            <Select
              labelId="enquiry-type"
              name="enquiryType"
              value={select.enquiryType}
              label="Enquiry Type"
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="buy">Buy</MenuItem>
              <MenuItem value="rent">Rent</MenuItem>
              <MenuItem value="complain">Complain</MenuItem>
              <MenuItem value="suggestion">Suggestion</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <TextField
            name="enquiryDetails"
            placeholder="Enter your details of inquiry here"
            variant="outlined"
            size="medium"
            value={select.enquiryDetails}
            onChange={(e: any) => handleChange(e)}
            label="Enquiry Details"
            multiline
            rows={8}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <Button
            // onClick={handleSubmit}
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              mt: 1,
              mb: 1,
              backgroundColor: "#00b98e",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Submit Enquiry
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
