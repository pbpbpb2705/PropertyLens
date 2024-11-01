// import React from 'react';
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

// import image
import Image from "../assets/img/house-banner.png";

// import components
import Search from "../components/Search";

const BannerSection = styled("section")(({ theme }) => ({
  height: "640px",
  position: "relative",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("xl")]: {
    marginBottom: theme.spacing(12),
  },
}));

const BackgroundImage = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${Image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 1,
});

const ContentContainer = styled(Container)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  zIndex: 2,
}));

const TextContent = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: "#fff", // White text for better visibility
  textShadow: "2px 2px 4px rgba(0,0,0,0.5)", // Text shadow for better readability
  [theme.breakpoints.up("lg")]: {
    textAlign: "left",
    paddingLeft: theme.spacing(4),
  },
  [theme.breakpoints.up("xl")]: {
    paddingLeft: "135px",
  },
}));

const BannerTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.25rem",
  fontWeight: 600,
  lineHeight: 1.2,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.625rem",
  },
}));

const RentText = styled("span")({
  color: "#7c3aed", // Violet-700
});

const Banner = () => {
  return (
    <BannerSection>
      <BackgroundImage />
      <ContentContainer maxWidth="xl">
        <TextContent>
          <BannerTitle variant="h1">
            <RentText>Rent</RentText> Your Dream <br />
            House With Us.
          </BannerTitle>
          <Typography variant="body1" sx={{ maxWidth: "480px", mb: 4 }}>
            Description...
          </Typography>
        </TextContent>
      </ContentContainer>
      <Search />
    </BannerSection>
  );
};

export default Banner;
