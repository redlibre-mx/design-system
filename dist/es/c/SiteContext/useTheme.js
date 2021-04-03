import { useState, useEffect } from 'react';
export default ((initialTheme, storageKey = 'theme') => {
  const isClient = typeof window === 'object';
  const [preferredTheme, setPreferredTheme] = useState(initialTheme);
  const [userTheme, setUserTheme] = useState();
  useEffect(() => {
    const storage = window.localStorage;

    if (isClient) {
      const storedTheme = window.localStorage.getItem(storageKey); // console.log(storedTheme, storedTheme != userTheme)

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
  return {
    userTheme,
    preferredTheme,
    setPreferredTheme
  };
});