import { useState } from 'react';
import "./Contacts.scss";

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsMessageSent(true);
  };

  return (
    <div className="Contact-Form">
      {isMessageSent ? (
        <p>Ačiū už Jūsų atsiliepimą!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Vardas:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>El. paštas:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Žinutė:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Siųsti</button>
        </form>
      )}
    </div>
  );
};

export default Contacts;