import React,{Component} from 'react';
import Characters from './Characters';
import SearchBox from './SearchBox';
import ScrollBox from './ScrollBox';



class App extends Component{
	constructor(){
		super();
		this.state ={
			people:[],
			search:''
		}
	}


	componentDidMount(){
		const urls = []; //push all of the urls in here
		for(let i = 1; i< 9; i++){
			urls.push('https://swapi.co/api/people/?page=' + i );
		}
		Promise.all(urls.map(url=>{
			return fetch(url).then(resp => resp.json())
		}))
		.then(people =>{
			let allCharacters = [];
			people.map(swChars => 
			swChars.results.map(chars=> allCharacters.push(chars)));
			this.setState({people:allCharacters});
		});
		
	}

	onHandleSearch = (e) =>{
		this.setState({search:e.target.value});
	}


	render(){

		const filteredPeople = this.state.people.filter(person =>{
			return person.name.toLowerCase().includes(this.state.search.toLowerCase());
		})

		return(
			<div className='tc'>
				<h1 className='white'>Star War Character</h1>
				<SearchBox handleSearch = {this.onHandleSearch} />
				<ScrollBox>
				<Characters people={filteredPeople}/>
				</ScrollBox>
			</div>
		)
	}
}


export default App;