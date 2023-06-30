import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form>
                <h2>SignUp</h2>
                <div>
                    <label>Name:</label>
                    <input type='text' name='name' />
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' name='email' />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' />
                </div>
                <div>
                    <label>ConfirmPassword</label>
                    <input type='password' name='confirmPassword' />
                </div>
                <div>
                    <label>I accept terms of privacy policy</label>
                    <input type='checkbox' name='isAccepted' />
                </div>
                <div>
                    <a href='#'>Login</a>
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;