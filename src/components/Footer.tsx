import Image from "next/image";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { brand } from "@/config/brand";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-blue to-[#08121F] text-white">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-12 md:py-16 pb-24 lg:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <Image
              src="/images/logo-kelly-fung.png"
              alt="Kelly Fung Realtor"
              width={160}
              height={80}
              className="h-14 w-auto brightness-0 invert mb-3"
            />
            <p className="text-sm text-white/70 mb-3">{brand.brokerage}</p>
            <p className="text-sm text-white/80 leading-relaxed">
              Your trusted guide to South Florida real estate.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-brand-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Areas", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-brand-gold">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {brand.serviceAreas.slice(0, 5).map((area) => (
                <li key={area} className="text-sm text-white/80">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-brand-gold">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>{brand.address}</li>
              <li>
                <a href={brand.phoneLink} className="hover:text-white transition-colors">
                  {brand.phone}
                </a>
              </li>
              <li>{brand.hours}</li>
              <li>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {brand.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-10 pt-8 border-t border-white/20">
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Kelly on Instagram"
            className="text-white/70 hover:text-white transition-colors"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61562435458978"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Kelly on Facebook"
            className="text-white/70 hover:text-white transition-colors"
          >
            <FacebookIcon size={20} />
          </a>
          <a
            href="#"
            aria-label="Connect with Kelly on LinkedIn"
            className="text-white/70 hover:text-white transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 text-xs text-white/60 space-y-1">
          <p>
            &copy; 2026 {brand.name}, {brand.brokerage}. All Rights Reserved. |
            License {brand.license}
          </p>
          <p>Each office independently owned and operated. Equal Housing Opportunity.</p>
        </div>
      </div>
    </footer>
  );
}
