import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ConfigAndFeaturesType, FeatureFlagType } from '../models/config/featureTypes';
import getConfigByLocale from '../models/config/getConfigByLocale';

/**
 * useFeatureFlags
 *
 * @description Custom hook for retrieving feature flags.
 *
 */
const useFeatureFlags = (testFlag?: string): FeatureFlagType => {
  // Get router.
  const { locale } = useRouter();

  // State for saving list of features.
  const [featuresList, setFeaturesList] = useState<{ [key: string]: boolean }>({});

  // State for saving list of configs.
  const [configs, setConfigs] = useState<{ [key: string]: string }>({});

  // State for setting loader.
  const [loading, setLoading] = useState<boolean>(true);

  console.log(testFlag || locale);

  useEffect(() => {
    const getFeaturesConfig = async (): Promise<ConfigAndFeaturesType> =>
      getConfigByLocale(testFlag || locale);
    getFeaturesConfig().then(({ features, configs }: ConfigAndFeaturesType) => {
      setFeaturesList(features);
      setConfigs(configs);
      setLoading(false);
    });
  }, []);

  return { featuresList, configs, loading };
};

export { useFeatureFlags };
