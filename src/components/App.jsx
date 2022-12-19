import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './ContactFilter/ContactFilter';
import ContactList from './ContactList/ContactList';
import React from 'react';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const { contacts } = this.state;

    this.setState({
      contacts: savedContacts !== null ? JSON.parse(savedContacts) : contacts,
    });
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = deleteContactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== deleteContactId
      ),
    }));
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };
  getDataForRenderList = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const dataByFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filter ? dataByFilter : contacts;
  };

  render() {
    return (
      <div style={{ padding: '20px', marginLeft: '15px' }}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.ilterContacts} />
        <ContactList
          contacts={this.getDataForRenderList()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
