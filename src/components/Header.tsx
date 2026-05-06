import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('about');
  // State to handle mobile drawer toggle
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
    setMobileOpen(false); // Close mobile drawer when a section is clicked

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { xs: '90%', md: 'max-content' },
          left: 0, right: 0, mx: 'auto', top: { xs: 20, md: 40 },
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
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', minHeight: '60px !important', gap: { xs: 2, md: 0 } }}>

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

          {/* Desktop Navigation */}
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

          {/* Mobile Hamburger Toggle */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: 'none' },
              color: 'text.secondary',
              opacity: 0,
              animation: 'dropDown 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards',
              animationDelay: '0.3s',
              '&:hover': { color: '#fff' }
            }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* Clear Transparent Glass Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: '260px',
              // Highly transparent dark tint (18% opacity)
              backgroundColor: 'rgba(10, 10, 10, 0.18)', 
              // Subdued blur to mimic thin, crisp glass instead of a thick frost layer
              backdropFilter: 'blur(6px)', 
              WebkitBackdropFilter: 'blur(6px)', 
              // Sharpened highlight border edge to frame the glass panel
              borderLeft: '1px solid rgba(255, 255, 255, 0.16)', 
              // Clean drop shadow to separate it visually from content underneath
              boxShadow: '-15px 0 35px rgba(0, 0, 0, 0.4)', 
              p: 3,
              display: 'flex',
              flexDirection: 'column'
            }
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.secondary', '&:hover': { color: '#fff' } }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => handleScroll(item.id)}
                sx={{
                  borderRadius: '12px',
                  px: 2,
                  py: 1.5,
                  backgroundColor: activeSection === item.id ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                  color: activeSection === item.id ? 'primary.main' : 'text.secondary',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    paddingLeft: '20px'
                  }
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  slotProps={{
                    primary: {
                      fontSize: '1.05rem', 
                      fontWeight: activeSection === item.id ? 600 : 500 
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;