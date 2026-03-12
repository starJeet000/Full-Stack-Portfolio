import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { education } from '../data/content';

const Education = () => {
  return (
    <Box id="education" sx={{ pt: { xs: 16, md: 24 }, pb: 12, scrollMarginTop: '140px', minHeight: '80vh' }}>

      <Container maxWidth="md">
        <Typography
          data-aos="fade-right"
          data-aos-duration="1000"
          variant="h4"
          color="text.primary"
          sx={{ fontWeight: 'bold', mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <SchoolIcon color="primary" fontSize="large" />
          Education
        </Typography>

        {education.map((edu, index) => (
          <Card
            key={index}
            data-aos="fade-up"
            data-aos-duration="1000"
            sx={{
              // ULTRA-TRANSPARENT GLASS STATE
              background: 'rgba(255, 255, 255, 0.01)',
              backdropFilter: 'blur(20px)',
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
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
              }
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                <Box>
                  <Typography variant="h5" color="text.primary" sx={{ fontWeight: 'bold' }}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {edu.institution}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                  {edu.period}
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                {edu.details}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default Education;