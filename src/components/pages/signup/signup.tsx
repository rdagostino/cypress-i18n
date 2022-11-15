import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { createAccount } from './constants';
import styles from './signup.module.scss';

/**
 * Sign up component.
 *
 * @remarks Used to display a title of create account on login form.
 */
const Signup: FunctionComponent = (): JSX.Element => {
  // i18n translations.
  const { t } = useTranslation('common');

  // Destructure constants.
  const { dontHaveAnAccount, buttonTitle } = createAccount;

  return (
    <div className={`${styles.createAccount} row`}>
      <div className='col-12 col-xl-12'>
        <div className={`${styles.createAccountLabel}`} data-cy='create-account-label'>
          {t(dontHaveAnAccount)}
        </div>
        <Link href='#' className='btn' data-cy='create-account'>
          {t(buttonTitle)}
        </Link>
      </div>
    </div>
  );
};

export { Signup };
