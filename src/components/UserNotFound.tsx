import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import getRoutePage from '../helpers/routes';
import { useTranslation } from 'react-i18next';

const UserNotFound = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center h-screen text-white overflow-hidden">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">😔</h1>
        <h2 className="mt-4 text-3xl font-semibold">{t('userNotFound.title')}</h2>
        <p className="mt-2 text-lg">
          {t('userNotFound.description')}
        </p>
        <Link
          to={getRoutePage('SEARCH_PAGE')}
          className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700"
        >
          {t('userNotFound.returnToSearch')}
        </Link>
      </div>
    </div>
  );
};

export default UserNotFound;
