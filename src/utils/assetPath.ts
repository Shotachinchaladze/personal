import getConfig from 'next/config';

/**
 * Get the correct asset path with basePath prefix for production
 * @param path - The asset path starting with /
 * @returns The full path with basePath prefix when needed
 */
export function getAssetPath(path: string): string {
  const { publicRuntimeConfig } = getConfig() || { publicRuntimeConfig: {} };
  const basePath = publicRuntimeConfig.basePath || '';
  return `${basePath}${path}`;
}