export interface IPages {
  params:
    | {
        id: string;
      }
    | Promise<{
        id: string;
      }>;
}
