// Reviews currently published on leafitalone.ca.
// TODO: add 6 to 8 recent Google reviews (first name, service, neighbourhood).
export interface Review { name: string; text: string; service?: string; source: string }

export const reviews: Review[] = [
  {
    name: 'Lorna',
    text: 'Thank you Josh for the spring yard cleanup you did for us. Price was very reasonable, work was excellent, would recommend your services to anyone.',
    service: 'Spring cleanup',
    source: 'Customer review',
  },
  {
    name: 'Sharon C.',
    text: 'Thank you Josh, my yard looks so nice. You do a great job!',
    service: 'Yard maintenance',
    source: 'Customer review',
  },
];
