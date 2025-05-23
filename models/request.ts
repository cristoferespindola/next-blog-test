export const apiRequest = async (url: string) => {
  const response = await fetch(url, {
    next: {
      revalidate: 3600,
    },
  });

  return response.json();
};
