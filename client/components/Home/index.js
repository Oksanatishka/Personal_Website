import React, { PropTypes, Component } from 'react';

import style from './style.css';
import View from '../View';
import ArrowLink from '../ArrowLink';

class Home extends View {
    componentDidMount() {
        this.title = document.getElementsByClassName(style.title);
        this.subtitle = document.getElementsByClassName(style.subtitle);
        this.portfolioBtn = document.getElementsByClassName(style.portfolioBtn);

        let tl = new TimelineLite();

        tl.fromTo(
            this.title,
            0.6,
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                ease: Strong.easeOut
            }
        );
        tl.fromTo(
            this.subtitle,
            0.6,
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                ease: Strong.easeOut
            }
        );
        tl.fromTo(
            this.portfolioBtn,
            0.6,
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                ease: Strong.easeOut
            }
        );
    }

    componentWillLeave(callback) {
        this._animateOut(callback);
    }

    _animateOut(callback) {
        const timeline = new TimelineMax({});
        timeline.to(this.title, 0.2, {
            ease: Quad.easeIn,
            scale: 2,
            opacity: 0
        });
        timeline.to(this.subtitle, 0.2, {
            ease: Quad.easeIn,
            scale: 2,
            opacity: 0
        });
        timeline.to(this.portfolioBtn, 0.2, {
            ease: Quad.easeIn,
            scale: 2,
            opacity: 0
        });
        super._animateOut(callback);
    }

    render() {
        const { history } = this.props;
        return (
            <div className={style.main}>
                <h1 className={style.title}>Oksana Bibik</h1>
                <h3 className={style.subtitle}>Web developer</h3>
                <a
                    onClick={() => history.pushState(null, '/portfolio')}
                    className={style.portfolioBtn}
                >
                    <ArrowLink textLabel="View portfolio" />
                </a>
            </div>
        );
    }
}

export default Home;
