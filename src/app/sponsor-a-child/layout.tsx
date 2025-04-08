import "@/app/globals.css";
import ClientProviders from "../ClientProviders";

export default function SponsorLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F5F5]">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}