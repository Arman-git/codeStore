import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <img className='logo img' src='/img/logo.svg' alt='Rostelecom Logo' />
  </Link>
)

export default Logo
