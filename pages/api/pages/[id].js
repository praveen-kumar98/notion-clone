import dbConnect from "../../../utils/dbConnect";
import Page from "../../../model/Page";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const page = await Page.findById(id);
        res.status(200).json(page);
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      await editPage(req, res);
      break;
    default:
      break;
  }
}

const editPage = async (req, res) => {
  const {
    query: { id },
    body: { name },
  } = req;

  try {
    const page = await Page.findOneAndUpdate(
      { _id: id },
      {
        $set: { name },
      },
      { new: true }
    );

    await page.save();
    return res.status(200).json(page);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
