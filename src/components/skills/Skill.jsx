import Accordion from 'react-bootstrap/Accordion';
import "./skill.css"

const data = [
    { title: 'Web Development', content: ['HTML , CSS , Bootstrap','ReactJS , NextJS','Laravel','JavaScript, ThreeJS'] },
    { title: 'Programming Language', content: ['Java, JavaFX', 'Android Studio', 'DB: SQL'] },
    { title: 'Other', content: ['UI/UX Design using Figma and Axure','Editing using Adobe Illustrator and Procreate','Languages: English, Japan (Intermediate)'] },
  ];
  

const Skill = () => {
    return (
        <div className="container" id="skill">
            <div className="row">
                <p className="fs-1 fw-semibold">Technical Skills</p>
                {data.map((item,index)=>(
                        <div key={index} className="col-md-4">
                        <Accordion defaultActiveKey={index === 0 ? '0' : null} alwaysOpen className="my-2">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="rounded-2 border-1">{item.title}</Accordion.Header> 
                                    <Accordion.Body className="rounded-2 accordion-body">
                                        <ul>
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