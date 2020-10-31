export default {
  links: {
    base: {
      cursor: 'pointer',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    navtitle: {
      variant: 'links.base',
      height: '100%',
      fontWeight: 'heading',
      fontSize: 8,
      color: 'light',
    },
    navlink: {
      variant: 'links.base',
      height: '100%',
      fontSize: 4,
      ml: 4,
      pb: 3,
      color: 'light',
    },
  },
  header: {
    backgroundColor: 'green.7',
  },
}
