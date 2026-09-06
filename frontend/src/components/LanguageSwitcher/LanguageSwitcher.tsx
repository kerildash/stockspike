import { type ChangeEvent, type FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';

export const LanguageSwitcher: FC = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      value={currentLanguage}
      onChange={handleLanguageChange}
      aria-label={t('languageSwitcher.label')}
      className=" cursor-pointer mx-2 text-white transition-colors py-2"
    >
      {SUPPORTED_LANGUAGES.map((language) => (
        <option
          className="bg-gray-800"
          key={language.code}
          value={language.code}
        >
          {language.label}
        </option>
      ))}
    </select>
  );
};