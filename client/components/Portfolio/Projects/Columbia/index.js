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
                        link="http://columbia.itimarketing.mobi/map"
                        title="Columbia, FL"
                        subtitle="Interactive map"
                        bgImg="/columbia-2.jpg"
                    />

                    <section className={style['project-info']}>
                        <h3>Description</h3>
                        <p>
                            <i>
                                Columbia county, FL interactive map for their
                                outdoor activities, water places, parks.
                            </i>
                            <br />
                            <br />
                            Project was <b>built</b> myself from scratch using{' '}
                            <b>React</b> in combination with the <b>Flux</b>{' '}
                            pattern and Google maps API.
                        </p>
                        <h3>Challenges</h3>
                        <ul>
                            <li>
                                Matching listing items with POIs during the
                                scroll.
                            </li>
                            <li>
                                Ability to select items from menu, map or
                                listing.
                            </li>
                        </ul>

                        <h3>Skills exercised</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                        <ul>
                            <li>Google maps APIs</li>
                            <li>Full Responsive</li>
                            <li>Webpack</li>
                            <li>MongoDB</li>
                        </ul>
                    </section>
                </div>
            </View>
        );
    }
}

export default Imgoing;
