import React from 'react';
import Document, { Head, Main, NextScript, DocumentContext, DocumentInitialProps, Html } from 'next/document';

interface DocProps extends DocumentInitialProps {
  locale: string;
}

export default class CustomDocument extends Document<DocProps>{
  static async getInitialProps (ctx: DocumentContext): Promise<DocProps> {
    const props = await Document.getInitialProps(ctx);

    return {
      ...props,
      locale: ctx.query.locale as string,
    };
  }

  render (): JSX.Element {
    return (
      <Html lang={this.props.locale}>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
