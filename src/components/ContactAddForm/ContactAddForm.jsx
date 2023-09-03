import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Box, Button, TextField } from '@mui/material';
import { PeopleAlt, PersonAddAlt1 } from '@mui/icons-material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { selectСontacts } from 'redux/contacts/selectors';
import { toast } from 'react-toastify';
import { Title } from './ContactAddForm.styled';

export const ContactAddForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectСontacts);
 

  const handleInputChange = event => {
    const{name,value}=event.target
        switch(name){
            case'name':
            setName(value)
            break
            case'number':
            setNumber(value)
            break
            default:
                break;
        }
    }

  const handleFormSubmit = event => {
    event.preventDefault();
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    const repeatCheck = contacts.find(
      item => item.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (repeatCheck) {
      toast.warn(`Name  ${newContact.name}  is alredy in contacts!`);
      return;
    }

    dispatch(addContact(newContact));
    toast.success(`You have added a new contact ${newContact.name}`);

    setName('');
    setNumber('');
  };


  return (
    <Box
      display="flex"
      flexDirection={'column'}
      gap="12px"
      justifyContent="center"
      alignItems="center"
      component="form"
      autoComplete="off"
      maxWidth="510px"
      onSubmit={handleFormSubmit}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px'  }}>
        <Title>ADD NEW CONTACT</Title>
        <PeopleAlt />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PersonAddAlt1 sx={{ color: 'grey', mr: 1, my: 0.5 }} />
        <TextField
          sx={{ width: '320px' }}
          variant="standard"
          onChange={handleInputChange}
          type="text"
          name="name"
          value={name}
          required
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          size="small"
          margin="none"
          id="name"
          label=""
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PhoneIphoneIcon sx={{ color: 'grey', mr: 1, my: 0.5 }} />
        <TextField
          sx={{ width: '320px' }}
          variant="standard"
          onChange={handleInputChange}
          type="tel"
          name="number"
          value={number}
          required
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          size="small"
          margin="none"
          fullWidth
          id="number"
          label="NUMBER"
          inputProps={{ inputMode: 'numeric', pattern:"\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}" }}
        />
      </Box>
      <Button
        type="submit"
      
        sx={{ mr: -1, mt: '18px', width: '230px',color:'black', border: '1px solid black' }}
      >
        ADD CONTACT
      </Button>
    </Box>
  );
};

export default ContactAddForm;
