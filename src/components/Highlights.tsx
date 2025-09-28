import { JSX } from 'react';
import { Text, RichText, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HighlightItem = {
  id: string;
  url: string;
  name: string;
  fields: {
    Key: { value: string };
    Value: { value: string };
    ColorVariant?: { value: string };
  };
};

type HighlightsProps = ComponentProps & {
  fields: {
    Title: { value: string };
    Description: { value: string };
    HighlightsSelection: HighlightItem[];
  };
};

const colorMap: Record<
  string,
  {
    text: string;
    bg: string;
    darkBg: string;
    darkText: string;
    label: string;
  }
> = {
  blue: {
    text: 'text-blue-700',
    bg: 'bg-blue-100',
    darkBg: 'dark:bg-blue-900',
    darkText: 'dark:text-blue-300',
    label: 'text-blue-500 dark:text-blue-400',
  },
  teal: {
    text: 'text-teal-600',
    bg: 'bg-teal-100',
    darkBg: 'dark:bg-teal-900',
    darkText: 'dark:text-teal-300',
    label: 'text-teal-500 dark:text-teal-400',
  },
  indigo: {
    text: 'text-indigo-700',
    bg: 'bg-indigo-100',
    darkBg: 'dark:bg-indigo-900',
    darkText: 'dark:text-indigo-300',
    label: 'text-indigo-500 dark:text-indigo-400',
  },
  purple: {
    text: 'text-purple-700',
    bg: 'bg-purple-100',
    darkBg: 'dark:bg-purple-900',
    darkText: 'dark:text-purple-300',
    label: 'text-purple-500 dark:text-purple-400',
  },
  green: {
    text: 'text-green-600',
    bg: 'bg-green-100',
    darkBg: 'dark:bg-green-900',
    darkText: 'dark:text-green-300',
    label: 'text-green-500 dark:text-green-400',
  },
};

const Highlights = ({ fields }: HighlightsProps): JSX.Element => (
  <section className="bg-white dark:bg-gray-900">
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
      <div className="max-w-2xl mx-auto">
        <Text
          tag="h1"
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          field={fields.Title}
        />
        <RichText
          className="mb-8 text-lg font-normal text-gray-500 lg:mb-12 lg:text-xl dark:text-gray-400"
          field={fields.Description}
          //dangerouslySetInnerHTML={{ __html: fields.Description?.value }}
        />
      </div>

      <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {fields.HighlightsSelection?.map((highlight) => {
          const variantKey = highlight.fields.ColorVariant?.value?.toLowerCase() || 'blue';
          const variant = colorMap[variantKey] || colorMap['blue'];

          return (
            <div
              key={highlight.id}
              className={`p-4 rounded-lg ${variant.text} ${variant.bg} ${variant.darkBg} ${variant.darkText}`}
            >
              <Text
                tag="h2"
                className="text-3xl font-extrabold leading-tight"
                field={highlight.fields.Key}
              />
              <Text tag="span" className={`${variant.label}`} field={highlight.fields.Value} />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default withDatasourceCheck()<HighlightsProps>(Highlights);
