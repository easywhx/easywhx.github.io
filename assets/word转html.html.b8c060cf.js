import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,f as d}from"./app.4d667c68.js";const l={},s=d(`<h1 id="word\u8F6Chtml" tabindex="-1"><a class="header-anchor" href="#word\u8F6Chtml" aria-hidden="true">#</a> word\u8F6Chtml</h1><h2 id="\u4F7F\u7528docx4j\u751F\u6210-html-\u4E0D\u80FD\u8F6C\u6362doc\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528docx4j\u751F\u6210-html-\u4E0D\u80FD\u8F6C\u6362doc\u6587\u6863" aria-hidden="true">#</a> \u4F7F\u7528Docx4J\u751F\u6210 html(\u4E0D\u80FD\u8F6C\u6362doc\u6587\u6863)</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F7F\u7528maven\u5BFC\u5165docx4j\u5305

org.docx4j

docx4j

3.0.1

\u7B80\u5355\u7684\u6D4B\u8BD5\u8BBF\u6C42

public static void docxToHtml(String filepath, String outpath) throws Docx4JException, FileNotFoundException{

WordprocessingMLPackage wmp = WordprocessingMLPackage.load(new File(filepath));

Docx4J.toHTML(wmp, &quot;html/resources&quot;, &quot;resources&quot;, new FileOutputStream(new File(outpath)));

}

public static void main(String[] args) throws Exception{

DocToHtml.docxToHtml(&quot;test.docx&quot;, &quot;html/test.html&quot;);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[s];function c(a,o){return i(),n("div",null,t)}const m=e(l,[["render",c],["__file","word\u8F6Chtml.html.vue"]]);export{m as default};
