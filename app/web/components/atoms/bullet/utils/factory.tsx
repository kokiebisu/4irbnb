import { BulletProps } from '@bullet';
import { AmenityBullet } from '@bullet/bullet-amenity';
import { BringBullet } from '@bullet/bullet-bring';
import { CharacteristicsBullet } from '@bullet/bullet-characteristics';
import { CheckBullet } from '@bullet/bullet-check';
import { ExperienceBullet } from '@bullet/bullet-experience';
import { HelpBullet } from '@bullet/bullet-help';
import { HostBullet } from '@bullet/bullet-host';
import { KnowBullet } from '@bullet/bullet-know';
import { OnlineHostBullet } from '@bullet/bullet-onlinehost';
import { PriorityBullet } from '@bullet/bullet-priority';
import { QuestionBullet } from '@bullet/bullet-question';
import { RatingBullet } from '@bullet/bullet-rating';
import { RequiredBullet } from '@bullet/bullet-required';
import { ScenarioBullet } from '@bullet/bullet-scenario';
import { ScoreBullet } from '@bullet/bullet-score';

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
