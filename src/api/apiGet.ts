import get from 'axios';
import {endpoint} from './endpoint';

export async function getData() {
    const result = await get(endpoint)
    // console.log(result)
    return result.data
}
