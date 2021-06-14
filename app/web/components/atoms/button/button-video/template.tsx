import { Icon } from '@atoms';

export type VideoButtonTemplateProps = {
  play?: boolean;
  onClick: () => void;
};

export const VideoButtonTemplate = ({
  play,
  onClick,
}: VideoButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="video-button"
      className="inline-block"
      onClick={onClick}
    >
      <div className={`inline-block rounded-full p-3 hover:bg-blur`}>
        {play ? (
          <Icon
            variant="action"
            actionType="play"
            width={15}
            height={15}
            fill="white"
          />
        ) : (
          <Icon
            variant="action"
            actionType="pause"
            width={15}
            height={15}
            fill="white"
          />
        )}
      </div>
    </button>
  );
};
