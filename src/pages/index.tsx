import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { Login } from '../components/pages/login/login';
import { SiteLayout } from '../layouts/siteLayout/siteLayout';
import { ConfigAndFeaturesType, FeaturesProps } from '../models/config/featureTypes';
import getConfigByLocale from '../models/config/getConfigByLocale';
import { NextCustomPage } from '../types/next/nextCustomPage';

/**
 * Sign in page
 */
const HomePage: NextCustomPage<FeaturesProps> = ({ features }): JSX.Element => {
  // i18n translations.
  const { t } = useTranslation('common');

  return (
    <SiteLayout>
      <Head>
        <title>{t('titles.login')} - HomeAgain</title>
      </Head>
      <Login features={features} />
    </SiteLayout>
  );
};

/**
 * getStaticProps
 *
 * @param locale - Locale to be used for translation.
 *
 * @returns The i18n file.
 */
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // Get list of features.
  const { features }: ConfigAndFeaturesType = await getConfigByLocale(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['login', 'common'])),
      features,
    },
  };
};

// Export.
export default HomePage;
