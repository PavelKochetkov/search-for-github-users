import { ReactElement, useEffect } from "react";
import { useUsersStore } from "../store/usersStore";
import { useTranslation } from "react-i18next";
import cn from 'classnames';

const Pagination = (): ReactElement => {
  const {
    per_page,
    getUsersData,
    setSwitchForward,
    setSwitchBack,
    nickname,
    page,
    totalPages,
    currentPage,
    currentPerPage,
    total_count,
  } = useUsersStore();
  const { t } = useTranslation();

  const handleClickForward = () => {
    setSwitchForward(page);
  };

  const handleClickBack = () => {
    setSwitchBack(page);
  };

  useEffect(() => {
    getUsersData(nickname, page, per_page);
  }, [page]);

  return (
    <div className="flex flex-col items-center justify-center">
      {
        total_count !== 0 && 
        <>
          <span className="text-sm text-white">
            {t('pagination.showing')}
            {' '}
            <span className="font-semibold text-white">{currentPage}</span>
            {' '}
            {t('pagination.to')}
            {' '}
            <span className="font-semibold text-white">{currentPerPage}</span>
            {' '}
            {t('pagination.of')}
            {' '}
            <span className="font-semibold text-white">{totalPages}</span>
            {' '}
            {t('pagination.entries')}
          </span><div className="inline-flex mt-2 xs:mt-0">
            <button
              className={cn("flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900", { "opacity-50": currentPage === 1 })}
              onClick={handleClickBack}
              disabled={currentPage === 1}
            >
              <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
              </svg>
              {t('pagination.prev')}
            </button>
            <button
              className={cn("flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900", { "opacity-50": currentPerPage === totalPages || totalPages === 1 })}
              onClick={handleClickForward}
              disabled={currentPerPage === totalPages || totalPages === 1}
            >
              {t('pagination.next')}
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>
        </>
      }
    </div>
  );
};

export default Pagination;