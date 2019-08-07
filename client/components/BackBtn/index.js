
import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

import style from './style.css'

class BackBtn extends Component {

    componentDidMount(){
      this.state1 = document.getElementsByClassName(style.state1)
      this.state2 = document.getElementsByClassName(style.state2)
    }

    goBack(e){
      e.preventDefault()
      const {history} = this.props
      history.goBack()
    }

    onHover(){
      const timeline = new TimelineMax({})
      TweenMax.to(this.state1, 0, { top: 50, y: 0 });
      timeline.to(this.state2, 0, { rotationX: 0, y: 0, transformPerspective: 600, transformOrigin: "center bottom" } )
      timeline.to(this.state1, 0, { rotationX: -90, transformPerspective: 600, transformOrigin: "top center" } )
      timeline.to(this.state2, 0.3, { alpha: 1, rotationX: 90, y:-50, zIndex: 1, ease: Cubic.easeInOut } )
      timeline.to(this.state1, 0.3, { rotationX: 0, y: -50, zIndex: 2, ease:Cubic.easeInOut }, "-=0.3" )
    }

    onHoverOut(){
      const timeline = new TimelineMax({})
      timeline.to(this.state2, 0.3, { alpha: 1, rotationX: 0, y: 0, zIndex: 1, ease:Cubic.easeInOut } )
      timeline.to(this.state1, 0.3, { rotationX: -90, y: 0, zIndex: 2,ease: Cubic.easeInOut }, "-=0.3" )
    }

    render(){
      return (
          <div  onMouseEnter={this.onHover.bind(this)}
                onMouseLeave={this.onHoverOut.bind(this)} 
                onClick={this.goBack.bind(this)}
                className={style.main}>
            <div className={classnames(style.state, style.state1)}>
              &lt; back
            </div>
            <div className={classnames(style.state, style.state2)}>
              &lt; back
            </div>
          </div>
      )
    }
}

export default BackBtn
