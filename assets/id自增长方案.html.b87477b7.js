import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.4d667c68.js";const i={},l=e(`<h1 id="id\u81EA\u589E\u957F\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#id\u81EA\u589E\u957F\u65B9\u6848" aria-hidden="true">#</a> id\u81EA\u589E\u957F\u65B9\u6848</h1><h2 id="\u65B9\u6848\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848\u4E00" aria-hidden="true">#</a> \u65B9\u6848\u4E00</h2><p>\u4F7F\u7528oracle\u81EA\u5E26\u7684\u5E8F\u5217</p><h3 id="\u7B80\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u7B80\u8FF0" aria-hidden="true">#</a> \u7B80\u8FF0</h3><p>\u5E8F\u5217\uFF08Sequence\uFF09\u662F\u4E00\u79CD\u53EF\u4EE5\u88AB\u591A\u4E2A\u7528\u6237\u4F7F\u7528\u7684\u7528\u4E8E\u4EA7\u751F\u4E00\u7CFB\u5217\u552F\u4E00\u6570\u5B57\u7684\u6570\u636E\u5E93\u5BF9\u8C61\u3002\u5E8F\u5217\u5B9A\u4E49\u5B58\u50A8\u5728\u6570\u636E\u5B57\u5178\u4E2D\uFF0C\u901A\u8FC7\u63D0\u4F9B\u552F\u4E00\u6570\u503C\u7684\u987A\u5E8F\u8868\u6765\u7B80\u5316\u7A0B\u5E8F\u8BBE\u8BA1\u5DE5\u4F5C\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5E8F\u5217\u81EA\u52A8\u4EA7\u751F\u4E3B\u952E\u7684\u952E\u503C\u3002\u5F53\u4E00\u4E2A\u5E8F\u5217\u7B2C\u4E00\u6B21\u88AB\u67E5\u8BE2\u8C03\u7528\u65F6\uFF0C\u5B83\u5C06\u8FD4\u56DE\u4E00\u4E2A\u9884\u5B9A\u503C\u3002\u5728\u968F\u540E\u7684\u6BCF\u6B21\u67E5\u8BE2\u4E2D\uFF0C\u5E8F\u5217\u5C06\u4EA7\u751F\u4E00\u4E2A\u6309\u6307\u5B9A\u7684\u589E\u91CF\u589E\u957F\u7684\u503C\u3002\u5E8F\u5217\u53EF\u4EE5\u5FAA\u73AF\uFF0C\u6216\u8005\u662F\u8FDE\u7EED\u589E\u52A0\u7684\uFF0C\u76F4\u5230\u6307\u5B9A\u7684\u6700\u5927\u503C\u4E3A\u6B62\u3002 \u5E8F\u5217\u521B\u5EFA\u4E4B\u540E\u6574\u4E2A\u6570\u636E\u5E93\u53EF\u4EE5\u5171\u4EAB\u8FD9\u4E2A\u5E8F\u5217\u3002\u9ED8\u8BA4\u81EA\u589E\u957F\u7684\u6700\u5927\u503C\u4E3A10\u768428\u6B21\u65B9\u3002</p><h3 id="\u521B\u5EFA\u5E8F\u5217\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5E8F\u5217\u8BED\u6CD5" aria-hidden="true">#</a> \u521B\u5EFA\u5E8F\u5217\u8BED\u6CD5</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> SEQUENCE sequence  <span class="token comment">//\u521B\u5EFA\u5E8F\u5217\u540D\u79F0</span>

<span class="token punctuation">[</span>INCREMENT <span class="token keyword">BY</span> n<span class="token punctuation">]</span> <span class="token comment">//\u9012\u589E\u7684\u5E8F\u5217\u503C\u662Fn \u5982\u679Cn\u662F\u6B63\u6570\u5C31\u9012\u589E,\u5982\u679C\u662F\u8D1F\u6570\u5C31\u9012\u51CF \u9ED8\u8BA4\u662F1</span>

<span class="token punctuation">[</span><span class="token keyword">START</span> <span class="token keyword">WITH</span> n<span class="token punctuation">]</span>  <span class="token comment">//\u5F00\u59CB\u7684\u503C,\u9012\u589E\u9ED8\u8BA4\u662Fminvalue \u9012\u51CF\u662Fmaxvalue</span>

<span class="token punctuation">[</span>{MAXVALUE n <span class="token operator">|</span> NOMAXVALUE}<span class="token punctuation">]</span> <span class="token comment">//\u6700\u5927\u503C</span>

<span class="token punctuation">[</span>{MINVALUE n <span class="token operator">|</span> NOMINVALUE}<span class="token punctuation">]</span> <span class="token comment">//\u6700\u5C0F\u503C</span>

<span class="token punctuation">[</span>{<span class="token keyword">CYCLE</span> <span class="token operator">|</span> NOCYCLE}<span class="token punctuation">]</span> <span class="token comment">//\u5FAA\u73AF/\u4E0D\u5FAA\u73AF</span>

<span class="token punctuation">[</span>{CACHE n <span class="token operator">|</span> NOCACHE}<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//\u5206\u914D\u5E76\u5B58\u5165\u5230\u5185\u5B58\u4E2D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6848\u4F8B" aria-hidden="true">#</a> \u521B\u5EFA\u6848\u4F8B</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">--\u521B\u5EFAsequence</span>

<span class="token keyword">create</span> sequence seq_on_as

increment <span class="token keyword">by</span> <span class="token number">1</span>

<span class="token keyword">start</span> <span class="token keyword">with</span> <span class="token number">1</span>

nomaxvalue

nocycle

nocache<span class="token punctuation">;</span>

<span class="token comment">--\u5220\u8868</span>

<span class="token keyword">drop</span> <span class="token keyword">table</span> <span class="token keyword">as</span><span class="token punctuation">;</span>

<span class="token comment">--\u5EFA\u8868 \uFF1A</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> <span class="token keyword">as</span><span class="token punctuation">(</span>

ID <span class="token keyword">integer</span> <span class="token punctuation">,</span>

stu_name varchar2<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>

<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--\u63D2\u5165\u6570\u636E :</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token keyword">as</span> <span class="token keyword">values</span><span class="token punctuation">(</span>seq_on_as<span class="token punctuation">.</span>nextval<span class="token punctuation">,</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u5DF2\u521B\u5EFA\u7684\u5E8F\u5217" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5DF2\u521B\u5EFA\u7684\u5E8F\u5217" aria-hidden="true">#</a> \u67E5\u770B\u5DF2\u521B\u5EFA\u7684\u5E8F\u5217</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">--\u67E5\u770B\u5DF2\u521B\u5EFA\u7684\u5E8F\u5217</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_sequences<span class="token punctuation">;</span>

\u5982\u679C\u9700\u8981\u67E5\u770B\u67D0\u4E2A\u7279\u5B9A\u7684\u5E8F\u5217\uFF0C\u5982\u4E0B\uFF1A

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_sequences <span class="token keyword">where</span> sequence_name <span class="token operator">like</span> <span class="token string">&#39;%T_SELL_BRAND%&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_sequences <span class="token keyword">where</span> sequence_name<span class="token operator">=</span><span class="token string">&#39;SEQ_T_SELL_BRAND&#39;</span>\uFF1B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[l];function p(t,o){return s(),a("div",null,c)}const u=n(i,[["render",p],["__file","id\u81EA\u589E\u957F\u65B9\u6848.html.vue"]]);export{u as default};
