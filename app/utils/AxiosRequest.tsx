import axios from 'axios';

// Function to fetch data using axios
export const axiosFetch = async (url, options) => {
  try {
    console.log("url ....................................",url)
    const { data } = await axios(url, options);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error so that it can be caught wherever this function is used
  }
};

// Function to fetch data using axios with all response data
export const axiosFetchAll = async (url, options) => {
  try {
    const { data } = await axios(url, options);
    console.log(`Response data:`, data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error so that it can be caught wherever this function is used
  }
};
