import dbConnect from "../../utils/dbConnect";
import Page from "../../model/Page";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const pages = await Page.find({});
        res.status(200).json({ success: true, data: pages });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      break;
  }
}
