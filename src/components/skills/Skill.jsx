import Accordion from 'react-bootstrap/Accordion';
import "./skill.css"

const data = [
    { title: 'System Analyst & Design', content: ['Figma', 'UML Diagram', 'Software Testing'] },
    { title: 'Programming Language', content: ['Java, JavaFX', 'DB: SQL, Oracle', 'HTML, CSS'] },
    { title: 'Other', content: ['Katalon', 'UIPATH', 'Auditing', 'Microsoft Office', 'Basic Accounting' ] },
    { title: 'Soft Skill', content: ['Time management', 'Communication', 'Analytical Thinking', 'Critical Thinking', 'Teamwork', 'Problem Solving' ] },
  ];
  

const Skill = () => {
    return (
        <div className="container" id="skill">
            <div className="row">
                <p className="fs-1 fw-semibold">Skills</p>
                {data.map((item,index)=>(
                        <div key={index} className="col-md-3">
                        <Accordion defaultActiveKey={index === 0 ? '0' : null} alwaysOpen className="my-2">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="rounded-2 border-1" >{item.title}</Accordion.Header> 
                                    <Accordion.Body className="rounded-2 accordion-body">
                                        <ul className="text-white">
                                            {item.content.map((itemContent, contentIndex) => (
                                                <li key={contentIndex}> {itemContent} </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                        </Accordion>
                        </div>
                    ))}


            </div>
        </div>
    )
}

export default Skill