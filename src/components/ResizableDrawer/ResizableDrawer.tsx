import { Box, List, ListItem, Paper } from '@mui/material';
import { useEffect, useState } from 'react';

export interface ResizableDrawerProps {
  contents: string[];
}
const ResizableDrawer = ({contents}: ResizableDrawerProps) => {
  const [width, setWidth] = useState(200);
  const [isResizing, setIsResizing] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialWidth, setInitialWidth] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = initialWidth + (e.clientX - initialX);
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, initialWidth, initialX]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsResizing(true);
    setInitialX(e.clientX);
    setInitialWidth(width);
  };

  return (
    <Box>
      <Paper
        sx={{
          position: 'relative',
          width: width,
          height: '100vh',
          border: '1px solid',
          overflow: 'hidden',
          borderColor: 'primary.main',
          borderRightStyle: 'dashed',
        }}
      >
        {/* Render your content here */}
        <Box
          style={{
            position: 'absolute',
            width: 8,
            height: '100%',
            top: 0,
            right: 0,
            cursor: 'col-resize',
            backgroundColor: 'primary.light',
          }}
          onMouseDown={handleMouseDown}
        >
          <List>
          {contents.map((file, index) => (
            <ListItem key={index}>{file}</ListItem>
          ))}
        </List>
          </Box>
      </Paper>
    </Box>
  );
};

export default ResizableDrawer;
