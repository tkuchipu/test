'use client';

import { JSX } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Language = {
  name: string;
  displayName: string;
  url: string;
};

type HeaderProps = {
  fields: {
    Title: { value: string };
    SelectedLanguages: Language[];
  };
};

const Header = ({ fields }: HeaderProps): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname(); // this gives relative path, e.g. "/about"
  const params = useParams(); // get [lang] param from URL

  const languages = fields.SelectedLanguages || [];

  // Use lang from params instead of splitting pathname
  const langFromParams = typeof params?.lang === 'string' ? params.lang : 'en';

  const [currentLang, setCurrentLang] = useState(langFromParams);

  useEffect(() => {
    setCurrentLang(langFromParams);
  }, [langFromParams]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;

    if (selectedLang === currentLang) return;

    const newPath = `/${selectedLang}${pathname}`;
    router.push(newPath);
  };

  return (
    <header className="bg-gray-100 py-4 px-6 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-800">{fields.Title.value}</h1>

      {languages.length > 0 && (
        <select
          value={currentLang}
          onChange={handleLanguageChange}
          className="border border-gray-300 rounded px-3 py-1 text-sm"
        >
          {languages.map((lang) => (
            <option key={lang.name} value={lang.name}>
              {lang.displayName}
            </option>
          ))}
        </select>
      )}
    </header>
  );
};

export default Header;
