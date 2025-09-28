import { JSX } from 'react';
import {
  Text,
  RichText,
  Link,
  withDatasourceCheck,
  TextField,
  RichTextField,
  LinkField,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type CTAItem = {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Title: TextField;
    ActionLink: LinkField;
    Icon: ImageField;
  };
};

type CallToActionPanelProps = ComponentProps & {
  fields: {
    Title: TextField;
    Description: RichTextField;
    CTAsSelection: CTAItem[];
  };
};

const CallToActionPanel = ({ fields }: CallToActionPanelProps): JSX.Element => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
      <Text
        tag="h2"
        className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        field={fields.Title}
      />
      <RichText
        className="mb-3 font-light text-gray-500 dark:text-gray-400 sm:text-xl"
        field={fields.Description}
      />
      <div className="grid gap-8 lg:grid-cols-2">
        {fields.CTAsSelection?.map((cta) => (
          <Link
            key={cta.id}
            field={cta.fields.ActionLink}
            className="inline-flex justify-center items-center p-5 text-base font-medium 
                     text-gray-500 bg-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-100 
                     dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            style={{ textDecoration: 'none' }}
          >
            {/* Optional Icon */}
            {cta.fields.Icon?.value?.src && (
              <img
                src={cta.fields.Icon.value.src}
                alt={(cta.fields.Icon.value?.alt as string) || cta.displayName || ''}
                className="mr-3 w-5 h-5"
              />
            )}

            {/* Title */}
            <Text field={cta.fields.Title} tag="span" className="w-full" />

            <svg
              className="ml-3 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default withDatasourceCheck()<CallToActionPanelProps>(CallToActionPanel);
