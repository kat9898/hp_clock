import axios from 'axios';

export const API = {
    login: ({email, login}) => {axios.post('URL', {email, login})},
    logout: () => {},
    getLocation: () => {}
}