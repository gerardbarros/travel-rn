import { apiSlice } from "../slices/apiSlice.js"
const USERS_URL = '/api/users'

// create endpoints in file and injects it to api slice endpoints
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            }),
        }),
    }),
})

export const { useLoginMutation, useLogoutMutation } = usersApiSlice