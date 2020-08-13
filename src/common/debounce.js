let timer = null;

function setTimer(func) {
    timer = setTimeout(() => {
        func();
        console.log("图片加载完成");
    }, 100);
};
// 防抖函数
export default function debounce(fn) {
    if (timer) {
        clearTimeout(timer);
        timer = null;
        setTimer(fn);
        return
    };
    setTimer(fn);
};