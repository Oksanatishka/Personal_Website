import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import style from './style.css';
import global from '../../containers/App/global.css';
import View from '../View';
import Thumb from './Thumb';

const thumbs = [
    {
        coloredImg: 'clinton-thumb-w.jpg',
        noColoredImg: 'clinton-thumb-b.jpg',
        title: 'Clinton county, OH',
        subtitle: 'Responsive website',
        slug: 'clinton'
    },
    {
        coloredImg: 'gordon-thumb-w.jpg',
        noColoredImg: 'gordon-thumb-b.jpg',
        title: 'Gordon county, GA',
        subtitle: 'Responsive website',
        slug: 'gordon'
    },
    {
        coloredImg: 'abingdon-thumb-w.jpg',
        noColoredImg: 'abingdon-thumb-b.jpg',
        title: 'Abingdon, VA',
        subtitle: 'eLearning website',
        slug: 'abingdon'
    },
    {
        coloredImg: 'sts-thumb-w.jpg',
        noColoredImg: 'sts-thumb-b.jpg',
        title: 'Southeast Tourism Society',
        subtitle: 'Responsive website',
        slug: 'sts'
    },
    {
        coloredImg: 'henry-thumb-w.jpg',
        noColoredImg: 'henry-thumb-b.jpg',
        title: 'Henry county, GA',
        subtitle: 'Responsive website',
        slug: 'henry'
    },
    {
        coloredImg: 'henryweddings-thumb-w.jpg',
        noColoredImg: 'henryweddings-thumb-b.jpg',
        title: 'Henry county weddings, GA',
        subtitle: 'Responsive website',
        slug: 'henry-weddings'
    },
    {
        coloredImg: 'bradenton-thumb-w.jpg',
        noColoredImg: 'bradenton-thumb-b.jpg',
        title: 'Bradenton area, FL',
        subtitle: 'eLearning website',
        slug: 'bradenton'
    },
    {
        coloredImg: 'v2d-thumb-w.jpg',
        noColoredImg: 'v2d-thumb-b.jpg',
        title: 'Vacations2discover',
        subtitle: 'Responsive website',
        slug: 'v2d'
    },
    {
        coloredImg: 'iti-thumb-w.jpg',
        noColoredImg: 'iti-thumb-b.jpg',
        title: 'ITI Marketing',
        subtitle: 'Responsive website',
        slug: 'iti'
    },
    {
        coloredImg: 'hospitality-thumb-w.jpg',
        noColoredImg: 'hospitality-thumb-b.jpg',
        title: 'Hospitality Ventures',
        subtitle: 'Sales app',
        slug: 'hospitality'
    },
    {
        coloredImg: 'braselton-thumb-w.jpg',
        noColoredImg: 'braselton-thumb-b.jpg',
        title: 'Braselton, GA',
        subtitle: 'Responsive website',
        slug: 'braselton'
    },
    {
        coloredImg: 'ptc-thumb-w.jpg',
        noColoredImg: 'ptc-thumb-b.jpg',
        title: 'Peachtree city, GA',
        subtitle: 'Responsive website',
        slug: 'ptc'
    },
    {
        coloredImg: 'bacvb-thumb-w.jpg',
        noColoredImg: 'bacvb-thumb-b.jpg',
        title: 'Bradenton, FL',
        subtitle: 'Sales app',
        slug: 'bacvb'
    }
];

class Portfolio extends View {
    componentDidMount() {
        const tweentxt = document.getElementsByClassName(style.tweentxt);
        const heading = document.getElementsByClassName(style.heading);
        TweenMax.fromTo(
            heading,
            0.3,
            { x: 100, opacity: 0, delay: 1 },
            { x: 0, opacity: 1, delay: 1 }
        );
        TweenMax.staggerFrom(
            tweentxt,
            0.3,
            { y: 40, opacity: 0, delay: 1.2 },
            0.15
        );
    }

    render() {
        return (
            <View {...this.props}>
                <div className={global.container}>
                    <h1 className={style.heading}>Portfolio</h1>
                    <h3 className={style.tweentxt}>
                        Below you can see over <b>10</b> projects I contributed
                        to or built from scratch.
                    </h3>
                    <div className={style.tweentxt}>
                        {thumbs.map(thumb => (
                            <Thumb {...this.props} {...thumb} />
                        ))}
                        <div className={global.clearfix} />
                    </div>
                </div>
            </View>
        );
    }
}

export default Portfolio;
