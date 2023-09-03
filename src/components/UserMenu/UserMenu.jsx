import { Logout } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Stack direction="row" spacing={2} alignItems="center" >
      <Typography
        
      >
        WELCOME, {user.name}
      </Typography>
      <Button
        endIcon={<Logout />}
        type="button"
        onClick={() => dispatch(logout())}
        sx={{ color: 'white', flexShrink: 0 }}
      >
        LOGOUT
      </Button>
    </Stack>
  );
};
