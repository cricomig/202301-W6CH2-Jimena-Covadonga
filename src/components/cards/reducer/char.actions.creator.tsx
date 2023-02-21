import { createAction } from "@reduxjs/toolkit";
import { CharacterStructure } from "../../../models/characters";
import { charActions } from "./chars.actions.types";

export const loadCreator = createAction<CharacterStructure[]>(charActions.load);
export const updateCreator = createAction<CharacterStructure>(
  charActions.update
);
