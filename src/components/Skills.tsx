import { Box, Container, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import MemoryIcon from '@mui/icons-material/Memory';

// Official brand icons
import {
  SiJavascript, SiTypescript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython,
  SiMongodb, SiMariadb, SiFirebase, SiSupabase,
  SiPostman, SiHuggingface, SiGooglemaps
} from 'react-icons/si';
import { FaGitAlt, FaGithub, FaServer } from 'react-icons/fa';

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "REST API", icon: <FaServer />, color: "#00E676" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "MariaDB / SQL", icon: <SiMariadb />, color: "#FFFFFF" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" }
    ]
  },
  {
    category: "Tools & APIs",
    items: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Hugging Face", icon: <SiHuggingface />, color: "#FFD21E" },
      { name: "Google Maps", icon: <SiGooglemaps />, color: "#4285F4" }
    ]
  }
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{ pt: { xs: 8, md: 8 }, pb: 12, scrollMarginTop: '140px' }}
    >
      <Container maxWidth="md">
        <Typography
          data-aos="fade-right"
          data-aos-duration="1000"
          variant="h4"
          color="text.primary"
          sx={{ fontWeight: 'bold', mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <MemoryIcon color="primary" fontSize="large" />
          Technical Skills
        </Typography>

        <Paper
          elevation={0}
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{
            p: { xs: 3, md: 5 },
            background: 'rgba(255, 255, 255, 0.01)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              transform: 'translateY(-8px)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.05)',
              transition: 'all 1s cubic-bezier(0.25, 1, 0.5, 1)'
            }
          }}
        >
          <Grid container spacing={4}>
            {skillsData.map((skillGroup, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Box sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)', pb: 1, mb: 3, display: 'inline-block' }}>
                  <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
                    {skillGroup.category}
                  </Typography>
                </Box>

                {/* THE NEW MINI-CARD GRID */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {skillGroup.items.map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: { xs: '75px', sm: '85px' },
                        height: { xs: '85px', sm: '95px' },
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderColor: item.color,
                          transform: 'translateY(-5px)',
                          // Adds a soft colored glow behind the card when hovered!
                          boxShadow: `0 10px 20px rgba(0,0,0,0.5), 0 0 15px ${item.color}30`
                        }
                      }}
                    >
                      {/* MASSIVE COLORFUL ICON */}
                      <Box sx={{
                        color: item.color,
                        fontSize: '2.5rem', // Much bigger than before
                        display: 'flex',
                        mb: 1
                      }}>
                        {item.icon}
                      </Box>

                      {/* TEXT CENTERED BELOW */}
                      <Typography variant="caption" sx={{
                        color: 'text.secondary',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        lineHeight: 1.1,
                        fontSize: '0.7rem'
                      }}>
                        {item.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Skills;