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
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];
