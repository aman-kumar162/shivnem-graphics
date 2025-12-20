import { Printer, CreditCard, Package, Palette, Flag, Sparkles } from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: 'digital-printing',
    name: 'Digital Printing',
    slug: 'digital-printing',
    icon: Printer,
    gradient: 'from-blue-500 to-cyan-500',
    primaryColor: '#3b82f6', // blue-500
    secondaryColor: '#06b6d4', // cyan-500
    image: '/services/digital-printing.png',
    tagline: 'High-Speed Digital Excellence',
    shortDescription: 'Professional digital printing with lightning-fast turnaround. Perfect for high-quality prints.',
    fullDescription: 'Experience the future of printing with our state-of-the-art digital infrastructure. We combine speed, precision, and color accuracy to deliver prints that breathe life into your creative vision. Whether it is a rush order for a presentation or a small batch of marketing materials, our digital presses are ready to roll.',
    benefits: [
      'Same-day delivery available for most orders',
      'Cost-effective for short runs',
      'Variable data printing support',
      'High-resolution 2400 DPI output'
    ],
    highlights: ['12x18 & 13x19 formats', '170-350 GSM range', 'Same-day delivery'],
    categories: [
      {
        title: 'Print Formats',
        icon: '📏',
        color: 'blue',
        items: [
          { name: '12x18 Standard Size', detail: 'Most popular format for posters and displays' },
          { name: '13x19 Large Format', detail: 'Perfect for high-impact visuals' },
          { name: 'Custom Size Cuts', detail: 'Tailored to your exact specifications' },
        ],
      },
      {
        title: 'Paper Quality',
        icon: '⚖️',
        color: 'indigo',
        items: [
          { name: '170 GSM Standard', detail: 'Everyday prints and flyers' },
          { name: '250 GSM Premium', detail: 'Professional brochures and cards' },
          { name: '300 GSM Heavy Duty', detail: 'Durable postcards and invitations' },
          { name: '350 GSM Ultra Premium', detail: 'Luxury finish for premium products' },
        ],
      },
    ],
    process: [
      { step: 1, title: 'File Review', desc: 'We check your files for resolution and color mode.' },
      { step: 2, title: 'Proofing', desc: 'Digital proof sent for approval (optional).' },
      { step: 3, title: 'Printing', desc: 'High-speed production on Canon/Xerox engines.' },
      { step: 4, title: 'Finishing', desc: 'Cutting, laminating, and packaging.' }
    ],
    gallery: [
       { title: 'Wide Format', img: '/services/digital-printing.png' }, // Using the existing one for now
       { title: 'Brochures', img: '/services/digital-printing.png' },   // Placeholder until generation
       { title: 'Flyers', img: '/services/digital-printing.png' }       // Placeholder until generation
    ],
    faq: [
      { q: 'What is the fastest turnaround?', a: 'We can often deliver within 2-4 hours for standard digital prints.' },
      { q: 'Can you print RGB files?', a: 'We recommend CMYK, but our RIP software converts RGB to CMYK with 95% accuracy.' }
    ]
  },
  {
    id: 'visiting-cards',
    name: 'Business Cards',
    slug: 'business-cards',
    icon: CreditCard,
    gradient: 'from-purple-500 to-pink-500',
    primaryColor: '#a855f7',
    secondaryColor: '#ec4899',
    image: '/services/user-upload-1.png', // Using uploaded asset
    tagline: 'Make Unforgettable First Impressions',
    shortDescription: 'From classic designs to premium metal finishes - cards that command attention.',
    fullDescription: 'Your business card is often the first tangible representation of your brand. We specialize in creating cards that people want to keep. From heavy 500GSM velvet-touch cards to laser-engraved metal masterpieces, we offer the widest range of premium business cards in the market.',
    benefits: [
      'Wide range of substrates: Paper, Plastic, Metal',
      'Special finishes: Spot UV, Foiling, Embossing',
      'Durable and long-lasting materials',
      'Design assistance available'
    ],
    highlights: ['Metal & PVC options', 'Velvet finishes', 'MOQ: 50 cards'],
    categories: [
      {
        title: 'Premium Metal',
        icon: '💿',
        color: 'yellow',
        badge: 'Luxury',
        items: [
          { name: 'Gold Finish Metal', detail: 'Prestigious golden elegance', premium: true },
          { name: 'Silver Finish Metal', detail: 'Sleek professional appeal', premium: true },
          { name: 'Stainless Steel', detail: 'Modern industrial look', premium: true },
        ],
        minQty: '50 cards minimum',
      },
      {
        title: 'Ultra Premium',
        icon: '💎',
        color: 'purple',
        badge: 'Trending',
        items: [
          { name: '500 GSM + Velvet', detail: 'Soft-touch luxury feel' },
          { name: 'Spot UV Accent', detail: 'Glossy highlights on matte' },
        ],
      },
    ],
    gallery: [
       { title: 'Luxury Gold', img: '/services/user-upload-1.png' },
       { title: 'Matte Black', img: '/services/user-upload-1.png' }
    ],
    process: [
      { step: 1, title: 'Design', desc: 'Choose a template or upload design.' },
      { step: 2, title: 'Material Selection', desc: 'Select paper, plastic, or metal.' },
      { step: 3, title: 'Production', desc: 'Printing and application of special finishes.' },
      { step: 4, title: 'Quality Check', desc: 'Manual inspection of every card.' }
    ],
    faq: [
      { q: 'Can I print on both sides?', a: 'Yes, double-sided printing is standard for most cards.' },
      { q: 'How long for metal cards?', a: 'Metal cards require specialized etching and take 5-7 working days.' }
    ]
  },
  {
    id: 'offset-printing',
    name: 'Offset Printing',
    slug: 'offset-printing',
    icon: Package,
    gradient: 'from-green-500 to-emerald-500',
    primaryColor: '#22c55e',
    secondaryColor: '#10b981',
    image: '/services/user-upload-2.png', // Using second uploaded asset
    tagline: 'Bulk Excellence & Precision',
    shortDescription: 'Large-volume commercial printing with consistent quality for businesses.',
    fullDescription: 'When quantity meets quality. Our offset printing solutions are designed for high-volume runs where cost-efficiency and color consistency are paramount. Perfect for corporate stationery, marketing collateral, and publishing needs.',
    benefits: [
      'Lowest cost per unit for large volumes',
      'Superior Pantone color matching',
      'Wide variety of paper stocks available',
      'Consistent quality across thousands of copies'
    ],
    highlights: ['Bulk pricing', 'Pantone matching', 'Commercial quality'],
    categories: [
      {
        title: 'Business Essentials',
        icon: '📄',
        color: 'green',
        items: [
          { name: 'Pamphlets & Flyers', detail: 'Mass marketing materials' },
          { name: 'Letterheads', detail: 'Professional correspondence' },
          { name: 'Bill Books', detail: 'Custom business forms' },
        ],
      },
    ],
    process: [
      { step: 1, title: 'Plate Making', desc: 'Creating CTP plates for each color.' },
      { step: 2, title: 'Setup', desc: 'Calibrating the press for registration.' },
      { step: 3, title: 'Printing', desc: 'High-speed offset production.' },
      { step: 4, title: 'Drying & Cutting', desc: 'Allowing ink to cure before trimming.' }
    ],
    faq: [
      { q: 'What is the minimum quantity?', a: 'Offset becomes economical starting at 500-1000 copies.' },
      { q: 'Can you match my brand color?', a: 'Yes, we use Pantone Matching System (PMS) for exact brand colors.' }
    ]
  },
  {
    id: 'screen-printing',
    name: 'Screen Printing',
    slug: 'screen-printing',
    icon: Palette,
    gradient: 'from-orange-500 to-red-500',
    primaryColor: '#f97316',
    secondaryColor: '#ef4444',
    image: '/services/screen-printing.png', // New Asset
    tagline: 'Print on Anything',
    shortDescription: 'Specialized surface printing for unique materials. Imagination is the limit.',
    fullDescription: 'Screen printing is the art of pushing ink through a mesh to create tactile, vibrant prints on almost any surface. From the fabric of a t-shirt to the wood of a plaque or the curve of a bottle, our screen printing artisans can brand it all.',
    benefits: [
      'Prints on non-flat and non-paper surfaces',
      'extremely durable and long-lasting ink',
      'Vibrant, thick ink deposits',
      'Economical for simple 1-2 color designs'
    ],
    highlights: ['Wood & metal', 'Fabric printing', 'Wedding cards'],
    categories: [
      {
        title: 'Special Surfaces',
        icon: '🖌️',
        color: 'orange',
        items: [
          { name: 'Wedding Invitations', detail: 'Elegant ceremony cards' },
          { name: 'Cloth & Fabric', detail: 'T-shirts, bags, textiles' },
          { name: 'Wood & Metal', detail: 'Signage and decor' },
        ],
      },
    ],
    gallery: [
       { title: 'T-Shirts', img: '/services/screen-printing.png' },
       { title: 'Wedding Cards', img: '/services/screen-printing.png' }
    ],
    process: [
      { step: 1, title: 'Screen Prep', desc: 'Exposing design onto the mesh screen.' },
      { step: 2, title: 'Ink Mixing', desc: 'Custom mixing colors to specification.' },
      { step: 3, title: 'Squeegee', desc: 'Manually requiring ink through the mesh.' },
      { step: 4, title: 'Curing', desc: 'Heat treating to set the ink permanently.' }
    ],
    faq: [
      { q: 'Does the ink wash off?', a: 'No, our heat-cured plastisol and solvent inks are permanent.' },
      { q: 'Can you print detailed photos?', a: 'Screen printing is better for solid colors and logos, not photos.' }
    ]
  },
  {
    id: 'flex-vinyl',
    name: 'Flex & Vinyl',
    slug: 'flex-vinyl',
    icon: Flag,
    gradient: 'from-red-500 to-rose-500',
    primaryColor: '#ef4444',
    secondaryColor: '#f43f5e',
    image: '/services/flex-vinyl.png', // New Asset
    tagline: 'Go Big or Go Home',
    shortDescription: 'Large-format outdoor advertising that stops traffic. Weather-resistant.',
    fullDescription: 'Dominate the visual landscape with our large-format printing. Built to withstand the elements, our flex and vinyl solutions are perfect for billboards, storefront signage, and vehicle wraps. We use UV and Latex inks that resist fading even under the harsh sun.',
    benefits: [
      'Weather and UV resistant',
      'Seamless printing up to 10 feet wide',
      'High visibility for outdoor advertising',
      'Versatile mounting options'
    ],
    highlights: ['Weather-resistant', 'Any size', 'High-res'],
    categories: [
      {
        title: 'Outdoor Media',
        icon: '📢',
        color: 'red',
        items: [
          { name: 'High-Res Banners', detail: 'Eye-catching large displays' },
          { name: 'Vinyl Stickers', detail: 'Long-lasting decals' },
          { name: 'Backlit Boards', detail: 'Glowing night signage' },
        ],
      },
    ],
    process: [
      { step: 1, title: 'Ripping', desc: 'Processing large files for the printer.' },
      { step: 2, title: 'Printing', desc: 'Roll-to-roll large format printing.' },
      { step: 3, title: 'Drying', desc: 'Outgassing functionality for solvent inks.' },
      { step: 4, title: 'Finishing', desc: 'Hemming and grommeting for installation.' }
    ],
    faq: [
      { q: 'How long does it last outdoors?', a: 'Typically 1-3 years depending on sun exposure and lamination.' },
      { q: 'Do you offer installation?', a: 'Yes, we have a team for on-site banner mounting.' }
    ]
  },
  {
    id: 'specialty-printing',
    name: 'Specialty Services',
    slug: 'specialty-services',
    icon: Sparkles,
    gradient: 'from-violet-500 to-purple-500',
    primaryColor: '#8b5cf6',
    secondaryColor: '#a855f7',
    image: '✨',
    tagline: 'Unique Solutions',
    shortDescription: 'Niche requirements from garment tags to professional framing.',
    fullDescription: 'For everything that doesn’t fit in a standard box. Our specialty services cover a wide array of finishing, customization, and niche printing needs. Whether it is DTF transfers for your clothing line or archival framing for your memories.',
    benefits: [
      'Custom solutions for unique problems',
      'High-margin add-ons for businesses',
      'Professional archival quality',
      'No minimums for many services'
    ],
    highlights: ['DTF transfers', 'Photo framing', 'Custom tags'],
    categories: [
      {
        title: 'Tags & Labels',
        icon: '🏷️',
        color: 'violet',
        items: [
          { name: 'DTF UV Transfers', detail: 'Heat-transfer graphics' },
          { name: 'Garment Tags', detail: 'Clothing brand identity' },
        ],
      },
      {
        title: 'Professional',
        icon: '📂',
        color: 'purple',
        items: [
          { name: 'Photo Framing', detail: 'Professional mounting' },
          { name: 'ID Cards', detail: 'Plastic employee IDs' },
        ],
      },
    ],
    process: [
      { step: 1, title: 'Consultation', desc: 'Understanding the unique requirement.' },
      { step: 2, title: 'Prototyping', desc: 'Testing materials and methods.' },
      { step: 3, title: 'Production', desc: 'Small batch execution.' },
      { step: 4, title: 'Assembly', desc: 'Manual assembly or finishing.' }
    ],
    faq: [
      { q: 'What is DTF?', a: 'Direct-to-Film allowed printing on any fabric without weeding.' },
      { q: 'Do you frame jerseys?', a: 'Yes, we do shadow box framing for memorabilia.' }
    ]
  },
];
