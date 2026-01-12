import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './TabContent.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // Replace with your actual Service ID, Template ID, and Public Key
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

        // Simulating success for now since keys are not provided
        setTimeout(() => {
            setStatus('Message sent successfully!');
            form.current.reset();
        }, 1500);

        // Uncomment actual implementation when keys are ready:
        /*
        emailjs.sendForm('service_id', 'template_id', form.current, 'public_key')
          .then((result) => {
              setStatus('Message sent successfully!');
              form.current.reset();
          }, (error) => {
              setStatus('Failed to send message. Please try again.');
          });
        */
    };

    return (
        <div className="search-result-item">
            <div className="result-url">
                https://raghavendra-y-portfolio.netlify.app › contact
            </div>
            <h2 className="result-title">Contact Me</h2>
            <div className="result-snippet">
                <p style={{ marginBottom: '20px' }}>Feel free to reach out for collaborations or opportunities.</p>

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="user_name" required placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="user_email" required placeholder="your.email@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" rows="4" required placeholder="How can I help you?"></textarea>
                    </div>
                    <button type="submit" className="btn-submit">Send Message</button>
                    {status && <p style={{ marginTop: '10px', fontSize: '14px', color: status.includes('Failed') ? '#d93025' : '#188038' }}>{status}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
