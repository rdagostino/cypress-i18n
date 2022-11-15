import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { passwordRequirements } from './constants';
import styles from './password-requirements.module.scss';

interface PasswordRequirementsProps {}

/**
 * Password requirements component.
 *
 * @remarks Used to display the password requirements inside create account form.
 */
const PasswordRequirements: FunctionComponent<PasswordRequirementsProps> = (): JSX.Element => {
  const { t } = useTranslation(['common']);
  const { headingText, description, lowerCase, upperCase, digits, specialChars } =
    passwordRequirements;

  return (
    <div className={styles.passwordRequirements}>
      <div className={styles.heading}>
        <span className={styles.headingText}>{t(headingText)}</span>
      </div>
      <div className={styles.heading}>
        <span>{t(description)}</span>
      </div>
      <ul className={styles.list}>
        <li>
          <span>{t(lowerCase)}</span>
        </li>
        <li>
          <span>{t(upperCase)}</span>
        </li>
        <li>
          <span>{t(digits)}</span>
        </li>
        <li>
          <span>{t(specialChars)}</span>
        </li>
      </ul>
    </div>
  );
};

export default PasswordRequirements;
