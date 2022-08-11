import { Component } from "react";



import './head-of-site-menu.scss';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {data} = this.props;
        const items = data.map(({ name, link }) => {
            return (
                <li key={name} className="menu__item"><a href={link}>{name}</a></li>
            )
        })
        return (
            <div className="menu">
                <div className="container">
                    <ul className="menu__wrapper">
                        <img className="menu__img" src={require('../../icon/beans/coffee__beans.png')} alt="coffe-beans" />
                        {items}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;