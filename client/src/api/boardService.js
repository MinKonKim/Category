import axios from "axios";
const DB_URL = "http://localhost:4000/";

const addHelp = async (formData) => {
  await axios
    .post(`${DB_URL}help-insert`, formData)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

const selectAll = async () => {
  return axios
    .get(`${DB_URL}/selectall`)
    .then((response) => console.log(response))
    .catch((error) => console.error("가져오는 도중 에러 발생"));
};

export { addHelp };
