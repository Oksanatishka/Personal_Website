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
                        link="http://abingdonambassador.com"
                        title="Abingdon, VA"
                        subtitle="eLearning responsive website"
                        bgImg="/abingdon-1.jpg"
                    />

                    <section className={style['project-info']}>
                        <h3>Description</h3>
                        <p>
                            <i>
                                Abingdon, Virginia online customer service
                                learning platform. This educational program was
                                designed specifically for frontline hospitality
                                employees and volunteers.
                            </i>
                            <br />
                            <br />
                            It contains users registration, authorization,
                            different type of quizes, statistics.
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
