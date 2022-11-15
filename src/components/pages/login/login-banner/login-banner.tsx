import { useTranslation } from 'next-i18next';

import React, { FunctionComponent } from 'react';

import styles from './login-banner.module.scss';
import { loginBanner } from './constants';

/**
 * Login banner component.
 *
 * @remarks Used to display a banner above the login form.
 */
const LoginBanner: FunctionComponent = (): JSX.Element => {
  // i18n translations.
  const { t } = useTranslation('common');

  // Destructure constants.
  const { text } = loginBanner;

  return (
    <div className='row'>
      <div className='col-12 col-xl-12'>
        <div className={`${styles.bannerWrapper} row`}>
          <span aria-label={t(text)}>{t(text)}</span>
        </div>
      </div>
    </div>
  );
};

export { LoginBanner };
