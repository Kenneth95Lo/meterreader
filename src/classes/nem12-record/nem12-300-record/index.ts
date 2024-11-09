export default class Record300 {
    recordIndicator = 300

    intervalValues: number[]

    getSumOfIntervalValues(){
        return this.intervalValues.reduce((acc, currVal) => {return acc + currVal}, 0)
    }
}