import { Container } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { TitleLogin } from 'pages/Titled.styled';

export const LogIn = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        pt: 10,
        pb: 2,
      }}
      maxWidth="xl"
    >
      <TitleLogin>LOG IN</TitleLogin>
      <LoginForm />
    </Container>
  );
};

export default LogIn;
