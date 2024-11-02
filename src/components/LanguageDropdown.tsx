import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageDropdown.module.scss";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../store/blogSlice";
import { AppDispatch } from "../store/store";

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageDropdownProps {
  changeLanguage: (lang: string) => void;
  isBlogPage?: boolean; // Flag to indicate if on Blog page
  currentLanguage: string;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  changeLanguage,
  isBlogPage = false,
  currentLanguage,
}) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(currentLanguage);

  const dispatch = useDispatch<AppDispatch>();

  const allLanguages: Language[] = [
    { code: "en", name: "English", flag: "/icons/en.svg" },
    { code: "ua", name: "Українська", flag: "/icons/ua.svg" },
    { code: "bg", name: "Български", flag: "/icons/bg.svg" },
  ];

  const languages = allLanguages;

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    setSelectedLanguage(savedLanguage);
  }, [i18n]);

  useEffect(() => {
    if (isBlogPage && selectedLanguage === "ua") {
      handleLanguageChange("en");
    }
  }, [isBlogPage]);

  const handleLanguageChange = (code: string) => {
    changeLanguage(code);
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    setSelectedLanguage(code);
    setIsOpen(false);
    dispatch(fetchPosts(code)); // Fetch posts for the selected language
  };

  const currentLang = languages.find((lang) => lang.code === selectedLanguage);

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
        {currentLang && (
          <>
            <img
              src={currentLang.flag}
              alt={currentLang.name}
              style={{ width: "20px", marginRight: "8px" }}
            />
            {currentLang.code.toUpperCase()}
          </>
        )}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => handleLanguageChange(lang.code)}
                disabled={isBlogPage && lang.code === "ua"} // Disable Ukrainian button on Blog page
                className={styles.languageButton} // Optional: Add a class for styling disabled buttons
                style={{ opacity: isBlogPage && lang.code === "ua" ? 0.5 : 1 }} // Optional: Change appearance
              >
                <img
                  src={lang.flag}
                  alt={lang.name}
                  style={{ width: "20px", marginRight: "8px" }}
                />
                {lang.code.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
