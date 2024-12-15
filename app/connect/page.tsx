import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here...
    if (!name || !email || !message) {
      setErrors({ name: 'Name is required', email: 'Email is required', message: 'Message is required' });
    } else {
      // Submit the form data
      console.log('Form submitted:', { name, email, message });
      setErrors({}); // Clear errors after successful submission
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-screen-xl">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto space-y-6 sm:max-w-md lg:max-w-xl" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            aria-describedby={errors.name ? `name-error` : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            aria-describedby={errors.email ? `email-error` : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            rows={4}
            aria-describedby={errors.message ? `message-error` : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-red-500 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full transition-colors hover:bg-primary-dark dark:hover:bg-primary-light">
          Send Message
        </Button>
      </form>
    </div>
  );
};

const Button = ({ type, children, className, ...props }) => {
  return (
    <button type={type} className={`bg-primary-500 text-white font-bold py-2 px-4 rounded-md ${className}`} {...props}>
      {children}
    </button>
  );
};

export default ContactForm;

