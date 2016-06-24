/*----------------------------------------------
@ Name:模板引擎
@ Time: 2016/04/22
*/
(function($) {
    $.fn.tmeplate = function(json) {
        var pattern = /\{([^\x00-\xff]*\w*[:]*[=]*)\}(?!})/g;   //匹配{}
        var template = $(this).html()
        var thisob = $(this)[0]

        if (json.length) {   //数组处理
            var temphtml = "";
            var tempattr = ""
            var attarr = thisob.attributes;

            for (var i in attarr) {   //判断属性
                if (!isNaN(parseInt(i))) {    //判断有效属性
                    tempattr += " " + attarr[i].name + "='" + attarr[i].nodeValue + "'";   //拼接结构
                }
            }

            $.each(json, function(i, v) { 
                var temp = template.replace(pattern, function(match, key, value) {   //replace匹配方法时，参数含义1、要匹配的内容， 2、匹配后的结果　３、匹配出结果的位置
                    return v[key] ? v[key] : "";
                });
                temphtml += "<" + thisob.tagName + tempattr + ">" + temp + "</" + thisob.tagName + ">"
            })
            $(this).replaceWith(temphtml);
        } else {
            $(this).html(template.replace(pattern, function(match, key, value) {
                console.info(match, key, value, json[key]);

                return json[key] ? json[key] : "";
            }));
        }
    }
})(jQuery);