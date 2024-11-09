import * as fs from 'fs';
import * as csv from 'csv-parser';

import Record100 from '../nem12-record/nem12-100-record';
import Record200 from '../nem12-record/nem12-200-record';
import Record300 from '../nem12-record/nem12-300-record';
import Record500 from '../nem12-record/nem12-500-record';
import Record900 from '../nem12-record/nem12-900-record';

export interface Nem12Parser {
    parseData()
    adaptData(parsedData)
}

export class Nem12ParserWithFile implements Nem12Parser {
    filePath: string

    constructor(filePath: string){
        this.filePath = filePath
    }
    async parseData() {
        const results = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(this.filePath)
            .pipe(csv())
            .on('data', data => results.push(data))
            .on('end', () => resolve(results))
            .on('error', error => reject(error))
        })
    }

    adaptData(parsedData) {
        return parsedData.map( row => {
            switch(row[0]){
                case "100":
                    return new Record100(row[1], row[2], row[3])
                case "200":
                    return new Record200(row[1], row[2], row[3])
                case "300":
                    return new Record300(row[1], row[2], row[3])
                case "500":
                    return new Record500(row[1], row[2], row[3])
                case "900":
                    return new Record900(row[1], row[2], row[3])
            }
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