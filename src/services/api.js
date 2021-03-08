import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3333/",
});

api.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjQsInN0dWRlbnROYW1lIjoiQmlhbmNhIGEgZGV1c2EiLCJpYXQiOjE2MTUyMjY3NDYsImV4cCI6MTYxNTIzMDM0Nn0.Ty_oeErU3s3l7uwb5AAjLhV7Dt0wR3UVQQCFlV0c9Xo`;

export { api };
