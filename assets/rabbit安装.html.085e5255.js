import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as a,a as e,b as i,d as l,f as d,r as t}from"./app.4d667c68.js";const c={},v=e("h1",{id:"rabbitmq\u5B89\u88C5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rabbitmq\u5B89\u88C5","aria-hidden":"true"},"#"),i(" rabbitMQ\u5B89\u88C5")],-1),b=e("h2",{id:"_1-\u73AF\u5883\u5B89\u88C5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u73AF\u5883\u5B89\u88C5","aria-hidden":"true"},"#"),i(" 1.\u73AF\u5883\u5B89\u88C5")],-1),m={href:"http://www.rabbitmq.com/install-rpm.html#package-cloud",target:"_blank",rel:"noopener noreferrer"},u=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -s https://packagecloud.io/install/repositories/rabbitmq/rabbitmq-server/script.rpm.sh | sudo bash

curl -s https://packagecloud.io/install/repositories/rabbitmq/erlang/script.rpm.sh | sudo bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5B89\u88C5erlang\u548Crabbitmq" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5erlang\u548Crabbitmq" aria-hidden="true">#</a> 2.\u5B89\u88C5Erlang\u548CRabbitMq</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B89\u88C5Erlang
1&gt;yum install erlang -y

# \u5B89\u88C5rabbitmq
2&gt;yum install rabbitmq-server -y

# \u67E5\u770B
2.1&gt;rpm -qa | grep erlang
# \u7ED3\u679C\u5982\u4E0B
# erlang-23.3.2-1.el8.x86_64

# \u67E5\u770B
2.2&gt;rpm -qa | grep rabbitmq-server
# \u7ED3\u679C\u5982\u4E0B
# rabbitmq-server-3.8.14-1.el8.noarch

## rabbitmq\u7684\u7BA1\u7406\u5E73\u53F0\u63D2\u4EF6
3&gt;rabbitmq-plugins enable rabbitmq_management

# \u5F00\u542Fmqserver \u521B\u5EFA\u4E86\u4E00\u4E2A\u8FDE\u63A5\u7684\u6837\u5B50 
4&gt;systemctl enable  rabbitmq-server
# \u7ED3\u679C
Created symlink /etc/systemd/system/multi-user.target.wants/rabbitmq-server.service \u2192 /usr/lib/systemd/system/rabbitmq-server.service.

# \u542F\u52A8
5&gt;systemctl start   rabbitmq-server

# \u67E5\u770B\u72B6\u6001
6&gt;systemctl status rabbitmq-server

# \u4E0B\u9762\u662F\u7ED3\u679C
\u25CF rabbitmq-server.service - RabbitMQ broker
   Loaded: loaded (/usr/lib/systemd/system/rabbitmq-server.service; enabled; vendor preset: disabled)
   Active: active (running) since Wed 2021-04-28 22:08:30 CST; 20s ago
   
## \u5F00\u653E\u7AEF\u53E3 (\u7531\u4E8E\u6211\u662F\u7528\u7684\u817E\u8BAF\u7684\u4E91\u670D\u52A1\u5668 \u6240\u4EE5\u8FD9\u4E00\u6B65\u79FB\u5230\u817E\u8BAF\u7684\u7BA1\u7406\u63A7\u5236\u53F0\u53BB\u5F00\u653E \u9632\u706B\u5899\u6CA1\u5173\u9700\u8981\u505A)
7&gt;firewall-cmd --zone=public --add-port=15672/tcp --permanent

## \u5BA2\u6237\u7AEF\u7AEF\u53E3 (\u7531\u4E8E\u6211\u662F\u7528\u7684\u817E\u8BAF\u7684\u4E91\u670D\u52A1\u5668 \u6240\u4EE5\u8FD9\u4E00\u6B65\u79FB\u5230\u817E\u8BAF\u7684\u7BA1\u7406\u63A7\u5236\u53F0\u53BB\u5F00\u653E \u9632\u706B\u5899\u6CA1\u5173\u9700\u8981\u505A)
8&gt;firewall-cmd --zone=public --add-port=5672/tcp --permanent
success

# \u9632\u706B\u5899\u91CD\u542F \u5426\u5219\u521A\u624D\u5F00\u653E\u7684\u7AEF\u53E3\u4E0D\u4F1A\u751F\u6548
9&gt;firewall-cmd --reload
success

# \u67E5\u770B\u5F00\u653E\u7684\u7AEF\u53E3 (\u5982\u679C\u5ACC\u9EBB\u70E6 \u53EF\u4EE5\u76F4\u63A5\u5173\u95ED\u9632\u706B\u5899 \u4E0A\u9762\u7684789\u90FD\u4E0D\u9700\u8981\u505A \u4E0D\u5173\u7684\u8BDD \u8C8C\u4F3C\u8981\u505A)
firewall-cmd --list-port
6379/tcp 8080/tcp 443/tcp 8081/tcp 15672/tcp 5672/tcp

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u672C\u5730\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#_3-\u672C\u5730\u8BBF\u95EE" aria-hidden="true">#</a> 3.\u672C\u5730\u8BBF\u95EE</h2><p>\u4F7F\u7528guest\u8D26\u6237\u767B\u5F55\u63D0\u793AUser can only log in via localhost\u539F\u56E0\u662F\uFF1Aguest\u7528\u6237\u9ED8\u8BA4\u53EA\u80FD\u672C\u5730\u767B\u5F55,\u6211\u4EEC\u9700\u8981\u91CD\u65B0\u6DFB\u52A0\u4E00\u4E2A\u7BA1\u7406\u5458\u8D26\u53F7\u7528\u4E8Eweb\u8FDC\u7A0B\u767B\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## \u521B\u5EFA\u8D26\u53F7
rabbitmqctl add_user admin 123456
## \u8BBE\u7F6E\u7528\u6237\u89D2\u8272
rabbitmqctl  set_user_tags  admin administrator
## \u8BBE\u7F6E\u7528\u6237\u6743\u9650
rabbitmqctl set_permissions -p &quot;/&quot; admin &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;
## \u67E5\u770B\u5F53\u524D\u767B\u5F55\u7528\u6237
rabbitmqctl list_users

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function o(p,g){const n=t("ExternalLinkIcon");return r(),a("div",null,[v,b,e("p",null,[e("a",m,[i("\u4F7F\u7528PackageCloud Yum repository"),l(n)])]),u])}const _=s(c,[["render",o],["__file","rabbit\u5B89\u88C5.html.vue"]]);export{_ as default};
