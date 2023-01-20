import React from 'react'
import {Link} from 'react-router-dom'

const UpperHeader = () => {
  return (
      <div className='header-top' id='upper-header' data-test='upper-header'>
          <div className='container'>
              <div className='row p-2'>
                  <div className='col-6'>
                      <div className='d-flex flex-row'>
                          <ul className='list-unstyled'>
                              <li>
                                  <Link to='#'>
                                      <i className='cpt-twitter'></i>
                                      Twitter
                                  </Link> 
                              </li>
                              <li>
                                  <Link to='#'>
                                      <i className='cpt-facebook-square'></i>
                                      Facebook
                                  </Link>
                              </li>
                              <li>
                                  <Link to='#'>
                                      <i className='cpt-linkedin'></i>
                                      LinkedIn
                                  </Link>
                              </li>
                              <li>
                                  <Link to='#'>
                                      <i className='cpt-112'></i>
                                      YouTube
                                  </Link>
                              </li>
                          </ul>
                      </div>
                  </div>

                  <div className='col-6 d-flex justify-content-end'>
                      <ul className='list-unstyled right-top-menu'>
                          <li>
                              <Link to='#'>
                                  <i className='cpt-user'></i>
                                  Log In or Sign Up
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default UpperHeader