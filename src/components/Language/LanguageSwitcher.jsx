

import React, { useEffect } from 'react';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            // Sabhi languages yahan include kar di hain (bn aur ne bhi)
            includedLanguages: 'hi,gu,mr,pa,kn,en,fr,es,ja,ru,de,ar,te,pt,bn,ne',
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          },
          'google_translate_element'
        );
      }
    };

    const existingScript = document.getElementById('google-translate-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
    }
  }, []);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    if (!lang) return;

    const gtCombo = document.querySelector('.goog-te-combo');
    if (gtCombo) {
      gtCombo.value = lang;
      // Event bubbling enable ki hai taaki Google event capture kar sake
      gtCombo.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      // Backup Cookie fallback agar element load na hua ho
      document.cookie = `googtrans=/en/${lang}; path=/;`;
      window.location.reload();
    }
  };

  return (
    <div className="language-switcher-wrapper">
      <select 
        id="custom-language-select" 
        onChange={handleLanguageChange} 
        defaultValue=""
      >
        <option value="">Select Language</option>
        <option value="hi">Hindi</option>
        <option value="gu">Gujarati</option>
        <option value="mr">Marathi</option>
        <option value="pa">Punjabi</option>
        <option value="kn">Kannada</option>
        <option value="bn">Bengali</option>
        <option value="te">Telugu</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="es">Spanish</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
        <option value="ja">Japanese</option>
        <option value="ar">Arabic</option>
        <option value="ne">Nepali</option>
      </select>

      <div id="google_translate_element" className="hidden-google-element"></div>
    </div>
  );
}

export default LanguageSwitcher;