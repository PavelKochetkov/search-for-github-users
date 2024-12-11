import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFoundPage = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <main className="flex items-center justify-center h-screen p-16">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-white">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl text-white">{t('notFoundPage.notFoundPage')}</p>
          <Link to={'/'}
            className="px-8 py-4 text-xl font-semibold rounded bg-blue-600 text-gray-50 hover:bg-blue-700"
          >
            {t('notFoundPage.backToHome')}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;