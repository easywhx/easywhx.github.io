import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as e}from"./app.4d667c68.js";const p={},o=e(`<h1 id="oracle\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#oracle\u76F8\u5173" aria-hidden="true">#</a> oracle\u76F8\u5173</h1><h2 id="\u52A0\u9501\u89E3\u9501" tabindex="-1"><a class="header-anchor" href="#\u52A0\u9501\u89E3\u9501" aria-hidden="true">#</a> \u52A0\u9501\u89E3\u9501</h2><h3 id="\u52A0\u9501" tabindex="-1"><a class="header-anchor" href="#\u52A0\u9501" aria-hidden="true">#</a> \u52A0\u9501</h3><p>\u6570\u636E\u5E93\u4E2D\u52A0\u9501\u6709\u4E24\u79CD\u65B9\u5F0F\uFF0C\u72EC\u5360\u6A21\u5F0F\u548C\u5171\u4EAB\u6A21\u5F0F\u3002</p><ol><li><p>\u72EC\u5360\u6A21\u5F0F\uFF0C\u4E0D\u5141\u8BB8\u5176\u4ED6\u4F1A\u8BDD\u4EE5\u4EFB\u4F55\u65B9\u5F0F\u5171\u4EAB\u9501\u5B9A\u8D44\u6E90\uFF0C\u5F53\u8FDB\u884C\u6570\u636E\u5E93\u6570\u636E\u4FEE\u6539\u65F6\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u6A21\u5F0F\u3002</p></li><li><p>\u5171\u4EAB\u6A21\u5F0F\uFF0C\u5141\u8BB8\u5728\u6570\u636E\u8BBF\u95EE\u65F6\uFF0C\u5E76\u53D1\u5171\u540C\u8BBF\u95EE\uFF0C\u4F46\u662F\u5F53\u4FEE\u6539\u6570\u636E\u65F6\u4E0A\u5347\u4E3A\u72EC\u5360\u6A21\u5F0F\u3002</p></li></ol><p>\u9501\u5206\u4E3A\u884C\u7EA7\u9501\u548C\u8868\u7EA7\u9501\uFF0C\u884C\u7EA7\u9501\u662F\u9501\u5B9A\u67D0\u4E9B\u884C\u8BB0\u5F55\uFF0C\u8868\u7EA7\u9501\u662F\u9501\u5B9A\u6574\u5F20\u8868\u3002</p><ol><li>\u884C\u7EA7\u9501\u3002</li></ol><p>insert update delete (\u9690\u5F0F\u52A0\u884C\u9501)</p><p>select...for update(\u663E\u793A\u52A0\u884C\u9501\uFF0C\u5171\u4EAB\u6A21\u5F0F)</p><p>select * from emp where deptno=30 for update</p><p>select * from A where id=2 for update skip locked</p><p>update emp set ename=&#39;Joke&#39; where empno=7499;\u5728\u91CA\u653E\u9501\u4E4B\u524D\u5176\u4ED6\u7528\u6237\u53EA\u80FD\u5BF9\u8FDB\u884C\u6570\u636E\u67E5\u8BE2\uFF0C\u4E0D\u80FD\u5BF9\u6570\u636E\u8FDB\u884Cinsert\u3001delete\u548Cupdate\u3002</p><p>\u5047\u5982\u6709\u5176\u4ED6\u7528\u6237\u8981\u9501\u5B9A\u540C\u4E00\u8D44\u6E90\uFF1A\u53EF\u4EE5\u4F7F\u7528wait \u5B50\u53E5\u5BF9\u9501\u7684\u7B49\u5F85\u65F6\u95F4\u63A7\u5236 \u5982\uFF1A \u5728\u53E6\u4E00\u7528\u6237\u4E2D\uFF1Aselect * from emp where deptno=30 for update wait 2 (\u7B49\u5F852\u79D2 \u59822\u79D2\u949F\u8FD8\u672A\u91CA\u653E\u8D44\u6E90\uFF0C\u7CFB\u7EDF\u5C06\u4F1A\u7ED9\u51FA\u63D0\u793A\u4FE1\u606F\u3002</p><ol start="2"><li>\u8868\u7EA7\u9501\u3002</li></ol><p>\u5171\u4EAB\u6A21\u5F0F(in share mode)</p><p>\u5171\u4EAB\u66F4\u65B0\u6A21\u5F0F(in share update mode) \u6392\u4ED6\u9501\u6A21\u5F0F \u9501\u5B9A\u8868\u7684\u901A\u7528\u8BED\u6CD5\uFF1A</p><p>lock table \u8868\u540D in ;</p><ol><li>\u5171\u4EAB\u6A21\u5F0F</li></ol><p>\u4E0D\u5141\u8BB8\u5176\u4ED6\u7528\u6237\u63D2\u5165\uFF0C\u66F4\u65B0\u548C\u5220\u9664\u884C,\u591A\u4E2A\u7528\u6237\u53EF\u4EE5\u540C\u65F6\u5728\u540C\u4E00\u8868\u4E0A\u8BBE\u7F6E\u5171\u4EAB\u9501\uFF0C\u8FD9\u6837\u8BBE\u7F6E\u9501\u7684\u591A\u4E2A\u7528\u6237\u90FD\u53EA\u80FD\u6267\u884C\u67E5\u8BE2 lock table emp in share mode;</p><ol start="2"><li>\u5171\u4EAB\u66F4\u65B0\u6A21\u5F0F(in share update mode)</li></ol><p>\u5141\u8BB8\u591A\u4E2A\u7528\u6237\u540C\u65F6\u9501\u5B9A\u8868\u7684\u4E0D\u540C\u884C, \u5141\u8BB8\u5176\u4ED6\u7528\u6237\u8FDB\u884CDML(insert update delete select)\u64CD\u4F5C , \u9664\u4E86\u5DF2\u9501\u5B9A\u7684\u884C</p><p>\u5982\uFF1A lock table emp in share update mode;</p><p>select * from emp where deptno=30 for update //\u9501\u5B9A\u7684\u884C \u5176\u4ED6\u7528\u6237\u4E0D\u80FDdelete ,update \u90E8\u95E830\u7684\u96C7\u5458\u4FE1\u606F</p><p>\u5176\u4ED6\u7528\u6237\u53EF\u4EE5\u67E5\u770B\u9501\u5B9A\u7684\u884C: select * from emp where deptno=30</p><ol start="3"><li>\u6392\u4ED6\u9501\u6A21\u5F0F(\u9650\u5236\u6027\u5F3A)</li></ol><p>\u4E0D\u5141\u8BB8\u5176\u4ED6\u7528\u6237\u63D2\u5165\uFF0C\u66F4\u65B0\u548C\u5220\u9664\u884C, \u5141\u8BB8\u67E5\u770B\u6570\u636E\uFF0C\u4F46\u53EA\u6709\u4E00\u4E2A\u7528\u6237\u53EF\u4EE5\u5728\u8868\u4E2D\u653E\u7F6E\u6392\u4ED6\u9501</p><p>lock table emp in exclusive mode;</p><h3 id="\u89E3\u9501" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9501" aria-hidden="true">#</a> \u89E3\u9501</h3><p>(1)\u9501\u8868\u67E5\u8BE2\u7684\u4EE3\u7801\u6709\u4EE5\u4E0B\u7684\u5F62\u5F0F\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> v$locked_object<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> v$locked_object<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2)\u67E5\u770B\u54EA\u4E2A\u8868\u88AB\u9501</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> b<span class="token punctuation">.</span>owner<span class="token punctuation">,</span>b<span class="token punctuation">.</span>object_name<span class="token punctuation">,</span>a<span class="token punctuation">.</span>session_id<span class="token punctuation">,</span>a<span class="token punctuation">.</span>locked_mode <span class="token keyword">from</span> v$locked_object a<span class="token punctuation">,</span>dba_objects b <span class="token keyword">where</span> b<span class="token punctuation">.</span>object_id <span class="token operator">=</span> a<span class="token punctuation">.</span>object_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3)\u67E5\u770B\u662F\u54EA\u4E2Asession\u5F15\u8D77\u7684</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> b<span class="token punctuation">.</span>username<span class="token punctuation">,</span>b<span class="token punctuation">.</span>sid<span class="token punctuation">,</span>b<span class="token punctuation">.</span><span class="token keyword">serial</span><span class="token comment">#,logon_time from v$locked_object a,v$session b where a.session_id = b.sid order by b.logon_time;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(4)\u6740\u6389\u5BF9\u5E94\u8FDB\u7A0B</p><p>\u6267\u884C\u547D\u4EE4\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">alter</span> system <span class="token keyword">kill</span> <span class="token keyword">session</span><span class="token string">&#39;1025,41&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5176\u4E2D1025\u4E3Asid,41\u4E3Aserial#.</p><p><strong>\u6216\u8005</strong></p><p>\u6267\u884C\u4E0B\u9762\u547D\u4EE4\u8F93\u51FA\u7ED3\u679C\uFF0C\u5176\u4E2D FSQL\u5B57\u6BB5\u503C \u4E3A\u89E3\u9501\u8BED\u53E5\uFF0C PREV_HASH_VALUE \u5B57\u6BB5\u503C\u53EF\u5173\u8054v$sql\u67E5\u51FA\u9501\u8868\u8BED\u53E5</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> SESS<span class="token punctuation">.</span>SID<span class="token punctuation">,</span>  SESS<span class="token punctuation">.</span><span class="token keyword">SERIAL</span><span class="token comment">#,  LO.ORACLE_USERNAME,  LO.OS_USER_NAME,  AO.OBJECT_NAME, LO.LOCKED_MODE,SESS.PREV_HASH_VALUE,</span>
       <span class="token string">&#39;ALTER SYSTEM KILL SESSION &#39;&#39;&#39;</span> <span class="token operator">||</span> SESS<span class="token punctuation">.</span>SID <span class="token operator">||</span> <span class="token string">&#39;,&#39;</span><span class="token operator">||</span>SESS<span class="token punctuation">.</span><span class="token keyword">SERIAL</span><span class="token comment">#||&#39;&#39;&#39;&#39; FSQL</span>
<span class="token keyword">FROM</span> V$LOCKED_OBJECT LO<span class="token punctuation">,</span>  DBA_OBJECTS AO<span class="token punctuation">,</span>  V$<span class="token keyword">SESSION</span> SESS
<span class="token keyword">WHERE</span> AO<span class="token punctuation">.</span>OBJECT_ID <span class="token operator">=</span> LO<span class="token punctuation">.</span>OBJECT_ID <span class="token operator">AND</span> LO<span class="token punctuation">.</span>SESSION_ID <span class="token operator">=</span> SESS<span class="token punctuation">.</span>SID<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u51FA\u9501\u5BF9\u5E94\u7684sql</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> v$<span class="token keyword">sql</span> <span class="token keyword">where</span> hash_value <span class="token operator">=</span><span class="token number">1201570115</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>v$locked_object\uFF1A\u6709\u5173\u9501\u4FE1\u606F\u7684\u89C6\u56FE

SESSION_ID \uFF1A\u4F1A\u8BDDid
ORACLE_USERNAME \uFF1A\u4EA7\u751F\u9501\u7684oracle\u7528\u6237
OS_USER_NAME\uFF1A\u64CD\u4F5C\u7CFB\u7EDF\u7684\u540D\u79F0
v$session\uFF1A\u4F1A\u8BDD\u4FE1\u606F\u89C6\u56FE

sid \uFF0CSERIAL# \uFF1A\u8FD9\u4E24\u4E2A\u5B57\u6BB5\u7684\u503C\u662F\u7528\u6765\u6740\u8FDB\u7A0B\u7684\u5B57\u6BB5\u3002
PREV_HASH_VALUE\uFF1A\u901A\u8FC7\u8FD9\u4E2A\u5B57\u6BB5\u5173\u8054v$sql\u53EF\u67E5\u51FA\u54EA\u4E2Asql\u8BED\u53E5\u5F15\u53D1\u7684\u9501

v$sql\uFF1A\u67E5\u770Boracle\u6267\u884C\u8BED\u53E5\u7684\u89C6\u56FE
</code></pre><p>\u89E3\u9501</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">ALTER</span> SYSTEM <span class="token keyword">KILL</span> <span class="token keyword">SESSION</span> <span class="token string">&#39;90,4213&#39;</span> <span class="token comment">---\u6CE8\uFF1A\u4E0A\u8FF0\u4E24\u4E2A\u6570\u5B57\u5206\u522B\u4E3Av$session\u4E2DSID\uFF0CSERIAL# \u5B57\u6BB5\u7684\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u82E5\u6267\u884C\u89E3\u9501\u7684\u64CD\u4F5C\u5931\u8D25\uFF0C\u63D0\u793A\u65E0\u6CD5\u64CD\u4F5C\u53EF\u6267\u884C</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> pro<span class="token punctuation">.</span>spid <span class="token keyword">from</span> v$<span class="token keyword">session</span> ses<span class="token punctuation">,</span>v$process pro <span class="token keyword">where</span> ses<span class="token punctuation">.</span>sid<span class="token operator">=</span><span class="token number">90</span> <span class="token operator">and</span> ses<span class="token punctuation">.</span>paddr<span class="token operator">=</span>pro<span class="token punctuation">.</span>addr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u51FA spid \u540E\u518D\u5728linux\u4E2D\u67E5\u770B \u76F8\u5173\u8FDB\u7A0B\u7684\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span>  spid\u53F7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>KILL -9\u547D\u4EE4\u6740\u6389\u8FD9\u4E2A\u8FDB\u7A0B\u5373\u53EF</p><h2 id="\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1" aria-hidden="true">#</a> \u4E8B\u52A1</h2><ol><li>\u810F\u8BFB\uFF1A\u4E24\u4E2A\u4E8B\u7269\uFF0C\u4E00\u4E2A\u4E8B\u52A1\u4FEE\u6539\u6570\u636E \u672A\u63D0\u4EA4\uFF1B\u53E6\u4E00\u4E2A\u4E8B\u52A1\u67E5\u8BE2\u6570\u636E</li><li>\u4E0D\u53EF\u91CD\u590D\u8BFB\uFF1A\u540C\u4E00\u4E2A\u4E8B\u52A1\uFF0C\u591A\u6B21\u8BFB\u53D6\u540C\u6570\u636E\u7ED3\u679C\u4E0D\u540C\uFF08\u5176\u5B9E\u662F\u53E6\u4E2A\u4E00\u4E2A\u4E8B\u52A1\u4FEE\u6539\u4E86\u6570\u636E\uFF09 ---\u5BF9\u5E94\u7684\u662F\u4FEE\u6539</li><li>\u5E7B\u8C61\u8BFB\uFF1A\u540C\u4E00\u4E2A\u4E8B\u52A1\uFF0C\u591A\u6B21\u8BFB\u53D6\u4E00\u4E2A\u8303\u56F4\u7684\u6570\u636E\uFF0C\u8BFB\u53D6\u7684\u8BB0\u5F55\u6570\u4E0D\u540C---\u5BF9\u5E94insert</li></ol><p>\u8BFB\u672A\u63D0\u4EA4 read uncommit:\u53EF\u4EE5\u8BFB\u672A\u63D0\u4EA4\u7684\u6570\u636E</p><p>\u8BFB\u63D0\u4EA4 read commit\uFF1A\u53EA\u6709\u8BFB\u63D0\u4EA4\u8FC7\u7684\u6570\u636E</p><p>select * from table where id=1 for update</p><p>\u53EF\u91CD\u590D\u8BFB reapeat read</p><p>\u5E8F\u5217\u5316 serializable:</p><p>\u8FD9\u662F\u6570\u636E\u5E93\u6700\u9AD8\u7684\u9694\u79BB\u7EA7\u522B\uFF0C\u4E8B\u52A1\u201C\u4E32\u884C\u5316\u987A\u5E8F\u6267\u884C\u201D\uFF0C</p><p>\u5927\u591A\u6570\u6570\u636E\u5E93\u9ED8\u8BA4\u7684\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u662FRead committed\uFF0C\u6BD4\u5982Sql Server , Oracle\u3002Mysql\u7684\u9ED8\u8BA4\u9694\u79BB\u7EA7\u522B\u662FRepeatable read\u3002</p><p>SET TRANSACTION ISOLATION LEVEL SERIALIZABLE</p><ul><li>READ UNCOMMITTED \u5E7B\u8C61\u8BFB\u3001\u4E0D\u53EF\u91CD\u590D\u8BFB\u548C\u810F\u8BFB\u90FD\u5BB9\u8BB8\u3002</li><li>READ COMMITTED \u5BB9\u8BB8\u5E7B\u8C61\u8BFB\u3001\u4E0D\u53EF\u91CD\u590D\u8BFB\uFF0C\u4E0D\u5BB9\u8BB8\u810F\u8BFB</li><li>REPEATABLE READ \u5BB9\u8BB8\u5E7B\u8C61\u8BFB\uFF0C\u4E0D\u5BB9\u8BB8\u4E0D\u53EF\u91CD\u590D\u8BFB\u548C\u810F\u8BFB</li><li>SERIALIZABLE \u5E7B\u8C61\u8BFB\u3001\u4E0D\u53EF\u91CD\u590D\u8BFB\u548C\u810F\u8BFB\u90FD\u4E0D\u5BB9\u8BB8</li></ul><p>select * from A where id=2 for update skip locked</p>`,63),l=[o];function t(c,i){return n(),a("div",null,l)}const u=s(p,[["render",t],["__file","Oracle\u76F8\u5173.html.vue"]]);export{u as default};
