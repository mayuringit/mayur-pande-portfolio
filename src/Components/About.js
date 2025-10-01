// src/Components/AboutMe.js
import { Typography, Grid, Button } from "@mui/material";
import CommonCard from "../Containers/SectionWrapper";
import { useThemeContext } from "../ThemeContext";
import { useTheme } from "@mui/material/styles";

export default function AboutMe() {
  const { themeName } = useThemeContext();
  const theme = useTheme();

  // Define text per theme
  const aboutText = {
    light: {
      para1:
        "Frontend-focused Full Stack Developer with 2+ years of experience building scalable web applications using React.js, Node.js, and SQL. Strong foundation in UI development, REST API integration, and modular architecture. Proficient in agile methodologies and version control.",
      para2:
        "Beyond coding, I’m an enthusiastic learner who believes in continuous growth and collaboration. My goal is to create seamless user experiences while writing clean and maintainable code.",
      buttonBg: "#FF8C42",
      buttonColor: "white",
    },
    dark: {
      para1:
        "Frontend-focused Full Stack Developer with 2+ years of experience building scalable web applications using React.js, Node.js, and SQL. Strong foundation in UI development, REST API integration, and modular architecture. Proficient in agile methodologies and version control.",
      para2:
        "Beyond coding, I’m an enthusiastic learner who believes in continuous growth and collaboration. My goal is to create seamless user experiences while writing clean and maintainable code.",
      buttonBg: "#90caf9",
      buttonColor: "black",
    },
    corporate: {
      para1:
        "Frontend-focused Full Stack Developer with 2+ years of experience delivering high-impact, enterprise-grade web applications using React.js, Node.js, and SQL. Proven expertise in designing scalable, maintainable, and modular solutions that drive business success and efficiency.",
      para2:
        "A collaborative professional committed to delivering results with high code quality, adhering to agile methodologies, and optimizing user experiences. Experienced in team leadership, code reviews, and ensuring projects align with strategic business goals.",
      buttonBg: "#0d47a1",
      buttonColor: "white",
    },
    fun: {
      para1:
        "Frontend-focused Full Stack Developer with 2+ years of experience creating amazing web apps 🚀 using React.js, Node.js, and SQL. Passionate about clean code, interactive UIs, and making users smile 😄.",
      para2:
        "Always experimenting with fun ideas 💡, quirky animations ✨, and collaborative projects 🎉. Believe in coding with passion and a dash of excitement—because building web apps should be as epic as your favorite anime battles 🏴‍☠️👊.",
      buttonBg: "linear-gradient(45deg, #FF6F00, #1E88E5, #E53935, #FDD835)",
      buttonColor: "white",
    },
  };

  const { para1, para2, buttonBg, buttonColor } =
    aboutText[themeName] || aboutText.light;

  return (
    <section id="about" className="py-16">
      <CommonCard title="About Me">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={12}>
            <Typography
              variant="body1"
              color={theme.palette.text.secondary}
              sx={{ fontSize: "1.1rem" }}
            >
              {para1}
            </Typography>

            <Typography
              variant="body1"
              color={theme.palette.text.secondary}
              sx={{ mt: 2, fontSize: "1.1rem" }}
            >
              {para2}
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                borderRadius: 2,
                background: buttonBg,
                color: buttonColor,
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  opacity: 0.9,
                  background: buttonBg,
                },
              }}
              href={`${process.env.PUBLIC_URL}/MAYUR_PANDE_8975727885.pdf`}
              target="_blank"
            >
              Download Resume
            </Button>
          </Grid>
        </Grid>
      </CommonCard>
    </section>
  );
}