i18next
.use(i18nextHttpBackend)
.use(i18nextBrowserLanguageDetector)
.init({
    debug: true,
    lng: 'pl', // Wymuś język polski
    fallbackLng: 'en',
    load: 'languageOnly',
    backend: {
    loadPath: '/locales/{{lng}}.json', // Ścieżka do plików tłumaczeń
    }
}, function(err, t) {
    if (err) return console.error('Initialization error:', err);
    console.log('Current language:', i18next.language); // Sprawdź aktualny język
    jqueryI18next.init(i18next, $);
    $('body').localize();
});
