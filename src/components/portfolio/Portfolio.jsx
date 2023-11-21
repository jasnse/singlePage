import { useState } from "react";
import "./portfolio.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Menu from "./Menu";

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updateItems = Menu.filter((currElem)=>{
            return currElem.category === categoryItem;
        })
        setItems(updateItems);
    }

    return (
        <section className="work container" id="work" style={{ marginBottom:'8vw', marginTop:'8vw'}}>
            <div className="row">
                <p className="fs-1 fw-semibold" style={{ marginBottom:'1.4vw' }}>Recent Projects</p>
                <div className="work-filters align-items-center mx-auto text-center mb-4 row">
                    <div className="row text-center align-items-center justify-content-center mx-auto gap-3">
                        <div className="work-item col-md-2 col-5 text-white py-2 rounded-2" style={{ backgroundColor:'#6E7CFF' }} onClick={() => setItems(Menu)}>All Projects</div>
                        <div className="work-item col-md-2 col-5 text-white py-2 rounded-2" style={{ backgroundColor:'#6E7CFF' }} onClick={() => filterItem("Website")}>Website</div>
                        <div className="work-item col-md-2 col-5 text-white py-2 rounded-2" style={{ backgroundColor:'#6E7CFF' }} onClick={() => filterItem("Mobile")}>Mobile</div>
                        <div className="work-item col-md-2 col-5 text-white py-2 rounded-2" style={{ backgroundColor:'#6E7CFF' }} onClick={() => filterItem("UI/UX")}>UI/UX</div>
                    </div>
                </div>

                <div className="row work-container grid align-items-center mx-auto">
                    {items.map((elem)=>{
                        const{id, image, title, category, desc, link} = elem;
                        return (
                            <div key={id} className="col-md-4 col-6 mt-3">
                                <Card key={id}>
                                <Card.Img variant="top" className="object-fit-cover imagepr" src={image} style={{height:'20vw'}}/>
                                <Card.Body className="rounded-2">
                                <Card.Title className="fw-semibold pr-title"> {title} </Card.Title>
                                <Card.Text className="mb-1" style={{ color: '#A7A7A7' }}>
                                    {category}
                                </Card.Text>
                                <Card.Text className="mt-0 descProject" style={{ minHeight: '15vh', textAlign:'justify' }}>
                                    {desc}
                                </Card.Text>
                                <Button className="primary source text-white px-4" target="_blank" href={link} >Source</Button>
                                </Card.Body>
                            </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Portfolio