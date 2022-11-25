import React from 'react';
import { marked } from 'marked';
import classNames from 'classnames';

type Props = {
  value: string;
};

export function RenderMarkdown({
  value,
  ...props
}: Props & React.HTMLAttributes<HTMLDivElement>) {
  const [markdown, setMarkdown] = React.useState('');
  const className = classNames(props.className, 'thon-ui-markdown');

  React.useEffect(() => {
    (async () => {
      let rawMarkdown = value;

      if (rawMarkdown.startsWith('/') && rawMarkdown.endsWith('.md')) {
        rawMarkdown = await fetch(rawMarkdown).then((response) =>
          response.text()
        );
      }

      setMarkdown(marked.parse(rawMarkdown));
    })();
  }, [value]);

  console.log(markdown);

  return (
    <div
      {...props}
      className={className}
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
  );
}
