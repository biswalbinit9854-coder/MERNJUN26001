import React, { useState } from 'react';
import axios from "axios";
import { Form } from 'react-router';

function Register() {
    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleRegister = async () => {
        try {
            const result = await axios.post(
                "http://localhost:8000/user/create",
                formData,
            );

            console.log(result.data);

            if (result.data?.success) {
                alert(result.data?.message);
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <div>
            <input
                type="text"
                placeholder='Enter your name'
                name='fullName'
                value={FormData.fullName}
                onChange={handleChange}
            />
            <br />
            <input
                type="number"
                placeholder='Enter your age'
                name='age'
                value={FormData.age}
                onChange={handleChange}
            />
            <br />
            <input
                type="email"
                placeholder='Enter your email'
                name='email'
                value={FormData.email}
                onChange={handleChange}
            />
            <br />
            <input
                type="password"
                placeholder='Enter your password'
                name='password'
                value={FormData.password}
                onChange={handleChange}
            />
            <br />
            <button onClick={handleRegister}>Register</button>

        </div>
    );
}

export default Register;
