export default class Record100 {
    recordIndicator = 100
    versionHeader = "NEM12"
    dateTime: Date
    fromParticipant: string
    toParticipant: string

    constructor(dateTime: Date, fromParticipant: string, toParticipant: string){
        this.dateTime = dateTime
        this.fromParticipant = fromParticipant
        this.toParticipant = toParticipant
    }
}