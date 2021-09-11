export const isHttps = (value: string) => {
  return !value.match(
    new RegExp(
      "https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)"
    )
  );
};
