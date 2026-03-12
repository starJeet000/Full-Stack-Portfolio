import { Box, Container, Typography, Card, CardContent, Divider } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { experience } from '../data/content';

const Experience = () => {
  return (
    <Box id="experience" sx={{ pt: { xs: 16, md: 24 }, pb: 12, scrollMarginTop: '140px' }}>
      <Container maxWidth="md">
        <Typography
          data-aos="fade-right"
          data-aos-duration="1000"
          variant="h4"
          color="text.primary"
          sx={{ fontWeight: 'bold', mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <WorkOutlineIcon color="primary" fontSize="large" />
          Experience
        </Typography>

        {experience.map((job, index) => (
          <Card
            data-aos="fade-up"
            data-aos-duration="1000"
            key={index}
            sx={{
              // ULTRA-TRANSPARENT GLASS STATE
              background: 'rgba(255, 255, 255, 0.01)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',

              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',

              '&:hover': {
                background: 'rgba(255, 255, 255, 0.02)', // Slightly brightens the glass
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                transform: 'translateY(-8px)', // Floats up
                // Deep black shadow below + faint white glow around it
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.05)',

                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
              }
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                <Box>
                  <Typography variant="h5" color="text.primary" sx={{ fontWeight: 'bold' }}>
                    {job.role}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {job.company}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                  {job.date}
                </Typography>
              </Box>
              <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {job.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default Experience;