import { CharacterStructure } from "../../../models/characters";
import { loadCreator, updateCreator } from "./char.actions.creator";
import { charReducer } from "./char.reducer";

describe("Given the Characters reducer ", () => {
  describe("When we mock the characters ", () => {
    const mockCharacter: CharacterStructure[] = [
      {
        id: 4,
        category: "king",
        name: "Covadongui",
        family: "Covadonga",
        age: 10,
        isAlive: true,
        chief: {} as unknown as CharacterStructure,
        submission: 50,
        message: "a",
      },
      {
        id: 2,
        category: "squire",
        name: "Cova",
        family: "Covadonga",
        age: 10,
        isAlive: true,
        chief: {} as unknown as CharacterStructure,
        submission: 10,
        message: "ole",
      },
    ];

    const payload: CharacterStructure = {
      id: 2,
      category: "squire",
      name: "Cova",
      family: "Covadonga",
      age: 10,
      isAlive: true,
      chief: {} as unknown as CharacterStructure,
      submission: 10,
      message: "ole",
    };

    test("Then reducer should equal the mock", () => {
      let result = charReducer(mockCharacter, updateCreator(payload));
      expect(result).toEqual(mockCharacter);
    });

    describe("When we use loadCreator", () => {
      test(" Then it should load an array of chars", () => {
        let result = charReducer(mockCharacter, loadCreator(mockCharacter));
        expect(result).toEqual(mockCharacter);
      });
    });

    describe("When we use addDefaultCase", () => {
      test(" Then give the same state", () => {
        const initialState = undefined;
        const action = { type: "" };
        const result = charReducer(initialState, action);
        expect(result).toEqual([]);
      });
    });
  });
});
