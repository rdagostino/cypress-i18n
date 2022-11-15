import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { FeaturesProps } from '../../../models/config/featureTypes';
import { Button } from '../../button/button';
import { FormField } from '../../form/formField/formField';
import { Signup } from '../signup/signup';
import { login } from './constants';
import { LoginBanner } from './login-banner/login-banner';

// Props.
interface LoginProps extends FeaturesProps {}

// Login form field types.
interface LoginFormValues {
  username: string;
  password: string;
}

/**
 * Login component.
 *
 * @remarks Used to display the login form through the Dashboard page.
 */
const Login: FunctionComponent<LoginProps> = ({ features = {} }): JSX.Element => {
  // i18n translations.
  const { t } = useTranslation(['common']);

  // Get enabled features.
  const { enableCreateAccount, enableLoginBanner, enableForgotPassword } = features;

  // Destructure constants.
  const { heading, forgotPasswordLink } = login;

  return (
    <section className='col-12'>
      <h1 className='with-border' data-cy='heading'>
        {t(heading)}
      </h1>

      {enableLoginBanner && <LoginBanner />}

      <div className='row'>
        <div className='col-12 col-md-6 col-lg-3'>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required(t('form.errors.username')),
              password: Yup.string().required(t('form.errors.password')),
            })}
            onSubmit={async ({ username, password }: LoginFormValues): Promise<void> => {
              console.log(username, password);
            }}
          >
            {(): JSX.Element => (
              <Form>
                <Field
                  component={FormField}
                  label={t('form.labels.username')}
                  maxLength={10}
                  name='username'
                  required
                  type='text'
                  autoComplete='off'
                  data-cy='username'
                />

                <Field
                  component={FormField}
                  label={t('form.labels.password')}
                  name='password'
                  required
                  type='password'
                  shouldShowPasswordToggle={true}
                  autoComplete='off'
                  data-cy='password'
                />
                {enableForgotPassword && (
                  <div className='link-text'>
                    <Link href='#' data-cy='forgot-password'>
                      {t(forgotPasswordLink)}
                    </Link>
                  </div>
                )}
                <Button label={t('form.buttons.submit')} data-cy='submit' />
              </Form>
            )}
          </Formik>
          {enableCreateAccount && <Signup />}
        </div>
      </div>
    </section>
  );
};

// Export.
export { Login };
