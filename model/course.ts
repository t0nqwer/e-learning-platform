import { model, models, ObjectId, Schema } from "mongoose";

export interface ICourse {
  title: string;
  userId?: string | null;
  description?: string;
  imageUrl?: string;
  price?: number;
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  category?: ObjectId | null;
}

const courseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  userId: { type: String, required: false },
  description: { type: String, required: false },
  imageUrl: { type: String, required: false },
  price: { type: Number, required: false },
  isPublished: { type: Boolean, required: true, default: false },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: false },
  createdAt: { type: Date, required: false, default: Date.now },
  updatedAt: { type: Date, required: false, default: Date.now },
});

const Course = models.Course || model<ICourse>("Course", courseSchema);

export default Course;
