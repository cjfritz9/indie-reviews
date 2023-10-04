import { marked } from 'marked';
import client from '../apollo';
import {
  FeaturedReviewsDocument,
  ReviewDocument,
  ReviewEntity,
  ReviewsDocument,
  SlugsDocument
} from '../generated/codegen';

interface Review {
  slug: string;
  title: string;
  subtitle?: string;
  body?: string;
  date: string;
  image: string;
}

const CMS_URL = 'http://localhost:1337';

export const getReviews = async (pageSize = 6) => {
  const {
    data: { reviews }
  } = await client.query({
    query: ReviewsDocument,
    variables: { pageSize }
  });

  return reviews.data.map(formatReview);
};

export const getReview = async (slug: string) => {
  const {
    data: { reviews }
  } = await client.query({
    query: ReviewDocument,
    variables: { slug }
  });

  return {
    ...formatReview(reviews.data[0]),
    body: marked(reviews.data[0].attributes.body)
  };
};

export const getSlugs = async () => {
  const {
    data: { reviews }
  } = await client.query({ query: SlugsDocument });

  return reviews.data.map((item: ReviewEntity) => item.attributes.slug);
};

export const getFeaturedReviews = async (limit = 1) => {
  const {
    data: { reviews }
  } = await client.query({
    query: FeaturedReviewsDocument,
    variables: { limit }
  });

  return reviews.data.map(formatReview);
};

const formatReview = (review: ReviewEntity) => {
  const { attributes } = review;

  return {
    slug: attributes.slug,
    title: attributes.title,
    subtitle: attributes.subtitle,
    date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CMS_URL + attributes.image.data.attributes.url
  };
};
