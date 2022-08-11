import { Component } from 'react';

import aromistico from '../../icon/best/aromistico.png';
import presto from '../../icon/best/presto.png';
import solimo from '../../icon/best/solimo.png';
import './best.scss';

class Best extends Component {
    render() {
        const data = [
            { photo: solimo, name: 'Solimo Coffee Beans 2 kg', price: '10.73$', alt: 'solimo' },
            { photo: presto, name: 'Presto Coffee Beans 1 kg', price: '15.99$', alt: 'presto' },
            { photo: aromistico, name: 'AROMISTICO Coffee 1 kg', price: '6.99$', alt: 'aromistico' }
        ];
        const elemennts = data.map(({ photo, name, price, alt }) => {
            return (
                <div key={name} className="best__item">
                    <img src={photo} alt={alt} className="best__photo" />
                    <div className="best__wrapper_price">
                        <div className="best__name">{name}</div>
                        <div className="best__price">{price}</div>
                    </div>
                </div>
            )
        })
        return (
            <div className="best">
                <div className="container">
                    <div className="best__title">Our best</div>
                    <div className="best__wrapper">
                        {elemennts}
                    </div>
                </div>
            </div>
        )
    }
}

export default Best;