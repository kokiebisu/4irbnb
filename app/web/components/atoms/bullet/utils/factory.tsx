import { BulletProps } from '..';
import { AmenityBullet } from '../bullet-amenity';
import { BringBullet } from '../bullet-bring';
import { CharacteristicsBullet } from '../bullet-characteristics';
import { CheckBullet } from '../bullet-check';
import { ExperienceBullet } from '../bullet-experience';
import { HelpBullet } from '../bullet-help';
import { HostBullet } from '../bullet-host';
import { KnowBullet } from '../bullet-know';
import { OnlineHostBullet } from '../bullet-onlinehost';
import { PriorityBullet } from '../bullet-priority';
import { QuestionBullet } from '../bullet-question';
import { RatingBullet } from '../bullet-rating';
import { RequiredBullet } from '../bullet-required';
import { ScenarioBullet } from '../bullet-scenario';
import { ScoreBullet } from '../bullet-score';

export const factory = (props: BulletProps): JSX.Element => {
  switch (props.variant) {
    case 'amenity':
      return <AmenityBullet {...props} />;
    case 'bring':
      return <BringBullet {...props} />;
    case 'characteristics':
      return <CharacteristicsBullet {...props} />;
    case 'check':
      return <CheckBullet {...props} />;
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
    default:
      throw new Error(`[Bullet] Variant does not exist`);
  }
};
