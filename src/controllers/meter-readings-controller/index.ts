import { Nem12Parser, Nem12ParserWithFile, Nem12ParserWithRawCsv } from '../../classes/nem12-parser'

class MeterReadingController {

    filePath: string

    constructor(filePath: string){
        this.filePath = filePath
    }

    async processMeterReadingsCsv(){
        try{
            const parser: Nem12Parser = new Nem12ParserWithFile(this.filePath)
            const parsedData = await parser.parseData()

            const adaptedData = parser.adaptData(parsedData)

            //get the sum of 
        }
    }
}