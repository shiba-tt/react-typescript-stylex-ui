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
      <Button icon={<Upload />}>Text</Button>
      <Button disabled icon={<Upload />}>
        Disabled Text
      </Button>
      <Button icon={<Upload />} variant="contained">
        Contained
      </Button>
      <Button disabled icon={<Upload />} variant="contained">
        Disabled Contained
      </Button>
      <Button icon={<Upload />} variant="outlined">
        Outlined
      </Button>
      <Button disabled icon={<Upload />} variant="outlined">
        Disabled Outlined
      </Button>
    </div>
  );
};

export default App;
