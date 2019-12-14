## 百度文库（wenku）在线下载为PDF格式文件
    百度文库文档页面打印PDF，chrome浏览器最好能安装一下 adblock 插件，下载后的pdf文件可以在 https://pdf2docx.com/zh/ 上转换成docx

### tampermonkey
[百度文库-wenku-在线下载为pdf格式文件](https://greasyfork.org/zh-CN/scripts/373334])


#### 2019.12.14 v0.1.8
* 修复下载白屏问题。

> 不知不觉又过了一年，直到今天看到邮箱里，有位网友反馈下载白屏的问题，登上油猴看到从9月份就有网友反馈类似问题。今年写了好一阵子 `vue`，还有些不适应 `jQuery` 了。

#### 2018.12.19 v0.1.7
* 感谢 [wpc001](https://greasyfork.org/zh-CN/forum/discussion/48999/x) 的反馈，移除宽屏上多余的dom元素

#### 2018.12.19 v0.1.6
* 修复部分图片无法打印的问题，原理 div background-image 重写为 img src，效果不理想，但至少保证这类文档的图片可以打印  

#### 2018.12.8 v0.1.5
* 总结网友的问题，列出常见问题集
* 将 __打印__ 按钮名称修改为 __免费下载__ 。

#### 2018.11.30 v0.1.2 
根据 [能否增加一个功能 Hua Chen](https://greasyfork.org/zh-CN/forum/discussion/46719/x) 的反馈，在百度文库页面增加打印按钮，是否下载成 pdf 的主动权交给用户。如图：
![](https://greasyfork.org/zh-CN/forum/uploads/editor/yc/cuxgjcyalupm.png "")

#### 2018.10.23 v0.1.1
* 修复反馈不能完整下载的问题，产生问题的原因是：
  * 页面未完全加载完成就单击了阅读更多按钮；
  * PPT页面是图片加载高度应该随着滚动条滚动而变化
