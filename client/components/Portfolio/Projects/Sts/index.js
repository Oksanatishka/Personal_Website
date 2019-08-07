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
                        title="Southeast tourism society"
                        subtitle="Responsive website"
                        bgImg="/sts-1.jpg"
                    />

                    <section className={style['project-info']}>
                        <h3>Description</h3>
                        <p>
                            <i>
                                The Southeast Tourism Society (STS) is dedicated
                                to promoting tourism in its member states of
                                Alabama, Arkansas, Florida, Georgia, Kentucky,
                                Louisiana, Mississippi, North Carolina, South
                                Carolina, Tennessee, Virginia and West Virginia.
                            </i>
                        </p>
                        <h3>Challenges</h3>
                        <ul>
                            <li>Implement CSS using Atomic approach.</li>
                            <li>
                                Implementation and integration of events
                                calendar.
                            </li>
                            <li>
                                Make every single page accesible via custom CMS
                                for a client to apply any content changes
                                without code knowledge.
                            </li>
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
                            <li>Atomic CSS</li>
                            <li>Responsive design</li>
                            <li>jQuery</li>
                        </ul>
                    </section>
                </div>
            </View>
        );
    }
}

export default Imgoing;
