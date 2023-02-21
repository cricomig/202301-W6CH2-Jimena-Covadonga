import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

export const appStore = configureStore({
  reducer: {
    chars: charsReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
function charsReducer(state: unknown, action: AnyAction): unknown {
  throw new Error("Function not implemented.");
}
