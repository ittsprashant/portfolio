import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import AutoText from './AutoText';
import HireMe from './HireMe';
import TextSphere from './TextSphere';
// 8dc891 - green
// 61dafb - blue
// #f56f16 - orange
function HomeRevamp(props) {

    return (
        <div style={{margin:"50px auto"}}>
            <h2>Hi...</h2>

            <h2>I am <span className='get-underline' onClick={() => props?.handleShowModal(true)} style={{ color: "#8dc891" }}>Prashant</span> Awasthi <span style={{color:"#f56f16", fontWeight:"400"}}>{`,${" "} {ReactJs Developer}`}</span></h2>
            <p>I have <span className='get-underline' onClick={() => props?.handleShowModal(true)} style={{ color: "#8dc891", fontWeight: "600", fontSize: "22px" }}>3+ years</span>  of Software Development Experience with overall professional experience of <span style={{ "textDecoration": "underline" }}>4 years</span></p>

            <div className='two-column-section'>

                <div className='section-70'>
                    <h4>{`<Work Experience/>`}</h4>
                    <div style={{ textAlign: "left", width: "75%", margin: "40px auto" }}>
                        <h5 className='company-name'>Extramarks Educations Pvt. Ltd. </h5>
                        <h6>Sr. Software Engineer (ReactJs) <span style={{ float: "right" }}>(Aug 2022 - Present)</span></h6>
                        <ul>
                            <li>
                                Mentoring juniors by helping them dive deep into the concepts of react and vanilla JS
                            </li>
                            <li>
                                Leading major R&D projects within the company to boost performance of our web app
                            </li>
                            <li>
                                Some of the projects include converting current app to a PWA which will allow data to be synced in the background at specific intervals
                            </li>
                        </ul>


                        <h6>Software Developer (ReactJs)<span style={{ float: "right" }}>(June 2021 - Aug 2022)</span></h6>
                        <ul>
                            <li>
                                Student Dashboards: Member of core team developing learning App for students
                                and teachers using ReactJs
                            </li>
                            <li>
                                Zoom integration on web and mobile apps for users in react.
                            </li>
                            <li>
                                Live Classes integration with Impartus on our app.
                            </li>
                        </ul>


                        <br></br>
                        {/* paralleldots */}

                        <h5 className='company-name'>Paralleldots</h5>
                        <h6>Front-End Developer (ReactJs + Python)<span style={{ float: "right" }}>(Feb 2020 – May 2021)</span></h6>
                        <ul>
                            <li>
                                PowerBI Embed Dashboards: Owner of all PowerBI Embeddings for
                                clients like Unilever, Mondelez, and Nestle in react and flask using
                                Microsoft Authentication Library (MSAL) in Python.
                            </li>
                            <li>
                                NPD Tool: Created New Product Detection Tool for Ferrero from scratch in
                                react. This tool allows client to recognize different products in a shelf
                                image and mark them.
                            </li>
                            <li>
                                SSO: Implemented Paralleldots Single Sign On for client dashboards and
                                demos.
                            </li>
                            <li>
                                Revamped entire website of Paralleldots ensuring 3x faster loading time
                            </li>
                        </ul>


                    </div>



                </div>
                <div className='section-30'>

                    <h4>{`<Tech Stack/>`}</h4>

                    <div className='tech-stack-detail' style={{ margin: "40px auto" }}>
                        <ul>
                            <li>ReactJs</li>
                            <li>Java Script</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    <div style={{ margin: "40px auto" }}>
                        <TextSphere/>
                    </div>




                </div>

            </div>


            <div>
                <h4>{`<Add-Ons/>`}</h4>

                <div className='add-on-detail' style={{margin: "40px auto", width:"60%", textAlign:"left"}}>

                    <h5>Styx Biotechnologies</h5>
                    <ul>
                        <li>
                        Developing and managing website for <a href="https://www.styxbiotechnologies.com/" target="_blank" className="App-link">Styx Biotechnologies</a>
                        </li>
                    </ul>


                    <h5>redM</h5>
                    <ul>
                        <li>
                        Developed website for <a href="https://www.joinredm.com/" target="_blank" className="App-link">redM</a>
                        </li>
                        <li>
                        Voluntarily opted to make this website for a noble cause. redM is an organisation that takes steps to avoid sex trafficking and helps the victims to overcome challenges and rise again
                        </li>
                    </ul>


                    <h5>Go For Vaccine</h5>
                    <ul>
                        <li>
                        A web app that notifies whenever vaccination slots are available
                        </li>
                        <li>
                        <a href="https://github.com/ittsprashant/go_for_vaccine" target="_blank" className="App-link">Github</a><span style={{color:"darkgray"}}>{" | "}</span><a href="https://go-for-vaccine.netlify.app/" target="_blank" className="App-link">Demo</a>
                        </li>
                    </ul>



                    <h5>Ask Anna</h5>
                    <ul>
                        <li>
                        A fun game to enjoy with your friends which can be made spooky - Ask questions and get answers. This project is an inspiration from a virtual tarot reading <a href="https://peteranswers.com/" target="_blank">website</a>
                        </li>
                        <li>
                        <a href="https://www.makeuseof.com/tag/peter-work-code-prank/" target="_blank" className="App-link">How to play?</a><span style={{color:"darkgray"}}>{" | "}</span><a href="https://github.com/ittsprashant/ask_anna" target="_blank" className="App-link">Github</a><span style={{color:"darkgray"}}>{" | "}</span><a href="https://askanna.netlify.app/" target="_blank" className="App-link">Demo</a>
                        </li>
                    </ul>

                    <h5>Wordle</h5>
                    <ul>
                        <li><a href="https://github.com/ittsprashant/wordle" target="_blank" className="App-link">Github</a><span style={{color:"darkgray"}}>{" | "}</span><a href="https://prashants-wordle.netlify.app/" target="_blank" className="App-link">Demo</a></li>
                    </ul>



                    


                </div>

            
            </div>

            {/* <AutoText/> */}

            {/* <TextSphere/> */}

        </div>


    )
}

export default HomeRevamp