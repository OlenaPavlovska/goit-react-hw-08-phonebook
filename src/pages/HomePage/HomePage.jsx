import { Container, Typography } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Main } from 'pages/Titled.styled';

export const HomePage = () => {
  return (
    <Main>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 4,
          pb: 4,
        }}
        maxWidth="xl"
      >
        <ContactPhoneIcon sx={{ fontSize: 80, mb: 3, color: 'grey' }} />
        <Typography
          variant="h1"
          sx={{
            
            fontFamily: 'monospace',
            fontSize: '24px',
            fontWeight: '700',
          }}
        >
          WELCOME TO YOUR <span style={{ color: 'dark blue' }}>PHONEBOOK</span>{' '}
          APPLICATION!
        </Typography>
      </Container>
    </Main>
  );
};

export default HomePage;
