import { Component } from 'react';

import Head from '../head-of-site/head-of-site';
import About from '../about-us/about-us';
import Best from '../best/best';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		const data = [
			{ name: 'Coffee house', link: '#head' },
			{ name: 'Our coffee', link: '#about' },
			{ name: 'For your pleasure', link: '#best' }
		]
		return (
			<>
				<Head data={data}/>
				<About/>
				<Best/>
				<Catalog/>
				<Footer data={data}/>
			</>
      );
	}
}

export default App;
