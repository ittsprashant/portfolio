import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Projects from './Projects';
import HireMe from './HireMe';

function Home() {
    const [showModal, setShowModal] = React.useState(false);
    const handleShowModal = (value) => {
        setShowModal(value);
    }
    return (
        <>
            <div className="main-sec-1">
                <Container>
                    <Row xs={1} md={1} lg={2}>
                        <Col>
                            <div className="main-sec-1-col-1">
                                <p className="text-class">
                                    I'm <span className="name"><a className="App-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.linkedin.com/in/itsprashant95/">Prashant</a></span> Awasthi
                                </p>
                                <p className="text-class-subclass">{`{ReactJs Developer}`}</p>
                                <p className="text-class-subclass-skill"><span className="let-class">let</span> primarySkills = ["ReactJs", "Java Script"] ;</p>
                                <p className="text-class-subclass-skill"><span className="let-class">let</span> techStack = [...primarySkills, "Python", "HTML", "CSS"] ;</p>
                            </div>
                        </Col>

                        {window.innerWidth > 768 ? <>

                            <Col style={{ position: "relative" }}>
                            <div className="main-sec-1-col-2">
                                <Button className="hire-me" size="lg" onClick={()=>setShowModal(true)}>
                                    Hire Me!
                                </Button>{' '}


                            </div>
                            <div className="exp-div">
                                3 Years
                            </div>
                        </Col>
                        
                        
                        </>:<>

                        <Col style={{ position: "relative" }}>

                        <div className="exp-div-mweb">
                                3 Years
                            </div>
                            <div className="main-sec-1-col-2 d-grid gap-2">
                                <Button className="hire-me" size="lg" onClick={()=>setShowModal(true)}>
                                    Hire Me!
                                </Button>{' '}


                            </div>
                            
                        </Col>
                        
                        </>}
                    </Row>
                </Container >

            </div >


            <div className="main-sec-1">
                <Container>
                    <div className="sec-2">
                        <p className="sec-heading">{`<>{...Me}</>`}</p>
                        <br></br>
                        <br></br>
                        <ul className={window.innerWidth > 768 ? "ul-list" : ""}>
                            <li className="exp-list">
                                <Row>
                                    <p className="job-title"> <span className={window.innerWidth > 768 ? "ul-list-company" : ""}> {`=>`} <a href="https://www.extramarks.com/" target="_blank" className="App-link">Extramarks Education</a></span>{" "}<span className={window.innerWidth > 768 ? "ul-list-tenure" : ""}>(June 2021 – Present)</span></p>
                                </Row>
                                <p className="job-profile">Software Developer (React)</p>
                                <p className="job-description">
                                    <ul className="jd-list">
                                        <li><strong>Student Dashboards:</strong> Member of core team developing learning App for students and teachers using ReactJs.</li>
                                        <li><strong>Zoom</strong> integration on web and mobile apps for users in react.</li>
                                        <li>Live Classes integration with <strong>Impartus</strong> on our app. </li>
                                    </ul>
                                </p>
                            </li>
                            <br></br>
                            <br></br>

                            <li className="exp-list">
                                <Row>
                                    <p className="job-title"> <span className={window.innerWidth > 768 ? "ul-list-company" : ""}> {`=>`} <a href="https://www.paralleldots.com/about-us" target="_blank" className="App-link">Paralleldots</a></span>{" "}<span className={window.innerWidth > 768 ? "ul-list-tenure" : ""}>(Feb 2020 – May 2021)</span></p>
                                </Row>
                                <p className="job-profile">Full Stack Developer (React+Python)</p>
                                <p className="job-description">
                                    <ul className="jd-list">
                                        <li><strong>PowerBI Embed Dashboards:</strong> Owner of all PowerBI Embeddings for clients like Unilever, Mondelez, and Nestle in react and flask using Microsoft Authentication Library (MSAL) in Python.</li>
                                        <li><strong>NPD Tool:</strong> Created New Product Detection Tool for Ferrero from scratch in react. This tool allows client to recognize different products in a shelf image and mark them.</li>
                                        <li><strong>SSO:</strong> Implemented Paralleldots Single Sign On for client dashboards and demos.</li>
                                        <li>Revamped entire website of Paralleldots ensuring 3x faster loading time</li>

                                    </ul>
                                </p>
                            </li>
                        </ul>
                    </div>
                </Container >

            </div >

            <Projects />

        </>
    )
}

export default Home;
