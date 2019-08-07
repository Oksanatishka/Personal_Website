
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UIActions from '../../actions/ui'
import ReactCSSTransitionGroup from 'react-addons-transition-group'

import LoadingView from '../../components/LoadingView'
import Menu from '../../components/Menu'
import defaultStyles from './default.css'
import style from './style.css'

class App extends Component {

  render() {
    const { ui: { show_menu }, children } = this.props

    return (
      <div className={style.main}>
        
        { 
          show_menu ?
          <div style={{height: "100%"}}>
            <Menu {...this.props} />
            <ReactCSSTransitionGroup component="div" className={style.view}>
              {
                React.cloneElement(children, { ...this.props,
                  key: this.props.location.pathname
                })
              }
            </ReactCSSTransitionGroup>
          </div>
         :
         <LoadingView {...this.props} />
       }
        
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    routing: state.routing,
    ui: state.ui,
    navigation: state.navigation
  }
}

function mapDispatchToProps(dispatch) {
  return {
    UIActions: bindActionCreators(UIActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
