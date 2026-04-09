"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import SilkBackground from "@/components/ui/SilkBackground";
import { AnimatedTestimonials, type Testimonial } from "@/components/ui/animated-testimonials";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marifer Vergara",
    role: "USA Mortgage Homes",
    content:
      "At USA Mortgage Homes, we had the pleasure of working with Kelly Fung, Realtor, and the experience was outstanding. Kelly is relentless when it comes to serving her clients — always proactive, detail-oriented, and committed to making the process as smooth as possible. We truly value working alongside real estate partners who share our dedication to putting clients first, and Kelly exemplifies that every step of the way.",
    rating: 5,
    initials: "MV",
    color: "#7C3AED",
  },
  {
    id: 2,
    name: "Riley",
    role: "Home Buyer — Broward County",
    content:
      "Working with Kelly was a blessing. From the very beginning, Kelly impressed us with her deep market knowledge, sharp negotiating skills, and genuine care for our needs. She took the time to truly understand what we were looking for and guided us through every step of the buying process with patience and professionalism. She was always one step ahead, anticipating potential challenges and offering creative solutions that made the entire experience smooth and stress-free.",
    rating: 5,
    initials: "R",
    color: "#2563EB",
  },
  {
    id: 3,
    name: "Scott Leaser",
    role: "Home Seller — Fort Lauderdale",
    content:
      "It is always an exceptional experience working with Kelly. From start to finish, she will bring tremendous energy and expertise to the process of selling your home. I have not seen a realtor stage a property like Kelly does and she really has an incredible eye for design in a way that truly highlights its best features. Her transformations are stunning. She is responsive, professional and a genuine hustler. I can't recommend Kelly Fung enough.",
    rating: 5,
    initials: "SL",
    color: "#059669",
  },
  {
    id: 4,
    name: "Nicole Ingrati",
    role: "Home Buyer — South Florida",
    content:
      "Just wanted to give a quick shoutout to my realtor — working with Kelly was such a smooth and enjoyable experience! She was super knowledgeable, always quick to respond, and genuinely had my best interest at heart. Whether it was answering our questions, arranging showings at convenient times, or providing valuable insights about the neighborhoods we were considering, I always knew she had our best interests at heart.",
    rating: 5,
    initials: "NI",
    color: "#DC2626",
  },
  {
    id: 5,
    name: "Juan Lamonaca",
    role: "Property Investor — Broward County",
    content:
      "Kelly is my go to realtor for all our properties, the attention she gives is unmatched. She does whatever it takes and has sold many of our homes, and has helped us find our dream home. Highly recommend Kelly!!",
    rating: 5,
    initials: "JL",
    color: "#D97706",
  },
  {
    id: 6,
    name: "Leah Abbondandolo",
    role: "Home Buyer — Broward County",
    content:
      "Kelly is exceptional! She is so kind and straight-to-the-point. I told her my preferences, ideal areas and budget. She took everything into consideration and provided me her recommendations as well. Without her, I would not have found my dream home.",
    rating: 5,
    initials: "LA",
    color: "#9333EA",
  },
  {
    id: 7,
    name: "Karly Blake",
    role: "Home Buyer — Fort Lauderdale",
    content:
      "I had the absolute pleasure of working with Kelly when purchasing my house. She is intuitive and understands when a more assertive approach is needed. I truly believe I would have lost this property if not for her, and I'm truly grateful for her experience and expertise.",
    rating: 5,
    initials: "KB",
    color: "#0891B2",
  },
  {
    id: 8,
    name: "Luke H",
    role: "First-Time Home Buyer",
    content:
      "If I could give 100 stars I would, Kelly was absolutely fantastic at everything she does. As first time home sellers and buyers she helped us through soo many challenges and became more of a friend/mentor rather than realtor to us. And we appreciate her hard work & friendship through this next chapter of our lives. Thanks Kelly!!!!",
    rating: 5,
    initials: "LH",
    color: "#4F46E5",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-16 md:py-24 overflow-hidden">
      <SilkBackground colorR={20} colorG={30} colorB={50} noiseIntensity={0.6} />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-blue/50 via-transparent to-brand-blue/50" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-8">
        <AnimatedTestimonials testimonials={testimonials} autoRotateInterval={7000} />
      </div>
    </section>
  );
}
