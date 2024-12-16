import React from 'react';
import { ContactsList } from '../components/contacts/ContactsList';
import { ContactsHeader } from '../components/contacts/ContactsHeader';
import { ContactsFilters } from '../components/contacts/ContactsFilters';

const Contacts = () => {
  return (
    <div className="space-y-8">
      <ContactsHeader />
      <ContactsFilters />
      <ContactsList />
    </div>
  );
};

export default Contacts;