import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  // Email validation regex
const isValidEmail = (email) => {
  const allowedDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "icloud.com"
  ];

  const emailRegex = /^[^\s@]+@([^\s@]+\.[^\s@]+)$/;
  const match = email.match(emailRegex);

  if (!match) return false;

  const domain = match[1].toLowerCase();
  return allowedDomains.includes(domain);
};

  // Meaningful message check (at least 5 words)
const isMeaningfulMessage = (msg) => {
  const cleaned = msg.trim();
  const words = cleaned.split(/\s+/);

  if (words.length < 5) return false;

  // Must contain vowels
  if (!/[aeiou]/i.test(cleaned)) return false;

  // Block repeated characters (aaaaaa)
  if (/(.)\1{4,}/.test(cleaned)) return false;

  // Block random long strings
  if (cleaned.length > 15 && words.length === 1) return false;

  // Must contain real words
  if (!/[a-zA-Z]{3,}/.test(cleaned)) return false;

  return true;
};
  
  //Check for common spam keywords
  const containsSpam = (msg) => {
  const spamKeywords = [
    "free money",
    "win cash",
    "click here",
    "visit now",
    "buy now",
    "cheap price",
    "work from home",
    "earn $$$",
    "bitcoin giveaway",
    "crypto profit",
    "urgent response",
    "call now",
    "limited offer"
  ];

  const lowerMsg = msg.toLowerCase();

  return spamKeywords.some(keyword => lowerMsg.includes(keyword));
};

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limit message to 150 chars
    if (name === 'message' && value.length > 150) return;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    let newErrors = {};

    if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }

    if (!isValidEmail(form.email)) {
      newErrors.email = 'Only valid emails (Gmail, Yahoo, Outlook, Hotmail, iCloud etc.) are allowed.';
    }

    if (!isMeaningfulMessage(form.message)) {
      newErrors.message = 'Message should contain at least 5 meaningful words';
    }

    if (form.message.length > 150) {
      newErrors.message = 'Message must be within 150 characters';
    }

    if (containsSpam(form.message)) {
      newErrors.message = "Spam or promotional content is not allowed";
    }
 
    setErrors(newErrors);

    // Stop submission if errors exist
    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
    }
  };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/xdkoreea" method="POST" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={form.name}
            onChange={handleChange}
          />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
          />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
