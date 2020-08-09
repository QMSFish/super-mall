import { request1 } from './request'

export function getGoodDetailData(iid) {
    return request1({
        url: '/detail',
        params: {
            iid
        }
    })
}
export function getRecommendData() {
    return request1({
        url: '/recommend'
    })
}