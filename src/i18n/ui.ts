// Every user-facing string that differs by language lives here, so a reviewer
// can read the whole Kannada surface in one file instead of hunting through
// 29 .astro files.
//
// Phase 1 covers the shell only — header, footer, and the buttons inside them.
// Page body copy for /, /about, /membership and /contact lands in Phase 2.
//
// ⚠ The Kannada below is a Claude draft and has NOT been reviewed by a native
// speaker. Strings flagged with REVIEW are ones where the register or the
// trade term is genuinely uncertain — see docs/superpowers/specs for context.

export const languages = {
  en: "English",
  kn: "ಕನ್ನಡ",
} as const;

export const defaultLang = "en" as const;

export type Locale = keyof typeof languages;

export const ui = {
  en: {
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.events": "Events",
    "nav.blog": "Blog",
    "nav.press": "Press",
    "nav.membership": "Membership",
    "nav.board": "Board of Directors",
    "nav.founders": "Founders Committee",
    "nav.aboutLegacy": "About & Legacy",
    "nav.eventsWorkshops": "Events & Workshops",
    "nav.pressMedia": "In the Media",

    "cta.join": "Join",
    "cta.becomeMember": "Become a Member",

    "a11y.home": "MDPVA home",
    "a11y.openMenu": "Open menu",
    "a11y.closeMenu": "Close menu",
    "a11y.mobileNav": "Mobile navigation",
    "a11y.language": "Choose language",
    "a11y.facebook": "MDPVA on Facebook",
    "a11y.instagram": "MDPVA on Instagram",
    "a11y.backToTop": "Back to top",

    "footer.tagline":
      "Mysuru District Photographers and Videographers Association ®. Representing the district's professional image-makers since 2001.",
    "footer.quickLinks": "Quick links",
    "footer.contact": "Contact",
    "footer.joinHeading": "Join the association",
    "footer.joinBody":
      "Working photographer or videographer in Mysuru district? Get certified, listed, and connected.",
    "footer.address":
      "#224, Narayana Shastri Road,<br />next to Mahalakshmi Temple,<br />K.R. Mohalla, Mysuru – 570024",
    "footer.copyright":
      "© 2026 Mysuru District Photographers and Videographers Association ®",
    "footer.developedBy": "Developed by",
    "footer.language": "Language",

    // ---- Homepage ------------------------------------------------------
    "home.mission.eyebrow": "About the Association",
    "home.mission.heading":
      "A guild of working professionals, rooted in the cultural capital of Karnataka.",
    "home.stats.members": "Active members",
    "home.stats.established": "Established",
    "home.stats.workshops": "Workshops a year",
    "home.stats.taluks": "Taluk chapters",

    "home.leadership.eyebrow": "Executive Committee",
    "home.leadership.heading": "Led by working professionals, elected by the members.",
    "home.leadership.body":
      "Every two years the general body elects the office bearers and directors who steer the association — its workshops, welfare fund, and district chapters.",

    "home.gallery.eyebrow": "Beyond the Lens",
    "home.gallery.heading": "The association at work",
    "gallery.filter.all": "All",
    "gallery.filter.helpingHands": "Helping Hands",
    "gallery.filter.hospitalCare": "Hospital Care",
    "gallery.filter.tributes": "Tributes",
    "gallery.filter.workshops": "Workshops",

    "home.note.eyebrow": "A Note From Leadership",

    "home.events.heading": "Upcoming Events",
    "home.events.subheading": "On the calendar",
    "home.events.all": "All events →",
    "home.events.empty":
      "Nothing on the calendar right now — check back soon, or browse what the association has run before.",
    "home.events.past": "See past events →",
    "a11y.prevEvents": "Scroll to previous events",
    "a11y.nextEvents": "Scroll to next events",

    "home.sponsors.heading": "Our Sponsors & Partners",
    "sponsors.platinum": "Platinum",
    "sponsors.gold": "Gold",
    "sponsors.silver": "Silver",

    "home.press.eyebrow": "In the Media",
    "home.press.heading": "MDPVA in the news",
    "home.press.all": "All press coverage →",

    "home.testimonials.eyebrow": "Member Voices",
    "home.testimonials.heading": "What our members say",

    // ---- Membership benefits (homepage + /membership) -------------------
    "benefits.eyebrow": "Membership Benefits",
    "benefits.heading": "What 1,550 professionals get from standing together.",
    "benefits.1.title": "Certification",
    "benefits.1.body":
      "Association-issued professional ID and skill certification recognised by venues, government bodies, and clients across the district.",
    "benefits.2.title": "Recognition & Network",
    "benefits.2.body":
      "A verified place in the district's professional community — referrals, second-shooter calls, and standing with venues and authorities.",
    "benefits.3.title": "Events & Workshops",
    "benefits.3.body":
      "Masterclasses, equipment demos, photo walks, and the annual district salon — free or discounted for members.",
    "benefits.4.title": "Job Board",
    "benefits.4.body":
      "Members-only access to assignment leads — weddings, events, commercial shoots, and second-shooter calls.",
    "benefits.cta": "How to join",

    // ---- /membership -----------------------------------------------------
    "membership.meta.title": "Membership",
    "membership.meta.description":
      "Join the Mysuru District Photographers and Videographers Association ® — what membership includes, who can join, and how to apply.",
    "membership.hero.eyebrow": "Membership",
    "membership.hero.title": "Stand with the district's professionals",
    "membership.hero.description":
      "Certification, workshops, referrals, and a professional community behind you — recognised across Mysuru district since 2001.",
    "membership.includes.eyebrow": "What membership includes",
    "membership.includes.heading": "Everything the association puts behind its members.",
    "membership.includes.1": "MDPVA professional ID and certification",
    "membership.includes.2": "All workshops, photo walks, and the district salon",
    "membership.includes.3": "Members-only job board and second-shooter calls",
    "membership.includes.4": "Priority for official coverage pools (Dasara & district events)",
    "membership.includes.5": "Dispute support with venues and authorities",
    "membership.includes.6": "Voting rights at the AGM",
    "membership.apply.heading": "Become a member",
    "membership.apply.body":
      "Applications are verified by the executive committee. Visit the association office with two photographs, ID proof, and proof of professional work.",
    "membership.apply.cta": "Apply now",
    "membership.apply.or": "or write to",
    "membership.apply.fees": "Membership fees are confirmed by the association office.",
    "membership.who.title": "Who can join",
    "membership.who.body":
      "Working photographers and videographers based in Mysuru district — studios, freelancers, cinematographers, and drone operators. Students and apprentices are welcome too.",
    "membership.covers.title": "What membership covers",
    "membership.covers.body":
      "Association ID and certification, all workshops and photo walks, the members-only job board, dispute support with venues and authorities, and voting rights at the AGM.",

    // ---- /contact --------------------------------------------------------
    "contact.meta.title": "Contact",
    "contact.meta.description":
      "Contact the Mysuru District Photographers and Videographers Association ® — registered office at #224, Narayana Shastri Road, K.R. Mohalla, Mysuru.",
    "contact.hero.eyebrow": "Contact",
    "contact.hero.title": "Get in touch",
    "contact.hero.description":
      "Membership applications, event enquiries, and press — write to us or visit the association office.",
    "contact.office.heading": "Registered office",
    "contact.write.heading": "Write or call",

    // ---- /about ----------------------------------------------------------
    "about.meta.title": "About",
    "about.meta.description":
      "The legacy of the Mysuru District Photographers and Videographers Association ® — a registered professional body uniting the district's photographers and videographers since 2001.",
    "about.hero.eyebrow": "About the Association · Since 2001",
    "about.hero.title": "A quarter-century behind the lens of Mysuru district",
    "about.legacy.heading": "Our Legacy",
    "about.founders.eyebrow": "Since 2001",
    "about.founders.cta": "Meet the founders committee →",
    "about.office.heading": "Registered Office",
    "about.office.note": "A registered association under the Karnataka Societies Registration Act.",
    "about.leadership.heading": "Leadership",
    "about.leadership.term": "The 2025–27 executive committee",
    "about.board.cta": "Meet the full board →",
    "about.m1.title": "The association is founded",
    "about.m1.body":
      "A group of Mysuru's studio photographers and wedding videographers register the association, giving the district's image-makers a single professional voice.",
    "about.m2.title": "First district photography salon",
    "about.m2.body":
      "The first juried exhibition of member work opens at Jaganmohan Palace Art Gallery — now an annual fixture of the city's cultural calendar.",
    "about.m3.title": "Official Dasara coverage",
    "about.m3.body":
      "MDPVA members are engaged for official coverage of the Mysuru Dasara festivities — a recognition the association has held ever since.",
    "about.m4.title": "Training & certification wing",
    "about.m4.body":
      "The association formalises its workshop programme: masterclasses, drone compliance training, and a certification recognised across the district.",
    "about.m5.title": "186th World Photography Day & new committee",
    "about.m5.body":
      "The association celebrates World Photography Day at the Institution of Engineers and swears in the 2025–27 executive committee.",
  },

  kn: {
    "nav.about": "ನಮ್ಮ ಬಗ್ಗೆ",
    "nav.gallery": "ಗ್ಯಾಲರಿ",
    "nav.events": "ಕಾರ್ಯಕ್ರಮಗಳು",
    "nav.blog": "ಬ್ಲಾಗ್",
    "nav.press": "ಮಾಧ್ಯಮ",
    "nav.membership": "ಸದಸ್ಯತ್ವ",
    "nav.board": "ಆಡಳಿತ ಮಂಡಳಿ",
    "nav.founders": "ಸಂಸ್ಥಾಪಕರ ಸಮಿತಿ", // REVIEW — "Founders Committee"
    "nav.aboutLegacy": "ನಮ್ಮ ಬಗ್ಗೆ ಮತ್ತು ಪರಂಪರೆ",
    "nav.eventsWorkshops": "ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಕಾರ್ಯಾಗಾರಗಳು",
    "nav.pressMedia": "ಮಾಧ್ಯಮದಲ್ಲಿ",

    "cta.join": "ಸೇರಿ",
    "cta.becomeMember": "ಸದಸ್ಯರಾಗಿ",

    "a11y.home": "ಎಂಡಿಪಿವಿಎ ಮುಖಪುಟ",
    "a11y.openMenu": "ಮೆನು ತೆರೆಯಿರಿ",
    "a11y.closeMenu": "ಮೆನು ಮುಚ್ಚಿ",
    "a11y.mobileNav": "ಮೊಬೈಲ್ ನ್ಯಾವಿಗೇಷನ್",
    "a11y.language": "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
    "a11y.facebook": "ಫೇಸ್‌ಬುಕ್‌ನಲ್ಲಿ ಎಂಡಿಪಿವಿಎ",
    "a11y.instagram": "ಇನ್‌ಸ್ಟಾಗ್ರಾಂನಲ್ಲಿ ಎಂಡಿಪಿವಿಎ",
    "a11y.backToTop": "ಮೇಲಕ್ಕೆ ಹೋಗಿ",

    // REVIEW — long-form; register matters more than literal accuracy here
    "footer.tagline":
      "ಮೈಸೂರು ಜಿಲ್ಲಾ ಛಾಯಾಗ್ರಾಹಕರ ಮತ್ತು ವೀಡಿಯೊಗ್ರಾಹಕರ ಸಂಘ ®. ೨೦೦೧ರಿಂದ ಜಿಲ್ಲೆಯ ವೃತ್ತಿಪರ ಚಿತ್ರಕಾರರನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತಿದೆ.",
    "footer.quickLinks": "ತ್ವರಿತ ಕೊಂಡಿಗಳು",
    "footer.contact": "ಸಂಪರ್ಕ",
    "footer.joinHeading": "ಸಂಘಕ್ಕೆ ಸೇರಿ",
    // REVIEW — "second-shooter"/"listed" have no settled Kannada trade term
    "footer.joinBody":
      "ಮೈಸೂರು ಜಿಲ್ಲೆಯಲ್ಲಿ ವೃತ್ತಿಪರ ಛಾಯಾಗ್ರಾಹಕರೇ ಅಥವಾ ವೀಡಿಯೊಗ್ರಾಹಕರೇ? ಪ್ರಮಾಣೀಕರಣ ಪಡೆಯಿರಿ, ಪಟ್ಟಿಯಲ್ಲಿ ಸೇರಿ, ಸಂಪರ್ಕದಲ್ಲಿರಿ.",
    "footer.address":
      "#೨೨೪, ನಾರಾಯಣ ಶಾಸ್ತ್ರಿ ರಸ್ತೆ,<br />ಮಹಾಲಕ್ಷ್ಮಿ ದೇವಸ್ಥಾನದ ಪಕ್ಕ,<br />ಕೆ.ಆರ್. ಮೊಹಲ್ಲಾ, ಮೈಸೂರು – ೫೭೦೦೨೪",
    "footer.copyright":
      "© ೨೦೨೬ ಮೈಸೂರು ಜಿಲ್ಲಾ ಛಾಯಾಗ್ರಾಹಕರ ಮತ್ತು ವೀಡಿಯೊಗ್ರಾಹಕರ ಸಂಘ ®",
    "footer.developedBy": "ಅಭಿವೃದ್ಧಿಪಡಿಸಿದವರು",
    "footer.language": "ಭಾಷೆ",

    // ---- Homepage ------------------------------------------------------
    "home.mission.eyebrow": "ಸಂಘದ ಬಗ್ಗೆ",
    // REVIEW — "guild" has no clean Kannada equivalent; "ಸಂಘಟನೆ" used
    "home.mission.heading":
      "ಕರ್ನಾಟಕದ ಸಾಂಸ್ಕೃತಿಕ ರಾಜಧಾನಿಯಲ್ಲಿ ಬೇರೂರಿದ ವೃತ್ತಿಪರರ ಸಂಘಟನೆ.",
    "home.stats.members": "ಸಕ್ರಿಯ ಸದಸ್ಯರು",
    "home.stats.established": "ಸ್ಥಾಪನೆ",
    "home.stats.workshops": "ವರ್ಷಕ್ಕೆ ಕಾರ್ಯಾಗಾರಗಳು",
    "home.stats.taluks": "ತಾಲ್ಲೂಕು ಘಟಕಗಳು",

    "home.leadership.eyebrow": "ಕಾರ್ಯಕಾರಿ ಸಮಿತಿ",
    "home.leadership.heading": "ವೃತ್ತಿಪರರಿಂದ ಮುನ್ನಡೆ, ಸದಸ್ಯರಿಂದ ಆಯ್ಕೆ.",
    // REVIEW — "welfare fund", "district chapters"
    "home.leadership.body":
      "ಪ್ರತಿ ಎರಡು ವರ್ಷಗಳಿಗೊಮ್ಮೆ ಸಾಮಾನ್ಯ ಸಭೆಯು ಪದಾಧಿಕಾರಿಗಳನ್ನು ಮತ್ತು ನಿರ್ದೇಶಕರನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತದೆ — ಅವರು ಸಂಘದ ಕಾರ್ಯಾಗಾರಗಳು, ಕಲ್ಯಾಣ ನಿಧಿ ಮತ್ತು ಜಿಲ್ಲಾ ಘಟಕಗಳನ್ನು ಮುನ್ನಡೆಸುತ್ತಾರೆ.",

    // REVIEW — "Beyond the Lens" is idiomatic; this is a literal rendering
    "home.gallery.eyebrow": "ಮಸೂರದ ಆಚೆಗೆ",
    "home.gallery.heading": "ಕಾರ್ಯನಿರತ ಸಂಘ",
    "gallery.filter.all": "ಎಲ್ಲಾ",
    "gallery.filter.helpingHands": "ಸಹಾಯಹಸ್ತ",
    "gallery.filter.hospitalCare": "ಆಸ್ಪತ್ರೆ ಸೇವೆ",
    "gallery.filter.tributes": "ನಮನ",
    "gallery.filter.workshops": "ಕಾರ್ಯಾಗಾರಗಳು",

    "home.note.eyebrow": "ನಾಯಕತ್ವದಿಂದ ಒಂದು ಮಾತು",

    "home.events.heading": "ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು",
    "home.events.subheading": "ಕ್ಯಾಲೆಂಡರ್‌ನಲ್ಲಿ",
    "home.events.all": "ಎಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳು →",
    "home.events.empty":
      "ಸದ್ಯಕ್ಕೆ ಯಾವುದೇ ಕಾರ್ಯಕ್ರಮವಿಲ್ಲ — ಶೀಘ್ರದಲ್ಲೇ ಮತ್ತೆ ನೋಡಿ, ಅಥವಾ ಸಂಘ ಈವರೆಗೆ ನಡೆಸಿದ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
    "home.events.past": "ಹಿಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳು →",
    "a11y.prevEvents": "ಹಿಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಸರಿಸಿ",
    "a11y.nextEvents": "ಮುಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಸರಿಸಿ",

    "home.sponsors.heading": "ನಮ್ಮ ಪ್ರಾಯೋಜಕರು ಮತ್ತು ಪಾಲುದಾರರು",
    "sponsors.platinum": "ಪ್ಲಾಟಿನಂ",
    "sponsors.gold": "ಚಿನ್ನ",
    "sponsors.silver": "ಬೆಳ್ಳಿ",

    "home.press.eyebrow": "ಮಾಧ್ಯಮದಲ್ಲಿ",
    "home.press.heading": "ಸುದ್ದಿಯಲ್ಲಿ ಎಂಡಿಪಿವಿಎ",
    "home.press.all": "ಎಲ್ಲಾ ಮಾಧ್ಯಮ ವರದಿಗಳು →",

    "home.testimonials.eyebrow": "ಸದಸ್ಯರ ಧ್ವನಿ",
    "home.testimonials.heading": "ನಮ್ಮ ಸದಸ್ಯರು ಏನು ಹೇಳುತ್ತಾರೆ",

    // ---- Membership benefits (homepage + /membership) -------------------
    "benefits.eyebrow": "ಸದಸ್ಯತ್ವದ ಪ್ರಯೋಜನಗಳು",
    "benefits.heading": "೧,೫೫೦ ವೃತ್ತಿಪರರು ಒಟ್ಟಾಗಿ ನಿಂತು ಪಡೆಯುವುದೇನು.",
    "benefits.1.title": "ಪ್ರಮಾಣೀಕರಣ",
    "benefits.1.body":
      "ಸಂಘದಿಂದ ನೀಡಲಾದ ವೃತ್ತಿಪರ ಗುರುತಿನ ಚೀಟಿ ಮತ್ತು ಕೌಶಲ ಪ್ರಮಾಣೀಕರಣ — ಜಿಲ್ಲೆಯಾದ್ಯಂತ ಸಭಾಂಗಣಗಳು, ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಗ್ರಾಹಕರಿಂದ ಮಾನ್ಯತೆ ಪಡೆದಿದೆ.",
    "benefits.2.title": "ಮಾನ್ಯತೆ ಮತ್ತು ಸಂಪರ್ಕಜಾಲ",
    // REVIEW — "second-shooter" has no settled Kannada trade term
    "benefits.2.body":
      "ಜಿಲ್ಲೆಯ ವೃತ್ತಿಪರ ಸಮುದಾಯದಲ್ಲಿ ದೃಢಪಡಿಸಿದ ಸ್ಥಾನ — ಶಿಫಾರಸುಗಳು, ಸಹಾಯಕ ಛಾಯಾಗ್ರಾಹಕ ಅವಕಾಶಗಳು, ಮತ್ತು ಸಭಾಂಗಣಗಳು ಹಾಗೂ ಅಧಿಕಾರಿಗಳ ಬಳಿ ಗೌರವ.",
    "benefits.3.title": "ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಕಾರ್ಯಾಗಾರಗಳು",
    // REVIEW — "photo walk", "district salon" are trade terms
    "benefits.3.body":
      "ಮಾಸ್ಟರ್‌ಕ್ಲಾಸ್‌ಗಳು, ಸಲಕರಣೆ ಪ್ರಾತ್ಯಕ್ಷಿಕೆಗಳು, ಛಾಯಾಚಿತ್ರ ನಡಿಗೆಗಳು ಮತ್ತು ವಾರ್ಷಿಕ ಜಿಲ್ಲಾ ಪ್ರದರ್ಶನ — ಸದಸ್ಯರಿಗೆ ಉಚಿತ ಅಥವಾ ರಿಯಾಯಿತಿ ದರದಲ್ಲಿ.",
    "benefits.4.title": "ಉದ್ಯೋಗ ಫಲಕ",
    "benefits.4.body":
      "ಸದಸ್ಯರಿಗೆ ಮಾತ್ರ ಸಿಗುವ ಕೆಲಸದ ಮಾಹಿತಿ — ಮದುವೆಗಳು, ಸಮಾರಂಭಗಳು, ವಾಣಿಜ್ಯ ಚಿತ್ರೀಕರಣ ಮತ್ತು ಸಹಾಯಕ ಛಾಯಾಗ್ರಾಹಕ ಅವಕಾಶಗಳು.",
    "benefits.cta": "ಸೇರುವುದು ಹೇಗೆ",

    // ---- /membership -----------------------------------------------------
    "membership.meta.title": "ಸದಸ್ಯತ್ವ",
    "membership.meta.description":
      "ಮೈಸೂರು ಜಿಲ್ಲಾ ಛಾಯಾಗ್ರಾಹಕರ ಮತ್ತು ವೀಡಿಯೊಗ್ರಾಹಕರ ಸಂಘಕ್ಕೆ ಸೇರಿ — ಸದಸ್ಯತ್ವದಲ್ಲಿ ಏನಿದೆ, ಯಾರು ಸೇರಬಹುದು, ಮತ್ತು ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು ಹೇಗೆ.",
    "membership.hero.eyebrow": "ಸದಸ್ಯತ್ವ",
    "membership.hero.title": "ಜಿಲ್ಲೆಯ ವೃತ್ತಿಪರರ ಬೆಂಬಲಕ್ಕೆ ನಿಲ್ಲಿ",
    "membership.hero.description":
      "ಪ್ರಮಾಣೀಕರಣ, ಕಾರ್ಯಾಗಾರಗಳು, ಶಿಫಾರಸುಗಳು ಮತ್ತು ವೃತ್ತಿಪರ ಸಮುದಾಯದ ಬೆಂಬಲ — ೨೦೦೧ರಿಂದ ಮೈಸೂರು ಜಿಲ್ಲೆಯಾದ್ಯಂತ ಮಾನ್ಯತೆ ಪಡೆದಿದೆ.",
    "membership.includes.eyebrow": "ಸದಸ್ಯತ್ವದಲ್ಲಿ ಏನೆಲ್ಲ ಸೇರಿದೆ",
    "membership.includes.heading": "ಸಂಘವು ತನ್ನ ಸದಸ್ಯರ ಬೆನ್ನಿಗೆ ನಿಲ್ಲುವ ಎಲ್ಲವೂ.",
    "membership.includes.1": "ಎಂಡಿಪಿವಿಎ ವೃತ್ತಿಪರ ಗುರುತಿನ ಚೀಟಿ ಮತ್ತು ಪ್ರಮಾಣೀಕರಣ",
    "membership.includes.2": "ಎಲ್ಲಾ ಕಾರ್ಯಾಗಾರಗಳು, ಛಾಯಾಚಿತ್ರ ನಡಿಗೆಗಳು ಮತ್ತು ಜಿಲ್ಲಾ ಪ್ರದರ್ಶನ",
    "membership.includes.3": "ಸದಸ್ಯರಿಗೆ ಮಾತ್ರ ಉದ್ಯೋಗ ಫಲಕ ಮತ್ತು ಸಹಾಯಕ ಛಾಯಾಗ್ರಾಹಕ ಅವಕಾಶಗಳು",
    "membership.includes.4": "ಅಧಿಕೃತ ಚಿತ್ರೀಕರಣ ತಂಡಗಳಿಗೆ ಆದ್ಯತೆ (ದಸರಾ ಮತ್ತು ಜಿಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳು)",
    "membership.includes.5": "ಸಭಾಂಗಣಗಳು ಮತ್ತು ಅಧಿಕಾರಿಗಳೊಂದಿಗಿನ ವಿವಾದಗಳಲ್ಲಿ ಬೆಂಬಲ",
    "membership.includes.6": "ವಾರ್ಷಿಕ ಮಹಾಸಭೆಯಲ್ಲಿ ಮತದಾನದ ಹಕ್ಕು",
    "membership.apply.heading": "ಸದಸ್ಯರಾಗಿ",
    "membership.apply.body":
      "ಅರ್ಜಿಗಳನ್ನು ಕಾರ್ಯಕಾರಿ ಸಮಿತಿ ಪರಿಶೀಲಿಸುತ್ತದೆ. ಎರಡು ಭಾವಚಿತ್ರಗಳು, ಗುರುತಿನ ದಾಖಲೆ ಮತ್ತು ವೃತ್ತಿಪರ ಕೆಲಸದ ಪುರಾವೆಯೊಂದಿಗೆ ಸಂಘದ ಕಚೇರಿಗೆ ಭೇಟಿ ನೀಡಿ.",
    "membership.apply.cta": "ಈಗಲೇ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
    "membership.apply.or": "ಅಥವಾ ಬರೆಯಿರಿ",
    "membership.apply.fees": "ಸದಸ್ಯತ್ವ ಶುಲ್ಕವನ್ನು ಸಂಘದ ಕಚೇರಿ ದೃಢಪಡಿಸುತ್ತದೆ.",
    "membership.who.title": "ಯಾರು ಸೇರಬಹುದು",
    "membership.who.body":
      "ಮೈಸೂರು ಜಿಲ್ಲೆಯಲ್ಲಿ ಕಾರ್ಯನಿರತ ಛಾಯಾಗ್ರಾಹಕರು ಮತ್ತು ವೀಡಿಯೊಗ್ರಾಹಕರು — ಸ್ಟುಡಿಯೊಗಳು, ಸ್ವತಂತ್ರ ವೃತ್ತಿಪರರು, ಛಾಯಾಗ್ರಹಣ ನಿರ್ದೇಶಕರು ಮತ್ತು ಡ್ರೋನ್ ಚಾಲಕರು. ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ತರಬೇತಿ ಪಡೆಯುತ್ತಿರುವವರಿಗೂ ಸ್ವಾಗತ.",
    "membership.covers.title": "ಸದಸ್ಯತ್ವ ಏನನ್ನು ಒಳಗೊಂಡಿದೆ",
    "membership.covers.body":
      "ಸಂಘದ ಗುರುತಿನ ಚೀಟಿ ಮತ್ತು ಪ್ರಮಾಣೀಕರಣ, ಎಲ್ಲಾ ಕಾರ್ಯಾಗಾರಗಳು ಮತ್ತು ಛಾಯಾಚಿತ್ರ ನಡಿಗೆಗಳು, ಸದಸ್ಯರಿಗೆ ಮಾತ್ರ ಉದ್ಯೋಗ ಫಲಕ, ಸಭಾಂಗಣಗಳು ಮತ್ತು ಅಧಿಕಾರಿಗಳೊಂದಿಗಿನ ವಿವಾದಗಳಲ್ಲಿ ಬೆಂಬಲ, ಮತ್ತು ವಾರ್ಷಿಕ ಮಹಾಸಭೆಯಲ್ಲಿ ಮತದಾನದ ಹಕ್ಕು.",

    // ---- /contact --------------------------------------------------------
    "contact.meta.title": "ಸಂಪರ್ಕ",
    "contact.meta.description":
      "ಮೈಸೂರು ಜಿಲ್ಲಾ ಛಾಯಾಗ್ರಾಹಕರ ಮತ್ತು ವೀಡಿಯೊಗ್ರಾಹಕರ ಸಂಘವನ್ನು ಸಂಪರ್ಕಿಸಿ — ನೋಂದಾಯಿತ ಕಚೇರಿ: #೨೨೪, ನಾರಾಯಣ ಶಾಸ್ತ್ರಿ ರಸ್ತೆ, ಕೆ.ಆರ್. ಮೊಹಲ್ಲಾ, ಮೈಸೂರು.",
    "contact.hero.eyebrow": "ಸಂಪರ್ಕ",
    "contact.hero.title": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    "contact.hero.description":
      "ಸದಸ್ಯತ್ವ ಅರ್ಜಿಗಳು, ಕಾರ್ಯಕ್ರಮದ ವಿಚಾರಣೆಗಳು ಮತ್ತು ಮಾಧ್ಯಮ — ನಮಗೆ ಬರೆಯಿರಿ ಅಥವಾ ಸಂಘದ ಕಚೇರಿಗೆ ಭೇಟಿ ನೀಡಿ.",
    "contact.office.heading": "ನೋಂದಾಯಿತ ಕಚೇರಿ",
    "contact.write.heading": "ಬರೆಯಿರಿ ಅಥವಾ ಕರೆ ಮಾಡಿ",

    // ---- /about ----------------------------------------------------------
    "about.meta.title": "ನಮ್ಮ ಬಗ್ಗೆ",
    "about.meta.description":
      "ಮೈಸೂರು ಜಿಲ್ಲಾ ಛಾಯಾಗ್ರಾಹಕರ ಮತ್ತು ವೀಡಿಯೊಗ್ರಾಹಕರ ಸಂಘದ ಪರಂಪರೆ — ೨೦೦೧ರಿಂದ ಜಿಲ್ಲೆಯ ಛಾಯಾಗ್ರಾಹಕರನ್ನು ಮತ್ತು ವೀಡಿಯೊಗ್ರಾಹಕರನ್ನು ಒಂದುಗೂಡಿಸುತ್ತಿರುವ ನೋಂದಾಯಿತ ವೃತ್ತಿಪರ ಸಂಸ್ಥೆ.",
    "about.hero.eyebrow": "ಸಂಘದ ಬಗ್ಗೆ · ೨೦೦೧ರಿಂದ",
    // REVIEW — "behind the lens" is idiomatic English
    "about.hero.title": "ಮೈಸೂರು ಜಿಲ್ಲೆಯ ಕ್ಯಾಮೆರಾದ ಹಿಂದೆ ಕಾಲು ಶತಮಾನ",
    "about.legacy.heading": "ನಮ್ಮ ಪರಂಪರೆ",
    "about.founders.eyebrow": "೨೦೦೧ರಿಂದ",
    "about.founders.cta": "ಸಂಸ್ಥಾಪಕರ ಸಮಿತಿಯನ್ನು ಭೇಟಿಯಾಗಿ →",
    "about.office.heading": "ನೋಂದಾಯಿತ ಕಚೇರಿ",
    // REVIEW — statute name; confirm the official Kannada title of the Act
    "about.office.note": "ಕರ್ನಾಟಕ ಸಂಘ-ಸಂಸ್ಥೆಗಳ ನೋಂದಣಿ ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿತ ಸಂಘ.",
    "about.leadership.heading": "ನಾಯಕತ್ವ",
    "about.leadership.term": "೨೦೨೫–೨೭ರ ಕಾರ್ಯಕಾರಿ ಸಮಿತಿ",
    "about.board.cta": "ಪೂರ್ಣ ಮಂಡಳಿಯನ್ನು ಭೇಟಿಯಾಗಿ →",
    "about.m1.title": "ಸಂಘದ ಸ್ಥಾಪನೆ",
    "about.m1.body":
      "ಮೈಸೂರಿನ ಸ್ಟುಡಿಯೊ ಛಾಯಾಗ್ರಾಹಕರು ಮತ್ತು ಮದುವೆ ವೀಡಿಯೊಗ್ರಾಹಕರ ಗುಂಪೊಂದು ಸಂಘವನ್ನು ನೋಂದಾಯಿಸಿ, ಜಿಲ್ಲೆಯ ಚಿತ್ರಕಾರರಿಗೆ ಒಂದೇ ವೃತ್ತಿಪರ ಧ್ವನಿಯನ್ನು ನೀಡಿತು.",
    // REVIEW — "juried exhibition" / "salon" trade terms
    "about.m2.title": "ಮೊದಲ ಜಿಲ್ಲಾ ಛಾಯಾಚಿತ್ರ ಪ್ರದರ್ಶನ",
    "about.m2.body":
      "ಸದಸ್ಯರ ಕೃತಿಗಳ ಮೊದಲ ತೀರ್ಪುಗಾರ-ಆಯ್ಕೆಯ ಪ್ರದರ್ಶನವು ಜಗನ್ಮೋಹನ ಅರಮನೆ ಕಲಾ ಗ್ಯಾಲರಿಯಲ್ಲಿ ಆರಂಭವಾಯಿತು — ಈಗ ಇದು ನಗರದ ಸಾಂಸ್ಕೃತಿಕ ಪಂಚಾಂಗದ ವಾರ್ಷಿಕ ಭಾಗ.",
    "about.m3.title": "ಅಧಿಕೃತ ದಸರಾ ಚಿತ್ರೀಕರಣ",
    "about.m3.body":
      "ಮೈಸೂರು ದಸರಾ ಉತ್ಸವದ ಅಧಿಕೃತ ಚಿತ್ರೀಕರಣಕ್ಕೆ ಎಂಡಿಪಿವಿಎ ಸದಸ್ಯರನ್ನು ನಿಯೋಜಿಸಲಾಯಿತು — ಅಂದಿನಿಂದ ಸಂಘ ಈ ಮಾನ್ಯತೆಯನ್ನು ಉಳಿಸಿಕೊಂಡಿದೆ.",
    "about.m4.title": "ತರಬೇತಿ ಮತ್ತು ಪ್ರಮಾಣೀಕರಣ ವಿಭಾಗ",
    "about.m4.body":
      "ಸಂಘವು ತನ್ನ ಕಾರ್ಯಾಗಾರ ಕಾರ್ಯಕ್ರಮವನ್ನು ಔಪಚಾರಿಕಗೊಳಿಸಿತು: ಮಾಸ್ಟರ್‌ಕ್ಲಾಸ್‌ಗಳು, ಡ್ರೋನ್ ನಿಯಮಪಾಲನೆ ತರಬೇತಿ ಮತ್ತು ಜಿಲ್ಲೆಯಾದ್ಯಂತ ಮಾನ್ಯತೆ ಪಡೆದ ಪ್ರಮಾಣೀಕರಣ.",
    "about.m5.title": "೧೮೬ನೇ ವಿಶ್ವ ಛಾಯಾಗ್ರಹಣ ದಿನ ಮತ್ತು ಹೊಸ ಸಮಿತಿ",
    "about.m5.body":
      "ಸಂಘವು ಇನ್‌ಸ್ಟಿಟ್ಯೂಷನ್ ಆಫ್ ಇಂಜಿನಿಯರ್ಸ್‌ನಲ್ಲಿ ವಿಶ್ವ ಛಾಯಾಗ್ರಹಣ ದಿನವನ್ನು ಆಚರಿಸಿ, ೨೦೨೫–೨೭ರ ಕಾರ್ಯಕಾರಿ ಸಮಿತಿಯನ್ನು ಪ್ರಮಾಣವಚನ ಸ್ವೀಕರಿಸಿತು.",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];
