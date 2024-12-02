import { useTranslation } from "react-i18next";
import { ReactElement } from "react";

const Footer = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <footer
      className="bg-slate-950 font-mono text-xl p-4 text-center text-white hover:text-slate-500 transition duration-300">
      <a
        className="hover:underline"
        href='https://github.com/PavelKochetkov'
        target="_blank"
        rel="noreferrer"
      >
        {t('footer.developer')}
      </a>
    </footer>
  );
};

export default Footer;
