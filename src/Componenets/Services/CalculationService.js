import { host } from '../Helpers/config.js';

const baseCreateCalculationEndpoint = host + 'api/calculations/createCalculation';
const baseAggregatedTransactionsEndpoint = host + 'api/transactions/GetAggregatedTransactionInfo';
const baseTransactionsEndpoint = host + 'api/transactions/GetPaginatedTransactions';


export const createCalculation = async (body, userId) => {
    try {
        const endpoint = baseCreateCalculationEndpoint + `?userId=${userId}`
        const response = await postData(endpoint, body);

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

export const getAgregattedTransactions = async (userId) => {
    try {
        const endpoint = baseAggregatedTransactionsEndpoint + `?userId=${userId}`
        const response = await getData(endpoint);

        if (response.ok) {
            return response.json();
        }
        else if (response.status === 404) {
            return 'No user or transactions found';
        }
    }
    catch {
        return 'error getting transactions';
    }
};

export const getTransactionData = async (userId) => {
    try {
        const endpoint = baseTransactionsEndpoint + `?userId=${userId}&pageNumber=2&pageSize=10`
        const response = await getData(endpoint);

        if (response.ok) {
            return response.json();
        }
        else if (response.status === 404) {
            return 'User or Transaction data was not found, please upload a file';
        }
    }
    catch {
        return 'error getting aggregatted information';
    }
};

const postData = async (endpoint, body) => {
    return await fetch(endpoint, {
        method: "POST",
        body: body,
    });
}

const getData = async (endpoint) => {
    return await fetch(endpoint, {
        method: "GET",
    });
}