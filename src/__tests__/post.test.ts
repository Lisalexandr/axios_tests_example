import {expect, test} from '@jest/globals';
import { postData } from '../api/apiPost'
import { testData } from '../data/testData'
import { deviceList } from '../data/deviceList'

test("POST data", async () => {
    const postResult = await postData(testData.testLaptop)
    expect(postResult.name).toEqual(deviceList.macbookM1.name)
})
