import { host } from '../Helpers/config.js';

const baseCreateCalculationEndpoint = host + 'api/calculations/createCalculation';
const baseGetCalculatedCategoriesEndpoint = host + 'api/calculations/getCalculatedCategories';
const baseGetBudgetSplitEndpoint = host + 'api/calculations/getBudgetSplit';
const baseAggregatedTransactionsEndpoint = host + 'api/transactions/GetAggregatedTransactionInfo';
const baseTransactionsEndpoint = host + 'api/transactions/GetPaginatedTransactions';
const baseAllTransactionsEndpoint = host + 'api/transactions/GetAllTransactionsByDate';

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

export const getTransactionData = async (userId, pageId) => {
    try {
        const endpoint = baseTransactionsEndpoint + `?userId=${userId}&pageNumber=${pageId || 1}&pageSize=10`
        const response = await getData(endpoint);

        if (response.ok) {
            return response.json();
        }
        else if (response.status === 404) {
            return 'User or Transaction data was not found, please upload a file';
        }
    }
    catch {
        return 'error getting pagintated transactions information';
    }
};

export const getAllTransactionByDateData = async (userId) => {
    try {
        const endpoint = baseAllTransactionsEndpoint + `?userId=${userId}`
        const response = await getData(endpoint);

        if (response.ok) {
            return response.json();
        }
        else if (response.status === 404) {
            return 'User or Transaction data was not found, please upload a file';
        }
    }
    catch {
        return 'error getting transactions by date information';
    }
};

export const getCalcualtedCategoriesData = async (userId) => {
    try {
        const endpoint = baseGetCalculatedCategoriesEndpoint + `?userId=${userId}`
        const response = await getData(endpoint);

        if (response.ok) {
            return response.json();
        }
        else if (response.status === 404) {
            return 'User or category data was not found, please upload a file';
        }
    }
    catch {
        return 'error getting category information';
    }
};

export const getBudgetSplitData = async (userId) => {
    try {
        const endpoint = baseGetBudgetSplitEndpoint + `?userId=${userId}`
        const response = await getData(endpoint);

        if (response.ok) {
            return response.json();
        }
        else if (response.status === 404) {
            return 'User or budget data was not found, please upload a file';
        }
    }
    catch {
        return 'error getting budget information';
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