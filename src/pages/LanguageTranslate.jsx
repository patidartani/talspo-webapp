import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaGlobe } from 'react-icons/fa'; // Import the globe icon

function LanguageTranslate() {
  const [languages, setLanguages] = useState([]);
  const [targetLang, setTargetLang] = useState('');
  const [originalText, setOriginalText] = useState("Hello, John"); 
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
  const API_HOST = 'google-translate1.p.rapidapi.com'; 


  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get(`https://${API_HOST}/language/translate/v2/languages`, {
          headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST,
          },
        });
        setLanguages(response.data.data.languages);
        setError('');
      } catch (err) {
        console.error('Error fetching supported languages:', err);
        setError('Error fetching supported languages. Please try again.');
      }
    };

    fetchLanguages();
  }, [API_KEY, API_HOST]);


  const handleTranslate = async (lang) => {
    if (!lang) {
      return;
    }

    try {
      const response = await axios.post(
        `https://${API_HOST}/language/translate/v2`,
        {
          q: originalText,
          target: lang,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST,
          },
        }
      );

      const translatedText = response.data.data.translations[0].translatedText;
      setOriginalText(translatedText); // Update original text to translated text
      setError('');
    } catch (err) {
      console.error('Error translating text:', err);
      setError('Translation failed. Please try again.');
    }
  };
 
  return (
    <div className="App">
      <div className="language-selector">
        <FaGlobe size={24} />
        <select
          id="targetLang"
          value={targetLang}
          onChange={(e) => {
            const selectedLang = e.target.value;
            setTargetLang(selectedLang);
            handleTranslate(selectedLang); 
          }}
        >
          <option value="">Select Language</option>
          {languages.map((lang) => (
            <option key={lang.language} value={lang.language}>
              {lang.language}
            </option>
          ))}
        </select>
      </div>
      {error && <div className="error">{error}</div>}
      <div>
        <p><strong>Original Text:</strong> {originalText}</p>
      </div>
    </div>
  );
}

export default LanguageTranslate;
