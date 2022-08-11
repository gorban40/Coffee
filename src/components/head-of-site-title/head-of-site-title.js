import { Component } from "react";

import './head-of-site-title.scss';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="title">
                <div className="container">
                    <h1 className="title__title">Everything You Love About Coffee</h1>
                    <div className="title__dividers">
                        <div className="title__divider"></div>
                        <img className="title__img" src={require('../../icon/beans_black_white/bean__white.png')} alt="coffe-beans" />
                        <div className="title__divider"></div>
                    </div>
                    <h2 className="title__subtitle">We makes every day full of energy and taste<br></br>Want to try our beans?</h2>
                    <button className="title__button">More</button>
                </div>
            </div>
        )
    }
}

export default Title;