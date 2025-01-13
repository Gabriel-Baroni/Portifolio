import Head from 'next/head';
import { NextStudio } from 'next-sanity/studio';
import { NextStudioProps } from 'next-sanity/studio';
import sanityConfig from '../../sanity/sanity.config';

export default function StudioPage() {
  return (
    <>
      <Head>
        <title>Studio Page</title>
      </Head>
      <NextStudio {...sanityConfig} />
    </>
  );
}
