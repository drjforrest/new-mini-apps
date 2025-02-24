import { useState, useEffect } from 'react';
import { AFRICAN_COUNTRIES } from 'data/countries';
import type { Country } from 'types/fq/country';

export function useFlags() {
  const [flags, setFlags] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFlags = async () => {
      try {
        const flagUrls = AFRICAN_COUNTRIES.reduce((acc, country) => ({
          ...acc,
          [country.name]: country.flagUrl
        }), {} as Record<string, string>);
        
        setFlags(flagUrls);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load flags');
        setLoading(false);
      }
    };

    loadFlags();
  }, []);

  return { flags, loading, error };
}
