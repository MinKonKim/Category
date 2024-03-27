import axios from "axios";
const API_URL = "http://localhost:4000/";

const addHelp = async (formData) => {
  await axios
    .post(`${API_URL}help-insert`, formData)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export { addHelp };
