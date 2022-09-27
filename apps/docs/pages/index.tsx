import { useThon } from 'thon';

const buttonDoc = require('../.thon/button/button.md');

export default function Index() {
  const { RenderDocument } = useThon();

  return <RenderDocument markdown={buttonDoc} />;
}
