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
      {/* <label className="lable">{t("Select Language:")} </label> */}

      <select onChange={(e) => changeLanguage(e.target.value)}
      className=" bg-gray-200 text-gray-800 rounded-md p-1 m-1"
      >
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
