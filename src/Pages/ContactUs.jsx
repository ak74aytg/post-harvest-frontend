import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
} from "@mui/material";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can integrate backend API to send the form data
    console.log("Form submitted");
  };

  return (
    <Container maxWidth="md" className="my-12">
      <Typography
        variant="h4"
        component="h1"
        className="mb-6 text-center font-bold"
      >
        Contact Us
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="p-6">
            <Typography variant="h6" className="mb-4">
              Send Us a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Your Email"
                type="email"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                required
              />
              <Box textAlign="center" mt={2}>
                <Button type="submit" variant="contained" color="primary">
                  Send Message
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="p-6">
            <Typography variant="h6" className="mb-4">
              Our Address
            </Typography>
            <Typography>123 Grain Blvd, Harvest City, YZ 12345</Typography>
            <Typography>Phone: (123) 456-7890</Typography>
            <Typography>Email: info@grainpostharvest.com</Typography>
            <Box mt={4}>
              <Typography variant="h6" className="mb-2">
                Follow Us
              </Typography>
              {/* Here you can add links to social media profiles */}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
