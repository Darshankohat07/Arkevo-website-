// Navbar Scroll Blur Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.querySelector('.nav-links');
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });

        // Close mobile menu when clicking nav links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
            });
        });

        // Intersection Observer for Smooth Fade-in Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        // Interactive FAQ Accordion
        function toggleFaq(questionEl) {
            const item = questionEl.parentElement;
            const wasActive = item.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.faq-item').forEach(faq => {
                faq.classList.remove('active');
            });

            // Toggle selected
            if (!wasActive) {
                item.classList.add('active');
            }
        }

        // Diagnostic Checklist Toggle
        function toggleAuditItem(el) {
            el.classList.toggle('selected');
        }

        // Diagnostic Form Submit handler
        function handleAuditSubmit(e) {
            e.preventDefault();
            const brand = document.getElementById('brandName').value;
            const email = document.getElementById('workEmail').value;
            const spend = document.getElementById('spendRange').value;
            const feedback = document.getElementById('formFeedback');
            
            feedback.style.display = 'block';
            feedback.textContent = `✓ Audit requested for ${brand}! We have sent confirmation to ${email}.`;
            setTimeout(() => {
                feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
