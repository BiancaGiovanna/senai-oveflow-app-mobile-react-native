import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3333/",
});

// api.defaults.headers.common[
//   "Authorization"
// ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiQmlhbmNhIGEgZGV1c2EiLCJpYXQiOjE2MTU0MDI0NTgsImV4cCI6MTYxNTQwNjA1OH0.Gf5f69haSH6XizM0OROHP_AjZyz6f2Xap50qpc-ThQ8`;

export { api };
