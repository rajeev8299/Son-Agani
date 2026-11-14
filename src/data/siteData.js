import { assetPath } from '../utils/assetPath';
// Central data repository for SON AGNI SECURITIES
export const companyInfo = {
  name: "SON AGNI SECURITIES",
  tagline: "YOUR SAFETY. OUR RESPONSIBILITY.",
  shortDescription: "India's premier security guard, enterprise surveillance, and protective services firm. We deliver vetted guards, corporate security concierges, industrial site defense, and VIP protection across all states and union territories.",
  phone: "+91 98765 43210 / +91 11 2345 6789",
  whatsappNumber: "+919876543210",
  whatsappMessage: "Hello SON AGNI SECURITIES, I would like to enquire about professional security guard deployment for my facility.",
  emergencyPhone: "1800-SECURE-NOW (24/7 Operations Room)",
  email: "enquiry@sonagnisecurities.com",
  careersEmail: "recruitment@sonagnisecurities.com",
  address: "Son Agni Towers, Level 4, Corporate Avenue, Cyber Heights, New Delhi - 110001, India",
  hours: "Operations Control Center: 24 Hours / 7 Days a Week",
  adminHours: "Mon - Sat: 09:00 AM - 06:00 PM"
};

// 16 Full-Scale Core Security Services
export const securityServices = [
  {
    id: "corporate-security",
    category: "Commercial & Corporate",
    title: "Corporate Security",
    shortDesc: "Access control, executive floor concierge, visitor monitoring, and corporate asset protection.",
    fullDesc: "Our Corporate Security division delivers disciplined, discreet, and polished front-line protection for high-value corporate offices, MNC headquarters, and business parks. Personnel undergo rigorous hospitality-security cross-training ensuring seamless access management, visitor logging, badge issuance, and proactive conflict deterrence.",
    icon: "Building2",
    image: assetPath('images/bouncer-corporate.jpg'),
    benefits: [
      "Strict multi-tier biometric and badge access governance",
      "Executive floor protection and confidential meeting security",
      "Visitor background checks and digital log integration",
      "Emergency evacuation marshals and crisis response readiness"
    ],
    idealIndustries: ["MNC Headquarters", "Tech Hubs", "Financial Institutions", "Consulting Firms"],
    responsibilities: [
      "Access point verification and credential monitoring",
      "Electronic baggage scanning and delivery screening",
      "Regular perimeter rounds and fire hazard assessments",
      "Coordination with local law enforcement and rapid response teams"
    ]
  },
  {
    id: "industrial-security",
    category: "Commercial & Corporate",
    title: "Industrial Security",
    shortDesc: "Heavy manufacturing, logistics yards, gate weighbridge controls, and perimeter surveillance.",
    fullDesc: "Industrial manufacturing plants and processing units require uncompromising vigilance. We deploy robustly trained industrial security guards equipped with modern gate-management procedures, material in/out audit systems, weighbridge monitoring, and anti-pilferage protocol execution.",
    icon: "Factory",
    image: assetPath('images/industry-manufacturing.jpg'),
    benefits: [
      "Prevention of material theft, unauthorized inventory diversion, and vandalism",
      "Heavy vehicle movement control and weighbridge verification",
      "Labor dispute perimeter protection and peaceful transition maintenance",
      "Hazardous chemical zone patrolling and safety protocol compliance"
    ],
    idealIndustries: ["Automobile Plants", "Chemical Refineries", "Steel Manufacturing", "Power Plants"],
    responsibilities: [
      "Inward and outward truck material tallying against e-way bills",
      "Daily biometric labor verification and shift change supervision",
      "Night thermal perimeter sweeps and emergency fire hydrant upkeep checks",
      "Enforcing PPE (Personal Protective Equipment) compliance at entry points"
    ]
  },
  {
    id: "residential-security",
    category: "Residential & Personal",
    title: "Residential Security",
    shortDesc: "Gated communities, luxury villas, apartment complexes, and neighborhood patrol.",
    fullDesc: "Creating a secure, serene living environment for families, high-net-worth communities, and luxury residential complexes. Our guards are courteous yet firm, adept at digital visitor management apps, vehicle barrier controls, and child safety surveillance across communal zones.",
    icon: "Home",
    image: assetPath('images/industry-residential.jpg'),
    benefits: [
      "Strict visitor, vendor, and domestic staff validation",
      "24/7 continuous roving patrols in quiet electric vehicles or foot beats",
      "Rapid intervention during medical crises or domestic emergencies",
      "Child safety monitoring near clubhouses, pools, and vehicular drives"
    ],
    idealIndustries: ["Gated Townships", "High-Rise Condominiums", "Luxury Villas", "Senior Living Communities"],
    responsibilities: [
      "Boom barrier operation and resident RFID scanning",
      "Pre-authorized guest verification via intercom and resident apps",
      "Periodic checking of emergency stairwells, basements, and roof accesses",
      "Immediate assistance to residents during power trips or medical alarms"
    ]
  },
  {
    id: "event-security",
    category: "Specialized & Events",
    title: "Event Security",
    shortDesc: "Crowd control, VIP barricades, ingress/egress safety, and ticket validation.",
    fullDesc: "From massive stadium concerts and global business summits to high-profile celebrity weddings, our event security wing plans operational flow with military precision. We engineer pedestrian bottlenecks, coordinate evacuation routes, and implement discreet crowd pacification tactics.",
    icon: "Users",
    image: assetPath('images/bouncer-team.jpg'),
    benefits: [
      "Effective crowd dispersion and bottleneck prevention",
      "Anti-stampede architectural barrier configuration",
      "Alcohol/contraband detection at security metal detector gates (DFMD)",
      "Dedicated staging for celebrity transport and green room perimeters"
    ],
    idealIndustries: ["Conferences & Expos", "Music Festivals", "Sports Stadiums", "High-Profile Weddings"],
    responsibilities: [
      "Pre-event sweeps with handheld explosive and metal detectors",
      "Zone-based credential enforcement (Backstage, VIP, General Public)",
      "Direct radio link with municipal police, paramedics, and fire units",
      "Post-event smooth venue evacuation and VIP convoy safe egress"
    ]
  },
  {
    id: "personal-bodyguards",
    category: "Residential & Personal",
    title: "Personal Bodyguards",
    shortDesc: "Close protection officers (CPO) with tactical defensive training and sharp threat analysis.",
    fullDesc: "Our Close Protection Officers (CPOs) provide elite personal protection for high-risk individuals, diplomats, corporate leaders, and visiting dignitaries. Trained in defensive driving, evasive maneuvering, situational de-escalation, and discreet threat mitigation.",
    icon: "ShieldAlert",
    image: assetPath('images/bouncer-vip.jpg'),
    benefits: [
      "Tailored protection circles (Close, Inner, and Outer Rings)",
      "Unobtrusive presence matching client lifestyle and dress code",
      "Route reconnaissance and contingency extraction planning",
      "Direct communication with armed escort support when required"
    ],
    idealIndustries: ["Ultra HNWIs", "Diplomatic Delegations", "Celebrities", "Business Executives"],
    responsibilities: [
      "Physical safeguarding against assault, harassment, and stalking",
      "Inspection of travel vehicles, accommodations, and meeting spots",
      "Liaison with host venue security teams prior to principal arrival",
      "Rapid tactical extraction under escalating threat scenarios"
    ]
  },
  {
    id: "vip-protection",
    category: "Residential & Personal",
    title: "VIP Security & Escorts",
    shortDesc: "Armed and unarmed convoy motorcades, safe houses, and high-visibility deterrence.",
    fullDesc: "Designed for public figures and VIP delegations navigating high-density environments. Our VIP protection teams deploy coordinated multi-vehicle escorts, advance scout cars, and static perimeter defense to neutralize potential threats before they materialize.",
    icon: "Award",
    image: assetPath('images/hero-bouncer.jpg'),
    benefits: [
      "Synchronized motorcade security with trained convoy drivers",
      "Static safe-zone establishment at hotels, airports, and private lounges",
      "Close coordination with state police protocols and protocols of state",
      "Emergency medical trauma response kits deployed in convoy vehicles"
    ],
    idealIndustries: ["Foreign Delegations", "Government Dignitaries", "Industrialists", "International Artists"],
    responsibilities: [
      "Route safety audits, choke-point mapping, and alternative routes",
      "Airport tarmac escort and terminal transition management",
      "Air-gap communication monitoring and counter-surveillance checks",
      "Public buffer maintenance during media press conferences"
    ]
  },
  {
    id: "bouncer-services",
    category: "Specialized & Events",
    title: "Bouncer Services",
    shortDesc: "Assertive, disciplined bouncers for premium nightlife venues, lounges, and private parties.",
    fullDesc: "Our male and female bouncers represent physical authority combined with psychological calm. Specializing in high-energy nightlife venues, upscale lounges, private clubs, and invite-only celebrations, they maintain decorum, manage guest lists, and defuse rowdy behavior.",
    icon: "UserCheck",
    image: assetPath('images/bouncer-nightlife.jpg'),
    benefits: [
      "Imposing physical deterrent reducing physical altercation risks",
      "Trained in verbal de-escalation and calm dispute separation",
      "Female security personnel available for sensitive patron handling",
      "Zero tolerance for narcotics, weapons, and illicit substances"
    ],
    idealIndustries: ["Nightclubs & Bars", "Private Gala Nights", "Celebrity Parties", "Luxury Lounges"],
    responsibilities: [
      "Age proof verification and dress code compliance checking",
      "Safe and firm removal of intoxicated or belligerent guests",
      "Continuous observation of dark corners and dance floor dynamics",
      "Closing-time safe disbursement and valet area security"
    ]
  },
  {
    id: "hospital-security",
    category: "Specialized & Events",
    title: "Hospital Security",
    shortDesc: "Sensitive, empathetic protection for ICU perimeters, emergency triage, and medical staff.",
    fullDesc: "Healthcare security demands high empathy alongside rigorous authority. We station specially conditioned security guards at casualty/ER zones, infant wards, and doctor consultation perimeters to shield medical personnel against emotional flashpoints and unauthorized intrusion.",
    icon: "Activity",
    image: assetPath('images/bouncer-access.jpg'),
    benefits: [
      "Instant buffering between distressed attendants and medical practitioners",
      "Infant protection and anti-abduction ward lockups",
      "Controlled entry into critical care units (ICU, NICU, Operation Theatres)",
      "Strict pharma store and narcotic medication security"
    ],
    idealIndustries: ["Multi-Specialty Hospitals", "Trauma Centers", "Pharmaceutical Facilities", "Diagnostics Labs"],
    responsibilities: [
      "Pass-based visitor admission in patient wards",
      "Ambulance bay clearance to ensure unimpeded emergency patient transfer",
      "Emergency Code Pink (infant abduction) and Code Red (fire) response drills",
      "De-escalation during patient bereavement or contentious billing episodes"
    ]
  },
  {
    id: "school-security",
    category: "Specialized & Events",
    title: "School & College Security",
    shortDesc: "Child-safe protocols, school bus boarding verification, and student zone monitoring.",
    fullDesc: "Protecting educational ecosystems requires background-screened, vigilant, and compassionate guards. We secure kindergarten gates, university campuses, and boarding institutions with strict child pickup rules, anti-bullying perimeter checks, and visitor escrow procedures.",
    icon: "GraduationCap",
    image: assetPath('images/industry-education.jpg'),
    benefits: [
      "Child pickup verification cards (parent/guardian identity checks)",
      "Drug-free and tobacco-free radius enforcement outside campus gates",
      "Bus convoy staging, escorting, and student headcount monitoring",
      "Non-intrusive CCTV and perimeter patrols during school recess"
    ],
    idealIndustries: ["K-12 International Schools", "University Campuses", "Boarding Academies", "Coaching Institutes"],
    responsibilities: [
      "Locking all secondary gates after morning roll call",
      "Escorting unfamiliar vendors and technicians across school grounds",
      "Supervising pedestrian crossings during morning and afternoon dismissals",
      "Fire drill execution and lockdown drill coordination"
    ]
  },
  {
    id: "hotel-security",
    category: "Commercial & Corporate",
    title: "Hotel Security",
    shortDesc: "Discreet five-star lobby presence, luggage screening, and guest privacy preservation.",
    fullDesc: "Blending luxury guest service with covert protection. Our hospitality security officers are groomed to 5-star grooming standards, monitoring baggage scanners, hotel corridors, banquet exits, and basement valets without alarming international tourists or corporate guests.",
    icon: "Sparkles",
    image: assetPath('images/bouncer-nightlife.jpg'),
    benefits: [
      "Guest privacy and anti-paparazzi protection on VIP floors",
      "Under-vehicle surveillance mirrors (UVMS) and luggage X-ray scans",
      "Lost and found management with strict chain-of-custody logging",
      "Food delivery and outside contractor access restriction"
    ],
    idealIndustries: ["Luxury Resorts", "Boutique Hotels", "Convention Centers", "Transit Hotels"],
    responsibilities: [
      "Porte-cochere vehicle screening and welcoming demeanor",
      "Keycard elevator reader compliance verification",
      "Quiet patrol of guest floor corridors and fire exits every hour",
      "Rapid assistance with in-room safe lockouts or guest medical calls"
    ]
  },
  {
    id: "mall-security",
    category: "Commercial & Corporate",
    title: "Mall Security",
    shortDesc: "Crowd circulation, lost children assistance, shoplifting deterrence, and parking safety.",
    fullDesc: "High footfall retail environments require sharp situational awareness. Our mall security units specialize in anti-shoplifting visual observation, escalator safety supervision, lost child reunion protocols, and orderly multi-level underground parking management.",
    icon: "ShoppingBag",
    image: assetPath('images/industry-retail.jpg'),
    benefits: [
      "Active visual deterrence against retail theft and organized shoplifting",
      "Escalator and atrium fall-prevention observation teams",
      "Centralized public address system for fast lost child announcements",
      "Basement parking patrol preventing vehicle tampering and eve-teasing"
    ],
    idealIndustries: ["Retail Malls", "Lifestyle Centers", "Hypermarkets", "Outlet Centers"],
    responsibilities: [
      "Door frame metal detector (DFMD) and baggage inspection at all entries",
      "Coordination with store loss prevention (LP) managers",
      "Emergency evacuation drill leadership and smoke barrier checks",
      "Handling unruly crowds during festival sales and celebrity promotions"
    ]
  },
  {
    id: "bank-security",
    category: "Commercial & Corporate",
    title: "Bank & ATM Security",
    shortDesc: "Vault perimeter defense, armed cash escort guards, ATM booth vigilance, and queue discipline.",
    fullDesc: "Financial hubs and banking branches require maximum deterrence and rapid response readiness. We deploy seasoned armed and unarmed security guards trained in vault access verification, cash-in-transit (CIT) perimeter defense, and customer lobby security.",
    icon: "Lock",
    image: assetPath('images/bouncer-patrol.jpg'),
    benefits: [
      "Strict vault entrance protocol and dual-authorization verification",
      "Continuous observation of ATM vestibules preventing card-skimming hardware tampering",
      "Armed guards trained in tactical firearm handling and immediate suppression",
      "Discreet emergency silent alarm triggers linked directly to local police dispatch"
    ],
    idealIndustries: ["Retail Bank Branches", "Currency Chests", "ATM Kiosks", "Micro-Finance Units"],
    responsibilities: [
      "Verification of customer bags and helmets before branch entry",
      "Perimeter cordoning during armored cash replenishment operations",
      "Daily audit of branch panic alarm buttons and emergency lights",
      "Handling erratic or aggressive visitors with firm professional de-escalation"
    ]
  },
  {
    id: "warehouse-security",
    category: "Commercial & Corporate",
    title: "Warehouse & Logistics Security",
    shortDesc: "Consignment seal tracking, truck driver escorting, loading dock surveillance, and yard perimeter.",
    fullDesc: "Sprawling fulfillment hubs, freight terminals, and supply depots require comprehensive perimeter protection and tight logistical auditing. We integrate gate passes, cargo manifest verification, seal audits, and round-the-clock yard rover patrols.",
    icon: "Truck",
    image: assetPath('images/bouncer-warehouse.jpg'),
    benefits: [
      "Elimination of internal inventory shrinkage and dockside theft",
      "Rigid outward gate pass verification against digital barcode manifests",
      "Yard perimeter checks covering high-risk container drop-offs",
      "Thermal perimeter surveillance against night fence breaches"
    ],
    idealIndustries: ["E-Commerce Fulfillment Centers", "Cold Storage Units", "FMCG Depots", "Freight Corridors"],
    responsibilities: [
      "Tallying container seals against electronic shipping notes",
      "Driver identity verification and designated rest bay restriction",
      "Continuous patrol of perimeter fencing, dead zones, and floodlights",
      "Immediate reporting of damaged consignments or broken packing seals"
    ]
  },
  {
    id: "cctv-surveillance",
    category: "Specialized & Events",
    title: "CCTV Surveillance & Control Room",
    shortDesc: "24/7 remote video telemetry, AI threat analytics, and rapid dispatch coordination.",
    fullDesc: "State-of-the-art Command & Control Room operations manned by certified surveillance technicians. We monitor hundreds of camera feeds simultaneously, using video analytics for perimeter breaches, unattended object detection, fire flareups, and dispatching on-ground patrol officers within seconds.",
    icon: "Video",
    image: assetPath('images/bouncer-shift.jpg'),
    benefits: [
      "Continuous live stream tracking without operator fatigue gaps",
      "Immediate guard dispatch via VHF tactical radio network",
      "Forensic incident video clip extraction and police evidence readiness",
      "Integration with perimeter tripwire lasers and glass-break sensors"
    ],
    idealIndustries: ["Tech Parks", "Data Centers", "Warehousing Hubs", "Financial Headquarters"],
    responsibilities: [
      "Round-the-clock monitoring of PTZ and fixed high-definition cameras",
      "System health tracking (hard drive recording, camera blind alerts)",
      "Daily electronic incident log dispatch to client security director",
      "Remote lockdown activation in integrated access management suites"
    ]
  },
  {
    id: "fire-safety-support",
    category: "Specialized & Events",
    title: "Fire & Safety Support",
    shortDesc: "Certified fire marshals, hydrant upkeep, smoke response, and emergency evacuation drills.",
    fullDesc: "Industrial manufacturing plants, corporate towers, and public venues require vigilant fire wardens who can act before first responders arrive. Our guards are certified in portable extinguisher operation, hydrant monitoring, smoke exhaust checks, and crowd evacuation.",
    icon: "Flame",
    image: assetPath('images/bouncer-construction.jpg'),
    benefits: [
      "Immediate initial suppression of localized class A, B, and C fires",
      "Keeping emergency corridors, fire doors, and escape stairs unblocked",
      "Regular testing of riser pressures, hose reels, and alarm panels",
      "Execution of orderly, panic-free full-facility evacuation drills"
    ],
    idealIndustries: ["Chemical Facilities", "Data Centers", "High-Rise Office Towers", "Auditoriums"],
    responsibilities: [
      "Daily inspection of fire extinguisher charge levels and inspection tags",
      "Monitoring sprinkler valves and diesel backup booster pump readiness",
      "Guiding occupants to primary and secondary assembly zones during alarms",
      "Liaison with municipal fire brigades during emergency drills"
    ]
  },
  {
    id: "gate-visitor-management",
    category: "Commercial & Corporate",
    title: "Gate & Visitor Management",
    shortDesc: "Digital badge check-ins, boom barrier automation, courier escrow, and vehicle frisks.",
    fullDesc: "The main perimeter gate is the primary line of defense. Our gate security personnel enforce digital visitor management, OTP validation, RFID vehicle tags, contract worker frisking, and delivery parcel scanning to ensure absolute site safety.",
    icon: "DoorClosed",
    image: assetPath('images/bouncer-access.jpg'),
    benefits: [
      "Zero unverified visitors through pre-authorization mobile apps",
      "Under-vehicle mirror inspection preventing prohibited item entry",
      "Dedicated courier and parcel screening room protocols",
      "Real-time digital occupancy dashboards for facility directors"
    ],
    idealIndustries: ["IT Campuses", "Industrial Complexes", "Embassy Zones", "Gated Communities"],
    responsibilities: [
      "Scanning visitor government photo IDs and generating temporary badges",
      "Operating hydraulic road blockers and boom barrier access controls",
      "Handheld metal detector (HHMD) pat-downs for daily contractual labor",
      "Logging vehicle license plates and cargo delivery documentation"
    ]
  }
];

export const industriesList = [
  {
    id: "corporate-offices",
    name: "Corporate Offices & IT Parks",
    image: assetPath('images/bouncer-corporate.jpg'),
    desc: "Comprehensive perimeter defense, turnstile access systems, confidentiality controls, and visitor tracking for high-occupancy corporate hubs.",
    challenges: ["High volume daily employee traffic", "Protection of intellectual property", "Strict VIP client protocol"],
    solutions: "Smart turnstile integration, executive floor security, and 24/7 CCTV surveillance."
  },
  {
    id: "manufacturing-factories",
    name: "Manufacturing Plants & Factories",
    image: assetPath('images/industry-manufacturing.jpg'),
    desc: "Rigid gate management, scrap theft deterrence, shift change discipline, and industrial safety compliance across massive industrial spaces.",
    challenges: ["Heavy equipment pilferage", "Labor union friction", "Hazardous materials"],
    solutions: "Gate weighbridge verification, random employee frisking, and round-the-clock perimeter patrol."
  },
  {
    id: "residential-complexes",
    name: "Residential Townships & Societies",
    image: assetPath('images/industry-residential.jpg'),
    desc: "Safe haven security with digital visitor gate apps, night perimeter patrols, and friendly assistance for families and senior residents.",
    challenges: ["Unchecked vendor delivery access", "Child safety near roads", "Basement vehicle safety"],
    solutions: "Resident app sync, visitor pre-approvals, and speed bump watchdogs."
  },
  {
    id: "hospitals-healthcare",
    name: "Hospitals & Healthcare Facilities",
    image: assetPath('images/bouncer-access.jpg'),
    desc: "Protective buffers for doctors, casualty unit crowd containment, emergency triage escorting, and patient privacy management.",
    challenges: ["Emotionally charged emergencies", "Unrestricted entry in critical wards", "Pharmacy theft"],
    solutions: "Dedicated ER marshals, ICU biometric doors, and strict visitor badge policy."
  },
  {
    id: "educational-institutions",
    name: "Schools, Colleges & Universities",
    image: assetPath('images/industry-education.jpg'),
    desc: "Vetted guards guarding campus perimeter boundaries, school bus drop-off points, and anti-bullying surveillance.",
    challenges: ["Student safety and anti-bullying", "Unauthorized trespassers", "Heavy dispersal rush"],
    solutions: "Color-coded parent pickup badges, perimeter wall laser sensors, and disciplined gatekeepers."
  },
  {
    id: "retail-shopping-malls",
    name: "Shopping Malls & Retail Hubs",
    image: assetPath('images/industry-retail.jpg'),
    desc: "Loss prevention officers, escalator safety marshals, metal detector gates, and rapid assistance for lost children.",
    challenges: ["Active shoplifting syndicates", "Massive weekend crowds", "Parking disputes"],
    solutions: "Undercover store watchers, security booths on every level, and structured parking coordination."
  },
  {
    id: "hospitality-hotels",
    name: "Hotels & Luxury Resorts",
    image: assetPath('images/bouncer-nightlife.jpg'),
    desc: "Discreet five-star protection, luggage scanners, under-chassis vehicle mirrors, and VIP guest confidentiality.",
    challenges: ["Maintaining warm hospitality while remaining alert", "Celebrity privacy", "Banquet gatecrashing"],
    solutions: "Suited lobby security, discreet ear-piece communication, and valet security checks."
  },
  {
    id: "events-venues",
    name: "Concerts, Expos & Stadiums",
    image: assetPath('images/bouncer-team.jpg'),
    desc: "Dynamic crowd zoning, physical anti-stampede barricades, VIP green room perimeters, and emergency evacuation management.",
    challenges: ["Surge crowds", "Ticket forgery", "Prohibited contraband smuggling"],
    solutions: "Multi-tier bag search checkpoints, tactical bouncers at stage fronts, and command post coordination."
  },
  {
    id: "warehouses-logistics",
    name: "Warehouses & Logistics Hubs",
    image: assetPath('images/bouncer-warehouse.jpg'),
    desc: "Consignment seal tracking, truck driver escorting, loading dock surveillance, and yard perimeter security.",
    challenges: ["High-value freight shrinkage", "Blind spots across vast container yards", "Fire hazards"],
    solutions: "RFID seal tracking, yard roving motor guards, and thermal night vision cameras."
  }
];

export const guardPersonnelCategories = [
  {
    category: "Static & Industrial Security Guards",
    role: "Uniformed Guard Personnel",
    experience: "3+ Years Trained Civilian / Security Academy",
    description: "Our front-line defenders trained in access control, log maintenance, emergency protocols, and perimeter surveillance. Dressed in crisp, authoritative uniforms.",
    standards: [
      "Rigorous background check including criminal police verification",
      "Minimum height & fitness standard requirements",
      "Certified in basic First Aid and Fire Safety Operations",
      "Trained in polite yet firm communication"
    ],
    image: assetPath('images/bouncer-patrol.jpg')
  },
  {
    category: "Site Security Supervisors",
    role: "Operational Field Supervisors",
    experience: "6+ Years Field Experience / Senior Guard Leads",
    description: "Supervisors conduct unannounced day/night audits, manage guard shift rosters, conduct roll calls, and serve as the direct client point-of-contact.",
    standards: [
      "Extensive senior private security and multi-guard leadership experience",
      "Proficient in incident documentation, FIR liaison, and crisis management",
      "Expertise in operating electronic control rooms and biometrics",
      "Tactical leadership and rapid mobilization capabilities"
    ],
    image: assetPath('images/bouncer-supervisor.jpg')
  },
  {
    category: "Close Protection Officers (CPO)",
    role: "Personal Bodyguards & VIP Escorts",
    experience: "8+ Years Close Protection & Tactical Defense",
    description: "Unarmed and armed personal bodyguards specializing in close-quarters defense, route reconnaissance, evasive motorcade tactics, and discreet high-profile security.",
    standards: [
      "Advanced tactical combat and weapon safety certification",
      "Defensive driving and anti-ambush motorcade protocols",
      "High situational awareness and non-verbal threat identification",
      "Strict non-disclosure agreement compliance and total discretion"
    ],
    image: assetPath('images/bouncer-vip.jpg')
  },
  {
    category: "Event Marshals & Bouncers",
    role: "Tactical Crowd & Nightlife Security",
    experience: "4+ Years Nightlife / Large Event Management",
    description: "High-stature, athletic bouncers and crowd marshals trained to handle chaotic environments, diffuse physical aggression, and protect stage zones.",
    standards: [
      "Physical conditioning and defensive crowd restraint certification",
      "Expertise in verbal de-escalation under high stress",
      "Specialized female bouncer contingents for women safety handling",
      "Rapid team containment techniques for unruly gatherings"
    ],
    image: assetPath('images/bouncer-team.jpg')
  }
];

// 5-Step Process Blueprint as mandated by Advanced Prompt
export const processSteps = [
  {
    number: "01",
    title: "Submit Your Requirement",
    desc: "Share your facility profile, property location, required number of posts, and specific threat vectors via our online quotation portal or direct operations desk."
  },
  {
    number: "02",
    title: "Security Assessment",
    desc: "Our senior field specialists conduct an on-ground physical inspection to identify blind spots, ingress vulnerabilities, perimeter gaps, and operational bottlenecks."
  },
  {
    number: "03",
    title: "Customized Security Planning",
    desc: "We formulate a tailored Standard Operating Procedure (SOP), specifying personnel deployment numbers, equipment rosters, shift rotations, and escalation chains."
  },
  {
    number: "04",
    title: "Personnel Deployment",
    desc: "Vetted and groomed guards are mobilized on-site with site-specific induction, radio communication equipment, turnout uniforms, and post assignment orders."
  },
  {
    number: "05",
    title: "Ongoing Supervision",
    desc: "24/7 centralized monitoring combined with unannounced night supervisor spot-checks ensures zero absenteeism, alertness, and continuous service excellence."
  }
];

// Nationwide India Coverage Data
export const coverageRegions = [
  { region: "North India", hubs: ["Delhi NCR", "Gurugram", "Noida", "Chandigarh", "Jaipur", "Lucknow"] },
  { region: "West India", hubs: ["Mumbai", "Pune", "Ahmedabad", "Surat", "Goa", "Nagpur"] },
  { region: "South India", hubs: ["Bengaluru", "Hyderabad", "Chennai", "Kochi", "Coimbatore"] },
  { region: "East & Central", hubs: ["Kolkata", "Bhubaneswar", "Indore", "Bhopal", "Patna", "Ranchi"] }
];

// Gallery Showcase Data with Lightbox Support
export const galleryItems = [
  {
    id: 1,
    title: "Uniformed Guard Roll Call & Turnout Inspection",
    category: "Security Personnel",
    image: assetPath('images/about-formation.jpg'),
    desc: "Morning turnout briefing ensuring spotless uniform discipline, equipment readiness, and post orders."
  },
  {
    id: 2,
    title: "Corporate Reception Concierge & Access Control",
    category: "Corporate Security",
    image: assetPath('images/bouncer-corporate.jpg'),
    desc: "Polished front-desk security officers managing smart turnstiles, visitor badges, and executive floors."
  },
  {
    id: 3,
    title: "Heavy Manufacturing Gate & Logistics Weighbridge",
    category: "Industrial Security",
    image: assetPath('images/industry-manufacturing.jpg'),
    desc: "Inward/outward consignment verification, truck driver screening, and gate barrier management."
  },
  {
    id: 4,
    title: "Gated Community RFID Boom Barrier Operations",
    category: "Residential Security",
    image: assetPath('images/industry-residential.jpg'),
    desc: "Ensuring peaceful, child-safe environments with digital app visitor approvals and roving patrols."
  },
  {
    id: 5,
    title: "High-Profile Event Crowd Barrier Management",
    category: "Event Security",
    image: assetPath('images/bouncer-event.jpg'),
    desc: "Pedestrian staging, DFMD entry screening, and anti-stampede crowd control at major summits."
  },
  {
    id: 6,
    title: "Close Protection Officer Tactical Motorcade Escort",
    category: "Security Personnel",
    image: assetPath('images/bouncer-vip.jpg'),
    desc: "Elite personal bodyguards securing high-risk principals and VIP delegations during city transit."
  },
  {
    id: 7,
    title: "24/7 CCTV Video Wall Telemetry Operations",
    category: "Corporate Security",
    image: assetPath('images/bouncer-shift.jpg'),
    desc: "Continuous remote video surveillance tracking multi-site alarm triggers and field dispatching."
  },
  {
    id: 8,
    title: "Industrial Night Perimeter Foot Patrol",
    category: "Industrial Security",
    image: assetPath('images/bouncer-patrol.jpg'),
    desc: "Tactical night checks of warehouse fence lines, emergency exits, and container storage yards."
  },
  {
    id: 9,
    title: "Active Infrastructure & Construction Access Control",
    category: "Industrial Security",
    image: assetPath('images/bouncer-construction.jpg'),
    desc: "Vigilant perimeter checkpost and worker safety induction management at active civil work sites."
  },
  {
    id: 10,
    title: "Upscale Hospitality & Nightlife Security Bouncers",
    category: "Event Security",
    image: assetPath('images/bouncer-nightlife.jpg'),
    desc: "Authoritative guest list management, crowd decorum, and venue entry protection."
  },
  {
    id: 11,
    title: "Corporate Lobby Digital QR Access Turnstile Operations",
    category: "Corporate Security",
    image: assetPath('images/bouncer-access.jpg'),
    desc: "High-throughput visitor verification and badge scanning at modern corporate headquarters."
  },
  {
    id: 12,
    title: "Senior Operational Field Supervisor Post Audit",
    category: "Security Personnel",
    image: assetPath('images/bouncer-supervisor.jpg'),
    desc: "Meticulous on-site guard turnout inspection, SOP verification, and shift roster logging."
  }
];

export const sampleTestimonials = [
  {
    client: "Rajesh Malhotra",
    role: "Director of Facilities",
    organization: "Vertex Global IT Towers (Delhi NCR)",
    quote: "SON AGNI SECURITIES transformed our tech park's perimeter defense. The guards are punctual, impeccably groomed, and handle 3,500+ daily visitors with total composure.",
    verifiedBadge: "Corporate Demonstration Feedback"
  },
  {
    client: "Vikram Singhania",
    role: "Head of Plant Operations",
    organization: "Singhania Heavy Engineering Ltd. (Pune)",
    quote: "Pilferage in our scrap yard dropped to absolute zero within weeks of deploying SON AGNI's industrial guarding unit. Their gate audit SOP is foolproof.",
    verifiedBadge: "Industrial Demonstration Feedback"
  },
  {
    client: "Sunita Deshmukh",
    role: "RWA Secretary",
    organization: "Grand Palms Luxury Residences (Bengaluru)",
    quote: "Families in our township feel genuinely secure. The guards know our safety rules, assist senior citizens, and manage visitor deliveries digitally.",
    verifiedBadge: "Residential Demonstration Feedback"
  }
];

export const faqList = [
  {
    question: "What security services do you provide?",
    answer: "SON AGNI SECURITIES provides comprehensive guarding services including Corporate Security, Industrial Security, Residential Society Guarding, Event Security, Personal Bodyguards (CPO), VIP Escorts, Bouncer Services, Hospital Security, School & College Security, Hotel Security, Mall Security, Bank & ATM Security, Warehouse Security, 24/7 CCTV Surveillance, Fire & Safety Support, and Gate & Visitor Management."
  },
  {
    question: "Do you provide security guards across India?",
    answer: "Yes, our operational network handles security requirement assessments and personnel deployment across major metropolitan hubs, industrial corridors, and commercial cities across India."
  },
  {
    question: "Can I request customized security deployment?",
    answer: "Absolutely. We avoid one-size-fits-all staffing. Our security consultants inspect your premises, analyze shift patterns, assess ingress points, and create tailored Standard Operating Procedures (SOPs) matching your exact facility protocols."
  },
  {
    question: "Do you provide event security and bouncers for short assignments?",
    answer: "Yes. Our Event Security and Bouncer teams can be mobilized for single-day corporate conventions, concerts, exhibitions, private celebrations, or multi-week exhibitions with dedicated crowd marshals."
  },
  {
    question: "Do you provide residential security for housing societies and villas?",
    answer: "Yes, we deploy trained residential guards skilled in digital visitor entry apps, boom barrier management, vehicle tag verification, and quiet night foot patrols."
  },
  {
    question: "How can I hire security guards for my company?",
    answer: "You can submit an enquiry through our 'Get a Quote' page, call our 24/7 operations line, or message our direct WhatsApp desk. A security manager will evaluate your site and provide a transparent itemized quotation."
  },
  {
    question: "How can I request a quotation?",
    answer: "Complete our comprehensive online requirement form with your city, required headcount, shift pattern, and start date. We deliver formal commercial proposals within 24 hours."
  },
  {
    question: "What qualifications do your security personnel have?",
    answer: "All guards undergo rigorous police background verification, physical fitness testing, fire safety and basic first-aid training, drill discipline, and on-site client SOP induction before deployment."
  }
];

export const jobOpenings = [
  {
    id: "sec-guard",
    title: "Security Guard (Male / Female)",
    location: "Pan-India: Delhi NCR, Mumbai, Bengaluru, Pune, Hyderabad",
    type: "Full-Time (8hr / 12hr Shifts)",
    openings: "75+ Vacancies",
    requirements: [
      "Minimum 10th or 12th standard education",
      "Age: 21 to 40 years with clean police verification record",
      "Height: Minimum 5'7\" (Male), 5'2\" (Female)",
      "Basic English and Hindi communication skills"
    ]
  },
  {
    id: "sec-supervisor",
    title: "Security Field Supervisor",
    location: "Delhi NCR, Hyderabad, Ahmedabad, Chennai",
    type: "Full-Time (Day / Night Rotation)",
    openings: "15 Vacancies",
    requirements: [
      "Graduate or Senior Guard leadership background",
      "Minimum 4 years experience supervising multi-guard sites",
      "Valid two-wheeler driving license for site patrol rounds",
      "Proficient in smartphone incident reporting and roster management"
    ]
  },
  {
    id: "bouncer-marshal",
    title: "Event Marshal / Nightlife Bouncer",
    location: "Delhi NCR, Goa, Bengaluru, Mumbai",
    type: "Flexible Shifts / Weekend Rotations",
    openings: "30 Vacancies",
    requirements: [
      "Imposing physical fitness and athletic conditioning",
      "Certified experience in crowd dispersion and defensive control",
      "Calm demeanor with strong verbal de-escalation skills",
      "Clean criminal and drug record check mandatory"
    ]
  },
  {
    id: "cctv-operator",
    title: "CCTV Control Room Operator",
    location: "Gurugram, Noida, Mumbai Central, Bengaluru",
    type: "Full-Time (Rotating Shifts)",
    openings: "10 Vacancies",
    requirements: [
      "Diploma / Degree with certification in Video Management Systems (VMS)",
      "Minimum 2 years experience in enterprise surveillance rooms",
      "Sharp observation skills and quick analytical incident response",
      "Familiarity with IP cameras, PTZ tracking, and backup archives"
    ]
  }
];
