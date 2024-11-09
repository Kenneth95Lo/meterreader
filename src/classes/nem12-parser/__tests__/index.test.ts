import { Nem12ParserWithFile } from '../'

describe('NEM12 Parser Test', () => {
    
    it('should able to parse valid data and get array of record as result', async () => {
        // const pathToCSV = require('../../../__mocks__/mock-nem12.csv');
        const parser = new Nem12ParserWithFile('__tests__/mock-nem12.csv')
        const data = await parser.parseData()
        console.log('>>>>>>>> ',data)
        expect(data).toBe({})
    })
})