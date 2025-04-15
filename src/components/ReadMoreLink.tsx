interface ReadMoreLinkProps {
  href: string;
}

export default function ReadMoreLink({ href }: ReadMoreLinkProps) {
  return (
    // Styled as a button
    <a
      href={href}
      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#2B7FF9] hover:bg-[#162f6f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C3C8C]"
    >
      Read More
      <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </a>
  );
}
