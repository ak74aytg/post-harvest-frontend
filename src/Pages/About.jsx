import React from "react";
import { Container, Typography, Paper, Grid, Avatar } from "@mui/material";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO",
    bio: "With over 10 years in grain management, Jane leads our team with deep industry insights.",
    avatar: "/path/to/jane.jpg",
  },
  {
    name: "John Smith",
    role: "Lead Agronomist",
    bio: "John specializes in sustainable farming practices and grain quality improvement.",
    avatar: "/path/to/john.jpg",
  },
  {
    name: "Emily White",
    role: "Operations Manager",
    bio: "Emily ensures our operations are smooth and efficient, focusing on post-harvest processes.",
    avatar: "/path/to/emily.jpg",
  },
];

const About = () => {
  return (
    <Container maxWidth="lg" className="my-12">
      <Typography
        variant="h4"
        component="h1"
        className="mb-6 text-center font-bold"
      >
        About Us
      </Typography>
      <Paper elevation={3} className="p-6 mb-6">
        <Typography variant="h5" component="h2" className="mb-4">
          Our Mission
        </Typography>
        <Typography paragraph>
          We are committed to improving grain postharvest processes through
          research, innovative solutions, and sharing knowledge to enhance food
          security and reduce losses.
        </Typography>
        <Typography variant="h5" component="h2" className="mb-4">
          Our Vision
        </Typography>
        <Typography paragraph>
          To be the leading resource and advocate for postharvest grain
          management globally, enhancing the sustainability and efficiency of
          food production.
        </Typography>
        <Typography variant="h5" component="h2" className="mb-4">
          Core Values
        </Typography>
        <Typography paragraph>
          Integrity, Innovation, and Inclusivity are the core values that guide
          our operations and our approach to solving global postharvest
          challenges.
        </Typography>
        <Typography variant="h5" component="h2" className="mb-4">
          History
        </Typography>
        <Typography paragraph>
          Founded in 2005, we have grown from a small consultancy to a global
          leader in postharvest grain management solutions, collaborating with
          international agricultural organizations and local farmers alike.
        </Typography>
      </Paper>
      <Typography variant="h5" component="h2" className="mb-4">
        Meet Our Team
      </Typography>
      <Grid container spacing={4} className="mb-6">
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <Avatar
              src={member.avatar}
              alt={member.name}
              sx={{ width: 120, height: 120, margin: "auto" }}
            />
            <Typography variant="h6" className="mt-2 text-center">
              {member.name}
            </Typography>
            <Typography className="text-center">{member.role}</Typography>
            <Typography className="text-center mt-1" variant="body2">
              {member.bio}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Paper elevation={3} className="p-6">
        <Typography variant="h5" component="h2" className="mb-4">
          Achievements & Impact
        </Typography>
        <Typography paragraph>
          Over the past decade, our innovative approaches have contributed to a
          30% reduction in postharvest losses among our partner organizations in
          Asia and Africa. We have been recognized with numerous awards for our
          work in sustainability and technology.
        </Typography>
        <Typography variant="h5" component="h2" className="mb-4">
          Testimonials
        </Typography>
        <Typography paragraph>
          "Thanks to their expertise, we've seen significant improvements in
          grain quality and reduction in waste." - Client A from Ethiopia
        </Typography>
        <Typography paragraph>
          "Their training and resources have transformed how we manage our
          harvests." - Partner B from India
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
