import { useState } from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Particle from '../../Utils/Particle'
import { login } from '../../Services/contactService';
import Swal from 'sweetalert2';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://behpanel.com/">
        Behpanel
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ip, setIp] = useState("192.168.1.50");
  

  const handleSubmit = async event => {
    event.preventDefault();
    const user = { username, password, ip };
    try {
        const { status, data } = await login(user);
        if (status === 200) {
            localStorage.setItem("token", data.accessToken)
            window.location.href = "/dashboard";
        }
    } catch (ex) {
        console.log(ex);
        Swal.fire({
          icon: 'error',
          title: 'خطا !',
          text: 'نام کاربری یا رمز عبور صحیح نمی باشد.',
          type: 'error',
          confirmButtonText: 'متوجه شدم',   
      })
    }
}

  return (
    <>
      <Particle />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src="logo.svg" alt="Behpanel" style={{ width: "15rem", height: "3rem" }} />
          <Typography component="h1" variant="h5">
            ورود به حساب کاربری
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              label="نام کاربری"
              autoFocus
              type="text"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="منو به خاطر پسپار"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='secondary'
              sx={{ mt: 3, mb: 2, }}
            >
              ورود
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
}