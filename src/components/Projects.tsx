import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
//import LaunchIcon from '@mui/icons-material/Launch';
import { projects } from '../data/content';

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 12, scrollMarginTop: '140px' }}>
      <Container maxWidth="lg">
        <Typography
          data-aos="fade-right"
          data-aos-duration="1000"
          variant="h4"
          color="text.primary"
          sx={{ fontWeight: 'bold', mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <CodeIcon color="primary" fontSize="large" />
          Featured Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                data-aos="fade-up"
                data-aos-duration="1000"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',

                  // ULTRA-TRANSPARENT GLASS STATE
                  background: 'rgba(255, 255, 255, 0.01)', // Barely visible white tint
                  backdropFilter: 'blur(20px)',            // Heavy blur for the glass effect
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',

                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',

                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-8px)',
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.05)',
                    transition: 'all 2s cubic-bezier(0.4, 0, 0.2, 1)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" color="text.primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, minHeight: '60px' }}>
                    {project.description}
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {project.tech.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255, 191, 0, 0.1)',
                          color: 'primary.main',
                          fontFamily: 'monospace',
                          fontSize: '0.75rem'
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0, gap: 2 }}>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    sx={{ '&:hover': { backgroundColor: 'rgba(255, 191, 0, 0.1)' } }}
                  >
                    Code
                  </Button>
                  {/* <Button
                    size="small"
                    color="primary"
                    startIcon={<LaunchIcon />}
                    href={project.demo}
                    target="_blank"
                    sx={{ '&:hover': { backgroundColor: 'rgba(255, 191, 0, 0.1)' } }}
                  >
                    Live Demo
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;