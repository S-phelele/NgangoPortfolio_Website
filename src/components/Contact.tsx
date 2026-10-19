import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import '../assets/styles/Contact.scss';

function Contact() {
  const [from_name, setName] = useState<string>('');
  const [from_email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [isSending, setIsSending] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<{open: boolean, message: string, severity: 'success' | 'error'}>({
    open: false,
    message: '',
    severity: 'success'
  });

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    const nameEmpty = from_name.trim() === '';
    const emailEmpty = from_email.trim() === '';
    const messageEmpty = message.trim() === '';

    setNameError(nameEmpty);
    setEmailError(emailEmpty);
    setMessageError(messageEmpty);

    if (nameEmpty || emailEmpty || messageEmpty) {
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: from_name,
      from_email: from_email,
      message: message,
    };

    emailjs
      .send('NgangoService_ID', 'NgangoPortfolio_ID', templateParams, 'Rwq3zijKDRPb13Efr')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSnackbar({
            open: true,
            message: 'Message sent successfully! I will get back to you soon.',
            severity: 'success'
          });
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error);
          setSnackbar({
            open: true,
            message: 'Failed to send message. Please try again or email me directly.',
            severity: 'error'
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      color: '#e2e8f0',
      backgroundColor: 'rgba(15, 21, 37, 0.6)',
      borderRadius: '10px',
      '& fieldset': {
        borderColor: 'rgba(99, 102, 241, 0.25)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(99, 102, 241, 0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6366f1',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#94a3b8',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#818cf8',
    },
    '& .MuiFormHelperText-root': {
      color: '#f87171',
    },
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label">Let's Work Together</span>
            <h2 className="section-title">Have a project in mind?</h2>
            <p className="contact-desc">
              I'm always open to discussing new projects and opportunities.
              Let's create something amazing together!
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <EmailOutlinedIcon />
                <div>
                  <span className="detail-label">Email</span>
                  <span className="detail-value">Use the form to reach me</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <span className="social-label">Follow Me</span>
              <div className="social-links">
                <a href="https://github.com/S-phelele" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/khumalosphelele4252/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper card">
            <h3>Send me a message</h3>
            <Box
              ref={form}
              component="form"
              noValidate
              autoComplete="off"
              className="contact-form"
            >
              <TextField
                required
                fullWidth
                label="Your Name"
                placeholder="What's your name?"
                value={from_name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError) setNameError(false);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                sx={textFieldSx}
              />
              <TextField
                required
                fullWidth
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={from_email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(false);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                sx={textFieldSx}
              />
              <TextField
                required
                fullWidth
                label="Message"
                placeholder="Tell me about your project or inquiry..."
                multiline
                rows={5}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (messageError) setMessageError(false);
                }}
                error={messageError}
                helperText={messageError ? "Please enter the message" : ""}
                sx={textFieldSx}
              />
              <button
                type="button"
                className="btn btn-primary submit-btn"
                onClick={sendEmail}
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'} <SendIcon style={{ fontSize: 18 }} />
              </button>
            </Box>
          </div>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </section>
  );
}

export default Contact;
