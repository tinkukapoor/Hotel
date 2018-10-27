var docuManager = {
    search: function (query) {
        var $list = $('div.list-group');
        if (query === 'All') {
            $list.children().show();
        } else {
            $list.children().hide();
            $list.find('a[data-plugin="' + query + '"]').show();
        }
    },

    updateDocLinks: function (newHash) {
        var $docLinks = $('ul li a[data-role="docLink"]');
        $docLinks.each(function () {
            var href = $(this).attr('href'),
                hashPos = href.indexOf('#');
            if (hashPos > -1) {
                $(this).attr('href', href.substr(0, hashPos) + newHash);
            } else {
                $(this).attr('href', href + newHash);
            }
        });
    }
};

$(document).ready(function () {
    var pluginName;
    if (window.location.hash) {
        pluginName = $('ul[aria-labelledby="plugingName"] a[href="' + window.location.hash + '"]').text();
        $('button#plugingName span[role="label"]').html(pluginName + ' &nbsp;');
        docuManager.search(pluginName);
        docuManager.updateDocLinks(window.location.hash);
    }
    $('a[role="menuitem"]').on('click', function (e) {
        var $item = $(this),
            value = $item.text(),
            $dropdown = $item.closest('div.dropdown'),
            $label = $dropdown.find('button span[role="label"]');
        $label.text(value);
        docuManager.search(value);
        docuManager.updateDocLinks($item.attr('href'));
    });
    //in use by version 0.5
    $(".edit-button").on("click", function () {
        var win;
        localStorage.setItem("Gijgo.TempCode", $(this).parent().find("code").text());
        win = window.open("../../LiveEdit", '_blank');
        win.focus();
    });
});