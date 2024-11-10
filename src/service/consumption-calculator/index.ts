export const calculateConsumption = (records: any[][]) => {

    let results = [];
    let currentNmi = ''

    records.forEach(record => {
        switch(record[0]){
            case "200":
                currentNmi = String(record[1])
                break
            case "300":
                let currentTimestamp = record[1]
                let intervalValues = record.slice(2, 49)
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
    return results
}