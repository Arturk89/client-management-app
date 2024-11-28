import { StoreTypes } from "boot/store";
import { StateCreator } from "zustand";

export interface UserAuth {
  user: {
    name: string;
    token: string;
  };
}

interface UserSlice {
  user: UserAuth | null;
}

export const createAuthSlice: StateCreator<UserSlice> = (set, get) => ({
  user: null,
});

export const usersState = (state: StoreTypes): UserSlice => ({
  user: state.user,
});
