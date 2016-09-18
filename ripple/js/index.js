(function ($) {

    /**
     * 涟漪效果，绑在jq对象上
     * 
     * @param {any} options
     * @returns
     */
    $.fn.ripple = function (options) {
        var defaults = {
            color: '#2ad',
            event: null,
            left: null,
            top: null
        };

        return this.each(function () {
            var opt = $.extend({}, defaults, options);
            var self = $(this);
            if (opt.event) {
                self.on(opt.event, function (ex) {
                    opt.ex = ex;
                    onRipple(self, opt);
                });
            } else {
                onRipple(self, opt);
            }
        });
    }

    /**
     * 涟漪效果具体实现
     * 
     * @param {any} self
     * @param {any} opt
     */
    function onRipple(self, opt) {
        var offset = self.offset(), // 偏移
            d,    // 涟漪宽高
            x,    // 坐标x
            y,    // 坐标y
            taint; // 涟漪对象

        self.removeClass('ripple-on');

        taint = self.children('.taint');

        if (!taint.length) {  // 是否需要重新添加
            taint = $('<span class="taint"></span>');
            self.prepend(taint);
        }

        d = Math.max(self.outerWidth(), self.outerHeight());  // 定义宽高

        if (opt.left !== null && opt.top !== null) { // 定义位置
            x = opt.left - d / 2;
            y = opt.top - d / 2;
        }
        else if (opt.ex) {
            x = opt.ex.pageX - offset.left - d / 2;
            y = opt.ex.pageY - offset.top - d / 2;
        }
        else {
            x = self.outerWidth() / 2 - d / 2;
            y = self.outerHeight() / 2 - d / 2;
        }

        taint.css({
            background: opt.color,
            width: d + 'px',
            height: d + 'px',
            left: x + 'px',
            top: y + 'px'
        });

        self.addClass('ripple-on');
    }

})(jQuery);