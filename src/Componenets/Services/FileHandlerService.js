import { host } from '../Helpers/config.js';

const baseFileUploadEndpoint = host + 'api/file/uploadFile';
const post = 'POST';

export const postFile = async (body, userId) => {
    try {
        const endpoint = baseFileUploadEndpoint + `?userId=${userId}`
        const response = await postData(endpoint, post, body);

        if (response.ok) {
            return "File Uploaded"
        }
        else if (response.status === 400) {
            return 'Something went wrong with either the file type, size or user uploading';
        }
    }
    catch {
        return 'Error uploading file';
    }
};

const postData = async (endpoint, method, body) => {
    return await fetch(endpoint, {
        method: method,
        body: body,
    });
    ;
}