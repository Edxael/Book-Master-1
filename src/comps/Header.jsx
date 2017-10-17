import React from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends React.Component{
  render() {
    return(
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Book Finder...
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}

export default Header;
