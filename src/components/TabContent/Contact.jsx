import React, { useState } from 'react';
import { profileData } from '../../data/profile';
import './TabContent.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Validation functions
    const validateName = (name) => {
        if (!name.trim()) return 'Name is required';
        if (name.trim().length < 2) return 'Name must be at least 2 characters';
        if (name.trim().length > 50) return 'Name must be less than 50 characters';
        return '';
    };

    const validateEmail = (email) => {
        if (!email.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'Please enter a valid email address';
        return '';
    };

    const validateMessage = (message) => {
        if (!message.trim()) return 'Message is required';
        if (message.trim().length < 10) return 'Message must be at least 10 characters';
        if (message.trim().length > 500) return 'Message must be less than 500 characters';
        return '';
    };

    // Handle input change with real-time validation
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Handle blur for validation
    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = '';

        switch (name) {
            case 'name':
                error = validateName(value);
                break;
            case 'email':
                error = validateEmail(value);
                break;
            case 'message':
                error = validateMessage(value);
                break;
            default:
                break;
        }

        if (error) {
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields
        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const messageError = validateMessage(formData.message);

        if (nameError || emailError || messageError) {
            setErrors({
                name: nameError,
                email: emailError,
                message: messageError
            });
            return;
        }

        setIsSubmitting(true);
        setStatus('Sending...');

        try {
            // Web3Forms endpoint - FREE and no signup needed!
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '65787539-706f-462f-a635-15ec6ef70211',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `Portfolio Contact from ${formData.name}`,
                    from_name: 'Portfolio Contact Form',
                    to_email: profileData.email
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus('✅ Message sent successfully! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
                setErrors({});
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setStatus(`❌ Failed to send message. Please email me directly at ${profileData.email}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="search-result-item">
            <div className="result-url">
                https://raghavendra-y-portfolio.netlify.app › contact
            </div>
            <h2 className="result-title">Contact Me</h2>
            <div className="result-snippet">
                <p style={{ marginBottom: '20px' }}>
                    Feel free to reach out for collaborations or opportunities.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label>Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Your Name"
                            maxLength={50}
                            disabled={isSubmitting}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label>Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="your.email@example.com"
                            disabled={isSubmitting}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label>Message * ({formData.message.length}/500)</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows="4"
                            placeholder="How can I help you?"
                            maxLength={500}
                            disabled={isSubmitting}
                        />
                        {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>

                    <button
                        type="submit"
                        className="btn-submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {status && (
                        <p
                            className="status-message"
                            style={{
                                marginTop: '10px',
                                fontSize: '14px',
                                color: status.includes('❌') ? '#d93025' : '#188038'
                            }}
                        >
                            {status}
                        </p>
                    )}
                </form>

                <div style={{ marginTop: '20px', fontSize: '13px', color: '#5f6368' }}>
                    <p>Or reach me directly at: <a href={`mailto:${profileData.email}`} style={{ color: '#1a73e8' }}>{profileData.email}</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
