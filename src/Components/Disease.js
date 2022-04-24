import React from 'react'
import { Card ,Row,Col,Container} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
export default function Disease() {
  const loc=useLocation();
  
  return (
    <>
      <Container className='my-4 d-flex align-items-center' >
        <Row>
          <Col md={3}></Col>
          <Col md={6} className='my-4 d-flex justify-content-center align-items-center'>
            <Card width="100%" style={{borderRadius:"10px"}} className='shadow-lg roundedd-flex ' >
              <Row >
                
                <Col lg={2}></Col>
                <Col lg={10} className="my-4"><Card.Title>{!loc.state.success?<h3>Disease Not Found</h3>:<h4>You are Suffering from {loc.state.disease}</h4>}</Card.Title></Col>      
              </Row>
              <Container className='mb-5'>
              {loc.state.disease==="Schizophenia" && 
                <Card.Text>
                  Schizophrenia is a serious mental disorder in which people interpret reality abnormally. Schizophrenia may result in some combination of hallucinations, delusions, and extremely disordered thinking and behavior that impairs daily functioning, and can be disabling.  
                  People with schizophrenia require lifelong treatment. Early treatment may help get symptoms under control before serious complications develop and may help improve the long-term outlook.
                </Card.Text>        
              }
              {loc.state.disease==="PSTD" && 
                <Card.Text>
                  Post-traumatic stress disorder (PTSD) is a mental health condition that's triggered by a terrifying event — either experiencing it or witnessing it. Symptoms may include flashbacks, nightmares and severe anxiety, as well as uncontrollable thoughts about the event.
                  Most people who go through traumatic events may have temporary difficulty adjusting and coping, but with time and good self-care, they usually get better. If the symptoms get worse, last for months or even years, and interfere with your day-to-day functioning, you may have PTSD.
                </Card.Text>        
              }
              {loc.state.disease==="Addiction" && 
                <Card.Text>
                  Addiction is a chronic condition that can also result from taking medications. In fact, the misuse of opioids — particularly illicitly made fentanyl. 
                  The American Society of Addiction Medicine defines addiction as "a treatable, chronic medical disease involving complex interactions among brain circuits, genetics, the environment, and an individual’s life experiences. People with addiction use substances or engage in behaviors that become compulsive and often continue despite harmful consequences."
                </Card.Text>        
              }
              {loc.state.disease==="Bipolar" && 
                <Card.Text>
                 Bipolar disorder, formerly called manic depression, is a mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).
                 When you become depressed, you may feel sad or hopeless and lose interest or pleasure in most activities. When your mood shifts to mania or hypomania (less extreme than mania), you may feel euphoric, full of energy or unusually irritable. These mood swings can affect sleep, energy, activity, judgment, behavior and the ability to think clearly.
                </Card.Text>        
              }
              {loc.state.disease==="Depression" && 
                <Card.Text>
                  Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. Also called major depressive disorder or clinical depression, it affects how you feel, think and behave and can lead to a variety of emotional and physical problems. You may have trouble doing normal day-to-day activities, and sometimes you may feel as if life isn't worth living.
                  More than just a bout of the blues, depression isn't a weakness and you can't simply "snap out" of it. Depression may require long-term treatment. But don't get discouraged. Most people with depression feel better with medication, psychotherapy or both.
                </Card.Text>        
              }
              {loc.state.success===false &&
              <Card.Text>
                There is no such disease found  according to our Data present in the model and you are free from the diseases. 
              </Card.Text>

              }
                
              </Container>
                      
            </Card>
          </Col>
        </Row>
        
      </Container>
      
      
    </>
  )
}
