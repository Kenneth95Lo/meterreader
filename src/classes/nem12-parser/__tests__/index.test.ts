import { Nem12ParserWithFile } from '../'

describe('NEM12 Parser Test', () => {
    it('should able to parse valid data and get array of record as result', async () => {
        const parser = new Nem12ParserWithFile(__dirname + '/../../../__mocks__/mock-nem12.csv')
        const data: any[] = await parser.parseData()
        expect(data.length).toBe(13)
        expect(data[0]).toEqual(["200", "NEM1201009", "E1E2", "1", "E1", "N1", "01009", "kWh", "30", "20050610"])
    })
})