import React from 'react'

function about() {
  return (
    <section className='about__area-3'>
      <div className='container pt-140 pb-110'>
        <div className='row'>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
            <div className='about__img-3'>
              <img
                src='/imgs/about/3/1.jpg'
                alt='About Thumbnail'
                data-speed='auto'
              />
            </div>
          </div>

          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
            <div className='sec-title-wrapper'>
              <h2 className='sec-sub-title title-anim'>Who We Are</h2>
              <h3 className='sec-title title-anim'>
                We are leading digital marketing agency.
              </h3>
            </div>
            <div className='sec-text-wrapper'>
              <div className='sec-text text-anim'>
                <p>
                  We’re a team of strategic digital marketing working globally
                  with largest brands. We believe that progress only happens
                  when you refuse to play things safe. We combine ideas,
                  behaviors, and insights with design, technological data to
                  produce brand experiences that customers love our services.
                </p>
                <div className='btn_wrapper'>
                  <a
                    className='wc-btn-light btn-hover btn-item'
                    href='about.html'
                  >
                    <span></span> Explore Us{' '}
                    <i className='fa-solid fa-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about
