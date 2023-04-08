import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BAScreenHeader from '../../Component/BAScreenHeader';

const theme = createTheme();

export default function TeacherRegisteration() {
  const country = [
    {
      label: "Pakistan",
      value: 1
    },
    {
      label: "Other",
      value: 2
    },
  ]
  

  const city = [
    {
      label: "Karachi",
      value: 1
    },
    {
      label: "Lahore",
      value: 2
    },
    {
      label: "Islamabad",
      value: 3
    },
  ]
  
  const categoryDB = [
    {
      label: "Grade 5-8",
      value: 1
    },
    {
      label: "Matric",
      value: 2
    },
    {
      label: "Intermediate",
      value: 3
    },
    {
      label: "Undergraduate",
      value: 4
    },
    {
      label: "Graduate",
      value: 5
    },
    {
      label: "Masters",
      value: 6
    },
  ]

  const categoryDD = [
    {
      label: "Web and mob app",
      value: 1
    },
    {
      label: "Graphic Design",
      value: 2
    },
    {
      label: "Full Stack",
      value: 3
    },
  ]

  const gender = [
    {
      label: "Male",
      value: 1
    },
    {
      label: "Female",
      value: 2
    },
  ]

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
  <>

    <BAScreenHeader screenTitle="Registeration"/>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            Teacher Registeration Form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Teacher Name"
                  required
                  fullWidth
                  id="TeacherName"
                  label="Teacher Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Father Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="phone number"
                  type="number"
                  name="number"
                  autoComplete="number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="CNIC"
                  type="number"
                  name="number"
                  autoComplete="number"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField select required="true" fullWidth margin="normal" label="Last Qualification" size="medium">
                  {categoryDB.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}</TextField>
              </Grid>
              <Grid item xs={12} >
                <TextField select required="true" fullWidth margin="normal" label="Course" size="medium">
                  {categoryDD.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}</TextField>
              </Grid>
              <Grid item xs={12} >
                <TextField
                fullWidth
                  id="outlined-read-only-input"
                  label="Institute"
                  defaultValue="ABC Institude of Learning"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} >
              <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
              </Grid>
              <Grid item xs={12} >
              <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField select required="true" fullWidth margin="normal" label="city" size="medium">
                  {city.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}</TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField select required="true" fullWidth margin="normal" label="Country" size="medium">
                  {country.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}</TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
              <TextField
              margin="normal"
              required
              fullWidth
              name="date"
              type="Date"
              id="date"            
            />
              </Grid>

              <Grid item xs={12} sm={6}>
              <TextField select required="true" fullWidth margin="normal" label="Gender" size="medium">
                  {gender.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}</TextField>
              </Grid>

              <Grid item xs={12} >
              <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              label="Address"
              name="text"
              autoComplete="text"
              autoFocus
            />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>

          </Box>
        </Box>

      </Container>
    </ThemeProvider>
    </>
  );
}
