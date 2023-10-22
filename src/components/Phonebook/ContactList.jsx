import React from "react";
import css from 'components/Phonebook/Phonebook.module.css';

const ContactList = ({contacts, onDeleteContact}) => (
    <div className={css.contactsForm}>
  <ul className={css.contactList}>
    {contacts.map(contact => (
      <li key={contact.id} className={css.contactList}>
        {contact.name}: {contact.number}
        <button onClick={() => onDeleteContact(contact.id)} className={css.delBtn}>Delete</button>
      </li>
    ))}
        </ul>
    </div>
);

export default ContactList;


