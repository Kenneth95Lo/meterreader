import * as fs from 'fs';
import * as csv from 'csv-parser';
import { parse } from 'csv-parse';

interface Nem12Parser {
    parseData(): Promise<any>
}

/**
 * To parse NEM12 CSV from file
 * params - file path to .csv file
 */
class Nem12ParserWithFile implements Nem12Parser {
    private filePath: string

    constructor(filePath){
        this.filePath = filePath
    }
    async parseData(): Promise<any[]> {
        const results = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(this.filePath)
            .pipe(csv())
            .on('data', row => {
                results.push(Object.values(row))
            })
            .on('end', () => resolve(results))
            .on('error', error => reject({ errorMessage: error.message, errorName: 'DataParse' }))
        })
    }
}

/**
 * To parse NEM12 CSV from string
 * params - CSV string
 */
class Nem12ParserWithRawCsv implements Nem12Parser{
    private rawCsv: string

    constructor(rawCsv){
        this.rawCsv = rawCsv
    }

    async parseData(): Promise<[]> {
        return new Promise((resolve, reject) => {
            parse(this.rawCsv, { delimiter: ',', columns: true, trim: true }, (error, output) => {
                if (error){
                    reject(error)
                    return
                }
                resolve(output)
            })
        })
    }
}

export { Nem12ParserWithFile, Nem12ParserWithRawCsv,Nem12Parser }