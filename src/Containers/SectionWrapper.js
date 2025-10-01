// src/Components/CommonCard.js
import { Box, Typography, Paper, IconButton, Collapse } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useThemeContext } from "../ThemeContext";
import { useTheme } from "@mui/material/styles";

export default function CommonCard({ title, children }) {
  const { themeName } = useThemeContext();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen(!open);

  // Define header colors per theme
  const headerColors = {
    light: "#FF8C42",
    dark: "#90caf9",
    corporate: "#0d47a1",
    fun: "linear-gradient(45deg, #FF6F00, #1E88E5, #E53935, #FDD835)",
  };

  // Define content background per theme
  const contentBg = {
    light: theme.palette.grey[50],
    dark: theme.palette.background.default,
    corporate: "#f5f5f5",
    fun: "#fff3e0",
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        my: 6,
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: headerColors[themeName] || headerColors.light,
          color: "white",
          py: 2,
          px: 3,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <IconButton
          onClick={toggleOpen}
          sx={{
            color: "white",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>

      {/* Collapsible Content */}
      <Collapse in={open}>
        <Box
          sx={{
            flex: 1,
            p: 3,
            maxHeight: 500, // limit height
            overflowY: "auto", // make scrollable
            bgcolor: contentBg[themeName] || contentBg.light,
          }}
        >
          {children}
        </Box>
      </Collapse>
    </Paper>
  );
}