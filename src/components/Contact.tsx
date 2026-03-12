import { useState } from 'react';
import { Box, Container, Typography, Paper, TextField, Button, Snackbar, Alert, CircularProgress } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean, message: string, severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Disables button and starts the loading spinner

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Triggers the Green Success Snackbar
        setSnackbar({
          open: true,
          message: 'Message sent successfully! I will get back to you soon.',
          severity: 'success'
        });
        setFormData({ name: '', email: '', message: '' }); // Clears the form
      } else {
        // Triggers the Red Error Snackbar if Web3Forms rejects it
        setSnackbar({
          open: true,
          message: result.message || 'Something went wrong. Please try again later.',
          severity: 'error'
        });
      }
    } catch (error) {
      // Triggers the Red Error Snackbar if the user's internet drops
      setSnackbar({
        open: true,
        message: 'Network error. Please check your connection and try again.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false); // Stops the loading spinner
    }
  };

  // Custom styling for the dark mode text fields
  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.2)' },
      '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
      '&.Mui-focused fieldset': { borderColor: '#10b981' }, // Matches your available status dot!
    },
    '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#10b981' },
  };

  return (
    <Box id="contact" sx={{ pt: { xs: 8, md: 12 }, pb: 12, scrollMarginTop: '140px' }}>
      <Container maxWidth="md">
        <Typography
          data-aos="fade-right"
          data-aos-duration="1000"
          variant="h4"
          color="text.primary"
          sx={{ fontWeight: 'bold', mb: 6, display: 'flex', alignItems: 'center', gap: 2, justifyContent: { xs: 'flex-start', md: 'center' } }}
        >
          <EmailIcon color="primary" fontSize="large" />
          Get In Touch
        </Typography>

        <Paper
          elevation={0}
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{
            p: { xs: 3, md: 6 },
            background: 'rgba(255, 255, 255, 0.01)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              transform: 'translateY(-5px)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8)',
              transition: 'all 1s cubic-bezier(0.25, 1, 0.5, 1)'
            }
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={textFieldStyle}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={textFieldStyle}
                />
              </Box>
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={5}
                variant="outlined"
                sx={textFieldStyle}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting} // Prevents double-clicking
                endIcon={!isSubmitting && <SendIcon />}
                sx={{
                  py: 1.5,
                  backgroundColor: 'primary.main',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    transform: 'scale(1.02)',
                  },
                  '&.Mui-disabled': {
                    backgroundColor: 'rgba(16, 185, 129, 0.5)', // Dimmed green when loading
                    color: 'rgba(0,0,0,0.5)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>

      {/* Success Notification */}
      {/* Dynamic Success/Error Notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{
            width: '100%',
            // Dynamically change background color based on success/error
            backgroundColor: snackbar.severity === 'success' ? '#10b981' : '#ef4444',
            color: '#000',
            fontWeight: 'bold'
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;