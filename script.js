/* ==============================================
   YANLING SUN — PORTFOLIO
   Interactions & animations
   ============================================== */

(function() {
    'use strict';

    /* ---------- Navbar scroll behaviour ---------- */
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile navigation toggle ---------- */
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    /* ---------- Smooth scroll for in-page anchors ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const top = target.getBoundingClientRect().top + window.scrollY - 60;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }
        });
    });

    /* ---------- Scroll-reveal animations ---------- */
    const revealEls = document.querySelectorAll(
        '.section-header, .project, .pub-item, .press-card, .theme-card, .community-work, .works-col, .certifications, .contact-intro, .contact-details, .opening-line, .reel-slot'
    );
    revealEls.forEach(el => el.classList.add('reveal'));

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('visible'));
    }

    /* ---------- Subtle parallax on hero ---------- */
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrolled = window.scrollY;
                    if (scrolled < window.innerHeight) {
                        heroImage.style.transform = `scale(1) translateY(${scrolled * 0.3}px)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    /* ---------- Custom cursor follower (desktop only) ---------- */
    const cursor = document.querySelector('.cursor-follower');
    if (cursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let curX = 0, curY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            curX += (mouseX - curX) * 0.15;
            curY += (mouseY - curY) * 0.15;
            cursor.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Hover state on interactive elements
        const interactives = document.querySelectorAll('a, button, .theme-card, .press-card, .pub-item');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    /* ---------- Subtle fade for video placeholders on hover ---------- */
    document.querySelectorAll('.video-slot, .reel-slot, .hero-video-placeholder').forEach(slot => {
        slot.addEventListener('mouseenter', () => {
            slot.style.borderColor = '#c8462a';
        });
        slot.addEventListener('mouseleave', () => {
            slot.style.borderColor = '';
        });
    });

})();
