import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useThemeContext } from "../ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { themeName, setThemeName } = useThemeContext();

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const menuItems = [
    { text: "About", id: "about" },
    { text: "Skills", id: "skills" },
    { text: "Experience", id: "experience" },
    { text: "Projects", id: "projects" },
    { text: "Education", id: "education" },
    { text: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" color="default" elevation={2}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left Side: Drawer button + Name */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" fontWeight="bold">
              Mayur Pande
            </Typography>
          </Box>

          {/* Right Side: Theme Selector */}
          <Select
            value={themeName}
            onChange={(e) => setThemeName(e.target.value)}
            size="small"
            sx={{
              mr: 1,
              minWidth: 120,
              fontWeight: "bold",
            }}
          >
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="corporate">Corporate</MenuItem>
            <MenuItem value="fun">Fun</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => handleScroll(item.id)}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}