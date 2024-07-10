const createUserEndpoint = 'https://localhost:7128/api/account/createUser';

const post = 'POST';
const genericHeaders = { 'Content-Type': 'application/json' }

export const createUser = async (body)  => {
    try {
      const response = await fetchData(createUserEndpoint, post, genericHeaders, body);

      if (response.ok) {
        return "User Added"
      } 
      else if(response.status === 409) 
      {
       return 'User already exists';
      }
    } 
    catch 
    {
      return 'Error creating user';
    }
};

const fetchData = async (endpoint, method, headers, body) => {
  return await fetch(endpoint, {
    method: method,
    headers: headers,
    body: body,
  });
;}