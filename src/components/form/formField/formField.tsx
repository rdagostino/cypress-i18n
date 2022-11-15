import { ErrorMessage, FieldProps } from 'formik';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, FunctionComponent, InputHTMLAttributes, useState } from 'react';
import { Button } from '../../button/button';
import styles from './formField.module.scss';

// Props.
interface FormFieldProps extends FieldProps {
  autoComplete?: string;
  bottomLabel: string;
  caption?: string;
  'data-cy'?: string;
  disabled?: boolean;
  fieldFormatter?: (value: string) => string;
  label: string;
  labelPresent: boolean;
  maxLength?: number;
  minLength?: number;
  placeholder: string;
  required?: boolean;
  setFieldValue?: (field: string, value: string, shouldValidate?: boolean) => void;
  shouldShowPasswordToggle: boolean;
  type: string;
}

// Renders the error on screen.
const renderError = (message: string): JSX.Element => <p className='required'>{message}</p>;

/**
 * FormField component.
 *
 * @remarks Custom input component for the Formix `<Field /> component.
 */
const FormField: FunctionComponent<FormFieldProps> = ({
  caption,
  field,
  label,
  labelPresent = true,
  minLength,
  maxLength,
  placeholder,
  required = false,
  type,
  disabled = false,
  bottomLabel,
  shouldShowPasswordToggle = false,
  autoComplete,
  fieldFormatter,
  setFieldValue,
  'data-cy': dataCy,
}): JSX.Element => {
  const { t } = useTranslation('common');

  // Required star indicator if the field is set to required.
  const requiredEl: JSX.Element | null =
    required && labelPresent ? <span className='required'>*</span> : null;

  // State for hiding / showing password
  const [passwordType, setPasswordType] = useState<string | undefined>(
    shouldShowPasswordToggle ? 'password' : 'text'
  );

  // Define the common input attributes.
  let inputAttributes: InputHTMLAttributes<HTMLInputElement> = {
    className: shouldShowPasswordToggle ? styles.passwordToggleInput : '',
    id: field.name,
    ...field,
    minLength,
    maxLength,
    type: shouldShowPasswordToggle ? passwordType : type,
    placeholder,
    disabled,
    autoComplete,
  };

  // If field formatter & Formik's set field value exists, format the values during change.
  if (setFieldValue && fieldFormatter) {
    inputAttributes = {
      ...inputAttributes,
      onChange: (e: ChangeEvent<HTMLInputElement>): void => {
        const formattedValue: string = fieldFormatter(e.target.value);
        setFieldValue(field.name, formattedValue);
      },
    };
  }

  return (
    <div className='input-row'>
      <label htmlFor={field.name} data-cy={`${dataCy}-label`}>
        {label} {requiredEl}
      </label>
      <span className={styles.inputContainer}>
        {type === 'textarea' ? (
          <textarea
            id={field.name}
            {...field}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
            disabled={disabled}
            data-cy={dataCy}
          />
        ) : (
          <input {...inputAttributes} data-cy={dataCy} />
        )}
      </span>
      {shouldShowPasswordToggle && (
        <Button
          className={styles.showHideButton}
          type='button'
          label={passwordType === 'password' ? t('form.buttons.show') : t('form.buttons.hide')}
          onClick={(): void => setPasswordType(passwordType === 'password' ? 'text' : 'password')}
          data-cy={`${dataCy}-visibility`}
        />
      )}
      <label className={styles.bottomLabel} htmlFor={field.name}>
        {bottomLabel}
      </label>
      {caption && <p className={styles.caption}>{caption}</p>}
      <ErrorMessage name={field.name} render={renderError} />
    </div>
  );
};

// Export.
export { FormField };
