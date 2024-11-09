import { Nem12Parser, Nem12ParserWithFile, Nem12ParserWithRawCsv } from '../../classes/nem12-parser'
import { MeterReadingModel } from '../../model/meter-reading-model'

class MeterReadingController {

    private filePath: string

    constructor(filePath: string){
        this.filePath = filePath
    }

    async processMeterReadingsCsv(){
        try{
            const parser: Nem12Parser = new Nem12ParserWithFile(this.filePath)
            const parsedData = await parser.parseData()

            await MeterReadingModel.bulkCreate(parsedData, { validate: true })

        }catch(error){
            if (error.errorName === "DataParse"){
                console.log("Save to server log --> Failed to parse data")
            }
            console.log("Save to server log --> Failed to insert into DB")
            
        }
    }
}

export { MeterReadingController }