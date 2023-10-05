import 'server-only';

import { marked } from 'marked';
import client from '../apollo';

import {
  FeaturedReviewsDocument,
  ReviewDocument,
  ReviewEntity,
  ReviewsDocument,
  SearchableReviewsDocument,
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

export const CACHE_TAG_REVIEWS = 'reviews';

const CMS_URL = process.env.CMS_URL;

export const getReviews = async (page: number, pageSize = 6) => {
  const {
    data: { reviews }
  } = await client.query({
    query: ReviewsDocument,
    variables: { pageSize, page },
    context: {
      fetchOptions: {
        next: {
          tags: [CACHE_TAG_REVIEWS]
        }
      }
    }
  });

  return {
    pageCount: reviews.meta.pagination.pageCount,
    reviews: reviews.data.map(formatReview)
  };
};

export const getReview = async (slug: string) => {
  const {
    data: { reviews }
  } = await client.query({
    query: ReviewDocument,
    variables: { slug }
  });

  if (reviews.data.length === 0) {
    return null;
  }

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
    variables: { limit },
    context: {
      fetchOptions: {
        next: {
          tags: [CACHE_TAG_REVIEWS]
        }
      }
    }
  });

  return reviews.data.map(formatReview);
};

export const getSearchableReviews = async (query: string) => {
  const {
    data: { reviews }
  } = await client.query({
    query: SearchableReviewsDocument,
    variables: { query }
  });

  return reviews.data.map(({ attributes }) => ({
    title: attributes.title,
    slug: attributes.slug
  }));
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
