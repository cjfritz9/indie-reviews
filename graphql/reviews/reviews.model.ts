import { marked } from 'marked';
import client from '../apollo';
import {
  FeaturedReviewDocument,
  ReviewDocument,
  ReviewEntity,
  ReviewEntityResponse,
  ReviewsDocument,
  SlugsDocument,
  SlugsQueryResult
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

export const getReviews = async () => {
  const {
    data: { reviews }
  } = await client.query({
    query: ReviewsDocument
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

export const getFeaturedReview = async () => {
  const {
    data: { reviews }
  } = await client.query({ query: FeaturedReviewDocument });

  return formatReview(reviews.data[0]);
};

const formatReview = (review: ReviewEntity) => {
  const { attributes } = review;

  return {
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CMS_URL + attributes.image.data.attributes.url
  };
};
