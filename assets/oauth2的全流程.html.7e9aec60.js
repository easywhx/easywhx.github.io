import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as r,a as e,b as n,d as a,f as s,r as c}from"./app.4d667c68.js";const h="/assets/de10dcec.a4f3878b.png",l="/assets/09b83d30.0b1aafa9.png",u={},d=s(`<h1 id="oauth2\u5168\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#oauth2\u5168\u6D41\u7A0B" aria-hidden="true">#</a> oauth2\u5168\u6D41\u7A0B</h1><p>\u5185\u5BB9\u540D\u8BCD\u8BF4\u660E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  client \u6307 client \u670D\u52A1
  auth \u6307 authorization \u670D\u52A1
  resource \u6307 resource\u670D\u52A1
  web \u6307 \u6D4F\u89C8\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>client\u5730\u5740\uFF1Ahttp://127.0.0.1:8080</p><p>auth\u5730\u5740\uFF1Ahttp://172.18.128.1:9000</p><p>resource\u5730\u5740\uFF1Ahttp://172.18.128.1:8090</p><h2 id="\u57FA\u672C\u7684\u7F51\u7EDC\u8BF7\u6C42\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7684\u7F51\u7EDC\u8BF7\u6C42\u6D41\u7A0B" aria-hidden="true">#</a> \u57FA\u672C\u7684\u7F51\u7EDC\u8BF7\u6C42\u6D41\u7A0B\uFF1A</h2><pre><code>1\u3001client\u63A5\u6536web\u7684 / \u8BF7\u6C42\u3002\u672A\u767B\u5F55\uFF0C\u91CD\u5B9A\u5411\u81F3 /oauth2/authorization/messaging-client-oidc

2\u3001client\u63A5\u6536web\u7684 /oauth2/authorization/messaging-client-oidc \u8BF7\u6C42\uFF0C\u91CD\u5B9A\u5411\u81F3 http://172.18.128.1:9000/oauth2/authorize

3\u3001auth\u63A5\u6536web\u7684 /oauth2/authorize \u8BF7\u6C42\u3002\u672A\u767B\u5F55\uFF0C\u91CD\u5B9A\u5411\u81F3 /login \u767B\u5F55\u9875\u9762

4\u3001auth\u63A5\u6536web\u7B49\u8868\u5355\u767B\u5F55\u8BF7\u6C42\uFF0C\u6821\u9A8C\u767B\u5F55\u6210\u529F\uFF0C\u91CD\u5B9A\u5411\u81F3 /oauth2/authorize \u3002

5\u3001auth\u63A5\u6536web\u7684 /oauth2/authorize \u8BF7\u6C42\u3002\u91CD\u5B9A\u5411\u81F3 http://127.0.0.1:8080/login/oauth2/code/messaging-client-oidc \u5730\u5740\u3002

6\u3001client\u63A5\u6536web\u7684 /login/oauth2/code/messaging-client-oidc \u8BF7\u6C42\uFF0C\u5411auth\u670D\u52A1\u5668\u53D1\u9001code\u6821\u9A8C\u8BF7\u6C42\uFF0C\u5730\u5740\u4E3A\uFF1Ahttp://172.18.128.1:9000/oauth2/token \u83B7\u53D6jwt\u76F8\u5E94\u53C2\u6570\u83B7\u53D6\u8BF7\u6C42\uFF0C\u5730\u5740\u4E3A\uFF1Ahttp://172.18.128.1:9000/oauth2/jwks\u3002\u83B7\u53D6token\uFF0Cjwks\u540E,\u4E3Asession\u8BBE\u7F6E\u767B\u5F55\u72B6\u6001\uFF0C\u91CD\u5B9A\u5411\u81F3\u521D\u59CB\u76EE\u6807\u5730\u5740 / \u3002

    auth\u63A5\u6536client\u7684 /oauth2/token \u8BF7\u6C42\uFF0C\u8FD4\u56DEtoken
    
    auth\u63A5\u6536client\u7684 /oauth2/jwks \u8BF7\u6C42\uFF0C\u8FD4\u56DEjwt\u76F8\u5173\u4FE1\u606F

7\u3001client\u63A5\u6536web\u7684 / \u8BF7\u6C42\uFF0C\u91CD\u5B9A\u5411\u81F3 /index

8\u3001client\u63A5\u6536web\u7684 /index \u8BF7\u6C42\uFF0C\u8FD4\u56DE\u76F8\u5E94\u89C6\u56FE
</code></pre><p><img src="`+h+'" alt=""><img src="'+l+'" alt=""></p><p>\u793A\u4F8B\u9879\u76EE\u5730\u5740 https://github.com/ReLive27/spring-security-oauth2-sample/tree/main/oauth2-jwt</p>',10),p={href:"https://www.cnblogs.com/listjiang/articles/15410526.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cnblogs.com/listjiang/articles/15411411.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.cnblogs.com/listjiang/articles/15412009.html",target:"_blank",rel:"noopener noreferrer"};function _(b,w){const t=c("ExternalLinkIcon");return i(),r("div",null,[d,e("p",null,[e("a",p,[n("\u53C2\u8003\u6587\u7AE0-\u8BB0\u5F55\u4E00\u6B21spring\u53D1\u5E03\u7684oauth2\u670D\u52A1\u5668demo\u5B66\u4E60\u2014\u2014\u7B2C\u4E00\u6B65\uFF0C\u8DD1demo"),a(t)])]),e("p",null,[e("a",m,[n("\u53C2\u8003\u6587\u7AE0-\u8BB0\u5F55\u4E00\u6B21spring\u53D1\u5E03\u7684oauth2\u670D\u52A1\u5668demo\u5B66\u4E60\u2014\u2014\u7B2C\u4E8C\u6B65\uFF0C\u770B\u5168\u6D41\u7A0B\u7F51\u7EDC\uFF08\u4E00\uFF09"),a(t)])]),e("p",null,[e("a",g,[n("\u53C2\u8003\u6587\u7AE0-\u8BB0\u5F55\u4E00\u6B21spring\u53D1\u5E03\u7684oauth2\u670D\u52A1\u5668demo\u5B66\u4E60\u2014\u2014\u7B2C\u4E8C\u6B65\uFF0C\u770B\u5168\u6D41\u7A0B\u7F51\u7EDC\uFF08\u4E8C\uFF09"),a(t)])])])}const k=o(u,[["render",_],["__file","oauth2\u7684\u5168\u6D41\u7A0B.html.vue"]]);export{k as default};
