import { apiSlice } from "./apiSlice"

const USERS_URL = '/api/users'

// create endpoints in file and injects it to api slice endpoints
export const usersApiSlice = apiSlice.injectEndpoints({
    encpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useLoginMutation } = usersApiSlice