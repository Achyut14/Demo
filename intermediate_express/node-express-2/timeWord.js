function timeWord(timeString) {
    const hoursWords = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    const minutesWords = ["o'clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    for (let i = 20; i < 60; i++) {
        if (i < 30) {
            minutesWords[i] = `twenty-${minutesWords[i - 20]}`;
        } else if (i < 40) {
            minutesWords[i] = `thirty-${minutesWords[i - 30]}`;
        } else if (i < 50) {
            minutesWords[i] = `forty-${minutesWords[i - 40]}`;
        } else {
            minutesWords[i] = `fifty-${minutesWords[i - 50]}`;
        }
    }

    let [hours, minutes] = timeString.split(":").map(str => parseInt(str, 10));

    if (hours === 0 && minutes === 0) return "midnight";
    if (hours === 12 && minutes === 0) return "noon";

    let hourWord = hoursWords[hours % 12];
    let minuteWord = minutes === 0 ? 'o\'clock' : minutes < 10 ? `oh ${minutesWords[minutes]}` : minutesWords[minutes];
    let amPm = hours < 12 ? "am" : "pm";

    return `${hourWord} ${minuteWord} ${amPm}`;
}

module.exports = timeWord