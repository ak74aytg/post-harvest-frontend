import React from "react";
import {
  Container,
  Typography,
  Link,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const categories = [
  {
    name: "Educational Materials",
    resources: [
      {
        title: "Introduction to Grain Postharvest Processes",
        description:
          "A comprehensive guide to understanding the processes involved after harvesting grains, including drying, storage, and transportation.",
        url: "https://example.com/introduction",
      },
      {
        title: "Best Practices for Grain Storage",
        description:
          "Learn about modern and traditional grain storage techniques to minimize losses and maintain quality.",
        url: "https://example.com/storage",
      },
    ],
  },
  {
    name: "Practical Guides",
    resources: [
      {
        title: "Daily Grain Management Checklist",
        description:
          "A daily checklist for farmers and grain storage managers to follow to ensure optimal grain quality.",
        url: "https://example.com/checklist",
      },
      {
        title: "Emergency Procedures for Grain Storage Facilities",
        description:
          "Critical emergency procedures to handle common crises such as pest outbreaks or water damage in grain storage facilities.",
        url: "https://example.com/emergency",
      },
    ],
  },
  {
    name: "Scientific Research",
    resources: [
      {
        title: "Recent Advances in Grain Preservation Technology",
        description:
          "Explore the latest research in grain preservation technologies and their practical applications.",
        url: "https://example.com/research",
      },
    ],
  },
  {
    name: "Helpful Tools",
    resources: [
      {
        title: "Grain Moisture Calculator",
        description:
          "Use this online tool to quickly determine the moisture content of your grain, which is crucial for storage decisions.",
        url: "https://example.com/moisture-calculator",
      },
    ],
  },
];




const Resources = () => {
  return (
    <Container maxWidth="lg" className="my-12">
      <Typography
        variant="h3"
        component="h1"
        className="mb-6 font-bold text-center"
      >
        Helpful Resources
      </Typography>
      {categories.map((category, catIndex) => (
        <div key={catIndex} className="mb-8">
          <Typography variant="h5" className="mb-4 font-semibold">
            {category.name}
          </Typography>
          <Paper elevation={3} className="p-4">
            <List>
              {category.resources.map((resource, resIndex) => (
                <React.Fragment key={resIndex}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={
                        <Link
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg"
                        >
                          {resource.title}
                        </Link>
                      }
                      secondary={
                        <Typography variant="body2" color="text.secondary">
                          {resource.description}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {resIndex < category.resources.length - 1 && (
                    <Divider variant="inset" component="li" />
                  )}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </div>
      ))}
    </Container>
  );
};

export default Resources;
