async function initializeI18next() {
    try {
      await i18next
        .use(i18nextHttpBackend)
        .use(i18nextBrowserLanguageDetector)
        .init({
          fallbackLng: 'en',
          debug: true,
          interpolation: {
            escapeValue: false
          },
          backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
          }
        });
  
      updateTranslations();
    } catch (error) {
      console.error('Error initializing i18next:', error);
    }
  }

  function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      element.innerText = i18next.t(element.getAttribute('data-i18n'));
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initializeI18next();

    document.getElementById('lang-en')?.addEventListener('click', () => {
      i18next.changeLanguage('en').then(() => {
        updateTranslations();
      });
    });

    document.getElementById('lang-pl')?.addEventListener('click', () => {
      i18next.changeLanguage('pl').then(() => {
        updateTranslations();
      });
    });

    i18next.on('languageChanged', (lng) => {
      updateTranslations();
    });
  });