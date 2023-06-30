import React,{ useState } from 'react';

const SignUp = () => {
    const [data,setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        isAccepted : false
    })
    return (
        <div>
            <form>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input type='text' name='name' value={data.name} />
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' name='email' value={data.email} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' value={data.password} />
                </div>
                <div>
                    <label>ConfirmPassword</label>
                    <input type='password' name='confirmPassword' value={data.confirmPassword} />
                </div>
                <div>
                    <label>I accept terms of privacy policy</label>
                    <input type='checkbox' name='isAccepted' value={data.isAccepted} />
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