import { api } from "./api"

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    loging: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query: userData => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation<{ email: string }>,
  }),
})
