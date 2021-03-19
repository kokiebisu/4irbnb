/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { NameLogo, NoNameLogo } from '@nextbnb/assets/svg/logo'
import { $BUTTON } from '../constants/appearance'

const LogoButton: React.FC<{ noName?: boolean; fill?: string }> = ({
  noName = false,
  fill = '#F5385D'
}) => {
  return noName ? (
    <NoNameLogo fill={fill} width={30} height={32} />
  ) : (
    <NameLogo fill={fill} width={102} height={32} />
  )
}

export const logo = (props) => {
  return {
    [$BUTTON.logo]: {
      component: <LogoButton />,
      css: {}
    }
  }
}
