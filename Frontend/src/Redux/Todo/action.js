import axios from "axios";

export const GetTodo = (token, id) => {
  return axios({
    method: "get",
    url: "https://clear-gaiters-hen.cyclic.app/todos",
    headers: { Authorization: `Bearer ${token}` },
    params: { userId: id },
  });
};
