import dbConnect from "../../utils/dbConnect";
import Page from "../../model/Page";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const pages = await Page.find({});
        res.status(200).json({ pages });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      await createPage(req, res);
      break;
    default:
      break;
  }
}

const createPage = async (req, res) => {
  const { parent } = req.body;

  try {
    const page = new Page(req.body);
    if (parent !== null) {
      await Page.findOneAndUpdate(
        { _id: parent },
        {
          $push: { children: page._id },
        },
        { new: true }
      );
    }
    await page.save();
    return res.status(200).json(page);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
