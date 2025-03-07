import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { storage } from "../assets/data/firebase";
// import { storage } from "../../API/firebase";
// import CustomAlert from "../Helpers/Alert";
import "./CresteFile.css";
function CreateFileLink() {
  const [LeadUrl, setLeadUrl] = useState("");
  const [Leadfile, setLeadFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, Seterror] = useState("");
  const onLeadFileUpload = () => {
    setIsLoading(true);
    Seterror("");
    try {
      const storageRef = ref(storage, `/files/${Leadfile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, Leadfile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("uploaded");
        },
        (err) => {
          toast.error(err)
          setIsLoading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setLeadUrl(url);
            setIsLoading(false);
          });
        }
      );
    } catch (error) {
      Seterror("An error Occurd please check connection and try again");
    }
  };
  const HandleCopyNumber = (_Url) => {
    let copyText = _Url;
    navigator.clipboard.writeText(copyText);
    toast.success("link Copied")
  };

  return (
    <div className="CreateFileWrapper">
      <div className="CreateFileContainer">
        <h3>Create File Link And use In App </h3>
        <div></div>
        <span style={{ color: "tomato" }}>{error}</span>
        <div className="newUserItem pickBg">
          <div>
            <input
              id="sermonImg"
              name="sermonImg"
              accept=".png, .jpg, .svg, .jpeg"
              type="file"
              placeholder="john"
              onChange={(e) => setLeadFile(e.target.files[0])}
            />
          </div>
        </div>

        <div style={{ display: "flex", padding: "10px" }}>
          <div>
            {isLoading ? <span>Loading...</span> : <span>{LeadUrl}</span>}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            title="Copy File Link"
            onClick={() => HandleCopyNumber(LeadUrl)}
          >
            Copy
          </button>
        </div>

        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => onLeadFileUpload()}>
          Upload File{" "}
        </button>
      </div>
    </div>
  );
}

export default CreateFileLink;
