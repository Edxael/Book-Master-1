import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';

class BooksMain extends React.Component{
  render() {
    let bookItems;
    if (this.props.books[0]) {
      bookItems = this.props.books.map((book) => {

        const imgSty = { border: "4px solid white" }
        return (
        <Panel key={book.id} header={book.volumeInfo.title} eventKey={book.kd} >
          <img style={imgSty} src={book.volumeInfo.imageLinks.thumbnail} alt="Missing Pic"/>
          <p>{book.volumeInfo.description}</p>
        </Panel>
      ) })
    } else{
      return(
        <div>No Books Under that Topic...</div>
      )
    }



    return(
      <div>
        <Accordion>
          {bookItems}
        </Accordion>
      </div>
    )
  }
}

export default BooksMain;
