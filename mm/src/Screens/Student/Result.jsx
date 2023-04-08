import React from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { MenuItem } from '@mui/material';
const Result = () => {
  const categoryDB = [
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
  return (
<>
     
<Grid container spacing={2} sx={{ mt: 3 }}>
      <Grid item xs={12} sm={5} sx={{ mt: 2 }}>
        <TextField
          required
          fullWidth
          id="number"
          label="Enter Your Roll number"
          type="number"
          name="number"
          autoComplete="number"
        /> 
        </Grid>
        
      <Grid item xs={12} sm={5} sx={{ mb: 5 }}>
        <TextField select required="true" fullWidth margin="normal" label="Enter Your Course" size="medium">
          {categoryDB.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}</TextField> </Grid>
    </Grid>
    <Button
              type="submit"
               
              variant="contained"
              sx={{ mb: 1, width: '20%', ml:40 }}
            >
              Submit
            </Button>
   </>
  )
}

export default Result