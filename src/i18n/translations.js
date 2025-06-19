export const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About me", 
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "home.subtitle": "The easy part, start. The hard part, keep going.",
    "about.title": "About Me",
    "about.description": "I'm Félix Daniel Coca Calvimontes, a Software Engineer and Tech Lead from Bolivia with extensive experience in backend development and systems integration.",
    "projects.title": "Projects",
    "contact.title": "Contact",
    "contact.description": "I'm always open to new opportunities and collaborations. Feel free to reach out to me via email or LinkedIn.",
    "skills.consulting": "Consulting",
    "skills.frameworks.frontend": "Frontend",
    "skills.frameworks.backend": "Backend",
    "skills.databases": "Databases",
    "skills.infrastructure": "Infrastructure",
    "experience.title": "Professional Experience",
    "experience.view": "See my experience"
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos", 
    "nav.contact": "Contacto",
    "home.subtitle": "La parte fácil, empezar. La parte difícil, seguir.",
    "about.title": "Sobre mí",
    "about.description": "Soy Félix Daniel Coca Calvimontes, un Ingeniero de Software y Tech Lead de Bolivia con amplia experiencia en desarrollo backend e integración de sistemas.",
    "projects.title": "Proyectos",
    "contact.title": "Contacto",
    "contact.description": "Siempre estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme por email o LinkedIn.",
    "skills.consulting": "Consulting",
    "skills.frameworks.frontend": "Frontend",
    "skills.frameworks.backend": "Backend",
    "skills.databases": "Databases",
    "skills.infrastructure": "Infrastructure",
    "experience.title": "Experiencia Profesional",
    "experience.view": "Ver mi experiencia"
  }
};

export function t(key, locale = 'en') {
  return translations[locale]?.[key] || key;
}

// Client-side translation system
export function initClientTranslations() {
  let currentLocale = localStorage.getItem('locale') || 'en';
  
  function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (key) {
        const translation = translations[currentLocale]?.[key] || key;
        element.textContent = translation;
      }
    });
    
    // Update experience data if modal is open
    updateExperienceData();
    
    // Log for debugging
    console.log(`Updated ${elements.length} elements to locale: ${currentLocale}`);
  }
  
  async function updateExperienceData() {
    const modal = document.getElementById('timeline-modal');
    if (modal && modal.style.display === 'block') {
      try {
        // Fetch experience data for current locale
        const response = await fetch(`/api/experience?lang=${currentLocale}`);
        if (response.ok) {
          const experienceData = await response.json();
          updateTimelineContent(experienceData);
        }
      } catch (error) {
        console.error('Error updating experience data:', error);
      }
    }
  }
  
  function updateTimelineContent(experienceData) {
    const timelineContainer = document.querySelector('.timeline-container');
    if (!timelineContainer) return;
    
    timelineContainer.innerHTML = '';
    
    experienceData.forEach(job => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      
      timelineItem.innerHTML = `
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3 class="timeline-title">${job.title}</h3>
            <div class="timeline-company">${job.company}</div>
            <div class="timeline-location">${job.location}</div>
            <div class="timeline-period">${job.period}</div>
          </div>
          <div class="timeline-description">
            <ul>
              ${job.description.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
      
      timelineContainer.appendChild(timelineItem);
    });
  }
  
  function setLocale(locale) {
    currentLocale = locale;
    localStorage.setItem('locale', locale);
    updateTranslations();
    
    // Dispatch custom event for other components
    document.dispatchEvent(new CustomEvent('localeChanged', { 
      detail: { locale } 
    }));
  }
  
  // Initialize on page load
  updateTranslations();
  
  // Expose functions globally
  window.i18n = {
    setLocale,
    getLocale: () => currentLocale,
    t: (key) => translations[currentLocale]?.[key] || key
  };
  
  console.log('Client-side translations initialized');
} 