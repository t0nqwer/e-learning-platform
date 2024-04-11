import { model, models, Schema } from "mongoose";

export interface ICategory {
  name: string;
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
});

const Category =
  models.Category || model<ICategory>("Category", categorySchema);

export default Category;
