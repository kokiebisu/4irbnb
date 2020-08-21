import {
  motion,
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
} from 'framer-motion';

export interface AnimationInterface {
  animate?: AnimationControls | TargetAndTransition | VariantLabels | string;
}
