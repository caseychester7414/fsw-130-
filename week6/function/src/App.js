import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Contacts List</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/contacts/new">Add Contact</NavLink>
        </div>
        <Route exact path="/" components={ContactListPage}/>
        <Route path="/contacts/new" components={ContactFormPage}/>
        <Route path="/contacts/edit/:_id" components={ContactFormPage}/>
      </Container>
    );
    
  }
}
export default App;