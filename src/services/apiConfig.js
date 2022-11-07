import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://benefi-backend-production.up.railway.app/userprofiles/",
  development: "http://localhost:3000"
}

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

console.log(api)

export default api;