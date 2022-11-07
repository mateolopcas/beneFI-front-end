import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://benefi-backend-production.up.railway.app/transactions",
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

let usersApiUrl;

const usersApiUrls = {
  production: "https://benefi-backend-production.up.railway.app/userprofiles/",
  development: "http://localhost:3000"
}

if (window.location.hostname === "localhost") {
  usersApiUrl = usersApiUrls.development;
} else {
  usersApiUrl = usersApiUrls.production;
}

const usersApi = axios.create({
  baseURL: usersApiUrl,
});

console.log(usersApi)

export default { api, usersApi };