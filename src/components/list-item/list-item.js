import { Component } from 'react';

import './list-item.scss';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const elemennts = this.props.data.map(({ name, country, price, link, alt, id}) => {
            return (

                <div key={id} className='list__item'>
                    <img className='list__img' src={link} alt={alt} />
                    <div className='list__text'>
                        <div className="list__title">{name}</div>
                        <div className="list__country">{country}</div>
                        <div className="list__pr">{price}</div>
                    </div>
                </div>
            )
        });
        return (
            <div className="list">
                {elemennts}
            </div>
        )
    }
}
export default List;