import { Duration } from "./duration.js";

describe("Duration", () => {
  test.skip("the constructor should take a duration in milliseconds and set the property ms", () => {
    expect(new Duration(444).ms).toBe(444);
  });

  test.skip("the toString method should return the number of milliseconds followed by ms", () => {
    expect(new Duration(123).toString()).toBe("123 ms");
  });

  test.skip("there should be a getter called minutes that returns the duration as number of minutes (rounded)", () => {
    expect(new Duration(10000).minutes).toBe(0);
    expect(new Duration(60000).minutes).toBe(1);
    expect(new Duration(120000).minutes).toBe(2);
    expect(new Duration(3600000).minutes).toBe(60);
  });

  test.skip("the fromDays static function, should take in the number of days and return a Duration with the converted millisecond value", () => {
    expect(Duration.fromDays(13).ms).toBe(1123200000);
    expect(Duration.fromDays(388).ms).toBe(33523200000);
  });

  test.skip(`Advanced: the constructor can take either the number of milliseconds or a an object with the form {
    y: 1, // 1 year
    d: 23, // 23 days
    h: 4, // 4 hours
    min: 56, // 56 minutes
    s: 78, // 78 seconds
    ms: 999 // 999 milliseconds
  }`, () => {
    expect(new Duration({ ms: 123 }).ms).toBe(123);
    expect(new Duration({ ms: 123456 }).ms).toBe(123456);
    expect(new Duration({ s: 3, ms: 555 }).ms).toBe(3555);
    expect(new Duration({ min: 5 }).ms).toBe(5 * 60 * 1000);
    expect(new Duration({ h: 6 }).ms).toBe(6 * 60 * 60 * 1000);
    expect(new Duration({ d: 13 }).ms).toBe(13 * 24 * 3600 * 1000);
    expect(new Duration({ y: 7 }).ms).toBe(7 * 365 * 24 * 3600 * 1000);
    expect(
      new Duration({ y: 3, d: 45, h: 12, min: 55, s: 67, ms: 33 }).ms
    ).toBe(98542567033);
  });

  test.skip("Advanced: it should have a method .humanize(), that rounds the duration to the most appropriate unit and gives it back as a human readable string. For simplicity we'll always round down. Check the test cases for details", () => {
    expect(new Duration(1).humanize()).toBe("1 millisecond");
    expect(new Duration(2).humanize()).toBe("2 milliseconds");
    expect(new Duration(123).humanize()).toBe("123 milliseconds");
    expect(new Duration(1000).humanize()).toBe("1 second");
    expect(new Duration(1499).humanize()).toBe("1 second");
    expect(new Duration(1500).humanize()).toBe("1 second");
    expect(new Duration(1999).humanize()).toBe("1 second");
    expect(new Duration(2000).humanize()).toBe("2 seconds");
    expect(new Duration(33111).humanize()).toBe("33 seconds");
    expect(new Duration(60000).humanize()).toBe("1 minute");
    expect(new Duration(120000).humanize()).toBe("2 minutes");
    expect(new Duration(3600000).humanize()).toBe("1 hour");
    expect(new Duration(23 * 3600000).humanize()).toBe("23 hours");
    expect(new Duration(24 * 3600000).humanize()).toBe("1 day");
    expect(new Duration(123 * 24 * 3600000).humanize()).toBe("123 days");
    expect(new Duration(364 * 24 * 3600000).humanize()).toBe("364 days");
    expect(new Duration(365 * 24 * 3600000).humanize()).toBe("1 year");
    expect(new Duration(2 * 365 * 24 * 3600000).humanize()).toBe("2 years");
  });
});
