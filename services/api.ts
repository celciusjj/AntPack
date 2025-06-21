import axios from "axios";

const http = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export { http };
