import stylex from '@stylexjs/stylex';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

const styles = stylex.create({
  root: {
    display: 'inline-flex',
  },
});

const App = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <Button icon={<Plus />}>TEST</Button>
      <Button>TEST</Button>
      <Button color="secondary">TEST</Button>
      <Button>TEST</Button>
    </div>
  );
};

export default App;
