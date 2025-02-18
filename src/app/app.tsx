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
      <Button icon={<Upload />}>Primary</Button>
      <Button disabled icon={<Upload />}>
        Disabled Primary
      </Button>
      <Button color="secondary" icon={<Upload />}>
        Secondary
      </Button>
      <Button color="secondary" disabled icon={<Upload />}>
        Disabled Secondary
      </Button>
      <Button color="tertiary" icon={<Upload />}>
        Tertiary
      </Button>
      <Button color="tertiary" disabled icon={<Upload />}>
        Disabled Tertiary
      </Button>
      <Button color="error" icon={<Upload />}>
        Error
      </Button>
      <Button color="error" disabled icon={<Upload />}>
        Disabled Error
      </Button>
    </div>
  );
};

export default App;
