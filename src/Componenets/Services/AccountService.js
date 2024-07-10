const createUserEndpoint = 'https://localhost:7128/api/account/createUser';
const getUserEndpoint = 'https://localhost:7128/api/account/getUser';


const post = 'POST';
const GET = 'GET'
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

export const getUser = async (email, password)  => {
  try {
    let endpoint = getUserEndpoint + `?Email=${email}&Password=${password}`;
    const response = await fetchData(endpoint, GET, genericHeaders, null);
    if (response.ok) {
      return "Authorised"
    } 
    else if(response.status === 404 || 401) 
    {
     return 'User not found or user not authorized';
    }
  } 
  catch (error)
  {
    console.log(error);
    return 'Error getting user';
  }
};

const fetchData = async (endpoint, method, headers, body) => {
  return await fetch(endpoint, {
    method: method,
    headers: headers,
    body: body,
  });
;}