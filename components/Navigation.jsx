import Link from 'next/link'

export default function Navigation () {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container'>
          <Link className='navbar-brand' href='/'>HomeUS</Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' href='/'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='/about'>About</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='/services'>Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
