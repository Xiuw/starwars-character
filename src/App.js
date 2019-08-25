import React, { Component } from "react";
import { connect } from "react-redux";
import Characters from "./Characters";
import SearchBox from "./SearchBox";
import ScrollBox from "./ScrollBox";
import "./App.css";

import { setSearchInput } from "./redux/actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      show: 6
    };
  }

  componentDidMount() {
    const urls = []; //push all of the urls in here
    for (let i = 1; i < 9; i++) {
      urls.push("https://swapi.co/api/people/?page=" + i);
    }
    Promise.all(
      urls.map(url => {
        return fetch(url).then(resp => resp.json());
      })
    ).then(people => {
      let allCharacters = [];
      people.map(swChars =>
        swChars.results.map(chars => allCharacters.push(chars))
      );
      this.setState({ people: allCharacters });
    });
  }

  loadMore = () => {
    this.setState(prev => {
      return { show: prev.show + 6 };
    });
  };

  //   onHandleSearch = e => {
  //     this.setState({ search: e.target.value });
  //   };

  render() {
    const { show } = this.state;
    const { searchInput, onHandleSearch } = this.props;

    console.log(searchInput);
    const filteredPeople = this.state.people.filter(person => {
      return person.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    return (
      <div className="tc app">
        <h1 className="white ma0 pa4">Star Wars Character</h1>
        <SearchBox handleSearch={onHandleSearch} />
        <ScrollBox>
          <Characters
            people={filteredPeople}
            show={show}
            loadMore={this.loadMore}
          />
        </ScrollBox>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchInput: state.searchCharacters.searchInput
});
const mapDispatchToProps = dispatch => ({
  onHandleSearch: e => dispatch(setSearchInput(e.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
