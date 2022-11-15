import { Field } from 'formik';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { FormField } from '../../form/formField/formField';
import { passwordFields } from './constants';
import PasswordRequirements from './password-requirements/passwordRequirements';

// New password form field types.
interface NewPasswordFormProps {}

const NewPasswordFields: FunctionComponent<NewPasswordFormProps> = (): JSX.Element => {
  const { t } = useTranslation('common');

  // Destructure constants.
  const { passLabel, confirmPassword } = passwordFields;

  return (
    <div className='row'>
      <div className='col-12 col-md-6 col-lg-3'>
        <Field
          component={FormField}
          label={t(passLabel)}
          name='password'
          required
          type='password'
          shouldShowPasswordToggle={true}
          autoComplete='off'
        />
        <Field
          component={FormField}
          label={t(confirmPassword)}
          name='confirmPassword'
          required
          type='password'
          shouldShowPasswordToggle={true}
          autoComplete='off'
        />
      </div>
      <div className='col-12 col-md-6 col-lg-3'>
        <PasswordRequirements />
      </div>
    </div>
  );
};

export default NewPasswordFields;
