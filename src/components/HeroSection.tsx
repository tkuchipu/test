import { JSX } from 'react';
import {
  Text,
  RichText,
  Field,
  Link,
  withDatasourceCheck,
  TextField,
  RichTextField,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Slider from 'react-slick';

type HeroSectionProps = ComponentProps & {
  fields: {
    Title: TextField;
    Description: RichTextField;
    PrimaryCTA: LinkField;
    SecondaryCTA: LinkField;
    PartnersTitle: TextField;
    PartnerLogos: Field;
    ImagesSelection: MediaItem[];
    SlidesToShow: { value: number };
    SlidesToScroll: { value: number };
    ShowDots: { value: boolean };
    ScrollSpeed: { value: number };
    InfiniteScroll: { value: boolean };
  };
};

type MediaItem = {
  id: string;
  url: string;
  name: string;
  fields?: {
    Alt?: { value: string };
  };
};

const HeroSection = ({ fields }: HeroSectionProps): JSX.Element => {
  const settings = {
    dots: fields.ShowDots?.value ?? true,
    infinite: fields.InfiniteScroll?.value ?? true,
    speed: fields.ScrollSpeed?.value ?? 500,
    slidesToShow: fields.SlidesToShow?.value ?? 1,
    slidesToScroll: fields.SlidesToScroll?.value ?? 1,
  };
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="flex flex-col gap-8 lg:items-center lg:gap-16 lg:flex-row">
          <div className="lg:max-w-xl xl:shrink-0">
            <div>
              <Text
                tag="h2"
                className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl"
                field={fields.Title}
              />
              <RichText
                className="mt-5 text-base font-normal text-gray-500 dark:text-gray-400 md:max-w-3xl sm:text-xl"
                field={fields.Description}
              />
            </div>
            <div className="flex flex-col gap-4 mt-8 sm:flex-row">
              <Link
                className="sm:w-[182px] px-5 py-3 w-full  text-base font-medium text-center text-white bg-primary-700 rounded-lg shrink-0 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                field={fields.PrimaryCTA}
              />

              <Link
                className="sm:w-[182px] inline-flex w-full justify-center items-center px-5 py-3 text-base font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                field={fields.SecondaryCTA}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 -ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                {fields.SecondaryCTA?.value?.text}
              </Link>
            </div>
            <div className="mt-4 sm:border-t sm:border-gray-100 sm:mt-8 sm:pt-8 dark:border-gray-700">
              <Text
                tag="p"
                className="hidden text-base font-medium text-gray-500 sm:block"
                field={fields.PartnersTitle}
              />

              <div className="flex items-center mt-3 max-w-md">
                {Array.isArray(fields.PartnerLogos) &&
                  fields.PartnerLogos.map((logo) => (
                    <img
                      key={logo.id}
                      className="w-auto h-8 md:h-12 mr-4 dark:invert"
                      src={logo.url}
                      alt={logo.fields?.Alt?.value || logo.name || 'Partner logo'}
                    />
                  ))}
              </div>
            </div>
          </div>

          <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <Slider {...settings}>
              {Array.isArray(fields.ImagesSelection) &&
                fields.ImagesSelection.map((image) => (
                  <div key={image.id}>
                    <img
                      src={image.url}
                      alt={image.fields?.Alt?.value || image.name}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<HeroSectionProps>(HeroSection);
