/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  swindon: {
    neighborhoods: ["Westlea", "Walcot", "Penhill", "Park South", "Old Town", "Rodbourne", "Haydon Wick", "Pinehurst"],
    landmarks: ["the STEAM Museum", "Lydiard Park", "the Designer Outlet", "Coate Water Country Park", "Swindon Town Football Club"],
    drainageInfo: "Swindon's drainage challenges reflect the town's rapid post-war expansion across varied geological ground. Victorian clay pipes in the railway village, pitch fibre in 1960s-70s estates now at end of life, and clay-vale geology causing seasonal pipe stress across the town create a complex maintenance environment requiring specialist local knowledge.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian railway cottages, post-war semi-detached estates, modern family homes, converted commercial properties, and new-build developments"
  },
  "royal-wootton-bassett": {
    neighborhoods: ["High Street", "Brynards Hill", "Vastern", "Hook", "Templars Firs"],
    landmarks: ["the High Street", "St Bartholomew's Church", "the Town Hall", "the historic market cross"],
    drainageInfo: "Royal Wootton Bassett's drainage ranges from Victorian infrastructure beneath the historic High Street to modern estate drainage on the town's residential margins. Clay soils throughout create seasonal pipe stress, and the town's continued growth has placed increasing demand on the existing network.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "historic market town properties, Victorian and Edwardian terraces, modern family housing estates"
  },
  highworth: {
    neighborhoods: ["Eastrop", "Hampton", "Fresdon", "The Green", "Highworth Hill"],
    landmarks: ["the Market Place", "St Michael's Church", "the Town Hall", "Hannington Reservoir"],
    drainageInfo: "Highworth's elevated limestone ridge position provides good natural drainage fall but creates limescale buildup in pipes from calcium-rich groundwater. The historic town centre has older clay drainage, and the town's compact layout means drainage issues in one property can quickly affect neighbours.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Cotswold-stone market town properties, Victorian terraces, modern housing estates on the town margins"
  },
  wroughton: {
    neighborhoods: ["Ellendune", "Park Lane", "Westlea boundary", "High Street"],
    landmarks: ["Wroughton Airfield", "Barbury Castle", "St John the Baptist's Church", "the North Wessex Downs escarpment"],
    drainageInfo: "Wroughton's position on the chalk-clay geological boundary creates varied drainage conditions across the village. Properties on the chalk and greensand drain freely but face groundwater infiltration risks in wet winters, while those on clay experience seasonal pipe stress. The range of drainage materials from different development periods adds further complexity.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "historic village properties, 1980s-90s housing estates, rural boundary properties, modern family homes"
  },
  chippenham: {
    neighborhoods: ["Monkton Park", "Hardenhuish", "Pewsham", "Lowden", "Sheldon Road", "London Road"],
    landmarks: ["the River Avon", "Monkton Park", "St Andrew's Church", "Chippenham Museum", "the railway station"],
    drainageInfo: "Chippenham's riverside setting creates genuine flood risk in parts of the town and drainage surcharging during high river events. The town's varied development periods — from Victorian core to modern Pewsham estate — produce a wide range of drainage types and conditions requiring careful diagnosis.",
    responseTime: "typically within 75-90 minutes",
    propertyTypes: "Victorian riverside properties, Georgian town houses, Edwardian terraces, modern family estates, and commercial premises"
  },
  marlborough: {
    neighborhoods: ["High Street", "Blowhorn Street", "Hyde Lane", "Silverless Street", "College grounds"],
    landmarks: ["the College", "the Marlborough Mound", "the High Street", "St Mary's Church", "the River Kennet"],
    drainageInfo: "Marlborough's chalk geology creates distinctive drainage challenges including groundwater infiltration into pipes during wet winters and limescale buildup from calcareous water. The historic town centre has varied infrastructure reflecting centuries of occupation, and the Kennet floodplain creates river flood interaction risks.",
    responseTime: "typically within 75-90 minutes",
    propertyTypes: "historic coaching inns and commercial properties, Georgian townhouses, residential streets, Marlborough College associated properties"
  },
  purton: {
    neighborhoods: ["High Street", "Restrop", "Upper Pavenhill", "Church End", "Station Road"],
    landmarks: ["St Mary's Church", "Purton Museum", "the Thames-Severn Canal remnants", "the Village Green"],
    drainageInfo: "Purton's ridge position provides good drainage fall, but clay-vale soils on the surrounding lower ground create seasonal pipe stress typical of Wiltshire's clay belt. The village's range of property types from historic stone cottages to modern homes means maintenance requirements vary significantly across the settlement.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Cotswold-stone and brick cottages, Victorian village properties, modern family homes, rural farmhouses"
  },
  cricklade: {
    neighborhoods: ["High Street", "Calcutt Street", "Bath Road", "Abingdon Court Lane", "Cerney Wick"],
    landmarks: ["St Sampson's Church", "the Town Hall", "the River Thames", "North Meadow", "the Thames Path"],
    drainageInfo: "Cricklade's riverside position on the upper Thames and flat topography create unique drainage challenges. Limited natural drainage gradient means pipe settlement creates significant problems, and the river interaction can cause drainage backup during high water events. The ancient town has varied infrastructure ages beneath its historic streets.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Saxon and medieval town properties, Victorian terraces, riverside homes, modern housing estates"
  },
  "lydiard-millicent": {
    neighborhoods: ["Church Lane", "Shaw", "Back Lane", "The Street"],
    landmarks: ["Lydiard Park", "St Mary's Church Lydiard Tregoze", "the Village Green", "the Country Park lake"],
    drainageInfo: "Lydiard Millicent's clay-vale setting creates the seasonal shrink-swell ground movement that is the background cause of pipe stress and joint failure across central Wiltshire. Properties with mature garden trees face regular root ingress risk, and the area's flat terrain limits natural drainage fall.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "traditional Wiltshire village properties, rural cottages, modern rural family homes"
  },
  wanborough: {
    neighborhoods: ["Upper Wanborough", "Lower Wanborough", "Burycroft", "Foxhill Road"],
    landmarks: ["St Andrew's Church", "Liddington Hill", "Liddington Castle", "the Marlborough Downs escarpment"],
    drainageInfo: "Wanborough's position at the foot of the Marlborough Downs creates a chalk-clay transition drainage environment. Properties on the upper chalk drain freely but face infiltration risk in wet winters, while those on the lower clay experience seasonal ground movement. Long private drain runs through rural gardens require regular inspection.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "downland edge cottages and farmhouses, Victorian village properties, rural residential homes"
  },
  blunsdon: {
    neighborhoods: ["Blunsdon Village", "Abbey Meads", "Tadpole Garden Village", "Purton Road area"],
    landmarks: ["Blunsdon Abbey", "the Swindon and Cricklade Railway", "Blunsdon Station", "Abbey Meads Park"],
    drainageInfo: "Blunsdon combines historic village drainage with modern estate systems at the interface between Swindon's urban area and the rural north. The River Ray creates groundwater influence in lower areas, and the transition zones between different drainage eras in the village and estate areas require careful problem diagnosis.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "historic village properties, modern estate housing, new-build developments at Tadpole Garden Village"
  },
  "stratton-saint-margaret": {
    neighborhoods: ["Stratton Village", "Kingshill", "South Marston boundary", "Groundwell Road area"],
    landmarks: ["All Saints Church", "the A419/A361 junction", "Stanton Park", "Commonhead roundabout"],
    drainageInfo: "Stratton Saint Margaret's extensive post-war development means the parish has a high proportion of pitch fibre drainage now at or beyond end of life, combined with the clay-vale ground movement typical of northeast Swindon. Flat topography amplifies the effects of pipe settlement, and mature street trees add regular root ingress risk.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "1960s-80s semi-detached housing estates, modern family homes, infill development properties"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  swindon: {
    "blocked-drains": {
      intro: "Swindon's mix of Victorian railway cottages, 1960s-70s estates with aging pitch fibre pipes, and modern developments means blocked drains can affect virtually any property type across the town. Our engineers understand Swindon's complex drainage landscape and respond quickly to restore your system.",
      commonProblems: ["Fat and grease buildup in kitchen drains across the town", "Pitch fibre deformation causing repeated blockages in 1960s-70s estates", "Tree root intrusion in Old Town, Rodbourne, and Penhill's mature residential streets", "Debris accumulation in Victorian clay pipe sections", "Wet wipe blockages in high-density areas near town centre"],
      process: "We begin with a thorough assessment using CCTV cameras to confirm whether blockage is caused by accumulated debris or underlying structural pipe failure. High-pressure jetting clears most blockages rapidly, and where pitch fibre deformation is identified, we advise on relining options to provide a permanent solution.",
      localTip: "Properties in Swindon's 1960s-70s estates should consider a CCTV survey if blockages keep returning after clearing — pitch fibre deformation is the likely cause and requires pipe relining rather than repeated jetting."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Swindon, you need a fast response from engineers who know the area. Our teams are strategically positioned across Swindon to reach all parts of the town quickly — from Old Town and Westlea to Walcot and Penhill.",
      commonProblems: ["Kitchen sink blockages from cooking fat and food debris", "Bathroom drain clogs from hair and soap scum", "External drain blockages from autumn leaf falls", "Shared drainage issues in terraced properties", "Slow drains from partial pitch fibre collapse"],
      process: "Our engineers assess the affected drain or drains, identify whether the problem is localised or system-wide, and apply the appropriate clearing technique — rodding for simple blockages or high-pressure jetting for stubborn or recurring ones.",
      localTip: "If multiple drains are running slowly across your Swindon property simultaneously, the blockage is likely in the main drain rather than individual branch pipes — call us immediately as this tends to deteriorate quickly."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys are particularly valuable in Swindon given the town's complex mix of drainage ages and materials. A survey provides definitive diagnosis, avoiding unnecessary excavation and enabling targeted repairs.",
      commonProblems: ["Pitch fibre deformation invisible without internal camera inspection", "Root ingress through joint failures in clay drainage", "Ground movement displacement requiring relining rather than clearing", "Pre-purchase survey to identify legacy infrastructure issues"],
      process: "Our CCTV cameras access your drainage system through manholes or drain openings and produce HD footage of the complete pipe run. We provide a written report with footage, defect descriptions, and repair recommendations.",
      localTip: "Any Swindon property built before 1985 benefits from a CCTV survey before purchase — pitch fibre deformation and ageing clay pipe issues are invisible from outside but clearly visible on camera."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Swindon's ageing drainage systems. Our jetting equipment reaches pressures up to 4,000 PSI to cut through even the most compacted blockages.",
      commonProblems: ["Fat and scale buildup in properties with older drainage", "Root masses in clay pipe systems across mature residential areas", "Accumulated silt in flat-run drains with limited gradient", "Grease deposits in commercial kitchen drainage"],
      process: "We select the appropriate jetting nozzle for your pipe size and condition, insert the hose, and work systematically through the blockage. After jetting, we confirm clearance with a camera inspection and advise on maintenance intervals.",
      localTip: "Annual preventative jetting of Swindon properties with pitch fibre or older clay drainage is far cheaper than emergency callouts — and helps identify developing problems before they cause complete blockage."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Swindon require rapid response. Our emergency team is available 24/7 across Swindon and the surrounding Wiltshire area, aiming to reach you within 60 to 90 minutes of your call.",
      commonProblems: ["Complete main drain blockage causing backup throughout property", "Sewage surcharging during heavy rain in low-lying areas", "Pitch fibre collapse causing sudden complete loss of drainage", "External flooding from blocked gully drains"],
      process: "Call us on 01793 608800 and our team will dispatch the nearest available emergency engineer immediately. They carry jetting equipment, CCTV, repair materials, and pumping equipment to handle the full range of emergency situations.",
      localTip: "If your Swindon property floods during heavy rain, call us immediately — some flooding is caused by collapsed drains that require emergency repair rather than just clearing."
    },
    "drain-repairs": {
      intro: "Drain repairs in Swindon range from simple joint sealing to complete pipe replacement. Our no-dig pipe relining technology is particularly valuable in Swindon where pitch fibre deformation and clay pipe deterioration are widespread.",
      commonProblems: ["Pitch fibre pipe deformation requiring structural relining", "Clay pipe joint failure from seasonal ground movement", "Root intrusion damage requiring patch or full relining", "Collapsed sections requiring excavation and replacement"],
      process: "We diagnose the extent of damage using CCTV, provide a clear repair recommendation and fixed quote, and carry out the repair using the most appropriate method — patch liner, full length relining, or excavation depending on the severity and location of damage.",
      localTip: "No-dig pipe relining is often possible in Swindon properties even where the damaged drain runs beneath an established garden, paved area, or building — avoiding the disruption and cost of excavation."
    }
  },
  "royal-wootton-bassett": {
    "blocked-drains": {
      intro: "From the historic High Street to the modern estates around Brynards Hill, our engineers cover the full range of Royal Wootton Bassett's property types and drainage infrastructure. Fast response from the Swindon base ensures prompt attendance.",
      commonProblems: ["Fat and grease accumulation in kitchen drains", "Root ingress in the tree-lined streets near the High Street", "Debris buildup in older clay systems in the town centre", "Capacity issues in the drainage serving newer estate properties"],
      process: "We assess the drainage system thoroughly, using CCTV where appropriate, and apply high-pressure jetting to clear blockages while checking for any underlying structural issues.",
      localTip: "Properties in Royal Wootton Bassett's historic core near the church and High Street should request a CCTV survey if drainage problems persist — the older infrastructure here benefits from specialist investigation."
    },
    "emergency-drain-services": {
      intro: "Emergency drainage callouts in Royal Wootton Bassett are typically attended within 60 to 75 minutes of your call. Our engineers carry full emergency equipment to handle flooding, sewage backup, and complete blockage situations.",
      commonProblems: ["Complete blockage causing backup throughout property", "Sewer surcharging during heavy rain", "External flooding from blocked gullies"],
      process: "Call 01793 608800 for immediate emergency dispatch. Our engineer will assess the situation, provide a fixed quote, and work to restore drainage as rapidly as possible.",
      localTip: "For Royal Wootton Bassett emergencies during business hours, we can often attend faster than the standard estimate — call us to get the most accurate arrival time based on current demand."
    },
    "cctv-drain-surveys": {
      intro: "CCTV surveys in Royal Wootton Bassett help identify the causes of persistent drainage problems and provide essential information for property buyers in this desirable market town.",
      commonProblems: ["Pre-purchase surveys for the growing property market", "Identifying root ingress sources in older properties", "Mapping private drain runs in older town centre properties"],
      process: "We access the drainage via manholes or drain openings and survey the complete system, producing a detailed written report with HD footage and repair recommendations.",
      localTip: "Prospective buyers of period properties in Royal Wootton Bassett should always commission a drain survey before exchange — the mix of drainage ages in the town means hidden problems are not uncommon."
    },
    "drain-jetting": {
      intro: "High-pressure jetting clears blockages and maintains drain health across Royal Wootton Bassett's varied property types, from the Victorian town centre to modern estates.",
      commonProblems: ["Fat and scale deposits in older drainage", "Organic debris in garden drain runs", "Annual maintenance for properties with known root ingress risk"],
      process: "We select the appropriate jetting pressure and nozzle for your pipe material and condition, clear the blockage thoroughly, and confirm clearance with a follow-up inspection.",
      localTip: "Annual preventative jetting is particularly cost-effective for Royal Wootton Bassett properties where tree roots have been found near drainage runs."
    },
    "drain-repairs": {
      intro: "Drain repairs in Royal Wootton Bassett use no-dig techniques wherever possible, protecting established gardens and period property features.",
      commonProblems: ["Joint failure in older clay drainage", "Root damage requiring sealing", "Isolated pipe section replacement"],
      process: "CCTV diagnosis confirms the repair requirement, and we carry out the most appropriate repair method with a fixed price agreed before work begins.",
      localTip: "No-dig repairs are particularly valuable in Royal Wootton Bassett's period properties where excavation would disturb established gardens or period paving."
    },
    "drain-unblocking": {
      intro: "Fast drain unblocking across all of Royal Wootton Bassett, from the town centre to surrounding villages. Our engineers carry full unblocking equipment and can resolve most problems on the first visit.",
      commonProblems: ["Kitchen drain blockages from fat accumulation", "Bathroom drain clogs from hair", "External gully blockages from leaves"],
      process: "We assess and clear the blockage using the most appropriate method, confirm the drain is running freely, and provide aftercare advice.",
      localTip: "If your Royal Wootton Bassett drain blocks repeatedly in the same location, it usually indicates a structural problem that needs CCTV investigation rather than repeat clearing."
    }
  },
  highworth: {
    "blocked-drains": {
      intro: "Highworth's elevated position and limestone geology create distinctive drainage challenges. Our engineers understand how the local geology affects drain behaviour and respond quickly to blockages across the town.",
      commonProblems: ["Limescale buildup from calcium-rich groundwater", "Root ingress in properties with mature garden trees", "Debris accumulation in older clay systems beneath the town centre"],
      process: "We diagnose the blockage cause using CCTV where appropriate, apply targeted high-pressure jetting, and provide advice on the limescale management that is particularly relevant in Highworth.",
      localTip: "Highworth's hard limestone water creates limescale deposits in drains that benefit from periodic acid descaling — ask us about our maintenance jetting programme for properties in the area."
    },
    "emergency-drain-services": {
      intro: "Emergency response to Highworth is typically within 60 to 75 minutes. Our engineers are equipped to handle all emergency situations across this hilltop market town.",
      commonProblems: ["Complete blockage from sudden limescale or root failure", "External flooding during heavy rain", "Sewage backup in older properties"],
      process: "Call 01793 608800 for immediate dispatch. Emergency engineers carry full equipment including CCTV, jetting gear, and repair materials.",
      localTip: "Highworth's position on the ridge can experience more challenging weather conditions than Swindon below — emergency drainage problems in winter can be exacerbated by frost heave in exposed pipe runs."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys in Highworth reveal the distinctive drainage challenges of this limestone ridge town, from root ingress in the Historic core to limescale restrictions in older pipe systems.",
      commonProblems: ["Identifying limescale restriction before complete blockage", "Root damage assessment in mature residential areas", "Pre-purchase surveys for Highworth's desirable property market"],
      process: "Full drainage survey with HD footage report, defect descriptions, and practical repair recommendations suited to Highworth's property types.",
      localTip: "Properties in Highworth's conservation area benefit from a CCTV survey every five years to monitor the condition of older drainage infrastructure."
    },
    "drain-jetting": {
      intro: "High-pressure jetting in Highworth addresses the specific challenge of limescale deposits that build up in drainage pipes due to the area's calcium-rich groundwater.",
      commonProblems: ["Limescale restriction requiring specialist descaling", "Root mass removal", "Annual maintenance to prevent scale accumulation"],
      process: "We use specialist descaling nozzles and controlled acid treatment where appropriate to address Highworth's limescale challenge, alongside standard high-pressure water jetting.",
      localTip: "Annual preventative jetting is particularly cost-effective in Highworth where limescale accumulation is an ongoing maintenance issue rather than a one-off problem."
    },
    "drain-repairs": {
      intro: "Drain repairs in Highworth use no-dig techniques wherever the limestone geology and conservation area setting makes excavation particularly challenging or expensive.",
      commonProblems: ["Joint repair in limestone-influenced drainage", "Root ingress sealing", "Patch repairs to older clay drainage"],
      process: "CCTV diagnosis followed by the most appropriate repair method — patch liner, full relining, or targeted excavation — with a fixed price agreed before work begins.",
      localTip: "In Highworth's conservation area, no-dig pipe relining avoids the planning considerations and disruption associated with excavation in historic streetscapes."
    },
    "drain-unblocking": {
      intro: "Fast drain unblocking across Highworth and surrounding villages. Our engineers understand the specific challenges of this limestone ridge town and arrive equipped to deal with both standard blockages and limescale-related restrictions.",
      commonProblems: ["Kitchen drain blockages combined with scale restriction", "Bathroom drain clogs", "External gully blockages"],
      process: "We assess, clear, and confirm drainage is free-flowing, providing advice on maintaining clear drains in Highworth's hard water environment.",
      localTip: "If your Highworth drain runs slowly rather than blocking completely, limescale restriction is a common cause — it responds well to professional jetting."
    }
  }
};

export function getLocationData(slug: string): LocationData | null {
  return LOCATION_DATA[slug] || null;
}

export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  return LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with Wessex Water infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and Wessex Water"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Swindon and surrounding Wiltshire areas"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Swindon and surrounding Wiltshire areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Swindon and surrounding Wiltshire areas. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Swindon and surrounding Wiltshire areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}
