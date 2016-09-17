$.fn.ripple = function () {
    return this.each(function () {
        var self = $(this);

        self.click(function (ex) {
            var wid,  // 宽度
                hei,  // 高度
                d,    // 涟漪宽高
                x,    // 坐标x
                y,    // 坐标y
                taint; // 涟漪对象

            taint = self.children('.taint');
            if (!taint.length) {
                taint = $('<span class="taint"></span>');
                self.prepend(taint);
            }

            if (!taint.width() && !taint.height()) {
                d = Math.max(self.outerWidth(), self.outerHeight());
            }

        });

    });
}