import { NextPage } from 'next';
import React from 'react';

interface Props {
  query: { title: string };
}

const Index: NextPage<Props> = ({ query }) => {
  const title = query.title ? query.title : 'Nest-Next';
  return <div>Hello, {title}</div>;
};

Index.getInitialProps = async (ctx) => {
  const { query } = ctx;
  return { query };
};

export default Index;
