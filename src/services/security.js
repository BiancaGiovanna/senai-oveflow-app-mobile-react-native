import jwtDecode from "jwt-decode";
import { api } from "./api";
import AsyncStorage from "@react-native-community/async-storage";
const USER_KEY = "@user";

export const signIn = (user) => {
  AsyncStorage.setItem(USER_KEY, JSON.stringify(user));

  //setando o token como padrão em todas as requisições
  api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
};

export const signOut = () => {
  AsyncStorage.removeItem(USER_KEY);

  api.defaults.headers.common["Authorization"] = undefined;
};

export const getUser = () => {
  const { student } = JSON.parse(AsyncStorage.getItem(USER_KEY));

  return student;
};

export const setUser = async (student) => {
  const user = JSON.parse(await AsyncStorage.getItem(USER_KEY));

  user.student = student;

  AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const isSignedIn = async () => {
  const user = JSON.parse(await AsyncStorage.getItem(USER_KEY));

  if (user && user.token) {
    const jwtDecoded = jwtDecode(user.token);

    const nowTime = (Date.now() / 1000) | 0;

    if (jwtDecoded.exp < nowTime) {
      return signOut();
    }

    api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    return true;
  }

  return false;
};
