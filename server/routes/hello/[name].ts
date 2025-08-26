import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
    const name = getRouterParam(event, 'name')
    let splitParamsId = name.split('-');
    const data = await $fetch<Repo[]>('https://testadsapi.yektasadcore.ir/api/v1/landing/get-landing-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:{
            utm_campaign:splitParamsId[0],
            utm_source:splitParamsId[1],
        }
    })
    return data;
})