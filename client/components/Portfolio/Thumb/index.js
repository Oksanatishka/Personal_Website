
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import style from './style.css'

class Thumb extends Component {

  constructor(props,context){
    super(props, context)
    this.state = {
      hover: false
    }
  }

  changePage(slug){
    const { history } = this.props;
    setTimeout(function(){
      history.pushState(null, slug)
    }, 0)
  }

  hover(val){
    this.setState({hover: val})
  }

  render() {
    const { coloredImg, noColoredImg, slug, title, subtitle } = this.props;
    const classes = classnames({
      [style.on]: this.state.hover
    }, style.main)

    return (
      <div  onMouseEnter={this.hover.bind(this, true)}
            onMouseLeave={this.hover.bind(this, false)} 
            onClick={this.changePage.bind(this, "/portfolio/" + slug)}
            className={classes}>
        <div className={style.wrapper}>
          <div className={style['thumb-nb']} style={{backgroundImage: 'url('+noColoredImg+')'}}></div>
          <div className={style['thumb-color']} style={{backgroundImage:'url('+coloredImg+')'}}></div>
          <div className={style.description}>
            <h5 className={style.title}>{title}</h5>
            <small className={style.subtitle}>{subtitle}</small>
          </div>
          <div className={style['link-icon']}></div>
          <div className={style.shadow}></div>
        </div>
      </div>   
    )
  }
}
export default Thumb
