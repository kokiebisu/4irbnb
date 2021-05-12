import { price } from '@input/input-price';
import { room } from '@panel/panel-room';
import { advance } from '../advance';
import { amenities } from '../amenities';
import { bathrooms } from '../bathrooms';
import { bedrooms } from '../bedrooms';
import { bookingScenarios } from '../booking-scenarios';
import { checkin } from '../checkin';
import { description } from '../description';
import { getstarted } from '../getstarted';
import { period } from '../period';
import { phone } from '../phone';
import { photos } from '../photos';
import { requirements } from '../requirements';
import { rules } from '../rules';
import { spaces } from '../spaces';
import { title } from '../title';
import { location } from '../location';

export const factory = (props) => {
  return {
    ...advance(props),
    ...amenities(props),
    ...bathrooms(props),
    ...bedrooms(props),
    ...bookingScenarios(props),
    ...checkin(props),
    ...description(props),
    ...getstarted(props),
    ...location(props),
    ...period(props),
    ...phone(props),
    ...photos(props),
    ...price(props),
    ...requirements(props),
    ...room(props),
    ...rules(props),
    ...spaces(props),
    ...title(props),
  };
};
