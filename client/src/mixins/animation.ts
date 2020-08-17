import {
  motion,
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
} from 'framer-motion';

export interface AnimationMixin {
  animate?: AnimationControls | TargetAndTransition | VariantLabels | string;
}
