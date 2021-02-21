import axios from "axios";

const baseURL = "http://localhost:5000";

//Finds Token and Checks when it expires
export const axiosWithAuth = () => {
  let { token, expires, token_type } = JSON.parse(
    localStorage.getItem("token")
  );

  return axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
      Authorization: `${token_type} ${token}`,
    },
  });
};

export const loginHandler = (u) => (dispatch) => {
  axios
    .post(`${baseURL}/login`, { ...u })
    .then((res) => {
      if (res.status === 200 && !res.data.errors) {
        localStorage.setItem(
          "token",
          JSON.stringify({
            token: res.data.token,
            token_type: res.data.token_type,
            expires: Date(res.data.expires_in),
          })
        );
        dispatch({ type: "FETCH_SUCCESS", payload: true });
      } else {
        console.log(res.data.errors);
        dispatch({ type: "FETCH_FAIL", payload: false });
      }
    })
    .catch(
      (err) => console.log(err),
      dispatch({ type: "FETCH_FAIL", payload: false })
    );
};
