export const Particle = (props) => {
  switch (props.variant) {
    case 'slider':
      return <SliderParticles {...props} />;
  }
};
