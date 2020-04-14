import React from "react";
import Contact from "./Contact.js";

const users = [
  {
    name: "Robert Reyes",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    online: false
  },
  {
    name: "Nellie Caldwell",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    online: false
  },
  {
    name: "Vernon Mason",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    online: false
  },
  {
    name: "Erica Hunt",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    online: false
  },
  {
    name: "Juanita Phillips",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    online: false
  }
];

const ContactList = () => {
  return (
    <div>
      {users.map(user => {
        return <Contact {...user} />;
      })}
    </div>
  );
};

export default ContactList;
