import React, {useState}from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import Question from './Question';
import Ques from '../question.json';
import { useNavigate } from 'react-router-dom';
let obj;
export default function Homepage() {
    const nav=useNavigate();
    let [answer, setanswer] = useState({
        group_1:'',
        group_2:'',
        group_3:'',
        group_4:'',
        group_5:'',
        group_6:'',
        group_7:'',
        group_8:'',
        group_9:''
    });

    obj={
        ...obj,
        ...answer
    };
    
    const handleForm=()=>{
        console.log(obj);
        if(obj.group_1==='1'&&obj.group_2==='1'&&obj.group_4==='1'&&obj.group_5==='1'){
           
            nav('/Depression',{state:{success:true,disease:"Depression"}})
            console.log("Depression");
        }
        else if(obj.group_5==='1'&&obj.group_6==='1'&&obj.group_7==='1'){
            
            nav('/PSTD',{state:{success:true,disease:"PSTD"}})
            console.log("PSTD");
        }
        else if(obj.group_2==='1'&&obj.group_5==='1'&&obj.group_4==='1'&&obj.group_6===1){
            
            nav('/Bipolar',{state:{success:true,disease:"Bipolar"}})
            console.log("Bipolar");
        }
        else if(obj.group_1==='1'&&obj.group_2==='1'&&obj.group_3==='1'){
            
            nav('/Addiction',{state:{success:true,disease:"Addiction"}})
            console.log("Addiction");
        }
        else if(obj.group_5==='1'&&obj.group_8==='1'&&obj.group_9==='1'){
            
            nav('/Schizophenia',{state:{success:true,disease:"Schizophenia"}})
            console.log("Schizophenia");
        }
        else{
            
            nav('/404',{state:{success:false}})
            console.log("not");
        }
       
    }

    return (
    <>
    <Container >
        <h1 className='d-flex justify-content-center my-2'>
            Fill the following form
        </h1>
        <Row className='d-flex justify-content-center mt-4'>
        {Ques.map((e)=>{
            return(
                <Col className='my-2' md={9} key={e.id}  >
                <Question q={e} state={answer} change={setanswer}/>
                </Col>            
            )
         })}   
        </Row>
        <Row >
            <Col className='d-flex justify-content-center mt-3' md={12}><Button  style={{fontSize:'20px'}} variant="danger" onClick={handleForm}>Submit</Button></Col>
        </Row>       
         
       
    </Container>
    
    </>
  )
}
