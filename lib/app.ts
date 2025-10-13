export function getEarliestTime() {
    const now = new Date(Date.now())

    const minutes = now.getMinutes();
    const remainder = minutes % 5

    now.setMinutes(minutes + (5 - remainder))
    now.setSeconds(0)
    now.setMilliseconds(0)

    // Return the updated timestamp
    return now.getTime()
}