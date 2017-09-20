 jQuery(document).ready(function($) {
 
    $(".scroll a, .navbar-brand, .gototop,.explore").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
    $(".scroll li").removeClass('active');
    $(this).parents('li').toggleClass('active');
    });
    });






var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });

//app 1
function app1() {
    console.log("app1");

    //generate random number
    var a = Math.random() * 10000000000;
    var b = a.toFixed();
    var sum = 0;
    // for (var i=0; i<b.length; i++){
    //     sum += parseInt(b.charAt(i));
    // }
    // while(sum > 10) {
    //     var temp = 0;
    //     b = sum.toFixed();
    //     for (var i=0; i<b.length; i++){
    //         temp += parseInt(b.charAt(i));
    //     }
    //     sum = temp;
    // }
    // if (sum > 6) {
    //     sum = sum % 6;
    // }
    var c = (b % 6) + 1;
    sum = c;
    console.log(sum);

    //init modal
    $("#modal_title").text("Random number between 1 and 6");
    $(".modal-body #container").empty();
    $(".modal-body #container").append("<p class='simple-text'>"+sum+"</p>");

    $('#app_modal').modal({
        backdrop: "static",
        keyboard: "true"
    });
}

//app 2
var current_index = 0;
var max_seq = 6; //defines how many pictures to be shown
function app2(){
    console.log("app2");

    //generate elements for album
    $("#modal_title").text("Album");
    $(".modal-body #container").empty();
    var img_url = 'images/album/'+(current_index % max_seq + 1)+'.jpg';
    var html = 
        '<span onclick="backward();" class="big-text noselect" style="position: absolute; left: 5%; top:50%; cursor: pointer;"><</span>'+
        '<figure class="effect-hover-1">'+
            '<img id="album_img" src="'+img_url+'" alt="img01" width="80%" style="position: relative; left:10%; opacity:0.8;"/>'+
        '</figure>'+
        '<span onclick="forward();" class="big-text noselect" style="position: absolute; left: 91%; top:50%; cursor: pointer;">></span>';
    $(".modal-body #container").append(html);
    
    $('#app_modal').modal({
        backdrop: "static",
        keyboard: "true"
    });
}

function forward() {
    current_index++;
    console.log("forward"+(current_index % max_seq + 1));
    var img_url = 'images/album/'+(current_index % max_seq + 1)+'.jpg';
    $("#album_img").attr("src", img_url);
}

function backward() {
    current_index--;
    if (current_index < 0){
        current_index = max_seq * max_seq - 1;
    }
    console.log("backward"+(current_index % max_seq + 1));
    var img_url = 'images/album/'+(current_index % max_seq + 1)+'.jpg';
    $("#album_img").attr("src", img_url);
}

//app 3
function app3(){
    console.log("app3");
    window.open("/minesweeper.html");
}

//app 4
function app4(){
    console.log("app4");
    window.open("/2048.html");
}

// //app 5
// function app4() {
//     console.log("app4");
//     var url = 'http://www.weather.com.cn/data/cityinfo/101280101.html';
//     $.ajax({
//         url: 'http://www.weather.com.cn/data/cityinfo/101280101.html',
//         type: 'get',
//         dataType: "jsonp",
//         // jsonpCallback:"jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
//         success: function(data) {
//             console.log(data);
//         }
//     });
//     // html = "<div id=\"head\">head</div><div id=\"content\"><p><ul><li>item1</li><li>item2</li></ul></div>";         
//     // //取出属性id=content的div下的所有li下的内容，返回结果将是["item1", "item2"]  
//     // ret = new html_extractor(html).tag("div").attr("id", "content").tag("li").match();
//     // console.log(ret);
// }

function jsonpCallback(data) {
    console.log('in jsonpCallback');
}

/**
 * html SAX parse src code start
 */
var html_extractor = function(html)  
{  
    this.parser = new SimpleHtmlParser;  
    this.html  = html;  
    this.tags = [];  
    this.attrs = [];      
}  
html_extractor.prototype.tag = function(tag)  
{  
    this.tags.push(tag.toLowerCase());  
  
    return this;  
}  
html_extractor.prototype.attr = function(name, value)  
{  
    var len = this.tags.length - 1;  
    if (this.attrs[len] == undefined)this.attrs[len] = [];  
    this.attrs[len].push({name:name.toLowerCase(), value: value});  
    return this;  
}  
html_extractor.prototype.match = function(inner)  
{  
    var self = this;  
    var handler = function(){  
        this._tag_index = 0;  
        this._matched_tags = [];  
        this._matched = [];  
        this._result = "";  
        this.result = [];  
        this._all_matched = false;  
        for( var i = 0; i < self.tags.length; i++)this._matched[i] = false;  
        this.inner = true;  
        if (inner != undefined && inner != null)  
        {  
            this.inner = inner;  
        }  
  
    };  
    handler.prototype = {  
        startElement:   function (tag, attrs) {  
            this.tag_index++;  
            tag = tag.toLowerCase();  
            //air.trace("process tag:" + tag +  " " + this.tag_index);  
  
            if (this._all_matched )  
            {  
                this._result += get_start_tag(tag, attrs);  
                return;  
            }  
  
            for( var i = 0; i < this._matched.length; i++)  
            {  
                //air.trace(i + ":" + this._matched[i]);  
                if (!this._matched[i] )  
                {  
                    if (self.tags[i] == tag)  
                    {  
                        this._matched[i] = true;  
                        if (self.attrs[i] != undefined)  
                        {  
                            for(var n = 0; n < self.attrs[i].length; n++)  
                            {  
                                var attr = self.attrs[i][n];  
                                if (attr != undefined)  
                                {  
                                    if(attrs[attr.name] != attr.value)  this._matched[i] = false;  
                                };  
                            }  
                        }  
                        if (this._matched[i] )  
                        {  
                             //todo callback  
                             //air.trace(i + ":" + this._matched[i] + " first");  
                             this._matched_tags[this.tag_index] = i;  
                             if (i == self.tags.length -1)  
                             {  
                                 this._all_matched = true;  
                                 if (!this.inner) this._result += get_start_tag(tag, attrs);  
                             }  
                             return;  
                        }  
                    }  
  
                    if (!this._matched[i] ){break;}  
  
                }  
            }         
        },  
        endElement:     function (tag) {  
            tag = tag.toLowerCase();  
  
            if (this._matched_tags[this.tag_index] != undefined)  
            {  
                this._matched[this._matched_tags[this.tag_index]] = false;  
                if (this._all_matched)  
                {  
                    if (!this.inner)this._result += "</" + tag +">";  
                    this.result.push(this._result);  
                    this._result = "";  
                    this._all_matched = false;  
                }  
            }  
            else if (this._all_matched)  
            {  
                this._result += "</" + tag +">";  
            }  
            //air.trace("finished tag:" + tag +  " " + this.tag_index);  
  
            this.tag_index--;  
        },  
        characters:     function (s) { if(this._all_matched)this._result += s;},  
        comment:        function (s) {}  
    };  
    this.parser.contentHandler = new handler;  
  
    this.parser.parse(this.html);     
    //reset  
    this.tags = [];  
    this.attrs = [];  
    return this.parser.contentHandler.result;  
}  
function get_start_tag(tag, attrs)  
{  
    var ret = "<" + tag;  
    for (var key in attrs)  
    {  
        value = attrs[key];  
        ret += " " + key + "=\"" + value + "\"";  
  
    }  
    ret += ">";  
    return ret;  
}  
  
/** SimpleHtmlParser 
 * Original code by Erik Arvidsson, Mozilla Public License 
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js 
 */  
  
/* 
var handler ={ 
    startElement:   function (sTagName, oAttrs) {}, 
    endElement:     function (sTagName) {}, 
    characters:     function (s) {}, 
    comment:        function (s) {} 
}; 
*/  
  
function SimpleHtmlParser()  
{  
}  
  
SimpleHtmlParser.prototype = {  
  
    handler:    null,  
  
    // regexps  
  
    startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,  
    endTagRe:   /^<\/([^>\s]+)[^>]*>/m,  
    attrRe:     /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,  
  
    parse:  function (s, oHandler)  
    {  
        if (oHandler)  
            this.contentHandler = oHandler;  
  
        var i = 0;  
        var res, lc, lm, rc, index;  
        var treatAsChars = false;  
        var oThis = this;  
        while (s.length > 0)  
        {  
            // Comment  
            if (s.substring(0, 4) == "<!--")  
            {  
                index = s.indexOf("-->");  
                if (index != -1)  
                {  
                    this.contentHandler.comment(s.substring(4, index));  
                    s = s.substring(index + 3);  
                    treatAsChars = false;  
                }  
                else  
                {  
                    treatAsChars = true;  
                }  
            }  
  
            // end tag  
            else if (s.substring(0, 2) == "</")  
            {  
                if (this.endTagRe.test(s))  
                {  
                    lc = RegExp.leftContext;  
                    lm = RegExp.lastMatch;  
                    rc = RegExp.rightContext;  
  
                    lm.replace(this.endTagRe, function ()  
                    {  
                        return oThis.parseEndTag.apply(oThis, arguments);  
                    });  
  
                    s = rc;  
                    treatAsChars = false;  
                }  
                else  
                {  
                    treatAsChars = true;  
                }  
            }  
            // start tag  
            else if (s.charAt(0) == "<")  
            {  
                if (this.startTagRe.test(s))  
                {  
                    lc = RegExp.leftContext;  
                    lm = RegExp.lastMatch;  
                    rc = RegExp.rightContext;  
  
                    lm.replace(this.startTagRe, function ()  
                    {  
                        return oThis.parseStartTag.apply(oThis, arguments);  
                    });  
  
                    s = rc;  
                    treatAsChars = false;  
                }  
                else  
                {  
                    treatAsChars = true;  
                }  
            }  
  
            if (treatAsChars)  
            {  
                index = s.indexOf("<");  
                if (index == -1)  
                {  
                     this.contentHandler.characters(s);  
                    s = "";  
                }  
                else  
                {  
                    this.contentHandler.characters(s.substring(0, index));  
                    s = s.substring(index);  
                }  
            }  
  
            treatAsChars = true;  
        }  
    },  
  
    parseStartTag:  function (sTag, sTagName, sRest)  
    {  
        var attrs = this.parseAttributes(sTagName, sRest);  
        this.contentHandler.startElement(sTagName, attrs);  
    },  
  
    parseEndTag:    function (sTag, sTagName)  
    {  
        this.contentHandler.endElement(sTagName);  
    },  
  
    parseAttributes:    function (sTagName, s)  
    {  
        var oThis = this;  
        var attrs = {};  
        s.replace(this.attrRe, function (a0, a1, a2, a3, a4, a5, a6)  
        {  
            //attrs.push(oThis.parseAttribute(sTagName, a0, a1, a2, a3, a4, a5, a6));  
            attr = oThis.parseAttribute(sTagName, a0, a1, a2, a3, a4, a5, a6);  
            attrs[attr.name] = attr.value;  
        });  
        return attrs;  
    },  
  
    parseAttribute: function (sTagName, sAttribute, sName)  
    {  
        var value = "";  
        if (arguments[7])  
            value = arguments[8];  
        else if (arguments[5])  
            value = arguments[6];  
        else if (arguments[3])  
            value = arguments[4];  
  
        var empty = !value && !arguments[3];  
        return {name: sName.toLowerCase(), value: empty ? null : value};  
    }  
};  
/**
 * html SAX parse src code end
 */
