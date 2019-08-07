
import React, { Component, PropTypes } from 'react'
import style from './style.css'

class LoadingView extends Component {

  componentDidMount(){   
    const { UIActions, ui: { show_menu } } = this.props
    const element = document.getElementsByClassName(style.main)
    const strokeSvg = document.getElementsByClassName("strokeSvg")
    let text = document.getElementsByClassName(style.text)
    let bg = document.getElementsByClassName("bgSvg")

    TweenMax.fromTo(element, .5, { scale: .8, opacity: 0}, 
      {overwrite: 1, scale: 1,delay: 0.3, opacity: 1 });

    let colorTimeline = new TimelineLite;
    colorTimeline.to(strokeSvg, 1, { stroke: "#594593" });
    colorTimeline.to(strokeSvg, 1, { stroke: "#81c5d8" });
    colorTimeline.to(strokeSvg, 1, { stroke: "#f7bd23" });
    colorTimeline.to(strokeSvg, 1, { stroke: "#9ec12f" });
    colorTimeline.to(strokeSvg, 1, { stroke: "#2ec3bd" });

    let percentage = { val: 0 }

    TweenLite.to(percentage, 2, {
        percentage: text,
        delay: 0.7,
        onUpdate: () => {
            let progress = percentage.val += 2;
            if (progress == 102) {
              TweenLite.delayedCall(0.5, () => {
                  bg[0].style.stroke = 'none'
                  TweenLite.to(strokeSvg, .5, {
                      ease: Sine.easeInOut,
                      strokeDashoffset: 260
                  })
                  TweenLite.to(element, .5, {
                      ease: Sine.easeInOut,
                      rotation: 180 + "deg"
                  })
                  TweenLite.to(text, .2, {
                      scale: 0
                  })
              });
          
            }else if(progress <= 100){
              let moveTo = ( 1 - progress / 100 ) * 260;
              TweenLite.to(strokeSvg, 0.1, {
                  strokeDashoffset: moveTo
              })
              colorTimeline.progress(progress / 100)
              text[0].innerHTML = progress + "%"
            }

        }
    })
    setTimeout(() => UIActions.showMenu(), 2500)
  }

  render() {
    return (
      <div className={style.main}>
        <span className={style.text}></span>
        <div dangerouslySetInnerHTML={{__html: '<svg viewBox="0 0 100 100" width="100%"><circle class="strokeSvg" cx="50" cy="50" r="40" stroke="#594593" style="stroke-dasharray: 260; stroke-dashoffset:260" stroke-width="1" fill="none" stroke-miterlimit="0"/></svg><svg viewBox="0 0 100 100" width="100%"><circle class="bgSvg" cx="50" cy="50" r="40" stroke="#7b7e82" stroke-width="1" fill="none" stroke-miterlimit="0" style="stroke-dashoffset=700"/></svg>' }}>
        </div>
      </div>
    )
  }
}

export default LoadingView
