// Basic Portfolio Interactions

// Typewriter Effect
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;

    const texts = [
        'build amazing websites',
        'create stunning designs',
        'develop innovative solutions',
        'craft digital experiences'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = 100; // Typing speed
        if (isDeleting) {
            typeSpeed /= 2; // Faster deleting
        }

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 1500; // Pause at end of typing
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before typing next text
        }

        setTimeout(typeWriter, typeSpeed);
    }

    typeWriter();
}

// Theme Toggle (Simplified)
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            themeToggleBtn.querySelector('i').className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
        });

        // Apply saved theme on load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggleBtn.querySelector('i').className = 'fas fa-sun';
        } else {
            themeToggleBtn.querySelector('i').className = 'fas fa-moon';
        }
    }
}

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Project Filter Functionality
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            projectItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Modal Slider Functionality
function initModalSliders() {
    const vitaminImages = ['Image/dp/img1.png', 'Image/dp/img2.png', 'Image/dp/img3.png', 'Image/dp/img4.png'];
    const vitaminSummaries = [
        'A login page is a web page that allows a user to access a website.',
        'A page showing various features of the application.',
        'The main dashboard where users can interact with the system.',
        'A section displaying detailed information about detected diseases.'
    ];
    let currentVitaminIndex = 0;

    const skinImages = ['Image/skinproject/ABOUTSS.png', 'Image/skinproject/CHECKSS.png', 'Image/skinproject/HOMESS.png', 'Image/skinproject/image.png', 'Image/skinproject/SKINSS.png', 'Image/skinproject/TEAMSS.png'];
    const skinSummaries = [
        'About section of the Skin Diseases Detection project.',
        'Check section to upload and detect skin diseases.',
        'Homepage of the Skin Diseases Detection project.',
        'Another image from the Skin Diseases Detection project.',
        'Detailed view of skin disease information.',
        'Team section of the Skin Diseases Detection project.'
    ];
    let currentSkinIndex = 0;

    const portfolioImages = ['Image/vn/img1.png', 'Image/vn/img2.png', 'Image/vn/img3.png', 'Image/vn/img4.png'];
    const portfolioSummaries = [
        'Homepage of the Personal Portfolio website.',
        'About me section showcasing skills and experience.',
        'Projects section with various portfolio items.',
        'Contact section with personal information and form.'
    ];
    let currentPortfolioIndex = 0;

    function updateSlider(modalId, imgElementId, summaryElementId, images, summaries, currentIndex) {
        const imgElement = document.getElementById(imgElementId);
        const summaryElement = document.getElementById(summaryElementId);
        if (imgElement && summaryElement) {
            imgElement.src = images[currentIndex];
            summaryElement.textContent = summaries[currentIndex];
        }
    }

    document.getElementById('openVitaminProjectModal')?.addEventListener('click', () => {
        const modal = new bootstrap.Modal(document.getElementById('vitaminProjectModal'));
        modal.show();
        updateSlider('vitaminProjectModal', 'vitaminSliderImg', 'vitaminSliderSummary', vitaminImages, vitaminSummaries, currentVitaminIndex);
    });
    document.getElementById('vitaminSliderPrev')?.addEventListener('click', () => {
        currentVitaminIndex = (currentVitaminIndex > 0) ? currentVitaminIndex - 1 : vitaminImages.length - 1;
        updateSlider('vitaminProjectModal', 'vitaminSliderImg', 'vitaminSliderSummary', vitaminImages, vitaminSummaries, currentVitaminIndex);
    });
    document.getElementById('vitaminSliderNext')?.addEventListener('click', () => {
        currentVitaminIndex = (currentVitaminIndex < vitaminImages.length - 1) ? currentVitaminIndex + 1 : 0;
        updateSlider('vitaminProjectModal', 'vitaminSliderImg', 'vitaminSliderSummary', vitaminImages, vitaminSummaries, currentVitaminIndex);
    });

    document.getElementById('openSkinProjectModal')?.addEventListener('click', () => {
        const modal = new bootstrap.Modal(document.getElementById('skinProjectModal'));
        modal.show();
        updateSlider('skinProjectModal', 'skinSliderImg', 'skinSliderSummary', skinImages, skinSummaries, currentSkinIndex);
    });
    document.getElementById('skinSliderPrev')?.addEventListener('click', () => {
        currentSkinIndex = (currentSkinIndex > 0) ? currentSkinIndex - 1 : skinImages.length - 1;
        updateSlider('skinProjectModal', 'skinSliderImg', 'skinSliderSummary', skinImages, skinSummaries, currentSkinIndex);
    });
    document.getElementById('skinSliderNext')?.addEventListener('click', () => {
        currentSkinIndex = (currentSkinIndex < skinImages.length - 1) ? currentSkinIndex + 1 : 0;
        updateSlider('skinProjectModal', 'skinSliderImg', 'skinSliderSummary', skinImages, skinSummaries, currentSkinIndex);
    });

    document.getElementById('openPortfolioProjectModal')?.addEventListener('click', () => {
        const modal = new bootstrap.Modal(document.getElementById('portfolioProjectModal'));
        modal.show();
        updateSlider('portfolioProjectModal', 'portfolioSliderImg', 'portfolioSliderSummary', portfolioImages, portfolioSummaries, currentPortfolioIndex);
    });
    document.getElementById('portfolioSliderPrev')?.addEventListener('click', () => {
        currentPortfolioIndex = (currentPortfolioIndex > 0) ? currentPortfolioIndex - 1 : portfolioImages.length - 1;
        updateSlider('portfolioProjectModal', 'portfolioSliderImg', 'portfolioSliderSummary', portfolioImages, portfolioSummaries, currentPortfolioIndex);
    });
    document.getElementById('portfolioSliderNext')?.addEventListener('click', () => {
        currentPortfolioIndex = (currentPortfolioIndex < portfolioImages.length - 1) ? currentPortfolioIndex + 1 : 0;
        updateSlider('portfolioProjectModal', 'portfolioSliderImg', 'portfolioSliderSummary', portfolioImages, portfolioSummaries, currentPortfolioIndex);
    });
}

// Initialize all interactions
document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    initThemeToggle();
    initSmoothScrolling();
    initProjectFilters();
    initModalSliders();
}); 