import { hubspotClient } from './config';
import type { Contact } from '../../types';

export const createContact = async (contact: Contact) => {
  try {
    const response = await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        firstname: contact.name.split(' ')[0],
        lastname: contact.name.split(' ')[1] || '',
        email: contact.email,
        phone: contact.phone,
        city: contact.location
      }
    });
    return response;
  } catch (error) {
    console.error('Error creating HubSpot contact:', error);
    throw error;
  }
};

export const updateContact = async (id: string, contact: Partial<Contact>) => {
  try {
    const response = await hubspotClient.crm.contacts.basicApi.update(id, {
      properties: {
        ...(contact.name && {
          firstname: contact.name.split(' ')[0],
          lastname: contact.name.split(' ')[1] || ''
        }),
        ...(contact.email && { email: contact.email }),
        ...(contact.phone && { phone: contact.phone }),
        ...(contact.location && { city: contact.location })
      }
    });
    return response;
  } catch (error) {
    console.error('Error updating HubSpot contact:', error);
    throw error;
  }
};