import Axios from 'axios';

let apiUrl;

const apiUrls = {
  production: "https://benefi-backend-production.up.railway.app/",
  development: "http://localhost:3000"
}

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = Axios.create({
  baseURL: apiUrl,
});

console.log(api)

let usersApiUrl;

const usersApiUrls = {
  production: "https://benefi-backend-production.up.railway.app/",
  development: "http://localhost:3000"
}

if (window.location.hostname === "localhost") {
  usersApiUrl = usersApiUrls.development;
} else {
  usersApiUrl = usersApiUrls.production;
}

const usersApi = Axios.create({
  baseURL: usersApiUrl,
});

console.log(usersApi)

const bothApis = {
  api,
  usersApi
}

export default bothApis;
