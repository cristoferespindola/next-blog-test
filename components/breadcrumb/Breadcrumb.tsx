import Link from 'next/link';
import React from 'react';
import { HomeIcon } from '../icons/Home';

const BreadcrumbSeparator = () => {
  return (
    <span className="mx-2 text-[#00000030]">
      <svg
        className="w-6 mr-4"
        fill="currentColor"
        viewBox="0 0 24 44"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
      </svg>
    </span>
  );
};

const BreadcrumbItem = ({
  url,
  label,
  active,
}: {
  url: string;
  label: React.ReactNode | string;
  active: boolean;
}) => {
  return (
    <Link
      className={`capitalize mr-4 hover:text-gray-700 ${active ? 'cursor-default' : 'text-primary'}`}
      href={active ? '' : url}
    >
      {label}
    </Link>
  );
};

const BreadcrumbHome = () => {
  return (
    <>
      <BreadcrumbItem url="/" label={<HomeIcon />} active={false} />
      <BreadcrumbSeparator />
    </>
  );
};

export const Breadcrumb = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav aria-label="Breadcrumb" className="w-fit">
      <ol className="flex items-center h-11 w-auto px-4 shadow-around rounded-lg text-gray-500">
        <BreadcrumbHome />
        {children}
      </ol>
    </nav>
  );
};

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Separator = BreadcrumbSeparator;
Breadcrumb.Home = BreadcrumbHome;
