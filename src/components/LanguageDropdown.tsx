// LanguageDropdown.tsx
// LanguageDropdown.tsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageDropdown.module.scss";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language

  const languages = [
    { code: "en", name: "English", flag: "./icons/en.svg" },
    { code: "uk", name: "Українська", flag: "/icons/ua.svg" },
    { code: "bg", name: "Български", flag: "/icons/bg.svg" },
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    setSelectedLanguage(savedLanguage);
  }, [i18n]);

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    setSelectedLanguage(code); // Update selected language
    setIsOpen(false);
  };

  // Find the current language object for display
  const currentLanguage = languages.find(
    (lang) => lang.code === selectedLanguage
  );

  return (
    <div className={styles.dropdown}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.dropdownToggle}
      >
        {currentLanguage && (
          <>
            <img
              src={currentLanguage.flag}
              alt={currentLanguage.name}
              style={{ width: "20px", marginRight: "8px" }}
            />
            {currentLanguage.code.toUpperCase()}
          </>
        )}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {languages.map((lang) => (
            <li key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
              <img
                src={lang.flag}
                alt={lang.name}
                style={{ width: "20px", marginRight: "8px" }}
              />
              {lang.code.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
