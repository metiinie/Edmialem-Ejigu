/* ==========================================================================
   Edmealem Ejigu Business Group — Interactive Application Controller (v2.0)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initTradeCanvas();
    initStatsCounter();
    initTabbedPillars();
    initLogisticsCorridor();
    initModals();
    initContactRouting();
    initI18nSwitcher();
    initHeaderScroll();
    initDropdownNav();
});

/* --------------------------------------------------------------------------
   1. Animated Background Canvas — Two-Way Trade Routes
   -------------------------------------------------------------------------- */
function initTradeCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    const particleCount = 28;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.8,
            speedY: (Math.random() - 0.5) * 0.8,
            color: Math.random() > 0.5 ? 'rgba(43, 91, 168, 0.4)' : 'rgba(184, 131, 10, 0.35)'
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw connecting route lines
        ctx.strokeStyle = 'rgba(245, 240, 232, 0.04)';
        ctx.lineWidth = 1;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 140) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Draw particles
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/* --------------------------------------------------------------------------
   2. Scroll-Triggered Animated Statistics Counter
   -------------------------------------------------------------------------- */
function initStatsCounter() {
    const statContainers = document.querySelectorAll('.stats-bar-wrapper, .enterprise-stats-bar');

    statContainers.forEach(container => {
        let animated = false;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    const statNumbers = container.querySelectorAll('.stat-number');
                    statNumbers.forEach(num => {
                        const target = parseInt(num.getAttribute('data-target'), 10);
                        const suffix = num.getAttribute('data-suffix') || '';
                        let count = 0;
                        const duration = 1200;
                        const stepTime = Math.max(Math.floor(duration / Math.max(target, 1)), 12);

                        const timer = setInterval(() => {
                            count += Math.ceil(target / 30);
                            if (count >= target) {
                                count = target;
                                clearInterval(timer);
                            }
                            num.textContent = count + suffix;
                        }, stepTime);
                    });
                }
            });
        }, { threshold: 0.2 });

        observer.observe(container);
    });
}

/* --------------------------------------------------------------------------
   3. Four Business Pillars Tab Switching & Chart Animation
   -------------------------------------------------------------------------- */
function initTabbedPillars() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-content-panel');

    function switchTab(targetId) {
        tabBtns.forEach(b => {
            if (b.getAttribute('data-tab') === targetId) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
        tabPanels.forEach(p => p.classList.remove('active'));

        const activePanel = document.getElementById(targetId);
        if (activePanel) {
            activePanel.classList.add('active');
            triggerChartBars(activePanel);
        }
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');
            switchTab(targetId);
        });
    });

    // Handle links with data-tab-target (e.g. from header dropdown menu)
    document.querySelectorAll('[data-tab-target]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetTab = link.getAttribute('data-tab-target');
            if (targetTab) {
                switchTab(targetTab);
                const businessesSection = document.getElementById('businesses');
                if (businessesSection) {
                    businessesSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Initial trigger for first tab
    const firstPanel = document.querySelector('.tab-content-panel.active');
    if (firstPanel) triggerChartBars(firstPanel);
}

function triggerChartBars(panel) {
    const bars = panel.querySelectorAll('.chart-bar-fill');
    bars.forEach(bar => {
        const val = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = val + '%';
        }, 100);
    });
}

/* --------------------------------------------------------------------------
   4. Interactive 4-Step Logistics Corridor Inspector
   -------------------------------------------------------------------------- */
function initLogisticsCorridor() {
    const stepCards = document.querySelectorAll('.corridor-step-card');
    stepCards.forEach((card, idx) => {
        card.addEventListener('click', () => {
            stepCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
}

/* --------------------------------------------------------------------------
   5. Modals (Career Application & Compliance Request)
   -------------------------------------------------------------------------- */
function initModals() {
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    const closeBtns = document.querySelectorAll('.modal-close');

    // Trigger buttons
    const reqComplianceBtns = document.querySelectorAll('[data-open-modal="compliance"]');
    const applyCareerBtns = document.querySelectorAll('[data-open-modal="career"]');

    reqComplianceBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = document.getElementById('compliance-modal');
            if (modal) modal.classList.add('open');
        });
    });

    applyCareerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const roleName = btn.getAttribute('data-job-title') || 'General Application';
            const modal = document.getElementById('career-modal');
            const titleInput = document.getElementById('modal-job-title');
            if (titleInput) titleInput.value = roleName;
            if (modal) modal.classList.add('open');
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalOverlays.forEach(m => m.classList.remove('open'));
        });
    });

    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('open');
            }
        });
    });
}

/* --------------------------------------------------------------------------
   6. Contact Form Routing & Form Handler
   -------------------------------------------------------------------------- */
function initContactRouting() {
    const typeSelect = document.getElementById('inquiry-type');
    const routingBadge = document.getElementById('routing-badge');
    const contactForm = document.getElementById('contact-form');

    const routingMap = {
        import: { text: 'Routing to Import & Heavy Machinery Desk', email: 'import@edmealemgroup.com' },
        export: { text: 'Routing to Agricultural Export Division', email: 'export@edmealemgroup.com' },
        procurement: { text: 'Routing to Government & Tender Procurement', email: 'procurement@edmealemgroup.com' },
        careers: { text: 'Routing to HR & Talent Acquisition', email: 'hr@edmealemgroup.com' },
        general: { text: 'Routing to Executive Corporate Desk', email: 'info@edmealemgroup.com' }
    };

    if (typeSelect && routingBadge) {
        typeSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            const target = routingMap[val] || routingMap.general;
            routingBadge.innerHTML = `📬 <span>${target.text}</span> (<strong style="color: var(--amber-lt);">${target.email}</strong>)`;
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const origText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending Inquiry...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for contacting Edmealem Ejigu Business Group. Your inquiry has been routed to the appropriate department. Our team will respond within 2 business days.');
                contactForm.reset();
                submitBtn.innerHTML = origText;
                submitBtn.disabled = false;
            }, 800);
        });
    }
}

/* --------------------------------------------------------------------------
   7. i18n Multilingual Switcher (EN / ZH / AR)
   -------------------------------------------------------------------------- */
function initI18nSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (!translations[lang]) return;

            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Set Document Direction for Arabic
            if (lang === 'ar') {
                document.documentElement.setAttribute('dir', 'rtl');
                document.documentElement.setAttribute('lang', 'ar');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
                document.documentElement.setAttribute('lang', lang);
            }

            applyTranslations(lang);
        });
    });
}

function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const keyPath = el.getAttribute('data-i18n').split('.');
        let val = dict;
        keyPath.forEach(k => {
            val = val ? val[k] : null;
        });
        if (val) {
            el.textContent = val;
        }
    });
}

/* --------------------------------------------------------------------------
   8. Header Scroll Behavior & Mobile Drawer Toggle
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
    const header = document.querySelector('.main-header');
    const toggleBtn = document.querySelector('.mobile-toggle');
    const drawer = document.querySelector('.mobile-drawer');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (toggleBtn && drawer) {
        toggleBtn.addEventListener('click', () => {
            drawer.classList.toggle('open');
        });
    }
}

/* --------------------------------------------------------------------------
   9. Dropdown Hover & Touch Navigation Handler
   -------------------------------------------------------------------------- */
function initDropdownNav() {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    dropdownItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('open');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('open');
        });
        const link = item.querySelector('.nav-link');
        if (link) {
            link.addEventListener('click', (e) => {
                // If on mobile or touch device, toggle menu
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    item.classList.toggle('open');
                }
            });
        }
    });
}

/* --------------------------------------------------------------------------
   10. Fullscreen Hero Slider — 4-Slide Crossfade with Autoplay
   -------------------------------------------------------------------------- */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    const counterEl = document.querySelector('.current-slide');
    if (!slides.length) return;

    let current = 0;
    const total = slides.length;
    let autoplayInterval = null;

    function goToSlide(index) {
        // Deactivate current slide
        slides[current].classList.remove('active');

        // Update index
        current = (index + total) % total;

        // Activate new slide
        const incoming = slides[current];
        incoming.classList.add('active');
        resetAnimations(incoming);

        // Update dots
        dots.forEach((d, i) => d.classList.toggle('active', i === current));

        // Update counter
        if (counterEl) counterEl.textContent = String(current + 1).padStart(2, '0');
    }

    function resetAnimations(slide) {
        const animatedEls = slide.querySelectorAll('.slide-mono-tag, .title-word, .slide-description, .slide-stats, .slide-actions');
        animatedEls.forEach(el => {
            el.style.animation = 'none';
            void el.offsetHeight; // Force reflow
            el.style.animation = '';
        });
    }

    function nextSlide() { goToSlide(current + 1); }
    function prevSlide() { goToSlide(current - 1); }

    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(nextSlide, 6000);
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    // Dot navigation
    dots.forEach((dot, i) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(i);
            startAutoplay();
        });
    });

    // Arrow navigation
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.preventDefault(); nextSlide(); startAutoplay(); });
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.preventDefault(); prevSlide(); startAutoplay(); });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { nextSlide(); startAutoplay(); }
        if (e.key === 'ArrowLeft') { prevSlide(); startAutoplay(); }
    });

    // Initial start
    startAutoplay();
}
