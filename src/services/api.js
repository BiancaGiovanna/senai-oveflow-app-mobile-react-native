import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3333",
});
api.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjQsInN0dWRlbnROYW1lIjoiQmlhbmNhIGEgZGV1c2EiLCJpYXQiOjE2MTQ5NzQzMzgsImV4cCI6MTYxNDk3NzkzOH0.F6l_Hzaj17iiUF-MdWwfDDCshtQ2wKOulc7uvE9cX1c`;

export { api };
