import { JSX } from 'react';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Slider from 'react-slick';

type MediaItem = {
  id: string;
  url: string;
  name: string;
  fields?: {
    Alt?: { value: string };
  };
};

type MediaCarouselProps = ComponentProps & {
  fields: {
    ImagesSelection: MediaItem[];
    SlidesToShow: { value: number };
    SlidesToScroll: { value: number };
    ShowDots: { value: boolean };
    ScrollSpeed: { value: number };
    InfiniteScroll: { value: boolean };
  };
};

const MediaCarousel = ({ fields }: MediaCarouselProps): JSX.Element => {
  const settings = {
    dots: fields.ShowDots?.value ?? true,
    infinite: fields.InfiniteScroll?.value ?? true,
    speed: fields.ScrollSpeed?.value ?? 500,
    slidesToShow: fields.SlidesToShow?.value ?? 1,
    slidesToScroll: fields.SlidesToScroll?.value ?? 1,
  };

  return (
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
  );
};

export default withDatasourceCheck()<MediaCarouselProps>(MediaCarousel);
