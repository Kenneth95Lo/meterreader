import * as fs from 'fs';
import * as csv from 'csv-parser';

export interface Nem12Parser {
    parseData()
}

export class Nem12ParserWithFile implements Nem12Parser {
    filePath: string

    constructor(filePath: string){
        this.filePath = filePath
    }
    async parseData() {
        const results = [];
        let currentNmi = ''
        return new Promise((resolve, reject) => {
            fs.createReadStream(this.filePath)
            .pipe(csv())
            .on('data', row => {
                switch(row[0]){
                    case "200":
                        currentNmi = row[1]
                    case "300":
                        let currentTimestamp = row[1]
                        let intervalValues = row.slice(2, 49)
                        let currTotal = intervalValues.reduce((acc, curr) => {return acc + curr ?? 0}, 0)
                        results.push({
                            nmi: currentNmi,
                            consumption: currTotal,
                            timestamp: currentTimestamp
                        })
                    case "900":
                        break
                }
            })
            .on('end', () => resolve(results))
            .on('error', error => reject({ errorMessage: error.message, errorName: 'DataParse' }))
        })
    }
}

export class Nem12ParserWithRawCsv implements Nem12Parser{
    rawCsv: string

    constructor(rawCsv){
        this.rawCsv = rawCsv
    }

    parseData() {
        // parse raw data
    }
}