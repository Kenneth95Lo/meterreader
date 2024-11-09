import { MeterReadingController } from "./controllers/meter-readings-controller";


const getMeterReadings = () => {

    // const filePath = require("pathtoscv");

    const mrController = new MeterReadingController('')
    mrController.processMeterReadingsCsv()
}

getMeterReadings()

export { getMeterReadings }
