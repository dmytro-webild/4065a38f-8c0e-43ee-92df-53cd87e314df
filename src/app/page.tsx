"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Menu", id: "menu" },
        { name: "Reviews", id: "testimonials" },
        { name: "Contact", id: "contact" }
      ]}
      brandName="Tacos los panchos"
      button={{ text: "Order Now", href: "#menu" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Authentic Tacos in California City"
      description="Experience the true flavors of Mexico at Tacos los panchos. Fresh, local, and authentic."
      buttons={[
        { text: "View Menu", href: "#menu" },
        { text: "Contact Us", href: "#contact" }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-tasty-mexican-food-ready-be-served_23-2148614398.jpg"
      showBlur={true}
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/adults-enjoying-mexican-food_23-2149663853.jpg", alt: "Happy customer 1" },
        { src: "http://img.b2bpic.net/free-photo/adults-enjoying-mexican-food_23-2149663832.jpg", alt: "Happy customer 2" },
        { src: "http://img.b2bpic.net/free-photo/adults-enjoying-mexican-food_23-2149663830.jpg", alt: "Happy customer 3" },
        { src: "http://img.b2bpic.net/free-photo/adults-enjoying-mexican-food_23-2149663870.jpg", alt: "Happy customer 4" },
        { src: "http://img.b2bpic.net/free-photo/high-angle-friends-having-lunch-restaurant_23-2150491780.jpg", alt: "Happy customer 5" }
      ]}
      avatarText="Loved by 500+ happy customers"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="About Tacos los panchos"
      description="Located at 8016 California City Blvd, we bring authentic Mexican flavors to California City. Our commitment to fresh ingredients and traditional recipes has earned us a 5-star reputation in the community."
      imageSrc="http://img.b2bpic.net/free-photo/business-partners-with-frame-coffee-shop_23-2148366532.jpg"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Carne Asada Tacos", price: "$3.50", variant: "Authentic", imageSrc: "http://img.b2bpic.net/free-photo/top-view-tacos-wooden-background_23-2148629309.jpg" },
        { id: "2", name: "Al Pastor Tacos", price: "$3.50", variant: "Authentic", imageSrc: "http://img.b2bpic.net/free-photo/delicious-traditional-tacos-arrangement_23-2150799583.jpg" },
        { id: "3", name: "Fresh Guacamole", price: "$6.00", variant: "Fresh", imageSrc: "http://img.b2bpic.net/free-photo/mexican-hat-wrapped-tacos-tasty-nachos-salsa-sauce-guacamole-black-slate-red-chilies-table_23-2148042473.jpg" },
        { id: "4", name: "Traditional Horchata", price: "$3.00", variant: "Refreshing", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-mexican-party-decoration-with-food_23-2149317344.jpg" },
        { id: "5", name: "Burrito Supremo", price: "$9.50", variant: "Hearty", imageSrc: "http://img.b2bpic.net/free-photo/mexican-food-concept-flat-lay_23-2148629374.jpg" },
        { id: "6", name: "House Made Salsas", price: "$2.00", variant: "Spicy", imageSrc: "http://img.b2bpic.net/free-photo/horizontal-view-potato-chips-spices-mayonnaise-with-ketchup-gray-table_140725-86848.jpg" }
      ]}
      title="Popular Menu Items"
      description="Taste the variety of our fresh, handcrafted Mexican dishes."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        { tag: "Fresh", title: "Farm Fresh Ingredients", subtitle: "Quality First", description: "We source the freshest local produce and meats for our daily specials.", imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-with-mixed-ingredients-wooden-board_114579-56834.jpg" },
        { tag: "Authentic", title: "Traditional Recipes", subtitle: "Made with Love", description: "Our recipes are passed down through generations for an authentic taste.", imageSrc: "http://img.b2bpic.net/free-photo/mexican-ingredients_23-2148159743.jpg" },
        { tag: "Service", title: "Warm Welcoming", subtitle: "Best Service", description: "We treat every guest like part of the Tacos los panchos family.", imageSrc: "http://img.b2bpic.net/free-photo/young-happy-waiter-standing-cafe-s-front-door-waving-someone_637285-6578.jpg" }
      ]}
      title="Why Choose Us"
      description="We take pride in every bite, focusing on quality and authentic techniques."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Alex R.", date: "Jan 2024", title: "Excellent!", quote: "Hands down the best tacos in town. Super friendly service and the food is so fresh.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/adults-enjoying-mexican-food_23-2149663836.jpg", imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-mexican-food-ready-be-served_23-2148614398.jpg", imageAlt: "happy customer eating tacos" },
        { id: "2", name: "Maria S.", date: "Dec 2023", title: "Authentic Flavors", quote: "I love the al pastor! Reminds me of home. Truly an authentic experience.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-eating-delicious-food_23-2150168094.jpg", imageSrc: "http://img.b2bpic.net/free-photo/business-partners-with-frame-coffee-shop_23-2148366532.jpg", imageAlt: "happy customer eating tacos" },
        { id: "3", name: "John D.", date: "Nov 2023", title: "Great Spot", quote: "Fast service, reasonable prices, and the best guacamole I've had in a long time.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/male-woman-having-good-time_23-2148395388.jpg", imageSrc: "http://img.b2bpic.net/free-photo/top-view-tacos-wooden-background_23-2148629309.jpg", imageAlt: "happy customer eating tacos" },
        { id: "4", name: "Sarah P.", date: "Oct 2023", title: "Highly Recommend", quote: "Clean, welcoming, and the menu selection is perfect. Will be back!", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/portrait-female-blogger-listens-audio-song-modern-headphones-uses-smart-phone-installing-new-application-uses-free-internet-while-rectreats-coffee-shop-with-tasty-smoothie-cocktail_273609-2466.jpg", imageSrc: "http://img.b2bpic.net/free-photo/delicious-traditional-tacos-arrangement_23-2150799583.jpg", imageAlt: "happy customer eating tacos" },
        { id: "5", name: "Mike B.", date: "Sep 2023", title: "Five Stars!", quote: "Simply wonderful. Everything tastes freshly made and the flavors are spot on.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-taking-selfie_23-2149250086.jpg", imageSrc: "http://img.b2bpic.net/free-photo/mexican-hat-wrapped-tacos-tasty-nachos-salsa-sauce-guacamole-black-slate-red-chilies-table_23-2148042473.jpg", imageAlt: "happy customer eating tacos" }
      ]}
      title="What Our Guests Say"
      description="Don't just take our word for it. Our 5-star rating speaks for itself."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "1", title: "What are your operating hours?", content: "We are open daily for lunch and dinner to serve you fresh tacos." },
        { id: "2", title: "Do you offer catering?", content: "Yes, contact us to discuss catering for your upcoming events." },
        { id: "3", title: "Are you pet friendly?", content: "Our patio is pet friendly for our furry dining companions." }
      ]}
      title="Frequently Asked Questions"
      description="Have questions? We've got answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      text="Visit us at 8016 California City Blvd, California City. Call us for reservations or order pickup."
      buttons={[
        { text: "Directions", href: "https://maps.google.com" },
        { text: "Call Now", href: "tel:5550199" }
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Restaurant", items: [{ label: "About", href: "#about" }, { label: "Menu", href: "#menu" }, { label: "Contact", href: "#contact" }] },
        { title: "Social", items: [{ label: "Facebook", href: "#" }, { label: "Instagram", href: "#" }, { label: "Google Reviews", href: "#" }] },
        { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
      ]}
      logoText="Tacos los panchos"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}