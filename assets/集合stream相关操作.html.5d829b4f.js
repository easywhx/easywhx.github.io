import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as t,f as i}from"./app.4d667c68.js";const s="/assets/dc3d1158.7c0e78fb.png",l={},a=i(`<h1 id="\u96C6\u5408stream" tabindex="-1"><a class="header-anchor" href="#\u96C6\u5408stream" aria-hidden="true">#</a> \u96C6\u5408stream</h1><h2 id="removeif\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#removeif\u7684\u4F7F\u7528" aria-hidden="true">#</a> removeIf\u7684\u4F7F\u7528</h2><p>Collection\u4EE5\u53CA\u5176\u5B50\u7C7B\u65B0\u52A0\u5165\u4E86removeIf\u65B9\u6CD5\uFF0C\u4F5C\u7528\u662F\u6309\u7167\u4E00\u5B9A\u89C4\u5219\u8FC7\u6EE4\u79FB\u9664\u96C6\u5408\u4E2D\u7684\u5143\u7D20</p><p><strong>lambda\u8868\u8FBE\u5F0F\u7684\u5199\u6CD5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Collection&lt;Person&gt; collection = new ArrayList();
collection.add(new Person(&quot;\u5F20\u4E09&quot;, 22, &quot;\u7537&quot;));
collection.add(new Person(&quot;\u674E\u56DB&quot;, 19, &quot;\u5973&quot;));
collection.add(new Person(&quot;\u738B\u4E94&quot;, 34, &quot;\u7537&quot;));
collection.add(new Person(&quot;\u8D75\u516D&quot;, 30, &quot;\u7537&quot;));
collection.add(new Person(&quot;\u7530\u4E03&quot;, 25, &quot;\u5973&quot;));


collection.removeIf(
	person -&gt; person.getAge() &gt;= 30
);//\u8FC7\u6EE430\u5C81\u4EE5\u4E0A\u7684\u6C42\u804C\u8005

System.out.println(collection.toString());//\u67E5\u770B\u7ED3\u679C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u975Elambda\u8868\u8FBE\u5F0F</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Collection&lt;Person&gt; collection = new ArrayList();
collection.add(new Person(&quot;\u5F20\u4E09&quot;, 22, &quot;\u7537&quot;));
collection.add(new Person(&quot;\u674E\u56DB&quot;, 19, &quot;\u5973&quot;));
collection.add(new Person(&quot;\u738B\u4E94&quot;, 34, &quot;\u7537&quot;));
collection.add(new Person(&quot;\u8D75\u516D&quot;, 30, &quot;\u7537&quot;));
collection.add(new Person(&quot;\u7530\u4E03&quot;, 25, &quot;\u5973&quot;));

collection.removeIf(new Predicate&lt;Person&gt;() {
    @Override
    public boolean test(Person person) {
	    return person.getAge()&gt;=30;//\u8FC7\u6EE430\u5C81\u4EE5\u4E0A\u7684\u6C42\u804C\u8005
    }
});

System.out.println(collection.toString());//\u67E5\u770B\u7ED3\u679C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u79FB\u9664\u96C6\u5408\u4E2D\u7684\u5143\u7D20\uFF0C\u4F20\u7EDF\u7684\u5199\u6CD5</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Collection&lt;Person&gt; collection = new ArrayList();
collection.add(new Person(&quot;\u5F20\u4E09&quot;, 22, &quot;\u7537&quot;));
collection.add(new Person(&quot;\u674E\u56DB&quot;, 19, &quot;\u5973&quot;));
collection.add(new Person(&quot;\u738B\u4E94&quot;, 34, &quot;\u7537&quot;));
collection.add(new Person(&quot;\u8D75\u516D&quot;, 30, &quot;\u7537&quot;));
collection.add(new Person(&quot;\u7530\u4E03&quot;, 25, &quot;\u5973&quot;));
//\u8FC7\u6EE430\u5C81\u4EE5\u4E0A\u7684\u6C42\u804C\u8005
Iterator&lt;Person&gt; iterator = collection.iterator();
while (iterator.hasNext()) {
    Person person = iterator.next();
    if (person.getAge() &gt;= 30)
        iterator.remove();
}
System.out.println(collection.toString());//\u67E5\u770B\u7ED3\u679C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5982\u4F55\u4F7F\u7528flatmap" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528flatmap" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528flatMap</h2><ol><li>\u4EC0\u4E48\u60C5\u51B5\u4E0B\u7528\u5230flatMap</li></ol><ul><li>\u5F53\u4F7F\u7528map\uFF08\uFF09\u64CD\u4F5C\u65F6\uFF0C\u4E0D\u662F\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u800C\u662F\u8FD4\u56DE\u4E00\u4E2A\u96C6\u5408\u6216\u8005\u4E00\u4E2A\u6570\u7EC4\u7684\u65F6\u5019\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528flatMap\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u4F60\u6709\u4E00\u4E2A\u5217\u8868 [21,23,42]\uFF0C\u7136\u540E\u4F60\u8C03\u7528getPrimeFactors()\u65B9\u6CD5map\u64CD\u4F5C \u4F7F\u6570\u7EC4\u8F6C\u5316\u6210stream\u3002</li><li>\u4E0A\u8FF0\u7ED3\u679C[[3,7],[2,3],[2,3,7]]\uFF0C\u8FD9\u4E2A\u7C7B\u578BStream&lt;String[]&gt; \u4F7F\u7528 stream \u64CD\u4F5C\uFF08filter\uFF0Csum\uFF0Cdistinct \u2026\uFF09\u548C collectors \u90FD\u4E0D\u652F\u6301\u8FD9\u79CD\u7C7B\u578B\u3002\u5982\u679C\u4F60\u60F3\u628AStream of Stream\u8F6C\u6362\u4E3A\u503C\u5217\u8868\uFF0C\u4F7F\u7528 flatMap() \u65B9\u6CD5 \u91CD\u65B0\u751F\u6210\u4E00\u4E2AStream\u5BF9\u8C61\uFF0C\u6700\u540E\u53EF\u4EE5\u5F97\u5230 [3,7,2,3,2,3,7]</li></ul><ol start="2"><li>flatMap\u5982\u4F55\u5DE5\u4F5C\u7684 <img src="`+s+`" alt=""> \u4F7F\u7528\u7EA2\u8272\u6807\u8BB0\u7684\u5217\u8868\u548C\u7EFF\u8272\u6807\u8BB0\u7684\u5217\u8868\uFF0C\u7ECF\u8FC7flatmap\u65B9\u6CD5\u540E\u5728\u7B2C\u4E8C\u4E2A\u7BA1\u9053\u4E2D\u628A\u628A\u4E0A\u8FF0\u4E24\u4E2A\u5217\u8868\u7684\u6570\u636E\u5408\u5E76\u6210\u4E00\u4E2A\u5217\u8868\u6570\u636E</li><li>flatmap \u4F7F\u7528\u4F8B\u5B50</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        List&lt;List&lt;Integer&gt;&gt; lists = new ArrayList&lt;&gt;();
        List&lt;Integer&gt; list = new ArrayList&lt;&gt;();
        list.add(4444);
        list.add(33333);
        list.add(444444);
        lists.add(list);
        lists.stream().flatMap(Collection::stream).forEach(System.out::println);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stream\u63A5\u53E3\u7EC8\u7AEF\u64CD\u4F5C-count-anymatch-allmatch-nonematch" tabindex="-1"><a class="header-anchor" href="#stream\u63A5\u53E3\u7EC8\u7AEF\u64CD\u4F5C-count-anymatch-allmatch-nonematch" aria-hidden="true">#</a> stream\u63A5\u53E3\u7EC8\u7AEF\u64CD\u4F5C count\uFF0CanyMatch\uFF0CallMatch\uFF0CnoneMatch</h2><p><strong>\u51FD\u6570\u5B9A\u4E49</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    long count();  
  
    boolean anyMatch(Predicate&lt;? super T&gt; predicate);  
  
    boolean allMatch(Predicate&lt;? super T&gt; predicate);  
  
    boolean noneMatch(Predicate&lt;? super T&gt; predicate);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>count\u65B9\u6CD5\uFF0C\u8DDFList\u63A5\u53E3\u7684size\u4E00\u6837\uFF0C\u8FD4\u56DE\u7684\u90FD\u662F\u8FD9\u4E2A\u96C6\u5408\u6D41\u7684\u5143\u7D20\u7684\u957F\u5EA6\uFF0C\u4E0D\u540C\u7684\u662F\uFF0C\u6D41\u662F\u96C6\u5408\u7684\u4E00\u4E2A\u9AD8\u7EA7\u5DE5\u5382\uFF0C\u4E2D\u95F4\u64CD\u4F5C\u662F\u5DE5\u5382\u91CC\u7684\u6BCF\u4E00\u9053\u5DE5\u5E8F\uFF0C\u6211\u4EEC\u5BF9\u8FD9\u4E2A\u6D41\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u8FDB\u884C\u5143\u7D20\u7684\u6570\u91CF\u7684\u548C\uFF1B</p><p>\u5269\u4E0B\u7684\u4E09\u4E2A\u65B9\u6CD5\uFF0C\u4F20\u5165\u7684\u90FD\u662FPredicate\u7684\u51FD\u6570\u5F0F\u63A5\u53E3\uFF0C\u63A5\u53E3\u5B9A\u4E49\u8BF7\u770B\u300AJAVA8 Predicate\u63A5\u53E3\u300B\uFF1B</p><p>anyMatch\u8868\u793A\uFF0C\u5224\u65AD\u7684\u6761\u4EF6\u91CC\uFF0C\u4EFB\u610F\u4E00\u4E2A\u5143\u7D20\u6210\u529F\uFF0C\u8FD4\u56DEtrue</p><p>allMatch\u8868\u793A\uFF0C\u5224\u65AD\u6761\u4EF6\u91CC,\u6240\u6709\u7684\u5143\u7D20\u90FD\u6EE1\u8DB3\uFF0C\u8FD4\u56DEtrue</p><p>noneMatch\u8DDFallMatch\u76F8\u53CD\uFF0C\u5224\u65AD\u6761\u4EF6\u91CC\u7684\u5143\u7D20\uFF0C\u6240\u6709\u7684\u90FD\u4E0D\u6EE1\u8DB3\u5373\u6761\u4EF6\u90FD\u662Ffalse\uFF0C\u8FD4\u56DEtrue</p><p><strong>\u793A\u4F8B</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u96C6\u5408\u4E0D\u4E3A\u7A7A
List&lt;String&gt; strs = Arrays.asList(&quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;b&quot;);
        boolean aa = strs.stream().anyMatch(str -&gt; str.equals(&quot;a&quot;));
        boolean bb = strs.stream().allMatch(str -&gt; str.equals(&quot;a&quot;));
        boolean cc = strs.stream().noneMatch(str -&gt; str.equals(&quot;a&quot;));
        long count = strs.stream().filter(str -&gt; str.equals(&quot;a&quot;)).count();
        System.out.println(aa);// TRUE
        System.out.println(bb);// FALSE
        System.out.println(cc);// FALSE
        System.out.println(count);// 4
        
//\u96C6\u5408\u4E3A\u7A7A
 public static void main(String[] args) {
        List&lt;String&gt; list = new ArrayList&lt;&gt;();
        boolean allMatch = list.stream().allMatch(e -&gt; e.equals(&quot;a&quot;));
        boolean anyMatch = list.stream().anyMatch(e -&gt; e.equals(&quot;a&quot;));
        boolean noneMatch = list.stream().noneMatch(e -&gt; e.equals(&quot;a&quot;));
        System.out.println(allMatch);// true
        System.out.println(anyMatch);// false
        System.out.println(noneMatch);// true
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53list\u7684\u4E3A\u7A7A\u96C6\u5408\u65F6\u5019\uFF0C\u8FD9\u4E2A\u8FD4\u56DE\u9ED8\u8BA4\u4E3Atrue\uFF1B\u6309\u7167\u5B9E\u9645\u7684\u4E1A\u52A1\uFF0C\u7406\u89E3\u8FD9\u4E2A\u7684\u8BDD\uFF0C\u5E94\u8BE5\u4E3Afalse\uFF1B</p><h2 id="\u77ED\u8DEF\u7EC8\u7AEF\u64CD\u4F5Cfindfirst\u3001findany" tabindex="-1"><a class="header-anchor" href="#\u77ED\u8DEF\u7EC8\u7AEF\u64CD\u4F5Cfindfirst\u3001findany" aria-hidden="true">#</a> \u77ED\u8DEF\u7EC8\u7AEF\u64CD\u4F5CfindFirst\u3001findAny</h2><p><strong>\u67E5\u627E\u9996\u4E2A findFirst</strong></p><blockquote><p>Optional first = list.stream().findFirst();</p></blockquote><p><strong>\u4ECElist\u4E2D\u4EFB\u610F\u53D6\u51FA\u6765\u4E00\u4E2A</strong></p><blockquote><p>Optional any = list.stream().findAny();</p></blockquote><h2 id="list\u8F6Cmap" tabindex="-1"><a class="header-anchor" href="#list\u8F6Cmap" aria-hidden="true">#</a> list\u8F6Cmap</h2><p><strong>\u4EE5 id \u4F5C\u4E3AKey \uFF0Cname\u4F5C\u4E3Avalue</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Map mapParam = classNameList.stream().collect(Collectors.toMap(ClassName::getId,ClassName::getName));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u4EE5 id \u4F5C\u4E3AKey\uFF0CclassName\u5BF9\u8C61\u4F5C\u4E3Avalue</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Map mapParam = classNameList.stream().collect(Collectors.toMap(ClassName::getId,ClassName::getName));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u4EE5 (id + name) \u4F5C\u4E3AKey\uFF0CclassName\u5BF9\u8C61\u4F5C\u4E3Avalue</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Map mapParam = classNameList.stream().collect(Collectors.toMap(ClassName::getId,ClassName::getName));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u91CD\u590D\u7684key</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
// \u5C06\u3010-&gt;value1\u3011\u6539\u6210\u3010-&gt;value2\u3011\uFF0C\u5373\u53EF\u5B9E\u73B0\u540E\u51FA\u73B0\u7684value\u8986\u76D6\u5148\u51FA\u73B0\u7684value
Map mapParamPrevious =
       classNameList.stream().collect(Collectors.toMap(ClassName::getId,ClassName::getName,(value1,value2)-&gt;value1));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4" aria-hidden="true">#</a> \u5206\u7EC4</h2><ol><li>\u5355\u5C42</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void singleLevelGrouping(List&lt;Person&gt; persons) {
    final Map&lt;String, List&lt;Person&gt;&gt; personsByCountry = persons.stream().collect(groupingBy(Person::getCountry));
    
    System.out.println(&quot;Persons in USA: &quot; + personsByCountry.get(&quot;USA&quot;));
}
// \u904D\u5386
   List&lt;Credential&gt; credentials = SqlUtil.getMapToList(entityManager, stringBuilder.toString(), Credential.class);
        List&lt;List&lt;Credential&gt;&gt; groupList = new ArrayList&lt;&gt;();
        credentials.stream().collect(Collectors.groupingBy(Credential::getPaymentMethod, Collectors.toList()))
                .forEach((paymentMethod, fooListByName) -&gt; groupList.add(fooListByName));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u4E8C\u7EA7</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void twoLevelGrouping(List&lt;Person&gt; persons) {
     final Map&lt;String, Map&lt;String, List&lt;Person&gt;&gt;&gt; personsByCountryAndCity = persons.stream().collect(
         groupingBy(Person::getCountry,
            groupingBy(Person::getCity)
        )
    );
    System.out.println(&quot;Persons living in London: &quot; + personsByCountryAndCity.get(&quot;UK&quot;).get(&quot;London&quot;).size());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u4E09\u7EA7</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void threeLevelGrouping(List&lt;Person&gt; persons) {
    final Map&lt;String, Map&lt;String, Map&lt;String, List&lt;Person&gt;&gt;&gt;&gt; personsByCountryCityAndPetName = persons.stream().collect(
            groupingBy(Person::getCountry,
                groupByCityAndPetName()
            )
    );
    System.out.println(&quot;Persons whose pet is named &#39;Max&#39; and live in NY: &quot; +
        personsByCountryCityAndPetName.get(&quot;USA&quot;).get(&quot;NYC&quot;).get(&quot;Max&quot;).size());
}
 
private Collector&lt;Person, ?, Map&lt;String, Map&lt;String, List&lt;Person&gt;&gt;&gt;&gt; groupByCityAndPetName() {
    return groupingBy(Person::getCity, groupingBy(p -&gt; p.getPet().getName()));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5FAA\u73AF\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u904D\u5386" aria-hidden="true">#</a> \u5FAA\u73AF\u904D\u5386</h2><p>peek \u64CD\u4F5C \u4E00\u822C\u7528\u4E8E\u4E0D\u60F3\u6539\u53D8\u6D41\u4E2D\u5143\u7D20\u672C\u8EAB\u7684\u7C7B\u578B\u6216\u8005\u53EA\u60F3\u5143\u7D20\u7684\u5185\u90E8\u72B6\u6001\u65F6\uFF1B\u800C map \u5219\u7528\u4E8E\u6539\u53D8\u6D41\u4E2D\u5143\u7D20\u672C\u8EAB\u7C7B\u578B\uFF0C\u5373\u4ECE\u5143\u7D20\u4E2D\u6D3E\u751F\u51FA\u53E6\u4E00\u79CD\u7C7B\u578B\u7684\u64CD\u4F5C\u3002\u8FD9\u662F\u4ED6\u4EEC\u4E4B\u95F4\u7684\u6700\u5927\u533A\u522B\u3002\u90A3\u4E48 peek \u5B9E\u9645\u4E2D\u6211\u4EEC\u4F1A\u7528\u4E8E\u54EA\u4E9B\u573A\u666F\u5462\uFF1F\u6BD4\u5982\u5BF9 <code>Collection&lt;T&gt;</code> \u4E2D\u7684 T \u7684\u67D0\u4E9B\u5C5E\u6027\u8FDB\u884C\u6279\u5904\u7406\u7684\u65F6\u5019\u7528 peek \u64CD\u4F5C\u5C31\u6BD4\u8F83\u5408\u9002\u3002\u5982\u679C\u6211\u4EEC\u8981\u4ECE <code>Collection&lt;T&gt;</code> \u4E2D\u83B7\u53D6 T \u7684\u67D0\u4E2A\u5C5E\u6027\u7684\u96C6\u5408\u65F6\u7528 map \u4E5F\u5C31\u6700\u597D\u4E0D\u8FC7\u4E86\u3002</p>`,48),r=[a];function d(o,u){return n(),t("div",null,r)}const m=e(l,[["render",d],["__file","\u96C6\u5408stream\u76F8\u5173\u64CD\u4F5C.html.vue"]]);export{m as default};
