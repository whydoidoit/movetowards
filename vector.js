
const scratch = pc.Vec3

export default function (start, end, speed) {
    scratch.copy(end)
    scratch.sub(start)
    var length = scratch.length()
    if (length && length != 1) {
        scratch.normalize()
    }
    start.add(scratch.scale(Math.min(speed, length)))
    return start
}
