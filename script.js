// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Language Dropdown Toggle
const languageDropdown = document.querySelector('.language-dropdown');
if (languageDropdown) {
    const dropdownLink = languageDropdown.querySelector('.nav-link');
    
    dropdownLink.addEventListener('click', (e) => {
        e.preventDefault();
        languageDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('active');
        }
    });
}

// Smooth Scroll with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const observerOptions = {
    threshold: 0.5
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / speed;
            
            const updateCounter = () => {
                const current = parseInt(counter.innerText);
                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCounter, 10);
                } else {
                    counter.innerText = target + (counter.getAttribute('data-target') === '95' ? '%' : '+');
                }
            };
            
            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, observerOptions);

counters.forEach(counter => counterObserver.observe(counter));

// Testimonial Slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.remove('active');
        dots[i].classList.remove('active');
    });
    
    testimonialCards[index].classList.add('active');
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Scroll Animations
const observeElements = document.querySelectorAll('.service-card, .portfolio-item, .about-text, .about-image');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

observeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease-out';
    scrollObserver.observe(element);
});

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-circle');
    
    parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Active Nav Link on Scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href*=${sectionId}]`)?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #6C5CE7;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Portfolio Item Click
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log('Portfolio item clicked');
        // Add your portfolio detail view logic here
    });
});

// Add hover effect to service cards
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Language Translations
const translations = {
    uz: {
        'nav-home': 'Bosh sahifa',
        'nav-services': 'Xizmatlar',
        'nav-pricing': 'Tariflar',
        'nav-about': 'Biz haqimizda',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Aloqa',
        'hero-title': 'Ijtimoiy Tarmoqlarni Kuchli Qurol Qiling',
        'hero-subtitle': 'Biz brendlarni strategik SMM marketing orqali o\'stirish, jalb qilish va konversiya qilishda yordam beramiz',
        'btn-start': 'Boshlash',
        'btn-services': 'Xizmatlarimiz',
        'stat-projects': 'Bajarilgan Loyihalar',
        'stat-clients': 'Mamnun Mijozlar',
        'stat-success': 'Muvaffaqiyat Darajasi %',
        'services-title': 'Bizning Xizmatlarimiz',
        'services-subtitle': 'Sizning biznesingiz uchun maxsus ijtimoiy media yechimlari',
        'service1-title': 'SMM Strategiya',
        'service1-desc': 'Biznes maqsadlaringizga erishish va ROI ni maksimal darajada oshirish uchun maxsus strategiyalar',
        'service2-title': 'Kontent Yaratish',
        'service2-desc': 'Auditoriyangizni jalb qiluvchi va konversiyani oshiruvchi qiziqarli kontent',
        'service3-title': 'Pullik Reklama',
        'service3-desc': 'Barcha asosiy ijtimoiy platformalarda maksimal qamrov uchun maqsadli reklama kampaniyalari',
        'service4-title': 'Jamiyatni Boshqarish',
        'service4-desc': 'Brendingiz atrofida faol jamiyatlar qurish va rivojlantirish',
        'service5-title': 'Tahlil va Hisobotlar',
        'service5-desc': 'Ijtimoiy media samaradorligingizni optimallashtirish uchun ma\'lumotlarga asoslangan tushunchalar',
        'service6-title': 'Influencer Marketing',
        'service6-desc': 'Brend xabaringizni kuchaytirish uchun to\'g\'ri influencerlar bilan bog\'laning',
        'about-title': 'Nega Converta Agency?',
        'about-desc': 'Biz raqamli landshaftda bizneslarning rivojlanishiga yordam berishga bag\'ishlangan ishtiyoqli ijtimoiy media mutaxassislari jamoasimiz. Ko\'p yillik tajriba va isbotlangan natijalar bilan biz obunachilarni mijozlarga aylantiramiz.',
        'about-feat1': 'Ma\'lumotlarga Asoslangan Strategiyalar',
        'about-feat2': 'Ijodiy Mukammallik',
        'about-feat3': 'Shaffof Hisobotlar',
        'about-feat4': 'Maxsus Qo\'llab-quvvatlash',
        'btn-work': 'Biz bilan ishlang',
        'portfolio-title': 'Bizning Ishlarimiz',
        'portfolio-subtitle': 'O\'stirishga yordam bergan brendlarimizning muvaffaqiyat hikoyalari',
        'contact-title': 'Keling, Konversiya Qilishni Boshlaylik',
        'contact-subtitle': 'Ijtimoiy tarmoqlaringizni keyingi bosqichga olib chiqishga tayyormisiz? Bugun biz bilan bog\'laning!',
        'form-name': 'Ismingiz',
        'form-email': 'Email manzilingiz',
        'form-subject': 'Mavzu',
        'form-message': 'Xabaringiz',
        'btn-send': 'Xabar Yuborish',
        'pricing-title': 'SMM Tariflari',
        'pricing-subtitle': 'Har bir paket ustida Marketolog, SMM menedjer, Dizayner va Targetologdan iborat professional jamoa ishlaydi',
        'pricing-period': '/oyiga',
        'badge-popular': '🔥 Eng ko\'p tanlanadigan',
        'btn-order': 'Buyurtma berish',
        'pkg-start-subtitle': 'Boshlang\'ich',
        'pkg-start-desc': 'Kichik biznes uchun ideal',
        'pkg-start-feat1': '12 ta Post',
        'pkg-start-feat2': '2 ta Stories',
        'pkg-start-feat3': 'Video: iPhone 16',
        'pkg-start-feat4': 'Katta jamoa xizmati',
        'pkg-start-feat5': 'Platformalar: IG, FB',
        'pkg-start-feat6': '10% KPI tizimi',
        'pkg-business-subtitle': 'Ommabop',
        'pkg-business-desc': 'Tez o\'sish va sotuv uchun',
        'pkg-business-feat1': '15 ta Post',
        'pkg-business-feat2': '3 ta Stories',
        'pkg-business-feat3': 'Video: iPhone 16',
        'pkg-business-feat4': 'Katta jamoa xizmati',
        'pkg-business-feat5': 'Platformalar: IG, FB, TG',
        'pkg-business-feat6': '15% KPI tizimi',
        'pkg-premium-subtitle': 'Maksimal',
        'pkg-premium-desc': 'Brendni to\'liq qamrab olish uchun',
        'pkg-premium-feat1': '18 ta Post',
        'pkg-premium-feat2': '4 ta Stories',
        'pkg-premium-feat3': 'Video: Professional Kamera',
        'pkg-premium-feat4': 'Katta jamoa xizmati',
        'pkg-premium-feat5': 'IG, FB, TG, YouTube',
        'additional-title': 'Biznesingiz uchun kompleks yechimlar',
        'additional-subtitle': 'Har tomonlama yetuk xizmatlar bilan biznesingizni rivojlantiring',
        'cat-it-title': 'IT va Rivojlanish',
        'cat-it-subtitle': 'Texnologik yechimlar orqali biznesingizni avtomatlashtiramiz',
        'service-web-title': 'Web Saytlar',
        'service-web-desc': 'Biznesingiz uchun zamonaviy, tezkor va sotuvchi saytlar yaratish',
        'service-bot-title': 'Telegram Botlar',
        'service-bot-desc': 'Mijozlar bilan ishlashni osonlashtiruvchi murakkab va qulay botlar',
        'cat-brand-title': 'Brending va Imidj',
        'cat-brand-subtitle': 'Bozorda o\'z qiyofangizga ega bo\'ling',
        'service-branding-title': 'Brending',
        'service-branding-desc': 'Logotip, firma stili va brendbook yaratish',
        'service-brandface-title': 'Brend Feys',
        'service-brandface-desc': 'Kompaniyangiz yuzi bo\'ladigan shaxsiy imidjni shakllantirish',
        'cat-traffic-title': 'Trafik va Reklama',
        'cat-traffic-subtitle': 'Mijozlar oqimini kafolatlaymiz',
        'service-ads-title': 'Google & Yandex Ads',
        'service-ads-desc': 'Qidiruv tizimlarida birinchi o\'rinlarga chiqish va kontekst reklama',
        'service-smm-title': 'SMM Marketing',
        'service-smm-desc': 'Ijtimoiy tarmoqlarda (Instagram, Facebook, YouTube) faoliyat yuritish',
        'btn-details': 'Batafsil'
    },
    ru: {
        'nav-home': 'Главная',
        'nav-services': 'Услуги',
        'nav-pricing': 'Тарифы',
        'nav-about': 'О нас',
        'nav-portfolio': 'Портфолио',
        'nav-contact': 'Контакты',
        'hero-title': 'Трансформируйте Ваше Присутствие в Соцсетях',
        'hero-subtitle': 'Мы помогаем брендам расти, вовлекать и конвертировать через стратегический SMM маркетинг',
        'btn-start': 'Начать',
        'btn-services': 'Наши Услуги',
        'stat-projects': 'Выполненных Проектов',
        'stat-clients': 'Довольных Клиентов',
        'stat-success': 'Процент Успеха %',
        'services-title': 'Наши Услуги',
        'services-subtitle': 'Комплексные решения для социальных сетей, адаптированные под ваш бизнес',
        'service1-title': 'SMM Стратегия',
        'service1-desc': 'Индивидуальные стратегии для достижения ваших бизнес-целей и максимизации ROI',
        'service2-title': 'Создание Контента',
        'service2-desc': 'Увлекательный контент, который находит отклик у вашей аудитории и стимулирует конверсию',
        'service3-title': 'Платная Реклама',
        'service3-desc': 'Таргетированные рекламные кампании на всех основных социальных платформах для максимального охвата',
        'service4-title': 'Управление Сообществом',
        'service4-desc': 'Создание и развитие вовлеченных сообществ вокруг вашего бренда',
        'service5-title': 'Аналитика и Отчетность',
        'service5-desc': 'Решения на основе данных для оптимизации вашей работы в социальных сетях',
        'service6-title': 'Инфлюенсер Маркетинг',
        'service6-desc': 'Свяжитесь с нужными инфлюенсерами, чтобы усилить сообщение вашего бренда',
        'about-title': 'Почему Converta Agency?',
        'about-desc': 'Мы команда увлеченных экспертов по социальным сетям, стремящихся помочь бизнесу процветать в цифровом пространстве. С многолетним опытом и проверенными результатами мы превращаем подписчиков в клиентов.',
        'about-feat1': 'Стратегии на Основе Данных',
        'about-feat2': 'Творческое Совершенство',
        'about-feat3': 'Прозрачная Отчетность',
        'about-feat4': 'Выделенная Поддержка',
        'btn-work': 'Работать с Нами',
        'portfolio-title': 'Наши Работы',
        'portfolio-subtitle': 'Истории успеха брендов, которым мы помогли вырасти',
        'contact-title': 'Давайте Начнем Конвертировать',
        'contact-subtitle': 'Готовы вывести свои социальные сети на новый уровень? Свяжитесь с нами сегодня!',
        'form-name': 'Ваше Имя',
        'form-email': 'Ваш Email',
        'form-subject': 'Тема',
        'form-message': 'Ваше Сообщение',
        'btn-send': 'Отправить Сообщение',
        'pricing-title': 'SMM Тарифы',
        'pricing-subtitle': 'Над каждым пакетом работает профессиональная команда из Маркетолога, SMM менеджера, Дизайнера и Таргетолога',
        'pricing-period': '/в месяц',
        'badge-popular': '🔥 Самый популярный',
        'btn-order': 'Оформить заказ',
        'pkg-start-subtitle': 'Начальный',
        'pkg-start-desc': 'Идеально для малого бизнеса',
        'pkg-start-feat1': '12 Постов',
        'pkg-start-feat2': '2 Stories',
        'pkg-start-feat3': 'Видео: iPhone 16',
        'pkg-start-feat4': 'Обслуживание большой командой',
        'pkg-start-feat5': 'Платформы: IG, FB',
        'pkg-start-feat6': 'Система KPI 10%',
        'pkg-business-subtitle': 'Популярный',
        'pkg-business-desc': 'Для быстрого роста и продаж',
        'pkg-business-feat1': '15 Постов',
        'pkg-business-feat2': '3 Stories',
        'pkg-business-feat3': 'Видео: iPhone 16',
        'pkg-business-feat4': 'Обслуживание большой командой',
        'pkg-business-feat5': 'Платформы: IG, FB, TG',
        'pkg-business-feat6': 'Система KPI 15%',
        'pkg-premium-subtitle': 'Максимальный',
        'pkg-premium-desc': 'Для полного охвата бренда',
        'pkg-premium-feat1': '18 Постов',
        'pkg-premium-feat2': '4 Stories',
        'pkg-premium-feat3': 'Видео: Профессиональная камера',
        'pkg-premium-feat4': 'Обслуживание большой командой',
        'pkg-premium-feat5': 'IG, FB, TG, YouTube',
        'additional-title': 'Комплексные решения для вашего бизнеса',
        'additional-subtitle': 'Развивайте свой бизнес с помощью всесторонних услуг',
        'cat-it-title': 'IT и Разработка',
        'cat-it-subtitle': 'Автоматизируем ваш бизнес с помощью технологических решений',
        'service-web-title': 'Веб-сайты',
        'service-web-desc': 'Создание современных, быстрых и продающих сайтов для вашего бизнеса',
        'service-bot-title': 'Telegram Боты',
        'service-bot-desc': 'Сложные и удобные боты, упрощающие работу с клиентами',
        'cat-brand-title': 'Брендинг и Имидж',
        'cat-brand-subtitle': 'Обретите свой облик на рынке',
        'service-branding-title': 'Брендинг',
        'service-branding-desc': 'Создание логотипа, фирменного стиля и брендбука',
        'service-brandface-title': 'Брендовое Лицо',
        'service-brandface-desc': 'Формирование личного имиджа, который станет лицом вашей компании',
        'cat-traffic-title': 'Трафик и Реклама',
        'cat-traffic-subtitle': 'Гарантируем поток клиентов',
        'service-ads-title': 'Google & Yandex Реклама',
        'service-ads-desc': 'Выход на первые позиции в поисковых системах и контекстная реклама',
        'service-smm-title': 'SMM Маркетинг',
        'service-smm-desc': 'Деятельность в социальных сетях (Instagram, Facebook, YouTube)',
        'btn-details': 'Подробнее'
    },
    en: {
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-pricing': 'Pricing',
        'nav-about': 'About',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        'hero-title': 'Transform Your Social Media Presence',
        'hero-subtitle': 'We help brands grow, engage, and convert through strategic social media marketing',
        'btn-start': 'Get Started',
        'btn-services': 'Our Services',
        'stat-projects': 'Projects Completed',
        'stat-clients': 'Happy Clients',
        'stat-success': 'Success Rate %',
        'services-title': 'Our Services',
        'services-subtitle': 'Comprehensive social media solutions tailored to your business',
        'service1-title': 'Social Media Strategy',
        'service1-desc': 'Custom strategies designed to achieve your business goals and maximize ROI',
        'service2-title': 'Content Creation',
        'service2-desc': 'Engaging content that resonates with your audience and drives conversions',
        'service3-title': 'Paid Advertising',
        'service3-desc': 'Targeted ad campaigns across all major social platforms for maximum reach',
        'service4-title': 'Community Management',
        'service4-desc': 'Build and nurture engaged communities around your brand',
        'service5-title': 'Analytics & Reporting',
        'service5-desc': 'Data-driven insights to optimize your social media performance',
        'service6-title': 'Influencer Marketing',
        'service6-desc': 'Connect with the right influencers to amplify your brand message',
        'about-title': 'Why Choose Converta Agency?',
        'about-desc': 'We are a team of passionate social media experts dedicated to helping businesses thrive in the digital landscape. With years of experience and a proven track record, we convert followers into customers.',
        'about-feat1': 'Data-Driven Strategies',
        'about-feat2': 'Creative Excellence',
        'about-feat3': 'Transparent Reporting',
        'about-feat4': 'Dedicated Support',
        'btn-work': 'Work With Us',
        'portfolio-title': 'Our Work',
        'portfolio-subtitle': 'Success stories from brands we\'ve helped grow',
        'contact-title': 'Let\'s Start Converting',
        'contact-subtitle': 'Ready to take your social media to the next level? Get in touch with us today!',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-subject': 'Subject',
        'form-message': 'Your Message',
        'btn-send': 'Send Message',
        'pricing-title': 'SMM Pricing',
        'pricing-subtitle': 'Each package is handled by a professional team consisting of a Marketer, SMM Manager, Designer, and Targetologist',
        'pricing-period': '/month',
        'badge-popular': '🔥 Most Popular',
        'btn-order': 'Place Order',
        'pkg-start-subtitle': 'Starter',
        'pkg-start-desc': 'Ideal for small businesses',
        'pkg-start-feat1': '12 Posts',
        'pkg-start-feat2': '2 Stories',
        'pkg-start-feat3': 'Video: iPhone 16',
        'pkg-start-feat4': 'Large team service',
        'pkg-start-feat5': 'Platforms: IG, FB',
        'pkg-start-feat6': '10% KPI system',
        'pkg-business-subtitle': 'Popular',
        'pkg-business-desc': 'For fast growth and sales',
        'pkg-business-feat1': '15 Posts',
        'pkg-business-feat2': '3 Stories',
        'pkg-business-feat3': 'Video: iPhone 16',
        'pkg-business-feat4': 'Large team service',
        'pkg-business-feat5': 'Platforms: IG, FB, TG',
        'pkg-business-feat6': '15% KPI system',
        'pkg-premium-subtitle': 'Maximum',
        'pkg-premium-desc': 'For complete brand coverage',
        'pkg-premium-feat1': '18 Posts',
        'pkg-premium-feat2': '4 Stories',
        'pkg-premium-feat3': 'Video: Professional Camera',
        'pkg-premium-feat4': 'Large team service',
        'pkg-premium-feat5': 'IG, FB, TG, YouTube',
        'additional-title': 'Comprehensive Solutions for Your Business',
        'additional-subtitle': 'Develop your business with comprehensive services',
        'cat-it-title': 'IT & Development',
        'cat-it-subtitle': 'Automate your business through technological solutions',
        'service-web-title': 'Web Sites',
        'service-web-desc': 'Creating modern, fast and selling sites for your business',
        'service-bot-title': 'Telegram Bots',
        'service-bot-desc': 'Complex and convenient bots that facilitate customer interactions',
        'cat-brand-title': 'Branding & Image',
        'cat-brand-subtitle': 'Get your own identity in the market',
        'service-branding-title': 'Branding',
        'service-branding-desc': 'Logo creation, corporate style and brand book',
        'service-brandface-title': 'Brand Face',
        'service-brandface-desc': 'Forming a personal image that will be the face of your company',
        'cat-traffic-title': 'Traffic & Advertising',
        'cat-traffic-subtitle': 'We guarantee customer flow',
        'service-ads-title': 'Google & Yandex Ads',
        'service-ads-desc': 'Top rankings in search engines and contextual advertising',
        'service-smm-title': 'SMM Marketing',
        'service-smm-desc': 'Activities on social networks (Instagram, Facebook, YouTube)',
        'btn-details': 'Details'
    }
};

// Language Switcher Functionality
let currentLang = localStorage.getItem('language') || 'uz';

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-placeholder]').forEach(element => {
        const key = element.getAttribute('data-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang-btn') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(currentLang);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-btn');
            changeLanguage(lang);
        });
    });
});

// Contact Form Handler (Telegram Bot Integration)
// Bu qismni sozlash uchun:
// 1. @BotFather dan yangi bot yarating
// 2. Bot tokenini oling
// 3. Chat ID ni oling (botga /start yuboring va https://api.telegram.org/bot<TOKEN>/getUpdates orqali ID ni oling)
const TELEGRAM_BOT_TOKEN = '8421775173:AAGJw7B_G2cf73_v859YFGNR2Hw83jtH9fI';
const TELEGRAM_CHAT_ID = '5336097838';

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const formMessage = document.getElementById('formMessage');
    const originalBtnText = submitBtn.textContent;
    
    // Get form data
    const name = this.querySelector('[name="name"]').value;
    const email = this.querySelector('[name="email"]').value;
    const subject = this.querySelector('[name="subject"]').value;
    const message = this.querySelector('[name="message"]').value;
    
    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Yuborilmoqda...';
    formMessage.textContent = '';
    formMessage.className = 'form-message';
    
    // Format message for Telegram
    const telegramMessage = `
🆕 Yangi xabar saytdan!

👤 Ism: ${name}
📧 Email: ${email}
📋 Mavzu: ${subject || 'Mavzu ko\'rsatilmagan'}

💬 Xabar:
${message}
    `;
    
    try {
        // Send to Telegram
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML'
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            // Success
            formMessage.textContent = '✅ Xabaringiz muvaffaqiyatli yuborildi!';
            formMessage.className = 'form-message success';
            this.reset();
        } else {
            throw new Error('Telegram API xatosi');
        }
    } catch (error) {
        // Error
        formMessage.textContent = '❌ Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring yoki to\'g\'ridan-to\'g\'ri bog\'laning.';
        formMessage.className = 'form-message error';
    } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }
});

console.log('Converta Agency website loaded successfully! 🚀');