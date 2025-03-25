interface ReadMoreLinkProps {
  href: string;
}

export default function ReadMoreLink({ href }: ReadMoreLinkProps) {
  return (
    <a href={href} className="read-more">
      Read More
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}
