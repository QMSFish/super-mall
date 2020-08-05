import { request1 } from './request'

export function getHomeMultidata() {
    return request1({
        url: '/home/multidata'
    })

}