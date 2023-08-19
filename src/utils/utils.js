import axios from "axios";

const url = "https://node-web-scrapping.onrender.com"; //"http://localhost:6005";
export const scrapProducts = async (searchTxt) => {
  axios
    .post(`${url}/scrap-products`, {
      searchItem: searchTxt,
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getProducts = async (value) => {
  return axios.get(`${url}/products/${value}`);
};
