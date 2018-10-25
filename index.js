// ==UserScript==
// @name         百度文库（wenku）在线下载PDF格式文件
// @namespace    http://ekozhan.com
// @version      0.1.1
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
    window.setTimeout(function(){prePrint()}, 3000);
    //main function
    function prePrint(){
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
        var _t = window.setInterval(function(){$(window).scrollTop(_tmp);_tmp=_tmp+700;_h = document.body.scrollHeight;if (_tmp>_h) {window.clearInterval(_t);window.setTimeout(function(){window.print();}, 3000)}}, 300);
    }
})();