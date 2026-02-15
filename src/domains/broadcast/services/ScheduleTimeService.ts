type WeekdayName = "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY";

const weekdayToIndex: Record<WeekdayName, number> = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
};

const indexToWeekday: WeekdayName[] = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

const weekdayLabelToIndex: Record<string, number> = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
};

function getZonedDateParts(date: Date, timezone: string) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });

  const parts = formatter.formatToParts(date);
  const partMap = parts.reduce<Record<string, string>>((acc, part) => {
    if (part.type !== "literal") {
      acc[part.type] = part.value;
    }
    return acc;
  }, {});

  const weekdayLabel = (partMap.weekday || "").toUpperCase();
  const weekday = weekdayLabelToIndex[weekdayLabel];
  if (weekday === undefined) {
    throw new Error("Unable to resolve weekday for scheduling.");
  }

  return {
    year: Number(partMap.year),
    month: Number(partMap.month),
    day: Number(partMap.day),
    hour: Number(partMap.hour),
    minute: Number(partMap.minute),
    second: Number(partMap.second),
    weekday,
  };
}

function zonedDateTimeToUtc(input: { year: number; month: number; day: number; hour: number; minute: number }, timezone: string) {
  let candidate = new Date(Date.UTC(input.year, input.month - 1, input.day, input.hour, input.minute, 0));

  // Iterate to converge wall-clock time in the target timezone.
  for (let index = 0; index < 4; index += 1) {
    const zoned = getZonedDateParts(candidate, timezone);
    const desiredUtc = Date.UTC(input.year, input.month - 1, input.day, input.hour, input.minute, 0);
    const actualUtc = Date.UTC(zoned.year, zoned.month - 1, zoned.day, zoned.hour, zoned.minute, 0);
    const deltaMs = desiredUtc - actualUtc;

    if (deltaMs === 0) {
      break;
    }

    candidate = new Date(candidate.getTime() + deltaMs);
  }

  return candidate;
}

function getNextWeeklyRunAt(input: { weekday: WeekdayName; time: string; timezone: string; from?: Date }) {
  const now = input.from || new Date();
  const [hoursString, minutesString] = input.time.split(":");
  const hour = Number(hoursString);
  const minute = Number(minutesString);
  const targetWeekday = weekdayToIndex[input.weekday];

  for (let dayOffset = 0; dayOffset < 14; dayOffset += 1) {
    const dayProbe = new Date(now.getTime() + dayOffset * 24 * 60 * 60 * 1000);
    const zonedProbe = getZonedDateParts(dayProbe, input.timezone);
    if (zonedProbe.weekday !== targetWeekday) {
      continue;
    }

    const candidate = zonedDateTimeToUtc(
      {
        year: zonedProbe.year,
        month: zonedProbe.month,
        day: zonedProbe.day,
        hour,
        minute,
      },
      input.timezone
    );

    if (candidate.getTime() > now.getTime()) {
      return candidate;
    }
  }

  throw new Error("Unable to calculate next weekly run time.");
}

export { getNextWeeklyRunAt, indexToWeekday, weekdayToIndex };
export type { WeekdayName };

