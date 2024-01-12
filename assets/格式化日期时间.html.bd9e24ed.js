import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,f as a}from"./app.4d667c68.js";const n={},l=a(`<h1 id="\u683C\u5F0F\u5316\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316\u65E5\u671F" aria-hidden="true">#</a> \u683C\u5F0F\u5316\u65E5\u671F</h1><h2 id="datetimeformatter" tabindex="-1"><a class="header-anchor" href="#datetimeformatter" aria-hidden="true">#</a> DateTimeFormatter</h2><p>\u4F7F\u7528\u65E7\u7684Date\u5BF9\u8C61\u65F6\uFF0C\u6211\u4EEC\u7528SimpleDateFormat\u8FDB\u884C\u683C\u5F0F\u5316\u663E\u793A\u3002\u4F7F\u7528\u65B0\u7684LocalDateTime\u6216ZonedLocalDateTime\u65F6\uFF0C\u6211\u4EEC\u8981\u8FDB\u884C\u683C\u5F0F\u5316\u663E\u793A\uFF0C\u5C31\u8981\u4F7F\u7528DateTimeFormatter\u3002</p><p>\u548CSimpleDateFormat\u4E0D\u540C\u7684\u662F\uFF0CDateTimeFormatter\u4E0D\u4F46\u662F\u4E0D\u53D8\u5BF9\u8C61\uFF0C\u5B83\u8FD8\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\u3002\u7EBF\u7A0B\u7684\u6982\u5FF5\u6211\u4EEC\u4F1A\u5728\u540E\u9762\u6D89\u53CA\u5230\u3002\u73B0\u5728\u6211\u4EEC\u53EA\u9700\u8981\u8BB0\u4F4F\uFF1A\u56E0\u4E3ASimpleDateFormat\u4E0D\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u53EA\u80FD\u5728\u65B9\u6CD5\u5185\u90E8\u521B\u5EFA\u65B0\u7684\u5C40\u90E8\u53D8\u91CF\u3002\u800CDateTimeFormatter\u53EF\u4EE5\u53EA\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5230\u5904\u5F15\u7528\u3002</p><ol><li>\u521B\u5EFADateTimeFormatter\u65F6\uFF0C\u901A\u8FC7\u4F20\u5165\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u5B9E\u73B0\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u4F20\u5165\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u65F6\uFF0C\u540C\u65F6\u6307\u5B9ALocale,\u5373\u56FD\u9645\u5316\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;E, yyyy-MMMM-dd HH:mm&quot;, Locale.US);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>final DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;EEEE, dd MMMM, yyyy&quot;, Locale.FRENCH);
final String month = LocalDate.now().format(formatter);

//\u6708
this.currentDate = LocalDate.now();
this.month = this.currentDate.getMonth().getDisplayName(TextStyle.FULL, Locale.FRANCE);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import java.time.*;
import java.time.format.*;
import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        ZonedDateTime zdt = ZonedDateTime.now();
        var formatter = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd&#39;T&#39;HH:mm ZZZZ&quot;);
        System.out.println(formatter.format(zdt));

        var zhFormatter = DateTimeFormatter.ofPattern(&quot;yyyy MMM dd EE HH:mm&quot;, Locale.CHINA);
        System.out.println(zhFormatter.format(zdt));

        var usFormatter = DateTimeFormatter.ofPattern(&quot;E, MMMM/dd/yyyy HH:mm&quot;, Locale.US);
        System.out.println(usFormatter.format(zdt));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8F93\u51FA\u7ED3\u679C\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2019-09-15T23:16 GMT+08:00
2019 9\u6708 15 \u5468\u65E5 23:16
Sun, September/15/2019 23:16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5C0F\u7ED3\uFF1A</strong></p><p>\u5BF9ZonedDateTime\u6216LocalDateTime\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u9700\u8981\u4F7F\u7528DateTimeFormatter\u7C7B\uFF1B</p><p>DateTimeFormatter\u53EF\u4EE5\u901A\u8FC7\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u548CLocale\u5BF9\u65E5\u671F\u548C\u65F6\u95F4\u8FDB\u884C\u5B9A\u5236\u8F93\u51FA\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728java8\u4E4B\u524D\u6211\u4EEC\u90FD\u7528SimpleDateFormat\u7C7B\u6765\u8FDB\u884C\u65F6\u95F4\u683C\u5F0F\u5316\uFF0C\u4F46\u8FD9\u79CD\u5B58\u5728\u4E00\u4E9B\u7F3A\u70B9\uFF1A
1.\u6BCF\u5904\u7406\u4E00\u6B21\u65F6\u95F4\u90FDnew\u4E00\u4E2ASimpleDateFormat\u5B9E\u4F8B\u5BF9\u8C61\u4F1A\u5360\u7528\u5927\u91CF\u7684\u5185\u5B58\u548Cjvm\u7A7A\u95F4
2.\u4E3A\u4E86\u51CF\u5C11\u5185\u5B58\u5F00\u9500\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528static\u5C06\u5176\u8BBE\u7F6E\u4E3A\u5171\u4EAB\u53D8\u91CF\uFF0C\u4F46SimpleDateFormat\u662F\u7EBF\u7A0B\u4E0D\u5B89\u5168\u7684\uFF0C\u9700\u8981\u901A\u8FC7\u52A0\u9501\u7684\u65B9\u5F0F\u6765\u89E3\u51B3
java8\u4E4B\u540E\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86DateTimeFormatter\u7C7B\u4EE3\u66FFSimpleDateFormat\uFF0C\u8FD9\u662F\u4E00\u4E2A\u7EBF\u7A0B\u5B89\u5168\u7684\u683C\u5F0F\u5316\u5DE5\u5177\u7C7B\u3002\u5177\u4F53\u4F7F\u7528\u5982\u4E0B\uFF1A
 
//\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u65E5\u671F
String dateStr= &quot;2018\u5E7412\u670818\u65E5&quot;;
DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;yyyy\u5E74MM\u6708dd\u65E5&quot;);
LocalDate date= LocalDate.parse(dateStr, formatter);
//String\u8F6CLocalDateTime
String strLocalDate = &quot;2021-06-15 18:00:00&quot;;
DateTimeFormatter fmt = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);
String str = strLocalDate;
LocalDateTime localDateTime = LocalDateTime.parse(str, fmt);
System.out.println(&quot;LocalDateTime \u7C7B\u578B\u8F93\u51FA\uFF1A&quot;+localDateTime);
 
//\u65E5\u671F\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32
LocalDateTime now = LocalDateTime.now();
DateTimeFormatter format = DateTimeFormatter.ofPattern(&quot;yyyy\u5E74MM\u6708dd\u65E5 HH:mm:ss&quot;);
String nowStr = now.format(format);

//LocalDate\u8F6CString
DateTimeFormatter fmt = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd&quot;);
LocalDate now = LocalDate.now();;
String dateStr = now.format(fmt);
System.out.println(&quot;\u73B0\u5728\u65F6\u95F4\u5B57\u7B26\u4E32\u4E3A\uFF1A&quot;+dateStr);


// LocalDate\u8F6CLocalDateTime
LocalDate localDate = LocalDate.now();
LocalDateTime localDateTime1 = localDate.atStartOfDay();
//23\u65F61\u52062\u79D2
LocalDateTime localDateTime2 = localDate.atTime(23,1,2);
//localTime \uFF1A\u65F6\u3001\u5206\u3001\u79D2\u3001\u6BEB\u79D2 \uFF1A 10:18:43.639
LocalTime localTime = LocalTime.now();
//\u62FC\u63A5\u5F53\u524D\u65F6\u95F4
LocalDateTime localDateTime3 = localDate.atTime(localTime);
System.out.println(&quot;atStartOfDay:\u65E5\u671F\u540E\u9762\u62FC\u63A5 00\u70B900\u5206 \uFF1A &quot;+localDateTime
System.out.println(&quot;atTime\uFF1A\u53C2\u6570\u5206\u522B\u4EE3\u8868 \u65F6\u3001\u5206\u3001\u79D2\uFF1A &quot;+localDateTime2);
System.out.println(&quot;atTime:\u62FC\u63A5\u5F53\u524DlocalTime : &quot;+localDateTime3);

//LocalDate\u8F6Cdate
LocalDate localDate = LocalDate.now();
ZoneId zone = ZoneId.systemDefault();
Instant instant = localDate.atStartOfDay().atZone(zone).toInstant();
Date date = Date.from(instant);
System.out.println(&quot;Date\u7C7B\u578B\uFF1A&quot;+date);
System.out.println(&quot;Date\u7C7B\u578B\u83B7\u53D6\u65F6\u95F4\u6233\uFF1A&quot;+date.getTime());

//date\u8F6CLocalDate
Date date = new Date();
LocalDate localDate = Instant.ofEpochMilli(date.getTime())
                        .atZone(ZoneId.systemDefault()).toLocalDate();
System.out.println(&quot;localDate\u7C7B\u578B\u8F93\u51FA\uFF1A&quot;+localDate);

//LocalDate\u83B7\u53D6\u65F6\u95F4\u6233
//\u521B\u5EFAlocalDate\uFF1A2021-06-16
LocalDate localDate = LocalDate.now();
//localDate \u8F6C LocalDateTime \uFF1A2021-06-16T00:00
LocalDateTime localDateTime = localDate.atStartOfDay();
//LocalDateTime  epoch-second \u503C\uFF0C\u5B83\u662F\u4ECE 1970-01-01T00:00:00Z \u5F00\u59CB\u7ECF\u8FC7\u7684\u79D2\u6570\u3002
long l1 = localDateTime.toEpochSecond(ZoneOffset.of(&quot;+8&quot;));
//toEpochMilli: \u81EA 1970-01-01T00:00:00Z \u7EAA\u5143\u4EE5\u6765\u7684\u6BEB\u79D2\u6570
long l2 = localDateTime.toInstant(ZoneOffset.of(&quot;+8&quot;)).toEpochMilli();
System.out.println(&quot;\u79D2\u6570\u6253\u5370 : &quot;+l1);
 System.out.println(&quot;\u6BEB\u79D2 : &quot;+l2);
 
Instant\uFF1A\u77AC\u65F6\u5B9E\u4F8B\u3002
LocalDate\uFF1A\u672C\u5730\u65E5\u671F\uFF0C\u4E0D\u5305\u542B\u5177\u4F53\u65F6\u95F4\u3002
LocalTime\uFF1A\u672C\u5730\u65F6\u95F4\uFF0C\u4E0D\u5305\u542B\u65E5\u671F\u3002
LocalDateTime\uFF1A\u7EC4\u5408\u4E86\u65E5\u671F\u548C\u65F6\u95F4\uFF0C\u4F46\u4E0D\u5305\u542B\u65F6\u5DEE\u548C\u65F6\u533A\u4FE1\u606F\u3002
ZonedDateTime\uFF1A\u6700\u5B8C\u6574\u7684\u65E5\u671F\u65F6\u95F4\uFF0C\u5305\u542B\u65F6\u533A\u548C\u76F8\u5BF9UTC\u6216\u683C\u6797\u5A01\u6CBB\u7684\u65F6\u5DEE\u3002
 
//Date\u8F6CLocalDateTime
Instant instant = date.toInstant();
ZoneId zoneId = ZoneId.systemDefault();
Date date = instant.atZone(zoneId).toLocalDateTime();
 
//LocalDateTime\u8F6CDate
ZoneId zoneId = ZoneId.systemDefault();
ZonedDateTime zdt = localDateTime.atZone(zoneId);
LocalDateTime localDateTime = Date.from(zdt.toInstant());

//LocalDateTime \u83B7\u53D6\u65F6\u95F4\u6233
long l = LocalDateTime.now().toEpochSecond(ZoneOffset.of(&quot;+8&quot;));
//\u83B7\u53D6\u6BEB\u79D2
long l1 = LocalDateTime.now().toInstant(ZoneOffset.of(&quot;+8&quot;)).toEpochMilli();
System.out.println(&quot;\u79D2\uFF1A &quot;+l);
System.out.println(&quot;\u6BEB\u79D2\uFF1A &quot;+l1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="simpledateformat" tabindex="-1"><a class="header-anchor" href="#simpledateformat" aria-hidden="true">#</a> SimpleDateFormat</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat(&quot;yyyy-MM-dd&quot;);
        String format = sdf.format(date);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),d=[l];function s(o,r){return i(),t("div",null,d)}const v=e(n,[["render",s],["__file","\u683C\u5F0F\u5316\u65E5\u671F\u65F6\u95F4.html.vue"]]);export{v as default};
