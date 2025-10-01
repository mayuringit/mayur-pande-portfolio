import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaCubes,
} from "react-icons/fa";
import { SiRedux, SiMongodb } from "react-icons/si";
import CommonCard from "../Containers/SectionWrapper";
import { useThemeContext } from "../ThemeContext";
import { useTheme } from "@mui/material/styles";

const skills = [
  { icon: <FaReact size={40} color="#61DBFB" />, title: "React.js" },
  { icon: <FaNodeJs size={40} color="#68A063" />, title: "Node.js" },
  { icon: <FaJs size={40} color="#F7DF1E" />, title: "JavaScript (ES6+)" },
  { icon: <FaHtml5 size={40} color="#E34F26" />, title: "HTML5" },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, title: "CSS3" },
  { icon: <SiRedux size={40} color="#764ABC" />, title: "Redux" },
  { icon: <SiMongodb size={40} color="#4DB33D" />, title: "MongoDB" },
  { icon: <FaDatabase size={40} color="#f29111" />, title: "SQL" },
  { icon: <FaCubes size={40} color="#FF9900" />, title: "Microservices Architecture" },
];

export default function Skills() {
  const { themeName } = useThemeContext();
  const theme = useTheme();

  // Theme-based card colors
  const cardStyles = {
    light: {
      bg: "#fff",
      textPrimary: theme.palette.text.primary,
      textSecondary: theme.palette.text.secondary,
    },
    dark: { bg: "#1e1e1e", textPrimary: "#fff", textSecondary: "#ccc" },
    corporate: { bg: "#f5f5f5", textPrimary: "#0d47a1", textSecondary: "#333" },
    fun: { bg: "#fff3e0", textPrimary: "#ff4081", textSecondary: "#7c4dff" },
  };
  const currentCard = cardStyles[themeName] || cardStyles.light;

  // Fun theme skill descriptions with emojis
  const skillDescriptionsFun = {
    "React.js":
      "Built dynamic UIs 🚀 with React.js, hooks, and reusable components 🧩.",
    "Node.js":
      "Created REST APIs and backend magic ✨ using Node.js & Express.",
    "JavaScript (ES6+)":
      "Mastered ES6+ features ⚡, async programming, and slick frontend tricks.",
    HTML5: "Crafted semantic & SEO-friendly markup 🏷️ for awesome web pages.",
    CSS3: "Styled apps like a pro 🎨 using Flexbox, Grid & responsive design.",
    Redux: "Managed app state like a boss 📦 in large React projects.",
    MongoDB: "Basic experience with NoSQL databases 🗄️, queries & collections.",
    SQL: "Basic knowledge of relational databases 🗃️, queries & data management.",
    "Microservices Architecture": "Loosely coupled, independently deployable services for scalable and maintainable systems.",
  };

  // Default skill descriptions
  const skillDescriptionsDefault = {
    "React.js":
      "2+ years building scalable UIs with React.js, hooks, and component-driven architecture.",
    "Node.js":
      "Hands-on experience creating REST APIs and backend services using Node.js and Express.",
    "JavaScript (ES6+)":
      "Strong knowledge of ES6+ features, async programming, and modern frontend development.",
    HTML5:
      "Built semantic, accessible, and SEO-friendly structures for web applications.",
    CSS3: "Expert in responsive design, Flexbox, Grid, and styling frameworks.",
    Redux:
      "Implemented scalable state management patterns in large React applications.",
    MongoDB:
      "Basic experience working with NoSQL databases and performing queries.",
    SQL: "Basic knowledge of relational databases and writing queries.",
    "Microservices Architecture": "Loosely coupled, independently deployable services for scalable and maintainable systems.",
  };

  return (
    <section id="skills" className="py-16">
      <CommonCard title="Skills">
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  height: 200,
                  maxWidth: 320, // instead of fixed width
                  width: "100%", // responsive
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2,
                  textAlign: "center",
                  borderRadius: 2,
                  backgroundColor: currentCard.bg,
                  transition: "all 0.3s ease",
                  mx: "auto", // center horizontally
                }}
                className="shadow-md hover:shadow-lg transition"
              >
                <CardContent sx={{ p: 0 }}>
                  {React.cloneElement(skill.icon, {
                    style:
                      themeName === "fun"
                        ? { filter: "drop-shadow(0 0 6px #FF6F00)" }
                        : {},
                  })}
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 1,
                      fontWeight: "bold",
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      color: currentCard.textPrimary,
                    }}
                  >
                    {skill.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      color: currentCard.textSecondary,
                    }}
                  >
                    {themeName === "fun"
                      ? skillDescriptionsFun[skill.title]
                      : skillDescriptionsDefault[skill.title]}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CommonCard>
    </section>
  );
}