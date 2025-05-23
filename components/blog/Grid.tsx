import React from 'react';
import { Typography } from '../ui/Typography';
import { Grid } from '../ui/grid/Grid';

export const BlogGrid = ({ children, count }: { children: React.ReactNode; count?: number }) => {
  return (
    <div className="flex flex-col gap-8 w-full section-border">
      {count && (
        <Typography.Text size="base" strong>
          Posts: {count}
        </Typography.Text>
      )}
      <Grid cols={{ initial: 1, md: 2, lg: 3 }} gap={{ initial: 'md', md: 'lg' }}>
        {children}
      </Grid>
    </div>
  );
};
