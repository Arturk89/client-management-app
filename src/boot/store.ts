import { create } from "zustand";
import { createUsersSlice, createAuthSlice } from "slices/";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StateFromFunctions<T extends [...any]> = T extends [infer F, ...infer R]
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown;

export type StoreTypes = StateFromFunctions<
  [typeof createUsersSlice, typeof createAuthSlice]
>;

export const useStore = create<StoreTypes>()((...rest) => ({
  ...createUsersSlice(...rest),
  ...createAuthSlice(...rest),
}));
