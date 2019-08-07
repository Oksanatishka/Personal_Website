import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import style from './style.css';
import global from '../../containers/App/global.css';
import View from '../View';
import ArrowLink from '../ArrowLink';

class Contact extends View {
    componentDidMount() {
        const tweentxt = document.getElementsByClassName(style.tweentxt);
        const heading = document.getElementsByClassName(style.heading);
        const formtween = document.getElementsByClassName('formtween');
        const socialIcon = document.getElementsByClassName(
            style['social-icon']
        );
        const socialIcons = document.getElementsByClassName(
            style['social-icons']
        );

        TweenMax.fromTo(
            heading,
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
        TweenMax.staggerFrom(
            socialIcon,
            0.3,
            { scale: 0, opacity: 0, delay: 1.4 },
            0.1
        );
        TweenMax.staggerFrom(
            formtween,
            0.3,
            { x: 200, opacity: 0, delay: 1.6 },
            0.15
        );
    }

    onFormSubmit(e) {
        const form = document.getElementById('form');
        const inputs = document.getElementsByClassName('input');
        const error = document.getElementsByClassName(style.error);
        let isError = false;

        Array.from(inputs).forEach(function(e) {
            if (e.value == '') {
                e.style.borderColor = 'red';
                isError = true;
            } else {
                e.style.borderColor = 'green';
            }
        });

        isError
            ? (error[0].innerHTML = 'Please fill all fields.')
            : (error[0].innerHTML = '');
        form.submit();
    }

    render() {
        return (
            <View {...this.props}>
                <div className={global.container}>
                    <section className={style.main}>
                        <h1 className={style.heading}>Contact</h1>
                        <h2 className={style.tweentxt}>
                            Currently I'm open to job opportunities.
                            <br />
                            Feel free to e-mail me at{' '}
                            <a href="mailto:oksanabibik93@gmail.com">
                                oksanabibik93@gmail.com
                            </a>
                        </h2>

                        <section className={style['social-icons']}>
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

                        <form id="form" action="/send-mail">
                            <div className="formtween">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="formtween">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="formtween">
                                <textarea
                                    className="input"
                                    type="text"
                                    placeholder="Message"
                                    required
                                />
                            </div>
                            <div
                                onClick={e => this.onFormSubmit(e)}
                                className={classnames(
                                    'formtween',
                                    style.submit
                                )}
                            >
                                <ArrowLink textLabel="Submit" />
                            </div>
                            <p className={style.error} />
                        </form>
                    </section>
                </div>
            </View>
        );
    }
}
export default Contact;
