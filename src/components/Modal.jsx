import React, {useRef} from 'react';
import './Modal.scss';
import life360icon from '../assets/img/life360.png';
import { useDispatch } from 'react-redux';
import {authTrigger} from '../redux/actions/index';

function Modal() {
    const login = useRef('');
    const password = useRef('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authTrigger({
            email: login.current.value,
            password: password.current.value
        }));
    }

    return (
        <div className='modalContainer'>
            <div className='header'>
                <img src={life360icon}></img>
                <p>Life360</p>
            </div>
            <div className='main'>
                <p>Please, Log In in your Life360 account to synchronise data about your location</p>
                <form onSubmit={handleSubmit}>
                    <label for='email'>Email</label>
                    <input ref={login} placeholder='Email' name='email' id='email' type='email' className='login'></input>
                    <label for='password'>Password</label>
                    <input ref={password} placeholder='Password' name='password' id='password' type='password' className='psw'></input>
                    <input className='submitButton' type='submit' value='LOGIN' />
                </form>
            </div>
        </div>
    )
}

export default Modal