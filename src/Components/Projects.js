// src/Components/Projects.js
import {
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Card,
} from "@mui/material";
import CommonCard from "../Containers/SectionWrapper";
import { useThemeContext } from "../ThemeContext";
import { useTheme } from "@mui/material/styles";

export default function Projects() {
  const { themeName } = useThemeContext();
  const theme = useTheme();

  const projects = [
    {
      title: "Ping Pong",
      description:
        "A fully functional Ping Pong game with player vs player support.",
      features: [
        "Interactive ping-pong board with draggable pieces",
        "Move validation with check detection",
        "Reset and restart functionality",
      ],
      demo: "https://github.com/mayuringit/pong-game",
      github: "#",
    },
    {
      title: "Coming soon",
      description: "working on them..",
      features: [
        "scalable",
        "initiative",
        "enjoying",
      ],
      demo: "https://github.com/mayuringit",
      github: "#",
    }
  ];

  // Theme-based header and button text
  const headerTextMap = {
    light: "Personal Projects",
    dark: "Personal Projects",
    corporate: "Projects",
    fun: "Games I Built",
  };

  const buttonTextMap = {
    light: "Try Game",
    dark: "Try Game",
    corporate: "Launch Game",
    fun: "Play Now",
  };

  const buttonStyles = {
    light: { bg: theme.palette.primary.main, color: "white" },
    dark: { bg: theme.palette.primary.main, color: "black" },
    corporate: { bg: "#0d47a1", color: "white" },
    fun: {
      bg: "linear-gradient(45deg, #FF6F00, #1E88E5, #E53935, #FDD835)",
      color: "white",
    },
  };

  const { bg: btnBg, color: btnColor } =
    buttonStyles[themeName] || buttonStyles.light;

  // Add fun emojis if theme is fun
  const projectsForTheme = projects.map((project) => {
    if (themeName === "fun") {
      return {
        ...project,
        description: project.description + " 🎮✨",
        features: project.features.map((f) => f + " 🚀"),
      };
    }
    return project;
  });

  return (
    <section id="projects" className="py-16">
      <CommonCard title={headerTextMap[themeName] || "Projects"}>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            padding: 1,
            gap: 2,
            "&::-webkit-scrollbar": { height: "8px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "4px",
            },
          }}
        >
          {" "}
          {projectsForTheme.map((project, idx) => (
            <Card
              sx={{
                border: "1px solid #ddd",
                borderRadius: 2,
                p: 2,
                my: 2,
                height: "250px",
                minWidth: "300px",
                display: "flex",
                flexDirection: "column", // stack content vertically
                "&:hover": {
                  boxShadow: 3,
                  transform: "scale(1.02)",
                  transition: "0.3s",
                },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: theme.palette.text.primary }}
              >
                {project.title}
              </Typography>

              <Typography
                variant="body2"
                color={theme.palette.text.secondary}
                paragraph
              >
                {project.description}
              </Typography>

              <List dense sx={{ pl: 2 }}>
                {project.features.map((feat, i) => (
                  <ListItem key={i} sx={{ py: 0 }}>
                    <ListItemText primary={`• ${feat}`} />
                  </ListItem>
                ))}
              </List>

              {/* Push buttons to bottom */}
              <Box sx={{ mt: "auto" }}>
                {project.github !== "#" && (
                  <Button
                    size="small"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mr: 1,
                      background: btnBg,
                      color: btnColor,
                      "&:hover": { opacity: 0.9, background: btnBg },
                    }}
                  >
                    GitHub
                  </Button>
                )}
                <Button
                  size="small"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: btnBg,
                    color: btnColor,
                    "&:hover": { opacity: 0.9, background: btnBg },
                  }}
                >
                  {buttonTextMap[themeName] || "Live Demo"}
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      </CommonCard>
    </section>
  );
}