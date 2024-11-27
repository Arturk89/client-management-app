import { StoreTypes } from 'boot/store'
import { StateCreator } from 'zustand'

export interface SingleUserType {
    id: number
    name: string
}

interface UsersSlice {
    users: SingleUserType[]
    // allUsers: AppUserExt[]
    // setUsers: (users: AppUserExt[]) => void
    // addUser: (user: SingleUserType) => void
    // removeUser: (id: number) => void
}

export const createUsersSlice: StateCreator<UsersSlice> = (set, get) => ({
    users: [],
    // allUsers: [],
    // setUsers: (users) => set((state) => ({ ...state, allUsers: users })),
    // addUser: (newUser: SingleUserType) =>
    //     set((state) => ({ users: [...state.users, newUser] })),
    // removeUser: (id: number) =>
    //     set((state) => {
    //         const newState = state.users.filter((el) => el.id !== id)
    //         return { users: newState }
    //     })
})

export const usersState = (state: StoreTypes): UsersSlice => ({
    users: state.users,
    // allUsers: state.allUsers,
    // setUsers: state.setUsers,
    // addUser: state.addUser,
    // removeUser: state.removeUser
})
