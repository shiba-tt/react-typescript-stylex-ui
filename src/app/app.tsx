import React from 'react';

import stylex from '@stylexjs/stylex';
import { Upload } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';

const styles = stylex.create({
  root: {},
});

const App = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickToggle = React.useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div {...stylex.props(styles.root)}>
        <Button icon={<Upload />} onClick={handleClickToggle}>
          Primary
        </Button>
      </div>
      <Dialog open={open} />
    </>
  );
};

export default App;
