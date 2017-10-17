import React from 'react';
import ReactDOM from 'react-dom';
// import { Grid, Col, Row } from 'react-bootstrap';
import axios from 'axios';

import Header from './comps/Header.jsx';
import BooksMain from './comps/BooksMain.jsx';
import SearchComp from './comps/Search.jsx';

class GatherComp extends React.Component{
  constructor(){
    super();
    this.state = { books: [], text: "Harry Potter" }
  }

  componentWillMount(){
    this.getBooks();
  }

  getBooks(){

    axios.request({ method: 'get', url: "https://www.googleapis.com/books/v1/volumes?q=" + this.state.text })
      .then((response) => { this.setState({ books: response.data.items }, () => { console.log(this.state) }  ) })
      .catch((error) => {console.log( error ) })
  }

  handleChange(text){
    this.setState({ text: text }, this.getBooks() )
  }

  render() {
    return(
      <div>

        <Header />
        <SearchComp onChange={this.handleChange.bind(this)} value={this.state.text}/>
        <BooksMain books={this.state.books}/>

      </div>
    )
  }
}

ReactDOM.render(<GatherComp />, document.getElementById("root"));
