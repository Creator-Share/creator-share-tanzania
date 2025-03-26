"use client";

import { useEffect, useRef } from "react";

interface PageContentProps {
  content: string;
  className?: string;
}

export default function PageContent({ content = "", className = "" }: PageContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Format content if it's not HTML
  const formattedContent = content.trim().startsWith('<') 
    ? content // Already HTML
    : `<p>${content.replace(/\n/g, '</p><p>')}</p>`; // Convert plain text to HTML paragraphs

  // This effect will run after the component mounts and the content is rendered
  useEffect(() => {
    if (!contentRef.current || !content) return;

    // Get all links in the content
    const links = contentRef.current.querySelectorAll("a");

    // Add target="_blank" and rel="noopener noreferrer" to external links
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && (href.startsWith("http") || href.startsWith("https"))) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });

    // Add classes to elements for styling
    const headings = contentRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      heading.classList.add("font-bold", "mt-6", "mb-4");
      
      // Add specific classes based on heading level
      if (heading.tagName === "H1") {
        heading.classList.add("text-3xl");
      } else if (heading.tagName === "H2") {
        heading.classList.add("text-2xl");
      } else if (heading.tagName === "H3") {
        heading.classList.add("text-xl");
      }
    });

    const paragraphs = contentRef.current.querySelectorAll("p");
    paragraphs.forEach((p) => {
      p.classList.add("mb-4");
    });

    const lists = contentRef.current.querySelectorAll("ul, ol");
    lists.forEach((list) => {
      list.classList.add("mb-4", "ml-6");
      
      if (list.tagName === "UL") {
        list.classList.add("list-disc");
      } else {
        list.classList.add("list-decimal");
      }
    });

    const listItems = contentRef.current.querySelectorAll("li");
    listItems.forEach((item) => {
      item.classList.add("mb-2");
    });

    const images = contentRef.current.querySelectorAll("img");
    images.forEach((img) => {
      img.classList.add("max-w-full", "h-auto", "my-4", "rounded-lg");
    });

    const tables = contentRef.current.querySelectorAll("table");
    tables.forEach((table) => {
      table.classList.add("w-full", "border-collapse", "my-4");
      
      const cells = table.querySelectorAll("th, td");
      cells.forEach((cell) => {
        cell.classList.add("border", "border-gray-300", "p-2");
      });
      
      const headerCells = table.querySelectorAll("th");
      headerCells.forEach((cell) => {
        cell.classList.add("bg-gray-100", "font-bold");
      });
    });

    const blockquotes = contentRef.current.querySelectorAll("blockquote");
    blockquotes.forEach((quote) => {
      quote.classList.add("border-l-4", "border-gray-300", "pl-4", "italic", "my-4");
    });

    const codeBlocks = contentRef.current.querySelectorAll("pre");
    codeBlocks.forEach((block) => {
      block.classList.add("bg-gray-100", "p-4", "rounded", "overflow-x-auto", "my-4");
    });

    const inlineCode = contentRef.current.querySelectorAll("code:not(pre code)");
    inlineCode.forEach((code) => {
      code.classList.add("bg-gray-100", "px-1", "rounded", "font-mono", "text-sm");
    });
  }, [content]);

  return content ? (
    <div 
      ref={contentRef}
      className={`page-content ${className}`}
      dangerouslySetInnerHTML={{ __html: formattedContent }}
    />
  ) : (
    <div className={`page-content ${className}`}>
      <p className="text-gray-500 italic">No content available</p>
    </div>
  );
}
