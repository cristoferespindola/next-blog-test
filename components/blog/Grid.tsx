import React from 'react';
import { Typography } from '../ui/Typography';
import { Grid } from '../ui/grid/Grid';

export const BlogGrid = ({ children, count }: { children: React.ReactNode; count?: number }) => {
  if (!children) {
    return (
      <div className="flex flex-col gap-8 w-full">
        <Typography.Text size="base" strong>
          No posts found
        </Typography.Text>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 w-full py-16">
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

export const BlogGridSkeleton = () => {
  return (
    <div className="flex flex-col gap-8 w-full py-16">
      <Grid cols={{ initial: 1, md: 2, lg: 3 }} gap={{ initial: 'md', md: 'lg' }}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="w-full h-48 bg-gray-200 rounded-lg"></div>
        ))}
      </Grid>
    </div>
  );
};
