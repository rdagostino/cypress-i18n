import { Field } from 'formik';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { getFieldMaxLength, zipCodeFormatter } from '../../../utils/fieldFormatter';
import { FormField } from '../../form/formField/formField';
import { customerFields } from './constants';

// Customer Fields types.
interface CustomerFieldsProps {
  setFieldValue: (field: string, value: string, shouldValidate?: boolean) => void;
}

const CustomerFields: FunctionComponent<CustomerFieldsProps> = ({ setFieldValue }): JSX.Element => {
  const { t } = useTranslation('common');

  const { postCode, customerNumber } = customerFields;

  // Get max length for specific form fields.
  const { zipCodeMaxLength } = getFieldMaxLength();

  return (
    <div className='row'>
      <div className='col-12 col-md-6 col-lg-3'>
        <Field
          component={FormField}
          label={t(customerNumber)}
          maxLength={10}
          name='userId'
          required
          type='text'
          autoComplete='off'
        />
        <Field
          component={FormField}
          label={t(postCode)}
          maxLength={zipCodeMaxLength}
          name='postCode'
          required
          type='text'
          fieldFormatter={zipCodeFormatter}
          setFieldValue={setFieldValue}
          autoComplete='off'
        />
      </div>
    </div>
  );
};

export default CustomerFields;
