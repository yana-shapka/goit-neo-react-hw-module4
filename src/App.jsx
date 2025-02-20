import {useState, useEffect} from 'react';
import {Formik} from 'formik';
import {nanoid} from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  const loadContacts = () => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  };

  const [contacts, setContacts] = useState(loadContacts());

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const saveContact = newContact => {
    setContacts(prevContacts => {
      const updatedContacts = [...prevContacts, {...newContact, id: nanoid()}];
      return updatedContacts;
    });
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div className="appWrapper">
      <div className="formWrapper">
        <h1>Phonebook</h1>
        <ContactForm save={saveContact} />
        <SearchBox
          filter={filter}
          setFilter={setFilter}
          filteredContacts={filteredContacts}
        />
      </div>
      <div className="listWrapper">
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </div>
  );
}

export default App;
