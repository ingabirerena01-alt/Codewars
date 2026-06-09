function leastLarger(a, i) {
    const sorted = [...a].sort((x, y) => x - y);
    const target = a[i];
    if (i > a.length || i < 0) {
        return -1;
    }
    else if (i <= a.length && i >= 0) {
        for (let num of sorted) {
            if (target < num) {
                return a.indexOf(num);
            }
        }
    }
    return -1;
}