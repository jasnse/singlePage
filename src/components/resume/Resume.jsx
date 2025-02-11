import React from "react";
import "./resume.css"

const Resume = () => {

    const dwn = () => {
        const pdfURL = "CV - Jason.pdf"
        const link = document.createElement("a")
        link.href = pdfURL
        link.download = "/CV - Jason.pdf"
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link)
    }

    return (
        <div className="container my-5" id="resume">
            <div className="row" style={{ marginBottom:'15vw', marginTop:'8vw'}}>
                <div className="col-md-4 col-12 fs-1 fw-semibold pb-3">Experiences</div>
                <div className="col-md-8 col-12">
                    <p className="mb-5" style={{ textAlign: 'justify' }}>sdasd.</p>
                    <button onClick={dwn} className="btndwn py-3 px-5 rounded-2 text-white" style={{ backgroundColor: '#0116CE' }}>Download Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Resume