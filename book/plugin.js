require(["gitbook"], function(gitbook) {

    // Load
    gitbook.events.bind("page.change", function(e, config) {
        var cfg = config.alerts;

        bqs = $('blockquote');
        bqs.each(function(index) {

            for (key in styleMapping) {
                htmlStr = $(this).html()

                if (htmlStr.indexOf(key) > 0) {
                    // remove key from text
                    htmlStr = htmlStr.replace(key, iconMapping[key]);
                    $(this).html(htmlStr);

                    // set style
                    $(this).css(styleMapping[key]);
                    $(this).find('strong').first().css(titleMapping[key]);
                }
            }

        })
    });
});
