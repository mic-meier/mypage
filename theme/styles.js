import nightOwl from 'prism-react-renderer/themes/nightOwl'

export default {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
  },
  a: {
    color: 'primary',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  h1: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 1,
    fontSize: 6,
    mt: 2,
  },
  h2: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 1,
    fontSize: 5,
    mt: 2,
  },
  h3: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 1,
    fontSize: 4,
    mt: 3,
  },
  h4: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 1,
    fontSize: 3,
  },
  h5: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 1,
    fontSize: 2,
  },
  h6: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    m: 0,
    mb: 2,
    fontSize: 1,
  },
  code: {
    fontFamily: 'monospace',
    color: 'secondary',
    fontSize: 0,
  },
  inlineCode: {
    fontFamily: 'monospace',
    color: 'secondary',
    bg: 'green.1',
    p: 1,
    borderRadius: 4,
  },
  pre: {
    variant: 'prism',
    fontFamily: 'monospace',
    fontSize: 1,
    color: 'text',
    bg: 'muted',
    overflow: 'auto',
    code: {
      color: 'inherit',
    },
  },
  hr: {
    bg: 'muted',
    border: 0,
    height: '1px',
    m: 3,
  },
  CodeBlock: {
    overflow: `auto`,
    mx: -5,
    pre: {
      backgroundColor: `transparent`,
      float: `left`,
      minWidth: `100%`,
      margin: 0,
      px: 5,
      py: 3,
      borderRadius: 'md',
    },
    highlightLine: {
      backgroundColor: 'hsl(197, 95%, 15%)',
      borderLeftColor: `green.2`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `0.25em`,
      display: `block`,
      marginRight: -5,
      ml: -5,
      paddingRight: `1em`,
      paddingLeft: `0.75em`,
    },
    title: {
      fontFamily: `mono`,
      backgroundColor: nightOwl.plain.backgroundColor,
      borderBottomWidth: `2px`,
      borderBottomStyle: `solid`,
      borderBottomColor: `#f0f0f0`,
      color: nightOwl.plain.color,
      mx: -5,
      px: 5,
      py: 1,
      mb: -2,
      borderRadius: 'md',
    },
  },
}