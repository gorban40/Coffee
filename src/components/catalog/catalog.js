import {Component} from 'react';

import Search from '../search-item/search-item';
import Filter from '../filter-item/filter-item';
import List from '../list-item/list-item';

import aromistico from '../../icon/best/aromistico.png';
import './catalog.scss';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data: [
                {name: 'Presto Coffee Beans 1 kg', country: 'Columbia', price: '6.99$', link: aromistico, alt:'aromistico', id: 1},
                {name: 'Solimo Coffee Beans', country: 'Brazil', price: '6.99$', link: aromistico, alt:'aromistico', id: 2},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', link: aromistico, alt:'aromistico', id: 3},
                {name: 'Solimo Coffee Beans', country: 'Kenya', price: '6.99$', link: aromistico, alt:'aromistico', id: 4},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', link: aromistico, alt:'aromistico', id: 5},
                {name: 'Presto Coffee Beans 1 kg', country: 'Kenya', price: '6.99$', link: aromistico, alt:'aromistico', id: 6}
            ],
            filter: '',
            term: ''
        }
    }
    onUpdateFilter = (filter) => {
        this.setState({
            filter: filter
        })
    }
    filterPost = (item, filter) => {
        switch(filter) {
            case 'Brazil': return item.filter(item => item.country === 'Brazil')
            case 'Kenya': return item.filter(item => item.country === 'Kenya')
            case 'Columbia': return item.filter(item => item.country === 'Columbia')
            default: return item
        }
    }

    onUpdateTerm = (term) => {
        this.setState({term})
    }
    searchNewData = (data, term) => {
        if(term < 1) {
            return data
        } else {
            return data.filter(item => {
                return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
            })
        }
    }


    render() {
        console.log(this.state.term)
        const visibleContent = this.filterPost(this.searchNewData(this.state.data, this.state.term), this.state.filter)
        return (
            <div className='catalog'>
                <div className="container">
                    <div className="catalog__panel">
                        <Search onUpdateTerm={this.onUpdateTerm}/>
                        <Filter filter={this.state.filter}
                        onUpdateFilter={this.onUpdateFilter}/>
                    </div>
                    <List data={visibleContent}/>
                </div>
            </div>
        )
    }
}

export default Catalog;