import { MeterReadingController } from "./controllers/meter-readings-controller";


const getMeterReadings = () => {

    const filePath = require("pathtoscv");

    const mrController = new MeterReadingController(filePath)
    mrController.processMeterReadingsCsv()
}

export { getMeterReadings }