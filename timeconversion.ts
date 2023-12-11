function timeConversion(s: string): string {
  const [hours, minutes, secondsPeriod] = s.split(":");
  const period = secondsPeriod.slice(2).toLowerCase();
  const seconds = secondsPeriod.slice(0, 2);

  if (
    Number(hours) > 12 ||
    Number(hours) < 0 ||
    Number(minutes) > 59 ||
    Number(minutes) < 0 ||
    Number(seconds) > 59 ||
    Number(seconds) < 0 ||
    (period !== "am" && period !== "pm")
  ) {
    return "incorrect Format";
  }

  type data = number | string;
  const determineTheTimeOfTheDay = period.includes("pm");

  const FormattedString = (determineTheTimeOfTheDay: boolean): data => {
    let hour: data = "";

    // Checks that this is pm
    if (determineTheTimeOfTheDay) {
      hour = Number(hours) + 12 === 24 ? "12" : `${Number(hours) + 12}`;
    } else {
      const formatHour =
        Number(hours) < 10 ? `0${Number(hours)}` : Number(hours);
      hour = Number(hours) + 12 === 24 ? "00" : formatHour;
    }

    return hour;
  };
  const formattedHour = FormattedString(determineTheTimeOfTheDay);

  const date = `${formattedHour}:${minutes}:${seconds}`;
  return date;
}

const s = timeConversion("01:05:00AM");
console.log(s);

function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
