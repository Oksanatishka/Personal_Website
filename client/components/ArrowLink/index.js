
import React, { PropTypes, Component } from 'react'

import style from './style.css'

class ArrowLink extends Component {

  componentDidMount(){
    this.line = document.getElementsByClassName(style.line)
    this.arrow = document.getElementsByClassName(style.arrow)
    this.circle = document.getElementsByClassName(style.circle)
  }

  onHover(){
    TweenMax.fromTo(this.line, 0.3, { x: -20, y: 0, opacity: 0 }, {x: 6, y: 1, opacity: 1 });
    TweenMax.to(this.arrow, 0.3, { x: 12 });
    TweenMax.to(this.circle, 0, { borderWidth: 0 });
  }

  onHoverOut(){
    TweenMax.fromTo(this.line, 0.3, { x: 6, opacity: 1 }, {x: -20, opacity: 0});
    TweenMax.to(this.arrow, 0.3, { x: 0});
    TweenMax.to(this.circle, 0, { borderWidth: 1});
  }

  render() {
    return (
      <div className={style.main}>
          <div className={style.campaignTitle}>
            <div  onMouseEnter={this.onHover.bind(this)}
                  onMouseLeave={this.onHoverOut.bind(this)}
                  className={style.btn}>
              <p>{this.props.textLabel}</p>
              <span className={style.circle}>
                  <div className={style.line}></div>
                  <div dangerouslySetInnerHTML={{__html: '<svg class="' + style.arrow + '" arrow=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-right"></use></svg>'}}></div>
              </span>
            </div>
          </div>
      </div>
    )
  }
}

export default ArrowLink
