import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({contacts, deleteContact}) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
