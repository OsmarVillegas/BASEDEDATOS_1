import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    nombreProyecto: {
      type: String,
      required: true,
      trim: true,
    },
    nombreTarea: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      trim: true,
    },
    fechaEntrega: {
      type: String,
      trim: true,
    },
    estado: {
      type: String,
      required: true,
      trim: true,
    },
    responsable: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Tasks", taskSchema);
