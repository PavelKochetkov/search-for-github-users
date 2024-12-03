import { TFunction } from 'i18next';
import * as Yup from 'yup';
import IDataForValidation from '../models/IDataForValidation';

export const createSchemaValidationSearch = (t: TFunction): Yup.ObjectSchema<IDataForValidation> => {
  const schema = Yup.object().shape({
    nickname: Yup.string()
      .required(t('errors.required')),
  });

  return schema;
};
