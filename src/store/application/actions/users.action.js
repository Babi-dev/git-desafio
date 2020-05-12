import { api } from "../../../services/api";

export const types = {
  GET_USER: "[GET] USER"
};

export const loadUsers = async login => {
  let responseUser = await api.get(`/users/${login}`);
  let response = await api.get(`/users/${login}/repos`);

  return {
    type: types.GET_USER,
    payload: { user_infos: responseUser.data, repos: response.data }
  };
};
