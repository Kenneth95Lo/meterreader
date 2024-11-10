import { MeterReadingController } from "./controllers/meter-readings-controller";


const getMeterReadings = () => {
    const mrController = new MeterReadingController(__dirname + '/__mocks__/mock-nem12.csv')
    mrController.processMeterReadingsCsv()
}

getMeterReadings()

export { getMeterReadings }
