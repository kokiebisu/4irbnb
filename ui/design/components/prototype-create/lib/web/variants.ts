import { bathrooms } from './create.bathrooms';
import { bedrooms } from './create.bedrooms';
import { getstarted } from './create.getstarted';
import { room } from './create.room';
import { location } from './create.location';
import { amenities } from './create.amenities';
import { spaces } from './create.spaces';
import { description } from './create.description';
import { title } from './create.title';
import { phone } from './create.phone';
import { requirements } from './create.requirements';
import { rules } from './create.rules';
import { checkin } from './create.checkin';
import { advance } from './create.advance';
import { period } from './create.period';
import { price } from './create.price';
import { scenarios } from './create.scenarios';
import { photos } from './create.photos';

export const webVariants = (props) => {
  return {
    ...getstarted(props),
    ...room(props),
    ...bedrooms(props),
    ...bathrooms(props),
    ...location(props),
    ...amenities(props),
    ...spaces(props),
    ...description(props),
    ...title(props),
    ...phone(props),
    ...requirements(props),
    ...rules(props),
    ...checkin(props),
    ...advance(props),
    ...period(props),
    ...price(props),
    ...scenarios(props),
    ...photos(props),
  };
};
