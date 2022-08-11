import { Component } from "react";

import Menu from "../head-of-site-menu/head-of-site-menu";
import Title from "../head-of-site-title/head-of-site-title";

import './head-of-site.scss';

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {data} = this.props;
        return (
            <header>
                <Menu data={data}/>
                <Title />
            </header>
        )
    }
}

export default Head;