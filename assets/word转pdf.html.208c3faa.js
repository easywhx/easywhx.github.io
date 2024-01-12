import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,a as n,b as a,d as e,f as t,r as l}from"./app.4d667c68.js";const c={},u=t(`<h1 id="word\u8F6Cpdf" tabindex="-1"><a class="header-anchor" href="#word\u8F6Cpdf" aria-hidden="true">#</a> word\u8F6Cpdf</h1><h4 id="\u65B9\u6848\u4E00\u3001\u4F7F\u7528docx4j-\u5B9E\u73B0word\u8F6Cpdf" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848\u4E00\u3001\u4F7F\u7528docx4j-\u5B9E\u73B0word\u8F6Cpdf" aria-hidden="true">#</a> \u65B9\u6848\u4E00\u3001\u4F7F\u7528docx4j \u5B9E\u73B0word\u8F6Cpdf</h4><h5 id="_1-\u5F15\u5165maven\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1-\u5F15\u5165maven\u4F9D\u8D56" aria-hidden="true">#</a> 1.\u5F15\u5165maven\u4F9D\u8D56</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>		&lt;dependency&gt;
            &lt;groupId&gt;org.docx4j&lt;/groupId&gt;
            &lt;artifactId&gt;docx4j&lt;/artifactId&gt;
            &lt;version&gt;6.1.2&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.docx4j&lt;/groupId&gt;
            &lt;artifactId&gt;docx4j-export-fo&lt;/artifactId&gt;
            &lt;version&gt;8.1.1&lt;/version&gt;
        &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 2.\u4EE3\u7801\u5B9E\u73B0</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import lombok.extern.slf4j.Slf4j;
import org.docx4j.Docx4J;
import org.docx4j.fonts.IdentityPlusMapper;
import org.docx4j.fonts.Mapper;
import org.docx4j.fonts.PhysicalFonts;
import org.docx4j.openpackaging.packages.WordprocessingMLPackage;

import java.io.File;
import java.io.FileOutputStream;

/**
 * @description: word\u6587\u6863\u64CD\u4F5Cutils
 * @author: wzg
 * @create: 2021-12-16
 **/
@Slf4j
public class WordToPdf {


    public static void main(String[] args) throws Exception {
        WordToPdf.convertDocxToPdf(&quot;/data/doc/2021-12-17/word1639704593928.doc&quot;,&quot;/data/pdf/2021-12-17/pdf1639704593928.pdf&quot;);
    }


    /**
     * doc\u6587\u6863\u8F6C\u6362\u4E3APDF
     *
     * @param docxPath word\u6587\u6863\u8DEF\u5F84
     * @param pdfPath PDF\u6587\u6863\u5B58\u50A8\u8DEF\u5F84
     * @throws Exception 
     */
    public static void convertDocxToPdf(String docxPath, String pdfPath) throws Exception {

        FileOutputStream fileOutputStream = null;
        try {
            File docFile = new File(docxPath);
            File pdfFile = new File(pdfPath);
            WordprocessingMLPackage mlPackage = WordprocessingMLPackage.load(docFile);
            setFontMapper(mlPackage);
            fileOutputStream = new FileOutputStream(pdfFile);
            Docx4J.toPDF(mlPackage, fileOutputStream);
        }catch (Exception e){
            e.printStackTrace();
            log.error(&quot;doc\u6587\u6863\u8F6C\u6362\u4E3APDF\u5931\u8D25&quot;);
        }finally {
            fileOutputStream.flush();
            fileOutputStream.close();
        }
    }


    /**
     * \u5B57\u4F53\u8BBE\u7F6E
     * @param mlPackage
     * @throws Exception
     */
    private static void setFontMapper(WordprocessingMLPackage mlPackage) throws Exception {
        Mapper fontMapper = new IdentityPlusMapper();
        //fontMapper.put(&quot;\u96B6\u4E66&quot;, PhysicalFonts.get(&quot;LiSu&quot;));
        fontMapper.put(&quot;\u5B8B\u4F53&quot;, PhysicalFonts.get(&quot;SimSun&quot;));
        fontMapper.put(&quot;\u5B8B\u4F53\uFF08\u4E2D\u6587\u6B63\u6587\uFF09&quot;, PhysicalFonts.get(&quot;SimSun&quot;));
        //fontMapper.put(&quot;\u5FAE\u8F6F\u96C5\u9ED1&quot;, PhysicalFonts.get(&quot;Microsoft Yahei&quot;));
        fontMapper.put(&quot;\u9ED1\u4F53&quot;, PhysicalFonts.get(&quot;SimHei&quot;));
        //fontMapper.put(&quot;\u6977\u4F53&quot;, PhysicalFonts.get(&quot;KaiTi&quot;));
        fontMapper.put(&quot;\u7B49\u7EBF&quot;, PhysicalFonts.get(&quot;SimSun&quot;));
        fontMapper.put(&quot;\u7B49\u7EBF Light&quot;, PhysicalFonts.get(&quot;SimSun&quot;));
        fontMapper.put(&quot;\u65B0\u5B8B\u4F53&quot;, PhysicalFonts.get(&quot;NSimSun&quot;));
        //fontMapper.put(&quot;\u534E\u6587\u884C\u6977&quot;, PhysicalFonts.get(&quot;STXingkai&quot;));
        //fontMapper.put(&quot;\u534E\u6587\u4EFF\u5B8B&quot;, PhysicalFonts.get(&quot;STFangsong&quot;));
        //fontMapper.put(&quot;\u5B8B\u4F53\u6269\u5C55&quot;, PhysicalFonts.get(&quot;simsun-extB&quot;));
        fontMapper.put(&quot;\u4EFF\u5B8B&quot;, PhysicalFonts.get(&quot;FangSong&quot;));
        //fontMapper.put(&quot;\u4EFF\u5B8B_GB2312&quot;, PhysicalFonts.get(&quot;FangSong_GB2312&quot;));
        //fontMapper.put(&quot;\u5E7C\u5706&quot;, PhysicalFonts.get(&quot;YouYuan&quot;));
        //fontMapper.put(&quot;\u534E\u6587\u5B8B\u4F53&quot;, PhysicalFonts.get(&quot;STSong&quot;));
        //fontMapper.put(&quot;\u534E\u6587\u4E2D\u5B8B&quot;, PhysicalFonts.get(&quot;STZhongsong&quot;));
        //\u89E3\u51B3\u5B8B\u4F53\uFF08\u6B63\u6587\uFF09\u548C\u5B8B\u4F53\uFF08\u6807\u9898\uFF09\u7B49\u7684\u4E71\u7801\u95EE\u9898
        PhysicalFonts.put(&quot;PMingLiU&quot;, PhysicalFonts.get(&quot;SimSun&quot;));
        PhysicalFonts.put(&quot;\u65B0\u7D30\u660E\u9AD4&quot;, PhysicalFonts.get(&quot;SimSun&quot;));


        mlPackage.setFontMapper(fontMapper);
    }


}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-docx4j\u90E8\u7F72linux\u4E71\u7801\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_3-docx4j\u90E8\u7F72linux\u4E71\u7801\u5904\u7406" aria-hidden="true">#</a> 3.docx4j\u90E8\u7F72linux\u4E71\u7801\u5904\u7406</h5><p>3.1 \u590D\u5236windows\u7684C:\\Windows\\Fonts\\\u4E0B\u7684\u6240\u6709\u5B57\u4F53\u5E93\uFF0C\u653E\u5728\u684C\u9762\u7684fonts\u6587\u4EF6\u5939\u91CC\u3002</p><p>3.2 \u4F7F\u7528xshell \u5C06\u684C\u9762\u4E0A\u7684fonts\u6587\u4EF6\u5939\u91CC\u7684\u5B57\u4F53\u5E93\uFF0C\u5168\u90E8\u653E\u5165 /usr/share/fonts/chinese \u6587\u4EF6\u5939\u4E0B\uFF0C\u5982\u679C\u6587\u4EF6\u5939\u4E0D\u5B58\u5728\uFF0C\u624B\u52A8\u521B\u5EFA\u3002</p><p>3.3 \u7ED9\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u6388\u6743</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chmod 775 /usr/share/fonts/chinese
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.4 \u5EFA\u7ACB\u5B57\u4F53\u7F13\u5B58\u5E93</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/share/fonts/chinese
 
sudo mkfontscale
 
sudo mkfontdir
 
sudo fc-cache -fv

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),d={href:"https://blog.csdn.net/qq_21699537/article/details/125645565",target:"_blank",rel:"noopener noreferrer"},r={href:"https://blog.csdn.net/qq_42182610/article/details/104518028/",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>\u53C2\u8003\u6587\u7AE0\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Mapper mapper = new IdentityPlusMapper();
Map&lt;String, PhysicalFont&gt; fontMapper = mapper.getFontMappings();
fontMapper.put(&quot;\u6977\u4F53&quot;, PhysicalFonts.getPhysicalFonts().get(&quot;KaiTi&quot;));
StopWatch stopWatch = new StopWatch();
stopWatch.start(&quot;task3&quot;);
String baseURL = System.getProperty(&quot;user.dir&quot;);
WordprocessingMLPackage wordMLPackage = WordprocessingMLPackage.load(new File(baseURL+&quot;/test.docx&quot;));
wordMLPackage.setFontMapper(mapper);
Docx4J.toPDF(wordMLPackage, new FileOutputStream(new File(baseURL+&quot;/helloworld.pdf&quot;)));
System.out.println(stopWatch.currentTaskName());
stopWatch.stop();
System.out.println(stopWatch.getLastTaskTimeMillis());

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u65B9\u6848\u4E8C\u3001-\u4F7F\u7528com-aspose-words\u5C06word\u8F6C\u6362pdf\u7B49" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848\u4E8C\u3001-\u4F7F\u7528com-aspose-words\u5C06word\u8F6C\u6362pdf\u7B49" aria-hidden="true">#</a> \u65B9\u6848\u4E8C\u3001 \u4F7F\u7528com.aspose.words\u5C06word\u8F6C\u6362PDF\u7B49</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WordToPdf</span> <span class="token punctuation">{</span>
      <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">WordToPdf</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
    <span class="token doc-comment comment">/** * \u83B7\u53D6license * * @return */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">getLicense</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> result <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u51ED\u8BC1</span>
            <span class="token class-name">String</span> licenseStr <span class="token operator">=</span>
                    <span class="token string">&quot;&lt;License&gt;\\n&quot;</span>
                    <span class="token operator">+</span> <span class="token string">&quot; &lt;Data&gt;\\n&quot;</span>
                    <span class="token operator">+</span> <span class="token string">&quot; &lt;Products&gt;\\n&quot;</span>
                    <span class="token operator">+</span> <span class="token string">&quot; &lt;Product&gt;Aspose.Total for Java&lt;/Product&gt;\\n&quot;</span>
                    <span class="token operator">+</span> <span class="token string">&quot; &lt;Product&gt;Aspose.Words for Java&lt;/Product&gt;\\n&quot;</span>
                    <span class="token operator">+</span> <span class="token string">&quot; &lt;/Products&gt;\\n&quot;</span>
                    <span class="token operator">+</span> <span class="token string">&quot; &lt;EditionType&gt;Enterprise&lt;/EditionType&gt;\\n&quot;</span>
                    <span class="token operator">+</span> <span class="token string">&quot; &lt;SubscriptionExpiry&gt;20991231&lt;/SubscriptionExpiry&gt;\\n&quot;</span>
                    <span class="token operator">+</span> <span class="token string">&quot; &lt;LicenseExpiry&gt;20991231&lt;/LicenseExpiry&gt;\\n&quot;</span>
                    <span class="token operator">+</span> <span class="token string">&quot; &lt;SerialNumber&gt;8bfe198c-7f0c-4ef8-8ff0-acc3237bf0d7&lt;/SerialNumber&gt;\\n&quot;</span>
                    <span class="token operator">+</span> <span class="token string">&quot; &lt;/Data&gt;\\n&quot;</span>
                    <span class="token operator">+</span> <span class="token string">&quot; &lt;Signature&gt;sNLLKGMUdF0r8O1kKilWAGdgfs2BvJb/2Xp8p5iuDVfZXmhppo+d0Ran1P9TKdjV4ABwAgKXxJ3jcQTqE/2IRfqwnPf8itN8aFZlV3TJPYeD3yWE7IT55Gz6EijUpC7aKeoohTb4w2fpox58wWoF3SNp6sK6jDfiAUGEHYJ9pjU=&lt;/Signature&gt;\\n&quot;</span>
                    <span class="token operator">+</span> <span class="token string">&quot;&lt;/License&gt;&quot;</span><span class="token punctuation">;</span>
            <span class="token class-name">InputStream</span> license <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span>
                    licenseStr<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">License</span> asposeLic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">License</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            asposeLic<span class="token punctuation">.</span><span class="token function">setLicense</span><span class="token punctuation">(</span>license<span class="token punctuation">)</span><span class="token punctuation">;</span>
            result <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Word \u8F6C\u6362  Pdf
     * <span class="token keyword">@param</span> <span class="token parameter">inPath</span>
     * <span class="token keyword">@param</span> <span class="token parameter">outPath</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">doc2pdf</span><span class="token punctuation">(</span><span class="token class-name">String</span> inPath<span class="token punctuation">,</span> <span class="token class-name">String</span> outPath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">getLicense</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u9A8C\u8BC1License \u82E5\u4E0D\u9A8C\u8BC1\u5219\u8F6C\u5316\u51FA\u7684pdf\u6587\u6863\u4F1A\u6709\u6C34\u5370\u4EA7\u751F</span>
             logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;doc2pdf,\u89E3\u6790\u6C34\u5370\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                 <span class="token keyword">return</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">long</span> old <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>outPath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u65B0\u5EFA\u4E00\u4E2Apdf\u6587\u6863</span>
            <span class="token class-name">FileOutputStream</span> os <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Document</span> doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span>inPath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Address\u662F\u5C06\u8981\u88AB\u8F6C\u5316\u7684word\u6587\u6863</span>
            
            logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F00\u59CB\u89E3\u6790word\u6587\u6863&quot;</span><span class="token operator">+</span>inPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            doc<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>os<span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>aspose<span class="token punctuation">.</span>words<span class="token punctuation">.</span></span>SaveFormat</span><span class="token punctuation">.</span><span class="token constant">PDF</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u5168\u9762\u652F\u6301DOC, DOCX,</span>
                                                            <span class="token comment">// OOXML, RTF HTML,</span>
                                                            <span class="token comment">// OpenDocument,</span>
                                                            <span class="token comment">// PDF, EPUB, XPS,</span>
                                                            <span class="token comment">// SWF \u76F8\u4E92\u8F6C\u6362</span>
            <span class="token keyword">long</span> now <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            os<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F6C\u6362\u6210\u529F,\u5171\u8017\u65F6\uFF1A&quot;</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token punctuation">(</span>now <span class="token operator">-</span> old<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000.0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\u79D2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;doc2pdf&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;1082&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u8F6C\u6362\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5&quot;</span><span class="token punctuation">,</span> <span class="token class-name">MsgLevel<span class="token punctuation">.</span>D</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m={href:"https://blog.csdn.net/qq_31481585/article/details/106934639",target:"_blank",rel:"noopener noreferrer"};function k(b,g){const s=l("ExternalLinkIcon");return o(),p("div",null,[u,n("p",null,[n("a",d,[a("\u53C2\u8003\u6587\u7AE0-docx4j\u5B9E\u73B0word\u3001pdf\u7B49\u4E92\u8F6C"),e(s)])]),n("p",null,[n("a",r,[a("Java\u5173\u4E8Eword\u8F6Cpdf\u5DE5\u5177\u65B9\u6CD5\u7684\u51E0\u79CD\u89E3\u51B3\u65B9\u6848\u548C\u6211\u9047\u5230\u4E00\u4E9B\u95EE\u9898\uFF08html\u4E2D\u8F6C\u3001jacob\u3001Docx4j\uFF09"),e(s)])]),v,n("p",null,[n("a",m,[a("\u53C2\u8003\u94FE\u63A5"),e(s)])])])}const h=i(c,[["render",k],["__file","word\u8F6Cpdf.html.vue"]]);export{h as default};
