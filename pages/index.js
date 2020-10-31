/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container } from 'theme-ui'

export default function Home() {
  return (
    <Container sx={{ p: 8, maxWidth: '4xl' }}>
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
      <div>
        <button sx={{ variant: 'buttons.simple' }}>Submit</button>
      </div>
      <div>
        <input type="text" name="" id="" sx={{ variant: 'inputs.inline' }} />
      </div>
    </Container>
  )
}
