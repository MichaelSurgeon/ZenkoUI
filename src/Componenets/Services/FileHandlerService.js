import { host } from '../Helpers/config.js';

const baseFileUploadEndpoint = host + 'api/file/uploadFile';
const baseGetFileInfoEndpoint = host + 'api/file/getFileData';

export const postFile = async (body, userId) => {
    try {
        const endpoint = baseFileUploadEndpoint + `?userId=${userId}`
        const response = await postData(endpoint, body);

        if (response.ok) {
            return "File Uploaded, please trigger analysis"
        }
        else if (response.status === 400) {
            return 'Something went wrong with either the file type or size';
        }
        else if(response.status === 404) {
            return 'User not found';
        }
    }
    catch {
        return 'Error uploading file';
    }
};


export const getFileInfo = async (userId) => {
    try {
        const endpoint = baseGetFileInfoEndpoint + `?userId=${userId}`
        const response = await getData(endpoint, null);

        if (response.ok) {
            return response.json();
        }
        else if(response.status === 404) {
            return 'User not found';
        }
    }
    catch {
        return 'Error getting file information (possibly no file uploaded)';
    }
};

const postData = async (endpoint,  body) => {
    return await fetch(endpoint, {
        method: "POST",
        body: body,
    });
}

const getData = async (endpoint, body) => {
    return await fetch(endpoint, {
        method: "GET",
        body: body,
    });
}