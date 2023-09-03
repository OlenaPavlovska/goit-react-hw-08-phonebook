import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import { Link } from 'react-router-dom';

export const AppNavBar  = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar  >
      <Container >
        <Toolbar >
          <Typography
            
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 5,
              mb: 1,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'revert-layer',
              fontWeight: 400,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <ContactPhoneIcon sx={{ color: '#fff', pr: 1, mt: 0.5 }} />
            PHONEBOOK
          </Typography>
          <Box
            sx={{
              flexGrow: 24,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            <Navigation />
          </Box>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
