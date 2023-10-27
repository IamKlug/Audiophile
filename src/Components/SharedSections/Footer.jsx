import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer is-flex-mobile is-flex-direction-column is-align-items-space-between has-background-less-black p-6 mt-6">
    <img className='mb-6' src='/assets/shared/desktop/logo.svg' alt='logo' />
    <div className='columns'>
    <Link
      to="/"
      className="column has-text-centered-mobile is-text-subtitle has-text-white is-uppercase m-3"
    >
      Home
    </Link>
    <Link
      to="/ProductCategoryPage/Headphones"
      className="column has-text-centered-mobile is-text-subtitle has-text-white is-uppercase m-3"
    >
      Headphones
    </Link>
    <Link
      to="/ProductCategoryPage/Speakers"
      className="column has-text-centered-mobile is-text-subtitle has-text-white is-uppercase m-3"
    >
      Speakers
    </Link>
    <Link
      to="/ProductCategoryPage/Earphones"
      className="column has-text-centered-mobile is-text-subtitle has-text-white is-uppercase m-3"
    >
      Earphones
    </Link>
    </div>
    <p className="has-text-centered-mobile has-text-white m-3">
      Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
      a small team of music lovers and sound specicolumn alists who are devoted
      to helping you get the most out of personal audio. Come and visit
      our demo facolumn cility - we&apos;re open 7 days a week.
    </p>
    <div className='columns'>
    <p className="column is-flex-tablet is-align-items-end has-text-centered has-text-white is-bold m-3">
      Copyright 2021. All Rights Reserved
    </p>
    <div className='column is-flex is-justify-content-center mt-3'>
        <img className='' src='/assets/shared/desktop/icon-social-group.svg' alt='facebook' />
    </div>
    </div>
  </footer>
  )
}
