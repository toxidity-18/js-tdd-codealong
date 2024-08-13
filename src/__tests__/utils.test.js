import { currentAgeForBirthYear } from "../utils";
describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const currentYear = new Date().getFullYear(); 
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(expectedAge);
  });
  it("returns the current year for a person born in year 0", () => {
    const birthYear = 0;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(expectedAge);
  });
  it("returns 0 for a person born in the current year", () => {
    const birthYear = new Date().getFullYear(); 
    const expectedAge = 0;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(expectedAge);
  });
});
