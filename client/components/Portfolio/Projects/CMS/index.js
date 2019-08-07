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
                        title="In house CMS"
                        subtitle="Content management system"
                        bgImg="/cms-1.jpg"
                    />

                    <section className={style['project-info']}>
                        <h3>Description</h3>
                        <p>
                            <i>
                                Content management system for web sites
                                development at ITI Marketing.
                            </i>
                            <br />
                            <br />
                            Inspired by open source project for viewing MongoDB
                            databases, I implemented this project and made it
                            our main CMS at ITI Marketing.
                        </p>
                        <h3>Challenges</h3>
                        <ul>
                            <li>
                                Ability to add custom fields based on document
                                type.
                            </li>
                            <li>Implementing files manager.</li>
                            <li>
                                Ability to search/filter documents and making
                                batch operations.
                            </li>
                            <li>Import and export collections.</li>
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
                            <li>MongoDB</li>
                            <li>Grunt</li>
                            <li>jQuery</li>
                        </ul>
                    </section>
                </div>
            </View>
        );
    }
}

export default Imgoing;
