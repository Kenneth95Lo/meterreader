import * as fs from 'fs';
import * as csv from 'csv-parser';

interface Nem12Parser {
    parseData(): Promise<any>
}

class Nem12ParserWithFile implements Nem12Parser {
    private filePath: string

    constructor(filePath){
        this.filePath = filePath
    }
    async parseData(): Promise<any[]> {
        const results = [];
        let currentNmi = ''
        return new Promise((resolve, reject) => {
            fs.createReadStream(this.filePath)
            .pipe(csv())
            .on('data', row => {
                const children = Object.values(row)
                switch(children[0]){
                    case "200":
                        currentNmi = String(children[1])
                        break
                    case "300":
                        let currentTimestamp = children[1]
                        let intervalValues = children.slice(2, 49)
                        let currTotal = intervalValues.reduce((acc, curr) => {return Number(acc) + Number(curr)}, 0)
                        results.push({
                            nmi: currentNmi,
                            consumption: currTotal,
                            timestamp: currentTimestamp
                        })
                        break
                    case "900":
                        break
                }
            })
            .on('end', () => resolve(results))
            .on('error', error => reject({ errorMessage: error.message, errorName: 'DataParse' }))
        })
    }
}

class Nem12ParserWithRawCsv implements Nem12Parser{
    private rawCsv: string

    constructor(rawCsv){
        this.rawCsv = rawCsv
    }

    async parseData() {
        // parse raw data
    }
}

export { Nem12ParserWithFile, Nem12ParserWithRawCsv,Nem12Parser }