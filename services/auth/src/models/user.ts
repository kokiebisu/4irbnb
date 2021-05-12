import * as mongoose from 'mongoose';
import { Password } from '../services/password';

interface UserAttributes {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDocument> {
  build(attributes: UserAttributes): UserDocument;
}

interface UserDocument extends mongoose.Document {
  email: string;
  password: string;
  updatedAt: string;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(_, ret: any) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

/**
 * A pre-hook that gets called every time the save method is
 * being called. It hashes the newly built User document. When only
 * the email changes, it will not enter into the if condition.
 */
userSchema.pre('save', function (done) {
  async () => {
    if (this.isModified('password')) {
      const hashed = await Password.toHash(this.get('password'));
      this.set('password', hashed);
    }
    done();
  };
});

userSchema.statics.build = (attributes: UserAttributes) => {
  return new User(attributes);
};

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

const buildUser = (attributes: UserAttributes) => {
  return new User(attributes);
};

export { User, buildUser };
