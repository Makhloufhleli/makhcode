

import ResizableDrawer from '@app/components/ResizableDrawer/ResizableDrawer';
import { CssBaseline } from '@mui/material';
function App() {
  return (
    <>
      <CssBaseline />
      <ResizableDrawer contents={['index.tf', 'example.tf']} />
    </>
  );
}

export default App
