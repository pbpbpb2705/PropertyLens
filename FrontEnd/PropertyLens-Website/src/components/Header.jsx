import React from "react";
import { AppBar, Toolbar, Container, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/system";

// Import logo
import Logo from "../assets/img/PropertyLens-Logo.png";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  boxShadow: "none",
  borderBottom: "1px solid #e5e7eb",
});

const LogoLink = styled(RouterLink)({
  display: "flex",
  alignItems: "center",
});

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  background: "linear-gradient(45deg, #6d28d9, #b389ff)",
  color: "#fff",
  fontWeight: 600,
  padding: theme.spacing(1, 4),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0 4px 14px rgba(109, 40, 217, 0.4)",
  transition: "transform 0.2s ease",
  marginLeft: theme.spacing(2),
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 6px 16px rgba(109, 40, 217, 0.6)",
  },
}));

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            py: 2,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <LogoLink to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "auto", height: "40px" }}
            />
          </LogoLink>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
            }}
          >
            <StyledButton component={RouterLink} to="/about">
              About Us
            </StyledButton>
            <StyledButton component={RouterLink} to="/predict">
              Predict Price
            </StyledButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
