import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BAScreenHeader from '../../Component/BAScreenHeader';
import Checkbox from '@mui/material/Checkbox';

function ViewTeacherNED(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: 'DOB: 2002-01-05',
        enrollMent: '20020',
        batch: "5A",
        other: "Self",
      },
      {
        date: 'Enrollment: 2020-01-02',
        enrollMent: 'Web and App',
        batch: "Front-end",
        other: "Self",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
   
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <Checkbox
            color="primary" aria-label='check'/>
            
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className='fw-bold'>Date</TableCell>
                    <TableCell className='fw-bold' >Enrollment NO:</TableCell>
                    <TableCell className='fw-bold' >Batch</TableCell>
                    <TableCell className='fw-bold'  >Other</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.enrollMent}</TableCell>
                      <TableCell  >{historyRow.batch}</TableCell>
                       
                      <TableCell>{historyRow.other}</TableCell>
                   
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  ViewTeacherNED(
    'Aisha Ahmed', "Pakistan", "Karachi", +92321212121, "Female",),
  ViewTeacherNED('Michael Johnson', "Pakistan", "Karachi", +92321212121, "Male",  ),
  ViewTeacherNED('Omar Hassan', "Pakistan", "Karachi", +92321212121, "Male",),
  ViewTeacherNED('Ali Mahmood',"Pakistan", "Karachi", +92321212121, "Male", ),
  ViewTeacherNED('Maria Rodriguez', "Pakistan", "Karachi", +92321212121, "Female", ),
  ViewTeacherNED('Fatima Khan', "Pakistan", "Karachi", +92321212121, "Female",),
  ViewTeacherNED('Ali Ahmed', "Pakistan", "Karachi", +92321212121, "Male", ),
  ViewTeacherNED('Juan Martinez', "Pakistan", "Karachi", +92321212121, "Male", ),
  ViewTeacherNED('Jhon Adam', "Pakistan", "Karachi", +92321212121, "Male", ),
  ViewTeacherNED('Sarah Anderson', "Pakistan", "Karachi", +92321212121, "Female", ),
];

export default function CollapsibleTable() {
  return (
    <>
     <BAScreenHeader screenTitle="NED Teacher's Details"/>
    <TableContainer component={Paper} className="mx-5" sx={{height: 500, width: '80%' }}>
      <Table sx={{height: 400, width: '70%' }} aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className='fw-bold'>Full Name</TableCell>
            <TableCell className='fw-bold' align="right">Country</TableCell>
            <TableCell className='fw-bold' align="right">City</TableCell>
            <TableCell className='fw-bold' align="right">Phone</TableCell>
            <TableCell className='fw-bold' align="right">Gender</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer></>
  );
}