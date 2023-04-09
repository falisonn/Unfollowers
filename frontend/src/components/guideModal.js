import React from "react";
import { Button, Carousel, Modal } from "react-bootstrap";
import "./guideModal.css";

export const GuideModal = ({ showState, onClose }) => {
  const steps = [
    { text: "Go to your profile", index: 1 },
    { text: "Go to options", index: 2 },
    { text: "Click on Privacy and security", index: 3 },
    { text: "Scroll down to Data Download and click on the link", index: 4 },
    { text: "Select JSON and click on Next", index: 5 },
    { text: "This zip file is what you will receive from a link in the mailbox. Unzip it and you should have a folder like this", index: 6 },
    { text: "Get into the folder and you will find a followers_and_following folder. Double-click it to get into it.", index: 7 },
    { text: "Here you should be able to find these 2 files.", index: 8 },
    { text: "Go on the website on the Unfollwers page where you will find a dropzone.", index: 9 },
    { text: "Select those 2 files from earlier one by one.", index: 10 },
    { text: "Remember! It is important that you select them separately.", index: 11 },
    { text: "After you selected your files the page should look like this. Now, click on submit!", index: 12 },
    { text: "After clicking on submit, you will get the list of people that don't follow you back.", index: 13 },
  ];

  return (
    <Modal size="lg" show={showState} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Guide</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel fade>
          {steps.map((step) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../assets/images/guide" + step.index + ".png")}
                alt="Not able to render!"
              />
              <h5 className="d-flex justify-content-center mt-2">
                {step.text}
              </h5>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
