// Type for feature flag configuration
export interface FeatureFlagType {
  featuresList: { [key: string]: boolean };
  configs: { [key: string]: string };
  loading: boolean;
}

export interface ConfigAndFeaturesType {
  features: { [key: string]: boolean };
}

export interface FeaturesProps {
  features?: { [key: string]: boolean };
}

export interface ConfigImportType {
  configAndFeatures: ConfigAndFeaturesType;
}
