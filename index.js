// ==UserScript==
// @name         百度文库（wenku）在线下载PDF格式文件
// @namespace    http://ekozhan.com
// @version      0.1.6
// @description  百度文库文档页面打印PDF，chrome浏览器最好能安装一下 adblock 插件，下载后的pdf文件可以在 https://pdf2docx.com/zh/ 上转换成docx
// @author       eko.zhan, HelloCodeMing
// @match        *://wenku.baidu.com/view/*
// @grant        unsafeWindow
// @license      GPL-2.0
// @icon         https://www.baidu.com/cache/icon/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
    //等待3秒页面加载完毕后再单击阅读更多按钮
    window.setTimeout(function(){insert()}, 300);

    //insert print btn
    function insert(){
        if ($('#btnPrintStyle').length==0){
            $('head').append(['<style id="btnPrintStyle">',
                '.ez-btn{position:relative;border:1px solid #19A97B;border-radius: 3px;background: transparent;color:#19A97B;margin-left:10px;font-size: 14px;}',
                '.ez-btn:hover{border: 1px solid #0F6649;color:#0F6649;}',
                '.ez-btn[title]:hover:after {content: attr(_title);position: absolute;top: -4px;left: 105%;min-width: 100px;max-width: 300px; padding: 4px 10px;background: #000000;color: #ffffff;border-radius: 4px;text-align:left;z-index:2018;}',
                '.ez-panel{z-index:2018;display:none;position: absolute;width: 300px;font-size:14px;background: #ffffff;color: #19A97B;  border-radius: 4px;  border: 1px solid #19A97B;  padding: 6px;  margin: 2px;}',
                '#doc-header-test .doc-value{margin-right: 10px !important;padding-right: 10px;}',
                '</style>'].join(' '));
        }
        $('.qrHover').append('<button class="ez-btn">免费下载</button>');
        $('body').append([
            '<div class="ez-panel">',
            '常见问题：<br/>',
            '1、<a href="https://greasyfork.org/zh-CN/forum/discussion/46222/x" target="_blank">点击免费下载后，如何打印成pdf文件？</a>',
            '<br/>2、<a href="https://greasyfork.org/zh-CN/forum/discussion/44509/x" target="_blank">文字重叠重影该如何解决？</a>',
            '<br/>3、<a href="https://greasyfork.org/zh-CN/forum/discussion/47744/x" target="_blank">图片空白，或者图片只有一半的情况如何处理？</a>',
            '<br/>4、<a href="https://greasyfork.org/zh-CN/forum/discussion/46249/x" target="_blank">页数超过100页的文档该如何打印成pdf？</a>',
            '<br/>5、<a href="https://greasyfork.org/zh-CN/forum/discussion/47743/x" target="_blank">打印出来的pdf文件里文字断裂，或者图片表格上下页分开如何处理？</a>',
            '<div>'
        ].join(''));
        var t = null;
        $('.ez-btn').hover(function(){
            $('.ez-panel').css({
                top: ($('.ez-btn').offset().top) + 'px',
                left: ($('.ez-btn').offset().left+70) + 'px'
            }).show();
        }, function(){
            if (t) window.clearTimeout(t);
            t = window.setTimeout(function(){
                $('.ez-panel').hide();
            }, 10*1000);
        });
        $('.ez-btn').click(function(){
            prePrint();
        });
        $('body').mousedown(function(e){
            if (e.button==2){
                imgHandle();
            }
            return true;
        });
    }
    //main function
    function prePrint(){
        $('.ez-panel').remove();
        $('.moreBtn').click();
        $(".aside").remove();
        $("#doc #hd").remove();
        $(".crubms-wrap").remove();
        $(".user-bar").remove();
        $("#doc-header").remove();
        $(".reader-tools-bar-wrap").remove();
        $(".fix-searchbar-wrap").remove();
        $("#bottom-doc-list-8").remove();
        $(".ft").remove();
        $("#ft").remove();
        $("#docBubble").remove();
        $('.hd').remove();
        $('.wk-other-new-cntent').remove();
        $('#html-reader-go-more').remove();
        $('.new-wm').remove();
        $('#bottom-download').remove();
        $('#pay-page').remove();
        $('.banner-wrap').remove();
        $('#next_doc_box').remove();
        $('.high-quality-doc').remove();
        $('.new-ico-wkmember-free-doc').remove();
        $('.doc-tag-pay-normal').remove();
        $('.doc-tag-professional').remove();
        $('.doc-tag-pay-discount').remove();
        $('.doc-tag-ticket').remove();
        $("body").attr("margin", "auto");
        $(".bd").attr("style", "height:1262.879px");
        $('.reader-page').css({border: 0});
        $('.doc_bottom_wrap').remove();
        jQuery.fn.extend({remove: function(){return false;}});
        var _h = document.body.scrollHeight, _tmp=0;
        var _t = window.setInterval(function(){$(window).scrollTop(_tmp);_tmp=_tmp+700;_h = document.body.scrollHeight;if (_tmp>_h) {window.clearInterval(_t);doPrint();}}, 300);
    }

    /**
     * 图片处理，将 div background img 处理成 img 标签，利用 img clip:rect style 来处理图片
     * 暂时未找到 img clip:rect 的规律
     * //FIXME
     */
    function imgHandle(){
        $('div.reader-pic-item').each(function(i, item){
            var _style = $(item)[0].style;
            var _imgUrl = _style.backgroundImage.substring(5, _style.backgroundImage.length-2);

            var imgPanel = '<img src="' + _imgUrl + '"/>';
            $(item)[0].style.backgroundImage = null;

            var p = document.createElement('p');
            $($(item)[0].attributes).each(function(i, attr){
                $(p).attr(attr.nodeName, attr.nodeValue);
            });
            $(p).append(imgPanel);
            $(item).parent().html(p);
        });
    }

    /**
     * 调用浏览器打印
     */
    function doPrint() {
        imgHandle();
        window.setTimeout(function(){window.print();}, 3000);
    }
})();