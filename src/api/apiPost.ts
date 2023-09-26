import axios from 'axios';
import { endpoint } from './endpoint';

export async function postData(payload: object) {
    let { data } =  await axios.post(endpoint, payload)
    // console.log(data)
    return data
}