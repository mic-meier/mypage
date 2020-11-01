export default {
  nav: {
    base: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'grey.0',
      mx: 3,
      py: 3,
      px: 2,
      ':hover, :active': {
        borderBottom: (theme) => `4px solid ${theme.colors.grey[1]}`,
        pb: '8px',
      },
    },
    title: {
      variant: 'nav.base',
      fontWeight: 'heading',
      fontSize: 5,
    },
    link: {
      variant: 'nav.base',
      fontWeight: 'bold',
      fontSize: 5,
    },
  },
  header: {
    display: 'flex',
    backgroundColor: 'green.7',
    boxShadow: '0 5px 15px hsla(0, 0%, 0%, .2)',
    position: 'sticky',
    top: 0,
  },
}
