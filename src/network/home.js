import { request1 } from './request'


export function getHomeMultidata() {
    return request1({
        url: '/home/multidata'
    })
}

export function getHomeGoodsData(typeName, number) {
    return request1({
        url: '/home/data',
        params: {
            type: typeName,
            page: number
        }
    })
}