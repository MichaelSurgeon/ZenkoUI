import FileUploadBox from "../../Componenets/FileUploadBox/FileUploadBox";
import NavBar from "../../Componenets/NavBar/NavBar";
import './DataUpload.css'


function DataUpload() {
    return (
        <>
            <div className="header-wrapper">
                <NavBar></NavBar>
            </div>
            <h1 className="dropzone-header">File Upload</h1>
            <div className="dropzone-wrapper">
                <FileUploadBox />
            </div>
        </>
    )
}

export default DataUpload;