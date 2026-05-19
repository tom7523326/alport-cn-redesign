/* ============================================================
   中国 Alport 综合征家长协会 - 全站脚本
   职责：1) 注入共享 Header / Footer  2) 当前导航高亮
        3) 滚动揭示动画  4) 移动菜单  5) FAQ/Tabs 微交互
   ============================================================ */

(function () {
  /* ---------- Header ---------- */
  const NAV_ITEMS = [
    { href: 'index.html', label: '首页', id: 'home' },
    { href: 'about-alport.html', label: '关于 Alport', id: 'disease' },
    { href: 'doctors.html', label: '医患平台', id: 'doctors' },
    { href: 'research.html', label: '科研进展', id: 'research' },
    { href: 'community.html', label: '患者社区', id: 'community' },
    { href: 'about-us.html', label: '关于协会', id: 'about' },
    { href: 'get-involved.html', label: '加入我们', id: 'join' }
  ];

  function buildHeader(activeId) {
    const links = NAV_ITEMS
      .map(it => `<li><a href="${it.href}" data-nav="${it.id}" class="${it.id === activeId ? 'is-active' : ''}">${it.label}</a></li>`)
      .join('');

    return `
      <header class="navbar" role="banner">
        <div class="container nav-inner">
          <a class="nav-brand" href="index.html" aria-label="返回首页">
            <span class="nav-brand-logo" aria-hidden="true">A</span>
            <span class="nav-brand-text">
              <span class="nav-brand-cn">中国 Alport 综合征家长协会</span>
              <span class="nav-brand-en">CHINA ALPORT SYNDROME ASSOCIATION</span>
            </span>
          </a>
          <nav aria-label="主导航">
            <ul class="nav-links">${links}</ul>
          </nav>
          <div class="nav-actions">
            <a href="get-involved.html#register" class="btn btn-outline btn-sm">加入患者登记</a>
            <a href="get-involved.html#donate" class="btn btn-warm btn-sm">月捐支持<span class="arrow" aria-hidden="true">→</span></a>
            <button class="nav-toggle" aria-label="打开菜单" aria-expanded="false" id="navToggle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <path d="M3 6h18M3 12h18M3 18h18"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
          ${NAV_ITEMS.map(it => `<a href="${it.href}">${it.label}</a>`).join('')}
          <div style="padding:24px 16px 0;display:flex;flex-direction:column;gap:12px">
            <a href="get-involved.html#register" class="btn btn-outline">加入患者登记</a>
            <a href="get-involved.html#donate" class="btn btn-warm">月捐支持</a>
          </div>
        </div>
      </header>
    `;
  }

  /* ---------- Footer ---------- */
  function buildFooter() {
    return `
      <footer class="footer" role="contentinfo">
        <div class="container">
          <div class="footer-top">
            <div class="footer-brand">
              <a class="nav-brand" href="index.html">
                <span class="nav-brand-logo" aria-hidden="true">A</span>
                <span class="nav-brand-text">
                  <span class="nav-brand-cn">中国 Alport 综合征家长协会</span>
                  <span class="nav-brand-en">CHINA ALPORT SYNDROME ASSOCIATION</span>
                </span>
              </a>
              <p>我们是国内规模最大、影响力最广的 Alport 综合征患者组织。蓝天下，你我同行 —— 用专业凝聚力量，用温度传递希望。</p>
              <div class="footer-social" aria-label="社交媒体">
                <a href="#" aria-label="微信公众号" title="微信公众号"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 13.5c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm5 0c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zM12 4C6.5 4 2 7.5 2 12c0 2.4 1.3 4.5 3.4 6L4 21l3.5-1.6c1.4.4 2.9.6 4.5.6 5.5 0 10-3.5 10-8s-4.5-8-10-8z"/></svg></a>
                <a href="#" aria-label="微博" title="微博"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5 16.5c-2.5 0-4.5-1.3-4.5-3s2-3 4.5-3 4.5 1.3 4.5 3-2 3-4.5 3zm9.5-7c-.5-2-2.5-3-4.5-2.5-.5 0-.5-.5 0-1 .5-.5.5-1 0-1.5-1-1-2.5-1-3.5 0-.5.5-.5 1 0 1.5l.5.5c-1 0-2 .5-2.5 1.5-.5.5-.5 1 .5 1.5.5 0 1-.5 1.5-1 0-.5.5-1 1-1 .5 0 1 .5 1 1 0 .5-.5 1-1 1.5-.5.5-.5 1 0 1.5.5.5 1 .5 1.5 0 1.5-.5 3.5-2 5-3.5.5-.5 1-1.5.5-2z"/></svg></a>
                <a href="#" aria-label="小红书" title="小红书"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" opacity=".25"/><text x="12" y="15.5" text-anchor="middle" font-size="9" font-weight="700" fill="currentColor">小</text></svg></a>
                <a href="#" aria-label="抖音" title="抖音"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 8.5c-1.5 0-3-.7-4-2v9c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5v3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V2h3c.3 1.7 1.6 3 3.5 3.3v3.2z"/></svg></a>
              </div>
            </div>
            <div>
              <h4>关于疾病</h4>
              <a href="about-alport.html#overview">疾病概述</a>
              <a href="about-alport.html#diagnosis">诊断方法</a>
              <a href="about-alport.html#treatment">治疗方案</a>
              <a href="about-alport.html#genetic">遗传咨询</a>
              <a href="about-alport.html#living">日常生活管理</a>
            </div>
            <div>
              <h4>医患平台</h4>
              <a href="doctors.html#find">找专家</a>
              <a href="doctors.html#hospitals">推荐医院</a>
              <a href="doctors.html#online">线上咨询会</a>
              <a href="doctors.html#qa">提问墙</a>
              <a href="research.html#trials">中国临床试验</a>
            </div>
            <div>
              <h4>参与协会</h4>
              <a href="community.html">患者社区</a>
              <a href="get-involved.html#register">患者登记</a>
              <a href="get-involved.html#volunteer">志愿者招募</a>
              <a href="get-involved.html#donate">公益月捐</a>
              <a href="about-us.html#report">年度报告</a>
            </div>
            <div>
              <h4>联系我们</h4>
              <a href="mailto:contact@alport.cn">contact@alport.cn</a>
              <a href="tel:+8613800000000">13800-000-000</a>
              <p style="font-size:13px;color:var(--color-ink-400);margin-top:12px">扫码关注公众号「中国Alport家长协会」</p>
              <div class="qr-mini" aria-hidden="true"><div class="qr-mini-grid"></div></div>
            </div>
          </div>
          <div class="footer-bottom">
            <div>© 2014 – 2026 中国 Alport 综合征家长协会 · 备案号 京ICP备XXXXXXXX号-1</div>
            <div>
              <a href="#" style="display:inline">隐私政策</a> · <a href="#" style="display:inline">使用条款</a> · <a href="#" style="display:inline">财务公开</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  /* ---------- Insert into DOM ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    const headerSlot = document.querySelector('[data-include="header"]');
    const footerSlot = document.querySelector('[data-include="footer"]');
    const activeId = document.body.dataset.page || '';
    if (headerSlot) headerSlot.outerHTML = buildHeader(activeId);
    if (footerSlot) footerSlot.outerHTML = buildFooter();

    /* Mobile menu */
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('mobileMenu');
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const open = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
        menu.setAttribute('aria-hidden', String(!open));
        document.body.style.overflow = open ? 'hidden' : '';
      });
    }

    /* Reveal on scroll */
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: .15, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    /* Tabs (data-tab-group) */
    document.querySelectorAll('[data-tab-group]').forEach(group => {
      const btns = group.querySelectorAll('[data-tab]');
      const panels = group.parentElement.querySelectorAll('[data-tab-panel]');
      btns.forEach(b => b.addEventListener('click', () => {
        const id = b.dataset.tab;
        btns.forEach(x => x.classList.toggle('is-active', x === b));
        panels.forEach(p => p.style.display = p.dataset.tabPanel === id ? '' : 'none');
      }));
    });

    /* Counter animation */
    const counters = document.querySelectorAll('[data-counter]');
    if (counters.length) {
      const co = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = parseFloat(el.dataset.counter);
          const duration = 1400;
          const start = performance.now();
          function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = target * eased;
            const decimals = (el.dataset.decimals || 0) | 0;
            el.textContent = Number(val).toLocaleString('zh-CN', {minimumFractionDigits: decimals, maximumFractionDigits: decimals});
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          co.unobserve(el);
        });
      }, { threshold: .4 });
      counters.forEach(c => co.observe(c));
    }

    /* In-page TOC active highlight */
    const tocLinks = document.querySelectorAll('.toc a[href^="#"]');
    if (tocLinks.length) {
      const sections = Array.from(tocLinks).map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
      const so = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            tocLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id));
          }
        });
      }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });
      sections.forEach(s => so.observe(s));
    }
  });
})();
