import { assetPath } from '../utils/assetPath';

// Centralized Official Company Configuration for SON AGNI SECURITIES
// Registered Legal Entity: SONAGNI SECURITY SERVICES PRIVATE LIMITED

export const companyConfig = {
  brandName: "SON AGNI SECURITIES",
  legalName: "Sonagni Security Services Private Limited",
  legalNameUpper: "SONAGNI SECURITY SERVICES PRIVATE LIMITED",
  tagline: "YOUR SAFETY. OUR RESPONSIBILITY.",
  logo: assetPath("son-agni-logo-transparent.png"),
  companyType: "Private Limited Company",
  businessCategory: "Private Security and Manpower Services",
  primaryLocation: "Varanasi, Uttar Pradesh, India",
  locationBadge: "BASED IN VARANASI, UTTAR PRADESH",
  enquiryScope: "Security Service Enquiries Across India",
  
  registeredAddress: {
    line1: "N 8/180-11-8 Rajendrabiha, VNS 187",
    city: "Varanasi",
    state: "Uttar Pradesh",
    pincode: "221001",
    country: "India",
    full: "N 8/180-11-8 Rajendrabiha, VNS 187, Varanasi, Uttar Pradesh, 221001, India."
  },

  phoneNumbers: {
    primary: "+91 96283 33391",
    secondary: "+91 94152 33391",
    primaryTel: "tel:+919628333391",
    secondaryTel: "tel:+919415233391"
  },

  email: "sonagnisspvt.ltd.2025@mail.com",
  emailMailto: "mailto:sonagnisspvt.ltd.2025@mail.com",

  whatsapp: {
    number: "+919628333391",
    defaultMessage: "Hello SON AGNI SECURITIES, I would like to enquire about professional security and manpower services for my premises.",
    url: "https://wa.me/919628333391?text=Hello%20SON%20AGNI%20SECURITIES%2C%20I%20would%20like%20to%20enquire%20about%20professional%20security%20and%20manpower%20services%20for%20my%20premises."
  },

  // 5 Verified Official Service Categories
  services: [
    {
      id: "warehouse-storage-security",
      title: "Warehouse and Storage Facility Security",
      shortDesc: "Professional security support for warehouse and storage environments, focusing on premises protection, access monitoring, asset protection and security supervision.",
      fullDesc: "Sonagni Security Services Private Limited provides specialized security personnel for warehouses, fulfillment hubs, stockyards, and distribution centers. Our services focus on active premises protection, entry and exit supervision, dockside access monitoring, inventory shrinkage deterrence, and systematic security supervision.",
      icon: "Truck",
      image: assetPath("images/bouncer-warehouse.jpg"),
      benefits: [
        "Premises monitoring and perimeter security enforcement",
        "Vehicle and inward/outward goods gate entry logging",
        "Loss prevention and anti-pilferage operational vigilance",
        "Scheduled night watch and storage facility checking"
      ],
      idealIndustries: ["Warehouses", "Logistics Hubs", "Storage Depots", "Distribution Yards"],
      responsibilities: [
        "Checking vehicle entry passes and consignment delivery paperwork",
        "Monitoring perimeter fences, entry gates, and storage bays",
        "Maintaining visitor and worker register logs at main gates",
        "Reporting any suspicious perimeter movement or inventory discrepancies"
      ]
    },
    {
      id: "construction-site-security",
      title: "Construction Site Security",
      shortDesc: "Security support for construction sites, including site monitoring, premises protection, access supervision and safeguarding construction-related assets.",
      fullDesc: "Sonagni Security Services Private Limited deploys vigilant security personnel trained to safeguard site boundaries, track construction equipment, and manage entry gates.",
      icon: "Factory",
      image: assetPath("images/bouncer-construction.jpg"),
      benefits: [
        "Protection of costly machinery, steel, cement, and power tools",
        "Prevention of unauthorized entry and public liability hazards",
        "Labor entry pass monitoring and vehicle frisking",
        "After-hours site protection and perimeter vigilance"
      ],
      idealIndustries: ["Commercial Building Sites", "Residential Projects", "Industrial Developments", "Civil Works"],
      responsibilities: [
        "Stationed gate access control and vehicle inspection",
        "Regular rounds across construction boundaries and material yards",
        "Ensuring workers exit through designated checkpoints",
        "Immediate reporting of hazard observations or trespass incidents"
      ]
    },
    {
      id: "access-control-visitor-management",
      title: "Access Control and Visitor Management",
      shortDesc: "Structured entry management, visitor monitoring, access control procedures and premises entry coordination.",
      fullDesc: "Managing who enters and exits your property is the first line of defense. Our personnel implement disciplined access control procedures, visitor verification, badge issuance, vehicle barrier operation, and orderly entry coordination across commercial and residential premises.",
      icon: "DoorClosed",
      image: assetPath("images/bouncer-access.jpg"),
      benefits: [
        "Verification of visitor identity and purpose before entry",
        "Accurate record-keeping in physical or digital visitor registers",
        "Management of delivery couriers, vendors, and contractor personnel",
        "Professional front-line communication ensuring courteous deterrence"
      ],
      idealIndustries: ["Corporate Offices", "Business Premises", "Residential Complexes", "Commercial Establishments"],
      responsibilities: [
        "Issuing visitor passes and confirming host approvals",
        "Monitoring boom barriers and pedestrian turnstiles",
        "Conducting baggage checks and hand-held metal inspections where required",
        "Directing visitors to designated reception or parking bays"
      ]
    },
    {
      id: "premises-patrolling-asset-protection",
      title: "Premises Patrolling and Asset Protection",
      shortDesc: "Security patrolling and premises monitoring designed to help protect business properties, operational areas and physical assets.",
      fullDesc: "Our static and roving patrol security personnel conduct systematic checks across your business premises, common corridors, compound walls, parking bays, and utility zones. Patrolling acts as a strong physical deterrent against trespassing, vandalism, and unapproved property access.",
      icon: "ShieldAlert",
      image: assetPath("images/bouncer-patrol.jpg"),
      benefits: [
        "Active physical deterrence against intrusion and trespassing",
        "Periodic checks of doors, windows, gates, and locks",
        "Early observation of water leaks, lighting failures, or security gaps",
        "Clear record-keeping of hourly patrolling rounds"
      ],
      idealIndustries: ["Business Parks", "Industrial Facilities", "Warehouses", "Commercial Campuses"],
      responsibilities: [
        "Conducting scheduled foot patrols of designated security zones",
        "Inspecting boundary perimeter lighting and emergency exits",
        "Maintaining vigilance over high-value inventory or machinery",
        "Logging security observations and updating supervisor shift logs"
      ]
    },
    {
      id: "shift-management-incident-response",
      title: "Shift Management and Incident Response",
      shortDesc: "Security shift coordination, incident reporting, operational communication and structured incident response procedures.",
      fullDesc: "Disciplined security operations require seamless shift handovers, uninterrupted post coverage, and clear escalation protocols when irregularities arise. SON AGNI SECURITIES emphasizes structured shift coordination, roll-call inspections, accurate incident logging, and swift communication with client management.",
      icon: "Activity",
      image: assetPath("images/bouncer-shift.jpg"),
      benefits: [
        "Punctual shift changeovers ensuring zero unmanned security posts",
        "Standardized incident reporting for theft, damage, or unauthorized presence",
        "Direct communication between on-duty security staff and supervisors",
        "Organized emergency coordination with local authorities when required"
      ],
      idealIndustries: ["24/7 Operations", "Manufacturing Plants", "Commercial Properties", "Storage Hubs"],
      responsibilities: [
        "Conducting formal shift handover briefings and logbook sign-offs",
        "Immediate reporting and documentation of any site incidents",
        "Coordinating emergency response according to client-defined procedures",
        "Maintaining operational liaison with management representatives"
      ]
    }
  ],

  // Verified Service Approach Points
  serviceApproach: [
    { title: "Security-Focused Service Approach", desc: "Targeted manpower solutions tailored to facility security, discipline, and daily gate operations." },
    { title: "Premises Protection", desc: "Guarding property perimeters, common areas, entrance gates, and restricted work zones." },
    { title: "Access Management", desc: "Structured visitor recording, staff badge verification, and vendor entry coordination." },
    { title: "Asset Protection", desc: "Physical observation and patrolling to help deter theft, vandalism, and inventory shrinkage." },
    { title: "Security Shift Coordination", desc: "Punctual guard shift rotations, roll-call turnouts, and continuous post coverage." },
    { title: "Incident Reporting and Response", desc: "Structured logging of irregularities with swift escalation to client representatives." },
    { title: "Business-Oriented Security Solutions", desc: "Cost-effective, reliable manpower deployments configured for commercial clients." }
  ],

  // Common FAQ
  faqs: [
    {
      question: "What security services does SON AGNI SECURITIES provide?",
      answer: "SON AGNI SECURITIES, operated by Sonagni Security Services Private Limited, provides professional security and manpower services including Warehouse & Storage Facility Security, Construction Site Security, Access Control & Visitor Management, Premises Patrolling & Asset Protection, and Shift Management & Incident Response."
    },
    {
      question: "Where is the company officially located?",
      answer: "Sonagni Security Services Private Limited is officially registered in Varanasi, Uttar Pradesh, India, with its registered office at N 8/180-11-8 Rajendrabiha, VNS 187, Varanasi, UP - 221001."
    },
    {
      question: "Do you accept security service enquiries from across India?",
      answer: "Yes. While our headquarters are in Varanasi, Uttar Pradesh, we welcome security service enquiries for business premises, industrial hubs, and commercial facilities across India."
    },
    {
      question: "Can I request customized security deployment for my premises?",
      answer: "Yes. We work closely with business owners, facility managers, and site supervisors to customize shift timings, post positions, visitor gate rules, and patrolling routines to match your operational requirements."
    },
    {
      question: "How do I request a formal quotation?",
      answer: "You can submit an enquiry through our online 'Get a Quote' form, call our official numbers (+91 96283 33391 / +91 94152 33391), send an email to sonagnisspvt.ltd.2025@mail.com, or connect with our desk via WhatsApp."
    },
    {
      question: "What property types do your security services cover?",
      answer: "Our primary deployments support commercial business premises, warehouses, logistics yards, construction sites, manufacturing units, and storage facilities."
    }
  ]
};

