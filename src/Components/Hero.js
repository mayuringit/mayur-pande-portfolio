import {
  Box,
  Typography,
  // Button,
  Container,
  Grid,
  Avatar,
} from "@mui/material";
import { useThemeContext } from "../ThemeContext";
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const { themeName } = useThemeContext();
  const theme = useTheme();

  const heroText = {
    light: {
      title: "Hi, I’m Mayur",
      subtitle: "Web Developer | Software Developer",
      description:
        "An enthusiastic developer who loves building clean, efficient, and scalable web applications. If you’re curious, let’s connect and create better solutions together.",
      photo: "/lightPhoto.jpeg",
    },
    dark: {
      title: "Hi, I’m Mayur",
      subtitle: "Web Developer | Software Developer",
      description:
        "An enthusiastic developer who loves building clean, efficient, and scalable web applications. If you’re curious, let’s connect and create better solutions together.",
      photo: "/Photo.jpeg",
    },
    corporate: {
      title: "Hello, I’m Mayur Pande",
      subtitle: "Professional Web Developer | Software Developer",
      description:
        "A results-driven web developer with expertise in React.js, delivering high-quality, scalable, and maintainable applications. Passionate about creating robust solutions that drive business success.",
      photo: "/Photo.jpeg",
    },
    fun: {
      title: "Hey there! I’m Mayur 😎",
      subtitle: "React Wizard | Frontend Magician ✨",
      description:
        "A passionate developer who loves crafting awesome web apps 🚀. Fun-loving, creative, and always experimenting with new ideas 💡. Let’s build something amazing together! 🎉",
      photo: "/FunPhoto.jpeg",
    },
  };

  const { title, subtitle, description, photo } =
    heroText[themeName] || heroText.light;

  // Define button styles per theme
  // const buttonStyles = {
  //   light: { bgcolor: "#FF8C42", color: "white" },
  //   dark: { bgcolor: "#90caf9", color: "black" },
  //   corporate: { bgcolor: "#0d47a1", color: "white" },
  //   fun: {
  //     bgcolor: "linear-gradient(45deg, #FF6F00, #1E88E5, #E53935, #FDD835)",
  //     color: "white",
  //   },
  // };

  // const currentButtonStyle = buttonStyles[themeName] || buttonStyles.light;

  return (
    <Box
      id="hero"
      sx={{
        minHeight: { xs: "auto", md: "400px" }, // automatic height on mobile
        display: "flex",
        alignItems: { xs: "flex-start", md: "center" },
        pt: { xs: "80px", md: "60px" }, // top padding for mobile & laptop
        backgroundColor: theme.palette.background.default,
        transition: "all 0.3s ease",
        mx: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
        >
          {/* Left: Profile Photo */}
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={{ xs: 3, md: 0 }}
          >
            <Avatar
              alt="Mayur Pande"
              src={process.env.PUBLIC_URL + photo}
              sx={{
                width: { xs: 180, sm: 220, md: 280 },
                height: { xs: 180, sm: 220, md: 280 },
                boxShadow: 4,
                border: "4px solid white",
                transition: "all 0.3s ease",
              }}
            />
          </Grid>

          {/* Right: Text Content */}
          <Grid
            item
            xs={12}
            md={8}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              gutterBottom
              color={theme.palette.text.primary}
            >
              {title}
            </Typography>

            <Typography
              variant="h6"
              color={theme.palette.text.secondary}
              gutterBottom
            >
              {subtitle}
            </Typography>

            <Typography
              variant="body1"
              color={theme.palette.text.secondary}
              sx={{
                mt: 2,
                fontSize: "1.1rem",
                maxWidth: { xs: "100%", md: 600 },
                mx: { xs: "auto", md: 0 },
              }}
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}