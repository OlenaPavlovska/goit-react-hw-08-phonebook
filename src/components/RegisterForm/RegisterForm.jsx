import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { BottomText, StyledLink } from './RegisterForm.styled';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyIcon from '@mui/icons-material/Key';
import { useState } from 'react';
import { VisibilityOffSharp, VisibilitySharp } from '@mui/icons-material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const userInfo = {
      name: elements.name.value,
      email: elements.email.value,
      password: elements.password.value,
    };
    dispatch(register(userInfo));
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '510px',
          textAlign: 'center',
          p: '12px',
          border: '2px solid grey',
          bgcolor: '#fff',
          borderRadius: '18px',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', color:'grey'}}>
            <PersonIcon sx={{ color: 'grey', mr: 1, mb: 1 }} />
            <TextField
              label="NAME"
              name="NAME"
              required
              variant="standard"
              id="outlined-start-adornment"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              sx={{ m: 1, width: '100%' }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AlternateEmailIcon sx={{ color: 'grey', mr: 1, mb: 1 }} />
            <TextField
              label="EMAIL"
              name="EMAIL"
              required
              variant="standard"
              id="standard-basic"
              title="Email must contain at list '@'. For example user@mail.com"
              sx={{ m: 1, width: '100%' }}
            ></TextField>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <KeyIcon sx={{ color: 'grey', mr: 1, mb: 1 }} />
            <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                PASSWORD
              </InputLabel>
              <Input
                label="Password"
                name="PASSWORD"
                required
                id="standard-adornment-password"
                title="Your Password must include a minimum of 7 characters"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityOffSharp sx={{ color: 'grey' }} />
                      ) : (
                        <VisibilitySharp />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Button  type="submit">
            REGISTER
          </Button>
        </form>
        <BottomText>
          ALREADY HAVE AN ACCOUNT? <StyledLink to="/login">LOG IN</StyledLink>
        </BottomText>
      </Box>
    </Container>
  );
};
