import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Chip } from "@mui/material";


export default function BasicCard(props) {
  return (
    <Card className="text-center">
      <div>
        <Typography level="title-lg">{props.name}</Typography>
      </div>
      <AspectRatio
        sx={{ border: "2px solid gray", "border-radius": "15px" }}
        minHeight="200px"
        maxHeight="200px"
      >
        <img src={props.image} srcSet={props.image} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent orientation="vertical">
        <div>
          <Typography level="body-xs">{props.content}</Typography>
        </div>
      </CardContent>
      <div className="self-baseline">
        <Chip
          className="bottom-0.5"
          sx={{ cursor: "pointer" }}
          color="success"
          label="Learn more &nbsp;&nbsp; &rarr;"
        />
      </div>
    </Card>
  );
}
