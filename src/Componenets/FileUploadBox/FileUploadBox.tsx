import { useRef, useState } from 'react';
import { postFile } from '../Services/FileHandlerService.js';
import { createCalculation } from '../Services/CalculationService.js';

import './FileUploadBox.css'

const FileUploadBox = () => {
  const [files, setFiles] = useState();
  const inputRef = useRef<HTMLInputElement>(null);
  const userId = localStorage.getItem("UserId");
  const [buttonState, setButton] = useState(false);

  function onDragOverHandler(event: any) {
    event.preventDefault();
  }

  function setFilesOnEvent(e: any) {
    e.preventDefault();
    if (e.type === "change") {
      setFiles(e.target.files[0]);
      console.log(e.target.files[0])
      uploadFileAsync(files)
    }
    else {
      // BUG HERE
      setFiles(e.dataTransfer.files[0]);
      console.log(e.dataTransfer.files[0])
      uploadFileAsync(files);
    }
  }

  const uploadFileAsync = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await postFile(formData, userId);
      alert(response);
    } catch (error) {
      alert('Error creating user. Please try again.');
    }
  }

  const createCalcData = async (event : any) => {
    setButton(true);  
    try {
      const response = await createCalculation(null, userId);
      alert(response);
    } catch (error) {
      alert('Error creating analysis Please try again.');
    }
    setButton(false);
  }

  function onClickHandler() {
    inputRef.current?.click();
  }

  return (
    <>
      <div className="file-drop-wrapper" onDragOver={onDragOverHandler} onDrop={setFilesOnEvent}>
        <h2 className="fileInfo">Drop your CSV file here</h2>
        <h2 className="fileInfoOr">Or</h2>
        <div className='select-file-wrapper'>
          <input type="file" onChange={setFilesOnEvent} hidden ref={inputRef} />
          <button disabled className="selectFileButton" onClick={onClickHandler}>
            <p className="selectFileName"><strong>Select File [DISABLED]</strong></p>
          </button>
        </div>
        <button className="calculationButton" disabled={buttonState} onClick={createCalcData}>
          <p className="submitCalculationFileName"><strong>Trigger Analysis</strong></p>
        </button>
      </div>
    </>
  );
};

export default FileUploadBox;