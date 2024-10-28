// LanguageDropdown.tsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageDropdown.module.scss";

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageDropdownProps {
  changeLanguage: (lang: string) => void; // Accept changeLanguage as a prop
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  changeLanguage,
}) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"); // Default language

  const languages: Language[] = [
    { code: "en", name: "English", flag: "/icons/en.svg" },
    { code: "ua", name: "Українська", flag: "/icons/ua.svg" },
    { code: "bg", name: "Български", flag: "/icons/bg.svg" },
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    setSelectedLanguage(savedLanguage);
  }, [i18n]);

  const handleLanguageChange = (code: string) => {
    changeLanguage(code); // Call the prop function to change the language
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    setSelectedLanguage(code); // Update selected language
    setIsOpen(false);
  };

  const currentLanguage = languages.find(
    (lang) => lang.code === selectedLanguage
  );

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(`.${styles.dropdown}`)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const listener = (event: MouseEvent) => handleOutsideClick(event);
      window.addEventListener("click", listener);

      return () => {
        window.removeEventListener("click", listener);
      };
    }
  }, [isOpen]);

  return (
    <div className={styles.dropdown}>
      <button
        onClick={toggleDropdown}
        className={styles.dropdownToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
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
