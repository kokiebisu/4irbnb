import { Button } from '@button';
import { Prototype } from '@prototype/auth';
import { useToggleDispatch } from '@context/toggle';
import { useAuthDispatch, useAuthState } from '@context/auth';

export interface AuthModalTemplateProps {}

/**
 * Renders the auth modal
 */
export const AuthModalTemplate: React.FC<AuthModalTemplateProps> = () => {
  const toggleDispatch = useToggleDispatch();
  const authDispatch = useAuthDispatch();
  const authState = useAuthState();
  return (
    <div
      className="grid"
      style={{ maxHeight: '90vh', gridTemplateRows: 'auto 1fr' }}
    >
      <div
        style={{ height: 60 }}
        className="flex items-center border-b border-gray-500 px-4"
      >
        <div className="relative w-full">
          <div className="absolute left-0 top-2 bg-transparent">
            {authState.title === 'Forgot password' ? (
              <Button
                variant="modal"
                modalType="back"
                onClick={() => authDispatch({ type: 'auth_login' })}
              />
            ) : (
              <Button
                variant="modal"
                modalType="close"
                onClick={() => toggleDispatch({ type: 'close_register' })}
              />
            )}
          </div>
          <div className="flex justify-center items-center">
            <h3 className="text-md">{authState.title}</h3>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto">
        <Prototype variant={authState.display} />
      </div>
    </div>
  );
};
