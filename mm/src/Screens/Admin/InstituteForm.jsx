import { Box, Grid, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import BAScreenHeader from '../../Component/BAScreenHeader';
import Button from '@mui/material/Button';

export default function InstituteForm(){
    return(
        <>
        <BAScreenHeader screenTitle="Add Institude"/>
         <Box>
            <Grid container>
            <Grid item className="p-2" md={4}>
            <TextField sx={{ flex: 1,  width: 350 }} id="outlined-basic" label="Institute Name" variant="outlined" />
            </Grid>
            <Grid item className="p-2" md={4}>
            <TextField sx={{ flex: 1,  width: 350 }} id="outlined-basic" label="Institute Short NAme" variant="outlined" />
            </Grid>
            <Grid item className="p-2" md={4}>
            <TextField sx={{ flex: 1,  width: 350 }} id="outlined-basic" label="No of Campus" variant="outlined" />
            </Grid>
            <Grid item className="p-2" md={4}>
            <TextField sx={{ flex: 1,  width: 350 }} id="outlined-basic" label="Address" variant="outlined" />
            </Grid>
            <Grid item className="p-2" md={4}>
            <TextField sx={{ flex: 1,  width: 350 }} id="outlined-basic" label="Contact" variant="outlined" />
            </Grid>
            <Grid item className="p-2" md={4}>
            <TextField sx={{ flex: 1,  width: 350 }} id="outlined-basic" label="User NAme" variant="outlined" />
            </Grid>
            <Grid item className="p-2" md={4}>
            <TextField sx={{ flex: 1,  width: 350 }} id="outlined-basic" label="Password" variant="outlined" />
            </Grid>
            <Grid item className="p-2" md={4}>
            <TextField sx={{ flex: 1,  width: 350 }} id="outlined-basic" label="Tel 1" variant="outlined" />
            </Grid>
            <Grid item className="p-2" md={4}>
            <TextField sx={{ flex: 1,  width: 350 }} id="outlined-basic" label="Tel 2" variant="outlined" />
            </Grid>
            <Grid item className="p-2" md={4}>
            <TextField sx={{ flex: 1,  width: 350 }} id="outlined-basic" label="Logo" variant="outlined" />
            </Grid>
             </Grid>
             <Button variant="contained" href="#contained-buttons" className=" justify-content-center">
             Save
      </Button>
         </Box>
        </>
    )
}