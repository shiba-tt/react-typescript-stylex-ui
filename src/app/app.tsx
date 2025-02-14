import stylex from '@stylexjs/stylex';
import { Upload } from 'lucide-react';

import { Button } from '@/components/ui/button';

const styles = stylex.create({
  root: {
    display: 'inline-flex',
  },
});

const App = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <Button icon={<Upload />}>TEST</Button>
      <Button>TEST</Button>
      <Button color="secondary">TEST</Button>
      <Button>TEST</Button>
    </div>
  );
};

export default App;
