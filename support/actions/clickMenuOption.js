import home from "../../pages/Home";

export default async option => {
  switch (option) {
    case "Women":
      const wOpt = await home.womenMenuOption;
      await wOpt.click();
      break;
    case "Dresses":
      const dOpt = await home.dressesMenuOption;
      await dOpt.click();
      break;
    case "T-Shirts":
      const tOpt = await home.tshirtMenuOption;
      await tOpt.click();
      break;
    default:
      console.log(`Invalid Option ${option}`);
  }
  //home.selectMenuOption(option);
};
