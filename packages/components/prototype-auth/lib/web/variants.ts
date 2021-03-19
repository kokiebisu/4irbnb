import { auth } from './prototype.auth'
import { exists } from './prototype.exists'
import { forgotpassword } from './prototype.forgot'
import { login } from './prototype.login'
import { signup } from './prototype.signup'

export const webVariants: (
  props
) => { [variant: string]: { component: JSX.Element; css: any } } = (props) => {
  return {
    ...login(props),
    ...signup(props),
    ...auth(props),
    ...forgotpassword(props),
    ...exists(props)
  }
}
