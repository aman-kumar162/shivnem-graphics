// Canonical services data for Shivnem Graphics
// Only services from the company PDF are listed here. Do not add or remove services.

export const SERVICES_DATA = [
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    image: '/servicesimages/graphicdesigning.png',
    shortDescription: 'Creative branding and visual assets for businesses.',
    description: 'Complete graphic design solutions including logos, stationery and marketing collateral that communicate your brand effectively.',
    subServices: [
      'Logo Designing',
      'Visiting Cards',
      'Letterheads',
      'Brochures',
      'Flyers',
      'Posters',
      'Banners',
      'Packaging Design',
      'Corporate Stationery'
    ],
    process: [
      { step: 1, title: 'Brief & Requirements', desc: 'Discuss goals, audience and deliverables.' },
      { step: 2, title: 'Concepts', desc: 'Create multiple design directions for review.' },
      { step: 3, title: 'Revisions', desc: 'Refine chosen concept based on feedback.' },
      { step: 4, title: 'Final Delivery', desc: 'Provide print-ready files and source assets.' }
    ]
  },
  
  {
    id: 'digital-printing',
    title: 'Digital Printing',
    image: '/servicesimages/digitalprinting.png',
    shortDescription: 'Fast, short-run printing for marketing and events.',
    description: 'On-demand digital printing for business cards, flyers, posters, stickers and certificates with quick turnarounds and accurate colour reproduction.',
    subServices: [
      'Visiting Cards',
      'Flyers',
      'Posters',
      'Stickers',
      'Certificates'
    ],
    process: [
      { step: 1, title: 'File Check', desc: 'Validate file formats, bleed and colour mode.' },
      { step: 2, title: 'Proofing', desc: 'Provide a digital or physical proof for approval.' },
      { step: 3, title: 'Printing', desc: 'Produce the job on digital presses.' },
      { step: 4, title: 'Quality & Dispatch', desc: 'Final QC, finishing and delivery.' }
    ]
  },
  {
    id: 'offset-printing',
    title: 'Offset Printing',
    image: '/servicesimages/offset-printing.png',
    shortDescription: 'High-volume printing with consistent colour fidelity.',
    description: 'Economical and high-quality offset printing ideal for books, registers, letterheads, forms and catalogues at larger quantities.',
    subServices: [
      'Books',
      'Registers',
      'Letterheads',
      'Forms',
      'Catalogues'
    ],
    process: [
      { step: 1, title: 'Prepress & Plate Making', desc: 'Prepare plates and colour separations.' },
      { step: 2, title: 'Printing', desc: 'Run the job on offset presses.' },
      { step: 3, title: 'Post-Press', desc: 'Cutting, binding and finishing.' },
      { step: 4, title: 'Inspection & Delivery', desc: 'Final inspection and shipment.' }
    ]
  },
  {
    id: 'web-software-designing',
    title: 'Digital Solutions: Web & Software',
    image: '/servicesimages/website-solution.png',
    shortDescription: 'Designing modern websites and software interfaces.',
    description: 'User-centred website and software interface design focused on usability, responsiveness and brand consistency.',
    subServices: [
      'Website Designing',
      'Software Interface Designing'
    ],
    process: [
      { step: 1, title: 'Discovery', desc: 'Understand requirements, users and flows.' },
      { step: 2, title: 'Wireframes', desc: 'Structure layouts and user journeys.' },
      { step: 3, title: 'Visual Design', desc: 'Create polished UI screens and assets.' },
      { step: 4, title: 'Handoff', desc: 'Provide design specs and assets for development.' }
    ]
  },
  {
    id: 'dtf-uv-transfer-stickers',
    title: 'DTF & UV Transfer Stickers',
    image: '/services-images/dtf-uv-transfer-stickers.svg',
    shortDescription: 'Direct-to-film and UV transfer sticker solutions.',
    description: 'Durable DTF and UV transfer stickers for apparel, products and packaging that offer vibrant colour and strong adhesion.',
    subServices: [
      'DTF Transfer Stickers',
      'UV Transfer Stickers'
    ],
    process: [
      { step: 1, title: 'Design Preparation', desc: 'Prepare artwork for transfer processes.' },
      { step: 2, title: 'Printing on Film', desc: 'Print designs on transfer films.' },
      { step: 3, title: 'Transfer & Finishing', desc: 'Apply transfers and perform finishing as required.' },
      { step: 4, title: 'Testing', desc: 'Adhesion and wash/durability checks.' }
    ]
  },
  {
    id: 'flex-printing',
    title: 'Flex Printing',
    image: '/services-images/flex-vinyl.png',
    shortDescription: 'Large-format printing for signs, hoardings and vinyls.',
    description: 'Weather-resistant flex and vinyl printing for banners, glow sign boards, hoardings and vehicle graphics with professional finishing.',
    subServices: [
      'Flex Printing',
      'Vinyl Printing',
      'Glow Sign Boards',
      'Hoardings'
    ],
    process: [
      { step: 1, title: 'File Preparation', desc: 'Prepare large-format files with correct resolution.' },
      { step: 2, title: 'Printing', desc: 'High-resolution roll-to-roll printing.' },
      { step: 3, title: 'Finishing', desc: 'Hem, grommet or lamination as needed.' },
      { step: 4, title: 'Installation (if required)', desc: 'Optional on-site installation support.' }
    ]
  },
  {
    id: 'eco-friendly-corn-sheet',
    title: 'Eco-Friendly Corn Sheet (Custom Size)',
    image: '/services-images/eco-friendly-corn-sheet.svg',
    shortDescription: 'Sustainable corn-based sheet printing in custom sizes.',
    description: 'Eco-friendly corn sheet printing offering biodegradable alternatives for packaging and displays, available in custom sizes.',
    subServices: [
      'Eco-friendly Sheet Printing',
      'Custom Size Printing'
    ],
    process: [
      { step: 1, title: 'Requirement Gathering', desc: 'Specify material, size and quantity.' },
      { step: 2, title: 'Sample & Approval', desc: 'Produce sample sheets for approval.' },
      { step: 3, title: 'Production', desc: 'Run approved jobs with eco-friendly inks.' },
      { step: 4, title: 'Delivery', desc: 'Pack and deliver sustainable products.' }
    ]
  },
  {
    id: 'screen-printing',
    title: 'Screen Printing',
    image: '/services-images/screen-printing.png',
    shortDescription: 'Durable screen printing for textiles and products.',
    description: 'Screen printing for t-shirts, cloth, carry bags and other substrates using industry-standard inks and curing processes for long-lasting results.',
    subServices: [
      'T-Shirt Printing',
      'Cloth Printing',
      'Carry Bag Printing'
    ],
    process: [
      { step: 1, title: 'Artwork & Screen Prep', desc: 'Convert artwork and prepare screens.' },
      { step: 2, title: 'Printing', desc: 'Apply inks through screens on selected substrates.' },
      { step: 3, title: 'Curing', desc: 'Heat-cure inks for durability.' },
      { step: 4, title: 'Quality Check', desc: 'Inspect prints and pack for dispatch.' }
    ]
  }
];
