import React, { Component, PropTypes } from 'react';

import style from './style.css';
import global from '../../containers/App/global.css';
import View from '../View';
import classnames from 'classnames';

class About extends View {
    componentDidMount() {
        const tweentxt = document.getElementsByClassName(style.tweentxt);
        const greetings = document.getElementsByClassName(style.greetings);
        const profilepic = document.getElementsByClassName(style.profilepic);
        TweenMax.fromTo(
            greetings,
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
        TweenMax.fromTo(
            profilepic,
            0.4,
            { y: -540, scale: 0, opacity: 0, delay: 1.5 },
            { y: 40, scale: 1, opacity: 1, delay: 1.5 }
        );
    }

    render() {
        return (
            <View {...this.props}>
                <div className={global.container}>
                    <div className={style.main}>
                        <section>
                            <img
                                className={style.profilepic}
                                src="profile.png"
                            />
                            <span className={classnames(style.greetings)}>
                                Greetings,
                            </span>
                            <h1 className={style.tweentxt}>
                                I'm a junior web developer with 2+ years of
                                professional experience, based in San Francisco
                                Bay Area
                            </h1>

                            <p className={style.tweentxt}>
                                I develop <b>front-end</b> for responsive{' '}
                                <b>websites</b> and <b>web apps</b> utilizing
                                such cutting edge technologies as{' '}
                                <b>
                                    Javascript, React, Redux, CSS, Graphql,
                                    Node.js, MongoDb, Webpack, Wordpress
                                </b>
                                .
                                <br />
                                <br />
                                I'm focused on developing{' '}
                                <b>
                                    high quality, interactive, modern, modular,
                                    fast
                                </b>{' '}
                                products using latest technologies, frameworks
                                and approaches. I'm also passioned and obscessed
                                about <b>design, UI</b> and <b>UX</b>.
                                <br />
                                <br />
                                Over the past few years I contributed /
                                developed over{' '}
                                <b>20 websites / web apps / mobile sites</b> for
                                many clients in the US tourism industry.
                            </p>
                        </section>
                        <section className={style.tweentxt}>
                            <h2>Skills & Techniques</h2>

                            <ul>
                                <li>JavaScript (ES5, ES6)</li>
                                <li>Graphql</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Node.js</li>
                            </ul>

                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Express.js</li>
                                <li>REST</li>
                                <li>Wordpress</li>
                            </ul>

                            <ul>
                                <li>Stylus/Less</li>
                                <li>Webpack/Grunt/Gulp</li>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                                <li>Git</li>
                                <li>Responsive design</li>
                                <li>TDD</li>
                            </ul>

                            <ul>
                                <li>Ajax</li>
                                <li>OOP</li>
                                <li>Performance Opt-ons</li>
                                <li>SEO Opt-ons</li>
                                <li>Linux servers</li>
                            </ul>
                        </section>
                        <section className={style.tweentxt}>
                            <h2>Few words about this website</h2>
                            <p>
                                It has been designed and built by myself from
                                the scratch using <b>React</b>, <b>Redux</b> and
                                awesome <b>GreenSock</b> animation library.
                            </p>
                        </section>
                    </div>
                </div>
            </View>
        );
    }
}
export default About;
