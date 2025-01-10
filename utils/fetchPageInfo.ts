import { sanityClient } from '@/sanity';
import { PageInfo } from '../typings';

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const query = `*[_type == "pageInfo"][0]`;
  const pageInfo: PageInfo = await sanityClient.fetch(query);
  return pageInfo;
};