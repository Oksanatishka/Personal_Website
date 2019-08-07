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
                        link="http://imgoing.iti-marketing.com/#/savannah/events"
                        title="Imgoing"
                        subtitle="Social events calendar"
                        bgImg="/imgoing-1.jpg"
                    />

                    <section className={style['project-info']}>
                        <h3>Description</h3>
                        <p>
                            <i>
                                Social events calendar for Travel & Tourism
                                Partners based on Facebook events.
                            </i>
                            <br />
                            <br />
                            Project was developed myself from scratch at{' '}
                            <a href="http://iti-marketing.com" target="_blank">
                                ITI Marketing
                            </a>{' '}
                            as in-house companys product.
                            <br />
                            It consists of 2 parts:{' '}
                            <b>administration dashboard</b> for managing
                            events/locations and{' '}
                            <b>presentation customizible widget</b> for
                            embedding to clients websites.
                            <br />
                            For both parts I've used <b>React</b> in combination
                            with the <b>Flux</b> pattern on a <b>Node.js</b>{' '}
                            server built with <b>Express</b>.
                            <br />
                            Besides the development, I fully designed <b>
                                UI
                            </b>{' '}
                            of the first iteration of the product and brought
                            ideas to the table which were used in the project.
                        </p>
                        <h3>Challenges</h3>
                        <ul>
                            <li>
                                Pulling Facebook events by geo location with a
                                specific radius. Problem is that Facebook does
                                not provide an API call to pull events by
                                coordinates.
                            </li>
                            <li>
                                Map POIs clustering. Since we need to show many
                                POIs on the map we needed to come up with a
                                rendering / loading optimizations.
                            </li>
                            <li>
                                Maximizing the amount of pulled events by
                                splitting the map area on many 1 miles circles
                                and then combining events from each of those
                                circles. The problem is that Facebook has API
                                result limitations.
                            </li>
                            <li>
                                Creating interactive custom Google maps overlays
                                for POI's and popups.
                            </li>
                        </ul>

                        <h3>Skills exercised</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Reflux</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>HTML5</li>
                            <li>CSS3 (Stylus)</li>
                        </ul>
                        <ul>
                            <li>MongoDB</li>
                            <li>Facebook/Google maps APIs</li>
                            <li>Full Responsive</li>
                            <li>Webpack</li>
                            <li>Grunt</li>
                            <li>REST</li>
                        </ul>
                    </section>
                </div>
            </View>
        );
    }
}

export default Imgoing;
