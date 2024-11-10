import { MeterReadingController } from "..";
import { Nem12ParserWithFile } from "../../../classes/nem12-parser";
import { MeterReadingModel } from "../../../model/meter-reading-model";

describe("Meter Reading Controller Tests", () => {
    it('should complete all process until DB insertion', async ()=>{
        const bulkCreateSpy = jest.spyOn(MeterReadingModel, 'bulkCreate').mockResolvedValueOnce([])
        const mrController = new MeterReadingController(__dirname + '/../../../__mocks__/mock-nem12.csv')
        await mrController.processMeterReadingsCsv()
        expect(bulkCreateSpy).toHaveBeenCalledTimes(1);
    })

    it('should fail when unable to parse data', async ()=>{
        const bulkCreateSpy = jest.spyOn(MeterReadingModel, 'bulkCreate').mockResolvedValueOnce([])
        jest.spyOn(Nem12ParserWithFile.prototype, 'parseData').mockRejectedValueOnce({reason: "mock rejected"})
        const mrController = new MeterReadingController(__dirname + '/../../../__mocks__/mock-nem12.csv')
        await mrController.processMeterReadingsCsv()
        expect(bulkCreateSpy).toHaveBeenCalledTimes(0);

    })
})