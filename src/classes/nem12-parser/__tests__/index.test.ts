import { Nem12ParserWithFile } from '../'

describe('NEM12 Parser Test', () => {
    it('should able to parse valid data and get array of record as result', async () => {
        const parser = new Nem12ParserWithFile(__dirname + '/../../../__mocks__/mock-nem12.csv')
        const data: any[] = await parser.parseData()
        expect(data.length).toBe(8)
        expect(data[0]).toEqual({
            nmi: 'NEM1201009',
            consumption: 31.212999999999997,
            timestamp: '20050301'
        })
    })
})