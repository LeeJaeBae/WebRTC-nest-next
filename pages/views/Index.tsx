import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string
}

const Index: NextPage<Props> = ({ title }) => {
  return <div>Hello, {title}
    <Link href={`/id/${title}`}>
      <div>{title}</div>
    </Link>
  </div>;
};

Index.getInitialProps = (ctx): Props => {
  console.log(ctx.query);
  const { title } = ctx.query;
  return { title } as Props;
};

export default Index;
