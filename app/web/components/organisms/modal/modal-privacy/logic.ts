import { useToggleDispatch } from '@context/toggle';

export const usePrivacyModal = () => {
  const toggleDispatch = useToggleDispatch();

  const handleSave = () => {
    // add cookie
    toggleDispatch({ type: 'toggle_privacy' });
  };

  const handleSettings = () => {
    // open settings
    toggleDispatch({ type: 'toggle_privacy' });
  };

  return { handleSave, handleSettings };
};
