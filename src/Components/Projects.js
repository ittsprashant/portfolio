import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';


function Projects() {
    return (
        <>

            <div class="main-sec-1">
                <Container>
                    <div className="sec-2">
                        <p className="sec-heading">{`<>{...Add-Ons}</>`}</p>
                        <ul className={window.innerWidth > 768 ? "ul-list jd-list" : ""}>
                        <li>
                                <strong>
                                    Styx Biotechnologies</strong>
                                <ul>
                                    <p>Developing and managing website for <a href="https://www.styxbiotechnologies.com/" target="_blank" className="App-link">Styx Biotechnologies</a>.</p>
                                    
                                </ul>
                            </li>

                            <li>
                                <strong>
                                    redM</strong>
                                <ul>
                                    <p>Developed website for <a href="https://www.joinredm.com/" target="_blank" className="App-link">redM</a>.</p>
                                    <p>Voluntarily opted to make this website for a noble cause. redM is an organisation that takes steps to avoid sex trafficking and helps the victims to overcome challenges and rise again.</p>
                                    
                                </ul>
                            </li>
                            <li>
                                <strong>Ask Anna</strong>
                                <ul>
                                    <p>A fun game to enjoy with your friends which can be made spooky - Ask questions and get answers. This project is an inspiration from a virtual tarot reading <a href="https://peteranswers.com/" target="_blank">website.</a>
                                    <br></br><a href="https://www.makeuseof.com/tag/peter-work-code-prank/" target="_blank" className="App-link">How to play?</a></p>
                                    <li><a href="https://github.com/ittsprashant/ask_anna" target="_blank" className="App-link">Github</a></li>
                                    <li><a href="https://priceless-shirley-4012e1.netlify.app/" target="_blank" className="App-link">Demo</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </Container >

            </div >

        </>
    )
}

export default Projects
