import React, { Component, PropTypes } from 'react';
import style from './style.css';
import View from '../../../View';
import Slider from '../../../Slider';
import TopContentPart from '../../TopContentPart';

class Imgoing extends View {
    render() {
        const images = ['/imgoing-slide1.jpg', '/imgoing-1.jpg'];

        return (
            <View {...this.props}>
                <div className={style.main}>
                    <TopContentPart
                        {...this.props}
                        link="http://southeasttourism.org/"
                        title="Bradenton, FL"
                        subtitle="Mobile / Phonegap"
                        bgImg="/bradentonmobile-1.jpg"
                    />

                    <section className={style['project-info']}>
                        <h3>Description</h3>
                        <p>
                            <i>Official Bradenton, FL mobile website.</i>
                            <br />
                            <br />
                            For this project besides the web version, I
                            implemented <b>hybrid</b> version for <b>iOS</b> and{' '}
                            <b>Android</b> using <b>Phonegap</b>. It's available
                            at Apple Store and Google Play.
                        </p>
                        <h3>Challenges</h3>
                        <ul>
                            <li>
                                Implementation of <b>hybrid</b> version using{' '}
                                <b>Phonegap</b>.
                            </li>
                            <li>
                                <b>Near me</b> feature for searching nearest
                                places to you based on a GPS location.
                            </li>
                        </ul>

                        <h3>Skills exercised</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS3</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                        </ul>
                        <ul>
                            <li>Phonegap</li>
                            <li>MongoDB</li>
                            <li>Grunt</li>
                            <li>Google Places API</li>
                            <li>jQuery</li>
                        </ul>
                    </section>
                </div>
            </View>
        );
    }
}

export default Imgoing;
