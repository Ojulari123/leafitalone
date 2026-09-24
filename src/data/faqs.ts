import type { Faq } from './services';

export const generalFaqs: { topic: string; items: Faq[] }[] = [
  {
    topic: 'Quotes & pricing',
    items: [
      { q: 'Are your quotes free?', a: 'Yes. Every estimate is free and there is no obligation to book.' },
      { q: 'How much does lawn mowing cost?', a: 'Residential mowing starts at $55 per visit. Price depends on lot size, terrain, grass height and how often we visit.' },
      { q: 'Can I get a price without a visit?', a: 'Often, yes. Send your address and a few photos with your quote request and we can price most jobs from that. Larger projects may need a quick look in person.' },
      { q: 'How do I pay?', a: 'Payment details are included with your quote. Ask Josh if you have a preferred method.' },
    ],
  },
  {
    topic: 'Scheduling',
    items: [
      { q: 'What happens if it rains?', a: 'We keep you informed if weather affects your service and rebook you as soon as conditions allow.' },
      { q: 'Do I need to be home?', a: 'Not for most outdoor work. Just make sure gates are unlocked and pets are inside on service day.' },
      { q: 'How far ahead should I book?', a: 'Spring and fall cleanups fill up first. Book a few weeks ahead for those, or as early as March for spring.' },
    ],
  },
  {
    topic: 'Our work',
    items: [
      { q: 'Where do you work?', a: 'All of Guelph and the surrounding area. If you are just outside the city, ask and we will let you know.' },
      { q: 'What equipment do you use?', a: 'Commercial-grade mowers, trimmers and blowers, plus a sod cutter and rototiller for lawn and bed projects.' },
      { q: 'Do you take away yard waste?', a: 'Yes. Leaves, branches, clippings and old sod are removed as part of the job.' },
      { q: 'How big a tree can you remove?', a: 'Trees up to about 15 feet tall. For anything larger we will tell you upfront and point you to an arborist.' },
    ],
  },
];
