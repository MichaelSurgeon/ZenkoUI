import NavBar from "../../Componenets/NavBar/NavBar";
import './DataUpload.css'


function DataUpload() {
    return (
        <>
        <div className="header-wrapper">
            <NavBar></NavBar>
        </div>
        <div className="dropzone">
            <h1 className="dropzone-header">File Upload</h1>
        </div>
        </>
    )
}

export default DataUpload;