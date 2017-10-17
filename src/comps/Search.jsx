import React from 'react';
import { Well, FormControl } from 'react-bootstrap';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = { value: props.value }
  }

  onChange(e){
    this.setState({ value: e.target.value })
    this.props.onChange(this.state.value)
  }

  render() {
    return(
      <div>
        <Well>
          <FormControl onChange={this.onChange.bind(this)} type="text" value={this.state.value} placeholder="Search Books...." />
        </Well>
      </div>
    )
  }
}

export default Search;
