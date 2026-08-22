import {useState, useEffect} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const STORAGE_KEY = 'docusaurus.tab.country';
const DEFAULT_COUNTRY = 'us';

export function useCountry() {
  const [country, setCountry] = useState(() => {
    if (!ExecutionEnvironment.canUseDOM) return DEFAULT_COUNTRY;
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_COUNTRY;
    } catch {
      return DEFAULT_COUNTRY;
    }
  });

  useEffect(() => {
    function handleStorage(e) {
      if (e.key === STORAGE_KEY && e.newValue) {
        setCountry(e.newValue);
      }
    }
    function handleCountryChange(e) {
      setCountry(e.detail);
    }

    window.addEventListener('storage', handleStorage);
    window.addEventListener('country-change', handleCountryChange);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('country-change', handleCountryChange);
    };
  }, []);

  return country;
}
