import React from 'react'
import { Link } from 'gatsby'

import './readMore.scss'

const ReadMore = ({ path }) => {
  return (
    <div className="read-more">
      <Link to={path}>
        <div className="inner">
          <span>read more</span>
          <svg width="194" height="24" viewBox="0 0 194 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 11.6961H171.574H192M192 11.6961L179.745 1.07733M192 11.6961L179.745 23" stroke="black" stroke-width="2" />
          </svg>
        </div>
      </Link>
    </div>
  )
}

export default ReadMore;