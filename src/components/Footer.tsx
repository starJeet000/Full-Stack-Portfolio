import { Box, Container, Typography, Stack, IconButton, Divider, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        pt: 8, 
        pb: 4, 
        backgroundColor: 'transparent',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        {/* Top Section of Footer: Availability & Socials */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between', 
            alignItems: 'center',
            gap: 3,
            mb: 4
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h5" color="primary.main" sx={{ fontWeight: 800, letterSpacing: 1, mb: 1 }}>
              SM.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1 }}>
              <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Actively seeking software engineering roles in Kolkata.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            {[
              { icon: <GitHubIcon />, link: "https://github.com/starJeet000", label: "GitHub" },
              { icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/soumyajitmukherjee00/", label: "LinkedIn" },
              { icon: <TwitterIcon />, link: "https://x.com/sam9890smsm", label: "Twitter" },
              { icon: <EmailIcon />, link: "https://mail.google.com/mail/?view=cm&fs=1&to=soumyajitmukherjee41@gmail.com" }
            ].map((item, index) => (
              <Tooltip title={item.label} key={index} arrow>
                <IconButton 
                  href={item.link} 
                  target="_blank" 
                  sx={{ 
                    color: 'text.secondary', 
                    transition: 'all 0.3s ease',
                    '&:hover': { color: '#fff', transform: 'translateY(-3px)', backgroundColor: 'rgba(255,255,255,0.05)' } 
                  }}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Stack>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)', mb: 3 }} />

        {/* Bottom Section: Copyright & Back to Top */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column-reverse', sm: 'row' }, gap: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.7 }}>
            © {currentYear} Soumyajit Mukherjee. Built with React & MUI.
          </Typography>

          <Tooltip title="Back to top" arrow>
            <IconButton 
              onClick={scrollToTop}
              sx={{ 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'text.secondary',
                transition: 'all 0.3s ease',
                '&:hover': { color: '#fff', borderColor: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.05)' }
              }}
            >
              <KeyboardArrowUpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>

      {/* Small pulsing animation for the availability dot */}
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
            70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
          }
        `}
      </style>
    </Box>
  );
};

export default Footer;