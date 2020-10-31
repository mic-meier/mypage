/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Welcome to my humble abode">
      <div>
        <h3
          sx={{
            // transform: 'rotate(180deg)',
            transform: (theme) => `rotate(${theme.transforms.rotate[180]})`,
          }}
        >
          Rotate
        </h3>
      </div>
      <div sx={{ m: 1 }}>
        <button sx={{ variant: 'buttons.simple' }}>Primary</button>
      </div>
      <div sx={{ m: 1 }}>
        <button
          sx={{ variant: 'buttons.simple', backgroundColor: 'secondary' }}
        >
          Secondary
        </button>
      </div>
      <div>
        <input type="text" name="" id="" sx={{ variant: 'inputs.underline' }} />
      </div>
      <div>
        <p sc={{ color: 'text' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          nesciunt accusamus itaque veniam cum nulla corporis praesentium
          consectetur eaque placeat saepe temporibus voluptate velit a fugiat,
          perspiciatis porro architecto omnis.
        </p>
      </div>
    </Layout>
  )
}
