import {Component} from 'react';

import './filter-item.scss';

class Filter extends Component {
    render() {
        const buttons = [
            {name: 'Brazil', label: 'Brazil', actvie: false},
            {name: 'Kenya', label: 'Kenya', actvie: false},
            {name: 'Columbia', label: 'Columbia', actvie: false},
            {name: 'all', label: 'All', actvie: true}
        ]
        const elements = buttons.map(({name,label}) => {
            const actvie = this.props.filter === name;
            const clazz = actvie ? 'filter__btn_active' : 'filter__btn'
            return (
                <button className={clazz}
                        key={name}
                        onClick={() => this.props.onUpdateFilter(name)}>
                            {label}
                </button>
            )
        })
        return (
            <div className='filter'>
                <div className='filter__title'>Or filter</div>
                <div className="filter__wrapper">
                    {elements}
                </div>
            </div>
        )
    }
}
export default Filter;