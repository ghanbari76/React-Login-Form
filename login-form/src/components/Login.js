import React,{ useState,useEffect } from 'react';

//Validation Function
import { validate } from './validate';

// React-Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';

//Styles
import styles from "./SignUp.module.css";

const Login = () => {
    const [data,setData] = useState({
        email : "",
        password : "",
    })
    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({})

    useEffect(() => {
        setErrors(validate(data,"Login"))
    },[data,touched])

    const changeHandler = event => {
        setData({...data,[event.target.name] : event.target.value})
    }
    const focusHandler = event => {
        setTouched({...touched,[event.target.name]:true})
    }
    
    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("You Loged in successfully","success")
        }else {
            notify("Invalid data","error")
            setTouched({
                email : true,
                password : true,
            })
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput} type='text' name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                     {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput} type='password' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                     {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formButtons}>
                    <a href='#'>Sign Up</a>
                    <button type='submite'>Login</button>
                </div>
            </form>
            <ToastContainer className={styles.toast} />
        </div>
    );
};

export default Login;