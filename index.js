
function sign(v) {
    return (v < 0) ? -1 : 1
}

pc.extend(pc, {
    utils: {}
})

const Utils = {
    moveTowards: function (start, end, max) {
        var diff = end - start
        var s = sign(diff)
        return start + Math.min(max, Math.abs(diff)) * s
    }
}

pc.extend(pc.utils, Utils)

export default Utils.moveTowards

