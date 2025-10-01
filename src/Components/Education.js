// src/Components/Education.js
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import CommonCard from "../Containers/SectionWrapper";
import { useThemeContext } from "../ThemeContext";

export default function Education() {
  const educationSteps = [
    {
      label: "Bachelor of Engineering (Mechanical)",
      location: "Warje, Pune",
      year: "2021",
      institute: "RMD Sinhgad Technical Institute Campus (SPPU)",
      score: "CGPA: 7.91 first class with distinction",
    },
    {
      label: "12th",
      location: "Akola, Maharashtra",
      year: "2017",
      institute: "Bhikamchand Khandelwal High School",
      score: "73.08%",
    },
    {
      label: "10th",
      location: "Akola, Maharashtra",
      year: "2015",
      institute: "Bhikamchand Khandelwal Vidyalaya",
      score: "91.40%",
    }
  ];

  const { themeName } = useThemeContext();
  const theme = useTheme();
  const noteBg = {
    light: theme.palette.grey[100],
    dark: theme.palette.background.paper,
    corporate: "#f5f5f5",
    fun: "#fff3e0",
  };

  return (
    <section id="education" className="py-16 bg-gray-50">
      <CommonCard
        title="Education"
        headerColor="linear-gradient(90deg, #FF8C42, #FFB347)"
      >
        {/* Stepper Timeline */}
        <Stepper orientation="vertical" activeStep={educationSteps.length}>
          {educationSteps.map((step, index) => (
            <Step key={index} active>
              <StepLabel>
                <Typography variant="h6" fontWeight="bold">
                  {step.label}
                </Typography>
              </StepLabel>
              <StepContent>
                <List dense>
                  <ListItem>
                    <ListItemText primary={`📍 Location: ${step.location}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`🏫 Institute: ${step.institute}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`📅 Year: ${step.year}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`📊 Score: ${step.score}`} />
                  </ListItem>
                </List>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {/* Final Completed Note */}
        <Paper
          square
          elevation={0}
          sx={{ p: 2, mt: 2, bgcolor: noteBg[themeName], textAlign: "center" }}
        >
          <Typography variant="body1" fontWeight="bold">
            Learning never stops 🚀
          </Typography>
        </Paper>
      </CommonCard>
    </section>
  );
}