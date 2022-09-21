import home from "../../pages/Home";

export default async keyword => {
  await home.search(keyword);
};
