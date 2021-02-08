import { NextPage } from 'next';
import React from 'react';

type Props = {
  id: string
}

const Page: NextPage<Props> = ({ id }) => {
  return <div>Hello, {id}</div>;
};

Page.getInitialProps = (ctx): Props => {
  console.log(ctx.query);
  const { id } = ctx.query;
  return { id } as Props;
};

export default Page;
