
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

import style from './style.css'

class View extends Component {

  componentWillAppear(callback) {
    this._animateIn(callback)
  }
  
  componentWillEnter(callback) {
    this._animateIn(callback)
  }
  
  componentWillLeave(callback) {
    this._animateOut(callback)
  }

  _isBackwards() {
    const { navigation: {curr_idx, prev_idx} } = this.props
    return curr_idx > prev_idx
  }

  _isSubPage(){
    const { navigation: { curr_path, prev_path } } = this.props
    let r = curr_path.match(/\/[^\/]*/)
    let o = prev_path.match(/\/[^\/]*/)

    r = r? r[0] : ""
    o = o? o[0] : ""

    return r === o ? !0: !1
  }
  
  _animateIn(callback) {
    const { navigation: {curr_idx, prev_idx, curr_path, prev_path, backward} } = this.props
    const axis = this._isSubPage() ? "xPercent": "yPercent"
    const element = ReactDOM.findDOMNode(this)
    const direction = this._isBackwards() ? 1: -1

    TweenMax.fromTo(element, 1.2, 
      { scale: 0.8, opacity: 0.5, [axis]: direction * 100, ease: Expo.easeInOut, "onComplete": callback },
      { scale: 1, opacity: 1, [axis]: 0, ease: Expo.easeInOut,"onComplete": callback })
  }

  _animateOut(callback) {
    const { navigation: {curr_idx, prev_idx, curr_path, prev_path, backward} } = this.props
    const element = ReactDOM.findDOMNode(this)
    const axis = this._isSubPage() ? "xPercent": "yPercent"
    const direction = this._isBackwards() ? -1: 1

    TweenMax.fromTo(element, 1, {}, { scale: 0.8, opacity: 0.5,
      [axis]: direction * 100, ease: Expo.easeInOut, "onComplete": callback })
  }

  render() {
    return (
      <section className={style.main}>
        {this.props.children}
      </section>
    )
  }
}
export default View
