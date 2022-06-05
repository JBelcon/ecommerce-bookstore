import axios from "axios";

const instance = axios.create({
  baseURL: "https://backendnodejstzuzulcode.uw.r.appspot.com",
});

const get = async (url) => {
  try {
    const result = await instance.get(url, {
      withCredentials: true, //Credentials to Cookies
    });
    return result.data;
  } catch (error) {
    throw error.response.data;
  }
};
const post = async (url, data) => {
  try {
    const result = await instance.post(url, data, {
      withCredentials: true, //Credentials to Cookies
    });

    return result.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { get, post };
