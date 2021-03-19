/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { $BULLET } from '../constants/appearance'

const QuestionBullet: React.FC<{
  title?: string
  answer?: string
}> = ({ title = 'Question here', answer = 'Answer here' }) => {
  return (
    <div
      css={{
        padding: '16px 0'
      }}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'grey.100'
      }}
    >
      <div>
        <h4 css={{ fontSize: 17 }} sx={{ color: 'cyan.800' }}>
          {title}
        </h4>
      </div>
      {/* <div>{answer}</div> */}
    </div>
  )
}

export const question = (props) => {
  return {
    [$BULLET.question]: {
      component: <QuestionBullet {...props} />,
      css: {}
    }
  }
}
