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
}
