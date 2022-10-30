import React, { Component } from 'react';
import Header from '../components/Header';
import GalleryList from '../components/GalleryList';
import { pictures } from './Pictures';
import Searchbox from '../components/Searchbox';



class App extends Component {
	constructor () {
		super()
		this.state = {
			STpictures: pictures,
			STserchfield: ''
		}
	}

	FindFuction = (event) => {
		this.setState({ STserchfield: event.target.value })
	}

	render() {
		const { STpictures, STserchfield } = this.state;
		const filteredPictures = STpictures.filter(pic =>{
			return pic.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(STserchfield.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
		})
		return (
			<div className='tc'>
				<Header />
				<Searchbox searchChange={this.FindFuction}/>
		    	<div className='mw9 center ph3-ns'>
		    		<GalleryList pictures={filteredPictures}/>
		    	</div>
		    </div>
		);
	}
}

export default App;