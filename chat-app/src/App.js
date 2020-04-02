import React from 'react';
import Contact from './components/Contact.js';

function App() {
  return (
    <div>
      <Contact name="Joann Garza" avatar="https://randomuser.me/api/portraits/women/76.jpg" online={true} />
      <Contact name="Addison Pena" avatar="https://randomuser.me/api/portraits/women/4.jpg" online={false} />
      <Contact name="Adisson Fuller" avatar="https://randomuser.me/api/portraits/women/26.jpg" online={true} />
    
    </div>
  );
}

export default App;
