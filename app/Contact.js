import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs
        .sendForm(
          'service_6y68ts3',
          'template_ongfraf',
          e.target,
          'dTMSKN4ov8Liqm-Ow'
        )
        .then(
          (result) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          }
        );
      
      // Clears the form after sending the email
      e.target.reset();
    };
    return (
        <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <div className="flex gap-14">
          <input 
            type="text"
            name="name"
            placeholder="Name"
            className="p-3 rounded-md bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            className="p-3 rounded-md bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
          <textarea 
            name="message"
            placeholder="Message" 
            className="p-3 rounded-md bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          ></textarea>
          <button 
            type="submit"
            className={`bg-[#2238b5] py-2 text-white rounded-md hover:bg-blue-600 transition-colors w-auto ${isSubmitting ? 'opacity-50' : ''}`}
            disabled={isSubmitting || isSent}
            >
             {isSent ? 'Sent!' : isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {stateMessage && (
        <p className="text-white mt-4">{stateMessage}</p>
      )}
      </form>
    );
  };
  export default Contact;