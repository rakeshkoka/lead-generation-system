import React, { useState } from 'react';
import axios from "axios";

function Form() {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    // State to hold validation errors
    const [errors, setErrors] = useState({});

    // State for submission status and messages
    const [submissionStatus, setSubmissionStatus] = useState('');
    const [submissionMessage, setSubmissionMessage] = useState('');

    // Handles changes in form input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // Clear error for the field as user types
        if (errors[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }
    };

    // Validates form fields
    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        // Validate Name
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
            isValid = false;
        }

        // Validate Email
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handles form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus('submitting');
        setSubmissionMessage('Submitting your lead...');

        if (validateForm()) {
            try {
                // const backendUrl = 'http://localhost:5000/api/submit-lead';
                const backendUrl = 'https://lead-generation-system-backend.onrender.com/api/submit-lead';

                //axios call
                const response = await axios.post(backendUrl, formData);
                // console.log(response);
                if (response.status === 200) {
                    setSubmissionStatus('success');
                    setSubmissionMessage(response.data.message || 'Lead submitted successfully!');
                    // clearing form
                    setFormData({
                        name: '',
                        email: '',
                        company: '',
                        message: '',
                    });
                } else {
                    setSubmissionStatus('error');
                    setSubmissionMessage(response.data.error || 'Failed to submit lead. Please try again.');
                }
            } catch (error) {
                setSubmissionStatus('error');
                // Handle axios errors
                if (axios.isAxiosError(error)) {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        setSubmissionMessage(error.response.data.message || 'Server responded with an error. Please try again.');
                        console.error('Server Error:', error.response.data);
                    } else if (error.request) {
                        // The request was made but no response was received
                        setSubmissionMessage('No response from server. Please check your network or server status.');
                        console.error('Network Error:', error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        setSubmissionMessage('Error setting up the request. Please try again.');
                        console.error('Request Setup Error:', error.message);
                    }
                } else {
                    setSubmissionMessage('An unexpected error occurred. Please try again later.');
                    console.error('Unexpected Error:', error);
                }
            }
        } else {
            setSubmissionStatus('error');
            setSubmissionMessage('Please correct the highlighted errors.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Generate a Lead</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            placeholder="Your Name"
                            required
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            placeholder="you@example.com"
                            required
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    {/* Company Field (Optional) */}
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                            Company (Optional)
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Your Company Name"
                        />
                    </div>

                    {/* Message Field (Optional) */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message (Optional)
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Tell us more about your needs..."
                        ></textarea>
                    </div>

                    {/* Submission Status Message */}
                    {submissionMessage && (
                        <div
                            className={`p-3 rounded-md text-sm ${submissionStatus === 'success' ? 'bg-green-100 text-green-800' : ''
                                } ${submissionStatus === 'error' ? 'bg-red-100 text-red-800' : ''} ${submissionStatus === 'submitting' ? 'bg-blue-100 text-blue-800' : ''
                                }`}
                        >
                            {submissionMessage}
                        </div>
                    )}

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            disabled={submissionStatus === 'submitting'}
                        >
                            {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Lead'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
