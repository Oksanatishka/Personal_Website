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
                        link="http://itigetsocial.iti-marketing.com"
                        title="GetSocial"
                        subtitle="Social media management platform"
                        bgImg="/getsocial-1.jpg"
                    />

                    <section className={style['project-info']}>
                        <h3>Description</h3>
                        <p>
                            <i>
                                The #GetSocial Hub is an innovative, interactive
                                social media platform that allows you to
                                collect, manage, publish, filter and display
                                authentic social media content from{' '}
                                <b>
                                    Facebook, Twitter, Instagram, Youtube,
                                    Pinterest
                                </b>{' '}
                                to create more engagement and to drive results.
                            </i>
                            <br />
                            <br />
                            Project was <b>designed</b> and <b>built</b> myself
                            from scratch at{' '}
                            <a href="http://iti-marketing.com" target="_blank">
                                ITI Marketing
                            </a>{' '}
                            as in-house company's product. It leaded to the
                            great revenue and became a competitor on the social
                            media product’s market in the tourism industry.
                            <br />
                            Project is used by such destinations as{' '}
                            <b>
                                Daytona Beach, Space Coast, Spartanburg,
                                Atlanta, Smoky Mountain, Bradenton FL
                            </b>{' '}
                            and many other tourist places in US.
                            <br />
                            <br />
                            It consists of 2 parts:{' '}
                            <b>administration dashboard</b> for adding /
                            managing social feeds, viewing analytics and{' '}
                            <b>presentation customizible widget</b> for
                            embedding to clients websites.
                            <br />
                            For both parts I've used <b>React</b> in combination
                            with the <b>Flux</b> pattern on a <b>Node.js</b>{' '}
                            server built with <b>Express</b>.
                            <br />
                        </p>
                        <h3>Challenges</h3>
                        <ul>
                            <li>
                                Deep understanding of API's such as Facebook /
                                Twitter/ Instagram / Youtube / Pinterest.
                                (pulling content by GEO, hashtags, keywords,
                                personal accounts)
                            </li>
                            <li>UI without browser reloading.</li>
                            <li>
                                Customization and creation of widgets from the
                                UI for an integration to clients websites.
                            </li>
                            <li>Comprehensive and rich analytics.</li>
                            <li>
                                Auto updates of social media feeds based on
                                clients packages.
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
                            <li>
                                Facebook/Twitter/Instagram/Youtube/Pinterest/Google
                                maps APIs
                            </li>
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
