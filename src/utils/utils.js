import axios from "axios";

export const scrapProducts = async (searchTxt) => {
  axios
    .post("http://localhost:4000/scrap-products", {
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
  return axios.get(`http://localhost:4000/products/${value}`);
};
