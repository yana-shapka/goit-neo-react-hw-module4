import css from './Contact.module.css';
import {BiSolidPhone, BiSolidUser} from 'react-icons/bi';

const Contact = ({id, name, number, deleteContact}) => {
  return (
    <li className={css.contactCard} key={id}>
      <div className={css.contactInfo}>
        <div className={css.contactName}>
          <BiSolidUser></BiSolidUser>
          <p className={`${css.textStyle} ${css.tooltip}`} title={name}>
            {name}
          </p>
        </div>
        <div className={css.contactPhone}>
          <BiSolidPhone></BiSolidPhone>
          <p className={`${css.textStyle} ${css.tooltip}`} title={number}>
            {number}
          </p>
        </div>
      </div>
      <button className={css.deleteButton} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
