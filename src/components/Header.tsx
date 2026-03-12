import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';

const Header = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  // Intersection Observer to highlight the active nav item while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll without adding # to URL
  const handleScroll = (id: string) => {
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { xs: '90%', md: 'max-content' },
        left: 0, right: 0, mx: 'auto', top: {xs:20, md:40},
        borderRadius: '50px',
        px: { xs: 2, md: 4 },
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        animation: 'fadeIn 1s ease forwards',
        '@keyframes fadeIn': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        '@keyframes dropDown': { '0%': { transform: 'translateY(-20px)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } }
      }}
    >
      <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', minHeight: '60px !important' }}>

        <Typography
          variant="h5"
          onClick={() => handleScroll('about')}
          sx={{
            fontWeight: 800, color: 'primary.main', cursor: 'pointer', letterSpacing: 1,
            opacity: 0, animation: 'dropDown 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards', animationDelay: '0.2s',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': { transform: 'scale(1.1)', textShadow: '0 0 15px rgba(255,255,255,0.4)' }
          }}
        >
          SM.
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 4, gap: 1 }}>
          {navItems.map((item, index) => (
            <Button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              sx={{
                // Active State Styling
                color: activeSection === item.id ? '#fff' : 'text.secondary',
                backgroundColor: activeSection === item.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                fontWeight: 500, textTransform: 'none', fontSize: '0.95rem', borderRadius: '30px', px: 2,
                opacity: 0, animation: 'dropDown 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards', animationDelay: `${0.3 + (index * 0.1)}s`,
                transition: 'all 0.3s ease',
                '&:hover': { color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.08)', transform: 'translateY(-2px)' }
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;