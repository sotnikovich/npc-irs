import axios from "axios";

const $host = axios.create({
  baseURL: "http://localhost:8080/",
});

export const createSupply = async (supply) => {
  const { data } = await $host.post("api/supply", supply);
  return data;
};
export const fetchSupplies = async () => {
  const { data } = await $host.get("api/supply");
  return data;
};
