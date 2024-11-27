import { createUsersSlice } from '../slices/usersSlice'

import create from 'zustand'

// store alias

type StateFromFunctions<T extends [...any]> = T extends [infer F, ...infer R]
    ? F extends (...args: any) => object
        ? StateFromFunctions<R> & ReturnType<F>
        : unknown
    : unknown

export type StoreTypes = StateFromFunctions<
    [
        typeof createUsersSlice,
    ]
>

export const useStore = create<StoreTypes>()((...rest) => ({
    ...createUsersSlice(...rest),
}))
