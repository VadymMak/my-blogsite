import React, { useEffect, useState, useCallback } from "react";
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
  isBlogPage?: boolean;
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
    // Set language to "en" when entering BlogPage, or use current language for other pages
    if (isBlogPage) {
      const initLanguage = "en";
      setSelectedLanguage(initLanguage);
      localStorage.setItem("language", initLanguage);
      i18n.changeLanguage(initLanguage);
      dispatch(fetchPosts(initLanguage));
    } else {
      const savedLanguage = localStorage.getItem("language") || "en";
      setSelectedLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, [isBlogPage, i18n, dispatch]);

  const handleLanguageChange = useCallback(
    (code: string) => {
      changeLanguage(code);
      i18n.changeLanguage(code);
      localStorage.setItem("language", code);
      setSelectedLanguage(code);
      setIsOpen(false);
      dispatch(fetchPosts(code));
    },
    [changeLanguage, i18n, dispatch]
  );

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropdown}>
      <button
        onClick={toggleDropdown}
        className={styles.dropdownToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {languages.find((lang) => lang.code === selectedLanguage) && (
          <>
            <img
              src={
                languages.find((lang) => lang.code === selectedLanguage)!.flag
              }
              alt={
                languages.find((lang) => lang.code === selectedLanguage)!.name
              }
              style={{ width: "20px", marginRight: "8px" }}
            />
            {selectedLanguage.toUpperCase()}
          </>
        )}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => handleLanguageChange(lang.code)}
                disabled={isBlogPage && lang.code === "ua"} // Disable UA on BlogPage
                className={`${styles.languageButton} ${
                  isBlogPage && lang.code === "ua" ? styles.disabled : ""
                }`}
                style={{
                  opacity: isBlogPage && lang.code === "ua" ? 0.5 : 1, // Visually indicate disabled state
                  cursor:
                    isBlogPage && lang.code === "ua"
                      ? "not-allowed"
                      : "pointer",
                }}
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
