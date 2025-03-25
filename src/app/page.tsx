import Image from "next/image";
import DonorSection from "../components/DonorSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/creator-share-logo.png"
            alt="Creator Share Logo"
            width={40}
            height={40}
            priority
          />
          <Image
            src="/creator-text.svg"
            alt="Creator Share Text"
            width={140}
            height={40}
            priority
          />
        </div>
        <div className="flex items-center gap-8">
          <a href="#about" className="nav-link">About Us</a>
          <a href="#work" className="nav-link">Our Work</a>
          <a href="#share" className="nav-link">Ways to Share</a>
          <a href="#sponsor" className="nav-link">Sponsorship</a>
          <a href="#partner" className="nav-link">Partnership</a>
          <a href="/donate" className="donate-button">Donate</a>
        </div>
      </nav>

      {/* Rest of the file content remains exactly the same */}
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 gap-12 items-center">
        <div>
          <h1>
            <span className="hero-title">Sharing Love, Hope and Safety:</span>
            <br />
            <span className="hero-subtitle">Creating the opportunity for invisible children to be visible again</span>
          </h1>
          <p className="hero-text mt-6 mb-8">
            Every child deserves a childhood. Together, we can end the suffering of special needs, homeless and child laboring children, living in crisis...
          </p>
          <div className="flex gap-4">
            <a href="/sponsor" className="sponsor-button">Sponsor a child</a>
            <a href="/donate" className="donate-button">Donate</a>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <span className="donor-count">1200+ Donors on board</span>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/hero-main.png"
            alt="Hero image"
            width={600}
            height={700}
            className="rounded-[2rem] object-cover"
          />
        </div>
      </main>

      {/* Ways To Share Section */}
      <section className="ways-to-share bg-[#4169E1] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-white text-center mb-12 text-4xl font-bold">Ways To Share</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-[#f6f9f8] rounded-[24px] p-8 shadow-md text-center">
              <Image
                src="/icons/fundraising.png"
                alt="Fundraising Icon"
                width={180}
                height={180}
                className="mx-auto mb-6"
              />
              <h3 className="text-[#1e3a8a] text-2xl mb-4">Fundraising</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Share Tanzania is always looking for fresh new ideas and people for our fundraising efforts.
              </p>
            </div>
            <div className="bg-[#f6f9f8] rounded-[24px] p-8 shadow-md text-center">
              <Image
                src="/icons/partner.png"
                alt="Partnership Icon"
                width={180}
                height={180}
                className="mx-auto mb-6"
              />
              <h3 className="text-[#1e3a8a] text-2xl mb-4">Partner With Us</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Share Tanzania is always looking for fresh new ideas and people for our fundraising efforts.
              </p>
            </div>
            <div className="bg-[#f6f9f8] rounded-[24px] p-8 shadow-md text-center">
              <Image
                src="/icons/volunteer.png"
                alt="Volunteer Icon"
                width={180}
                height={180}
                className="mx-auto mb-6"
              />
              <h3 className="text-[#1e3a8a] text-2xl mb-4">Volunteer</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Share Tanzania is always looking for fresh new ideas and people for our fundraising efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="section-title">About The Creator Share Foundation</h2>
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image 
                src="/images/about-foundation.png" 
                alt="Children at Creator Share Foundation" 
                width={500} 
                height={600}
                className="rounded-[2rem] object-cover"
              />
            </div>
            <div>
              <p className="about-text mb-6">
                The Creator Share Foundation is dedicated to bringing hope and support to special needs children in developing countries, often referred to as the "invisible children." These children endure unimaginable suffering in environments devoid of basic necessities such as water, electricity, and adequate shelter. In addition to the hardships faced by loving families trying to care for them, many of these children experience severe neglect due to economic hardship or cultural beliefs. Tragically, some are confined in dark rooms or restrained, left isolated with no means to call for help. These children may endure such conditions for years, either passing away in their suffering or, by God's grace, being discovered by our team.
              </p>
              <p className="about-text">
                Founded by John St. Julien, The Creator Share Foundation is driven by a mission to rescue these vulnerable children and create innovative solutions and infrastructure in the form of our children's villages and homes. Our aim is to extend love, support, healing, and faith to the most marginalized members of our global community.
              </p>
              <a href="#" className="read-more">
                Read More
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="work-section">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="section-title">Our Work</h2>
          <div className="work-grid">
            <div className="work-card">
              <Image
                src="/images/feathers-tale-new.png"
                alt="Children at Feathers Tale"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover"
              />
              <div className="work-card-content">
                <h3 className="work-card-title">Feathers Tale Children's Village</h3>
                <p className="card-text">
                  At the core of Feathers Tale are children with special needs and disabilities. Due to the demands of poverty, work and no support, parents with special needs children often have no choice but to leave their children alone whilst they work, and for all neglect can occur intentionally, it also occurs unintentionally with it.
                </p>
                <a href="#" className="read-more">
                  Read More
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="work-card">
              <Image
                src="/images/angels-gate-new.png"
                alt="Children at Angels Gate"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover"
              />
              <div className="work-card-content">
                <h3 className="work-card-title">Angels Gate Center For Street Involved Children</h3>
                <p className="card-text">
                  Sadly many of the boys and girls have endured very difficult times living on the street, due to this the children living here need a little extra care and attention away from the other children.
                </p>
                <p className="card-text mt-4">
                  Aside from the hunger, and lonely nights sleeping on the street, sadly many of the children become...
                </p>
                <a href="#" className="read-more">
                  Read More
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="work-card">
              <Image
                src="/images/animal-rescue-new.png"
                alt="Animal at Kilimanjaro Rescue"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover"
              />
              <div className="work-card-content">
                <h3 className="work-card-title">Kilimanjaro Animal Rescue</h3>
                <p className="card-text">
                  We provide stray street dogs with a home, food and medical costs, if and when needed. We are searching for safe and loving homes for the rescue dogs. We teach about Animal Welfare. We include the Children living in Feathers Tale Children's Village in the care of the Animals. We offer Equine Therapy to special needs children.
                </p>
                <a href="#" className="read-more">
                  Read More
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="max-w-7xl mx-auto px-8">
          <div className="stats-container">
            <div>
              <h2 className="stats-title">Sharing can, and does, change lives</h2>
              <div className="stats-grid">
                <div>
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Children's Lives Transformed</div>
                </div>
                <div>
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Special Needs Children Living With Us</div>
                </div>
                <div>
                  <div className="stat-number">250+</div>
                  <div className="stat-label">Children In Our Care</div>
                </div>
                <div>
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Rescue Dogs living with us</div>
                </div>
              </div>
            </div>
            <Image
              src="/images/tanzania-map.png"
              alt="Tanzania Map"
              width={400}
              height={400}
              className="tanzania-map"
            />
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="sponsorship-section">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="sponsorship-card">
              <div className="sponsorship-icons">
                <div className="icon-item active">
                  <Image
                    src="/icons/special-needs.png"
                    alt="Special Needs Icon"
                    width={24}
                    height={24}
                  />
                  <span>Special Needs</span>
                </div>
                <div className="icon-item">
                  <Image
                    src="/icons/street-child.png"
                    alt="Street Child Icon"
                    width={24}
                    height={24}
                  />
                  <span>Street Involved Child</span>
                </div>
                <div className="icon-item">
                  <Image
                    src="/icons/child-laborer.png"
                    alt="Child Laborer Icon"
                    width={24}
                    height={24}
                  />
                  <span>Child Laborer</span>
                </div>
                <div className="icon-item">
                  <Image
                    src="/icons/rescued-dog.png"
                    alt="Rescued Dog Icon"
                    width={24}
                    height={24}
                  />
                  <span>Rescued Dog</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Share With A Special Needs Child</h3>
              <p className="text-gray-600 mb-6">
                Sharing your support helps us to provide for the children we have here first and foremost, without people reaching out we simply would not be able to afford the staff, food and medical bills the children require. Nor could 2 of us care for 22 children alone I might add!
              </p>
              <a href="#" className="learn-more-button">Learn More</a>
            </div>
            <Image
              src="/sponsorship-image.jpg"
              alt="Happy child in classroom"
              width={500}
              height={600}
              className="rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Donor Section */}
      <DonorSection />

      {/* Footer */}
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
                  <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
                </a>
                <a href="#" className="social-link">
                  <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
                </a>
                <a href="#" className="social-link">
                  <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
                </a>
                <a href="#" className="social-link">
                  <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
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
                <li>Feathers Tale Children's Village</li>
                <li>Angels Gate Rehabilitation Centre For Street Involved Children</li>
                <li>Kilimanjaro Animal Rescue</li>
                <li>New Children's Village, Dodoma</li>
                <li>Faith Rehabilitation Center</li>
                <li>Rainbow Tree Early Childhood Education Center</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
