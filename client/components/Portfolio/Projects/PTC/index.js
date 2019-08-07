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
                        link="http://visitpeachtreecity.com/"
                        title="Peachtree city, GA"
                        subtitle="Responsive website"
                        bgImg="/ptc-1.jpg"
                    />

                    <section className={style['project-info']}>
                        <h3>Description</h3>
                        <p>
                            <i>
                                Responsive website for Visit Peachtree city, GA
                                CVB
                            </i>
                            <br />
                            <br />
                            This website I built using ModX CMS and Bootstrap.
                        </p>
                        <h3>Skills exercised</h3>
                        <ul>
                            <li>PHP</li>
                            <li>ModX</li>
                            <li>HTML</li>
                        </ul>
                        <ul>
                            <li>CSS3</li>
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
