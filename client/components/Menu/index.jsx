import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import style from './style.css';

class Menu extends Component {
    componentDidMount() {
        const element = ReactDOM.findDOMNode(this);
        const menuItems = document.getElementsByClassName(style['menu-item']);
        const socialIcon = document.getElementsByClassName(
            style['social-icon']
        );
        const socialIcons = document.getElementsByClassName(
            style['social-icons']
        );

        // portfolio icons
        this.portfolioCircleSvg = document.getElementsByClassName(
            'portfolioCircleSvg'
        );
        this.portfolioLinesSvg = document.getElementsByClassName(
            'portfolioLinesSvg'
        );
        this.portfolioBoxesSvg = document.getElementsByClassName(
            'portfolioBoxesSvg'
        );

        // about icon
        this.aboutSvg = document.getElementsByClassName('aboutSvg');

        //contact icon
        this.contactHand = document.getElementsByClassName('contactHandSvg');
        this.contactDog = document.getElementsByClassName('contactDogSvg');

        //resume icon
        this.resumeLine = document.getElementsByClassName('resumeLineSvg');

        //menu container animation
        TweenMax.fromTo(
            element,
            1.2,
            { opacity: 0, x: -200, delay: 0.5, ease: Expo.easeInOut },
            { x: 0, opacity: 1, delay: 0.5, ease: Expo.easeInOut }
        );
        TweenMax.staggerFrom(menuItems, 0.3, { x: -170, delay: 1.5 }, 0.15);

        //individual social icons animation
        TweenMax.staggerFrom(socialIcon, 0.3, { scale: 0, delay: 2 }, 0.1);

        //social icons container animation
        TweenMax.fromTo(
            socialIcons,
            0.5,
            { opacity: 0, x: -200, delay: 2 },
            { opacity: 1, x: 0, delay: 2 }
        );
    }

    _changePage(slug) {
        const { history } = this.props;
        setTimeout(() => history.pushState(null, slug), 0);
    }

    _onHoverPortfolio() {
        TweenMax.to(this.portfolioCircleSvg, 2, {
            rotation: 360,
            transformOrigin: '50% 50%',
            ease: Back.easeOut
        });
        TweenMax.staggerFrom(this.portfolioLinesSvg, 0.2, { x: -150 }, 0.1);
        TweenMax.staggerFrom(this.portfolioBoxesSvg, 0.2, { y: 150 }, 0.1);
    }

    _onHoverOutPortfolio() {
        TweenMax.killAll(true, false, false);
        TweenMax.set(this.portfolioCircleSvg, { clearProps: 'all' });
        TweenMax.set(this.portfolioLinesSvg, { clearProps: 'all' });
        TweenMax.set(this.portfolioBoxesSvg, { clearProps: 'all' });
    }

    _onHoverAbout() {
        TweenMax.to(this.aboutSvg, 2, {
            rotationY: 360,
            transformOrigin: 'center center',
            ease: Back.easeOut
        });
    }

    _onHoverOutAbout() {
        TweenMax.killAll(true, false, false);
        TweenMax.set(this.aboutSvg, { clearProps: 'all' });
    }

    _onHoverContact() {
        TweenMax.fromTo(
            this.contactHand,
            1,
            { opacity: 0, x: 80, ease: Expo.easeInOut },
            { opacity: 1, x: 0, ease: Expo.easeOut }
        );
        TweenMax.fromTo(
            this.contactDog,
            1,
            { opacity: 0, x: 80, ease: Expo.easeInOut },
            { opacity: 1, x: 0, ease: Expo.easeOut }
        );
    }

    _onHoverOutContact() {
        TweenMax.killAll(true, false, false);
        TweenMax.set(this.contactHand, { clearProps: 'all' });
        TweenMax.set(this.contactDog, { clearProps: 'all' });
    }

    _onHoverResume() {
        TweenMax.staggerFrom(this.resumeLine, 0.1, { y: 10, opacity: 0 }, 0.05);
    }

    _onHoverOutResume() {
        TweenMax.killAll(true, false, false);
        TweenMax.set(this.resumeLine, { clearProps: 'all' });
    }

    render() {
        return (
            <nav className={style.main}>
                <section className={style['menu-items']}>
                    <div
                        onMouseEnter={this._onHoverPortfolio.bind(this)}
                        onMouseLeave={this._onHoverOutPortfolio.bind(this)}
                        className={style['menu-item']}
                        onClick={() => this._changePage('/portfolio')}
                    >
                        <div
                            className={style.linkArrow}
                            dangerouslySetInnerHTML={{
                                __html:
                                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 95" enable-background="new 0 0 100 100" xml:space="preserve"><g><rect class="' +
                                    'portfolioLinesSvg' +
                                    '" x="11.094" y="18.19" width="8.31" height="1.684"/><rect class="' +
                                    'portfolioLinesSvg' +
                                    '" x="11.094" y="20.961" width="31.575" height="1.685"/><rect class="' +
                                    'portfolioLinesSvg' +
                                    '" x="11.094" y="26.716" width="58.167" height="5.886"/><rect class="' +
                                    'portfolioLinesSvg' +
                                    '" x="11.094" y="36.84" width="43.763" height="1.686"/><rect class="' +
                                    'portfolioLinesSvg' +
                                    '" x="11.094" y="39.425" width="56.689" height="1.687"/><rect class="' +
                                    'portfolioBoxesSvg' +
                                    '" x="11.094" y="47.779" width="16.249" height="13.479"/><rect class="' +
                                    'portfolioBoxesSvg' +
                                    '" x="11.094" y="63.431" width="13.295" height="1.685"/><rect class="' +
                                    'portfolioBoxesSvg' +
                                    '" x="11.094" y="67.308" width="9.847" height="1.686"/><rect class="' +
                                    'portfolioBoxesSvg' +
                                    '" x="30.914" y="47.779" width="16.25" height="13.479"/><rect class="' +
                                    'portfolioBoxesSvg' +
                                    '" x="30.914" y="63.431" width="13.294" height="1.685"/><rect class="' +
                                    'portfolioBoxesSvg' +
                                    '" x="30.914" y="67.308" width="9.848" height="1.686"/><path class="' +
                                    'portfolioBoxesSvg' +
                                    '" d="M50.731,65.115h0.479c0.171-0.573,0.378-1.131,0.59-1.685h-1.068V65.115z"/><path class="' +
                                    'portfolioBoxesSvg' +
                                    '" d="M85.975,80.231L82.507,83.7v-0.004c-0.115,0.119-0.115,0.309,0,0.427c0.121,0.119,0.312,0.119,0.428,0l3.468-3.468   c0.115-0.115,0.115-0.306,0-0.424C86.281,80.116,86.097,80.116,85.975,80.231z"/><path class="' +
                                    'portfolioCircleSvg' +
                                    '" d="M74.319,51.36c-11.42,0-20.682,9.258-20.682,20.68c0,11.423,9.262,20.682,20.682,20.682C85.738,92.722,95,83.463,95,72.04   C95,60.618,85.738,51.36,74.319,51.36z M77.683,60.583c1.506-1.51,3.659-2,5.581-1.466l-2.955,2.954   c-0.808,0.805-0.808,2.106,0,2.911l1.067,1.068c0.803,0.805,2.105,0.805,2.908,0l2.955-2.954c0.536,1.923,0.046,4.069-1.466,5.579   c-1.512,1.512-3.659,2.002-5.586,1.47l-1.269,1.274c-0.018-0.083-0.029-0.171-0.029-0.243l-0.012-0.522l-0.427-0.299   c-0.237-0.168-0.503-0.286-0.773-0.375c0.213-0.369,0.184-0.849-0.134-1.166c-0.38-0.376-0.985-0.376-1.362,0l-0.489,0.487   l-1.304-1.307l1.822-1.829C75.682,64.244,76.166,62.099,77.683,60.583z M61.371,59.481c0.074-0.08,0.126-0.128,0.155-0.159   c0,0,0,0,0.069-0.069c0.034-0.034,0.086-0.084,0.162-0.158c0.226-0.229,0.656-0.206,0.656-0.206s2.044,1.138,2.604,1.559   c0.398,0.442,1.396,2.441,1.396,2.441l6.301,6.299c0,0,0.248-0.296,0.456-0.457c0.224-0.089,0.473-0.023,0.473-0.023l1.639,1.64   l-1.408,1.408h-0.005l-1.247,1.251l-1.638-1.637c0,0-0.064-0.249,0.022-0.478c0.161-0.205,0.456-0.453,0.456-0.453l-6.296-6.298   c0,0-2.003-0.998-2.446-1.399c-0.421-0.557-1.558-2.603-1.558-2.603S61.146,59.709,61.371,59.481z M70.95,83.498   c-1.508,1.511-3.659,2.001-5.581,1.469l2.954-2.959c0.809-0.801,0.809-2.105,0-2.907l-1.066-1.068   c-0.803-0.805-2.107-0.805-2.909,0l-2.954,2.955c-0.536-1.925-0.046-4.071,1.465-5.582c1.513-1.513,3.66-2,5.58-1.467l1.83-1.829   l1.31,1.307l-0.397,0.397c-0.382,0.379-0.382,0.991,0,1.365c0.287,0.288,0.708,0.353,1.06,0.199c0.094,0.28,0.215,0.549,0.388,0.8   l0.307,0.43l0.519,0.009c0.075,0,0.156,0.012,0.243,0.026l-1.276,1.274C72.951,79.842,72.461,81.988,70.95,83.498z M86.863,83.068   l-1.517,1.523c-0.808,0.805-2.106,0.805-2.915,0l-2.787-2.791c-0.005-1.134-0.79-2.7-2.152-4.062   c-1.344-1.344-2.891-2.13-4.021-2.148c-0.56-0.806-0.484-1.92,0.236-2.635l1.523-1.525c0.716-0.718,1.829-0.794,2.631-0.231   c0.023,1.131,0.809,2.674,2.152,4.015c1.362,1.362,2.926,2.153,4.062,2.153l2.787,2.793C87.672,80.965,87.672,82.266,86.863,83.068   z"/><rect class="' +
                                    'portfolioBoxesSvg' +
                                    '" x="11.094" y="75.248" width="36.992" height="1.686"/><path class="' +
                                    'portfolioBoxesSvg' +
                                    '" d="M66.981,49.057v-1.277h-16.25v13.479h2.024C55.644,55.493,60.756,51.042,66.981,49.057z"/><polygon points="6.477,13.681 74.923,13.681 74.923,47.981 76.401,47.981 76.401,7.278 5,7.278 5,83.602 52.775,83.602    52.775,82.124 6.477,82.124  "/></g><text x="0" y="115" fill="#fff" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Yamini Ahluwalia</text><text x="0" y="120" fill="#fff" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>'
                            }}
                        />
                        <div className={style.title}>Portfolio</div>
                    </div>

                    <div
                        onMouseEnter={this._onHoverAbout.bind(this)}
                        onMouseLeave={this._onHoverOutAbout.bind(this)}
                        className={style['menu-item']}
                        onClick={() => this._changePage('/about')}
                    >
                        <div
                            className={style.linkArrow}
                            dangerouslySetInnerHTML={{
                                __html:
                                    '<svg class=' +
                                    'aboutSvg' +
                                    ' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="-4.545 0 100 105" enable-background="new -4.545 0 100 100" xml:space="preserve"><g><path fill="#fff" d="M32.913,43.92c2.26,4.982,5.841,8.576,10.013,9.718c0.464,0.128,0.935,0.224,1.412,0.288   c0.477,0.066,0.961,0.1,1.45,0.1c2.484,0,4.831-0.856,6.912-2.38c4.573-3.351,7.85-9.925,8.432-17.682   c0.105-0.729,0.163-1.474,0.174-2.23l-2.482,2.851c0.172-0.379,0.245-0.832,0.244-1.332c-0.017-3.508-3.75-9.415-3.75-9.415   c-8.215,5.942-20.432,0-20.432,0c-0.873,0.344-1.438,1.189-1.796,2.276c-0.671,2.029-0.615,4.903-0.447,6.969   c0.122,1.503,0.303,2.578,0.302,2.578c-0.919-0.642-1.764-0.976-2.452-1.149C30.807,37.955,31.656,41.151,32.913,43.92z"/><path fill="none" d="M30.672,53.914c0.04-0.004,0.081-0.008,0.121-0.015c0.321-0.042,0.645-0.079,0.971-0.11   c0,0.033,0.01,0.067,0.011,0.1c0.005,0.097,0.021,0.189,0.032,0.286c0.06,0.54,0.221,1.065,0.475,1.571   c1.697,4.271,7.188,12.37,10.423,16.968l0.667-9.552c-0.945-0.486-1.757-1.287-2.278-2.217c-0.375-0.668-0.603-1.398-0.603-2.143   c0,0,2.413,1.068,4.875,1.068c2.463,0,4.876-1.068,4.876-1.068c0,0.805-0.267,1.596-0.698,2.307   c-0.524,0.859-1.293,1.596-2.182,2.053l0.649,9.306c3.438-4.47,8.993-11.963,11.021-16.257c0.413-0.654,0.664-1.35,0.737-2.069   c0.002-0.005,0.002-0.011,0.003-0.019c0.01-0.072,0.02-0.15,0.025-0.225c0-0.004,0.002-0.012,0.002-0.018   c0.002-0.031,0.012-0.061,0.012-0.094c0.736,0.067,1.461,0.171,2.174,0.303c10.438,1.966,18.378,10.956,18.767,21.874   c5.051-7.048,8.036-15.671,8.036-24.983c0-23.71-19.289-43-42.999-43c-23.71,0-43,19.29-43,43c0,9.313,2.986,17.938,8.038,24.985   C11.228,64.675,19.706,55.443,30.672,53.914z M28.312,28.222c1.292-8.937,8.624-15.785,17.476-15.785   c8.85,0,16.18,6.845,17.477,15.777c0.133,0.923,0.203,1.868,0.203,2.831c0,0.962-0.07,1.908-0.203,2.831   c-0.965,12.851-8.42,22.851-17.477,22.851c-8.94,0-16.32-9.743-17.435-22.358c-0.015-0.165-0.028-0.331-0.041-0.499   c-0.079-0.546-0.132-1.102-0.166-1.663c-0.021-0.384-0.036-0.77-0.036-1.161C28.11,30.086,28.179,29.143,28.312,28.222z"/><path fill="" d="M45.79,3.981c-25.916,0-47,21.084-47,47c0,25.915,21.084,46.998,47,46.998c25.915,0,46.999-21.083,46.999-46.998   C92.789,25.065,71.705,3.981,45.79,3.981z M45.79,7.981c23.71,0,42.999,19.29,42.999,43c0,9.313-2.985,17.936-8.036,24.983   c-0.389-10.918-8.328-19.908-18.767-21.874c-0.713-0.132-1.438-0.235-2.174-0.303c0,0.033-0.01,0.063-0.012,0.094   c0,0.006-0.002,0.014-0.002,0.018c-0.006,0.074-0.016,0.152-0.025,0.225c-0.001,0.008-0.001,0.014-0.003,0.019   c-0.073,0.72-0.324,1.415-0.737,2.069c-2.027,4.294-7.582,11.787-11.021,16.257l-0.649-9.306c0.889-0.457,1.657-1.193,2.182-2.053   c0.432-0.711,0.698-1.502,0.698-2.307c0,0-2.413,1.068-4.876,1.068c-2.462,0-4.875-1.068-4.875-1.068   c0,0.744,0.229,1.475,0.603,2.143c0.521,0.93,1.333,1.73,2.278,2.217l-0.667,9.552c-3.234-4.598-8.726-12.696-10.423-16.968   c-0.254-0.506-0.415-1.031-0.475-1.571c-0.011-0.097-0.027-0.189-0.032-0.286c-0.001-0.032-0.01-0.066-0.011-0.1   c-0.326,0.031-0.65,0.068-0.971,0.11c-0.041,0.007-0.081,0.011-0.121,0.015c-10.966,1.529-19.444,10.761-19.846,22.052   C5.775,68.918,2.789,60.294,2.789,50.98C2.789,27.271,22.079,7.981,45.79,7.981z"/><path fill="#000000" d="M28.312,33.87c0.013,0.167,0.026,0.333,0.041,0.499c1.115,12.615,8.495,22.358,17.435,22.358   c9.057,0,16.512-10,17.477-22.851c0.133-0.923,0.203-1.869,0.203-2.831c0-0.963-0.07-1.908-0.203-2.831   c-1.297-8.932-8.627-15.777-17.477-15.777c-8.852,0-16.184,6.848-17.476,15.785c-0.133,0.92-0.202,1.864-0.202,2.824   c0,0.391,0.015,0.776,0.036,1.161C28.18,32.768,28.233,33.323,28.312,33.87z M32.64,33.082c-0.168-2.066-0.224-4.939,0.447-6.969   c0.359-1.086,0.924-1.932,1.796-2.276c0,0,12.217,5.942,20.432,0c0,0,3.733,5.907,3.75,9.415c0.001,0.5-0.072,0.953-0.244,1.332   l2.482-2.851c-0.011,0.757-0.068,1.502-0.174,2.23c-0.582,7.757-3.858,14.332-8.432,17.682c-2.081,1.523-4.428,2.38-6.912,2.38   c-0.488,0-0.973-0.033-1.45-0.1c-0.477-0.064-0.947-0.16-1.412-0.288c-4.171-1.142-7.753-4.736-10.013-9.718   c-1.257-2.769-2.106-5.965-2.422-9.41c0.688,0.173,1.532,0.507,2.452,1.149C32.943,35.659,32.762,34.584,32.64,33.082z"/></g><text x="-4.545" y="115" fill="#000000" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Wilson Joseph</text><text x="-4.545" y="120" fill="#000000" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>'
                            }}
                        />
                        <div className={style.title}>About</div>
                    </div>

                    <div
                        onMouseEnter={this._onHoverContact.bind(this)}
                        onMouseLeave={this._onHoverOutContact.bind(this)}
                        className={style['menu-item']}
                        onClick={() => this._changePage('/contact')}
                    >
                        <div
                            className={style.linkArrow}
                            dangerouslySetInnerHTML={{
                                __html:
                                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="1899.615 -81.891 100 78.774" enable-background="new 1899.615 -81.891 100 78.774" xml:space="preserve"><path class="' +
                                    'contactDogSvg' +
                                    '" d="M1980.061-63.957c-0.481-0.053-1.006-0.535-1.055-1.101c-0.01-0.132-0.018-0.258-0.045-0.382  c-0.229-2.22-2.09-3.961-4.367-3.961c-2.537,0-4.68,2.021-4.68,4.412c0,2.6,1.924,4.415,4.68,4.415c1.047,0,1.998-0.382,2.754-0.992  c0.718,0.536,1.599,0.88,2.572,0.92c1.348,0.049,2.582-0.396,3.494-1.271c0.848-0.812,1.137-1.983,1.133-3.07  c0.127-2.649-1.011-5.12-2.682-6.938c-1.841-2.001-4.335-3.197-7.07-3.197c-0.002,0-0.002,0-0.002,0  c-2.889,0-5.795,1.161-7.619,3.627c-1.121,1.514-2.465,3.462-2.465,6.508c0,2.768,0.545,5.228,2.559,7.266  c1.578,1.598,4.591,2.87,7.326,2.87c1.779,0,3.205-0.355,4.768-1.189c0.836-0.446,1.234-1.536,0.704-2.321  c-0.472-0.699-1.563-0.733-2.455-0.513c-0.972,0.241-1.616,0.751-3.013,0.751c-1.766,0-4.053-0.888-4.926-1.85  c-1.291-1.424-1.781-3.1-1.781-5.014c0-1.617,0.494-2.879,1.767-4.493c0.819-1.045,3.187-2.426,5.19-2.426  c1.771,0,3.485,0.832,4.724,2.25c1.138,1.308,1.81,2.884,1.726,4.669C1981.24-64.453,1980.807-63.872,1980.061-63.957z   M1974.633-63.622c-1.033,0.107-1.524-0.723-1.488-1.365c0.039-0.751,0.883-1.216,1.488-1.216c0.541,0,1.084,0.675,1.084,1.216  S1975.498-63.711,1974.633-63.622z"></path><path d="M1942.623-33.881c-0.456,2.171-1.039,4.205-1.729,6.104l7.189-1.863c1.982-0.515,3.45-2.185,3.707-4.215l0.42-3.342  c-0.74,0.656-1.625,1.157-2.613,1.427L1942.623-33.881z"></path><path d="M1949.609-44.378l-6.477,7.698c-0.031,0.211-0.074,0.409-0.108,0.618l6.05-1.641c1.713-0.465,2.998-1.883,3.29-3.633  l0.172-1.027l0.591-3.53c-0.677,0.317-1.373,0.633-2.109,0.941C1950.559-44.758,1950.09-44.565,1949.609-44.378z"></path><path class="' +
                                    'contactHandSvg' +
                                    '" d="M1945.075-81.891v18.188l4-1.586v-12.602h46.54v25.809H1961.1c-1.43,1.398-3.313,2.732-5.633,4h44.148v-33.809H1945.075z"></path><path d="M1960.989-64.103c-0.002-0.004-0.006-0.007-0.009-0.011c-0.198-0.215-0.415-0.407-0.643-0.585  c-0.024-0.019-0.049-0.04-0.072-0.059c-0.221-0.167-0.455-0.312-0.696-0.442c-0.099-0.052-0.2-0.094-0.302-0.14  c-0.129-0.059-0.258-0.113-0.389-0.163c-0.154-0.056-0.31-0.105-0.467-0.147c-0.057-0.017-0.113-0.025-0.169-0.039  c-0.226-0.055-0.455-0.086-0.687-0.112c-0.129-0.014-0.262-0.021-0.394-0.024c-0.067-0.003-0.137-0.003-0.206-0.003  c-0.652,0.007-1.312,0.126-1.947,0.378l-5.33,2.115l-4,1.587l-8.979,3.562c-0.588,0.232-1.132,0.567-1.604,0.987l-9.685,8.591  l-1.205-1.358l9.685-8.59c0.635-0.562,1.354-1.007,2.142-1.319l7.243-2.955v-10.895h-5.583c-0.693,0-1.379,0.132-2.022,0.39  l-14.527,7.263c-1.23,0.493-2.239,1.417-2.838,2.6l-18.689,26.419v33.938c0,0,14.419-2.729,17.111-3.839  c5.14-2.117,16.498-5.529,22.09-20.899c0.049-0.14,0.098-0.276,0.148-0.424c0.586-1.725,1.195-3.93,1.685-6.108  c0.047-0.208,0.089-0.413,0.134-0.62c0.066-0.341,0.139-0.676,0.2-1.025c0.03-0.165,0.058-0.333,0.086-0.5  c0.108-0.635,0.212-1.276,0.304-1.94l0.815-0.969l0.118-0.142l6.177-7.341c0.122-0.047,0.245-0.098,0.366-0.146  c0.799-0.312,1.607-0.652,2.416-1.013c0.656-0.292,1.312-0.593,1.957-0.915c0.146-0.072,0.289-0.145,0.434-0.219  c0.48-0.246,0.953-0.5,1.416-0.763c1.143-0.648,2.215-1.354,3.186-2.104c1.924-1.488,3.418-3.169,4.058-5.047  c0.725-2.13,0.461-4.338-0.741-6.217C1961.399-63.619,1961.202-63.871,1960.989-64.103z"></path></svg>'
                            }}
                        />
                        <div className={style.title}>Contact</div>
                    </div>

                    <Link
                        onMouseEnter={this._onHoverResume.bind(this)}
                        onMouseLeave={this._onHoverOutResume.bind(this)}
                        className={style['menu-item']}
                        to="/oksana_bibik_cv.pdf"
                        target="_blank"
                    >
                        <div
                            className={style.linkArrow}
                            dangerouslySetInnerHTML={{
                                __html:
                                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 105" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M81,9.811V7.782H56.554L23.03,5l-0.231,2.782H19v45.78L16,89.71l3,0.249v2.823h34.019l24.769,2.056  l0.171-2.056H81V56.125l3.817-45.997L81,9.811z M24.858,7.159l7.513,0.624h-7.565L24.858,7.159z M18.159,87.882L19,77.744v10.207  L18.159,87.882z M79,11.652v44.389v24.183v10.559h-0.876h-2.008H53.1H28.92H21v-0.657v-2.008V53.646V29.463V9.782h1.633h2.007  h31.831H79V11.652z M81,11.818l1.659,0.138L81,31.945V11.818z"/><path class="' +
                                    'resumeLineSvg' +
                                    '" d="M48,23.782c0,0.552-0.447,1-1,1H26c-0.552,0-1-0.448-1-1l0,0c0-0.552,0.448-1,1-1h21C47.553,22.782,48,23.23,48,23.782  L48,23.782z"/><path class="' +
                                    'resumeLineSvg' +
                                    '" d="M48,29.782c0,0.552-0.447,1-1,1H26c-0.552,0-1-0.448-1-1l0,0c0-0.552,0.448-1,1-1h21C47.553,28.782,48,29.23,48,29.782  L48,29.782z"/><path class="' +
                                    'resumeLineSvg' +
                                    '" d="M48,35.782c0,0.552-0.447,1-1,1H26c-0.552,0-1-0.448-1-1l0,0c0-0.552,0.448-1,1-1h21C47.553,34.782,48,35.23,48,35.782  L48,35.782z"/><path class="' +
                                    'resumeLineSvg' +
                                    '" d="M75,45.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h48C74.553,44.782,75,45.229,75,45.782  L75,45.782z"/><path class="' +
                                    'resumeLineSvg' +
                                    '" d="M75,51.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h48C74.553,50.782,75,51.229,75,51.782  L75,51.782z"/><path class="' +
                                    'resumeLineSvg' +
                                    '" d="M75,57.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h48C74.553,56.782,75,57.229,75,57.782  L75,57.782z"/><path class="' +
                                    'resumeLineSvg' +
                                    '" d="M75,63.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h48C74.553,62.782,75,63.229,75,63.782  L75,63.782z"/><path class="' +
                                    'resumeLineSvg' +
                                    '" d="M75,70.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h48C74.553,69.782,75,70.229,75,70.782  L75,70.782z"/><path class="' +
                                    'resumeLineSvg' +
                                    '" d="M75,77.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h48C74.553,76.782,75,77.229,75,77.782  L75,77.782z"/><path class="' +
                                    'resumeLineSvg' +
                                    '" d="M55,84.782c0,0.553-0.447,1-1,1H26c-0.552,0-1-0.447-1-1l0,0c0-0.553,0.448-1,1-1h28C54.553,83.782,55,84.229,55,84.782  L55,84.782z"/><circle cx="62.996" cy="20.078" r="5.783"/><path d="M71.99,31.643c-0.348-4.382-4.256-5.14-8.995-5.14S54.347,27.26,54,31.643c0,0.226,0,3.134,0,5.14  h3.213v-3.855c0,0,0-1.285,0.643-1.285c0,0.083,0,4.554,0,5.14h10.279c0-0.586,0-5.057,0-5.14c0.644,0,0.644,1.285,0.644,1.285  v3.855H72C72.001,34.656,71.999,31.681,71.99,31.643z M62.995,35.498l-0.99-1.274l0.99-6.436l0.989,6.432L62.995,35.498z"/><text x="0" y="115" fill="#000000" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Jaime Carrion</text><text x="0" y="120" fill="#000000" font-size="0px" font-weight="bold" font-family="Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>'
                            }}
                        />
                        <div className={style.title}>Resume</div>
                    </Link>
                </section>

                <section className={style['social-icons']}>
                    <a
                        className={style['social-icon']}
                        href="mailto:oksanabibik93@gmail.com"
                    >
                        <i className="fa fa-envelope-o" />
                    </a>

                    <a
                        className={style['social-icon']}
                        href="https://github.com/Oksanatishka"
                        target="_blank"
                    >
                        <i className="fa fa-github" />
                    </a>
                    <a
                        className={style['social-icon']}
                        href="https://www.linkedin.com/in/oksana-bibik-27349591/"
                        target="_blank"
                    >
                        <i className="fa fa-linkedin" />
                    </a>
                </section>
            </nav>
        );
    }
}

export default Menu;
