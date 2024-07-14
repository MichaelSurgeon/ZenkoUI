import { useEffect } from "react";
import FileDataTable from "../../Componenets/FileDataTable/FileDataTable";
import FileUploadBox from "../../Componenets/FileUploadBox/FileUploadBox";
import NavBar from "../../Componenets/NavBar/NavBar";
import './DataUpload.css'

let data : any;
const headers = [
    {
        Header: "File Name",
        Accesor: "file_name"
    },
    {
        Header: "File Size",
        Accesor: "file_size"
    },
    {
        Header: "Date",
        Accesor: "date"
    }
];

function DataUpload() {

    // this hook is called on page load
    useEffect(() => {
        fetchData();
    })

    return (
        <>
            <div className="header-wrapper">
                <NavBar></NavBar>
            </div>
            <h1 className="dropzone-header">File Upload</h1>
            <div className="dropzone-wrapper">
                <FileUploadBox />
            </div>
            <h1 className="file-header">Previously Uploaded Files</h1>
            <div className="filedata-table">
                {/* pass data to file datatable */}
                <FileDataTable/>          
            </div>
        </>
    )
}

function fetchData() {
        // fetch data from api
}

export default DataUpload;