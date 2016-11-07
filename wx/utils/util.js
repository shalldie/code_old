/**
 * 时间格式化
 */
function dateFormat(date,pattern){
  var dict = {
        "y+": date.getFullYear(),
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "H+": date.getHours(),
        "h+": date.getHours() - 12,
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
    };
    for (var k in dict) {
        var reg = new RegExp(k, "g");
        pattern = pattern.replace(reg, function (g0) {
            return ("000000" + dict[k]).slice(-g0.length);
        });
    }
    return pattern;
}

module.exports = {
  dateFormat:dateFormat
};
