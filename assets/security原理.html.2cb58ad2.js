import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as r,a as e,b as l,d as a,f as i,r as d}from"./app.4d667c68.js";const c="/assets/30a325aa.f66bef9b.png",u={},o=i('<h1 id="security\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#security\u539F\u7406" aria-hidden="true">#</a> security\u539F\u7406</h1><h3 id="\u4E09\u4E2A\u91CD\u8981\u7684\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u4E2A\u91CD\u8981\u7684\u7C7B" aria-hidden="true">#</a> \u4E09\u4E2A\u91CD\u8981\u7684\u7C7B</h3><p>Spring Security \u7684\u521D\u59CB\u5316\u548C\u8BA4\u8BC1\u6388\u6743\u662F\u56F4\u7ED5\u4E0B\u9762\u4E09\u7C7B\u5C55\u5F00\u7684\uFF1A</p><p>DelegatingFilterProxy</p><p>FilterChainProxy</p><p>SecurityFilterChain</p><h3 id="\u6838\u5FC3\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3\u539F\u7406" aria-hidden="true">#</a> \u6838\u5FC3\u539F\u7406</h3><p>\u57FA\u4E8E\u5BB9\u5668servlet\u7684\u8FC7\u6EE4\u5668\u94FEFilters\uFF0Cspring security \u505A\u5176\u4E2D\u7684\u4E00\u4E2A\u8FC7\u6EE4\u5668\uFF0C\u5B9E\u73B0\u8BA4\u8BC1\u6388\u6743\u7684\u529F\u80FD\uFF0C\u5728\u8FD9\u4E2A\u8FC7\u6EE4\u5668\u4E2D\u7BA1\u7406\u7740spring\u81EA\u5DF1\u7684\u8FC7\u6EE4\u5668\u94FE(\u5E76\u975E Servlet \u5BB9\u5668\u4E2D\u7684\u8FC7\u6EE4\u5668\u94FE)\u3002</p><p>\u4E24\u8005\u76F8\u7ED3\u5408\u7684\u65F6\u5019\u901A\u8FC7Spring \u63D0\u4F9B\u4E86\u4E00\u4E2A\u540D\u4E3ADelegatingFilterProxy\u7684Filter\u5B9E\u73B0\u7C7B\u6765\u5B9E\u73B0\u7684\uFF0CDelegatingFilterProxy \u5C31\u662F\u8FDE\u63A5\u4E8C\u8005\u7684\u6865\u6881\u3002\u5728DelegatingFilterProxy\u4E0B\u5305\u88F9\u8FD9spring security\u63D0\u4F9B\u7684\u91CD\u8981\u7684\u7C7BFilterChainProxy\uFF0C\u8FD9\u4E2A\u7C7B\u662Fspring security\u7684\u529F\u80FD\u5165\u53E3\uFF0C\u8FD9\u4E2A\u7C7B\u4E0B\u7BA1\u7406\u7740\u8BB8\u591A\u8FC7\u6EE4\u5668\u94FESecurityFilterChain\uFF0C</p><p><img src="'+c+'" alt=""></p><h3 id="\u5E38\u7528\u7684\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u5E38\u7528\u7684\u8FC7\u6EE4\u5668</h3><p>SecurityFilterChain \u662F\u4E00\u4E2A\u8FC7\u6EE4\u5668\u94FE\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u8BB8\u591A\u6709\u5E8F\u7684\u8FC7\u6EE4\u5668\uFF08\u88AB\u79F0\u4E3A Security Filter\uFF09\u3002Spring Security \u4E2D\u6709\u5305\u542B\u4E86\u8BB8\u591A\u7684 SecurityFilterChain\uFF0C\u800C\u8FD9\u4E9B SecurityFilterChain \u7EDF\u4E00\u7531 FilterChainProxy \u8C03\u7528\u3002</p><p>Spring Security \u4E2D\u6709\u8BB8\u591A\u8FC7\u6EE4\u5668\uFF0C\u5176\u7684\u529F\u80FD\u5747\u7531\u6709\u4E0B\u9762 32 \u4E2A\u8FC7\u6EE4\u5668\u5B9E\u73B0\u7684\uFF08\u52A0\u7C97\u7684\u662F\u8F83\u4E3A\u5E38\u7528\u7684\u8FC7\u6EE4\u5668\uFF09\uFF1A</p><ol><li><em>SecurityContextPersistenceFilter</em></li><li>HeaderWriterFilter</li><li>CorsFilter</li><li>CsrfFilter</li><li>LogoutFilter</li><li>OAuth2AuthorizationRequestRedirectFilter</li><li>Saml2WebSsoAuthenticationRequestFilter</li><li>X509AuthenticationFilter</li><li>AbstractPreAuthenticatedProcessingFilter</li><li>CasAuthenticationFilter</li><li>OAuth2LoginAuthenticationFilter</li><li>Saml2WebSsoAuthenticationFilter</li><li><strong>UsernamePasswordAuthenticationFilter</strong></li><li>OpenIDAuthenticationFilter</li><li>DefaultLoginPageGeneratingFilter</li><li>DefaultLogoutPageGeneratingFilter</li><li>ConcurrentSessionFilter</li><li><strong>DigestAuthenticationFilter</strong></li><li>BearerTokenAuthenticationFilter</li><li><strong>BasicAuthenticationFilter</strong></li><li>RequestCacheAwareFilter</li><li>SecurityContextHolderAwareRequestFilter</li><li>JaasApiIntegrationFilter</li><li>RememberMeAuthenticationFilter</li><li><em>AnonymousAuthenticationFilter</em></li><li>OAuth2AuthorizationCodeGrantFilter</li><li><em>SessionManagementFilter</em></li><li><strong>ExceptionTranslationFilter</strong></li><li><strong>FilterSecurityInterceptor</strong></li><li>SwitchUserFilter Spring Security \u4E5F\u662F\u6309\u7167\u4E0A\u9762\u7684\u987A\u5E8F\u8C03\u7528\u8FC7\u6EE4\u5668\uFF0C\u53EF\u80FD\u4F1A\u7565\u8FC7\u4E00\u4E9B\u8FC7\u6EE4\u5668\uFF0C\u4F46\u987A\u5E8F\u4E0D\u4F1A\u53D8\u3002</li></ol><h3 id="\u53C2\u8003\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8FDE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u8FDE\u63A5</h3>',15),v={href:"https://www.cnblogs.com/colin220/category/2088224.html",target:"_blank",rel:"noopener noreferrer"},b=i(`<h2 id="\u8BA4\u8BC1\u539F\u7406-\u57FA\u4E8E\u8868\u5355\u8F93\u5165\u7528\u6237\u540D\u5BC6\u7801\u7684\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC1\u539F\u7406-\u57FA\u4E8E\u8868\u5355\u8F93\u5165\u7528\u6237\u540D\u5BC6\u7801\u7684\u9A8C\u8BC1" aria-hidden="true">#</a> \u8BA4\u8BC1\u539F\u7406(\u57FA\u4E8E\u8868\u5355\u8F93\u5165\u7528\u6237\u540D\u5BC6\u7801\u7684\u9A8C\u8BC1)</h2><p>\u5165\u53E3\u70B9\uFF1A\u5728UsernamePasswordAuthenticationFilter\u65B9\u6CD5\u4E2D\u5904\u7406\uFF0C\u5728doFilter\u65B9\u6CD5\u4E2D\u8C03\u7528attemptAuthentication\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        if (this.postOnly &amp;&amp; !request.getMethod().equals(&quot;POST&quot;)) {
            throw new AuthenticationServiceException(&quot;Authentication method not supported: &quot; + request.getMethod());
        } else {
            String username = this.obtainUsername(request);
            username = username != null ? username.trim() : &quot;&quot;;
            String password = this.obtainPassword(request);
            password = password != null ? password : &quot;&quot;;
            UsernamePasswordAuthenticationToken authRequest = UsernamePasswordAuthenticationToken.unauthenticated(username, password);
            this.setDetails(request, authRequest);
            return this.getAuthenticationManager().authenticate(authRequest);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728attemptAuthentication\u65B9\u6CD5\u4E2D\u8C03\u7528\u8BA4\u8BC1\u7BA1\u7406\u5668AuthenticationManager\u7684\u5B9E\u73B0\u7C7B\u8EAB\u4EFD\u63D0\u4F9B\u7BA1\u7406\u5668ProviderManager\u4E2D\u7684authenticate\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        Class&lt;? extends Authentication&gt; toTest = authentication.getClass();
        AuthenticationException lastException = null;
        AuthenticationException parentException = null;
        Authentication result = null;
        Authentication parentResult = null;
        int currentPosition = 0;
        int size = this.providers.size();
        Iterator var9 = this.getProviders().iterator();

        while(var9.hasNext()) {
            AuthenticationProvider provider = (AuthenticationProvider)var9.next();
            if (provider.supports(toTest)) {
                if (logger.isTraceEnabled()) {
                    Log var10000 = logger;
                    String var10002 = provider.getClass().getSimpleName();
                    ++currentPosition;
                    var10000.trace(LogMessage.format(&quot;Authenticating request with %s (%d/%d)&quot;, var10002, currentPosition, size));
                }

                try {
                    result = provider.authenticate(authentication);
                    if (result != null) {
                        this.copyDetails(authentication, result);
                        break;
                    }
                } catch (InternalAuthenticationServiceException | AccountStatusException var14) {
                    this.prepareException(var14, authentication);
                    throw var14;
                } catch (AuthenticationException var15) {
                    lastException = var15;
                }
            }
        }

        if (result == null &amp;&amp; this.parent != null) {
            try {
                parentResult = this.parent.authenticate(authentication);
                result = parentResult;
            } catch (ProviderNotFoundException var12) {
            } catch (AuthenticationException var13) {
                parentException = var13;
                lastException = var13;
            }
        }

        if (result != null) {
            if (this.eraseCredentialsAfterAuthentication &amp;&amp; result instanceof CredentialsContainer) {
                ((CredentialsContainer)result).eraseCredentials();
            }

            if (parentResult == null) {
                this.eventPublisher.publishAuthenticationSuccess(result);
            }

            return result;
        } else {
            if (lastException == null) {
                lastException = new ProviderNotFoundException(this.messages.getMessage(&quot;ProviderManager.providerNotFound&quot;, new Object[]{toTest.getName()}, &quot;No AuthenticationProvider found for {0}&quot;));
            }

            if (parentException == null) {
                this.prepareException((AuthenticationException)lastException, authentication);
            }

            throw lastException;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728authenticate\u65B9\u6CD5\u4E2D\u5C06\u8BA4\u8BC1\u4EA4\u7ED9\u8BA4\u8BC1\u63D0\u4F9B\u5668AuthenticationProvider\u5904\u7406\uFF0C\u5373\u8C03\u7528provider.authenticate(authentication)\uFF0CAuthenticationProvider\u4E3B\u8981\u8D1F\u8D23\u67E5\u8BE2\u7528\u6237\u7684\u4FE1\u606F\u540C\u65F6\u9A8C\u8BC1\u7528\u6237\u540D\u548C\u5BC6\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        Assert.isInstanceOf(UsernamePasswordAuthenticationToken.class, authentication, () -&gt; {
            return this.messages.getMessage(&quot;AbstractUserDetailsAuthenticationProvider.onlySupports&quot;, &quot;Only UsernamePasswordAuthenticationToken is supported&quot;);
        });
        String username = this.determineUsername(authentication);
        boolean cacheWasUsed = true;
        UserDetails user = this.userCache.getUserFromCache(username);
        if (user == null) {
            cacheWasUsed = false;

            try {
                user = this.retrieveUser(username, (UsernamePasswordAuthenticationToken)authentication);
            } catch (UsernameNotFoundException var6) {
                this.logger.debug(&quot;Failed to find user &#39;&quot; + username + &quot;&#39;&quot;);
                if (!this.hideUserNotFoundExceptions) {
                    throw var6;
                }

                throw new BadCredentialsException(this.messages.getMessage(&quot;AbstractUserDetailsAuthenticationProvider.badCredentials&quot;, &quot;Bad credentials&quot;));
            }

            Assert.notNull(user, &quot;retrieveUser returned null - a violation of the interface contract&quot;);
        }

        try {
            this.preAuthenticationChecks.check(user);
            this.additionalAuthenticationChecks(user, (UsernamePasswordAuthenticationToken)authentication);
        } catch (AuthenticationException var7) {
            if (!cacheWasUsed) {
                throw var7;
            }

            cacheWasUsed = false;
            user = this.retrieveUser(username, (UsernamePasswordAuthenticationToken)authentication);
            this.preAuthenticationChecks.check(user);
            this.additionalAuthenticationChecks(user, (UsernamePasswordAuthenticationToken)authentication);
        }

        this.postAuthenticationChecks.check(user);
        if (!cacheWasUsed) {
            this.userCache.putUserInCache(user);
        }

        Object principalToReturn = user;
        if (this.forcePrincipalAsString) {
            principalToReturn = user.getUsername();
        }

        return this.createSuccessAuthentication(principalToReturn, authentication, user);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u65B9\u6CD5\u4E2D\u505A\u51E0\u4EF6\u4E8B\uFF1A1\u3001\u9A8C\u8BC1\u7528\u6237\u540D 2\u3001\u9A8C\u8BC1\u5BC6\u7801 3\u3001\u6784\u9020\u5DF2\u8BA4\u8BC1\u7684\u6210\u529F\u7684\u8BA4\u8BC1\u5BF9\u8C61</p><p>\u63A5\u7740\u5411\u4E0A\u8FD4\u56DE\u8BA4\u8BC1\u6210\u529F\u7684\u7ED3\u679C\u5BF9\u8C61\uFF0C\u4E00\u76F4\u5230AbstractAuthenticationProcessingFilter\u7684doFilter,\u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u8C03\u7528successfulAuthentication\u65B9\u6CD5\uFF0C\u8FDB\u884C\u8BA4\u8BC1\u6210\u529F\u7684\u540E\u7EED\u5904\u7406</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        SecurityContext context = SecurityContextHolder.createEmptyContext();
        context.setAuthentication(authResult);
        SecurityContextHolder.setContext(context);
        this.securityContextRepository.saveContext(context, request, response);
        if (this.logger.isDebugEnabled()) {
            this.logger.debug(LogMessage.format(&quot;Set SecurityContextHolder to %s&quot;, authResult));
        }

        this.rememberMeServices.loginSuccess(request, response, authResult);
        if (this.eventPublisher != null) {
            this.eventPublisher.publishEvent(new InteractiveAuthenticationSuccessEvent(authResult, this.getClass()));
        }

        this.successHandler.onAuthenticationSuccess(request, response, authResult);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u8FDB\u884C1\u3001\u5B89\u5168\u4E0A\u4E0B\u6587\u7684\u6784\u9020\uFF0C\u5C06\u8BA4\u8BC1\u7ED3\u679C\u4FDD\u5B58\u5230\u4E0A\u4E0B\u6587\u4E2D\uFF0C2\u3001\u5C06\u4E0A\u4E0B\u6587\u4FDD\u5B58\u5B89\u5168\u4E0A\u4E0B\u6587\u6301\u6709\u5668SecurityContextHolder\u4E2D\uFF0C\u5373\u6700\u7EC8\u4FDD\u5B58\u5230\u7EBF\u7A0B\u5BF9\u8C61\u4E2D\uFF0C\u8BA9\u540E\u7EED\u4E1A\u52A1\u53EF\u4EE5\u4F7F\u7528\u30023\u3001\u5C06\u4E0A\u4E0B\u6587\u4FDD\u5B58\u5230session\u5BF9\u8C61\u4E2D-&gt;\u5C06session\u5BF9\u8C61\u4FDD\u5B58\u5728\u5E94\u7528 \u4E0A\u4E0B\u6587context\u6216\u5BB9\u5668\u4E0A\u4E0B\u6587\u7684session\u7BA1\u7406\u5668\u4E2D\uFF0C\u5373Map&lt;String, Session&gt;\u5BF9\u8C61\u4E2D\u3002</p><h2 id="\u57FA\u4E8Esession\u7684\u8BA4\u8BC1\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8Esession\u7684\u8BA4\u8BC1\u539F\u7406" aria-hidden="true">#</a> \u57FA\u4E8Esession\u7684\u8BA4\u8BC1\u539F\u7406</h2><p>\u5165\u53E3\u70B9\uFF1A\u5728SecurityContextPersistenceFilter\u8FC7\u6EE4\u5668\u7684doFilter\u65B9\u6CD5\u4E2D\u7684\u8C03\u7528HttpSessionSecurityContextRepository\u7684loadContext\u65B9\u6CD5\uFF0C\u83B7\u53D6\u5B89\u5168\u4E0A\u4E0B\u6587\u5373\u7528\u6237\u76F8\u5173\u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public SecurityContext loadContext(HttpRequestResponseHolder requestResponseHolder) {
        HttpServletRequest request = requestResponseHolder.getRequest();
        HttpServletResponse response = requestResponseHolder.getResponse();
        HttpSession httpSession = request.getSession(false);
        SecurityContext context = this.readSecurityContextFromSession(httpSession);
        if (context == null) {
            context = this.generateNewContext();
            if (this.logger.isTraceEnabled()) {
                this.logger.trace(LogMessage.format(&quot;Created %s&quot;, context));
            }
        }

        if (response != null) {
            SaveToSessionResponseWrapper wrappedResponse = new SaveToSessionResponseWrapper(response, request, httpSession != null, context);
            requestResponseHolder.setResponse(wrappedResponse);
            requestResponseHolder.setRequest(new SaveToSessionRequestWrapper(request, wrappedResponse));
        }

        return context;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728loadContext\u65B9\u6CD5\u4E2D\u5148\u83B7\u53D6session\u5BF9\u8C61\uFF0C\u8BFB\u53D6\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002\u5982\u679C\u5B89\u5168\u4E0A\u4E0B\u6587\u4FE1\u606F\u4E3A\u7A7A\u5219\u65B0\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E14\u5176\u4E2D\u7684\u8BA4\u8BC1\u5BF9\u8C61\u4E3A\u7A7A\uFF0C\u7136\u540E\u8FD4\u56DE\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u63A5\u7740\u5728doFileter\u65B9\u6CD5\u4E2D\u5C06\u8FD4\u56DE\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4FDD\u5B58\u5230\u7EBF\u7A0B\u53D8\u91CF\u4E2D\u5373securitycontextHolder\u4E2D</p><p>\u7136\u540E\u7EE7\u7EED\u8D70\u8FC7\u6EE4\u5668\u94FE\u76F4\u5230\u8D70\u5230\u533F\u540D\u8FC7\u6EE4\u5668AnonymousAuthenticationFilter\u7684doFilter\u65B9\u6CD5\u4E2D\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        if (SecurityContextHolder.getContext().getAuthentication() == null) {
            Authentication authentication = this.createAuthentication((HttpServletRequest)req);
            SecurityContext context = SecurityContextHolder.createEmptyContext();
            context.setAuthentication(authentication);
            SecurityContextHolder.setContext(context);
            if (this.logger.isTraceEnabled()) {
                this.logger.trace(LogMessage.of(() -&gt; {
                    return &quot;Set SecurityContextHolder to &quot; + SecurityContextHolder.getContext().getAuthentication();
                }));
            } else {
                this.logger.debug(&quot;Set SecurityContextHolder to anonymous SecurityContext&quot;);
            }
        } else if (this.logger.isTraceEnabled()) {
            this.logger.trace(LogMessage.of(() -&gt; {
                return &quot;Did not set SecurityContextHolder since already authenticated &quot; + SecurityContextHolder.getContext().getAuthentication();
            }));
        }

        chain.doFilter(req, res);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u8FF0\u65B9\u6CD5\u4E2D\u5148\u4ECE\u7EBF\u7A0B\u53D8\u91CF\u4E2D\u83B7\u53D6\u8BA4\u8BC1\u5BF9\u8C61\uFF0C\u5224\u65AD\u8BA4\u8BC1\u5BF9\u8C61\u662F\u5426\u4E3Anull,\u5982\u679C\u4E3A\u7A7A\u5219\u521B\u5EFA\u4E00\u4E2A\u533F\u540D\u7684\u8BA4\u8BC1\u5BF9\u8C61\u653E\u5165\u5B89\u5168\u4E0A\u4E0B\u6587SecurityContext\u4E2D\u7136\u540E\u8FDB\u5165\u8C03\u7528\u8FC7\u6EE4\u5668\u94FE</p><p>\u5728\u8D70\u5230SessionManagementFilter\u65F6\uFF0C\u5224\u65AD\u7F13\u5B58\u4E2D\u662F\u5426\u6709\u76F8\u540C\u7684session\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u83B7\u53D6\u8EAB\u4EFD\u8BA4\u8BC1\u4FE1\u606F\u8FDB\u884Csession\u7B56\u7565\u8BA4\u8BC1</p><p>\u6700\u540E\u8D70\u5230FilterSecurityInterceptor\u4E2D\uFF0C\u5728doFilter\u65B9\u6CD5\u4E2D\u8C03\u7528invoke\u65B9\u6CD5,\u5B9E\u73B0\u5B89\u5168\u8FC7\u6EE4\u5668\u62E6\u622A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        this.invoke(new FilterInvocation(request, response, chain));
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728invoke\u65B9\u6CD5\u4E2D\uFF0C \u6838\u5FC3\u662F\u8C03\u7528\u7236\u7C7B\u7684beforeInvocation\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u6388\u6743\u8BA4\u8BC1\uFF0C\u5982\u679C\u662F\u533F\u540D\u767B\u5F55\u5219\u6743\u9650\u8BA4\u8BC1\u65F6\u4E00\u5B9A\u4F1A\u5931\u8D25\uFF0C\u5E76\u4E14\u6743\u9650\u8BA4\u8BC1\u65F6\u662F\u901A\u8FC7\u8C03\u7528webExpressionVoter\u7684vote\u83B7\u53D6\u6700\u7EC8\u7684\u8BA4\u8BC1\u7ED3\u679C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void invoke(FilterInvocation filterInvocation) throws IOException, ServletException {
        if (this.isApplied(filterInvocation) &amp;&amp; this.observeOncePerRequest) {
            filterInvocation.getChain().doFilter(filterInvocation.getRequest(), filterInvocation.getResponse());
        } else {
            if (filterInvocation.getRequest() != null &amp;&amp; this.observeOncePerRequest) {
                filterInvocation.getRequest().setAttribute(&quot;__spring_security_filterSecurityInterceptor_filterApplied&quot;, Boolean.TRUE);
            }

            InterceptorStatusToken token = super.beforeInvocation(filterInvocation);

            try {
                filterInvocation.getChain().doFilter(filterInvocation.getRequest(), filterInvocation.getResponse());
            } finally {
                super.finallyInvocation(token);
            }

            super.afterInvocation(token, (Object)null);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u83B7\u53D6\u6295\u7968\u7ED3\u679C
public int vote(Authentication authentication, FilterInvocation filterInvocation, Collection&lt;ConfigAttribute&gt; attributes) {
        Assert.notNull(authentication, &quot;authentication must not be null&quot;);
        Assert.notNull(filterInvocation, &quot;filterInvocation must not be null&quot;);
        Assert.notNull(attributes, &quot;attributes must not be null&quot;);
        WebExpressionConfigAttribute webExpressionConfigAttribute = this.findConfigAttribute(attributes);
        if (webExpressionConfigAttribute == null) {
            this.logger.trace(&quot;Abstained since did not find a config attribute of instance WebExpressionConfigAttribute&quot;);
            return 0;
        } else {
            // \u6784\u5EFA\u8BC4\u4F30\u4E0A\u4E0B\u6587
            EvaluationContext ctx = webExpressionConfigAttribute.postProcess(this.expressionHandler.createEvaluationContext(authentication, filterInvocation), filterInvocation);
            //\u83B7\u53D6\u6743\u9650\u6388\u6743\u7ED3\u679C
            boolean granted = ExpressionUtils.evaluateAsBoolean(webExpressionConfigAttribute.getAuthorizeExpression(), ctx);
            if (granted) {
                return 1;
            } else {
                this.logger.trace(&quot;Voted to deny authorization&quot;);
                return -1;
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u57FA\u4E8E\u65B9\u6CD5\u7684\u52A8\u6001\u6743\u9650\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u65B9\u6CD5\u7684\u52A8\u6001\u6743\u9650\u539F\u7406" aria-hidden="true">#</a> \u57FA\u4E8E\u65B9\u6CD5\u7684\u52A8\u6001\u6743\u9650\u539F\u7406\uFF1A</h2><p>\u5165\u53E3\u70B9\uFF1A\u5728FilterSecurityInterceptor\u8FC7\u6EE4\u5668\u4E2D\u5904\u7406\uFF0C\u5728invoke\u65B9\u6CD5\u4E2D\u8C03\u7528\u7236\u7C7BAbstractSecurityInterceptor\u7684beforeInvocation\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void invoke(FilterInvocation filterInvocation) throws IOException, ServletException {
        if (this.isApplied(filterInvocation) &amp;&amp; this.observeOncePerRequest) {
            filterInvocation.getChain().doFilter(filterInvocation.getRequest(), filterInvocation.getResponse());
        } else {
            if (filterInvocation.getRequest() != null &amp;&amp; this.observeOncePerRequest) {
                filterInvocation.getRequest().setAttribute(&quot;__spring_security_filterSecurityInterceptor_filterApplied&quot;, Boolean.TRUE);
            }

            InterceptorStatusToken token = super.beforeInvocation(filterInvocation);

            try {
                filterInvocation.getChain().doFilter(filterInvocation.getRequest(), filterInvocation.getResponse());
            } finally {
                super.finallyInvocation(token);
            }

            super.afterInvocation(token, (Object)null);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728beforeInvocation\u65B9\u6CD5\u4E2D\u6709\u4E2A\u5173\u952E\u65B9\u6CD5attemptAuthorization,\u5C1D\u8BD5\u6388\u6743</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected InterceptorStatusToken beforeInvocation(Object object) {
        Assert.notNull(object, &quot;Object was null&quot;);
        if (!this.getSecureObjectClass().isAssignableFrom(object.getClass())) {
            throw new IllegalArgumentException(&quot;Security invocation attempted for object &quot; + object.getClass().getName() + &quot; but AbstractSecurityInterceptor only configured to support secure objects of type: &quot; + this.getSecureObjectClass());
        } else {
            Collection&lt;ConfigAttribute&gt; attributes = this.obtainSecurityMetadataSource().getAttributes(object);
            if (CollectionUtils.isEmpty(attributes)) {
                Assert.isTrue(!this.rejectPublicInvocations, () -&gt; {
                    return &quot;Secure object invocation &quot; + object + &quot; was denied as public invocations are not allowed via this interceptor. This indicates a configuration error because the rejectPublicInvocations property is set to &#39;true&#39;&quot;;
                });
                if (this.logger.isDebugEnabled()) {
                    this.logger.debug(LogMessage.format(&quot;Authorized public object %s&quot;, object));
                }

                this.publishEvent(new PublicInvocationEvent(object));
                return null;
            } else {
                ...................
                this.attemptAuthorization(object, attributes, authenticated);
                ...........................
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728attemptAuthorization\u65B9\u6CD5\u4E2D\u5C06\u8C03\u7528\u51B3\u7B56\u7BA1\u7406\u5668AccessDecisionManager\u7684decide\u65B9\u6CD5\uFF0C\u51B3\u5B9A\u5F53\u524D\u7528\u6237\u662F\u5426\u80FD\u6388\u6743\u8BBF\u95EE\u3002</p><p><strong>AccessDecisionManager</strong>\u8FD9\u4E2A\u7C7B\u6BD4\u8F83\u91CD\u8981\uFF0C\u4E13\u95E8\u8D1F\u8D23\u6388\u6743\u8BBF\u95EE\u63A7\u5236\uFF0C\u662F\u8BBF\u95EE\u63A7\u5236\u7684\u5165\u53E3\u70B9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> private void attemptAuthorization(Object object, Collection&lt;ConfigAttribute&gt; attributes, Authentication authenticated) {
        try {
            this.accessDecisionManager.decide(authenticated, object, attributes);
        } catch (AccessDeniedException var5) {
            if (this.logger.isTraceEnabled()) {
                this.logger.trace(LogMessage.format(&quot;Failed to authorize %s with attributes %s using %s&quot;, object, attributes, this.accessDecisionManager));
            } else if (this.logger.isDebugEnabled()) {
                this.logger.debug(LogMessage.format(&quot;Failed to authorize %s with attributes %s&quot;, object, attributes));
            }

            this.publishEvent(new AuthorizationFailureEvent(object, attributes, authenticated, var5));
            throw var5;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728decide\u65B9\u6CD5\u4E2D\uFF0C\u6838\u5FC3\u5904\u7406\u903B\u8F91\u662F\u8C03\u7528\u8BBF\u95EE\u51B3\u7B56\u9009\u4E3E\u5668AccessDecisionVoter\u4E2D\u7684vote\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u6295\u7968\u9009\u4E3E\u5668\u7684\u6700\u7EC8\u7ED3\u679C\u3002\u5982\u679C\u9009\u4E3E\u5931\u8D25\u5219\u629B\u51FA\u5F02\u5E38<em>Access is denied</em></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class AffirmativeBased extends AbstractAccessDecisionManager {
    public AffirmativeBased(List&lt;AccessDecisionVoter&lt;?&gt;&gt; decisionVoters) {
        super(decisionVoters);
    }

    public void decide(Authentication authentication, Object object, Collection&lt;ConfigAttribute&gt; configAttributes) throws AccessDeniedException {
        int deny = 0;
        Iterator var5 = this.getDecisionVoters().iterator();

        while(var5.hasNext()) {
            AccessDecisionVoter voter = (AccessDecisionVoter)var5.next();
            int result = voter.vote(authentication, object, configAttributes);
            switch (result) {
                case -1:
                    ++deny;
                    break;
                case 1:
                    return;
            }
        }

        if (deny &gt; 0) {
            throw new AccessDeniedException(this.messages.getMessage(&quot;AbstractAccessDecisionManager.accessDenied&quot;, &quot;Access is denied&quot;));
        } else {
            this.checkAllowIfAllAbstainDecisions();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F53\u67D0\u4E2A\u8DEF\u5F84\u8BBE\u7F6E\u4E3Apermitall\u65F6" tabindex="-1"><a class="header-anchor" href="#\u5F53\u67D0\u4E2A\u8DEF\u5F84\u8BBE\u7F6E\u4E3Apermitall\u65F6" aria-hidden="true">#</a> \u5F53\u67D0\u4E2A\u8DEF\u5F84\u8BBE\u7F6E\u4E3ApermitAll\u65F6</h3><p>\u6839\u636E\u8FC7\u6EE4\u5668\u8C03\u7528\u5BF9\u8C61FilterInvocation\u83B7\u53D6\u5F53\u524D\u8D44\u6E90\u9700\u8981\u6EE1\u8DB3\u7684\u521D\u59CB\u5316\u914D\u7F6E\u6743\u9650\uFF0C\u8FD9\u4E2A\u6743\u9650\u5206\u4E3A\u4E24\u79CD\uFF1A1\u3001\u914D\u7F6E\u7C7B\u4E2D\u914D\u7F6EpermitAll,2\u3001\u4E1A\u52A1\u63A7\u5236\u5C42\u914D\u7F6E\u7684\u6CE8\u89E3\u6743\u9650</p><p><strong>\u4F18\u5148\u7EA7\uFF1A</strong> \u524D\u8005\u5927\u4E8E\u540E\u8005\uFF0C\u4F1A\u9884\u5148\u83B7\u53D6\u4F18\u5148\u7EA7\u9AD8\u7684\u4F5C\u4E3A\u6743\u9650\u6BD4\u8F83\u7684\u6807\u51C6\uFF0C\u540E\u8005\u7684\u6CE8\u89E3\u6743\u9650\u5219\u5728\u8BA4\u8BC1\u901A\u8FC7\u4E4B\u540E\u8BBF\u95EE\u5177\u4F53\u8D44\u6E90\u65F6\u901A\u8FC7\u62E6\u622A\u5668\u4EE3\u7406\u8FDB\u884C\u7B2C\u4E8C\u6B21\u52A8\u6001\u6743\u9650\u8BA4\u8BC1</p><p>\u4E3E\u4F8B\u8BF4\u660E1\uFF1A/user/***\u8BBE\u7F6E\u533F\u540D\u8BBF\u95EE\uFF08\u5373permitAll\uFF09\uFF0C\u540C\u65F6\u52A0\u4E0ApreAuthrize\u6CE8\u89E3</p><p>\u5728\u8BA4\u8BC1\u65F6\u7528permitAll\u4F5C\u4E3A\u6BD4\u8F83\u6807\u51C6\uFF0C\u8BA4\u8BC1\u901A\u8FC7\uFF0C\u63A5\u7740\u5728\u8BBF\u95EE\u5177\u4F53\u8D44\u6E90\u65F6\u4F1A\u518D\u6B21\u8FDB\u884C\u8BA4\u8BC1\uFF0C\u8FD9\u6B21\u7684\u6BD4\u8F83\u6807\u51C6\u65F6hasRole(&#39;ddwdada&#39;),\u8BA4\u8BC1\u5931\u8D25\uFF0C\u533F\u540D\u6743\u9650\u4E0D\u7B49\u4EF7\u4E0EROLE_ddwdada\u6743\u9650</p><p>\u4E3E\u4F8B\u8BF4\u660E1\uFF1A/user/***\u8BBE\u7F6E\u533F\u540D\u8BBF\u95EE\uFF08\u5373permitAll\uFF09\uFF0C\u65B9\u6CD5\u4E0A\u4E0D\u52A0\u6CE8\u89E3</p><p>\u5728\u8BA4\u8BC1\u65F6\u7528permitAll\u4F5C\u4E3A\u6BD4\u8F83\u6807\u51C6\uFF0C\u8BA4\u8BC1\u901A\u8FC7\uFF0C\u4E0D\u4F1A\u505A\u4E8C\u6B21\u7684\u8BA4\u8BC1\u6821\u9A8C</p><h2 id="filterorderregistration" tabindex="-1"><a class="header-anchor" href="#filterorderregistration" aria-hidden="true">#</a> FilterOrderRegistration</h2><p>\u8FC7\u6EE4\u5668\u4F18\u5148\u7EA7\u6CE8\u518C\u5668\uFF0C\u76EE\u7684\u662F\u7ED9\u8FC7\u6EE4\u5668\u8FDB\u884C\u6392\u5E8F</p><h2 id="\u8FC7\u6EE4\u5668\u521D\u59CB\u5316\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4\u5668\u521D\u59CB\u5316\u539F\u7406" aria-hidden="true">#</a> \u8FC7\u6EE4\u5668\u521D\u59CB\u5316\u539F\u7406</h2><p>\u5728\u521B\u5EFAhttpSecurity\u5BF9\u8C61\u65F6\uFF0C\u4F1A\u9884\u5148\u521D\u59CB\u5316\u9ED8\u8BA4\u7684http\u914D\u7F6E\u5668\uFF0C\u6BCF\u4E00\u4E2A\u914D\u7F6E\u5668\u90FD\u4E0E\u8FC7\u6EE4\u5668\u5BF9\u5E94</p><p>\u83B7\u53D6\u9ED8\u8BA4\u7684\u914D\u7F6E\u5668\u5B9E\u5217</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>List&lt;AbstractHttpConfigurer&gt; defaultHttpConfigurers = SpringFactoriesLoader.loadFactories(AbstractHttpConfigurer.class, classLoader);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u914D\u7F6E\u5668\u5230httpSecurity</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private void applyDefaultConfigurers(HttpSecurity http) throws Exception {
        ClassLoader classLoader = this.context.getClassLoader();
        List&lt;AbstractHttpConfigurer&gt; defaultHttpConfigurers = SpringFactoriesLoader.loadFactories(AbstractHttpConfigurer.class, classLoader);
        Iterator var4 = defaultHttpConfigurers.iterator();

        while(var4.hasNext()) {
            AbstractHttpConfigurer configurer = (AbstractHttpConfigurer)var4.next();
            // \u6DFB\u52A0\u914D\u7F6E\u5668
            http.apply(configurer);
        }

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u521B\u5EFA\u8FC7\u6EE4\u5668\u94FE\u5BF9\u8C61\u65F6\uFF0C\u8C03\u7528build\u65B9\u6CD5\u8FDB\u884C\u6784\u5EFA\uFF0C\u5728\u6784\u5EFA\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u521D\u59CB\u5316\u8FC7\u6EE4\u5668\u5BF9\u8C61</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected final O doBuild() throws Exception {
        synchronized(this.configurers) {
            this.buildState = AbstractConfiguredSecurityBuilder.BuildState.INITIALIZING;
            this.beforeInit();
            this.init();
            this.buildState = AbstractConfiguredSecurityBuilder.BuildState.CONFIGURING;
            this.beforeConfigure();
            // \u904D\u5386\u914D\u7F6E\u5668\uFF0C\u521D\u59CB\u5316\u8FC7\u6EE4\u5668\u5230HTTP security\u5BF9\u8C61\u4E2D
            this.configure();
            this.buildState = AbstractConfiguredSecurityBuilder.BuildState.BUILDING;
            // \u521B\u5EFA\u8FC7\u6EE4\u5668\u94FE
            O result = this.performBuild();
            this.buildState = AbstractConfiguredSecurityBuilder.BuildState.BUILT;
            return result;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51);function m(h,p){const n=d("ExternalLinkIcon");return s(),r("div",null,[o,e("p",null,[e("a",v,[l("\u6587\u7AE0\u53C2\u8003"),a(n)])]),b])}const f=t(u,[["render",m],["__file","security\u539F\u7406.html.vue"]]);export{f as default};
