import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as i,f as n}from"./app.4d667c68.js";const s="/assets/wrapper.b1d9dbb5.png",a={},l=n('<h1 id="querywrapper" tabindex="-1"><a class="header-anchor" href="#querywrapper" aria-hidden="true">#</a> QueryWrapper</h1><h2 id="querywrapper\u3001lambdaquerywrapper\u4EE5\u53CAlambdaquerychainwrapper\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#querywrapper\u3001lambdaquerywrapper\u4EE5\u53CAlambdaquerychainwrapper\u7528\u6CD5" aria-hidden="true">#</a> QueryWrapper\u3001LambdaQueryWrapper\u4EE5\u53CALambdaQueryChainWrapper\u7528\u6CD5</h2><p><img src="'+s+`" alt="\u65B9\u6CD5\u8BF4\u660E" title="wrapper"></p><h3 id="\u4E00\u3001querywrapper" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001querywrapper" aria-hidden="true">#</a> \u4E00\u3001QueryWrapper</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>     /**
     * \u6761\u4EF6\u6784\u9020\u5668 \u67E5\u8BE2\u64CD\u4F5C
     */
    @Test
    void TestQueryWrapperSelect() {
        //1\u3001\u6761\u4EF6\u7528\u6CD5
        List&lt;User&gt; userList = userMapper.selectList(new QueryWrapper&lt;User&gt;()
                .like(&quot;email&quot;, &quot;24252&quot;)
                .between(&quot;age&quot;, 20, 22)
                .or()
                .eq(&quot;name&quot;, &quot;zcx&quot;)
        );
        System.out.println(&quot;userList:&quot; + userList);

        //2\u3001\u6392\u5E8F\u7528\u6CD5
        List&lt;User&gt; users = userMapper.selectList(new QueryWrapper&lt;User&gt;()
                .eq(&quot;nick_name&quot;, &quot;xx&quot;)
                .orderByAsc(&quot;age&quot;)  //\u5347\u5E8F
//                .orderByDesc(&quot;age&quot;) //\u964D\u5E8F
                .last(&quot;limit 0,3&quot;) //last\u7528\u6CD5\uFF1A\u5728sql\u672B\u5C3E\u6DFB\u52A0sql\u8BED\u53E5\uFF0C\u6709sql\u6CE8\u5165\u98CE\u9669
        );
        System.out.println(&quot;users:&quot;+users);

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8C\u3001lambdaquerywrapper" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001lambdaquerywrapper" aria-hidden="true">#</a> \u4E8C\u3001LambdaQueryWrapper</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Test
    void TestLambdaQueryWrapper() {
        //1\u3001\u67E5\u8BE2\u5355\u6761
        LambdaQueryWrapper&lt;User&gt; queryWrapper = new LambdaQueryWrapper&lt;&gt;();
        queryWrapper.eq(User::getName,&quot;liangd1&quot;);
        User selectOne = userMapper.selectOne(queryWrapper);
        System.out.println(selectOne);

        //2\u3001\u67E5\u8BE2list\u4EE5\u53CA\u7EDF\u8BA1\u6761\u6570
        queryWrapper.eq(User::getName, &quot;zcx&quot;);
        List&lt;User&gt; userList = userMapper.selectList(queryWrapper);
        System.out.println(&quot;userList:&quot; + userList);
        Integer result = userMapper.selectCount(queryWrapper);
        System.out.println(&quot;result:&quot; + result);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E09\u3001lambdaquerychainwrapper" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001lambdaquerychainwrapper" aria-hidden="true">#</a> \u4E09\u3001LambdaQueryChainWrapper</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Test
    void TestLambdaQueryChainWrapper() {
        //1\u3001eq\u67E5\u8BE2\u5355\u6761
        User one = new LambdaQueryChainWrapper&lt;&gt;(userMapper)
                .eq(User::getName, &quot;liangd1&quot;)
                .one();
        System.out.println(&quot;UserOne:&quot; + one);

        //2\u3001\u67E5\u8BE2list
        List&lt;User&gt; users = new LambdaQueryChainWrapper&lt;&gt;(userMapper)
                .eq(User::getName, &quot;zcx&quot;)
                .list();
        System.out.println(&quot;UserList:&quot; + users);

        //3\u3001\u6A21\u7CCA\u67E5\u8BE2
        List&lt;User&gt; LikeList = new LambdaQueryChainWrapper&lt;&gt;(userMapper)
                .like(User::getEmail, &quot;test&quot;)
                .list();
        System.out.println(&quot;LikeUser:&quot; + LikeList);
    } 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[l];function t(u,v){return r(),i("div",null,d)}const m=e(a,[["render",t],["__file","QueryWrapper\u5E38\u7528\u65B9\u6CD5.html.vue"]]);export{m as default};
