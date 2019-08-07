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
                        link="http://bacvbsales.com/"
                        title="Bradenton, FL"
                        subtitle="Sales app for tablets"
                        bgImg="/bacvb-1.jpg"
                    />

                    <section className={style['project-info']}>
                        <h3>Description</h3>
                        <p>
                            <i>
                                Bradenton, FL sales app optimized for tablets
                                which is being used at different tourism
                                tradeshows.
                            </i>
                            <br />
                            <br />
                            Main thing in the project is custom calendar of
                            appointments with ability to take notes, export to
                            excel, send emails with sales information.
                        </p>
                        <h3>Challenges</h3>
                        <ul>
                            <li>Custom calendar of appointments.</li>
                            <li>Interactive map.</li>
                        </ul>

                        <h3>Skills exercised</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS3 (Stylus)</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                        </ul>
                        <ul>
                            <li>MongoDB</li>
                            <li>Grunt</li>
                            <li>jQuery</li>
                            <li>Excel generator</li>
                        </ul>
                    </section>
                </div>
            </View>
        );
    }
}

export default Imgoing;
