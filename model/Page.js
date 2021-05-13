import mongoose from "mongoose";

const pageSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Untitled",
  },
  groups: {
    type: Number,
    default: 1,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Page",
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
    },
  ],
  pageElement: [],
  photo: {
    type: String,
    default: "",
  },
});

function autoPopulate(next) {
  this.populate("children");
  next();
}

pageSchema.pre("find", autoPopulate).pre("findOne", autoPopulate);

const Page = mongoose.models.Page || mongoose.model("Page", pageSchema);

export default Page;
