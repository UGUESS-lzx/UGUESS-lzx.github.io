(function () {
    const data = window.siteData || {};

    const icons = {
        scholar:
            '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>',
        github:
            '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
        mail:
            '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
        file:
            '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h7v6h7v10H6zm2-6h8v1.5H8V14zm0 3h8v1.5H8V17z"/></svg>',
        link:
            '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12c0-1.4.6-2.8 1.6-3.8l3-3a5.4 5.4 0 0 1 7.6 0l-1.4 1.4a3.4 3.4 0 0 0-4.8 0l-3 3a3.4 3.4 0 0 0 4.8 4.8l1.4 1.4a5.4 5.4 0 0 1-9.2-3.8zm6.2 1.1 3-3 1.4 1.4-3 3-1.4-1.4zm-1.2 2.7 1.4-1.4a3.4 3.4 0 0 0 4.8 0l3-3a3.4 3.4 0 0 0-4.8-4.8l-1.4-1.4a5.4 5.4 0 0 1 7.6 7.6l-3 3a5.4 5.4 0 0 1-7.6 0z"/></svg>'
    };

    const navItems = [
        ["Home", "#top"],
        ["Research", "#research"],
        ["News", "#news"],
        ["Education", "#education"],
        ["Publications", "#publications"],
        ["Awards", "#awards"],
        ["Experience", "#experience"]
    ];

    const byId = (id) => document.getElementById(id);
    const arr = (value) => Array.isArray(value) ? value : [];
    const hasItems = (value) => Array.isArray(value) && value.length > 0;
    const icon = (name) => icons[name] || icons.link;
    const externalAttrs = (url) => /^https?:\/\//.test(url || "") ? ' target="_blank" rel="noreferrer"' : "";

    function renderNav() {
        const available = navItems.filter(([, href]) => {
            const id = href.replace("#", "");
            if (id === "top") return true;
            if (id === "research") return hasItems(data.researchInterests);
            if (id === "publications") return hasItems(data.publications);
            return hasItems(data[id]);
        });

        byId("site-nav").innerHTML = available
            .map(([label, href], index) => `<a href="${href}" class="nav-link${index === 0 ? " active" : ""}">${label}</a>`)
            .join("");
    }

    function renderSidebar() {
        const profile = data.profile || {};
        const titleLines = arr(profile.titleLines);
        const links = arr(data.links);

        document.title = data.meta?.title || `${profile.name || "Your Name"} - Academic Homepage`;
        const description = document.querySelector('meta[name="description"]');
        if (description && data.meta?.description) {
            description.setAttribute("content", data.meta.description);
        }

        byId("sidebar").innerHTML = `
            <div class="profile">
                <div class="profile-name">
                    <h1 class="name">${profile.name || "Your Name"}</h1>
                    ${profile.nameAlt ? `<p class="name-zh">${profile.nameAlt}</p>` : ""}
                </div>
                <div class="profile-title">
                    ${titleLines.length
                        ? titleLines.map((line, index) => `<p${index > 0 ? ' class="department"' : ""}>${line}</p>`).join("")
                        : `
                            ${profile.role ? `<p>${profile.role}</p>` : ""}
                            ${profile.affiliation ? `<p class="department">${profile.affiliation}</p>` : ""}
                        `
                    }
                </div>
            </div>

            <div class="profile-image">
                <img src="${profile.avatar || "assets/profile-placeholder.svg"}" alt="${profile.name || "Profile"} Picture" id="profile-img">
            </div>

            <div class="profile-links">
                ${links.map((item) => `
                    <a href="${item.url}"${externalAttrs(item.url)} class="link-item">
                        ${icon(item.icon)}
                        ${item.label}
                    </a>
                `).join("")}
            </div>
        `;
    }

    function sectionTitle(iconText, title) {
        return `<h2 class="section-title"><span class="icon">${iconText}</span>${title}</h2>`;
    }

    function renderIntro() {
        if (!hasItems(data.intro)) return "";
        return `
            <section class="section" id="home">
                ${arr(data.intro).map((paragraph) => `<p class="intro-text">${paragraph}</p>`).join("")}
            </section>
        `;
    }

    function renderResearch() {
        if (!hasItems(data.researchInterests)) return "";
        return `
            <section class="section" id="research">
                ${sectionTitle("🎯", "Research Interests")}
                <p class="section-text">
                    My research interests include
                    ${arr(data.researchInterests).map((item) => `<strong>${item}</strong>`).join(", ")}.
                </p>
                ${data.researchNote ? `<p class="section-text">${data.researchNote}</p>` : ""}
            </section>
        `;
    }

    function renderNews() {
        if (!hasItems(data.news)) return "";
        return `
            <section class="section" id="news">
                ${sectionTitle("📢", "News")}
                <div class="news-window" aria-label="Scrollable news updates">
                    <ul class="news-list">
                        ${arr(data.news).map((item) => `
                            <li class="news-item">
                                <span class="news-date">[${item.date}]</span>
                                <span class="news-content">${item.text}</span>
                            </li>
                        `).join("")}
                    </ul>
                </div>
            </section>
        `;
    }

    function renderPublications() {
        if (!hasItems(data.publications)) return "";
        return `
            <section class="section" id="publications">
                ${sectionTitle("📄", "Selected Research")}
                ${data.publicationNote ? `<p class="note">${data.publicationNote}</p>` : ""}
                <div class="publications">
                    ${arr(data.publications).map((paper) => {
                        const links = arr(paper.links);
                        const primaryLink = links[0];
                        return `
                            <article class="publication-card">
                                <h3 class="paper-title">
                                    ${primaryLink
                                        ? `<a href="${primaryLink.url}"${externalAttrs(primaryLink.url)} class="paper-link">${paper.title}</a>`
                                        : paper.title
                                    }
                                </h3>
                                <p class="paper-authors">${paper.authors}</p>
                                <p class="paper-venue">${paper.venue}</p>
                                ${links.length > 1 ? `
                                    <div class="paper-extra-links">
                                        ${links.slice(1).map((link) => `<a href="${link.url}"${externalAttrs(link.url)}>${link.label}</a>`).join("")}
                                    </div>
                                ` : ""}
                            </article>
                        `;
                    }).join("")}
                </div>
            </section>
        `;
    }

    function renderTimeline(id, iconText, title, items) {
        if (!hasItems(items)) return "";
        return `
            <section class="section" id="${id}">
                ${sectionTitle(iconText, title)}
                <div class="timeline">
                    ${arr(items).map((item) => `
                        <div class="timeline-item">
                            <div class="timeline-year">${item.period}</div>
                            <div class="timeline-content">
                                <div class="timeline-head">
                                    <div class="timeline-copy">
                                        <h3 class="timeline-title">${item.title}</h3>
                                        <p class="timeline-org">${item.organization}</p>
                                    </div>
                                    ${item.logo ? `<img class="timeline-logo${item.logoVariant ? ` timeline-logo-${item.logoVariant}` : ""}" src="${item.logo}" alt="${item.organization} logo">` : ""}
                                </div>
                                <p class="timeline-desc">${item.detail}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </section>
        `;
    }

    function renderAwards() {
        if (!hasItems(data.awards)) return "";
        return `
            <section class="section" id="awards">
                ${sectionTitle("🏆", "Awards & Honors")}
                <ul class="awards-list">
                    ${arr(data.awards).map((award) => `
                        <li class="award-item">
                            <span class="award-year">${award.year}</span>
                            <div class="award-content">
                                <strong>${award.title}</strong>
                                <p>${award.detail}</p>
                            </div>
                        </li>
                    `).join("")}
                </ul>
            </section>
        `;
    }

    function renderAnalytics() {
        const analytics = data.analytics || {};
        if (analytics.enabled === false) return "";
        const mapOptions = analytics.mapMyVisitors || {};
        const mapToken = analytics.mapMyVisitorsToken;
        const mapParams = new URLSearchParams();
        if (mapToken) mapParams.set("d", mapToken);
        if (mapOptions.textColor) mapParams.set("cl", mapOptions.textColor);
        const mapImage = mapToken && mapOptions.embedType !== "script"
            ? `<a href="${analytics.mapMyVisitorsPage || "#"}"${analytics.mapMyVisitorsPage ? externalAttrs(analytics.mapMyVisitorsPage) : ""} title="Visit tracker" class="analytics-map-link"><img src="https://mapmyvisitors.com/map.png?${mapParams.toString()}" alt="Visitor map"></a>`
            : "";

        return `
            <section class="section site-analytics" id="site-analytics">
                <div class="analytics-divider"></div>
                <h2 class="analytics-title">${analytics.title || "Site Analytics"}</h2>
                ${analytics.showCounters === false ? "" : `
                <div class="analytics-stats" aria-label="Site visit statistics">
                    <div class="analytics-stat">
                        <span class="analytics-label">Site PV</span>
                        <strong id="busuanzi_site_pv">--</strong>
                    </div>
                    <div class="analytics-stat">
                        <span class="analytics-label">Site UV</span>
                        <strong id="busuanzi_site_uv">--</strong>
                    </div>
                    <div class="analytics-stat">
                        <span class="analytics-label">Page PV</span>
                        <strong id="busuanzi_page_pv">--</strong>
                    </div>
                </div>
                `}
                <div class="analytics-map" id="mapmyvisitors-widget" aria-label="Visitor map">
                    ${mapImage}
                </div>
            </section>
        `;
    }

    function setupAnalytics() {
        const analytics = data.analytics || {};
        if (analytics.enabled === false) return;

        const counterScript = analytics.counterScript === undefined
            ? "https://cdn.busuanzi.cc/busuanzi/3.6.9/busuanzi.min.js"
            : analytics.counterScript;
        if (counterScript && !document.getElementById("busuanzi-counter-script")) {
            const script = document.createElement("script");
            script.id = "busuanzi-counter-script";
            script.src = counterScript;
            script.defer = true;
            document.body.appendChild(script);
        }

        const mapToken = analytics.mapMyVisitorsToken;
        const mapTarget = byId("mapmyvisitors-widget");
        if (mapToken && mapTarget && analytics.mapMyVisitors?.embedType === "script" && !document.getElementById("mapmyvisitors")) {
            mapTarget.innerHTML = "";
            const options = analytics.mapMyVisitors || {};
            const params = new URLSearchParams();
            params.set("d", mapToken);
            if (options.textColor) params.set("cl", options.textColor);
            if (options.width) params.set("w", String(options.width));
            if (options.theme) params.set("t", options.theme);
            if (options.backgroundColor) params.set("co", options.backgroundColor);
            if (options.counterTextColor) params.set("ct", options.counterTextColor);
            if (options.currentMarkerColor) params.set("cmo", options.currentMarkerColor);
            if (options.markerColor) params.set("cmn", options.markerColor);
            const mapScript = document.createElement("script");
            mapScript.type = "text/javascript";
            mapScript.id = "mapmyvisitors";
            mapScript.src = `https://mapmyvisitors.com/map.js?${params.toString()}`;
            mapTarget.appendChild(mapScript);
        }
    }

    function setupGreetings() {
        const greetings = data.greetings || {};
        if (greetings.enabled === false) return;

        const toast = document.createElement("div");
        toast.className = "greeting-toast";
        toast.setAttribute("role", "status");
        toast.setAttribute("aria-live", "polite");
        document.body.appendChild(toast);

        let hideTimer;
        let hoverShown = false;
        let lastHoverTime = 0;
        const duration = Number(greetings.duration) || 3600;
        const welcomeDelay = Number(greetings.welcomeDelay) || 0;

        const showGreeting = (message) => {
            if (!message) return;
            window.clearTimeout(hideTimer);
            toast.textContent = message;
            toast.classList.add("visible");
            hideTimer = window.setTimeout(() => {
                toast.classList.remove("visible");
            }, duration);
        };

        window.setTimeout(() => {
            showGreeting(greetings.welcome || "Welcome!");
        }, welcomeDelay);

        window.setTimeout(() => {
            const showHoverGreeting = () => {
                const now = Date.now();
                if (greetings.hoverShowOnce !== false && hoverShown) return;
                if (greetings.hoverShowOnce === false && now - lastHoverTime < duration + 1000) return;
                hoverShown = true;
                lastHoverTime = now;
                showGreeting(greetings.hover || "Nice to meet you here.");
            };

            document.body.addEventListener("mouseover", showHoverGreeting);
            document.body.addEventListener("mousemove", showHoverGreeting);
        }, welcomeDelay + duration + 300);
    }

    function renderContent() {
        byId("content").innerHTML = [
            renderIntro(),
            renderResearch(),
            renderNews(),
            renderTimeline("education", "🎓", "Education", data.education),
            renderPublications(),
            renderAwards(),
            renderTimeline("experience", "💼", "Experience", data.experience),
            renderAnalytics()
        ].filter(Boolean).join("");
    }

    function setupInteractions() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (event) {
                const href = this.getAttribute('href');
                const target = href === "#top" ? document.getElementById("top") : document.querySelector(href);
                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = window.pageYOffset < 120 ? 'top' : '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === `#${current}` || (current === 'home' && href === '#top')) {
                    link.classList.add('active');
                }
            });
        });
    }

    renderNav();
    renderSidebar();
    renderContent();
    setupInteractions();
    setupAnalytics();
    setupGreetings();
})();
