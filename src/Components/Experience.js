// src/Components/Experience.js
import { Typography, Grid, List, ListItem, ListItemText } from "@mui/material";
import CommonCard from "../Containers/SectionWrapper";
import { useThemeContext } from "../ThemeContext";
import { useTheme } from "@mui/material/styles";

export default function Experience() {
  const { themeName } = useThemeContext();
  const theme = useTheme();

  const experiences = [
    {
      role: "Software Developer",
      company: "Quolam Business Solutions Pvt. Ltd., Pune",
      duration: "Sep 2023 – Present",
      projects: [
        {
          title: "Notable",
          duration: "Aug 2025 – Present",
          responsibilities: {
            light: [
              "Maintaining and enhancing React.js based Notable, a platform for brands to proof & delivery management",
              "Implemented UI for webhook configuration and developed backend logic for event handling",
              "Integrated backend logic with Node.js & MongoDB and built modular, secure APIs & cronjobs.",
              "Worked in agile ceremonies, using BitBucket for version control and CI workflows.",
              "Gaining exposure to cloud concepts with basic understanding of AWS.",
            ],
            
            dark: [
              "Maintaining and enhancing React.js based Notable, a platform for brands to proof & delivery management",
              "Implemented UI for webhook configuration and developed backend logic for event handling",
              "Integrated backend logic with Node.js & MongoDB and built modular, secure APIs & cronjobs.",
              "Worked in agile ceremonies, using BitBucket for version control and CI workflows.",
              "Gaining exposure to cloud concepts with basic understanding of AWS.",
            ],
            
            corporate: [
              "Maintained and enhanced the Notable platform, supporting proofing and delivery workflows for brand content.",
              "Built a configurable webhook interface in React.js and implemented secure event handling logic on the backend.",
              "Developed secure, modular APIs using Node.js and MongoDB to support scalable backend services.",
              "Participated in agile development cycles with BitBucket-based version control and CI/CD processes.",
              "Built foundational knowledge in AWS tools such as Parameter Store, CloudWatch, and related services.",
            ],

            fun: [
              "Keeping Notable running smooth for brands to manage content proofs and deliveries like a boss 🚚✨.",
              "Created a cool webhook UI so users can plug in stuff easily 🧩, and coded backend logic to handle all the action behind the scenes 🛠️.",
              "Hooked up secure Node.js + MongoDB APIs & cronjobs that get the job done right 🔐💻.",
              "Jumped into agile sprints 🏃‍♂️ with BitBucket magic for version control & CI flows 🔄.",
              "Dabbled in AWS with tools like Parameter Store, CloudWatch, and more ☁️🔧.",
            ],
          },
        },
        {
          title: "IRClass - Indian Register Of Shipping",
          duration: "Sep 2023 – Present",
          responsibilities: {
            light: [
              "Enhanced React.js UI screens by adding features and fixing bugs.",
              "Developed responsive forms and reports using HTML, CSS, and JavaScript, meeting client specifications.",
              "Managed version control with Git and BitBucket to enable smooth collaboration and seamless integration across the development team.",
              "Implemented new data handling and conditional logic within forms for different modules, based on client requirements.",
              "Maintained code quality using Git and accelerated development cycles with reusable patterns.",
            ],
            dark: [
              "Enhanced React.js UI screens by adding features and fixing bugs.",
              "Developed responsive forms and reports using HTML, CSS, and JavaScript, meeting client specifications.",
              "Managed version control with Git and BitBucket to enable smooth collaboration and seamless integration across the development team.",
              "Implemented new data handling and conditional logic within forms for different modules, based on client requirements.",
              "Maintained code quality using Git and accelerated development cycles with reusable patterns.",
            ],
            corporate: [
              "Improved React.js UI screens by implementing new features and resolving bugs efficiently.",
              "Created responsive forms and reports with HTML, CSS, and JavaScript, adhering to client requirements.",
              "Oversaw version control processes using Git and BitBucket to ensure effective team collaboration and integration.",
              "Developed and integrated new data handling and conditional logic within forms across multiple modules, aligned with client specifications.",
              "Upheld code quality and accelerated development through reusable patterns and best practices.",
            ],
            fun: [
              "Boosted React.js UI screens by adding cool new features and squashing pesky bugs 🐞.",
              "Crafted responsive forms and reports with HTML, CSS & JavaScript that perfectly matched client wishes 🎨.",
              "Kept the team in sync by managing version control with Git & BitBucket like a pro 🤝.",
              "Cooked up fresh data handling and conditional form logic for multiple modules, tailored to client needs 🧙‍♂️.",
              "Kept the codebase neat and speedy with reusable patterns and slick development hacks ⚡️.",
            ]
          }
        },
      ],
    },
  ];


  return (
    <section id="experience" className="py-16">
      <CommonCard title="Experience">
        <Grid container spacing={3}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: theme.palette.primary.main }}
              >
                {exp.role}
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme.palette.text.secondary}
                gutterBottom
              >
                {exp.company} | <i>{exp.duration}</i>
              </Typography>

              {exp.projects.map((project, projIndex) => (
                <div key={projIndex} style={{ marginBottom: theme.spacing(3) }}>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {project.title} <i>({project.duration})</i>
                  </Typography>
                  <List sx={{ listStyleType: "disc", pl: 4 }}>
                    {(project.responsibilities[themeName] || project.responsibilities.light).map((item, i) => (
                      <ListItem key={i} sx={{ display: "list-item", py: 0 }}>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              ))}
            </Grid>
          ))}
        </Grid>
      </CommonCard>
    </section>
  );
}