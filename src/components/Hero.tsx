import { Box, Typography, Button, Container, Stack, IconButton, Grid } from '@mui/material';
import { keyframes } from '@emotion/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Hero = () => {
  return (
    <Box
      id="about"
      sx={{
        // 1. HARDCODED PIXELS: Exactly clears the header, no more massive gaps
        pt: { xs: '100px', md: '180px' },
        pb: 10,
        // Ensure no minHeight or alignItems are here!
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }}>

          {/* LEFT SIDE: Oval Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src="/profile_image.jpg"
              alt="Soumyajit Mukherjee"
              sx={{
                width: '100%',
                maxWidth: { xs: '260px', md: '340px' },
                aspectRatio: '3/4',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
                margin: 0,
                filter: 'grayscale(100%)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                opacity: 0,
                animation: `${slideUp} 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards`,
                animationDelay: '1s',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  transform: 'scale(1.03) translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(255,255,255,0.08)',
                }
              }}
            />
          </Grid>

          {/* RIGHT SIDE: Bio details */}
          <Grid size={{ xs: 12, md: 7 }}>
            {/* --- Keep the rest of your bio text, buttons, and social icons EXACTLY as they were here! --- */}

            <Box sx={{ opacity: 0, animation: `${slideUp} 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards`, animationDelay: '1.2s' }}>
              <Typography variant="h6" color="text.secondary" gutterBottom sx={{ letterSpacing: 2, textTransform: 'uppercase', fontSize: '0.9rem' }}>
                Software Engineer
              </Typography>
            </Box>

            <Box sx={{ opacity: 0, animation: `${slideUp} 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards`, animationDelay: '1.4s' }}>
              <Typography variant="h2" component="h1" color="text.primary" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2.5rem', md: '4.5rem' }, letterSpacing: '-0.02em' }}>
                Soumyajit Mukherjee.
              </Typography>
            </Box>

            <Box sx={{ opacity: 0, animation: `${slideUp} 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards`, animationDelay: '1.6s' }}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '600px' }}>
                I am a Full Stack Developer specializing in the MERN stack. I design and build highly functional, visually stunning web applications, blending robust architecture with seamless user experiences.
              </Typography>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 6, opacity: 0, animation: `${slideUp} 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards`, animationDelay: '1.8s' }}>
              <Button
                variant="outlined"
                size="large"
                href="#projects"
                sx={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '30px',
                  px: 4, py: 1.5,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  
                  '&:hover': {
                    borderColor: '#fff',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 20px rgba(255,255,255,0.05)'
                  }
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                href="/resume.pdf" // Points directly to the file in your public folder
                download="Soumyajit_Mukherjee_Resume.pdf" // This forces the download and sets the file name!
                startIcon={<DownloadIcon />}
                sx={{
                  py: 1.5,
                  px: 4,
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  borderRadius: '30px',
                  transition: 'all 0.3s ease',
                  
                  '&:hover': {
                    borderColor: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Adjust this if your primary color is different!
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)', // Creates that bioluminescent glow
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Download Resume
              </Button>
            </Stack>

            <Stack direction="row" spacing={2}>
              {[
                { icon: <GitHubIcon fontSize="large" />, link: "https://github.com/starJeet000" },
                { icon: <LinkedInIcon fontSize="large" />, link: "https://www.linkedin.com/in/soumyajitmukherjee00/" },
                { icon: <TwitterIcon fontSize="large" />, link: "https://x.com/sam9890smsm" },
                { icon: <EmailIcon fontSize="large" />, link: "https://mail.google.com/mail/?view=cm&fs=1&to=soumyajitmukherjee41@gmail.com" }
              ].map((item, index) => (
                <IconButton
                  key={index}
                  href={item.link}
                  target="_blank"
                  sx={{
                    color: 'text.secondary',
                    opacity: 0,
                    animation: `${slideUp} 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards`,
                    animationDelay: `${2.0 + (index * 0.15)}s`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': { color: '#fff', transform: 'translateY(-6px) scale(1.15)' }
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Stack>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;