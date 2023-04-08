import * as React from 'react';
import Box from '@mui/material/Box';
import { MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
export default function Inputs() {
  const categoryDA = [
    {
      label: "Featured Courses",
      value: 1
    },
    {
      label: "Popular Courses",
      value: 2
    },
  ]
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
  const categoryDC = [
    {
      label: "All",
      value: 1
    },
    {
      label: "Online",
      value: 2
    },
  ]

  return (
    <>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >
     <div>
                <TextField select required="true" fullWidth margin="normal" label="Filter by" size="medium" maxRows={4}>
                  {categoryDA.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}</TextField>
              
              
                <TextField select required="true" fullWidth margin="normal" label="Choose Course" size="medium" maxRows={4}>
                  {categoryDB.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}</TextField>
              
              
                <TextField select required="true" fullWidth margin="normal" label="Choose Class" size="medium" >
                  {categoryDC.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}</TextField>
               </div>
    </Box>
    <Box>
    <Grid container sx={{m: 1}}>
     <Card sx={{ maxWidth: 315,  mr: 2}}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="https://lmsep.wpengine.com/wp-content/uploads/2014/05/course11-420x295.jpg"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         Advanced Programming
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda! 
           Repellendus placeat magni iste quaerat consequatur, saepe eaque soluta eos, 
           voluptatibus praesentium doloribus dignissimos quasi id reiciendis, iure similique amet.
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>

   <Card sx={{ maxWidth: 315, mr:2 }}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="https://lmstheme.wpengine.com/wp-content/uploads/2014/05/course9-420x295.jpg"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         Processing Digital Signal
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda! 
           Repellendus placeat magni iste quaerat consequatur, saepe eaque soluta eos, 
           voluptatibus praesentium doloribus dignissimos quasi id reiciendis, iure similique amet.
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>

   <Card sx={{ maxWidth: 315, mr:2  }}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="https://lmstheme.wpengine.com/wp-content/uploads/2014/05/course7-420x295.jpg"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         Maintenance Training
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda! 
           Repellendus placeat magni iste quaerat consequatur, saepe eaque soluta eos, 
           voluptatibus praesentium doloribus dignissimos quasi id reiciendis, iure similique amet.
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>

   <Card sx={{ maxWidth: 315, mr:2 , mt: 2 }}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="https://lmsep.wpengine.com/wp-content/uploads/2014/08/course18-420x295.jpg"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         Emerging Trends and Technologies
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda! 
           Repellendus placeat magni iste quaerat consequatur, saepe eaque soluta eos, 
           voluptatibus praesentium doloribus dignissimos quasi id reiciendis, iure similique amet.
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>

   <Card sx={{ maxWidth: 315, mr:2 , mt: 2 }}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="https://lmstheme.wpengine.com/wp-content/uploads/2014/08/course14-420x295.jpg"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         Introduction to Calculus
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda! 
           Repellendus placeat magni iste quaerat consequatur, saepe eaque soluta eos, 
           voluptatibus praesentium doloribus dignissimos quasi id reiciendis, iure similique amet.
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>

   <Card sx={{ maxWidth: 315, mr:2 , mt: 2 }}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="https://lmsep.wpengine.com/wp-content/uploads/2014/08/course13-420x295.jpg"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         Power Electronics
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda! 
           Repellendus placeat magni iste quaerat consequatur, saepe eaque soluta eos, 
           voluptatibus praesentium doloribus dignissimos quasi id reiciendis, iure similique amet.
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>

   <Card sx={{ maxWidth: 315, mr:2 , mt: 2 }}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="https://a6e8z9v6.stackpathcdn.com/clevercourse/wp-content/uploads/2014/08/Fotolia_20569370_Subscription_Monthly_XXL-400x300.jpg"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h6" component="div">
         SPEAKING IN PUBLIC, HOW TO KEEP PEOPLE’S ATTENTION
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda! 
           Repellendus placeat magni iste quaerat consequatur, saepe eaque soluta eos, 
           voluptatibus praesentium doloribus dignissimos quasi id reiciendis, iure similique amet.
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>

   <Card sx={{ maxWidth: 315, mr:2 , mt: 2 }}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="https://a6e8z9v6.stackpathcdn.com/clevercourse/wp-content/uploads/2014/08/Fotolia_30806367_Subscription_Monthly_XL-400x300.jpg"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h6" component="div">
         ALL ABOUT PHOTOSHOP
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda! 
           Repellendus placeat magni iste quaerat consequatur, saepe eaque soluta eos, 
           voluptatibus praesentium doloribus dignissimos quasi id reiciendis, iure similique amet.
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>

   <Card sx={{ maxWidth: 315, mr:2 , mt: 2 }}>
     <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="https://a6e8z9v6.stackpathcdn.com/clevercourse/wp-content/uploads/2014/08/Fotolia_33064312_Subscription_Monthly_XXL-400x300.jpg"
         alt="green iguana"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         MAKING MOBILE APP,
         </Typography>
         <Typography variant="body2" color="text.secondary">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, assumenda! 
           Repellendus placeat magni iste quaerat consequatur, saepe eaque soluta eos, 
           voluptatibus praesentium doloribus dignissimos quasi id reiciendis, iure similique amet.
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>

   </Grid>
   </Box>
   </>
  );
}