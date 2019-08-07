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
                        link="http://ambassador.iti-marketing.com/"
                        title="Bradenton, FL"
                        subtitle="eLearning website"
                        bgImg="/bradenton-1.jpg"
                    />

                    <section className={style['project-info']}>
                        <h3>Description</h3>
                        <p>
                            <i>
                                Administered through the Bradenton Area
                                Convention & Visitors Bureau, The Destination
                                Ambassador Program is a certification program
                                that serves to increase tourism by inspiring
                                front-line hospitality employees and volunteers
                                to work together to turn every visitor encounter
                                into a positive, memorable experience.
                            </i>
                            <br />
                            <br />
                            It contains users registration, authorization, user
                            groups, groups of quizes.
                        </p>

                        <h3>Skills exercised</h3>
                        <ul>
                            <li>Javascript</li>

                            <li>HTML</li>
                            <li>CSS3 (Stylus)</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                        </ul>
                        <ul>
                            <li>jQuery</li>
                            <li>MongoDB</li>
                            <li>Grunt</li>
                            <li>Responsive design</li>
                        </ul>
                    </section>
                </div>
            </View>
        );
    }
}

export default Imgoing;
