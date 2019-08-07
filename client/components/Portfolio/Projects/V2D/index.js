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
                        link="http://vacations2discover.com"
                        title="Vacations2discover"
                        subtitle="Responsive website"
                        bgImg="/v2d-1.jpg"
                    />

                    <section className={style['project-info']}>
                        <h3>Description</h3>
                        <p>
                            <i>
                                Digital travel magazines with a collection of
                                great vacation getaway ideas and experiences.
                                Innovative, interactive travel site offering
                                monthly updated travel guides and vacation
                                planning tools.
                            </i>
                            <br />
                            <br />
                            For this project I built the main website and
                            administration part for managing magazines, blogs.
                            <br />
                            Also after release, I built over 30 different
                            giveaway's unique landing pages which were being
                            placed under Giveaways section and as Facebook apps.
                        </p>
                        <h3>Challenges</h3>
                        <ul>
                            <li>
                                Generating magazines random full height layouts.
                            </li>
                        </ul>

                        <h3>Skills exercised</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS3 (LESS)</li>
                            <li>Javascript</li>
                        </ul>
                        <ul>
                            <li>MongoDB</li>
                            <li>Grunt</li>
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
