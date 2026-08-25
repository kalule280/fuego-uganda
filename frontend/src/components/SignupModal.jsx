import React, { useState } from 'react';

const SignupModal = ({ isOpen, onClose, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Submitting...');
        const username = email.split('@')[0];
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message || 'Registration successful!');
                localStorage.setItem('user', JSON.stringify({ username }));
                setTimeout(() => {
                    if (onLogin) onLogin(username);
                    onClose();
                }, 1000);
            } else {
                setMessage(data.error || 'Registration failed.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    if (!isOpen) return null;

    return (
        <div style={{ display: 'flex', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1000, justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: 'white', padding: '30px', borderRadius: '8px', width: '350px', position: 'relative' }}>
                <h3 className="text-xl font-bold mb-4 text-black">Join Fuego Uganda</h3>
                <form id="signupForm" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Enter Real Email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', color: 'black' }} 
                    /><br />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', color: 'black' }} 
                    /><br />
                    <button type="submit" style={{ width: '100%', background: '#ff4500', color: 'white', padding: '10px', border: 'none', cursor: 'pointer', borderRadius: '4px', marginTop: '10px' }}>
                        Register
                    </button>
                </form>
                {message && <p style={{ marginTop: '10px', fontSize: '14px', color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
                <button 
                    onClick={onClose} 
                    style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer', color: 'black' }}
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default SignupModal;
