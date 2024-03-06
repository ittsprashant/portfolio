import React from 'react'
import { Modal, Button } from 'react-bootstrap';

function HireMe(props) {
    const { showModal, handleShowModal } = props;

    const handleClose = () => {
        handleShowModal(false);
    }
    return (
        <div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Contact: +91-7830929186</p>
                    <p>Email: itsprashant95@gmail.com</p>
                    </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                    <Button variant="primary" onClick={()=>{
//                         https://drive.google.com/file/d/1wcFCioY69qk6wNE-eJtNnoxWXAx1lGmA/view
//                         https://drive.google.com/file/d/1gSA2XsNsN4HaCn6ImM1DqQQI1NAPvSMM/view?usp=sharing
// https://drive.google.com/file/d/1plvpTOQesrXyk1x_9spTI3zZlNyukcO6/view
                        // window.open("https://drive.google.com/file/d/1plvpTOQesrXyk1x_9spTI3zZlNyukcO6/view","_blank")
                        window.open("https://drive.google.com/file/d/1IUE-McPKnWhZdTQ64Oiitx83mMWBeT_n/view","_blank")
                        // https://drive.google.com/file/d/1IUE-McPKnWhZdTQ64Oiitx83mMWBeT_n/view?usp=sharing
                        handleClose()}}>
                        {/* <a href="https://drive.google.com/file/d/1gSA2XsNsN4HaCn6ImM1DqQQI1NAPvSMM/view?usp=sharing" download></a> */}
                        View Resume
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default HireMe
