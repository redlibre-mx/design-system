import { useCallback, useState, useEffect } from 'react';
export default ((initialTheme, storageKey = 'theme') => {
  const isClient = typeof window === 'object';
  const [preferredTheme, setPreferredTheme] = useState(initialTheme);
  const [userTheme, setUserTheme] = useState();
  useEffect(() => {
    if (isClient) {
      const storage = window.localStorage;
      const storedTheme = storage.getItem(storageKey); // console.log(storedTheme, storedTheme != userTheme)

      if (storedTheme && storedTheme !== userTheme) {
        // console.warn('Theme load')
        setPreferredTheme(storedTheme);
        setUserTheme(storedTheme);
      } else if (preferredTheme && preferredTheme.length && preferredTheme !== 'system') {
        setUserTheme(preferredTheme);
        storage.setItem(storageKey, preferredTheme); // console.warn('theme change', preferredTheme)
      } else {
        setUserTheme(window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
        storage.removeItem(storageKey); // console.warn('theme reset')
      }
    } else {
      setUserTheme('light');
    }
  }, [preferredTheme, isClient]);
  const isTheme = useCallback(theme => userTheme === theme || undefined, [userTheme]);
  return {
    userTheme,
    preferredTheme,
    setPreferredTheme,
    isTheme
  };
});