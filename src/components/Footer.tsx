import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-8">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">The Creator Share Foundation</h3>
            <p className="footer-subtitle">UK reg Charity 1169474</p>
            <a href="mailto:enquiries@sharetanzania.com" className="footer-email">
              enquiries@sharetanzania.com
            </a>
            <div className="social-links">
              <a href="#" className="social-link">
                <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} className="h-6 w-auto" />
              </a>
              <a href="#" className="social-link">
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} className="h-6 w-auto" />
              </a>
              <a href="#" className="social-link">
                <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} className="h-6 w-auto" />
              </a>
              <a href="#" className="social-link">
                <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} className="h-6 w-auto" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="footer-list-title">Our Address</h4>
            <ul className="footer-list">
              <li>The Creator Share Foundation</li>
              <li>86-90 Paul Street</li>
              <li>London</li>
              <li>EC2A 4NE</li>
              <li>United Kingdom</li>
            </ul>
          </div>
          <div>
            <h4 className="footer-list-title">Our Centers</h4>
            <ul className="footer-list">
              <li>Feathers Tale Children&apos;s Village</li>
              <li>Angels Gate Rehabilitation Centre For Street Involved Children</li>
              <li>Kilimanjaro Animal Rescue</li>
              <li>New Children&apos;s Village, Dodoma</li>
              <li>Faith Rehabilitation Center</li>
              <li>Rainbow Tree Early Childhood Education Center</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
