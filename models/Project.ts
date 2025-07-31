import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  name: string;
  description: string;
  url: string;
  githubUrl: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String },
    githubUrl: { type: String, required: true },
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

// Check if the model already exists before creating it
export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
