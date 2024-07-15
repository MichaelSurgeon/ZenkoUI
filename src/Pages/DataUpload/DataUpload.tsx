import { useEffect, useState } from "react";
import FileDataTable from "../../Componenets/FileDataTable/FileDataTable";
import FileUploadBox from "../../Componenets/FileUploadBox/FileUploadBox";
import { getFileInfo } from "../../Componenets/Services/FileHandlerService.js"
import NavBar from "../../Componenets/NavBar/NavBar";
import './DataUpload.css'

function DataUpload() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchDataFromApi() {
          try {
            const response = await getFileInfo(localStorage.getItem("UserId"));
            setData(response);
          } catch (error) {
            console.error(error);
            alert("error fetching file information");
          }
        }

        fetchDataFromApi();
      }, []);

    return (
        <>
            <div className="header-wrapper">
                <NavBar></NavBar>
            </div>
            <h1 className="dropzone-header">File Upload</h1>
            <div className="dropzone-wrapper">
                <FileUploadBox />
            </div>
            {data.length > 0 &&<h1 className="file-header">Previously Uploaded Files</h1>}
            <div className="filedata-table">
                <div>
                    {data.length > 0 && <FileDataTable data={data} />}
                </div>
            </div>
        </>
    )
}

export default DataUpload;