import { color } from "framer-motion";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();

  return (
    <div>
      <label className="lable">{t("Select Language:")} </label>

      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option key="en" value="en">
          EN
        </option>
        <option key="de" value="de">
          DE
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
