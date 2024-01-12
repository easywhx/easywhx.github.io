import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as l,a as e,b as i,d as u,f as t,r as v}from"./app.4d667c68.js";const a="/assets/2624cf6e.16b66875.png",r={},o=e("h1",{id:"es\u57FA\u672C\u4F7F\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#es\u57FA\u672C\u4F7F\u7528","aria-hidden":"true"},"#"),i(" es\u57FA\u672C\u4F7F\u7528")],-1),c={href:"https://huaweicloud.csdn.net/637f7731dacf622b8df84da4.html",target:"_blank",rel:"noopener noreferrer"},m=t('<h4 id="\u901A\u8FC7kibana\u6765\u64CD\u4F5Ces-rest-api" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7kibana\u6765\u64CD\u4F5Ces-rest-api" aria-hidden="true">#</a> \u901A\u8FC7Kibana\u6765\u64CD\u4F5CES Rest API</h4><p>\u77E5\u8BC6\u70B9\u601D\u7EF4\u5BFC\u56FE <img src="'+a+`" alt=""></p><h3 id="\u57FA\u7840\u589E\u5220\u6539\u67E5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u589E\u5220\u6539\u67E5" aria-hidden="true">#</a> \u57FA\u7840\u589E\u5220\u6539\u67E5</h3><h4 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p>(1) \u521B\u5EFA/\u5168\u91CF\u66FF\u6362</p><p>\u8BB0\u5F55\u4E0D\u5B58\u5728\u5C31\u662F\u521B\u5EFA, \u5426\u5219\u662F\u5168\u91CF\u66FF\u6362.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /index/type/id  
{
&quot;\u5C5E\u6027\u540D&quot; : &quot;value&quot;
...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>12345<strong>\u52A0\u7C97\u6837\u5F0F</strong> (2) \u521B\u5EFA/\u4FEE\u6539</p><p>\u521B\u5EFA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5982\u679C\u4E0D\u4F20id, \u5219\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210\u4E00\u4E2AUUID
POST /index/type/
{
&quot;\u5C5E\u6027\u540D&quot;:\u4FEE\u6539\u503C
}
\u6216\u8005
POST /index/type/id
{
&quot;\u5C5E\u6027\u540D&quot;:\u4FEE\u6539\u503C
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u6CA1\u6709\u5E26\u4E0A\u7684\u5C5E\u6027\u4F1A\u88AB\u6E05\u9664
POST /index/type/id
{
&quot;\u5C5E\u6027\u540D&quot;:\u4FEE\u6539\u503C
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) \u67E5\u8BE2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /index/type/id

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>(4) \u5220\u9664</p><p>\u53EA\u662F\u903B\u8F91\u5220\u9664, \u5C06\u5176\u6807\u8BB0\u4E3Adelete, \u5F53\u6570\u636E\u8D8A\u6765\u8D8A\u591A\u65F6, ES\u4F1A\u81EA\u52A8\u7269\u7406\u5220\u9664.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DELETE /index/type/id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u4F8B</p><p>(1) \u65B0\u589E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /company/employee/1
{
&quot;age&quot;:25,
&quot;salary&quot;:&quot;20k&quot;,
&quot;skill&quot;:[&quot;java&quot;,&quot;mysql&quot;,&quot;es&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /company/employee
{
&quot;age&quot;:30,
&quot;salary&quot;:&quot;30k&quot;,
&quot;skill&quot;:[&quot;python&quot;,&quot;redis&quot;,&quot;hadoop&quot;]
}

POST /company/employee/2
{
\u201Cage\u201D:22,
\u201Csalary\u201D:\u201C10k\u201D,
\u201Cskill\u201D:[\u201Cpython\u201D,\u201Cjava\u201D]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>POST \u547D\u4EE4\u65B0\u589E\u6570\u636E\u65F6, \u5982\u679C\u4E0D\u4F20id, \u5219\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210\u4E00\u4E2AUUID.</p><p>(2) \u67E5\u8BE2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /company/employee/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3) \u4FEE\u6539</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /company/employee/1
{
&quot;age&quot;:40,
&quot;salary&quot;:&quot;100k&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /company/employee/1
{
&quot;age&quot;:18,
&quot;salary&quot;:&quot;50K&quot;,
&quot;skill&quot;:[&quot;c++&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PUT \u662F\u5168\u91CF\u66FF\u6362, \u4E14\u662F\u5E42\u7B49\u64CD\u4F5C. \u4E0A\u9762\u7684POST\u4FEE\u6539, skill\u5C5E\u6027\u88AB\u6E05\u9664\u4E86, \u5C5E\u6027\u73B0\u5728\u53EA\u6709age\u548Csalary.</p><blockquote><p>\u5E42\u7B49\u64CD\u4F5C: GET, PUT, DELETE\u90FD\u662F\u5E42\u7B49\u64CD\u4F5C, \u6267\u884C\u591A\u6B21\u4E0E\u6267\u884C\u4E00\u6B21\u7ED3\u679C\u4E00\u6837.</p></blockquote><p>(4) \u5220\u9664</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DELETE /company/employee/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Partial Update \u90E8\u5206\u66F4\u65B0.</p><p>(1) \u8BED\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>post /index/type/id/_update
{
&quot;doc&quot;: {
&quot;\u5C5E\u6027\u540D&quot; : &quot;value&quot;
...
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) \u4E0E\u5168\u91CF\u66FF\u6362\u548C\u666E\u901A\u4FEE\u6539\u7684\u533A\u522B</p><p>\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D, \u5168\u91CF\u66FF\u6362\u662F\u5148\u4ECEES\u4E2D\u67E5\u8BE2\u51FA\u8BB0\u5F55, \u7136\u540E\u5728\u4FEE\u6539, \u4E00\u4E2A\u5C5E\u6027\u90FD\u4E0D\u80FD\u5C11. \u800C\u90E8\u5206\u66F4\u65B0\u5C31\u4E0D\u7528\u5148\u4ECEES\u67E5\u8BE2\u8BB0\u5F55\u4E86, \u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539, \u4E14\u4E0D\u7528\u6240\u6709\u5C5E\u6027\u90FD\u5217\u51FA.</p><p>\u90E8\u5206\u66F4\u65B0\u5982\u679C\u53EA\u5305\u542B\u90E8\u5206\u5C5E\u6027, \u90A3\u4E48\u5176\u4ED6\u6CA1\u6709\u88AB\u5305\u542B\u7684\u5C5E\u6027\u4ECD\u7136\u5B58\u5728, \u4F46\u666E\u901A\u4FEE\u6539\u5176\u4ED6\u6CA1\u6709\u88AB\u5305\u542B\u7684\u5C5E\u6027\u5C31\u76F4\u63A5\u6E05\u9664\u4E86.</p><p>(3) \u5B9E\u4F8B</p><p>a. \u5148\u6DFB\u52A0\u4E00\u6761\u6570\u636E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /school/student/1
{
&quot;name&quot;: &quot;alice&quot;,
&quot;age&quot;: 17
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b. \u6D4B\u8BD5\u90E8\u5206\u66F4\u65B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u90E8\u5206\u66F4\u65B0
POST /school/student/1/_update
{
&quot;doc&quot;: {
&quot;name&quot; : &quot;Tom&quot;
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//\u67E5\u8BE2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /school/student/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>//\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
\u201C_index\u201D: \u201Cschool\u201D,
\u201C_type\u201D: \u201Cstudent\u201D,
\u201C_id\u201D: \u201C1\u201D,
\u201C_version\u201D: 7,
\u201Cfound\u201D: true,
\u201C_source\u201D: {
\u201Cname\u201D: \u201CTom\u201D,
\u201Cage\u201D: 17
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c. \u6D4B\u8BD5\u666E\u901A\u4FEE\u6539</p><p>//\u666E\u901A\u4FEE\u6539</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /school/student/1
{
&quot;name&quot; : &quot;Linda&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//\u67E5\u8BE2 GET school/student/1</p><p>//\u7ED3\u679C { \u201C_index\u201D: \u201Cschool\u201D, \u201C_type\u201D: \u201Cstudent\u201D, \u201C_id\u201D: \u201C1\u201D, \u201C_version\u201D: 8, \u201Cfound\u201D: true, \u201C_source\u201D: { \u201Cname\u201D: \u201CLinda\u201D } }</p><p>Bulk Operation \u6279\u91CF\u67E5\u8BE2\u548C\u6279\u91CF\u589E\u5220\u6539\u7684\u8BED\u6CD5\u4E0D\u540C, \u6240\u4EE5\u5206\u5F00\u6765\u4ECB\u7ECD.</p><p>\u6279\u91CF\u67E5\u8BE2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /_mget
{
&quot;docs&quot; : [
{
&quot;_index&quot; : &quot;company&quot;,
&quot;_type&quot; : &quot;employee&quot;,
&quot;_id&quot; : 1
},
{
&quot;_index&quot; : &quot;company&quot;,
&quot;_type&quot; : &quot;employee&quot;,
&quot;_id&quot; : 2
}
]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GET /company/_mget { \u201Cdocs\u201D : [ { \u201C_type\u201D : \u201Cemployee\u201D, \u201C_id\u201D : 1 }, { \u201C_type\u201D : \u201Cemployee\u201D, \u201C_id\u201D : 2 } ] }</p><p>GET /company/employee/_mget { \u201Cids\u201D : [1,2] }</p><p>\u6279\u91CF\u589E\u5220\u6539</p><p>(1) \u8BED\u6CD5</p><p>\u6BCF\u4E00\u4E2A\u64CD\u4F5C\u8981\u4E24\u4E2Ajson\u4E32\uFF0C\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /index/type/_bulk
{&quot;action&quot;: {&quot;metadata&quot;}}
{&quot;data&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index\u548Ctype\u53EF\u4EE5\u653E\u5165metadata\u4E2D. \u6BCF\u4E2Ajson\u4E32\u4E0D\u80FD\u6362\u884C, \u53EA\u80FD\u653E\u4E00\u884C. \u540C\u65F6\u4E00\u4E2Ajson\u4E32\u548C\u4E00\u4E2Ajson\u4E32\u4E4B\u95F4, \u5FC5\u987B\u6709\u4E00\u4E2A\u6362\u884C.</p><p>(2) action\u7C7B\u578B</p><p>delete</p><p>\u5220\u9664.</p><p>create</p><p>\u5F3A\u5236\u521B\u5EFA. PUT /index/type/id/_create</p><p>index</p><p>\u521B\u5EFA\u6216\u66FF\u6362.</p><p>update</p><p>\u5C5E\u4E8E\u90E8\u5206\u66F4\u65B0.</p><p>(3) \u5B9E\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /_bulk
{&quot;delete&quot; : {&quot;_index&quot;:&quot;company&quot;, &quot;_type&quot;:&quot;employee&quot;,&quot;_id&quot;:&quot;1&quot;}}
{&quot;create&quot; :{&quot;_index&quot;:&quot;company&quot;,&quot;_type&quot;:&quot;employee&quot;,&quot;_id&quot;:&quot;2&quot;}}
{&quot;name&quot;:&quot;tyshawn&quot;, &quot;age&quot;:18}
{&quot;index&quot;:{&quot;_index&quot;:&quot;company&quot;,&quot;_type&quot;:&quot;employee&quot;,&quot;_id&quot;:&quot;3&quot;}}
{&quot;name&quot;:&quot;lee&quot;, &quot;age&quot;:24}
{&quot;update&quot;:{&quot;_index&quot;:&quot;company&quot;,&quot;_type&quot;:&quot;employee&quot;,&quot;_id&quot;:&quot;2&quot;}}
{&quot;doc&quot;:{&quot;age&quot;:30}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22" aria-hidden="true">#</a> \u641C\u7D22</h3><p>\u6DFB\u52A0\u641C\u7D22\u5B9E\u4F8B\u6570\u636E.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /website/article/1
{
&quot;post_date&quot;: &quot;2017-01-01&quot;,
&quot;title&quot;: &quot;my first article&quot;,
&quot;content&quot;: &quot;this is my first article in this website&quot;,
&quot;author_id&quot;: 11401,
&quot;tags&quot;: [
&quot;java&quot;,
&quot;c&quot;
]
}
PUT /website/article/2
{
\u201Cpost_date\u201D: \u201C2017-01-02\u201D,
\u201Ctitle\u201D: \u201Cmy second article\u201D,
\u201Ccontent\u201D: \u201Cthis is my second article in this website\u201D,
\u201Cauthor_id\u201D: 11402,
\u201Ctags\u201D: [
\u201Credis\u201D,
\u201Clinux\u201D
]
}

PUT /website/article/3
{
\u201Cpost_date\u201D: \u201C2017-01-03\u201D,
\u201Ctitle\u201D: \u201Cmy third article\u201D,
\u201Ccontent\u201D: \u201Cthis is my third article in this website\u201D,
\u201Cauthor_id\u201D: 11403,
\u201Ctags\u201D: [
\u201Celaticsearch\u201D,
\u201Ckafka\u201D
]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mapping\u7ED3\u6784\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/_mapping/article
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>{ \u201Cwebsite\u201D: { \u201Cmappings\u201D: { \u201Carticle\u201D: { \u201Cproperties\u201D: { \u201Cauthor_id\u201D: { \u201Ctype\u201D: \u201Clong\u201D }, \u201Ccontent\u201D: { \u201Ctype\u201D: \u201Ctext\u201D, \u201Cfields\u201D: { \u201Ckeyword\u201D: { \u201Ctype\u201D: \u201Ckeyword\u201D, \u201Cignore_above\u201D: 256 } } }, \u201Cpost_date\u201D: { \u201Ctype\u201D: \u201Cdate\u201D }, \u201Ctags\u201D: { \u201Ctype\u201D: \u201Ctext\u201D, \u201Cfields\u201D: { \u201Ckeyword\u201D: { \u201Ctype\u201D: \u201Ckeyword\u201D, \u201Cignore_above\u201D: 256 } } }, \u201Ctitle\u201D: { \u201Ctype\u201D: \u201Ctext\u201D, \u201Cfields\u201D: { \u201Ckeyword\u201D: { \u201Ctype\u201D: \u201Ckeyword\u201D, \u201Cignore_above\u201D: 256 } } } } } } } }</p><p>\u5F53type = text\u65F6, ES\u9ED8\u8BA4\u4F1A\u8BBE\u7F6E\u4E24\u4E2Afield, \u4E00\u4E2A\u5206\u8BCD, \u4E00\u4E2A\u4E0D\u5206\u8BCD. \u5982content\u4F1A\u5206\u8BCD, \u800Ccontent.keyword\u4E0D\u5206\u8BCD, content.keyword\u6700\u591A\u4FDD\u7559256\u4E2A\u5B57\u7B26.</p><p>\u901A\u7528\u8BED\u6CD5</p><p>(1) \u641C\u7D22\u6240\u6709index\u6570\u636E.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /_search

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>1 (2) \u641C\u7D22\u6307\u5B9Aindex, type\u4E0B\u7684\u6570\u636E(index\u548Ctype\u53EF\u4EE5\u6709\u591A\u4E2A)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /index1/_search
GET /index1,index2/_search
GET /index1/type1/_search
GET /index1/type1,type2/_search
GET /index1,index2/type1,type2/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) \u641C\u7D22\u6240\u6709index\u4E0B\u7684\u6307\u5B9Atype\u7684\u6570\u636E.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /_all/employee,product/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u9762\u518D\u4ECB\u7ECDElasticsearch\u641C\u7D22\u7684\u6761\u4EF6\u8BED\u6CD5.</p><h5 id="query-string-search" tabindex="-1"><a class="header-anchor" href="#query-string-search" aria-hidden="true">#</a> query string search</h5><p>\u8FD9\u4E2A\u67E5\u8BE2\u5C31\u7C7B\u4F3C\u4E8EHTTP\u91CC\u7684GET\u8BF7\u6C42, \u53C2\u6570\u653E\u5728URL\u4E0A.</p><p>(1) \u8BED\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /index/type/_search?q=\u5C5E\u6027\u540D:\u5C5E\u6027\u503C
GET /index/type/_search?q=+\u5C5E\u6027\u540D:\u5C5E\u6027\u503C
GET /index/type/_search?q=-\u5C5E\u6027\u540D:\u5C5E\u6027\u503C
\u4E5F\u53EF\u4EE5\u7701\u7565\u5C5E\u6027\u540D, \u76F4\u63A5q=\u5C5E\u6027\u503C
GET /index/type/_search?q=\u5C5E\u6027\u503C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) + \u548C - \u7684\u533A\u522B</p><p>\u9ED8\u8BA4\u662F+, \u6307\u5FC5\u987B\u5305\u542B\u8BE5\u5B57\u6BB5, - \u6307\u4E0D\u5305\u542B\u8BE5\u5B57\u6BB5.</p><p>(3) \u5B9E\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search?q=author_id:11403
GET /website/article/_search?q=-author_id:11403
GET /website/article/_search?q=11403

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4) _all metadata\u7684\u539F\u7406</p><p>GET /index/type/_search?q=\u5C5E\u6027\u503C.</p><p>\u8FD9\u4E2A\u8BED\u53E5\u662F\u4ECE\u6240\u6709\u5C5E\u6027\u4E2D\u641C\u7D22\u5305\u542B\u6307\u5B9A\u7684\u5173\u952E\u5B57\u7684\u6570\u636E. \u90A3\u4E48ES\u5728\u641C\u7D22\u65F6\u662F\u904D\u5386\u6240\u6709document\u4E2D\u7684\u6BCF\u4E00\u4E2Afield\u5417? \u4E0D\u662F\u7684, \u6211\u4EEC\u5728\u63D2\u5165\u4E00\u6761document\u65F6, ES\u4F1A\u81EA\u52A8\u5C06\u591A\u4E2Afield\u7684\u503C, \u5168\u90E8\u7528\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u4E32\u8054\u8D77\u6765, \u53D8\u6210\u4E00\u4E2A\u957F\u7684\u5B57\u7B26\u4E32(\u4EE5\u7A7A\u683C\u4F5C\u4E3A\u5206\u9694\u7B26)\uFF0C\u4F5C\u4E3A_all field\u7684\u503C\uFF0C\u540C\u65F6\u8FDB\u884C\u5206\u8BCD\u5EFA\u7ACB\u5012\u6392\u7D22\u5F15. \u5982\u679C\u5728\u641C\u7D22\u65F6\u6CA1\u6709\u6307\u5B9A\u5C5E\u6027\u540D, \u5C31\u4F1A\u9ED8\u8BA4\u641C\u7D22_all field. (\u751F\u4EA7\u73AF\u5883\u4E0D\u4F7F\u7528)</p><h4 id="query-dsl" tabindex="-1"><a class="header-anchor" href="#query-dsl" aria-hidden="true">#</a> query DSL</h4><p>DSL, Domain Specified Language\uFF0C\u7279\u5B9A\u9886\u57DF\u7684\u8BED\u8A00. \u8FD9\u4E2A\u67E5\u8BE2\u5C31\u7C7B\u4F3C\u4E8EHTTP\u91CC\u7684POST\u8BF7\u6C42, \u53C2\u6570\u653E\u5728body\u4E2D.</p><p>\u5B9E\u4F8B: \u4ECEwebsite\u7D22\u5F15\u4E2D\u67E5\u8BE2\u6240\u6709\u6587\u7AE0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;match_all&quot;: {}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="full-text-search" tabindex="-1"><a class="header-anchor" href="#full-text-search" aria-hidden="true">#</a> full-text search</h5><p>\u5168\u6587\u641C\u7D22.</p><p>(1) \u57FA\u7840\u4F7F\u7528</p><p>a. \u641C\u7D22\u6807\u9898\u4E2D\u5305\u542Bfirst\u6216second\u7684\u6587\u7AE0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;match&quot;: {
&quot;title&quot;: &quot;first second&quot;
}
}
}

\u6216\u8005

GET /website/article/_search
{
\u201Cquery\u201D: {
\u201Cmatch\u201D: {
\u201Ctitle\u201D: {
\u201Cquery\u201D: \u201Cfirst second\u201D
, \u201Coperator\u201D: \u201Cor\u201D
}
}
}
}

\u6216\u8005

GET /website/article/_search
{
\u201Cquery\u201D: {
\u201Cbool\u201D: {
\u201Cshould\u201D: [
{\u201Cmatch\u201D: {
\u201Ctitle\u201D:\u201Cfirst\u201D
}},
{\u201Cmatch\u201D: {
\u201Ctitle\u201D:\u201Csecond\u201D
}}
]
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b. \u641C\u7D22\u6807\u9898\u4E2D\u5305\u542Bfirst\u548Csecond\u7684\u6587\u7AE0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;match&quot;: {
&quot;title&quot;: {
&quot;query&quot;: &quot;first second&quot;
, &quot;operator&quot;: &quot;and&quot;
}
}
}
}
\u6216\u8005

GET /website/article/_search
{
\u201Cquery\u201D: {
\u201Cbool\u201D: {
\u201Cmust\u201D: [
{\u201Cmatch\u201D: {
\u201Ctitle\u201D: \u201Cfirst\u201D
}},
{\u201Cmatch\u201D: {
\u201Ctitle\u201D: \u201Csecond\u201D
}}
]
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c. \u641C\u7D22\u6807\u9898\u4E2D\u81F3\u5C11\u5305\u542Bfirst, second, third, fourth\u4E2D\u4E09\u4E2A\u5355\u8BCD\u7684\u6587\u7AE0.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;match&quot;: {
&quot;title&quot;: {
&quot;query&quot;: &quot;first second third fourth&quot;,
&quot;minimum_should_match&quot;: &quot;75%&quot;
}
}
}
}
\u6216\u8005

GET /website/article/_search
{
\u201Cquery\u201D: {
\u201Cbool\u201D: {
\u201Cshould\u201D: [
{\u201Cmatch\u201D: {
\u201Ctitle\u201D: \u201Cfirst\u201D
}},
{\u201Cmatch\u201D: {
\u201Ctitle\u201D: \u201Csecond\u201D
}},
{\u201Cmatch\u201D: {
\u201Ctitle\u201D: \u201Cthird\u201D
}},
{\u201Cmatch\u201D: {
\u201Ctitle\u201D: \u201Cfourth\u201D
}}
],
\u201Cminimum_number_should_match\u201D: 3
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>d. \u4ECEwebsite\u7D22\u5F15\u4E2D\u67E5\u8BE2, \u6807\u9898\u5FC5\u987B\u5305\u542Belasticsearch\uFF0C\u5185\u5BB9\u53EF\u4EE5\u5305\u542Belasticsearch\u4E5F\u53EF\u4EE5\u4E0D\u5305\u542B\uFF0C\u4F5C\u8005id\u5FC5\u987B\u4E0D\u4E3A111.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;bool&quot;: {
&quot;must&quot;: [
{
&quot;match&quot;: {
&quot;title&quot;:&quot;elasticsearch&quot;
}
}
],
&quot;should&quot;: [
{
&quot;match&quot;: {
&quot;content&quot;:&quot;elasticsearch&quot;
}
}
],
&quot;must_not&quot;: [
{
&quot;match&quot;: {
&quot;author_id&quot;:&quot;111&quot;
}
}
]
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>e. \u4ECEwebsite\u7D22\u5F15\u4E2D\u67E5\u8BE2, \u6807\u9898\u5305\u542Bfirst, \u540C\u65F6\u6309\u4F5C\u8005id\u964D\u5E8F\u6392\u5E8F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;match&quot;: {
&quot;title&quot;: &quot;first&quot;
}
},
&quot;sort&quot;: [
{
&quot;author_id&quot;: {
&quot;order&quot;: &quot;desc&quot;
}
}
]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>f. \u4ECEwebsite\u7D22\u5F15\u4E2D\u5206\u9875\u67E5\u8BE2\uFF0C\u603B\u51713\u7BC7\u6587\u7AE0\uFF0C\u5047\u8BBE\u6BCF\u9875\u5C31\u663E\u793A1\u7BC7\u6587\u7AE0\uFF0C\u73B0\u5728\u663E\u793A\u7B2C2\u9875</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;match_all&quot;: {}
},
&quot;from&quot;: 1,
&quot;size&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>g. \u4ECEwebsite\u7D22\u5F15\u4E2D\u67E5\u8BE2\u6240\u6709\u6587\u7AE0, \u53EA\u663E\u793Apost_date, title\u4E24\u4E2A\u5C5E\u6027.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;match_all&quot;: {}
},
&quot;_source&quot;: [&quot;post_date&quot;,&quot;title&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>h. \u641C\u7D22\u6807\u9898\u4E2D\u5305\u542B article \u7684\u6587\u7AE0, \u5982\u679C\u6807\u9898\u4E2D\u5305\u542Bfirst\u6216second\u5C31\u4F18\u5148\u641C\u7D22\u51FA\u6765, \u540C\u65F6, \u5982\u679C\u4E00\u4E2A\u6587\u7AE0\u6807\u9898\u5305\u542Bfirst article, \u53E6\u4E00\u4E2A\u6587\u7AE0\u6807\u9898\u5305\u542Bsecond article, \u5305\u542Bfirst article\u7684\u6587\u7AE0\u8981\u4F18\u5148\u641C\u7D22\u51FA\u6765.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u901A\u8FC7\u52A0\u6743\u91CD\u6765\u5904\u7406, \u9ED8\u8BA4\u6743\u91CD\u4E3A1
GET /website/article/_search
{
&quot;query&quot;: {
&quot;bool&quot;: {
&quot;must&quot;: [
{&quot;match&quot;: {
&quot;title&quot;: &quot;article&quot;
}}
],
&quot;should&quot;: [
{&quot;match&quot;: {
&quot;title&quot;: {
&quot;query&quot;: &quot;first&quot;,
&quot;boost&quot; : 3
}
}},
{&quot;match&quot;: {
&quot;title&quot;: {
&quot;query&quot;: &quot;second&quot;,
&quot;boost&quot;: 2
}
}}
]
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) multi_match</p><p>multi_match \u7528\u4E8E\u67E5\u8BE2\u8BCD\u5339\u914D\u591A\u4E2A\u5C5E\u6027. \u8FD9\u91CC\u6D89\u53CA\u5230\u51E0\u79CD\u5339\u914D\u7B56\u7565:</p><p>best-fields</p><p>doc\u7684\u67D0\u4E2A\u5C5E\u6027\u5339\u914D\u5C3D\u53EF\u80FD\u591A\u7684\u5173\u952E\u8BCD, \u90A3\u4E48\u8FD9\u4E2Adoc\u4F1A\u4F18\u5148\u8FD4\u56DE.</p><p>most-fields</p><p>\u67D0\u4E2A\u5173\u952E\u8BCD\u5339\u914Ddoc\u5C3D\u53EF\u80FD\u591A\u7684\u5C5E\u6027, \u90A3\u4E48\u8FD9\u4E2Adoc\u4F1A\u4F18\u5148\u8FD4\u56DE.</p><p>cross_fields</p><p>\u8DE8\u8D8A\u591A\u4E2Afield\u641C\u7D22\u4E00\u4E2A\u5173\u952E\u8BCD.</p><p>best-fields\u548Cmost-fields\u7684\u533A\u522B:</p><p>\u6BD4\u5982, doc1\u7684field1\u5339\u914D\u7684\u4E09\u4E2A\u5173\u952E\u8BCD, doc2\u7684field1, field2\u90FD\u5339\u914D\u4E0A\u4E86\u540C\u4E00\u4E2A\u5173\u952E\u8BCD. \u5982\u679C\u662Fbest-fields\u7B56\u7565, \u5219doc1\u7684\u76F8\u5173\u5EA6\u5206\u6570\u8981\u66F4\u9AD8, \u5982\u679C\u662Fmost-fields\u7B56\u7565, \u5219doc2\u7684\u76F8\u5173\u5EA6\u5206\u6570\u8981\u66F4\u9AD8.</p><p>\u5B9E\u4F8B:</p><p>a. \u4F7F\u7528best_fields\u7B56\u7565, \u4ECEtitle\u548Ccontent\u4E2D\u641C\u7D22&quot;my third article&quot;.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;multi_match&quot;: {
&quot;query&quot;: &quot;my third article&quot;,
&quot;type&quot;: &quot;best_fields&quot;,
&quot;fields&quot;: [&quot;title&quot;,&quot;content&quot;]
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b. \u4ECEtitle\u548Ccontent\u4E2D\u641C\u7D22&quot;my third article&quot;, \u4E14\u8FD9\u4E09\u4E2A\u5355\u8BCD\u8981\u8FDE\u5728\u4E00\u8D77.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;multi_match&quot;: {
&quot;query&quot;: &quot;my third article&quot;,
&quot;type&quot;: &quot;cross_fields&quot;,
&quot;operator&quot;: &quot;and&quot;,
&quot;fields&quot;: [&quot;title&quot;,&quot;content&quot;]
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) dis_max</p><p>\u5728\u6211\u4EEC\u8FDB\u884C\u591A\u4E2A\u6761\u4EF6\u7684\u5168\u6587\u641C\u7D22\u65F6, \u6700\u540E\u7684\u8BA1\u7B97\u51FA\u7684\u76F8\u5173\u5EA6\u5206\u6570\u662F\u6839\u636E\u591A\u4E2A\u6761\u4EF6\u7684\u5339\u914D\u5206\u6570\u7EFC\u5408\u800C\u6765\u7684, \u6BD4\u5982score = (score1 + score2) / 2, \u5982\u679C\u6211\u4EEC\u60F3\u8BA9\u6700\u7EC8\u7684\u76F8\u5173\u5EA6\u5206\u6570\u7B49\u4E8E\u591A\u4E2A\u6761\u4EF6\u5339\u914D\u5206\u6570\u4E2D\u7684\u6700\u5927\u503C, \u5373score = max(score1, score2), \u5219\u53EF\u4EE5\u4F7F\u7528dis_max.</p><p>\u5B9E\u4F8B: \u641C\u7D22title\u6216content\u4E2D\u5305\u542Bfirst\u6216article\u7684\u6587\u7AE0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;bool&quot;: {
&quot;should&quot;: [
{
&quot;match&quot;: {
&quot;title&quot;: &quot;first article&quot;
}
},
{
&quot;match&quot;: {
&quot;content&quot;: &quot;first article&quot;
}
}
]
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528dis_max:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;dis_max&quot;: {
&quot;queries&quot;: [
{
&quot;match&quot;: {
&quot;title&quot;: &quot;first article&quot;
}
},
{
&quot;match&quot;: {
&quot;content&quot;: &quot;first article&quot;
}
}
]
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4) tie_breaker</p><p>tie_breaker\u662F\u4E0Edis_max\u914D\u5957\u4F7F\u7528\u7684. dis_max\u53EA\u53D6\u5206\u6570\u6700\u5927\u7684\u90A3\u4E2A\u6761\u4EF6\u7684\u5206\u6570, \u5B8C\u5168\u4E0D\u8003\u8651\u5176\u4ED6\u6761\u4EF6\u7684\u5206\u6570, \u4F46\u5982\u679C\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u4E5F\u9700\u8981\u8003\u8651\u5176\u4ED6\u6761\u4EF6\u7684\u5206\u6570\u5462? \u6211\u4EEC\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u7CFB\u6570\u503Ctie_breaker, \u5C06\u5176\u4ED6\u6761\u4EF6\u7684\u5206\u6570\u4E58\u4EE5tie_breaker, \u7136\u540E\u548C\u6700\u5927\u5206\u6570\u7EFC\u5408\u8D77\u6765\u8BA1\u7B97\u6700\u7EC8\u5F97\u5206.</p><p>tie_breaker\u7684\u53D6\u503C\u4E3A 0 ~ 1\u4E4B\u95F4.</p><p>a. \u5C06\u4E0A\u9762\u7684\u5B9E\u4F8B\u4F18\u5316\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;dis_max&quot;: {
&quot;tie_breaker&quot;: 0.7,
&quot;queries&quot;: [
{
&quot;match&quot;: {
&quot;title&quot;: &quot;first article&quot;
}
},
{
&quot;match&quot;: {
&quot;content&quot;: &quot;first article&quot;
}
}
]
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b. \u7EE7\u7EED\u4F18\u5316. \u5982\u679C\u641C\u7D22\u8BCD\u5305\u542B\u591A\u4E2A\u5173\u952E\u5B57, \u6211\u4EEC\u8981\u6C42\u81F3\u5C11\u5339\u914D\u591A\u4E2A\u5173\u952E\u8BCD, \u4E14\u591A\u4E2A\u6761\u4EF6\u7684\u6743\u91CD\u4E0D\u540C.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;dis_max&quot;: {
&quot;tie_breaker&quot;: 0.7,
&quot;queries&quot;: [
{
&quot;match&quot;: {
&quot;title&quot;: {
&quot;query&quot;: &quot;first article hello world&quot;,
&quot;minimum_should_match&quot;: &quot;50%&quot;,
&quot;boost&quot;: 2
}
}
},
{
&quot;match&quot;: {
&quot;content&quot;: {
&quot;query&quot;: &quot;first article is my hero&quot;,
&quot;minimum_should_match&quot;: &quot;20%&quot;,
&quot;boost&quot;: 1
}
}
}
]
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>phrase search</p><p>(1) \u77ED\u8BED\u641C\u7D22, \u4E0E\u5168\u6587\u641C\u7D22\u6709\u4EC0\u4E48\u533A\u522B\u5462?</p><p>\u5168\u6587\u641C\u7D22\u4F1A\u5C06&quot;\u67E5\u8BE2\u8BCD&quot;\u62C6\u89E3\u5F00\u6765, \u53BB\u5012\u6392\u7D22\u5F15\u4E2D\u4E00\u4E00\u5339\u914D, \u53EA\u8981\u80FD\u5339\u914D\u4E0A\u4EFB\u610F\u4E00\u4E2A\u62C6\u89E3\u540E\u7684\u5173\u952E\u8BCD, \u5C31\u53EF\u4EE5\u4F5C\u4E3A\u7ED3\u679C\u8FD4\u56DE. \u800C\u77ED\u8BED\u641C\u7D22\u5728\u5168\u6587\u641C\u7D22\u7684\u57FA\u7840\u4E0A, \u8981\u6C42\u5173\u952E\u8BCD\u5FC5\u987B\u76F8\u90BB. (\u6CE8\u610F\u77ED\u8BED\u641C\u7D22\u7684&quot;\u67E5\u8BE2\u8BCD&quot;\u4E5F\u662F\u4F1A\u88AB\u5206\u8BCD\u7684)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;match&quot;: {
&quot;title&quot;: &quot;first article&quot;
}
}
}
//\u4E09\u6761\u8BB0\u5F55\u90FD\u4F1A\u641C\u7D22\u51FA\u6765
GET /website/article/_search
{
\u201Cquery\u201D: {
\u201Cmatch_phrase\u201D: {
\u201Ctitle\u201D: \u201Cfirst article\u201D
}
}
}
//\u53EA\u6709\u4E00\u6761\u8BB0\u5F55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) \u539F\u7406:</p><p>\u77ED\u8BED\u641C\u7D22\u7684\u539F\u7406\u5B9E\u9645\u4E0A\u662F\u76F8\u90BB\u5339\u914D(proximity match). Lucene\u5EFA\u7ACB\u7684\u5012\u6392\u7D22\u5F15\u7ED3\u6784\u4E3A: \u5173\u952E\u8BCD -&gt; \u6587\u6863\u53F7, \u5728\u6587\u6863\u4E2D\u7684\u4F4D\u7F6E, \u5728\u6587\u6863\u51FA\u73B0\u7684\u9891\u7387\u7B49, \u5F53\u4E00\u4E2A&quot;\u67E5\u8BE2\u8BCD&quot;\u5305\u542B\u591A\u4E2A\u5173\u952E\u8BCD\u65F6, Lucene\u5148\u901A\u8FC7\u5173\u952E\u8BCD\u627E\u5230\u5BF9\u5E94\u7684\u6587\u6863\u53F7, \u5224\u65AD\u591A\u4E2A\u5173\u952E\u8BCD\u6240\u5728\u7684\u6587\u6863\u53F7\u662F\u5426\u76F8\u540C, \u7136\u540E\u518D\u5224\u65AD\u5728\u6587\u6863\u4E2D\u7684\u4F4D\u7F6E\u662F\u5426\u76F8\u90BB.</p><p>(3) \u5B9E\u4F8B</p><p>\u77ED\u8BED\u641C\u7D22\u9ED8\u8BA4\u662F\u641C\u7D22\u76F8\u90BB\u7684\u5173\u952E\u8BCD, \u4F46\u4E5F\u53EF\u4EE5\u641C\u7D22\u95F4\u9694\u51E0\u4E2A\u4F4D\u7F6E\u7684\u5173\u952E\u8BCD. \u95F4\u9694\u8D8A\u5C0F\u76F8\u5173\u5EA6\u5206\u6570\u8D8A\u9AD8.</p><p>a. \u4ECEcontent\u4E2D\u641C\u7D22&quot;first website&quot;, first\u548Cwebsite\u5FC5\u987B\u5728\u540C\u4E00\u4E2Adoc\u4E2D, \u4E14\u95F4\u9694\u4E0D\u80FD\u8D85\u8FC710.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;match_phrase&quot;: {
&quot;content&quot;: {
&quot;query&quot;: &quot;first website&quot;,
&quot;slop&quot;: 10
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b. \u5168\u6587\u641C\u7D22\u548C\u77ED\u8BED\u641C\u7D22\u914D\u5408\u4F7F\u7528. \u4ECEcontent\u4E2D\u641C\u7D22&quot;first website&quot;, \u5728\u4F18\u5148\u6EE1\u8DB3\u53EC\u56DE\u7387\u7684\u524D\u63D0\u4E0B, \u5C3D\u53EF\u80FD\u63D0\u9AD8\u7CBE\u51C6\u5EA6.</p><p>\u53EC\u56DE\u7387: \u4ECEn\u4E2Adoc\u4E2D\u641C\u7D22, \u6709\u591A\u5C11\u4E2Adoc\u8FD4\u56DE. \u7CBE\u51C6\u5EA6: \u8BA9\u4E24\u4E2A\u5173\u952E\u8BCD\u95F4\u9694\u8D8A\u5C0F\u7684doc\u76F8\u5173\u5EA6\u5206\u6570\u8D8A\u9AD8.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;bool&quot;: {
&quot;must&quot;: [
{
&quot;match&quot;: {
&quot;content&quot;: &quot;first website&quot;
}
}
],
&quot;should&quot;: [
{
&quot;match_phrase&quot;: {
&quot;content&quot;: {
&quot;query&quot;: &quot;first website&quot;,
&quot;slop&quot;: 10
}
}
}
]
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4) \u4F18\u5316\u77ED\u8BED\u641C\u7D22: rescore</p><p>\u77ED\u8BED\u641C\u7D22\u7684\u6027\u80FD\u8981\u6BD4\u5168\u6587\u641C\u7D22\u7684\u6027\u80FD\u4F4E10\u500D\u4EE5\u4E0A, \u6240\u4EE5\u4E00\u822C\u6211\u4EEC\u8981\u7528\u77ED\u8BED\u641C\u7D22\u65F6\u90FD\u4F1A\u914D\u5408\u5168\u6587\u641C\u7D22\u4F7F\u7528. \u5148\u901A\u8FC7\u5168\u6587\u641C\u7D22\u51FA\u5339\u914D\u7684doc, \u7136\u540E\u5BF9\u76F8\u5173\u5EA6\u5206\u6570\u6700\u9AD8\u7684\u524Dn\u6761doc\u8FDB\u884Crescore\u77ED\u8BED\u641C\u7D22. (\u8FD9\u91CC\u53EA\u80FD\u7528\u4E8E\u5206\u9875\u641C\u7D22)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;match&quot;: {
&quot;content&quot;: &quot;first website&quot;
}
},
&quot;rescore&quot;: {
&quot;window_size&quot;: 20,
&quot;query&quot;: {
&quot;rescore_query&quot;: {
&quot;match_phrase&quot;: {
&quot;content&quot;: {
&quot;query&quot;: &quot;first website&quot;,
&quot;slop&quot;: 10
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(5) match_phrase_prefix</p><p>\u5339\u914D\u77ED\u8BED\u7684\u524D\u7F00, \u7528\u4E8E\u505A\u641C\u7D22\u63A8\u8350. \u6BD4\u5982\u6211\u4EEC\u5728\u767E\u5EA6\u8F93\u5165\u4E00\u4E2A\u5173\u952E\u8BCD, \u7ACB\u9A6C\u5C31\u4F1A\u63A8\u8350\u4E00\u7CFB\u5217\u67E5\u8BE2\u8BCD, \u8FD9\u4E2A\u5C31\u662F\u641C\u7D22\u63A8\u8350.</p><p>\u8FD9\u4E2A\u529F\u80FD\u4E0D\u63A8\u8350\u4F7F\u7528, \u56E0\u4E3A\u6027\u80FD\u592A\u5DEE, \u6211\u4EEC\u4E00\u822C\u901A\u8FC7ngram\u5206\u8BCD\u673A\u5236\u6765\u5B9E\u73B0\u641C\u7D22\u63A8\u8350.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;match_phrase_prefix&quot;: {
&quot;title&quot;: &quot;my sec&quot;
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="fuzzy-search" tabindex="-1"><a class="header-anchor" href="#fuzzy-search" aria-hidden="true">#</a> fuzzy search</h5><p>\u6A21\u7CCA\u641C\u7D22, \u81EA\u52A8\u5C06\u62FC\u5199\u9519\u8BEF\u7684\u641C\u7D22\u6587\u672C\u8FDB\u884C\u7EA0\u6B63, \u7136\u540E\u53BB\u5339\u914D\u7D22\u5F15\u4E2D\u7684\u6570\u636E.</p><p>(1) \u8BED\u6CD5\u4E00</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;fuzzy&quot;: {
&quot;title.keyword&quot;: {
&quot;value&quot;: &quot;my wecond article&quot;,
&quot;fuzziness&quot;: 2
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fuzziness\u4EE3\u8868\u6700\u591A\u7EA0\u6B63\u591A\u5C11\u4E2A\u5B57\u6BCD, \u9ED8\u8BA4\u4E3A2. \u641C\u7D22\u6587\u672C\u4E0D\u4F1A\u88AB\u5206\u8BCD.</p><p>(2) \u8BED\u6CD5\u4E8C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;match&quot;: {
&quot;title&quot;: {
&quot;query&quot;: &quot;my wecond article&quot;,
&quot;fuzziness&quot;: &quot;auto&quot;,
&quot;operator&quot;: &quot;and&quot;
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fuzziness\u53EF\u4EE5\u7ED9\u5B9A\u4E2A\u6570, \u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3Aauto.</p><h5 id="term-search" tabindex="-1"><a class="header-anchor" href="#term-search" aria-hidden="true">#</a> term search</h5><p>term\u67E5\u8BE2, \u662F\u4E00\u79CD\u7ED3\u6784\u5316\u67E5\u8BE2, &quot;\u67E5\u8BE2\u8BCD&quot;\u4E0D\u4F1A\u88AB\u5206\u8BCD, \u7ED3\u679C\u8981\u4E48\u5B58\u5728\u8981\u4E48\u4E0D\u5B58\u5728, \u4E0D\u5173\u5FC3\u7ED3\u679C\u7684score\u76F8\u5173\u5EA6. \u5982\u679C\u67E5\u8BE2text\u5C5E\u6027, \u9700\u8981\u6539\u4E3A\u67E5\u8BE2filed.keyword.</p><p>(1) \u5B9E\u4F8B</p><p>\u548C\u77ED\u8BED\u641C\u7D22\u5BF9\u6BD4\u4E00\u4E0B\u53EF\u4EE5\u66F4\u597D\u7684\u7406\u89E3:</p><ol><li>phrase\u641C\u7D22</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   GET /website/article/_search
   {
   &quot;query&quot;: {
   &quot;match_phrase&quot;: {
   &quot;title&quot;: &quot;my first article&quot;
   }
   }
   }
   //\u5B58\u5728\u4E00\u6761\u7ED3\u679C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.term\u641C\u7D22text</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
\u201Cquery\u201D: {
\u201Cterm\u201D: {
\u201Ctitle\u201D: {
\u201Cvalue\u201D: \u201Cmy first article\u201D
}
}
}
}
//\u4E0D\u5B58\u5728\u7ED3\u679C, \u539F\u56E0\u662F\u8BCD\u8BED\u67E5\u8BE2\u7684value\u503C\u4E0D\u4F1A\u88AB\u5206\u8BCD, \u4E5F\u5C31\u662F\u76F4\u63A5\u67E5\u8BE2&quot;my first article&quot;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3002term\u641C\u7D22keyword</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
\u201Cquery\u201D: {
\u201Cterm\u201D: {
\u201Ctitle.keyword\u201D: {
\u201Cvalue\u201D: \u201Cmy first article\u201D
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//\u5B58\u5728\u4E00\u6761\u7ED3\u679C, filed.keyword\u5C5E\u6027\u4E0D\u5206\u8BCD.</p><p>(2) \u5E38\u7528\u8BED\u6CD5</p><p>\u4E3A\u4E86\u63D0\u9AD8\u6548\u7387, term\u641C\u7D22\u4E00\u822C\u4E0Efilter\u548Cconstant_score\u8054\u7528. constant_score \u4EE5\u56FA\u5B9A\u7684\u8BC4\u5206\u6765\u6267\u884C\u67E5\u8BE2(\u9ED8\u8BA4\u4E3A1), \u800Cfilter\u4E0D\u8BA1\u7B97score\u76F8\u5173\u5EA6, \u56E0\u6B64\u6267\u884C\u6548\u7387\u975E\u5E38\u9AD8.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;constant_score&quot;: {
&quot;filter&quot;: {
&quot;term&quot;: {
&quot;post_date&quot;: &quot;2017-01-03&quot;
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="query-filter" tabindex="-1"><a class="header-anchor" href="#query-filter" aria-hidden="true">#</a> query filter</h4><p>(1) \u8BED\u6CD5</p><p>query filter \u7528\u4E8E\u8FC7\u6EE4\u6570\u636E, \u4E0D\u53C2\u4E0Escore\u76F8\u5173\u5EA6\u8BA1\u7B97, \u6548\u7387\u5F88\u9AD8. \u9002\u7528\u4E8E\u8303\u56F4\u67E5\u8BE2\u4EE5\u53CA\u4E0D\u8BA1\u7B97\u76F8\u5173\u5EA6score\u7684\u7CBE\u786E\u67E5\u8BE2(filter + term)</p><p>(2) \u5B9E\u4F8B</p><p>a. \u4ECEwebsite\u7D22\u5F15\u4E2D\u67E5\u8BE2, \u4F5C\u8005id\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E11402\uFF0C\u540C\u65F6\u53D1\u8868\u65F6\u95F4\u5FC5\u987B\u662F2017-01-02.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;constant_score&quot;: {
&quot;filter&quot;: {
&quot;bool&quot;: {
&quot;must&quot;: [
{
&quot;term&quot;: {
&quot;post_date&quot;: &quot;2017-01-02&quot;
}
},
{
&quot;range&quot;: {
&quot;author_id&quot;: {
&quot;gte&quot;: 11402
}
}
}
]
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b. \u641C\u7D22\u53D1\u5E03\u65E5\u671F\u4E3A2017-01-01, \u6216\u8005\u6587\u7AE0\u6807\u9898\u4E3A&quot;my first article&quot;\u7684\u5E16\u5B50, \u540C\u65F6\u8981\u6C42\u6587\u7AE0\u7684\u53D1\u5E03\u65E5\u671F\u7EDD\u5BF9\u4E0D\u4E3A2017-01-02.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;constant_score&quot;: {
&quot;filter&quot;: {
&quot;bool&quot;: {
&quot;should&quot;: [
{
&quot;term&quot;:{
&quot;post_date&quot;: &quot;2017-01-01&quot;
}
},
{
&quot;term&quot;:{
&quot;title.keyword&quot;: &quot;my first article&quot;
}
}
],
&quot;must_not&quot;: {
&quot;term&quot;: {
&quot;post_date&quot;: &quot;2017-01-02&quot;
}
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c. \u641C\u7D22\u6587\u7AE0\u6807\u9898\u4E3A&quot;my first article&quot;, \u6216\u8005\u662F\u6587\u7AE0\u6807\u9898\u4E3A&quot;my second article&quot;, \u800C\u4E14\u53D1\u5E03\u65E5\u671F\u4E3A&quot;2017-01-01&quot;\u7684\u6587\u7AE0.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;constant_score&quot;: {
&quot;filter&quot;: {
&quot;bool&quot;: {
&quot;should&quot;: [
{
&quot;term&quot;:{
&quot;title.keyword&quot;: &quot;my first article&quot;
}
},
{
&quot;bool&quot;: {
&quot;must&quot;: [
{
&quot;term&quot;:{
&quot;title.keyword&quot;: &quot;my second article&quot;
}
},
{
&quot;term&quot;:{
&quot;post_date&quot;: &quot;2017-01-01&quot;
}
}
]
}
}
]
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>d. \u641C\u7D22\u6587\u7AE0\u6807\u9898\u4E3A&quot;my first article&quot;\u6216&quot;my second article&quot;\u7684\u6587\u7AE0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;constant_score&quot;: {
&quot;filter&quot;: {
&quot;terms&quot;: {
&quot;title.keyword&quot;: [
&quot;my first article&quot;,
&quot;my second article&quot;
]
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>e. \u641C\u7D22tags\u4E2D\u5305\u542Bjava\u7684\u5E16\u5B50.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;constant_score&quot;: {
&quot;filter&quot;: {
&quot;terms&quot;: {
&quot;tags.keyword&quot;: [
&quot;java&quot;
]
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F, \u8FD9\u91CC\u5FC5\u987B\u7528terms, \u56E0\u4E3Aterm\u4E0D\u652F\u6301\u6570\u7EC4.</p><p>d. \u641C\u7D22tags\u4E2D\u53EA\u5305\u542Bjava\u7684\u5E16\u5B50.</p><p>\u5982\u679C\u60F3\u641C\u7D22tags\u4E2D\u53EA\u5305\u542Bjava\u7684\u5E16\u5B50, \u5C31\u9700\u8981\u65B0\u589E\u4E00\u4E2A\u5B57\u6BB5tags_count, \u8868\u793Atags\u4E2D\u6709\u51E0\u4E2Atag, \u5426\u5219\u5C31\u65E0\u6CD5\u641C\u7D22.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search
{
&quot;query&quot;: {
&quot;constant_score&quot;: {
&quot;filter&quot;: {
&quot;bool&quot;: {
&quot;must&quot;: [
{
&quot;terms&quot;: {
&quot;tags.keyword&quot;: [
&quot;java&quot;
]
}
},
{
&quot;term&quot;: {
&quot;tags_count&quot;: &quot;1&quot;
}
}
]
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E0A\u9762\u8FD9\u51E0\u5B9E\u4F8B\u505A\u4E2A\u603B\u7ED3, should\u8868\u793A\u6216, must\u8868\u793A\u4E14.</p><h5 id="scroll-search" tabindex="-1"><a class="header-anchor" href="#scroll-search" aria-hidden="true">#</a> scroll search</h5><p>scroll\u6EDA\u52A8\u641C\u7D22\uFF0C\u53EF\u4EE5\u5148\u641C\u7D22\u4E00\u6279\u6570\u636E\uFF0C\u7136\u540E\u4E0B\u6B21\u518D\u641C\u7D22\u4E00\u6279\u6570\u636E\uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u76F4\u5230\u641C\u7D22\u51FA\u5168\u90E8\u7684\u6570\u636E\u6765. \u5B83\u7684\u539F\u7406\u662F\u6BCF\u6B21\u67E5\u8BE2\u65F6\u90FD\u751F\u6210\u4E00\u4E2A\u6E38\u6807scroll_id, \u540E\u7EED\u7684\u67E5\u8BE2\u6839\u636E\u8FD9\u4E2A\u6E38\u6807\u53BB\u83B7\u53D6\u6570\u636E, \u76F4\u5230\u8FD4\u56DE\u7684hits\u5B57\u6BB5\u4E3A\u7A7A. scroll_id\u76F8\u5F53\u4E8E\u5EFA\u7ACB\u4E86\u4E00\u4E2A\u5386\u53F2\u5FEB\u7167, \u5728\u6B64\u4E4B\u540E\u7684\u5199\u64CD\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u5230\u8FD9\u4E2A\u5FEB\u7167\u7684\u7ED3\u679C, \u4E5F\u5C31\u610F\u5473\u7740\u5176\u4E0D\u80FD\u7528\u4E8E\u5B9E\u65F6\u67E5\u8BE2.</p><p>\u6EDA\u52A8\u67E5\u8BE2\u7528\u6765\u89E3\u51B3\u6DF1\u5EA6\u5206\u9875\u7684\u95EE\u9898, \u5C31\u7C7B\u4F3C\u4E8Esql\u8BED\u53E5: select * from comment where id &gt; 1000 order by id asc limit 1000.</p><p>(1) \u8BED\u6CD5</p><p>\u67E5\u8BE2\u65F6\u6307\u5B9A\u4E00\u4E2A\u53C2\u6570scroll, \u4EE3\u8868scroll_id\u7684\u6709\u6548\u671F, \u8FC7\u671F\u540Escroll_id\u4F1A\u88ABES\u81EA\u52A8\u6E05\u9664. \u5982\u679C\u4E0D\u9700\u8981\u7279\u5B9A\u7684\u6392\u5E8F, \u6309\u7167\u6587\u6863\u521B\u5EFA\u65F6\u95F4\u6392\u5E8F\u66F4\u9AD8\u6548. scroll_id\u53EA\u80FD\u4F7F\u7528\u4E00\u6B21, \u4F7F\u7528\u8FC7\u540E\u4F1A\u88AB\u81EA\u52A8\u5220\u9664. \u6700\u540E\u4E00\u6B21\u67E5\u8BE2, hits\u4E3A\u7A7A\u65F6\u4E5F\u4F1A\u8FD4\u56DE\u4E00\u4E2Ascroll_id, \u6211\u4EEC\u9700\u8981\u624B\u52A8\u5220\u9664\u6765\u91CA\u653E\u8D44\u6E90. (2) \u5B9E\u4F8B</p><p>a. \u9996\u6B21\u67E5\u8BE2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /website/article/_search?scroll=1s
{
&quot;query&quot;: {
&quot;match_all&quot;: {}
},
&quot;sort&quot;: [
{
&quot;_doc&quot;: {
&quot;order&quot;: &quot;asc&quot;
}
}
],
&quot;size&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b. \u540E\u7EED\u67E5\u8BE2</p><p>scroll_id\u53EA\u80FD\u4F7F\u7528\u4E00\u6B21.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /_search/scroll?scroll=1s&amp;scroll_id=DnF1ZXJ5VGhlbkZldGNoBQAAAAAAAATqFmRBQ3FwUFVrUUw2VHgyU2I5UWRMRlEAAAAAAAAE6xZkQUNxcFBVa1FMNlR4MlNiOVFkTEZRAAAAAAAABOwWZEFDcXBQVWtRTDZUeDJTYjlRZExGUQAAAAAAAATtFmRBQ3FwUFVrUUw2VHgyU2I5UWRMRlEAAAAAAAAE7hZkQUNxcFBVa1FMNlR4MlNiOVFkTEZR
{
}
\u6216\u8005

GET /_search/scroll
{
\u201Cscroll\u201D:\u201C1s\u201D, \u201Cscroll_id\u201D:\u201CDnF1ZXJ5VGhlbkZldGNoBQAAAAAAAATqFmRBQ3FwUFVrUUw2VHgyU2I5UWRMRlEAAAAAAAAE6xZkQUNxcFBVa1FMNlR4MlNiOVFkTEZRAAAAAAAABOwWZEFDcXBQVWtRTDZUeDJTYjlRZExGUQAAAAAAAATtFmRBQ3FwUFVrUUw2VHgyU2I5UWRMRlEAAAAAAAAE7hZkQUNxcFBVa1FMNlR4MlNiOVFkTEZR\u201D
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c. \u5220\u9664\u6307\u5B9Ascroll_id</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DELETE /_search/scroll
{
&quot;scroll_id&quot;: &quot;scroll_id=DnF1ZXJ5VGhlbkZldGNoBQAAAAAAAAiXFmRBQ3FwUFVrUUw2VHgyU2I5UWRMRlEAAAAAAAAImBZkQUNxcFBVa1FMNlR4MlNiOVFkTEZRAAAAAAAACJkWZEFDcXBQVWtRTDZUeDJTYjlRZExGUQAAAAAAAAiaFmRBQ3FwUFVrUUw2VHgyU2I5UWRMRlEAAAAAAAAImxZkQUNxcFBVa1FMNlR4MlNiOVFkTEZR==&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>d. \u5220\u9664\u6240\u6709scroll_id</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DELETE /_search/scroll/_all

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#\u805A\u5408" aria-hidden="true">#</a> \u805A\u5408</h4><p>\u805A\u5408\u5305\u62EC\u5206\u7EC4\u548C\u7EDF\u8BA1, \u5176\u4E2D\u5206\u7EC4\u64CD\u4F5C\u5305\u62ECterm, histogram, date_histogram, filter. \u7EDF\u8BA1\u64CD\u4F5C\u5305\u62ECcount, avg, max, min, sum, cardinality, percentiles, percentile_ranks\u7B49.</p><p>\u6CE8\u610F: \u805A\u5408\u7684\u5C5E\u6027\u4E0D\u80FD\u88AB\u5206\u8BCD.</p><p>\u8BED\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /index/type/_search
{
size: 0,
&quot;aggs&quot;: {
&quot;NAME&quot;: {
&quot;AGG_TYPE&quot;: {
&quot;field&quot;: &quot;field_name&quot;
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>NAME\u4E3A\u805A\u5408\u64CD\u4F5C\u7684\u540D\u79F0, \u53EF\u4EE5\u53D6\u4E00\u4E2A\u6709\u53C2\u8003\u610F\u4E49\u7684\u540D\u79F0. AGG_TYPE\u4E3A\u5206\u7EC4\u6216\u7EDF\u8BA1\u64CD\u4F5C, \u5F53\u8FDB\u884C\u5206\u7EC4\u64CD\u4F5C\u65F6, \u4F1A\u81EA\u52A8\u751F\u6210\u4E00\u4E2Adoc_count, \u7EDF\u8BA1\u4E86\u7EC4\u5185\u6570\u636E\u7684\u6570\u91CF. \u9ED8\u8BA4\u6309\u7167doc_count\u964D\u5E8F\u6392\u5217. size=0\u7684\u539F\u56E0\u662F\u4E0D\u9700\u8981\u641C\u7D22\u7ED3\u679C, \u5982\u679C\u9700\u8981\u641C\u7D22\u7ED3\u679C, \u5219\u53BB\u9664size=0.</p><p>\u5B9E\u4F8B</p><p>(1) \u5B9E\u4F8B\u6570\u636E</p><p>\u65B0\u589E\u7535\u89C6\u673A\u9500\u552E\u8BB0\u5F55, \u7528\u4E8E\u63A5\u4E0B\u6765\u7684\u5B9E\u4F8B\u5206\u6790.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>POST /televisions/sales/_bulk
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 1000, &quot;color&quot; : &quot;\u7EA2\u8272&quot;, &quot;brand&quot; : &quot;\u957F\u8679&quot;, &quot;sold_date&quot; : &quot;2016-10-28&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 2000, &quot;color&quot; : &quot;\u7EA2\u8272&quot;, &quot;brand&quot; : &quot;\u957F\u8679&quot;, &quot;sold_date&quot; : &quot;2016-11-05&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 3000, &quot;color&quot; : &quot;\u7EFF\u8272&quot;, &quot;brand&quot; : &quot;\u5C0F\u7C73&quot;, &quot;sold_date&quot; : &quot;2016-05-18&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 1500, &quot;color&quot; : &quot;\u84DD\u8272&quot;, &quot;brand&quot; : &quot;TCL&quot;, &quot;sold_date&quot; : &quot;2016-07-02&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 1200, &quot;color&quot; : &quot;\u7EFF\u8272&quot;, &quot;brand&quot; : &quot;TCL&quot;, &quot;sold_date&quot; : &quot;2016-08-19&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 2000, &quot;color&quot; : &quot;\u7EA2\u8272&quot;, &quot;brand&quot; : &quot;\u957F\u8679&quot;, &quot;sold_date&quot; : &quot;2016-11-05&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 8000, &quot;color&quot; : &quot;\u7EA2\u8272&quot;, &quot;brand&quot; : &quot;\u4E09\u661F&quot;, &quot;sold_date&quot; : &quot;2017-01-01&quot; }
{ &quot;index&quot;: {}}
{ &quot;price&quot; : 2500, &quot;color&quot; : &quot;\u84DD\u8272&quot;, &quot;brand&quot; : &quot;\u5C0F\u7C73&quot;, &quot;sold_date&quot; : &quot;2017-02-12&quot; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mapping\u7ED3\u6784\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/_mapping/sales
{
&quot;televisions&quot;: {
&quot;mappings&quot;: {
&quot;sales&quot;: {
&quot;properties&quot;: {
&quot;brand&quot;: {
&quot;type&quot;: &quot;text&quot;,
&quot;fields&quot;: {
&quot;keyword&quot;: {
&quot;type&quot;: &quot;keyword&quot;,
&quot;ignore_above&quot;: 256
}
}
},
&quot;color&quot;: {
&quot;type&quot;: &quot;text&quot;,
&quot;fields&quot;: {
&quot;keyword&quot;: {
&quot;type&quot;: &quot;keyword&quot;,
&quot;ignore_above&quot;: 256
}
}
},
&quot;price&quot;: {
&quot;type&quot;: &quot;long&quot;
},
&quot;sold_date&quot;: {
&quot;type&quot;: &quot;date&quot;
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) \u57FA\u7840\u805A\u5408\u5B9E\u4F8B</p><p>a. \u7EDF\u8BA1\u54EA\u79CD\u989C\u8272\u7684\u7535\u89C6\u9500\u91CF\u6700\u9AD8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;aggs&quot;: {
&quot;max_sales_color&quot;: {
&quot;terms&quot;: {
&quot;field&quot;: &quot;color.keyword&quot;
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5206\u7EC4\u540E\u4F1A\u8BA1\u7B97\u51FA\u6BCF\u7EC4\u6570\u636E\u4E2A\u6570(doc_count), \u9ED8\u8BA4\u6309\u7167doc_count\u964D\u5E8F\u663E\u793A.</p><p>b. \u7EDF\u8BA1\u6BCF\u79CD\u989C\u8272\u7535\u89C6\u7684\u5E73\u5747\u4EF7\u683C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;aggs&quot;: {
&quot;group_by_color&quot;: {
&quot;terms&quot;: {
&quot;field&quot;: &quot;color.keyword&quot;
},
&quot;aggs&quot;: {
&quot;avg_price&quot;: {
&quot;avg&quot;: {
&quot;field&quot;: &quot;price&quot;
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c. \u7EDF\u8BA1\u6BCF\u79CD\u989C\u8272\u7535\u89C6\u7684\u5E73\u5747\u4EF7\u683C, \u4EE5\u53CA\u7EDF\u8BA1\u6BCF\u79CD\u989C\u8272\u4E0B\u6BCF\u4E2A\u54C1\u724C\u7684\u5E73\u5747\u4EF7\u683C.</p><p>\u8FD9\u91CC\u5C31\u6D89\u53CA\u5230\u5D4C\u5957\u5206\u7EC4\u4E86, \u4E5F\u53EB\u505A\u591A\u5C42\u4E0B\u94BB\u5206\u6790.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;aggs&quot;: {
&quot;group_by_color&quot;: {
&quot;terms&quot;: {
&quot;field&quot;: &quot;color.keyword&quot;
},
&quot;aggs&quot;: {
&quot;color_avg_price&quot;: {
&quot;avg&quot;: {
&quot;field&quot;: &quot;price&quot;
}
},
&quot;group_by_brand&quot;: {
&quot;terms&quot;: {
&quot;field&quot;: &quot;brand.keyword&quot;
},
&quot;aggs&quot;: {
&quot;brand_avg_price&quot;: {
&quot;avg&quot;: {
&quot;field&quot;: &quot;price&quot;
}
}
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>d. \u7EDF\u8BA1\u6BCF\u79CD\u989C\u8272\u7535\u89C6\u673A\u7684\u6700\u5927\u6700\u5C0F\u4EF7\u683C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;aggs&quot;: {
&quot;group_by_color&quot;: {
&quot;terms&quot;: {
&quot;field&quot;: &quot;color.keyword&quot;
},
&quot;aggs&quot;: {
&quot;max_price&quot;: {
&quot;max&quot;: {
&quot;field&quot;: &quot;price&quot;
}
},
&quot;min_price&quot;: {
&quot;min&quot;: {
&quot;field&quot;: &quot;price&quot;
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>e. \u7EDF\u8BA1\u6BCF\u79CD\u989C\u8272\u7535\u89C6\u673A\u7684\u603B\u9500\u552E\u989D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;aggs&quot;: {
&quot;group_by_color&quot;: {
&quot;terms&quot;: {
&quot;field&quot;: &quot;color.keyword&quot;
},
&quot;aggs&quot;: {
&quot;sum_price&quot;: {
&quot;sum&quot;: {
&quot;field&quot;: &quot;price&quot;
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) \u9AD8\u7EA7\u805A\u5408\u5B9E\u4F8B</p><p>a. \u6309\u4EF7\u683C\u533A\u95F4\u7EDF\u8BA1\u7535\u89C6\u9500\u91CF\u548C\u9500\u552E\u989D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;aggs&quot;: {
&quot;group_by_price_range&quot;: {
&quot;histogram&quot;: {
&quot;field&quot;: &quot;price&quot;,
&quot;interval&quot;: 2000
},
&quot;aggs&quot;: {
&quot;sum_price&quot;: {
&quot;sum&quot;: {
&quot;field&quot;: &quot;price&quot;
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b. \u7EDF\u8BA1 2016-01-01 ~ 2017-12-31 \u8303\u56F4\u5185\u6BCF\u4E2A\u6708\u7684\u7535\u89C6\u673A\u9500\u91CF.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;aggs&quot;: {
&quot;group_by_sold_date&quot;: {
&quot;date_histogram&quot;: {
&quot;field&quot;: &quot;sold_date&quot;,
&quot;interval&quot;: &quot;month&quot;,
&quot;format&quot;: &quot;yyyy-MM-dd&quot;,
&quot;min_doc_count&quot;: 0,
&quot;extended_bounds&quot;: {
&quot;min&quot;: &quot;2016-01-01&quot;,
&quot;max&quot;: &quot;2017-12-31&quot;
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c. \u7EDF\u8BA1 2016-01-01 ~ 2017-12-31 \u8303\u56F4\u5185\u6BCF\u4E2A\u5B63\u5EA6\u7684\u9500\u552E\u989D\u4EE5\u53CA\u8BE5\u5B63\u5EA6\u4E0B\u6BCF\u4E2A\u54C1\u724C\u7684\u9500\u552E\u989D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;aggs&quot;: {
&quot;group_by_sold_date&quot;: {
&quot;date_histogram&quot;: {
&quot;field&quot;: &quot;sold_date&quot;,
&quot;interval&quot;: &quot;quarter&quot;,
&quot;format&quot;: &quot;yyyy-MM-dd&quot;,
&quot;min_doc_count&quot;: 0,
&quot;extended_bounds&quot;: {
&quot;min&quot;: &quot;2016-01-01&quot;,
&quot;max&quot;: &quot;2017-12-31&quot;
}
},
&quot;aggs&quot;: {
&quot;sum_price&quot;: {
&quot;sum&quot;: {
&quot;field&quot;: &quot;price&quot;
}
},
&quot;group_by_brand&quot;: {
&quot;terms&quot;: {
&quot;field&quot;: &quot;brand.keyword&quot;
},
&quot;aggs&quot;: {
&quot;brand_sum_price&quot;: {
&quot;sum&quot;: {
&quot;field&quot;: &quot;price&quot;
}
}
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>d. \u7EDF\u8BA1\u6BCF\u79CD\u989C\u8272\u7535\u89C6\u7684\u9500\u552E\u989D, \u6309\u7167\u9500\u552E\u989D\u5347\u5E8F\u6392\u5E8F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;aggs&quot;: {
&quot;group_by_color&quot;: {
&quot;terms&quot;: {
&quot;field&quot;: &quot;color.keyword&quot;,
&quot;order&quot;: {
&quot;sum_price&quot;: &quot;asc&quot;
}
},
&quot;aggs&quot;: {
&quot;sum_price&quot;: {
&quot;sum&quot;: {
&quot;field&quot;: &quot;price&quot;
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>e. \u7EDF\u8BA1\u6BCF\u79CD\u989C\u8272\u4E0B\u7684\u6BCF\u4E2A\u54C1\u724C\u7535\u89C6\u673A\u7684\u603B\u9500\u552E\u989D, \u5E76\u6309\u8FD9\u4E2A\u9500\u552E\u989D\u5347\u5E8F\u6392\u5E8F.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;aggs&quot;: {
&quot;group_by_color&quot;: {
&quot;terms&quot;: {
&quot;field&quot;: &quot;color.keyword&quot;
},
&quot;aggs&quot;: {
&quot;group_by_brand&quot;: {
&quot;terms&quot;: {
&quot;field&quot;: &quot;brand.keyword&quot;,
&quot;order&quot;: {
&quot;color_brand_sum_price&quot;: &quot;asc&quot;
}
},
&quot;aggs&quot;: {
&quot;color_brand_sum_price&quot;: {
&quot;sum&quot;: {
&quot;field&quot;: &quot;price&quot;
}
}
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>f. \u7EDF\u8BA1\u6BCF\u4E2A\u6708\u7684\u7535\u89C6\u9500\u91CF, \u5E76\u6309\u54C1\u724C\u53BB\u91CD.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;aggs&quot;: {
&quot;group_by_sold_date&quot;: {
&quot;date_histogram&quot;: {
&quot;field&quot;: &quot;sold_date&quot;,
&quot;interval&quot;: &quot;month&quot;,
&quot;format&quot;: &quot;yyyy-MM-dd&quot;
},
&quot;aggs&quot;: {
&quot;distinct_brand&quot;: {
&quot;cardinality&quot;: {
&quot;field&quot;: &quot;brand.keyword&quot;,
&quot;precision_threshold&quot;: 100
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cardinality \u53BB\u91CD\u91C7\u7528\u7684\u662F\u8FD1\u4F3C\u4F30\u8BA1\u7684\u7B97\u6CD5, \u9519\u8BEF\u7387\u57285%\u5DE6\u53F3, \u5176\u4E2Dprecision_threshold\u6307\u5B9A\u7684\u503C\u4E3A100%\u51C6\u786E\u53BB\u91CD\u7684\u6570\u91CF, \u503C\u8BBE\u7F6E\u7684\u8D8A\u5927, \u5185\u5B58\u5F00\u9500\u4E5F\u5C31\u8D8A\u5927.</p><p>g. \u7EDF\u8BA150%, 90% \u548C 99%\u7684\u7535\u89C6\u7684\u6700\u5927\u4EF7\u683C(\u4E00\u822C\u7528\u4E8E\u7EDF\u8BA1api\u8BF7\u6C42\u7684\u6700\u957F\u5EF6\u8FDF\u65F6\u95F4)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;aggs&quot;: {
&quot;price_percentiles&quot;: {
&quot;percentiles&quot;: {
&quot;field&quot;: &quot;price&quot;,
&quot;percents&quot;: [
50,
90,
99
]
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>h. \u7EDF\u8BA1\u6BCF\u4E2A\u54C1\u724C\u7684\u7535\u89C6\u673A\u7684\u4EF7\u683C, \u57281000\u4EE5\u5185, 2000\u4EE5\u5185, 3000\u4EE5\u5185, 4000\u4EE5\u5185\u7684\u6240\u5360\u6BD4\u4F8B.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;aggs&quot;: {
&quot;group_by_brand&quot;: {
&quot;terms&quot;: {
&quot;field&quot;: &quot;brand.keyword&quot;
},
&quot;aggs&quot;: {
&quot;price_percentile_ranks&quot;: {
&quot;percentile_ranks&quot;: {
&quot;field&quot;: &quot;price&quot;,
&quot;values&quot;: [
1000,
2000,
3000,
4000
]
}
}
}
}
}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) \u641C\u7D22+\u805A\u5408</p><p>a. \u7EDF\u8BA1\u6307\u5B9A\u54C1\u724C\u4E0B(\u5C0F\u7C73)\u6BCF\u4E2A\u989C\u8272\u7684\u9500\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;query&quot;: {
&quot;term&quot;: {
&quot;brand.keyword&quot;: {
&quot;value&quot;: &quot;\u5C0F\u7C73&quot;
}
}
},
&quot;aggs&quot;: {
&quot;group_by_color&quot;: {
&quot;terms&quot;: {
&quot;field&quot;: &quot;color.keyword&quot;
}
}
}
}
\u6216\u8005

GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;query&quot;: {
&quot;constant_score&quot;: {
&quot;filter&quot;: {
&quot;term&quot;: {
&quot;brand.keyword&quot;: &quot;\u5C0F\u7C73&quot;
}
}
}
},
&quot;aggs&quot;: {
&quot;group_by_color&quot;: {
&quot;terms&quot;: {
&quot;field&quot;: &quot;color.keyword&quot;
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E\u5BF9\u4E8E\u805A\u5408\u6765\u8BF4, \u56E0\u4E3A\u4E0D\u9700\u8981\u641C\u7D22\u7ED3\u679C, \u53EF\u4EE5\u76F4\u63A5\u7528filter, \u6548\u7387\u66F4\u9AD8.</p><p>b. \u7EDF\u8BA1\u5355\u4E2A\u54C1\u724C(\u957F\u8679)\u4E0E\u6240\u6709\u54C1\u724C\u9500\u552E\u989D\u5BF9\u6BD4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;query&quot;: {
&quot;constant_score&quot;: {
&quot;filter&quot;: {
&quot;term&quot;: {
&quot;brand.keyword&quot;: &quot;\u957F\u8679&quot;
}
}
}
},
&quot;aggs&quot;: {
&quot;single_brand_sum_price&quot;: {
&quot;sum&quot;: {
&quot;field&quot;: &quot;price&quot;
}
},
&quot;all_brand&quot;: {
&quot;global&quot;: {},
&quot;aggs&quot;: {
&quot;all_brand_sum_price&quot;: {
&quot;sum&quot;: {
&quot;field&quot;: &quot;price&quot;
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>global \u8868\u793A\u5C06\u6240\u6709\u6570\u636E\u7EB3\u5165\u805A\u5408\u7684scope\uFF0C\u5FFD\u89C6\u524D\u9762\u7684query\u8FC7\u6EE4.</p><p>c. \u7EDF\u8BA1\u6307\u5B9A\u54C1\u724C(\u957F\u8679)\u6700\u8FD1\u4E00\u4E2A\u6708\u548C\u6700\u8FD1\u534A\u5E74\u7684\u5E73\u5747\u4EF7\u683C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /televisions/sales/_search
{
&quot;size&quot;: 0,
&quot;query&quot;: {
&quot;term&quot;: {
&quot;brand.keyword&quot;: {
&quot;value&quot;: &quot;\u957F\u8679&quot;
}
}
},
&quot;aggs&quot;: {
&quot;recent_one_month&quot;: {
&quot;filter&quot;: {
&quot;range&quot;: {
&quot;sold_date&quot;: {
&quot;gte&quot;: &quot;now-1M&quot;
}
}
},
&quot;aggs&quot;: {
&quot;recent_one_month_avg_price&quot;: {
&quot;avg&quot;: {
&quot;field&quot;: &quot;price&quot;
}
}
}
},
&quot;recent_six_month&quot;: {
&quot;filter&quot;: {
&quot;range&quot;: {
&quot;sold_date&quot;: {
&quot;gte&quot;: &quot;now-6M&quot;
}
}
},
&quot;aggs&quot;: {
&quot;recent_six_month_avg_price&quot;: {
&quot;avg&quot;: {
&quot;field&quot;: &quot;price&quot;
}
}
}
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,278);function b(q,p){const n=v("ExternalLinkIcon");return d(),l("div",null,[o,e("p",null,[e("a",c,[i("\u53C2\u8003\u94FE\u63A5-ES\u57FA\u672C\u77E5\u8BC6\u8BED\u6CD5\u4EE5\u53CAkibana\u64CD\u4F5C"),u(n)])]),m])}const h=s(r,[["render",b],["__file","es\u7684\u57FA\u672C\u4F7F\u7528.html.vue"]]);export{h as default};
