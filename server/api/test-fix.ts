import { setCookie } from 'h3'
// import { serverSupabaseUser } from '#supabase/server'
export default defineEventHandler(async (event) => {
    setCookie(event, `test-access-token`, 'VALUE HERE')

    return 'done'
})