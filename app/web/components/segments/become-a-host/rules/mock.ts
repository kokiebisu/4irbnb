export const rules = [
  {
    title: 'Must climb stairs',
    item: 'stairs',
  },
  {
    title: 'Potential for noise',
    item: 'noise',
  },
  {
    title: 'Pet(s) live on property',
    item: 'pets',
  },
];

export const selectedRules = ['stairs'];
export const isSmokingAllowed = false;
export const isEventAllowed = false;
export const handleSwitch = (flag, property) =>
  alert(`Handle ${property} switched to ${flag}`);
export const handleChange = (property, _) =>
  alert(`Handle ${property} changed`);
