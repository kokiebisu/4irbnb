import { useState } from 'react';
import { Button } from '@button';
import { Prototype, $Prototype } from '@prototype/globe';
import { useToggleDispatch } from '@context/toggle';

export const GlobeModal: React.FC<{}> = () => {
  const toggleDispatch = useToggleDispatch();
  const [prototype, setPrototype] = useState($Prototype.LANGUAGE);
  return (
    <div>
      <div>
        <div>
          <Button
            variant="modal"
            modal="close"
            onClick={() => toggleDispatch({ type: 'toggle_globe' })}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center mb-6">
          <div className="mr-6">
            <Button
              variant="underline"
              title="Language and region"
              font={16}
              bold
              unselected={prototype !== $Prototype.LANGUAGE}
              onClick={() => setPrototype($Prototype.LANGUAGE)}
            />
          </div>
          <div>
            <Button
              variant="underline"
              title="Currency"
              font={16}
              bold
              unselected={prototype !== $Prototype.CURRENCY}
              onClick={() => setPrototype($Prototype.CURRENCY)}
            />
          </div>
        </div>
        <Prototype variant={prototype} />
      </div>
    </div>
  );
};
