import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { getFieldProps } from '../../utils';
import DataModal from '../DataModal';
import Input from '../../components/shared/Input';
import ModalEvents from '../../constants/ModalEvents';

const initialValues = {
  title: '',
  link: '',
  startDate: '',
  endDate: '',
  summary: '',
};

const ProjectModal = () => {
  const { t } = useTranslation();

  const schema = Yup.object().shape({
    title: Yup.string().required(t('shared.forms.validation.required')),
    link: Yup.string().url(t('shared.forms.validation.url')),
    startDate: Yup.date(),
    endDate: Yup.date().when(
      'startDate',
      (startDate, yupSchema) =>
        startDate &&
        yupSchema.min(startDate, t('shared.forms.validation.dateRange')),
    ),
    summary: Yup.string(),
  });

  return (
    <Formik
      validateOnBlur
      initialValues={initialValues}
      validationSchema={schema}
    >
      {(formik) => (
        <DataModal
          name={t('builder.sections.project')}
          path="projects.items"
          event={ModalEvents.PROJECT_MODAL}
        >
          <div className="grid grid-cols-2 gap-8">
            <Input
              label={t('shared.forms.title')}
              className="col-span-2"
              placeholder="Port My Folio"
              {...getFieldProps(formik, schema, 'title')}
            />

            <Input
              label={t('shared.forms.website')}
              placeholder="https://github.com/AmruthPillai/Reactive-Resume"
              {...getFieldProps(formik, schema, 'link')}
            />

            <Input
              type="date"
              label={t('shared.forms.startDate')}
              placeholder="6th August 2018"
              {...getFieldProps(formik, schema, 'startDate')}
            />

            <Input
              type="date"
              label={t('shared.forms.endDate')}
              placeholder="6th August 2018"
              {...getFieldProps(formik, schema, 'endDate')}
            />

            <Input
              type="textarea"
              label={t('shared.forms.summary')}
              className="col-span-2"
              {...getFieldProps(formik, schema, 'summary')}
            />
          </div>
        </DataModal>
      )}
    </Formik>
  );
};

export default memo(ProjectModal);
