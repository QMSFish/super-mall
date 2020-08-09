export class Good {
    constructor(result) {
        this.title = result.itemInfo.title;
        this.price = result.itemInfo.lowNowPrice;
        this.lowPrice = result.itemInfo.lowPrice;
        this.discount = result.itemInfo.discountDesc;
        this.columns = result.columns
    }
}
export class Params {
    constructor(result) {
        this.set = result.itemParams.info.set;
        this.table = result.itemParams.rule.tables[0]
    }
}
export class Cart {
    constructor(res) {
        this.desc = res.result.detailInfo.desc;
        this.title = res.result.itemInfo.title;
        this.price = res.result.itemInfo.lowNowPrice;
        this.img = res.result.itemInfo.topImages[0];
        this.iid = res.iid;
        this.num = 1;
        this.flag = false;
    }
}