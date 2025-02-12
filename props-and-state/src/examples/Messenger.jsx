import { useState } from "react";

const contacts = [
  {
    name: "Taylor",
    email: "taylor@mail.com",
  },
  {
    name: "John",
    email: "john@mail.com",
  },
  {
    name: "Jane",
    email: "jane@mail.com",
  },
];

// Preserving state, and reseting it when "to" changes
export const Messenger = () => {
  const [to, setTo] = useState(contacts[0]);

  console.log("to", to);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat key={to.email} contact={to} />
    </div>
  );
};

function ContactList({ contacts, selectedContact, onSelect }) {
  return (
    <section>
      <h1>{selectedContact.name}</h1>
      <ul>
        {contacts.length > 0 &&
          contacts.map((contact) => (
            <li key={contact.email}>
              <button onClick={() => onSelect(contact)}>{contact.name}</button>
            </li>
          ))}
      </ul>
    </section>
  );
}

function Chat({ contact }) {
  const [text, setText] = useState("");
  return (
    <section key={contact.email}>
      <textarea
        value={text}
        placeholder={`Chat to: ${contact.name}`}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button>Send text to {contact.email}</button>
    </section>
  );
}
