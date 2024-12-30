import { useTranslation } from "react-i18next";

const handleError = (messageError: string | null): string => {
  const { t } = useTranslation();

  switch(messageError) {
  case 'ERR_NETWORK':
    return t('errors.errorNetwork');
  case 'ERR_BAD_REQUEST':
    return t('errors.errorBadRequest');
  default:
    return t('errors.unknownError');
  }
};

export default handleError;