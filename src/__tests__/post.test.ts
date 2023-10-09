import {expect, test} from '@jest/globals';
import { postData } from '../api/apiPost'
import { testData } from '../content/testData'
import { deviceList } from '../content/deviceList'

test("POST data", async () => {
    const postResult = await postData(testData.testLaptop)
    expect(postResult.name).toEqual(deviceList.macbookM1.name)
})
