import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
    const data = await $fetch<Repo[]>('https://testadsapi.yektasadcore.ir/api/v1/landing/get-landing-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:{
            utm_campaign:'43d5',
            utm_source:'1db18',
        }
    })
    return data;
})