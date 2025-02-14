import { Squirrel } from 'lucide-react';

import { Button } from '@/components/ui/button';

const App = () => {
  return (
    <>
      <Button color="primary" icon={<Squirrel />}>
        TEST
      </Button>
      <Button color="secondary">TEST</Button>
      <Button>TEST</Button>
    </>
  );
};

export default App;
