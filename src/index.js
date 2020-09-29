
exports.min = function min (array) {
    if (array !== undefined && array.length != 0) {
        return Math.min.apply(null, array);
    }
    return 0;
}

exports.max = function max (array) {
    if (array !== undefined && array.length != 0) {
        return Math.max.apply(null, array);
    }
    return 0;
}

exports.avg = function avg (array) {
    if (array !== undefined && array.length != 0) {
        var sum=0;
        var count = array.length;
        for (i=0; i<count; i++) {
            sum+= array[i];
        }
        return sum/count;
    }
    return 0;
}
