import './FileUploadBox.css'

const FileUploadBox = () => {
    return (
        <>
            <div className='file-drop-wrapper'>
                <h2>Drop your CSV file here</h2>
                <form action="POST">
                </form>
            </div>
        </>
    )
}

export default FileUploadBox;