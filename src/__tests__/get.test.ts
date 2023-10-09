import {expect, test} from '@jest/globals';
import { getData } from '../api/apiGet'
import { deviceList } from '../content/deviceList'

test("GET data", async () => {
    const getResult = await getData()
    expect(getResult[0].name).toEqual(deviceList.pixel6.name)
})
