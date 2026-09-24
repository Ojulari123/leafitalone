// Business details used across the site (header, footer, schema, forms).
// Keep NAP (name, area, phone) identical to the Google Business Profile.
export const site = {
  name: 'Leaf It Alone',
  legalName: 'Leaf It Alone Landscaping',
  tagline: 'Lawn care & landscaping in Guelph',
  owner: 'Josh',
  phone: '519-400-0237',
  phoneHref: 'tel:+15194000237',
  email: 'Josh@leafitalone.ca',
  city: 'Guelph',
  region: 'ON',
  url: 'https://www.leafitalone.ca',
  // TODO: paste the "Ask for reviews" link from Google Business Profile.
  googleReviewUrl: 'https://www.google.com/search?q=Leaf+It+Alone+Landscaping+Guelph',
  // Fill in when confirmed with Josh. Leave empty to hide.
  hours: '',
  // From the Google Business Profile via a directory listing (Sept 2026).
  // TODO: confirm the live numbers on Google before launch.
  rating: { score: '5.0', count: 29 },
  social: {
    facebook: 'https://www.facebook.com/Josh.Leafitalone/',
    instagram: '',
  },
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Reviews', href: '/testimonials' },
  { label: 'About', href: '/about' },
  { label: 'Service areas', href: '/service-areas' },
  { label: 'Blog', href: '/blog' },
];
