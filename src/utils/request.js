import axios from "axios";

function apiCall(url, method, data) {
  return axios({
    baseURL: "http://localhost:3001",
    url,
    method,
    data
  });
}

export default apiCall;
