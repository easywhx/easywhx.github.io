import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.4d667c68.js";const e={},p=t(`<h1 id="\u6574\u5408minio" tabindex="-1"><a class="header-anchor" href="#\u6574\u5408minio" aria-hidden="true">#</a> \u6574\u5408minio</h1><h2 id="docker-compose\u5B89\u88C5minio" tabindex="-1"><a class="header-anchor" href="#docker-compose\u5B89\u88C5minio" aria-hidden="true">#</a> docker-compose\u5B89\u88C5minio</h2><h3 id="\u521B\u5EFA\u6784\u5EFA\u6587\u4EF6docker-compose-minio-yml" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6784\u5EFA\u6587\u4EF6docker-compose-minio-yml" aria-hidden="true">#</a> \u521B\u5EFA\u6784\u5EFA\u6587\u4EF6docker-compose-minio.yml</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u53EF\u53C2\u8003 https://docs.min.io/docs/minio-docker-quickstart-guide.html</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">minio</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> minio/minio<span class="token punctuation">:</span>latest                                    <span class="token comment"># \u539F\u955C\u50CF\`minio/minio:latest\`</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> minio                                        <span class="token comment"># \u5BB9\u5668\u540D\u4E3A&#39;minio&#39;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped                                              <span class="token comment"># \u6307\u5B9A\u5BB9\u5668\u9000\u51FA\u540E\u7684\u91CD\u542F\u7B56\u7565\u4E3A\u59CB\u7EC8\u91CD\u542F\uFF0C\u4F46\u662F\u4E0D\u8003\u8651\u5728Docker\u5B88\u62A4\u8FDB\u7A0B\u542F\u52A8\u65F6\u5C31\u5DF2\u7ECF\u505C\u6B62\u4E86\u7684\u5BB9\u5668</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>                                                     <span class="token comment"># \u6570\u636E\u5377\u6302\u8F7D\u8DEF\u5F84\u8BBE\u7F6E,\u5C06\u672C\u673A\u76EE\u5F55\u6620\u5C04\u5230\u5BB9\u5668\u76EE\u5F55</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;./minio/data:/data&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;./minio/minio:/minio&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;./minio/config:/root/.minio&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>                                      <span class="token comment"># \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF,\u76F8\u5F53\u4E8Edocker run\u547D\u4EE4\u4E2D\u7684-e</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
      <span class="token key atrule">LANG</span><span class="token punctuation">:</span> en_US.UTF<span class="token punctuation">-</span><span class="token number">8</span>
      <span class="token key atrule">MINIO_PROMETHEUS_AUTH_TYPE</span><span class="token punctuation">:</span> <span class="token string">&quot;public&quot;</span>
      <span class="token key atrule">MINIO_ACCESS_KEY</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span>                        <span class="token comment"># \u767B\u5F55\u8D26\u53F7</span>
      <span class="token key atrule">MINIO_SECRET_KEY</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>                    <span class="token comment"># \u767B\u5F55\u5BC6\u7801</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> server /data  <span class="token punctuation">-</span><span class="token punctuation">-</span>console<span class="token punctuation">-</span>address &quot;<span class="token punctuation">:</span>9001&quot;
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;100m&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>                              <span class="token comment"># \u6620\u5C04\u7AEF\u53E3</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9001:9001&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;42330:42330&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u542F\u52A8\u5E76\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5E76\u8FD0\u884C" aria-hidden="true">#</a> \u542F\u52A8\u5E76\u8FD0\u884C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> docker-compose-minio.yml <span class="token parameter variable">-p</span> minio up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE" aria-hidden="true">#</a> \u8BBF\u95EE</h3><p>\u8BBF\u95EE\u5730\u5740\uFF1Aip\u5730\u5740:9001/minio \u767B\u5F55\u8D26\u53F7\u5BC6\u7801\uFF1Aroot/password</p><h3 id="\u9047\u5230\u7684\u76F8\u5173\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u7684\u76F8\u5173\u95EE\u9898" aria-hidden="true">#</a> \u9047\u5230\u7684\u76F8\u5173\u95EE\u9898</h3><p>1\u3001\u6587\u4EF6\u4E0A\u4F20API\u9ED8\u8BA4\u7AEF\u53E3\u53F7\u51B2\u7A81\uFF0C\u542F\u52A8\u65F6\u6DFB\u52A0\u5982\u4E0B\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server /data  <span class="token parameter variable">--address</span> <span class="token string">&quot;0.0.0.0:9023&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001minio\u63A7\u5236\u53F0\u7AEF\u53E3\u53F7\u51B2\u7A81\uFF0C\u542F\u52A8\u65F6\u6DFB\u52A0\u5982\u4E0B\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server /data  --console-address <span class="token string">&quot;:9001&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5F15\u5165\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u4F9D\u8D56" aria-hidden="true">#</a> \u5F15\u5165\u4F9D\u8D56</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--\u6574\u5408minio\u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20\u548C\u4E0B\u8F7D--&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.minio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>minio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>7.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DFB\u52A0\u914D\u7F6E\u5C5E\u6027\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u914D\u7F6E\u5C5E\u6027\u7C7B" aria-hidden="true">#</a> \u6DFB\u52A0\u914D\u7F6E\u5C5E\u6027\u7C7B</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wanhongxu<span class="token punctuation">.</span>learning<span class="token punctuation">.</span>minio<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;minio&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MinioProperties</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * minio\u5730\u5740+\u7AEF\u53E3\u53F7
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> url<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * minio\u7528\u6237\u540D
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> accessKey<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * minio\u5BC6\u7801
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> secretKey<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6587\u4EF6\u6876\u7684\u540D\u79F0
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> bucketName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539application-yml\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539application-yml\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539application.yml\u914D\u7F6E</h2><p>\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">minio</span><span class="token punctuation">:</span>
  <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.159.128<span class="token punctuation">:</span><span class="token number">9023</span>
  <span class="token key atrule">accessKey</span><span class="token punctuation">:</span> V84VRTVEV0UJ5L6CYDM3
  <span class="token key atrule">secretKey</span><span class="token punctuation">:</span> AzSPnfU8ze+FMTr9Ch3ah2G6eaHL39jARLUE+6QE
  <span class="token key atrule">bucketName</span><span class="token punctuation">:</span> test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFAminio\u6587\u4EF6\u4E0A\u4F20\u4E0B\u8F7D\u5DE5\u5177\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAminio\u6587\u4EF6\u4E0A\u4F20\u4E0B\u8F7D\u5DE5\u5177\u7C7B" aria-hidden="true">#</a> \u521B\u5EFAminio\u6587\u4EF6\u4E0A\u4F20\u4E0B\u8F7D\u5DE5\u5177\u7C7B</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wanhongxu<span class="token punctuation">.</span>learning<span class="token punctuation">.</span>minio<span class="token punctuation">.</span>util</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>wanhongxu<span class="token punctuation">.</span>learning<span class="token punctuation">.</span>minio<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">MinioProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>minio<span class="token punctuation">.</span></span><span class="token class-name">MinioClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>minio<span class="token punctuation">.</span></span><span class="token class-name">ObjectStat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>minio<span class="token punctuation">.</span></span><span class="token class-name">PutObjectOptions</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>minio<span class="token punctuation">.</span>messages<span class="token punctuation">.</span></span><span class="token class-name">Bucket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">SneakyThrows</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>tomcat<span class="token punctuation">.</span>util<span class="token punctuation">.</span>http<span class="token punctuation">.</span>fileupload<span class="token punctuation">.</span></span><span class="token class-name">IOUtils</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>multipart<span class="token punctuation">.</span></span><span class="token class-name">MultipartFile</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PostConstruct</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">URLEncoder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MinioUtil</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MinioProperties</span> minioProperties<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">MinioClient</span> minioClient<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@PostConstruct</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            minioClient <span class="token operator">=</span> <span class="token class-name">MinioClient</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">endpoint</span><span class="token punctuation">(</span>minioProperties<span class="token punctuation">.</span><span class="token function">getUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">credentials</span><span class="token punctuation">(</span>minioProperties<span class="token punctuation">.</span><span class="token function">getAccessKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> minioProperties<span class="token punctuation">.</span><span class="token function">getSecretKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u521D\u59CB\u5316minio\u914D\u7F6E\u5F02\u5E38: \u3010{}\u3011&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * \u5224\u65AD bucket\u662F\u5426\u5B58\u5728
     *
     * <span class="token keyword">@param</span> <span class="token parameter">bucketName</span>:
     *            \u6876\u540D
     * <span class="token keyword">@return</span>: boolean
     * <span class="token keyword">@date</span> : 2020/8/16 20:53
     */</span>
    <span class="token annotation punctuation">@SneakyThrows</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">bucketExists</span><span class="token punctuation">(</span><span class="token class-name">String</span> bucketName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> minioClient<span class="token punctuation">.</span><span class="token function">bucketExists</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u521B\u5EFA bucket
     *
     * <span class="token keyword">@param</span> <span class="token parameter">bucketName</span>:
     *            \u6876\u540D
     * <span class="token keyword">@return</span>: void
     * <span class="token keyword">@date</span> : 2020/8/16 20:53
     */</span>
    <span class="token annotation punctuation">@SneakyThrows</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">createBucket</span><span class="token punctuation">(</span><span class="token class-name">String</span> bucketName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> isExist <span class="token operator">=</span> minioClient<span class="token punctuation">.</span><span class="token function">bucketExists</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isExist<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            minioClient<span class="token punctuation">.</span><span class="token function">makeBucket</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>



    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u5168\u90E8bucket
     *
     * <span class="token keyword">@param</span> :
     * <span class="token keyword">@return</span>: java.util.List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>io.minio.messages.Bucket</span><span class="token punctuation">&gt;</span></span>
     * <span class="token keyword">@date</span> : 2020/8/16 23:28
     */</span>
    <span class="token annotation punctuation">@SneakyThrows</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Bucket</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAllBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> minioClient<span class="token punctuation">.</span><span class="token function">listBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * \u6587\u4EF6\u4E0A\u4F20
     *
     * <span class="token keyword">@param</span> <span class="token parameter">bucketName</span>:
     *            \u6876\u540D
     * <span class="token keyword">@param</span> <span class="token parameter">fileName</span>:
     *            \u6587\u4EF6\u540D
     * <span class="token keyword">@param</span> <span class="token parameter">filePath</span>:
     *            \u6587\u4EF6\u8DEF\u5F84
     * <span class="token keyword">@return</span>: void
     * <span class="token keyword">@date</span> : 2020/8/16 20:53
     */</span>
    <span class="token annotation punctuation">@SneakyThrows</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token class-name">String</span> bucketName<span class="token punctuation">,</span> <span class="token class-name">String</span> fileName<span class="token punctuation">,</span> <span class="token class-name">String</span> filePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minioClient<span class="token punctuation">.</span><span class="token function">putObject</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">,</span> fileName<span class="token punctuation">,</span> filePath<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6587\u4EF6\u4E0A\u4F20
     *
     * <span class="token keyword">@param</span> <span class="token parameter">bucketName</span>:
     *            \u6876\u540D
     * <span class="token keyword">@param</span> <span class="token parameter">fileName</span>:
     *            \u6587\u4EF6\u540D
     * <span class="token keyword">@param</span> <span class="token parameter">stream</span>:
     *            \u6587\u4EF6\u6D41
     * <span class="token keyword">@return</span>: java.lang.String : \u6587\u4EF6url\u5730\u5740
     * <span class="token keyword">@date</span> : 2020/8/16 23:40
     */</span>
    <span class="token annotation punctuation">@SneakyThrows</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token class-name">String</span> bucketName<span class="token punctuation">,</span> <span class="token class-name">String</span> fileName<span class="token punctuation">,</span> <span class="token class-name">InputStream</span> stream<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minioClient<span class="token punctuation">.</span><span class="token function">putObject</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">,</span> fileName<span class="token punctuation">,</span> stream<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">PutObjectOptions</span><span class="token punctuation">(</span>stream<span class="token punctuation">.</span><span class="token function">available</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">getFileUrl</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6587\u4EF6\u4E0A\u4F20
     *
     * <span class="token keyword">@param</span> <span class="token parameter">bucketName</span>:
     *            \u6876\u540D
     * <span class="token keyword">@param</span> <span class="token parameter">file</span>:
     *            \u6587\u4EF6
     * <span class="token keyword">@return</span>: java.lang.String : \u6587\u4EF6url\u5730\u5740
     * <span class="token keyword">@date</span> : 2020/8/16 23:40
     */</span>
    <span class="token annotation punctuation">@SneakyThrows</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token class-name">String</span> bucketName<span class="token punctuation">,</span> <span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">InputStream</span> is <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token class-name">String</span> fileName <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        minioClient<span class="token punctuation">.</span><span class="token function">putObject</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">,</span> fileName<span class="token punctuation">,</span> is<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">PutObjectOptions</span><span class="token punctuation">(</span>is<span class="token punctuation">.</span><span class="token function">available</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        is<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">getFileUrl</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5220\u9664\u6587\u4EF6
     *
     * <span class="token keyword">@param</span> <span class="token parameter">bucketName</span>:
     *            \u6876\u540D
     * <span class="token keyword">@param</span> <span class="token parameter">fileName</span>:
     *            \u6587\u4EF6\u540D
     * <span class="token keyword">@return</span>: void
     * <span class="token keyword">@date</span> : 2020/8/16 20:53
     */</span>
    <span class="token annotation punctuation">@SneakyThrows</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">deleteFile</span><span class="token punctuation">(</span><span class="token class-name">String</span> bucketName<span class="token punctuation">,</span> <span class="token class-name">String</span> fileName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minioClient<span class="token punctuation">.</span><span class="token function">removeObject</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u4E0B\u8F7D\u6587\u4EF6
     *
     * <span class="token keyword">@param</span> <span class="token parameter">bucketName</span>:
     *            \u6876\u540D
     * <span class="token keyword">@param</span> <span class="token parameter">fileName</span>:
     *            \u6587\u4EF6\u540D
     * <span class="token keyword">@param</span> <span class="token parameter">response</span>:
     * <span class="token keyword">@return</span>: void
     * <span class="token keyword">@date</span> : 2020/8/17 0:34
     */</span>
    <span class="token annotation punctuation">@SneakyThrows</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token class-name">String</span> bucketName<span class="token punctuation">,</span> <span class="token class-name">String</span> fileName<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u5BF9\u8C61\u7684\u5143\u6570\u636E</span>
        <span class="token keyword">final</span> <span class="token class-name">ObjectStat</span> stat <span class="token operator">=</span> minioClient<span class="token punctuation">.</span><span class="token function">statObject</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span>stat<span class="token punctuation">.</span><span class="token function">contentType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Disposition&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attachment;filename=&quot;</span> <span class="token operator">+</span> <span class="token class-name">URLEncoder</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InputStream</span> is <span class="token operator">=</span> minioClient<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">IOUtils</span><span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>is<span class="token punctuation">,</span> response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        is<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6minio\u6587\u4EF6\u7684\u4E0B\u8F7D\u5730\u5740
     *
     * <span class="token keyword">@param</span> <span class="token parameter">bucketName</span>:
     *            \u6876\u540D
     * <span class="token keyword">@param</span> <span class="token parameter">fileName</span>:
     *            \u6587\u4EF6\u540D
     * <span class="token keyword">@return</span>: java.lang.String
     * <span class="token keyword">@date</span> : 2020/8/16 22:07
     */</span>
    <span class="token annotation punctuation">@SneakyThrows</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getFileUrl</span><span class="token punctuation">(</span><span class="token class-name">String</span> bucketName<span class="token punctuation">,</span> <span class="token class-name">String</span> fileName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> minioClient<span class="token punctuation">.</span><span class="token function">presignedGetObject</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>






<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DFB\u52A0api" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0api" aria-hidden="true">#</a> \u6DFB\u52A0api</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/api/minio&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MinioController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">MinioProperties</span> minIoProperties<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/upload&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span> <span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> fileUrl <span class="token operator">=</span> <span class="token class-name">MinioUtil</span><span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span>minIoProperties<span class="token punctuation">.</span><span class="token function">getBucketName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;\u6587\u4EF6\u4E0B\u8F7D\u5730\u5740\uFF1A&quot;</span> <span class="token operator">+</span> fileUrl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/download&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;fileName&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> fileName<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MinioUtil</span><span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span>minIoProperties<span class="token punctuation">.</span><span class="token function">getBucketName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fileName<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/delete&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;fileName&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> fileName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MinioUtil</span><span class="token punctuation">.</span><span class="token function">deleteFile</span><span class="token punctuation">(</span>minIoProperties<span class="token punctuation">.</span><span class="token function">getBucketName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;\u5220\u9664\u6210\u529F&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","\u6574\u5408minio\u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20\u548C\u4E0B\u8F7D.html.vue"]]);export{r as default};
