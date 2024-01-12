import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.4d667c68.js";const e={},l=t(`<h1 id="\u6574\u5408elk" tabindex="-1"><a class="header-anchor" href="#\u6574\u5408elk" aria-hidden="true">#</a> \u6574\u5408elk</h1><h2 id="\u5B89\u88C5logstash" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5logstash" aria-hidden="true">#</a> \u5B89\u88C5logstash</h2><h3 id="\u62C9\u53D6\u76F8\u5173\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u76F8\u5173\u955C\u50CF" aria-hidden="true">#</a> \u62C9\u53D6\u76F8\u5173\u955C\u50CF</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull logstash:7.12.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u6620\u5C04\u6587\u4EF6\u5939-\u5E76\u8D4B\u4E88\u76F8\u5173\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6620\u5C04\u6587\u4EF6\u5939-\u5E76\u8D4B\u4E88\u76F8\u5173\u6743\u9650" aria-hidden="true">#</a> \u521B\u5EFA\u6620\u5C04\u6587\u4EF6\u5939\uFF0C\u5E76\u8D4B\u4E88\u76F8\u5173\u6743\u9650</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /root/mappingdata/logstash/config
mkdir /root/mappingdata/logstash/data
chmod 777 /root/mappingdata/logstash/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5728config\u4E0B\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6logstash-yml\u3001logstash-conf" tabindex="-1"><a class="header-anchor" href="#\u5728config\u4E0B\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6logstash-yml\u3001logstash-conf" aria-hidden="true">#</a> \u5728config\u4E0B\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6logstash.yml\u3001logstash.conf</h3><p>logstash.yml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">http.host</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>
<span class="token key atrule">xpack.monitoring.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">xpack.monitoring.elasticsearch.hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;http://172.17.0.3:9200&quot;</span> <span class="token punctuation">]</span> <span class="token comment"># http://www.zhengqingya.com:9200 TODO \u4FEE\u6539\u4E3A\u81EA\u5DF1\u7684ip</span>
<span class="token key atrule">xpack.monitoring.elasticsearch.username</span><span class="token punctuation">:</span> <span class="token string">&quot;elastic&quot;</span>
<span class="token key atrule">xpack.monitoring.elasticsearch.password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>logstash.conf</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code># Sample Logstash configuration for creating a simple
# Beats -&gt; Logstash -&gt; Elasticsearch pipeline.

input {

    tcp {
        mode =&gt; &quot;server&quot;
        host =&gt; &quot;0.0.0.0&quot;
        port =&gt; 5044
        codec =&gt; json{
          charset=&gt;&quot;UTF-8&quot;
        }
    }

    # ex: \u521B\u5EFA2\u4E2A\u5FAE\u670D\u52A1demo\uFF0C\u5EFA\u7ACB2\u4E2A\u4E0D\u540C\u7684\u8F93\u5165\uFF0C\u5C06\u4E24\u4E2A\u670D\u52A1\u7684\u65E5\u5FD7\u5206\u522B\u8F93\u5165\u5230\u4E0D\u540C\u7684\u7D22\u5F15\u4E2D

    tcp {
        mode =&gt; &quot;server&quot;
        host =&gt; &quot;0.0.0.0&quot;         # \u5141\u8BB8\u4EFB\u610F\u4E3B\u673A\u53D1\u9001\u65E5\u5FD7
        type =&gt; &quot;java_demo_log_1&quot; # \u8BBE\u5B9Atype\u4EE5\u533A\u5206\u6BCF\u4E2A\u8F93\u5165\u6E90
        port =&gt; 10001
        codec =&gt; json_lines       # \u6570\u636E\u683C\u5F0F
    }

    tcp {
        mode =&gt; &quot;server&quot;
        host =&gt; &quot;0.0.0.0&quot;
        type =&gt; &quot;java_demo_log_2&quot;
        port =&gt; 10002
        codec =&gt; json_lines
    }

}

output {

    # For detail config for elasticsearch as output,
    # See: https://www.elastic.co/guide/en/logstash/current/plugins-outputs-elasticsearch.html

    elasticsearch {
        hosts =&gt; [&quot;http://172.17.0.3:9200&quot;] # http://www.zhengqingya.com:9200 TODO \u4FEE\u6539\u4E3A\u81EA\u5DF1\u7684ip
        #index =&gt; &quot;%{[@metadata][beat]}-%{[@metadata][version]}-%{+YYYY.MM.dd}&quot;
        index =&gt; &quot;demo-log-%{+YYYY.MM.dd}&quot;
        #user =&gt; &quot;elastic&quot;
        #password =&gt; &quot;changeme&quot;
    }

    stdout{
        codec =&gt; rubydebug
    }

    if [type] == &quot;java_demo_log_1&quot; {
        elasticsearch {
            action =&gt; &quot;index&quot;                            # \u8F93\u51FA\u65F6\u521B\u5EFA\u6620\u5C04
            hosts  =&gt; &quot;http://172.17.0.3:9200&quot;        # ElasticSearch\u5730\u5740\u548C\u7AEF\u53E3
            index  =&gt; &quot;java_demo_log_1-%{+YYYY.MM.dd}&quot;   # \u6307\u5B9A\u7D22\u5F15\u540D-\u6309\u5929
            codec  =&gt; &quot;json&quot;
        }
    }

    if [type] == &quot;java_demo_log_2&quot; {
        elasticsearch {
            action =&gt; &quot;index&quot;
            hosts  =&gt; &quot;http://172.17.0.3:9200&quot;
            index  =&gt; &quot;java_demo_log_2-%{+YYYY.MM.dd}&quot;
            codec  =&gt; &quot;json&quot;
        }
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u542F\u52A8\u5E76\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5E76\u8FD0\u884C" aria-hidden="true">#</a> \u542F\u52A8\u5E76\u8FD0\u884C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> docker run --name logstash -p 9600:9600 -p 5044:5044  -p 1218:1218 -p 20010:20010 -p 20030:20030 -e LS_JAVA_OPTS=&quot;-Xms84m -Xmx512m&quot; -v /root/mappingdata/logstash/config/logstash.yml:/usr/share/logstash/config/logstash.yml -v /root/mappingdata/logstash/config/logstash.conf:/usr/share/logstash/config/logstash.conf -v /root/mappingdata/logstash/data:/usr/share/logstash/data -v /root/mappingdata/logstash/config/small-tools:/usr/share/logstash/config/small-tools -d logstash:7.12.0 logstash -f /usr/share/logstash/config/logstash.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5728springboot\u9879\u76EE\u4E2D\u5F15\u5165\u76F8\u5173\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5728springboot\u9879\u76EE\u4E2D\u5F15\u5165\u76F8\u5173\u4F9D\u8D56" aria-hidden="true">#</a> \u5728springboot\u9879\u76EE\u4E2D\u5F15\u5165\u76F8\u5173\u4F9D\u8D56</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- logstash-logback-encoder --&gt;</span>
		<span class="token comment">&lt;!-- https://mvnrepository.com/artifact/net.logstash.logback/logstash-logback-encoder --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>net.logstash.logback<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>logstash-logback-encoder<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>6.6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539logback-spring-xml\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539logback-spring-xml\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539logback-spring.xml\u914D\u7F6E</h2><p>\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u65E5\u5FD7\u5199\u5165logstash --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LOGSTASH<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>net.logstash.logback.appender.LogstashTcpSocketAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>destination</span><span class="token punctuation">&gt;</span></span>192.168.159.128:5044<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>destination</span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- logstash\u7684\u91C7\u96C6\u8F93\u5165\u5730\u5740 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>net.logstash.logback.encoder.LogstashEncoder<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u6253\u5370 INFO \u53CA\u4EE5\u4E0A\u7684 \u7EA7\u522B --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>INFO<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>INFO_FILE<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ERROR_FILE<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>console<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LOGSTASH<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),i=[l];function o(c,p){return s(),a("div",null,i)}const r=n(e,[["render",o],["__file","\u6574\u5408elk.html.vue"]]);export{r as default};
