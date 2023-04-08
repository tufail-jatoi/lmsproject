import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import BAScreenHeader from '../../Component/BAScreenHeader';
function AdminTeacher() {
    const navigate = useNavigate()
    let openForm = (obj) => {
        navigate('../teacherregisteration', { state: obj})
    };
    let openListofKU = (obj) => {
        navigate('../viewteacherku', { state: obj})
    };
    let openListofDOW = (obj) => {
        navigate('../viewteacherdow', { state: obj})
    };
    let openListofSAIMS = (obj) => {
        navigate('../viewteachersaims', { state: obj})
    };
    let openListofSMIT = (obj) => {
        navigate('../viewteachersmit', { state: obj})
    };
    let openListofNED = (obj) => {
        navigate('../viewteacherned', { state: obj})
    };
  return (
  <>
  <BAScreenHeader screenTitle="Teacher"/>
   <div>
     <Card>
      <Card.Header className='fw-bold'>Enroll Teacher</Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>Enroll New Teacher</Card.Title>
        <Card.Text>
          Here You can manage the Teacher's Enrollment.
        </Card.Text>
        <Button variant="primary" onClick={(e) => openForm(e)}>Click here</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className='fw-bold'>View Teacher's of Dow</Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>View the existing Teacher's of DOW Institute</Card.Title>
        <Card.Text>
          Here You can view the existing Teacher's of DOW Institute 
        </Card.Text>
        <Button variant="primary"  onClick={(e) => openListofDOW(e)}>Click here</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className='fw-bold'>View Teacher's of KU</Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>View the existing Teacher's of KU Institute</Card.Title>
        <Card.Text>
          Here You can view the existing Teacher's of KU Institute 
        </Card.Text>
        <Button variant="primary"  onClick={(e) => openListofKU(e)}>Click here</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className='fw-bold'>View Teacher's of SMIT</Card.Header>
      <Card.Body> 
        <Card.Title className='fw-bold'>View the existing Teacher's of SMIT Institute</Card.Title>
        <Card.Text>
          Here You can view the existing Teacher's of SMIT Institute 
        </Card.Text>
        <Button variant="primary"  onClick={(e) => openListofSMIT(e)}>Click here</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className='fw-bold'>View Teacher's of SAIMS</Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>View the existing Teacher's of SAIMS Institute</Card.Title>
        <Card.Text>
          Here You can view the existing Teacher's of SAIMS Institute 
        </Card.Text>
        <Button variant="primary"  onClick={(e) => openListofSAIMS(e)}>Click here</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className='fw-bold'>View Teacher's of NED</Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>View the existing Teacher's of NED Institute</Card.Title>
        <Card.Text>
          Here You can view the existing Teacher's of NED Institute 
        </Card.Text>
        <Button variant="primary"  onClick={(e) => openListofNED(e)}>Click here</Button>
      </Card.Body>
    </Card>
   </div>
    </>
  );
}

export default AdminTeacher;