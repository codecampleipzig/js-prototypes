// Duration class

export class Duration {
  constructor(input) {
    if (typeof input == "number") {
      this.ms = input;
    } else {
      const { ms, s, min, h, d, y } = input;

      this.ms =
        (ms || 0) +
        (s * 1000 || 0) +
        (min * 60 * 1000 || 0) +
        (h * 60 * 60 * 1000 || 0) +
        (d * 24 * 60 * 60 * 1000 || 0) +
        (y * 365 * 24 * 60 * 60 * 1000 || 0);
    }
  }

  toString() {
    return `${this.ms} ms`;
  }

  get minutes() {
    return Math.round(this.ms / 60000);
  }

  static fromDays(days) {
    return new Duration(days * 24 * 60 * 60 * 1000);
  }

  humanize() {
    const units = [
      { threshold: 1000, name: "millisecond" },
      { threshold: 60, name: "second" },
      { threshold: 60, name: "minute" },
      { threshold: 24, name: "hour" },
      { threshold: 365, name: "day" },
      { threshold: Infinity, name: "year" }
    ];

    let count = this.ms;
    for (const { threshold, name } of units) {
      if (count < threshold) {
        return `${count} ${name}${count > 1 ? "s" : ""}`;
      }

      count = Math.floor(count / threshold);
    }
  }
}
