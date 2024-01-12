import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as t}from"./app.4d667c68.js";const a={},i=t(`<h1 id="docx\u548Cdoc\u4E92\u8F6C" tabindex="-1"><a class="header-anchor" href="#docx\u548Cdoc\u4E92\u8F6C" aria-hidden="true">#</a> docx\u548Cdoc\u4E92\u8F6C</h1><h3 id="\u65B9\u5F0F1-\u5229\u7528aspose\u8FDB\u884C\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F1-\u5229\u7528aspose\u8FDB\u884C\u8F6C\u6362" aria-hidden="true">#</a> \u65B9\u5F0F1\uFF1A\u5229\u7528aspose\u8FDB\u884C\u8F6C\u6362</h3><p>Jar\u5305\u5730\u5740\uFF1A</p><p>\u94FE\u63A5\uFF1Ahttps://pan.baidu.com/s/1pwJ-gwghInoU-_M60ZF_YQ \u63D0\u53D6\u7801\uFF1A3eek</p><div class="language-// ext-// line-numbers-mode"><pre class="language-//"><code>private static InputStream convertDocIs2DocxIs(InputStream docInputStream) throws IOException {
byte[] docBytes = FileCopyUtils.copyToByteArray(docInputStream);
byte[] docxBytes = convertDocStream2docxStream(docBytes);
return new ByteArrayInputStream(docxBytes);
}
// \u5C06doc\u5B57\u8282\u6570\u7EC4\u8F6C\u6362\u4E3Adocx\u5B57\u8282\u6570\u7EC4
private static byte[] convertDocStream2docxStream(byte[] arrays) {
byte[] docxBytes = new byte[1];
if (arrays != null &amp;&amp; arrays.length &gt; 0) {
try (
ByteArrayOutputStream os = new ByteArrayOutputStream();
InputStream sbs = new ByteArrayInputStream(arrays)
) {
com.aspose.words.Document doc = new com.aspose.words.Document(sbs);
doc.save(os, SaveFormat.DOCX);
docxBytes = os.toByteArray();
} catch (Exception e) {
System.out.println(&quot;\u51FA\u9519\u5566&quot;);
}
}
return docxBytes;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5907\u6CE8\uFF1A\u8BE5\u65B9\u5F0F\u540C\u6837\u53EF\u4EE5\u5B9E\u73B0\u5C06docx\u8F6C\u6362\u4E3Adoc\u6587\u4EF6\uFF0C\u53EA\u9700\u6307\u5B9ASaveFormat\u7684\u683C\u5F0F\u3002</p><p>\u65B9\u5F0F2\uFF1Aspire.doc.free \u9996\u5148\u5BFC\u5165\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>e-iceblue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spire.doc.free<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.9.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Document document = new Document();
document.loadFromFile(&quot;\u6E90\u6587\u4EF6\u8DEF\u5F84&quot;);
document.saveToFile(&quot;\u76EE\u6807\u6587\u4EF6\u7684\u8DEF\u5F84&quot;, FileFormat.Docx);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u5F0F3\uFF1A\u540C\u6837\u53EF\u4EE5\u4F7F\u7528JodConverter\u8F6C\u6362 jod\u53EF\u4EE5\u5B9E\u73B0\u591A\u79CD\u6587\u6863\u4E4B\u95F4\u7684\u76F8\u4E92\u8F6C\u6362\uFF0C\u5177\u4F53\u6848\u4F8B\u767E\u5EA6\u4E0A\u6709\u5F88\u591A\u3002</p><p>\u65B9\u5F0F4\uFF1A\u5229\u7528documents4j\u5B9E\u73B0 \u9996\u5148\u662F\u4F9D\u8D56</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;dependency&gt;
     &lt;groupId&gt;com.documents4j&lt;/groupId&gt;
     &lt;artifactId&gt;documents4j-local&lt;/artifactId&gt;
     &lt;version&gt;1.0.3&lt;/version&gt;
 &lt;/dependency&gt;
 &lt;dependency&gt;
     &lt;groupId&gt;com.documents4j&lt;/groupId&gt;
     &lt;artifactId&gt;documents4j-transformer-msoffice-word&lt;/artifactId&gt;
     &lt;version&gt;1.0.3&lt;/version&gt;
 &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static void convert(String fileType) {
    File inputWord = new File(&quot;D:\\\\test_workspace\\\\testdemo\\\\src\\\\main\\\\resources\\\\targetFile.docx&quot;);
    File outputFile = new File(&quot;D:\\\\zzz.doc&quot;);
    try (InputStream docxInputStream = new FileInputStream(inputWord);
         OutputStream outputStream = new FileOutputStream(outputFile)) {
        IConverter converter = LocalConverter.builder().build();
        boolean flag = false;
        if(&quot;docx&quot;.equals(fileType)){// docx\u8F6Cdoc
            flag = converter.convert(docxInputStream).as(DocumentType.DOCX).to(outputStream).as(DocumentType.DOC).execute();
        } else if (&quot;doc&quot;.equals(fileType)){ //
            flag = converter.convert(docxInputStream).as(DocumentType.DOC).to(outputStream).as(DocumentType.PDF).execute();
        }
        if (flag) { 
            converter.shutDown();
        }
        System.out.println(&quot;\u8F6C\u6362\u6210\u529F&quot;);
    } catch (Exception e) {
        e.printStackTrace();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d=[i];function l(c,o){return n(),s("div",null,d)}const p=e(a,[["render",l],["__file","docx\u548Cdoc\u4E92\u8F6C.html.vue"]]);export{p as default};
