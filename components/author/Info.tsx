import Link from 'next/link';

import { authorsInfo } from '@/actions/authors/actions';
import { TId } from '@/models/types';
import { UserInfoAvatar, UserRow } from '../user/Info';

export const AuthorRow = ({ id, name }: { id: TId; name: string }) => {
  if (!id || !name) return null;

  return (
    <Link href={`/author/${id}`} aria-label={name}>
      <UserRow name={name} />
    </Link>
  );
};

const AuthorInfoAvatar = ({ id, name, company }: { id: TId; name: string; company: string }) => {
  if (!id || !name || !company) return null;

  return (
    <Link href={`/author/${id}`} className="flex items-center gap-4" aria-label={name}>
      <UserInfoAvatar name={name} sub={company} />
    </Link>
  );
};

export const AuthorInfo = async ({
  authorId,
  type = 'row',
}: {
  authorId: TId;
  type?: 'row' | 'avatar';
}) => {
  if (!authorId) return null;

  const author = await authorsInfo(authorId);

  if (!author || 'error' in author) return null;

  return type === 'row' ? (
    <AuthorRow id={author.id} name={author.name} />
  ) : (
    <AuthorInfoAvatar id={author.id} name={author.name} company={author.company} />
  );
};
