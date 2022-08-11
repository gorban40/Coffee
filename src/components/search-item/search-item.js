import { Component } from 'react';

import './search-item.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            term: ''
        }
    }

    onUpdateTerm = (e) => {
        const term = e.target.value;
        this.setState({
            term: term
        })
        this.props.onUpdateTerm(term);
    }

    render() {
        return (
            <div className='search'>
                <label className='search__label' htmlFor="item">Lookiing for<input name='item'
                                                     type="text"
                                                     className='search__input'
                                                     placeholder='start typing here...'
                                                     onChange={this.onUpdateTerm}/>
                </label>
            </div>
        )
    }
}
export default Search;