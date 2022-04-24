import React  from 'react'
import {Container,Row, Card,Col,Form} from 'react-bootstrap';

export default function Question(props) {
    
    const handleRadio=(e)=>{
        const change=props.change;
        change({[`group_${props.q.id}`]:e.target.value});
    }

    return (
    <Container>
        <Card  style={{borderRadius:"10px"}} className='shadow-lg rounded' >
            <Row>
                
                <Col>
                <Row className='mx-4 my-3'>{props.q.ques}</Row>
                <Row className='mx-4 mt-4 mb-3' >
                <Form.Check type="radio" name={`group_${props.q.id}` } label="Yes" value={1}  onClick={handleRadio}/>
                <Form.Check type="radio" name={`group_${props.q.id}`}  label="No"  value={0} onClick={handleRadio}/>
                </Row>
               
                </Col>       
            </Row>        
        </Card>
    </Container>
  )
}
