(function ($) {
    $.popup = function (opt) {
        $.ajax({
            url: opt.url,
            data: opt.data,
            dataType: 'html',
            success: function (html) {
                $("<div class='modal_popup'>"+html+"</div>")
                    .appendTo('body')
                    .modal({
                        escapeClose: false,
                        clickClose: false,
                        closeExisting: false
                    })
                    .addClass("animated jackInTheBox faster")
                    .on($.modal.CLOSE, function (event, modal) {
                        if (opt.close) opt.close(modal.result);

                        modal.elm.remove();
                    });
            },
            error: function (res) {
                if (opt.error) opt.error(res.responseText);
                else {
                    alert("error");
                }
                throw "popup_error";
            }
        });
    };
})(jQuery);