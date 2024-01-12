import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as e,f as s}from"./app.4d667c68.js";const l={},d=s(`<h1 id="\u7B97\u6CD5\u9898\u6574\u7406" tabindex="-1"><a class="header-anchor" href="#\u7B97\u6CD5\u9898\u6574\u7406" aria-hidden="true">#</a> \u7B97\u6CD5\u9898\u6574\u7406</h1><h2 id="_1\u3001\u4E24\u4E2Alist\u6570\u7EC4\u53D6\u4EA4\u96C6" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u4E24\u4E2Alist\u6570\u7EC4\u53D6\u4EA4\u96C6" aria-hidden="true">#</a> 1\u3001\u4E24\u4E2Alist\u6570\u7EC4\u53D6\u4EA4\u96C6</h2><p>\u89E3\u6790\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
     *  \u7A7A\u95F4\u6362\u65F6\u95F4 \u54C8\u5E0C\u8868\u6CD5
     * @param num1
     * @param num2
     * @return
     */
    private static List&lt;Integer&gt; hashHandle(List&lt;Integer&gt; num1, List&lt;Integer&gt; num2) {
        Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();
        List&lt;Integer&gt; result = new ArrayList&lt;&gt;();
        num2.forEach(a -&gt; {
            if (map.get(a) != null) {
                map.put(a, map.get(a) + 1);
            } else {
                map.put(a, 1);
            }
        });
        num1.forEach(b -&gt; {
            if (map.get(b) != null) {
                result.add(b);
            }
        });
        return result;
    }
 /**
     *  \u6570\u7EC4\u6709\u5E8F\uFF0C\u7528\u53CC\u6307\u9488\u540C\u65F6\u904D\u5386
     * @param num1
     * @param num2
     * @return
     */
    private static List&lt;Integer&gt; zhiHandle(int[] num1, int[] num2) {
        Arrays.sort(num1);
        Arrays.sort(num2);
        List&lt;Integer&gt; result = new ArrayList&lt;&gt;();
        int i=0;
        int j=0;
        while (i&lt; num1.length &amp;&amp; j &lt; num2.length) {
            if (num1[i] == num2[j]) {
                result.add(num1[i]);
                i++;
                j++;
            } else if (num1[i] &lt; num2[j]) {
                i++;
            } else {
                j++;
            }
        }
        return result;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[d];function r(t,v){return i(),e("div",null,a)}const c=n(l,[["render",r],["__file","\u7B97\u6CD5\u9898\u6574\u7406.html.vue"]]);export{c as default};
