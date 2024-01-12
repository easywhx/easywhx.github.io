import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.4d667c68.js";const t={},e=p(`<h1 id="updatewrapper" tabindex="-1"><a class="header-anchor" href="#updatewrapper" aria-hidden="true">#</a> UpdateWrapper</h1><h3 id="updatewrapper-1" tabindex="-1"><a class="header-anchor" href="#updatewrapper-1" aria-hidden="true">#</a> UpdateWrapper</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 1. \u67E5\u8BE2\u6761\u4EF6\uFF1A\u5546\u54C1\u6807\u9898\u4E2D\u5305\u542B&#39;\u5B66\u751F\u767D\u8272\u4E1D\u889C&#39;\u5E76\u4E14\u72B6\u6001\u4E3A\u4E0A\u67B6\u7684\u5546\u54C1</span>
<span class="token class-name">UpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MallxSpu</span><span class="token punctuation">&gt;</span></span> updateWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
updateWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u5B66\u751F\u767D\u8272\u4E1D\u889C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;statue&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. \u5C06\u6EE1\u8DB3\u6761\u4EF6\u7684\u5546\u54C1\u6DFB\u52A0\u6807\u7B7E</span>
<span class="token class-name">MallxSpu</span> spu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MallxSpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
spu<span class="token punctuation">.</span><span class="token function">setTag</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E1D\u889C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. \u6267\u884C\u66F4\u65B0</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> mallxSpuMapper<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>spu<span class="token punctuation">,</span> updateWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lambdaupdatewrapper" tabindex="-1"><a class="header-anchor" href="#lambdaupdatewrapper" aria-hidden="true">#</a> LambdaUpdateWrapper</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u65B9\u5F0F\u4E00\uFF1A
<span class="token comment">// 1. \u67E5\u8BE2\u6761\u4EF6\uFF1A\u5546\u54C1\u6807\u9898\u4E2D\u5305\u542B&#39;\u5B66\u751F\u767D\u8272\u4E1D\u889C&#39;\u5E76\u4E14\u72B6\u6001\u4E3A\u4E0A\u67B6\u7684\u5546\u54C1</span>
<span class="token class-name">LambdaUpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MallxSpu</span><span class="token punctuation">&gt;</span></span> updateWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaUpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getTitle</span><span class="token punctuation">,</span><span class="token string">&quot;\u5B66\u751F\u767D\u8272\u4E1D\u889C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getStatus</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. \u5C06\u6EE1\u8DB3\u6761\u4EF6\u7684\u5546\u54C1\u6DFB\u52A0\u6807\u7B7E</span>
<span class="token class-name">MallxSpu</span> spu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MallxSpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
spu<span class="token punctuation">.</span><span class="token function">setTag</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E1D\u889C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. \u6267\u884C\u66F4\u65B0</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> mallxSpuMapper<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>spu<span class="token punctuation">,</span> updateWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>


\u65B9\u5F0F\u4E8C<span class="token punctuation">(</span>\u4F7F\u7528<span class="token class-name">UpdateWrapper</span>\u7684set\u65B9\u6CD5\u76F4\u63A5\u8BBE\u7F6E\u5B57\u6BB5\u4E3A\u5F85\u4FEE\u6539\u7684\u503C<span class="token punctuation">)</span>\uFF1A
<span class="token comment">// 1. \u67E5\u8BE2\u6761\u4EF6\uFF1A\u5546\u54C1\u6807\u9898\u4E2D\u5305\u542B&#39;\u5B66\u751F\u767D\u8272\u4E1D\u889C&#39;\u5E76\u4E14\u72B6\u6001\u4E3A\u4E0A\u67B6\u7684\u5546\u54C1\uFF0C\u5E76\u5C06\u7B26\u5408\u6761\u4EF6\u7684\u5546\u54C1\u6253\u4E0A\u6807\u7B7E\u3002</span>
<span class="token class-name">LambdaUpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MallxSpu</span><span class="token punctuation">&gt;</span></span> updateWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaUpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getTitle</span><span class="token punctuation">,</span><span class="token string">&quot;\u5B66\u751F\u767D\u8272\u4E1D\u889C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getStatus</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getTag</span><span class="token punctuation">,</span> <span class="token string">&quot;\u4E1D\u889C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. \u6267\u884C\u66F4\u65B0</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> mallxSpuMapper<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> updateWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>



\u65B9\u5F0F\u4E09<span class="token punctuation">(</span>\u4F7F\u7528<span class="token class-name">UpdateWrapper</span>\u7684set\u65B9\u6CD5\u548C\u5BF9\u8C61\u6DF7\u5408\u4F7F\u7528\uFF0C\u8BBE\u7F6E\u5B57\u6BB5\u4E3A\u5F85\u4FEE\u6539\u7684\u503C<span class="token punctuation">)</span>\uFF1A
<span class="token comment">// 1. \u67E5\u8BE2\u6761\u4EF6\uFF1A\u5546\u54C1\u6807\u9898\u4E2D\u5305\u542B&#39;\u5B66\u751F\u767D\u8272\u4E1D\u889C&#39;\u5E76\u4E14\u72B6\u6001\u4E3A\u4E0A\u67B6\u7684\u5546\u54C1\uFF0C\u5E76\u5C06\u7B26\u5408\u6761\u4EF6\u7684\u5546\u54C1\u6253\u4E0A\u6807\u7B7E\u3002</span>
<span class="token class-name">LambdaUpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MallxSpu</span><span class="token punctuation">&gt;</span></span> updateWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaUpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getTitle</span><span class="token punctuation">,</span><span class="token string">&quot;\u5B66\u751F\u767D\u8272\u4E1D\u889C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getStatus</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getTag</span><span class="token punctuation">,</span> <span class="token string">&quot;\u4E1D\u889C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. \u5C06\u6EE1\u8DB3\u6761\u4EF6\u7684\u5546\u54C1\u7684\u5E93\u5B58\u6539\u4E3A10000</span>
<span class="token class-name">MallxSpu</span> spu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MallxSpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
spu<span class="token punctuation">.</span><span class="token function">setStock</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. \u6267\u884C\u66F4\u65B0</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> mallxSpuMapper<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>spu<span class="token punctuation">,</span> updateWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>



\u65B9\u5F0F\u56DB<span class="token punctuation">(</span>\u4F7F\u7528<span class="token class-name">UpdateWrapper</span>\u7684setSql\u65B9\u6CD5\u8BBE\u7F6E\u5B57\u6BB5\u4E3A\u5F85\u4FEE\u6539\u7684\u503C<span class="token punctuation">)</span>\uFF1A
<span class="token comment">// 1. \u67E5\u8BE2\u6761\u4EF6\uFF1A\u5546\u54C1\u6807\u9898\u4E2D\u5305\u542B&#39;\u5B66\u751F\u767D\u8272\u4E1D\u889C&#39;\u5E76\u4E14\u72B6\u6001\u4E3A\u4E0A\u67B6\u7684\u5546\u54C1\uFF0C\u5E76\u5C06\u7B26\u5408\u6761\u4EF6\u7684\u5546\u54C1\u6253\u4E0A\u6807\u7B7E\uFF0C\u540C\u65F6\u4FEE\u6539\u5E93\u5B58\u3002</span>
<span class="token class-name">LambdaUpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MallxSpu</span><span class="token punctuation">&gt;</span></span> updateWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaUpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getTitle</span><span class="token punctuation">,</span><span class="token string">&quot;\u5B66\u751F\u767D\u8272\u4E1D\u889C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getStatus</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSql</span><span class="token punctuation">(</span><span class="token string">&quot;tag = &#39;\u4E1D\u889C&#39;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSql</span><span class="token punctuation">(</span><span class="token string">&quot;stock = 10000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. \u6267\u884C\u66F4\u65B0</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> mallxSpuMapper<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> updateWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lambdaupdatechainwrapper" tabindex="-1"><a class="header-anchor" href="#lambdaupdatechainwrapper" aria-hidden="true">#</a> LambdaUpdateChainWrapper</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u65B9\u5F0F\u4E00\uFF1A
<span class="token comment">// \u67E5\u8BE2\u6761\u4EF6\uFF1A\u5546\u54C1\u6807\u9898\u4E2D\u5305\u542B&#39;\u5B66\u751F\u767D\u8272\u4E1D\u889C&#39;\u5E76\u4E14\u72B6\u6001\u4E3A\u4E0A\u67B6\u7684\u5546\u54C1\uFF0C\u5E76\u5C06\u7B26\u5408\u6761\u4EF6\u7684\u5546\u54C1\u6253\u4E0A\u6807\u7B7E\uFF0C\u540C\u65F6\u4FEE\u6539\u5E93\u5B58\uFF0C\u5E76\u6267\u884C\u66F4\u65B0\u64CD\u4F5C\u3002</span>
<span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaUpdateChainWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>mallxSpuMapper<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getTitle</span><span class="token punctuation">,</span><span class="token string">&quot;\u5B66\u751F\u767D\u8272\u4E1D\u889C&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getStatus</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">setSql</span><span class="token punctuation">(</span><span class="token string">&quot;tag = &#39;\u4E1D\u889C&#39;&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">setSql</span><span class="token punctuation">(</span><span class="token string">&quot;stock = 10000&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u65B9\u5F0F\u4E8C\uFF1A
<span class="token comment">// 1. \u5C06\u6EE1\u8DB3\u6761\u4EF6\u7684\u5546\u54C1\u7684\u5E93\u5B58\u6539\u4E3A10000</span>
<span class="token class-name">MallxSpu</span> spu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MallxSpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
spu<span class="token punctuation">.</span><span class="token function">setStock</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. \u67E5\u8BE2\u6761\u4EF6\uFF1A\u5546\u54C1\u6807\u9898\u4E2D\u5305\u542B&#39;\u5B66\u751F\u767D\u8272\u4E1D\u889C&#39;\u5E76\u4E14\u72B6\u6001\u4E3A\u4E0A\u67B6\u7684\u5546\u54C1\uFF0C\u5E76\u5C06\u7B26\u5408\u6761\u4EF6\u7684\u5546\u54C1\u6253\u4E0A\u6807\u7B7E\uFF0C\u540C\u65F6\u4FEE\u6539\u5E93\u5B58\uFF0C\u5E76\u6267\u884C\u66F4\u65B0\u64CD\u4F5C\u3002</span>
<span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaUpdateChainWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>mallxSpuMapper<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getTitle</span><span class="token punctuation">,</span><span class="token string">&quot;\u5B66\u751F\u767D\u8272\u4E1D\u889C&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">MallxSpu</span><span class="token operator">::</span><span class="token function">getStatus</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">setSql</span><span class="token punctuation">(</span><span class="token string">&quot;tag = &#39;\u4E1D\u889C&#39;&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>spu<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[e];function o(l,u){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","UpdateWrapper.html.vue"]]);export{r as default};
