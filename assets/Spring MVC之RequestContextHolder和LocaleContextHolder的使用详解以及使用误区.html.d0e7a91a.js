import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as o,a as e,b as t,d as a,f as l,r as u}from"./app.4d667c68.js";const i={},p=e("h1",{id:"contextholder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contextholder","aria-hidden":"true"},"#"),t(" ContextHolder")],-1),c={href:"https://blog.51cto.com/u_3631118/3124516",target:"_blank",rel:"noopener noreferrer"},d=l(`<p>\u6240\u4EE5\u4E0D\u4E4F\u7ECF\u5E38\u9047\u5230\u8FD9\u6837\u7684\u95EE\u9898\uFF1A\u6211\u8FD9\u5757\u903B\u8F91\u8BE5\u5199\u5728\u54EA\u5462\uFF1F\u6211\u76F8\u4FE1\u5927\u591A\u6570\u521D\u3001\u4E2D\u751A\u81F3\u9AD8\u7EA7\u7A0B\u5E8F\u5458\u4E5F\u5206\u4E0D\u592A\u6E05\u695A\uFF0C\u903B\u8F91\u5206\u5C42\u6709\u70B9\u4FE1\u624B\u62C8\u6765\uFF0C\u6240\u4EE5\u6700\u7EC8\u5199\u6210\u4E86\u540E\u8F88\u4EEC\u773C\u4E2D\u7684\u201C\u5C4E\u201D\uFF0C\u54C8\u54C8\u5F53\u7136\u4EE3\u7801\u7EC4\u7EC7\u7ED3\u6784\u4E0D\u662F\u672C\u6587\u8BA8\u8BBA\u7684\u8303\u7574~~~</p><p>\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF1A\u6709\u4E0D\u5C11\u5C0F\u4F19\u4F34\u60F3\u5728Service\u5C42\u6216\u8005\u67D0\u4E2A\u5DE5\u5177\u7C7B\u5C42\u91CC\u83B7\u53D6HttpServletRequest\u5BF9\u8C61\uFF0C\u751A\u81F3response\u7684\u90FD\u6709\u3002</p><p>\u5176\u4E2D\u4E00\u79CD\u65B9\u5F0F\u662F\uFF0C\u628Arequest\u5F53\u4F5C\u5165\u53C2\uFF0C\u4E00\u5C42\u4E00\u5C42\u7684\u4F20\u9012\u4E0B\u53BB\u3002\u4E0D\u8FC7\u8FD9\u79CD\u6709\u70B9\u8D39\u52B2\uFF0C\u4E14\u505A\u8D77\u6765\u5F88\u4E0D\u4F18\u96C5\u3002\u8FD9\u91CC\u4ECB\u7ECD\u53E6\u5916\u4E00\u79CD\u65B9\u6848\uFF1ARequestContextHolder\uFF0C\u4EFB\u610F\u5730\u65B9\u4F7F\u7528\u5982\u4E0B\u4EE3\u7801\uFF1A</p><pre><code>HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
</code></pre><p>\u7C7B\u4F3C\u7684\uFF0CLocaleContextHolder\u662F\u7528\u6765\u5904\u7406Local\u7684\u4E0A\u4E0B\u6587\u5BB9\u5668</p><p>RequestContextHolder\u4F7F\u7528\u4EE5\u53CA\u6E90\u7801\u5206\u6790</p><p>RequestContextHolder\u987E\u540D\u601D\u4E49,\u6301\u6709\u4E0A\u4E0B\u6587\u7684Request\u5BB9\u5668.\u4F7F\u7528\u662F\u5F88\u7B80\u5355\u7684\uFF0C\u5B83\u6240\u6709\u65B9\u6CD5\u90FD\u662Fstatic\u7684</p><p>\u8BE5\u7C7B\u4E3B\u8981\u7EF4\u62A4\u4E86\u4E24\u4E2A\u5168\u5C40\u5BB9\u5668\uFF08\u57FA\u4E8EThreadLocal\uFF09\uFF1A</p><pre><code>// jsf\u662FJSR-127\u6807\u51C6\u7684\u4E00\u79CD\u7528\u6237\u754C\u9762\u6846\u67B6  \u8FC7\u65F6\u7684\u6280\u672F\uFF0C\u6240\u4EE5\u6B64\u5904\u4E0D\u518D\u505A\u8BA8\u8BBA
private static final boolean jsfPresent =
		ClassUtils.isPresent(&quot;javax.faces.context.FacesContext&quot;, RequestContextHolder.class.getClassLoader());

//\u73B0\u6210\u548Crequest\u7ED1\u5B9A\u7684\u5BB9\u5668
private static final ThreadLocal&lt;RequestAttributes&gt; requestAttributesHolder =
		new NamedThreadLocal&lt;&gt;(&quot;Request attributes&quot;);
// \u548C\u4E0A\u9762\u6BD4\u8F83\uFF0C\u5B83\u662F\u88AB\u5B50\u7EBF\u7A0B\u7EE7\u627F\u7684request   Inheritable:\u53EF\u7EE7\u627F\u7684
private static final ThreadLocal&lt;RequestAttributes&gt; inheritableRequestAttributesHolder =
		new NamedInheritableThreadLocal&lt;&gt;(&quot;Request context&quot;);
</code></pre><p>\u73B0\u5728\u4E3B\u8981\u662F\u5979\u7684\u4E00\u4E9Bget/set\u65B9\u6CD5\u4E4B\u7C7B\u7684\uFF1A</p><pre><code>public static void resetRequestAttributes() {
	requestAttributesHolder.remove();
	inheritableRequestAttributesHolder.remove();
}

// \u628A\u4F20\u5165\u7684RequestAttributes\u548C\u5F53\u524D\u7EBF\u7A0B\u7ED1\u5B9A\u3002 \u6CE8\u610F\u8FD9\u91CC\u4F20\u5165false\uFF1A\u8868\u793A\u4E0D\u80FD\u88AB\u7EE7\u627F
public static void setRequestAttributes(@Nullable RequestAttributes attributes) {
	setRequestAttributes(attributes, false);
}

//\u517C\u5BB9\u7EE7\u627F\u548C\u975E\u7EE7\u627F  \u53EA\u8981\u5F97\u5230\u4E86\u5C31\u6210
public static RequestAttributes getRequestAttributes() {
	RequestAttributes attributes = requestAttributesHolder.get();
	if (attributes == null) {
		attributes = inheritableRequestAttributesHolder.get();
	}
	return attributes;
}

//\u5728\u6CA1\u6709jsf\u7684\u65F6\u5019\uFF0C\u6548\u679C\u5B8C\u5168\u540CgetRequestAttributes()  \u56E0\u4E3Ajsf\u51E0\u4E4E\u5E9F\u5F03\u4E86\uFF0C\u6240\u4EE5\u6548\u679C\u53EF\u4EE5\u8BF4\u4E00\u81F4
public static RequestAttributes currentRequestAttributes() throws IllegalStateException;
</code></pre><p>\u76F8\u5173\u4F7F\u7528</p><p>DispatcherServlet\u5728\u5904\u7406\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u7236\u7C7BFrameworkServlet#processRequest\u5C31\u6709\u5411RequestContextHolder\u521D\u59CB\u5316\u7ED1\u5B9A\u4E00\u4E9B\u901A\u7528\u53C2\u6570\u7684\u64CD\u4F5C\uFF0C\u8FD9\u6837\u5B50\u4F7F\u7528\u8005\u53EF\u4EE5\u5728\u4EFB\u610F\u5730\u65B9\uFF0C\u62FF\u5230\u8FD9\u4E9B\u516C\u7528\u53C2\u6570\u4E86\uFF0C\u53EF\u8C13\u7279\u522B\u7684\u65B9\u4FBF\u3002</p><p>\u5728\u4E0B\u9762\u8FD9\u7BC7\u535A\u6587\u8BB2\u89E3Spring MVC\u6267\u884C\u6D41\u7A0B \u6E90\u7801\u5206\u6790\u4E2D\uFF0C\u5C31\u660E\u786E\u7684\u8BB2\u8FF0\u5230\u4E86\u5B83\u7684\u521D\u59CB\u5316\u8FC7\u7A0B~</p><p>\u5C0F\u4F19\u4F34\u53EF\u4EE5\u5148\u81EA\u884C\u5148\u601D\u8003\u4E00\u4E2A\u95EE\u9898\uFF1Arequest\u548Cresponse\u662F\u600E\u4E48\u6837\u8BBE\u7F6E\u8FDB\u53BB\u7684\u5462\uFF1F\uFF08\u4E0B\u6587\u4F1A\u5206\u89E3\uFF09</p><p>\u53E6\u5916\u76D1\u542C\u5668org.springframework.web.context.request.RequestContextListener\uFF08\u5B83\u662F\u4E00\u4E2AServletRequestListener\uFF09\u91CC\u4E5F\u6709\u6240\u4F53\u73B0\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u914D\u7F6E\u4E0A\u6B64\u76D1\u542C\u5668\u5373\u53EF\uFF08\u56E0\u4E3ADispatcherServlet\u91CC\u6709\u5904\u7406\uFF0C\u6240\u4EE5\u6B64\u76D1\u542C\u5668\u52A0\u4E0D\u52A0\uFF0C\u65E0\u6240\u8C13\u4E86~\uFF09</p><p>\u4F7F\u7528\u8BEF\u533A</p><p>\u573A\u666F\u63CF\u8FF0\u4E00\uFF1A\u5728\u4E00\u4E2A\u5546\u54C1\u7F16\u8F91\u9875\u9762\uFF0C\u63D0\u4EA4\u4E00\u4E2A\u6709\u9644\u4EF6\u7684\u8868\u5355\uFF0C\u8FD9\u4E2A\u65F6\u5019\u901A\u8FC7RequestHolder.getRequest().getParameter()\u5F97\u4E0D\u5230\u53C2\u6570\u503C\uFF0C\u8FD9\u662F\u4E3A\u4F55\uFF1F</p><p>\u5176\u5B9E\u4F7F\u7528\u8FC7\u7684\u6211\u4EEC\u53D1\u73B0\uFF0C\u8FD9\u4E48\u64CD\u4F5C\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u90FD\u662F\u597D\u4F7F\u7684\uFF0C\u4F46\u662F\u5982\u679C\u662F\u6587\u4EF6\u4E0A\u4F20\uFF0C\u5728DispatcherServlet\u91CC\u4F1A\u628Arequest\u5305\u88C5\u6210MultipartHttpServletRequest\uFF0C\u540C\u65F6content-type\u4E3Amultipart/form-data\uFF0C\u56E0\u6B64\u8FD9\u4E2A\u65F6\u5019getParameter()\u5C31\u5931\u6548\u4E86~</p><p>\u6839\u672C\u539F\u56E0\uFF1AcheckMultipart()\u65B9\u6CD5\u8FD4\u56DE\u7684\u662Fnew\u51FA\u6765\u7684\u4E00\u4E2A\u65B0\u7684request\uFF0C\u6240\u4EE5\u6839\u672C\u5C31\u4E0D\u518D\u662F\u539F\u6765\u7684\u5F15\u7528\u4E86</p><p>\u573A\u666F\u63CF\u8FF0\u4E8C\uFF1A\u5728\u81EA\u5DF1\u65B0\u542F\u7684\u7EBF\u7A0B\u91CC\uFF0C\u662F\u4E0D\u80FD\u4F7F\u7528request\u5BF9\u8C61\u7684\uFF0C\u5F53\u7136\u4E5F\u5C31\u4E0D\u80FD\u4F7F\u7528RequestContextHolder\u53BB\u83B7\u53D6\u5230\u8BF7\u6C42\u57DF\u5BF9\u8C61\u4E86\uFF0C\u9700\u8981\u7A0D\u52A0\u6CE8\u610F</p><p>\u76F8\u5173\u7C7B\uFF1ARequestAttributes</p><p>RequestAttributes\u8BE5\u63A5\u53E3\u7684\u5B9A\u4E49\u4E86\u4E00\u4E9B\u6BD4\u5982get/setAttribute()\u7684\u4FBF\u6377\u65B9\u6CD5\u3002\u5B83\u6709\u5F88\u591A\u5B50\u7C7B\uFF0C\u6BD4\u5982\u6211\u4EEC\u6700\u5E38\u7528\u7684ServletRequestAttributes\u6709\u8F83\u5927\u7684\u6269\u5C55\uFF0C\u91CC\u9762\u4EE3\u7406\u4E86request\u548Cresponse\u5F88\u591A\u65B9\u6CD5\uFF1A</p><pre><code>public final HttpServletRequest getRequest() {
	return this.request;
}

@Nullable
public final HttpServletResponse getResponse() {
	return this.response;
}

@Override
public Object getAttribute / setAttribute(String name, int scope) { ... }
getAttributeNames;
</code></pre><p>ServletWebRequest\u662FServletRequestAttributes\u7684\u5B50\u7C7B\uFF0C\u8FD8\u5B9E\u73B0\u4E86\u63A5\u53E3NativeWebRequest\uFF08\u63D0\u4F9B\u4E00\u4E9B\u83B7\u53D6Native Request\u7684\u65B9\u6CD5\uFF0C\u5176\u5B9E\u6CA1\u592A\u5927\u4F5C\u7528\uFF09\uFF1A\u5B83\u4EE3\u7406\u5F97\u5C31\u66F4\u52A0\u7684\u5168\u4E00\u4E9B\uFF0C\u6BD4\u5982\uFF1A</p><pre><code>@Nullable
public HttpMethod getHttpMethod() {
	return HttpMethod.resolve(getRequest().getMethod());
}

@Override
@Nullable
public String getHeader(String headerName) {
	return getRequest().getHeader(headerName);
}
getHeaderValues/getParameter/... \u7B49\u7B49\u4E00\u4E9B\u5217\u66F4\u591A\u7684\u4EE3\u7406\u65B9\u6CD5
</code></pre><p>DispatcherServletWebRequest\u7EE7\u7EED\u7EE7\u627F\u7684\u5B50\u7C7B\uFF0C\u6CA1\u4EC0\u4E48\u597D\u8BF4\u7684\uFF0C\u552F\u4E00\u5C31\u662F\u590D\u5199\u4E86\u6B64\u65B9\u6CD5\uFF1A</p><pre><code>@Override
public Locale getLocale() {
	return RequestContextUtils.getLocale(getRequest());
}
</code></pre><p>StandardServletAsyncWebRequest\u8FD9\u4E2A\u548C\u5F02\u6B65\u62E6\u622A\u5668\u76F8\u5173\uFF0C\u5C5E\u4E8E\u5F02\u6B65\u4E0A\u4E0B\u6587\u8303\u7574\uFF0C\u6B64\u5904\u4E0D\u505A\u8BA8\u8BBA\u3002</p><p>LocaleContextHolder\u4F7F\u7528\u4EE5\u53CA\u6E90\u7801\u5206\u6790</p><p>\u8FD9\u4E2A\u6BD4\u4E0A\u9762\u5C31\u66F4\u7B80\u5355\u4E9B\uFF0C\u662F\u6765\u505A\u672C\u5730\u5316\u3001\u56FD\u9645\u5316\u7684\u4E0A\u4E0B\u6587\u5BB9\u5668\u3002</p><pre><code>private static final ThreadLocal&lt;LocaleContext&gt; localeContextHolder =
		new NamedThreadLocal&lt;&gt;(&quot;LocaleContext&quot;);

private static final ThreadLocal&lt;LocaleContext&gt; inheritableLocaleContextHolder =
		new NamedInheritableThreadLocal&lt;&gt;(&quot;LocaleContext&quot;);
//\u6CA1\u6709\u624B\u52A8\u8C03\u7528setDefaultLocale,\u53D6\u503C\u4E3A  Locale#getDefault()
private static Locale defaultLocale;
//\u540C\u4E0A \u9ED8\u8BA4\u53D6\u503C\u4E3ATimeZone.getDefault()
private static TimeZone defaultTimeZone;
</code></pre><p>\u51E0\u4E4E\u6E90\u7801\u8FC7\u7A0B\u540CRequestContextHolder\uFF0C\u53EA\u9700\u8981\u6CE8\u610F\u4E00\u4E2A\u65B9\u6CD5\uFF1A</p><pre><code>// \u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4ECE\u8BF7\u6C42\u57DF\u62FF\u5230Local\u4E0A\u4E0B\u6587\uFF0C\u4F46\u662F\u4E5F\u662F\u53EF\u4EE5\u81EA\u5DF1\u4F20\u8FDB\u6765\u7684\u3002\u3002\u3002
public static Locale getLocale(@Nullable LocaleContext localeContext) { ... }
</code></pre><p>\u603B\u7ED3 \u5176\u5B9E\u8FD9\u4E24\u4E2A\u7C7B\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u6211\u4EEC\u7684\u5DE5\u5177\u6765\u4F7F\u7528\uFF0C\u6211\u4EEC\u96C6\u6210\u7684\u65F6\u5019\u4E5F\u53EF\u4EE5\u4F7F\u7528Spring\u63D0\u4F9B\u7684\u4E24\u4E2A\u7C7B\u3002 \u4EE5\u5C0F\u89C1\u5927\uFF0C\u4F18\u79C0\u4E4B\u6240\u4EE5\u4F18\u79C0\uFF0C\u662F\u56E0\u4E3ASpring\u786E\u5B9E\u505A\u5230\u4E86\u65B9\u4FBF\u3001\u5FEB\u6377\u7684\u7F16\u7801\u73AF\u5883\uFF0C\u89E3\u653Ecoder\uFF0C\u5B83\u505A\u4E86\u5F88\u591A\u3002\u5F53\u7136\u4EBA\u65E0\u5B8C\u4EBA\uFF0C\u6CA1\u6709\u5B8C\u7F8E\u7684\u4E1C\u897F\uFF0C\u6DF1\u5165\u7406\u89E3\u540E\u6211\u4EEC\u4E5F\u4F1A\u53D1\u73B0\uFF0C\u5176\u5B9E\u4F18\u79C0\u5982Spring\uFF0C\u91CC\u9762\u8FD8\u662F\u6709\u4E9B\u6211\u4EEC\u53EF\u4EE5\u53D1\u6325\uFF0C\u8865\u5145\u7684\u5730\u65B9 r\u548CLocaleContextHolder\u7684\u4F7F\u7528\u8BE6\u89E3\u4EE5\u53CA\u4F7F\u7528\u8BEF\u533A https://blog.51cto.com/u_3631118/3124516</p>`,35);function q(b,R){const r=u("ExternalLinkIcon");return n(),o("div",null,[p,e("p",null,[e("a",c,[t("\u53C2\u8003\u94FE\u63A5"),a(r)]),t(" \u524D\u8A00 \u5728Java Web\u7684\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u5927\u90FD\u6267\u884C\u7740\u4E09\u5C42\u7684\u5F00\u53D1\u6A21\u5F0F\uFF08Controller\u3001Service\u3001Dao\uFF09\u3002\u7136\u540E\u5F88\u5C11\u6709\u4EBA\u77E5\u9053\u8FD9\u4E09\u5C42\u7684\u804C\u8D23\u4FBF\u6377\u5728\u54EA\uFF1F")]),d])}const x=s(i,[["render",q],["__file","Spring MVC\u4E4BRequestContextHolder\u548CLocaleContextHolder\u7684\u4F7F\u7528\u8BE6\u89E3\u4EE5\u53CA\u4F7F\u7528\u8BEF\u533A.html.vue"]]);export{x as default};
