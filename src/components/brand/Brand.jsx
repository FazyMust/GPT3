import React from 'react'
import { google, slack, atlassian, dropbox, shopify } from './import'
import './brand.css'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt='Google img' srcset='' />
      </div>
      <div>
        <img src={slack} alt='slack img' srcset='' />
      </div>
      <div>
        <img src={atlassian} alt='atlassian img' srcset='' />
      </div>
      <div>
        <img src={dropbox} alt='dropbox img' srcset='' />
      </div>
      <div>
        <img src={shopify} alt='shopify img' srcset='' />
      </div>
    </div>
  )
}

export default Brand
