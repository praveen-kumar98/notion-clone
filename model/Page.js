import mongoose from "mongoose";

const pageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  groups: {
    type: Number,
    required: true,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "page",
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "page",
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

export default mongoose.models.Page || mongoose.model("page", pageSchema);
