export type TBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type TResponsiveObject<T> = {
  [key in TBreakpoint]?: T;
};
