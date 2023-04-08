import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import BAScreenHeader from '../../Component/BAScreenHeader';
function AdminStudent() {
    const navigate = useNavigate()
    let openForm = (obj) => {
        navigate('../studentregisteration', { state: obj})
    };
    let openListofKU = (obj) => {
        navigate('../viewstudentku', { state: obj})
    };
    let openListofDOW = (obj) => {
        navigate('../viewstudentdow', { state: obj})
    };
    let openListofSAIMS = (obj) => {
        navigate('../viewstudentsaims', { state: obj})
    };
    let openListofSMIT = (obj) => {
        navigate('../viewstudentsmit', { state: obj})
    };
    let openListofNED = (obj) => {
        navigate('../viewstudentned', { state: obj})
    };
  return (
  <>
  <BAScreenHeader screenTitle="Student"/>
   <div>
     <Card>
      <Card.Header className='fw-bold'>Enroll Student</Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>Enroll New Student</Card.Title>
        <Card.Text>
          Here You can manage the Student's Enrollment.
        </Card.Text>
        <Button variant="primary" onClick={(e) => openForm(e)}>Click here</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className='fw-bold'>View Student's of Dow</Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>View the existing student's of DOW Institute</Card.Title>
        <Card.Text>
          Here You can view the existing Student's of DOW Institute 
        </Card.Text>
        <Button variant="primary"  onClick={(e) => openListofDOW(e)}>Click here</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className='fw-bold'>View Student's of KU</Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>View the existing student's of KU Institute</Card.Title>
        <Card.Text>
          Here You can view the existing Student's of KU Institute 
        </Card.Text>
        <Button variant="primary"  onClick={(e) => openListofKU(e)}>Click here</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className='fw-bold'>View Student's of SMIT</Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>View the existing student's of SMIT Institute</Card.Title>
        <Card.Text>
          Here You can view the existing Student's of SMIT Institute 
        </Card.Text>
        <Button variant="primary"  onClick={(e) => openListofSMIT(e)}>Click here</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className='fw-bold'>View Student's of SAIMS</Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>View the existing student's of SAIMS Institute</Card.Title>
        <Card.Text>
          Here You can view the existing Student's of SAIMS Institute 
        </Card.Text>
        <Button variant="primary"  onClick={(e) => openListofSAIMS(e)}>Click here</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className='fw-bold'>View Student's of NED</Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>View the existing student's of NED Institute</Card.Title>
        <Card.Text>
          Here You can view the existing Student's of NED Institute 
        </Card.Text>
        <Button variant="primary"  onClick={(e) => openListofNED(e)}>Click here</Button>
      </Card.Body>
    </Card>
   </div>
    </>
  );
}

export default AdminStudent;