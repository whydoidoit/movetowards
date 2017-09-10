function sign(x) {
    return x >= 0 ? 1 : -1
}

export default function (start, end, max) {
    start = start % PI2
    end = end % PI2
    var diff = end - start;
    var s = sign(diff);
    if (Math.abs(diff) > Math.PI) {
        diff = start - end
        s = -s
    }
    return start + Math.min(max, Math.abs(diff)) * s
}
