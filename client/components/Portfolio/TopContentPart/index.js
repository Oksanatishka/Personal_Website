
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import style from './style.css'
import ArrowLink from '../../ArrowLink'
import BackBtn from '../../BackBtn'

class TopContentPart extends Component {

  componentDidMount(){
    const tweentxt = document.getElementsByClassName("tweentxt")
    const back = document.getElementsByClassName(style.back)

    TweenMax.staggerFrom(tweentxt, 0.3, { y: 40, opacity: 0, scale: 0,delay: 1 }, 0.2);
    TweenMax.fromTo(back, 0.5, { opacity: 0, x: 100, delay: 1.7}, { opacity: 1, x: 0, delay: 1.7 });
  }

  render(){
    const {link, title, subtitle, bgImg} = this.props

	  return (
      <div className={style.main}>
        <div className={style.back}>
          <BackBtn {...this.props} />
        </div>
  	    <div className={style.bg} style={{background: 'url(' + bgImg + ')'}}>
            <div className={style.overlay}>
              <div className={style.wrapper}>
                <div className={style.content}>
                  <div className={style['content-bottom']}>
                    <h1 className={classnames("tweentxt", style.title)}>{title}</h1>
                    <h2 className={classnames("tweentxt", style.subtitle)}>{subtitle}</h2>
                    {
                      link ? 
                        <a className="tweentxt" href={link} target="_blank">
                          <ArrowLink textLabel="Project link" />
                        </a>
                      :
                      <br/>
                    }
                  </div>
                </div>
              </div>
            </div>
  	    </div>
      </div>
	  )
  }
}

export default TopContentPart
