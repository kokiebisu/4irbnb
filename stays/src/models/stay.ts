import mongoose from 'mongoose';

interface StayAttribute {
  title: string;
  price: number;
  userId: string;
}

interface StayDocument extends mongoose.Document {
  title: string;
  price: number;
  userId: string;
}

interface StayModel extends mongoose.Model<StayDocument> {
  build(attribute: StayAttribute): StayDocument;
}

const staySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

staySchema.statics.build = (attributes: StayAttribute) => {
  return new Stay(attributes);
};

const Stay = mongoose.model<StayDocument, StayModel>('Stay', staySchema);

export { Stay };
