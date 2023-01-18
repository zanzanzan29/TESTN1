function retry(func, wait = 0, options = {}) {
    let max = options.max || Infinity;
    let count = 0;
    while (count < max) {
        if (func()) return true;
        count++;
        document.write("Số lần phản hồi:" + count);
        if (count < max) setTimeout(() => {}, wait);
    }
    return false;
}

let N = prompt("Nhập số lần thử : ");
let f = () => {
  let d = new Date();
  return d.getMilliseconds() % 2 == 0;
};
retry(f, 1000, {max: N}); 
