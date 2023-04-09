import React from "react";
import { Button, Modal, Table } from "react-bootstrap";

export const ResultsModal = ({ instagramIds, showState, onClose }) => {
  const url = "https://www.instagram.com/";

  return (
    <Modal show={showState} onHide={onClose} scrollable={true}>
      <Modal.Header>
        <Modal.Title>People that don't follow you</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table>
          <thead>
            <tr>
              <th>
                <strong>Instagram Username</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {instagramIds.map((id) => (
              <tr>
                <td>
                  <a href={url + id} target="_blank">
                    {id}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
