import { BulletProps } from '..';
import { ExperienceBullet } from '../bullet-experience';
import { HelpBullet } from '../bullet-help';
import { HostBullet } from '../bullet-host';
import { KnowBullet } from '../bullet-know';
import { OnlineHostBullet } from '../bullet-onlinehost';
import { PrimaryBullet } from '../bullet-primary';
import { PriorityBullet } from '../bullet-priority';
import { QuestionBullet } from '../bullet-question';
import { RatingBullet } from '../bullet-rating';
import { RequiredBullet } from '../bullet-required';
import { ScenarioBullet } from '../bullet-scenario';
import { ScoreBullet } from '../bullet-score';
import { SecondaryBullet } from '../bullet-secondary';

export const factory = (props: BulletProps): JSX.Element => {
  switch (props.variant) {
    case 'experience':
      return <ExperienceBullet {...props} />;
    case 'help':
      return <HelpBullet {...props} />;
    case 'host':
      return <HostBullet {...props} />;
    case 'know':
      return <KnowBullet {...props} />;
    case 'onlinehost':
      return <OnlineHostBullet {...props} />;
    case 'priority':
      return <PriorityBullet {...props} />;
    case 'question':
      return <QuestionBullet {...props} />;
    case 'rating':
      return <RatingBullet {...props} />;
    case 'required':
      return <RequiredBullet {...props} />;
    case 'scenario':
      return <ScenarioBullet {...props} />;
    case 'score':
      return <ScoreBullet {...props} />;
    case 'primary':
      return <PrimaryBullet {...props} />;
    case 'secondary':
      return <SecondaryBullet {...props} />;
    default:
      throw new Error(`[Bullet] Variant does not exist`);
  }
};
