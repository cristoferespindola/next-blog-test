'use server';

import { getAuthors, getAuthorById } from "@/models/author/api";

export const getAuthorss = async () => {
  const authors = await getAuthors();

  if (!authors.success) {
    return null;
  }

  return authors.data;
};

export const getAuthorsInfo = async (id: number) => {
    const authors = await getAuthorById(id);

    if (!authors.success) {
        return null;
    }
    
    const author = authors.data;

    return {
        name: author?.name,
        id: author?.id,
        email: author?.email,
        phone: author?.phone,
        website: author?.website,
        company: author?.company.name,
        address: author?.address.city,        
    };
};
