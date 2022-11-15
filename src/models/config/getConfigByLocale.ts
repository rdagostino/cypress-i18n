import { ConfigAndFeaturesType, ConfigImportType } from './featureTypes';
import { configAndFeatures as baseConfigAndFeatures } from './baseConfig';

/**
 * getConfigByLocale
 *
 * Method for returning config file based on region.
 *
 * @param locale
 */
const getConfigByLocale = async (locale: string | undefined): Promise<ConfigAndFeaturesType> => {
  if (locale) {
    const {
      configAndFeatures: { features, configs },
    }: ConfigImportType = await import(`./${locale}/config.ts`);
    return { features: { ...baseConfigAndFeatures.features, ...features }, configs };
  }

  const { features, configs }: ConfigAndFeaturesType = baseConfigAndFeatures;
  return { configs, features };
};

export default getConfigByLocale;
