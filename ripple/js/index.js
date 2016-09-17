$.fn.ripple = function (options, options2) {
    var defaults = {
        color: '#2ad',
        event: 'click',
        left: null,
        top: null
    };

    var t = $.type(options);

    if (t == 'object') {  // 初始化
        return this.each(function () {
            var opt = $.extend({}, defaults, options);
            var self = $(this);

            self.on(opt.event, function (ex) {
                opt.ex = ex;
                onRipple(self, opt);
            });

        });
    }

    else if (t == 'string') { // 自定义触发
        var dict = {
            'ripple': function () {
                var opt = $.extend({}, defaults, options2);

                this.each(function () {
                    onRipple($(this), opt);
                });
            }
        };
        dict[options] && dict[options].call(this);
    }

    return this;
}

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

    if (!taint.width() && !taint.height()) { // 定义宽高
        d = Math.max(self.outerWidth(), self.outerHeight());
    }

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