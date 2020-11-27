import jwt from 'jsonwebtoken';

export const signup = () => {
  const id = '239jf0934jg';
  const email = 'test@gmail.com';
  const password = 'password';

  const token = jwt.sign(
    {
      id,
      email,
      password,
    },
    process.env.JWT_KEY!
  );

  const base64 = Buffer.from(JSON.stringify({ jwt: token })).toString('base64');

  return `express:sess=${base64}`;
};
