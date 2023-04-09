import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { GrFormClose } from "react-icons/gr";
import { FilesDropzone } from "../../components/dropzone";
import { ResultsModal } from "../../components/resultsModal";
import "./unfollowers.js";

export const Unfollowers = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState();
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [notFollowing, setNotFollowing] = useState([]);
  const [displayResultsModal, setDisplayResultsModal] = useState(false);

  const handleDrop = (file) => {
    setFiles([...files, file]);
    const fr = new FileReader();
    fr.onload = () => {
      if (file.name.includes("following")) {
        setFollowing(
          JSON.parse(fr.result).relationships_following.map(
            (fllw) => fllw.string_list_data[0].value
          )
        );
      } else if (file.name.includes("followers")) {
        setFollowers(
          JSON.parse(fr.result).map((fllw) => fllw.string_list_data[0].value)
        );
      }
    };
    fr.readAsText(file);
  };

  const handleSubmit = () => {
    setError("");
    if (files.length !== 2) {
      setError("You should drop exactly 2 files");
      return;
    }
    if (
      !(
        files.some((file) => file.name.includes("followers")) &&
        files.some((file) => file.name.includes("following"))
      )
    ) {
      setError("The names of the file should include followers and following");
      return;
    }

    setNotFollowing(following.filter((fllw) => !followers.includes(fllw)));
    setDisplayResultsModal(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: "500px" }}>
        <Card.Header>
          <Card.Title>Drop your files here</Card.Title>
        </Card.Header>
        <Card.Body>
          <FilesDropzone
            className=""
            onDrop={(files) => handleDrop(files[0])}
            accept="application/json"
          />
          {error && <p className="mt-1 text-danger">{error}</p>}
          {files &&
            files.map((file) => (
              <div className="m-2 d-inline-flex justify-content-center align-items-center p-2 border">
                <span>
                  File: {file.name}
                  <Button
                    onClick={() => {
                      setFiles(files.filter((_file) => _file !== file));
                    }}
                    className="ms-2 mt-0 pt-0"
                    variant=""
                  >
                    <GrFormClose />
                  </Button>
                </span>
              </div>
            ))}
        </Card.Body>
        <Card.Footer>
          <Button variant="secondary" onClick={() => onclose()}>
            Cancel
          </Button>
          <Button
            variant="primary"
            className="ms-2"
            onClick={() => handleSubmit()}
          >
            Submit Files
          </Button>
        </Card.Footer>
      </Card>
      <ResultsModal
        showState={displayResultsModal}
        onClose={() => setDisplayResultsModal(false)}
        instagramIds={notFollowing}
      />
    </div>
  );
};
