import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import BAScreenHeader from '../../Component/BAScreenHeader';
import BAModal from '../../Component/BAModal';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const Institute = () => {
    const [instituteList,setInstituteList] = useState([
        {
            instituteName: "SAIMS",
            fullName: "Sir Adamjee Institute of Management Sciences",
            logo: "https://png.pngtree.com/element_pic/16/12/18/8b54754c4dd581744bcc63c25f4137de.png",
            noOfCampus: 3,
            activeInActive: true,
            
        },{
            instituteName: "SMIT",
            fullName:"Saylani Welfare Mass IT Training ",
            logo: "https://e7.pngegg.com/pngimages/101/889/png-clipart-education-logo-graphic-design-school-hat-books-hat-hat-vector.png",
            noOfCampus: 4,
            activeInActive: false,
        },{
            instituteName: "KU",
            fullName:"Karachi University",
            logo: "https://banner2.cleanpng.com/20180712/tjz/kisspng-university-of-karachi-government-college-universit-karachi-5b477df1699d31.0613478315314119534326.jpg",
            noOfCampus: 2,
            activeInActive: true,
        },{
            instituteName: "NED",
            fullName:"NED University Of Engineering & Technology",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/NEDUET_logo.svg/1200px-NEDUET_logo.svg.png",
            noOfCampus: 1,
            activeInActive: false,
        },{
            instituteName: "DOW",
            fullName:"Dow University of Health Sciences (DUHS)",
            logo: "https://w7.pngwing.com/pngs/718/439/png-transparent-dow-university-of-health-sciences-dow-international-medical-college-dow-medical-college-anti-corruption-logo-university-academic-degree.png",
            noOfCampus: 1,
            activeInActive: false,
        },
    ]);
    const [openModal, SetOpenModal] = useState(false);
    const navigate = useNavigate()

    let openDetail = (obj) => {
        navigate('../institutedetails', { state: obj})
    };
    let openForm = (obj) => {
        navigate('../instituteform', { state: obj})
    };
    let del = () => {
        SetOpenModal(true)
    };
  return (
  <>
  <BAModal
  width="40vw"
  modalTitle="Delete"
  open={openModal}
  close={(e) => SetOpenModal(e)}
  innerContent={<Box className='p-3 text-center'>
    <Typography>Are You Sure You Want To Delete this Record?</Typography>
    <Box>
    <Button href="#text-buttons" color="success" className="border" >Yes</Button>
    <Button href="./institute" color="error" className="border">No</Button>
    </Box>
  </Box>} />
   
    <BAScreenHeader screenTitle="Institude"/>
    <h2>Institute's</h2>
    {instituteList && Array.isArray(instituteList) && instituteList.length>0?
    instituteList.map((x, i)=>(
        <Paper onClick={()=> openDetail(x)} className='p-3 my-2 border'>
            <Grid container>
                <Grid className='text-center' md={1}>
                    <img width='50px'
                     height='50px'
                      src={x.logo}
                       alt={x.instituteName} />
                </Grid>
                <Grid item md={3}>                  
         <Typography sx={{fontSize:12}}
          className='fw-bold text-muted px-1'>Name</Typography>
         <Typography variant='h5'>{x.instituteName}</Typography>
                </Grid>
                <Grid item md={3}>
                <Typography sx={{fontSize:12}}
          className='fw-bold text-muted'>No of Campus</Typography>                  
         <Typography variant='h5' className="px-4 py-1">{x.noOfCampus}</Typography>
                </Grid>
                <Grid item md={3}>  
                <Typography sx={{fontSize:12}}
          className='fw-bold text-muted'>Active / Inactive</Typography>                 
         <Typography  variant='h5' className="px-4 py-1">
         <CircleIcon color={x.activeInActive ? "error" : ""}  />
         {" "}
         </Typography>
                </Grid>
                <Grid item md={1}> 
                <Tooltip title="Delete">
                <IconButton>
                <DeleteIcon color='error' onClick={(e) => {e.stopPropagation();
                del();
                }} /> 
                </IconButton>
                </Tooltip>
                 <Tooltip title="Edit">
                 <IconButton>
                <EditIcon  color='secondary'  onClick={(e) =>
                    { e.stopPropagation();
                        openForm(x)}} /> 
                         </IconButton>
                         </Tooltip>
                </Grid>
            </Grid>
    </Paper>)): null}
        
    </>
  )
}

export default Institute