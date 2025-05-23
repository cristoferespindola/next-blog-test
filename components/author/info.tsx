import Link from "next/link";

import { getAuthorsInfo } from "@/actions/authors";

export const AuthorInfo = async ({ authorId }: { authorId: number }) => {
    if (!authorId) return null;

    const author = await getAuthorsInfo(authorId);

    if (!author) return null;

    return (
        <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 hover:underline transition-all duration-300">
            <span><Link href={`/author/${author.id}`}>By {author?.name}</Link></span>
        </div>
    );
};
