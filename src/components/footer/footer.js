import { Component } from "react";

import './footer.scss';

class Footer extends Component {
    render() {
        const {data} = this.props;
        const items = data.map(({ name, link }) => {
            return (
                <li key={name} className="footer__item"><a href={link}>{name}</a></li>
            )
        })
        return (
            <footer className="footer">
                <div className="container">
                    <ul className="footer__wrapper">
                        <img className="footer__img" src={require('../../icon/beans/coffe__beans_black.png')} alt="coffe-beans" />
                        {items}
                    </ul>
                    <div className="footer__dividers">
                        <div className="footer__divider"></div>
                        <img className="footer__photo" src={require('../../icon/beans_black_white/bean__black.png')} alt="coffe-beans" />
                        <div className="footer__divider"></div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;