const style = {
  wrapper: `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  icon: {
    wrapper: `
      position: absolute;
      left: 0;
    `,
  },
  label: {
    wrapper: ``,
    text: `
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray__1};
    `,
  },
};

export const web = {
  wrapper: { ...style.wrapper },
  icon: { wrapper: { ...style.icon.wrapper } },
  label: {
    wrapper: { ...style.label.wrapper },
    text: { ...style.label.text },
  },
};

export const mobile = {
  wrapper: { ...style.wrapper },
  icon: { wrapper: { ...style.icon.wrapper } },
  label: {
    wrapper: { ...style.label.wrapper },
    text: { ...style.label.text },
  },
};
