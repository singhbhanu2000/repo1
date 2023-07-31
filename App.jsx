import React from 'react'
import './App.css'
import { Grid, Paper, Avatar, TextField } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
function App() {
  const paperstyle={padding:20 ,height:"60vh", width:280, margin:"20px auto"}
  const avatarstyle={backgroundColor:'Orange'}
    return (
    <>
      <Grid>
        <Paper elevation={10} style={paperstyle}>
          <Grid align='center'>
          <Avatar style={avatarstyle}><LockOutlinedIcon/></Avatar>
          <h2>Sign In</h2>
          </Grid>
          <Grid container direction="column" spacing={2}>
            <Grid item>
          <TextField label="Username" placeholder='Enter User Id' fullWidth required />
          </Grid>
          <Grid item>
          <TextField label="Password" placeholder='Enter Password' type='Password' fullWidth required />
          </Grid>
          </Grid>
          <Grid align="left">
          <FormGroup>
      <FormControlLabel control={<Checkbox  />} label="Remember me" /> 
      </FormGroup>
           </Grid>
          <Grid item>
          <Stack spacing={2} direction="row">
          <Button variant="contained" fullWidth>Login</Button>
            </Stack>   
          </Grid>
          <Grid align="left"><Link href="#">Forgot Password</Link></Grid>
          <Grid align="left">Don't have an Account ? <Link href="#">Sign Up</Link> </Grid>
        </Paper>
      </Grid>
     </>
  )
}

export default App
