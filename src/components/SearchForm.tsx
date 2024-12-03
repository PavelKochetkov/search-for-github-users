import { Formik, Form, Field } from "formik";
import cn from 'classnames';
import { useTranslation } from "react-i18next";
import { createSchemaValidationSearch } from "../validations/searchValidation";

const SearhForm = (): React.ReactElement => {
  const { t } = useTranslation();
  const validationSchema = createSchemaValidationSearch(t);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl ml-2 mr-2">
      <Formik
        initialValues={{
          nickname: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}
      >
        {({ errors, isValid }) => (
          <Form>
            <Field
              className={cn('text-black p-1 rounded-xl w-full border-2 border-gray-300 focus:border-cyan-600 outline-none focus:border-dotted', { 'border-red-600': !isValid })}
              type="text" 
              name="nickname"
              placeholder={t('searchForm.placeholder')}
            />
            {!isValid && <div className="mt-1 ml-1 text-red-600 text-sm">{errors.nickname}</div>}
            <button
              className="bg-blue-500 text-white font-bold mt-8 py-2 px-4 rounded-xl w-full hover:bg-blue-700 transition duration-300"
              type="submit"
              disabled={true} //Форма пока ничего не делает. В дальнейшем использовать isSubmitting
            >
              {t('searchForm.searchButton')}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearhForm;
