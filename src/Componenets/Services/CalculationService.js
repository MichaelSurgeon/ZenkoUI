import { host } from '../Helpers/config.js';

const baseCreateCalculationEndpoint = host + 'api/calculations/createCalculation';
const post = 'POST';

export const createCalculation = async (body, userId) => {
    try {
        const endpoint = baseCreateCalculationEndpoint + `?userId=${userId}`
        const response = await postData(endpoint, post, body);

        if (response.ok) {
            return "Analysis was succesful"
        }
        else if (response.status === 404) {
            return 'User Data was not found, please upload a file';
        }
    }
    catch {
        return 'error creating analysis';
    }
};

const postData = async (endpoint, method, body) => {
    return await fetch(endpoint, {
        method: method,
        body: body,
    });
    ;
}