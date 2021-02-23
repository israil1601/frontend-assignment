import { getDateFromTimestamp, sortDataByTimestamp } from "./index";
import api from "../lib/api";
describe("Utility functions should work correctly", () => {
  describe("Should sort users timestamp correctly", () => {
    it("Should sort by descending correctly", () => {
      return api
        .getUsersDiff()
        .then(({ data }) => sortDataByTimestamp(data))
        .then((data) => data.map(({ timestamp }) => timestamp))
        .then((sortedTimestamps) =>
          expect(sortedTimestamps).toEqual([
            1581804000000,
            1581717600000,
            1581631200000,
          ])
        );
    });

    it("Should sort by ascending correctly", () => {
      return api
        .getUsersDiff()
        .catch((err) => api.getUsersDiff())
        .then(({ data }) => sortDataByTimestamp(data, "asc"))
        .then((data) => data.map(({ timestamp }) => timestamp))
        .then((sortedTimestamps) =>
          expect(sortedTimestamps).toEqual([
            1581890400000,
            1581976800000,
            1582063200000,
          ])
        );
    });
  });

  describe("Should sort projects timestamp correctly", () => {
    it("Should sort by descending correctly", () => {
      return api
        .getProjectsDiff()
        .then(({ data }) => sortDataByTimestamp(data))
        .then((data) => data.map(({ timestamp }) => timestamp))
        .then((sortedTimestamps) =>
          expect(sortedTimestamps).toEqual([
            1581804000000,
            1581717600000,
            1581631200000,
          ])
        );
    });

    it("Should sort by ascending correctly", () => {
      return api
        .getProjectsDiff()
        .catch((err) => api.getProjectsDiff())
        .then(({ data }) => sortDataByTimestamp(data, "asc"))
        .then((data) => data.map(({ timestamp }) => timestamp))
        .then((sortedTimestamps) =>
          expect(sortedTimestamps).toEqual([1581890400000, 1581976800000])
        );
    });
  });

  describe("Should format date from timestamp correctly", () => {
    it("Should work with double-digit dates correctly", () => {
        const testTimestamp = 1608508800000;
        expect(getDateFromTimestamp(testTimestamp)).toEqual("2020-12-21")
    });

      it("Should work with single-digit dates correctly", () => {
          const testTimestamp = 1582063200000;
          expect(getDateFromTimestamp(testTimestamp)).toEqual("2020-02-19")
      })
  })
});
