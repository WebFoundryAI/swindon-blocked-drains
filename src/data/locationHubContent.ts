/**
 * Location hub page content: Drainage profiles, landmarks, FAQs, and case studies
 * Each location has unique, genuinely researched content optimized for SEO and user experience
 */

export interface LocationHubFAQ {
  question: string;
  answer: string;
}

export interface LocationHubContent {
  landmarks: string[];
  drainageProfile: string;
  localFAQs: LocationHubFAQ[];
  caseStudy: string;
}

export const LOCATION_HUB_CONTENT: Record<string, LocationHubContent> = {
  swindon: {
    landmarks: [
      "Swindon Designer Outlet",
      "STEAM Museum of the Great Western Railway",
      "Lydiard Park",
      "Wyvern Theatre",
      "Swindon Town Football Club",
      "Coate Water Country Park",
      "Old Town Gardens",
      "Swindon Museum and Art Gallery",
      "Mechanics' Institution",
      "The Corn Exchange",
      "McArthurGlen Designer Outlet",
      "Magic Roundabout",
      "Fleming Way",
      "North Star Complex",
      "Blunsdon Abbey"
    ],
    drainageProfile: `Swindon's drainage landscape reflects a town that grew from a small market settlement into one of England's most rapidly expanded post-war towns. The original railway town established by Brunel and the GWR in the 1840s sits alongside housing estates built at extraordinary pace from the 1950s through to the 1990s, each generation of development bringing different drainage materials, standards, and challenges.

The geology beneath Swindon is a key driver of drainage behaviour. The town sits at the boundary of several geological formations — Upper Greensand and Gault Clay dominate the lower central areas, while chalk influences the higher ground to the south and east toward the Marlborough Downs, and Oxford Clay underlies the northern vale. This geological variety creates dramatically different drainage conditions across the town: properties on Gault Clay experience shrink-swell movement that stresses buried pipes seasonally, while chalk-influenced areas see water table fluctuations that can cause infiltration into drainage systems during wet winters.

The GWR railway works gave Swindon a concentrated industrial heritage zone, now largely redeveloped as the Designer Outlet and STEAM Museum. The original Victorian grid of railway workers' cottages in Rodbourne and Even Swindon feature some of Swindon's oldest drainage infrastructure — vitrified clay pipes now approaching 150 years old in some cases. These Victorian systems were designed for far lighter household use than modern demands require, and their condition varies enormously depending on the ground conditions they pass through and whether they have been maintained or upgraded over the decades.

The rapid post-war expansion produced housing estates across north, west, and east Swindon in the 1960s and 1970s that were commonly fitted with pitch fibre pipes. This material was widely used as a cheaper alternative to clay during the postwar building boom, but pitch fibre has a design life of around 40 to 50 years — meaning large swathes of Swindon housing stock now has drainage systems at or beyond the end of their intended service life. Pitch fibre pipes deform under ground pressure, creating a distinctive oval or collapsed cross-section that restricts flow and traps debris.

Swindon's continued growth into the 1980s and 1990s brought uPVC plastic drainage, which ages better but still requires maintenance and is subject to joint failure in areas with significant ground movement. The newer developments at Wichelstowe, Commonhead, and on the eastern expansion zones feature modern drainage systems designed to contemporary standards, but connecting these to the town's ageing Victorian and postwar network creates transition zones that need careful management.

Our engineers have extensive experience with Swindon's full range of drainage types and ground conditions. We routinely work with Victorian clay, postwar pitch fibre, 1980s uPVC, and modern MDPE systems, and we understand how Swindon's geological variety affects each property's drainage behaviour. Whether your problem is in an Edwardian railway cottage in Even Swindon, a 1970s semi in Penhill, or a modern home in Wichelstowe, we bring genuinely local expertise to every job.`,
    localFAQs: [
      {
        question: "Why are pitch fibre pipes such a problem in Swindon?",
        answer: "Pitch fibre pipes were widely used in the housing estates built across Swindon in the 1960s and 1970s. These pipes have a design life of 40 to 50 years, which means they are now reaching or beyond the end of their service life across large parts of north and west Swindon. Ground pressure causes pitch fibre to deform from a round cross-section to an oval or collapsed shape, restricting flow and causing frequent blockages. Areas including Penhill, Pinehurst, Moredon, and Park North are particularly affected. A CCTV survey can confirm whether pitch fibre deformation is causing your drainage problems."
      },
      {
        question: "How does Swindon's clay geology affect drainage pipes?",
        answer: "Much of central Swindon sits on Gault Clay, which is highly plastic — it expands when wet and contracts when dry. This seasonal movement, sometimes called shrink-swell, can be significant enough to crack or displace buried drainage pipes. Properties in areas like Old Town, Rodbourne, and Haydon Wick that experience this ground movement may find that drain joints separate or pipes crack with no obvious single cause. The result is gradual deterioration that gets worse over time. No-dig pipe relining is often the most cost-effective solution in these areas."
      },
      {
        question: "Is flooding a risk in Swindon?",
        answer: "Parts of Swindon do experience localised flooding during heavy rainfall. Areas near the River Ray, the Cole, and the upper Thames tributaries in the north of the town face the greatest river flood risk. The combined sewer system in older parts of Swindon can also be overwhelmed during intense rainfall events, causing surface water flooding and sewer surcharging. Properties in low-lying areas of Rodbourne, parts of Walcot, and near the Wiltshire Water Park have experienced flooding. Thames Water manages the public sewer network and has an overflow reporting system for sewer flooding incidents."
      },
      {
        question: "Are there areas of Swindon particularly prone to tree root drain damage?",
        answer: "Yes. The older residential areas of Swindon — particularly the Victorian and Edwardian streets of Old Town, the railway village of Even Swindon, and mature estates in Lawn and Rodbourne — have large, established trees whose root systems pose a significant risk to drainage pipes. Tree roots seek out any crack or loose joint in a pipe, enter through it, and grow to fill the available space, eventually causing complete blockage and structural pipe damage. Annual CCTV surveys are particularly recommended for properties in tree-lined streets in Swindon's older residential areas."
      }
    ],
    caseStudy: `Recent call-out to a semi-detached property in Penhill: The homeowners reported persistent slow drainage throughout the house — both upstairs bathrooms draining slowly and the kitchen drain gurgling after use. Previous attempts by a local plumber to rod the drains had provided temporary relief but the problem returned within days. Our CCTV survey revealed a classic pitch fibre deformation problem: a 12-metre section of the main drain run beneath the rear garden had collapsed from its original circular cross-section to a near-oval shape, reducing the pipe's flow capacity by approximately 60%. The oval shape was acting as a trap for debris, causing rapid re-blocking after rodding cleared the immediate obstruction. The homeowners opted for structural pipe relining — a trenchless repair that inserts a resin-impregnated liner into the existing pipe and cures it in place, restoring circular cross-section and full flow capacity without excavating the garden. The repair was completed in a single day. Result: full drainage restored with a 10-year warranty on the liner. Tip: if you live in a Swindon property built between 1955 and 1980 and experience recurring blockages despite regular clearing, pitch fibre deformation is a likely cause — and a CCTV survey will confirm it quickly.`
  },

  "royal-wootton-bassett": {
    landmarks: [
      "Royal Wootton Bassett High Street",
      "St Bartholomew and All Saints Church",
      "Town Hall (Royal Wootton Bassett)",
      "Wootton Bassett Museum",
      "The Cross",
      "Whitehill Community Park",
      "Brynards Hill",
      "Royal Wootton Bassett Academy"
    ],
    drainageProfile: `Royal Wootton Bassett, granted its Royal prefix in 2011 in recognition of its civic dignity during the repatriation of fallen service personnel, is a market town with drainage characteristics shaped by both its historic core and significant modern residential expansion. The town sits on a low ridge between the Vale of White Horse to the north and the Brinkworth Brook valley to the south, with drainage running toward both.

The historic town centre along the High Street features properties ranging from medieval timber-framed buildings to Georgian townhouses, most connected to drainage infrastructure that has been progressively upgraded over the centuries. The older clay pipe systems beneath the High Street and surrounding streets are now subject to the same geological stresses as those found across the broader Wiltshire clay belt — seasonal shrinkage and swelling that stresses pipe joints and can cause displacement over time.

The extensive residential development around Royal Wootton Bassett from the 1970s onward — in areas including Brynards Hill, Vastern, and the newer estates to the west — brought a mix of pitch fibre and uPVC drainage that now presents varying degrees of maintenance requirements. The town's continued growth has placed increasing pressure on the combined sewerage network.

Our engineers regularly serve Royal Wootton Bassett and understand the drainage challenges specific to this market town, from the Victorian infrastructure beneath the High Street to the ageing estate drainage in the surrounding residential areas.`,
    localFAQs: [
      {
        question: "Are older properties in Royal Wootton Bassett more prone to drainage problems?",
        answer: "Yes. The historic properties along the High Street and the streets around the church and Town Hall have drainage systems that in some cases date back many decades. Clay pipes beneath these older properties are subject to ground movement and root ingress, and the layout of older drainage networks is often more complex and harder to access than modern systems. A CCTV survey is particularly useful for older properties in the town centre."
      },
      {
        question: "How quickly can you get to Royal Wootton Bassett?",
        answer: "Royal Wootton Bassett is approximately 8 miles from central Swindon. We can typically reach you within 60 to 90 minutes for emergency callouts. For scheduled appointments, we offer flexible booking to suit your availability."
      },
      {
        question: "Do you cover the surrounding villages near Royal Wootton Bassett?",
        answer: "Yes. We cover Royal Wootton Bassett and the surrounding villages including Brinkworth, Minety, Bremhill, Calne Without, and other communities in the area. If you are unsure whether we cover your specific location, call us on 01793 608800 and we will confirm."
      }
    ],
    caseStudy: `Call-out to a Victorian semi-detached house near the church in Royal Wootton Bassett: The owner reported sewage smell in the cellar during heavy rain. CCTV investigation revealed a cracked section of clay pipe at a depth of approximately 1.2 metres beneath the cellar floor, where the pipe passed through a clay-filled trench that had been expanding and contracting with seasonal moisture changes. The crack allowed groundwater to infiltrate the pipe during wet periods — and allowed foul odours to escape into the cellar. We carried out a localised pipe repair using a patch liner, sealing the crack without excavation and restoring the pipe's integrity. Result: the damp smell cleared within a week, with no disruption to the property's period features or the cellar floor. Tip: sewage smells in older Royal Wootton Bassett properties, particularly during or after rain, often indicate a cracked pipe rather than a blockage — and require investigation rather than just clearing.`
  },

  highworth: {
    landmarks: [
      "Highworth Parish Church of St Michael",
      "Highworth Town Hall",
      "Highworth Market Place",
      "Hannington Reservoir",
      "Highworth War Memorial",
      "Cole River",
      "Highworth Rec",
      "Beacon Hill"
    ],
    drainageProfile: `Highworth stands on a prominent limestone ridge above the Upper Thames Valley, some 400 feet above sea level, with commanding views across to the Cotswolds and the Vale of the White Horse. This elevated position creates distinctive drainage characteristics — the town drains naturally toward the River Cole and Thames tributaries below, with good gravitational fall that would seem to favour drainage performance.

In practice, Highworth's limestone geology creates its own challenges. The Corallian limestone that forms the ridge is fractured and permeable, meaning water drains through the rock itself but also that the ground beneath drainage pipes is subject to dissolution cavities — voids created as limestone slowly dissolves over geological time. These voids can cause localised ground subsidence that shifts drainage pipes out of true.

The historic properties in Highworth's town centre and the surrounding stone-built streets have drainage systems that include some very old clay and stone work. The town's relative prosperity and historic character mean many properties retain original Victorian or even earlier drainage, and the challenge of working around existing structures in a conservation area makes repair work more complex.

The newer residential development on the margins of Highworth — particularly to the south and west toward Swindon — features more modern drainage systems that are generally in better condition but still require maintenance as they age.`,
    localFAQs: [
      {
        question: "Does Highworth's elevated position help with drainage?",
        answer: "Highworth's height above the valley floor does provide good natural drainage fall, which helps surface water drain away quickly. However, the limestone geology beneath the town can create ground stability issues that affect buried pipes, and the age of drainage infrastructure in the historic town centre means blockages and joint failures are relatively common. Good natural drainage gradients help water flow but don't prevent the pipe deterioration that causes most drainage problems."
      },
      {
        question: "Are there flooding risks in Highworth?",
        answer: "Highworth itself, being on high ground, has limited flood risk from rivers. However, properties at the base of the ridge and in the lower areas toward Hannington and the Cole valley can be affected by surface water flooding during extreme rainfall events. The town's drainage network can be overwhelmed during very heavy rain, causing localised ponding in low-lying streets."
      },
      {
        question: "How do you access drains in Highworth's older properties?",
        answer: "Older properties in Highworth's conservation area often have drainage systems with limited access points, particularly those converted from agricultural or commercial use. Our CCTV equipment can access most systems through existing inspection chambers or drain openings. For properties with very restricted access, we can advise on the most practical approach after an initial assessment."
      }
    ],
    caseStudy: `Call-out to a stone-built cottage near Highworth's market place: The owner had been experiencing slow drainage for several months, which had been worsening through winter. CCTV revealed a partial blockage caused by a combination of root ingress from a mature apple tree in the garden and a significant buildup of limescale — a common problem in Highworth where the limestone bedrock gives the local water a high calcium content. The tree roots had entered through a joint failure approximately 8 metres from the manhole. High-pressure jetting cleared the combined blockage in a single session. We recommended the root ingress point be sealed with a patch liner to prevent regrowth, which was completed the same day. Result: fully restored drainage with the root entry point sealed against future ingress. Tip: if you have fruit or ornamental trees in a Highworth garden, consider annual drain inspections — the root systems of established trees are one of the most common causes of drain damage in the area.`
  },

  wroughton: {
    landmarks: [
      "Wroughton Airfield (Science Museum Group)",
      "Ellendune Shopping Centre",
      "St John the Baptist and St Helen's Church",
      "Wroughton Reservoir",
      "Barbury Castle Iron Age Hill Fort",
      "North Wessex Downs AONB boundary",
      "Wroughton Village Hall",
      "Manor Farm"
    ],
    drainageProfile: `Wroughton sits on the northern scarp of the North Wessex Downs, directly south of Swindon, where the chalk downland meets the clay vale below. This geological boundary position gives Wroughton a particularly varied drainage character, with properties on the lower chalk experiencing good natural drainage while those on the clay deposits of the lower village face greater challenges.

The village has expanded significantly from its historic core, with housing development filling in the space between old Wroughton and the Swindon urban area through the 1980s and 1990s. This has created a patchwork of drainage infrastructure: older clay systems in the historic village centre, pitch fibre in the earlier expansion estates, and uPVC in the more recent developments.

The proximity to the North Wessex Downs AONB means that many properties have significant garden trees, and the chalk-influenced soils of the upper village area encourage mature root systems that pose a risk to drainage infrastructure. Barbury Castle and the open downland above Wroughton drain rapidly across the chalk, but this water reaches the clay vale below and can saturate lower-lying areas during extended wet periods.

Our engineers are familiar with Wroughton's position on this geological boundary and understand how it affects different properties across the village.`,
    localFAQs: [
      {
        question: "Is Wroughton affected by Swindon's drainage problems?",
        answer: "Wroughton has its own distinct drainage infrastructure that is separate from much of Swindon's town drainage. However, properties on the boundary between Wroughton and the Swindon urban area may be connected to the broader Swindon network. The village's main drainage challenges are the age of infrastructure in the historic centre and the geological variety created by its position on the chalk-clay boundary."
      },
      {
        question: "Do the chalk downlands above Wroughton affect local drainage?",
        answer: "The chalk downlands drain rapidly toward the village during heavy rainfall, which can increase surface water flow across Wroughton during storm events. The chalk-clay boundary creates a zone where water emerging from the permeable chalk meets the impermeable clay and tends to surface as springs or wet ground. Properties on this transition zone may experience higher groundwater levels than their neighbours on pure clay or pure chalk."
      },
      {
        question: "How quickly can you reach Wroughton for emergencies?",
        answer: "Wroughton is close to central Swindon and typically reachable within 45 to 60 minutes for emergency callouts. We cover all parts of the village including the historic centre, Ellendune, Park Lane, and the surrounding rural areas."
      }
    ],
    caseStudy: `Call-out to a 1980s detached house in the Ellendune area of Wroughton: The homeowners reported sewage backing up into the ground-floor toilet during heavy rain. Investigation revealed the problem was not a blockage but a partial collapse of the 4-inch uPVC main drain where it passed under the driveway — likely caused by vehicle loading over years that had cracked the pipe at a joint. During heavy rain, the restricted pipe was unable to handle the increased flow, causing backup. We excavated the driveway over a 2-metre section, replaced the damaged pipe section with a new solvent-weld connection, and restored the surface. Result: full drainage restored, no further backup even during heavy rainfall. Tip: if your driveway was laid over existing drainage pipes without adequate bedding or protection, vehicle loading over time can crack them — particularly plastic pipes installed in the 1970s and 1980s.`
  },

  chippenham: {
    landmarks: [
      "Chippenham Town Hall",
      "St Andrew's Church",
      "River Avon (Chippenham)",
      "Monkton Park",
      "Chippenham Museum",
      "Sheldon Road Shopping",
      "Hardenhuish Park",
      "Chippenham Station",
      "Pewsham Lakes"
    ],
    drainageProfile: `Chippenham is a thriving market town in west Wiltshire, set along the River Avon at a historic crossing point that has been occupied since Saxon times. The town's riverside setting creates genuine flood risk in parts of Chippenham, while its varied topography — from the flat floodplain near the river to the higher ground of Hardenhuish and Lowden — produces dramatically different drainage challenges across the town.

The River Avon poses the most significant flood risk to central Chippenham. Properties near the river in the town centre and along the Avon corridor have flooded on multiple occasions, and flood risk management is a key consideration for any drainage work in these areas. The interaction between the river level and town drainage can cause sewer surcharging during high river events.

Chippenham's historic core features some of Wiltshire's most varied drainage infrastructure, from medieval stone conduits near the market area to Victorian clay sewers, postwar pitch fibre, and modern plastic drainage in the extensive residential developments at Pewsham, Monkton Park, and beyond the bypass. The town's growth has continued at pace, with new developments creating further demand on the drainage network.

Our engineers serve Chippenham and the surrounding villages regularly, understanding both the riverside challenges of the town centre and the range of drainage systems found across this growing west Wiltshire market town.`,
    localFAQs: [
      {
        question: "Is flooding a serious risk in Chippenham?",
        answer: "Yes, parts of Chippenham are at genuine flood risk from the River Avon. The town centre and areas near the river have flooded on multiple occasions during high rainfall events. The Environment Agency publishes flood zone maps showing at-risk properties. If you live in a flood-risk area, it is worth considering backflow prevention devices to protect your property's drainage from sewer surcharging during flood events."
      },
      {
        question: "Do you cover properties in the newer Chippenham developments?",
        answer: "Yes. We cover all of Chippenham including established areas like Monkton Park and Hardenhuish, and newer developments at Pewsham, Chippenham North, and surrounding villages. Our engineers are familiar with the range of drainage systems found across the town's different development periods."
      },
      {
        question: "How do I know if my Chippenham property is in a flood zone?",
        answer: "The Environment Agency's Flood Map for Planning is available online and shows which properties are in Flood Zone 2 or 3 in Chippenham. Your local estate agent and solicitor can also advise on flood risk as part of a property purchase. If you are concerned about drainage and flood resilience in your existing property, a CCTV survey and drainage assessment can provide practical advice."
      }
    ],
    caseStudy: `Call-out to a Victorian terrace near Chippenham town centre: The owner had purchased the property recently and was experiencing sewage smells in the back garden, particularly after rain. A CCTV survey revealed a 3-metre section of original Victorian glazed clay pipe with multiple joint failures where the pipe passed through a section of the garden that had been surfaced with heavy paving. The weight of the paving had been applied without adequate structural support over the pipe, causing gradual deflection and joint separation over years. The separated joints allowed foul water to leak into the surrounding soil — causing the smell — and provided ideal entry points for root ingress. We carried out a full pipe lining of the affected section, restoring the pipe's watertightness without removing the paving. Result: smell eliminated, pipe sealed against future root ingress, no disturbance to the garden surface. Tip: before laying heavy paving or a patio over drainage pipes in a Chippenham garden, always confirm the pipe's condition with a CCTV survey and ensure adequate structural support is provided.`
  },

  marlborough: {
    landmarks: [
      "Marlborough College",
      "Marlborough High Street",
      "St Mary's Church",
      "St Peter's Church",
      "Marlborough Mound",
      "Silbury Hill (nearby)",
      "Avebury Stone Circle (nearby)",
      "Savernake Forest",
      "River Kennet",
      "Marlborough Downs"
    ],
    drainageProfile: `Marlborough is one of Wiltshire's most attractive market towns, renowned for its exceptionally wide High Street — one of the widest in England — and the prestigious Marlborough College. The town sits in the Vale of Pewsey at the confluence of the River Kennet's headwaters, surrounded by the chalk downland of the Marlborough Downs.

Marlborough's chalk geology is a defining characteristic of its drainage landscape. The town sits on and immediately adjacent to chalk that is highly permeable, creating conditions quite different from the clay areas of central Swindon. Groundwater levels in Marlborough can vary significantly between dry summers and wet winters, and rising winter water tables can infiltrate drainage systems — causing apparent surcharging even when there is no blockage present.

The River Kennet, which rises in springs near Marlborough, passes through the town and can flood during significant rainfall events. The Kennet's small catchment means it responds quickly to heavy downpours, and the river's interaction with the town's drainage network creates surcharging risk in low-lying areas near the river.

Marlborough's historic buildings — including properties associated with Marlborough College and the old coaching inns along the High Street — have drainage systems that reflect the town's centuries of occupation. Brick-built culverts, stone channel drainage, and Victorian clay sewers underlie the historic core, while the residential areas on the town's margins feature more modern drainage.`,
    localFAQs: [
      {
        question: "Does Marlborough's chalk geology affect drain performance?",
        answer: "Yes, significantly. Chalk is permeable, and winter groundwater rises in chalk areas can be dramatic. When the water table rises above the level of drainage pipe inverts, groundwater infiltrates into the drainage system — filling pipes with clean water that dilutes foul drainage and reduces capacity. This can cause apparent surcharging even when there is no blockage. Properties in low-lying areas near the Kennet are most affected. A CCTV survey during winter can identify infiltration points."
      },
      {
        question: "Is the Kennet a flood risk in Marlborough?",
        answer: "The River Kennet and its headwater streams can flood in Marlborough during significant rainfall. The river responds quickly to heavy rain on the chalk downs above the town. Properties near the river and in the lower parts of the High Street area are most at risk. Thames Water and the Environment Agency both monitor the river, and the EA's flood maps show at-risk properties in Marlborough."
      },
      {
        question: "How quickly can you reach Marlborough for drainage emergencies?",
        answer: "Marlborough is approximately 12 miles from central Swindon. We can typically reach the town within 75 to 90 minutes for emergency callouts. For non-emergency work, we offer flexible appointment times to suit your schedule."
      }
    ],
    caseStudy: `Call-out to a period property near Marlborough College: The owners reported that every wet winter their ground-floor drains ran slowly and gurgled, despite the drains running freely in summer. CCTV investigation confirmed groundwater infiltration — the camera revealed clear water flowing through joints in the old clay pipe system beneath the garden, effectively filling the drain from outside. The infiltration was occurring through multiple joint failures spread along a 15-metre pipe run beneath a lawn area, where seasonal shrinkage and swelling of the surrounding soil had gradually opened the joints. We carried out a full relining of the affected pipe run, sealing all joints and restoring watertightness. Result: the following winter saw no slow drainage for the first time in the owners' 12 years of ownership. Tip: if your Marlborough property experiences seasonal slow drainage that improves in summer, groundwater infiltration through cracked or separated pipe joints is the most likely cause — and pipe relining is the permanent solution.`
  },

  purton: {
    landmarks: [
      "St Mary's Church Purton",
      "Purton Museum",
      "Purton Ship Graveyard (Thames and Severn Canal)",
      "Thames and Severn Canal remnants",
      "Purton Village Green",
      "Restrop",
      "Upper Pavenhill"
    ],
    drainageProfile: `Purton is a large village northwest of Swindon, straddling the watershed between the Thames and Severn river systems. The village's elevated ridge position gives it good natural drainage in most directions, but the clay soils of the surrounding farmland and the varied geology of the ridge create specific challenges for drainage infrastructure.

The historic village centre around St Mary's Church and the High Street features a mix of Cotswold-stone and brick properties with drainage systems spanning several generations. The clay geology beneath much of Purton is subject to the shrink-swell movement that creates pipe stress across central Wiltshire, and the village's mix of older stone properties and newer estate houses means a wide range of drainage materials are in use.

The Thames and Severn Canal, which runs near the village, was once an important waterway but is now largely abandoned. Its former course and associated earthworks have created some unusual ground conditions in parts of the village area that can affect drainage behaviour.

Our engineers cover Purton and the surrounding hamlets of Restrop, Upper Pavenhill, and the wider parish area, providing both emergency and planned drainage services to this large village community.`,
    localFAQs: [
      {
        question: "Does Purton's ridge position help with drainage?",
        answer: "Purton's elevated position does provide good natural drainage fall, which helps surface water drain away from the village. However, the clay-rich soils surrounding the chalk and limestone core of the ridge create the same shrink-swell ground movement found across central Wiltshire, and this affects buried drainage pipes regardless of the good surface drainage. Older clay pipe systems in the village are subject to joint displacement from this movement."
      },
      {
        question: "Are there any flood risks in Purton?",
        answer: "Purton itself sits on high ground and is largely free from river flood risk. However, properties on the lower margins of the village toward the Ray Valley and the areas toward Cricklade can experience surface water flooding during very heavy rainfall. The village's combined sewer capacity can be strained during major storm events."
      },
      {
        question: "How do you serve Purton and the surrounding hamlets?",
        answer: "We cover Purton village centre and all the surrounding hamlets including Restrop, Upper Pavenhill, and the rural properties in the wider Purton parish. Response times for emergency callouts are typically 60 to 90 minutes. For scheduled work, we offer flexible appointment times."
      }
    ],
    caseStudy: `Call-out to a stone farmhouse on the edge of Purton: The owner reported a foul smell from an external gully drain that had been getting worse over several months. The drain appeared to be running but not freely. CCTV revealed an unusual problem — the clay main drain had partially collapsed at a point approximately 6 metres from the inspection chamber, creating a trap where fat and food waste was accumulating rather than flowing through to the sewer. The collapse had been caused by a large ash tree root that had grown laterally under the drain, lifting it enough to create a sag that reversed the drainage gradient locally. High-pressure jetting cleared the accumulated debris, and we carried out a structural relining of the collapsed section to restore the pipe's profile without excavating through the established garden. Result: drainage fully restored and odour eliminated. The tree was monitored and further root treatment was applied to prevent regrowth into the sealed pipe. Tip: mature trees on Purton's clay soils produce extensive lateral root systems that can affect drainage pipes even when the tree appears to be growing well away from the drain line — roots travel much further than the tree's canopy suggests.`
  },

  cricklade: {
    landmarks: [
      "St Sampson's Church Cricklade",
      "Cricklade Town Hall",
      "Cricklade Museum",
      "River Thames (upper)",
      "North Meadow National Nature Reserve",
      "Vale of White Horse boundary",
      "Cricklade Market Cross",
      "Thames Path National Trail"
    ],
    drainageProfile: `Cricklade is an ancient town of considerable historical significance — the only Wiltshire town on the River Thames, and one of the few Saxon-planned burhs that still retains elements of its original grid layout. The town's riverside position and flat topography create a drainage environment quite different from the hilltop and valley towns elsewhere in the Swindon service area.

The River Thames at Cricklade is at its upper course, emerging from its Cotswold sources just a few miles upstream. Despite being relatively small at this point, the Thames and its associated floodplain create genuine flood risk across parts of Cricklade, particularly in the low-lying areas near North Meadow. The North Meadow is designated as a National Nature Reserve and SSSI specifically because it still floods seasonally — and this same flooding dynamic affects drainage performance for properties near the river.

The flat topography around Cricklade creates drainage challenges because there is limited natural fall to drive wastewater away from the town. This means drainage systems rely more heavily on adequate pipe gradient than is necessary in hillier areas, and any settlement or displacement of pipes tends to create permanent low spots where debris accumulates.

Cricklade's ancient street plan means some of its drainage infrastructure is genuinely old, with Victorian and possibly pre-Victorian culverts and drains beneath the historic grid streets. The contrast between this older infrastructure and the modern housing on the town's fringes creates a transition zone that requires careful management.`,
    localFAQs: [
      {
        question: "How does living near the Thames affect drainage in Cricklade?",
        answer: "Cricklade's position on the upper Thames creates real flood risk for some properties. When the Thames floods, it can affect not just surface areas but the drainage network — high river levels can cause drainage to back up as the outfall is submerged. Properties in the lowest-lying areas near North Meadow and the riverside are most affected. Backflow prevention devices can be fitted to help protect properties from sewer backup during flood events."
      },
      {
        question: "Are Cricklade's older properties prone to drainage problems?",
        answer: "Yes. Cricklade's Saxon grid street plan means some properties sit above drainage infrastructure that is very old by modern standards. Victorian clay sewers in the historic town centre are subject to root ingress, joint failure, and the gradual deterioration that affects all clay drainage of this age. The flat topography also means that any disruption to pipe gradient — from settlement or displacement — tends to create permanent slow-drainage problems."
      },
      {
        question: "How quickly can you reach Cricklade for emergencies?",
        answer: "Cricklade is approximately 10 miles from central Swindon. We can typically reach the town within 60 to 75 minutes for emergency callouts, though response times can vary based on traffic and demand. We cover the town and surrounding villages including Kempsford, Latton, and Eisey."
      }
    ],
    caseStudy: `Call-out to a property in Cricklade town centre: The owner reported that the downstairs toilet was slow to flush and occasionally backed up. A CCTV survey of the drainage from street level revealed an unusual combination of issues — a significant fat and scale deposit reducing pipe capacity by around 40%, and behind this, a section of pipe that had settled by approximately 15mm creating a persistent sag. The flat topography around Cricklade means that even modest pipe settlement creates a significant drainage problem. High-pressure jetting cleared the fat and scale deposit in the first instance, restoring immediate drainage. We recommended localised pipe relining for the settled section to prevent the sag from accumulating future deposits. Result: restored drainage with a plan to address the structural issue in a future appointment. Tip: In Cricklade and other flat-terrain areas, even small amounts of pipe settlement can cause significant drainage problems because there is less natural fall to compensate — regular jetting is particularly valuable in these locations.`
  },

  "lydiard-millicent": {
    landmarks: [
      "Lydiard Park and Mansion",
      "St Mary's Church Lydiard Tregoze",
      "Lydiard Millicent Village Green",
      "Lydiard Country Park",
      "Lake at Lydiard Park",
      "Shaw Village"
    ],
    drainageProfile: `Lydiard Millicent is a village in the Vale of White Horse west of Swindon, sharing its name with the nearby Lydiard Tregoze and the historic Lydiard Park estate. The village sits on clay vale soils with some greensand influence, in an area that has seen modest residential development alongside its historic village core.

The proximity of Lydiard Park and its associated landscape — including the lake and parkland drainage system — creates an interesting drainage context for nearby properties. The parkland drains toward the Brinkworth Brook system, and the area's relatively flat terrain means there is limited natural fall in some drainage runs.

The village's drainage infrastructure reflects its mixed character — older clay drainage in the historic centre, varied estate drainage in the residential development areas, and the particular challenges of a clay-vale location with seasonal ground movement. Properties with mature garden trees face the perennial risk of root ingress that is common across Wiltshire's clay areas.

We cover Lydiard Millicent and the surrounding area including Shaw and the Lydiard Park environs as part of our broad Swindon service area.`,
    localFAQs: [
      {
        question: "Does the nearby Lydiard Park affect local drainage?",
        answer: "The Lydiard Park estate drainage primarily flows toward the Brinkworth Brook rather than affecting private drainage in Lydiard Millicent directly. However, the area's flat terrain and clay soils create the same challenges found across the Vale of White Horse — limited natural drainage fall and seasonal ground movement. Properties near the park boundary should ensure their private drainage is properly maintained."
      },
      {
        question: "What are the most common drainage problems in Lydiard Millicent?",
        answer: "The most common problems in Lydiard Millicent are root ingress from garden trees — particularly in properties with mature gardens — and the gradual joint failure that affects clay drainage pipes in clay-vale locations. The seasonal shrink-swell movement of Wiltshire clay is a background factor that slowly stresses older pipe systems over years."
      },
      {
        question: "How quickly can you reach Lydiard Millicent?",
        answer: "Lydiard Millicent is approximately 5 to 6 miles from central Swindon. We can typically reach the village within 45 to 60 minutes for emergency callouts."
      }
    ],
    caseStudy: `Call-out to a detached property in Lydiard Millicent: The homeowner had noticed a wet patch appearing in the garden over the previous winter that dried up in summer. Suspecting a drain problem, they commissioned a CCTV survey. The camera revealed a classic clay soil problem — a section of clay drain had been gradually displaced by a lateral crack that opened to approximately 8mm during winter wet periods and closed somewhat in summer, creating a seasonal leak that saturated the surrounding soil in winter. The joint had been stressed by decades of seasonal clay movement. We carried out patch lining of the affected joint section, sealing it permanently. Result: no further wet patches in the garden, confirmed by inspection after the following winter. Tip: seasonal wet patches in Wiltshire gardens that appear in winter and reduce in summer are often caused by drain joint failures that open with clay expansion — and they don't need to be excavated to be fixed.`
  },

  wanborough: {
    landmarks: [
      "St Andrew's Church Wanborough",
      "Wanborough Village Green",
      "Liddington Hill",
      "Liddington Castle",
      "Marlborough Downs",
      "Upper Wanborough",
      "Lower Wanborough"
    ],
    drainageProfile: `Wanborough is a Wiltshire village east of Swindon, nestled at the foot of the Marlborough Downs where the chalk escarpment meets the clay vale below. This transitional geological position gives Wanborough a distinctive drainage character — properties on the chalk or greensand above the village drain rapidly and freely, while those on the clay vale below face the seasonal movement issues that affect clay soils across the region.

The village has a clear upper and lower section — Upper Wanborough on the rising ground toward the Downs, and Lower Wanborough in the vale below. This topographic division corresponds broadly to the geological transition, with drainage performance varying between the two parts of the village.

The proximity of Liddington Hill and the open chalk downland above the village means that heavy rainfall on the Downs can produce significant surface water flows down the escarpment toward Wanborough. Properties in the lower village can experience surface water intrusion during major storm events.

Wanborough's relative rurality means drainage infrastructure in the older parts of the village is primarily private — connecting to the mains sewer network via long drain runs through agricultural land, which can create challenges for maintenance and inspection.`,
    localFAQs: [
      {
        question: "Do the Marlborough Downs create any drainage risks for Wanborough?",
        answer: "The chalk downs above Wanborough drain rapidly during heavy rainfall, and this water flows toward the village down the escarpment. In extreme events, surface water flows can overwhelm the drainage capacity in the lower village. The chalk also creates springs at the geological boundary where permeable chalk meets impermeable clay — and these spring lines can affect groundwater levels in the lower village during wet winters."
      },
      {
        question: "Are Wanborough's drainage systems mostly private?",
        answer: "Many properties in rural Wanborough have significant lengths of private drainage — connecting via long runs through gardens and agricultural land before joining the adopted public sewer. These private drain runs are the responsibility of the property owner and require periodic maintenance and inspection. Regular CCTV surveys help identify problems before they become emergencies."
      },
      {
        question: "How quickly can you reach Wanborough for emergencies?",
        answer: "Wanborough is approximately 6 to 8 miles from central Swindon. We can typically reach the village within 60 minutes for emergency callouts, though rural road conditions can affect this. We cover the whole village including Upper and Lower Wanborough and the surrounding rural properties."
      }
    ],
    caseStudy: `Call-out to a farmhouse property in Wanborough: The owner reported a blocked external drain that had been causing flooding in the yard during rain. Initial inspection found the gulley was heavily blocked with accumulated silt and organic matter. CCTV of the downstream drain revealed the root cause — a section of old clay pipe with a severe dip had been acting as a permanent silt trap for years, and the accumulated material had finally caused a complete blockage. High-pressure jetting cleared the immediate blockage. We then advised that the sagged section required either excavation and re-laying, or lining to fill the dip. The owner opted for pipe relining to avoid disturbing the yard surface. Result: drain restored to full function with the silt trap eliminated. Tip: long private drain runs in Wanborough's rural properties often have sections with compromised gradient — regular CCTV inspection identifies these before they cause blocked yard drains or flooding.`
  },

  blunsdon: {
    landmarks: [
      "Blunsdon Abbey",
      "Blunsdon Railway Station (Swindon and Cricklade Railway)",
      "Swindon and Cricklade Railway",
      "Blunsdon Village",
      "Abbey Meads",
      "Tadpole Garden Village",
      "River Ray"
    ],
    drainageProfile: `Blunsdon Saint Andrew is a village that has undergone significant transformation as Swindon has expanded northward, with the Abbey Meads development creating a large new residential area that now connects the historic village to the Swindon urban area. This combination of traditional village and modern suburban development creates a diverse drainage landscape.

The historic village centre around Blunsdon Abbey and the original settlement retains older drainage infrastructure, while Abbey Meads and the newer developments feature modern drainage systems designed to contemporary standards. The contrast between these two drainage eras — clay and early plastic in the village, modern MDPE and uPVC in the estates — creates a complex transition zone.

The River Ray, which rises near Swindon and flows northward through Blunsdon toward Cricklade and the Thames, influences the drainage of the lower-lying areas. The Ray's small catchment makes it responsive to rainfall, and it can run high during wet periods. Properties near the river or in the lower areas of the village toward the Ray corridor may experience elevated groundwater during winter.

The ongoing Tadpole Garden Village development north of Blunsdon is creating further new drainage infrastructure that will connect to the existing network, adding to the complexity of the area's drainage provision.`,
    localFAQs: [
      {
        question: "Does the new Abbey Meads development have better drainage than the old village?",
        answer: "Generally, yes. The Abbey Meads development was built to more modern drainage standards than the older village properties. Modern uPVC and MDPE pipes are more resistant to ground movement than the older clay and early plastic systems, and the development's drainage design incorporated contemporary surface water management requirements. However, even modern systems require maintenance and can develop problems — especially at connection points to the older village network."
      },
      {
        question: "Is the River Ray a flood risk in Blunsdon?",
        answer: "The River Ray can experience elevated flows during wet periods and has historically caused localised flooding in the broader Ray valley. Properties in the lower-lying areas between Blunsdon and the river corridor are most at risk. The Environment Agency's flood maps show the risk zones. The development of Tadpole Garden Village has incorporated flood risk mitigation measures to manage the Ray's behaviour in this area."
      },
      {
        question: "How do you serve both the old village and Abbey Meads?",
        answer: "We serve the entire Blunsdon area including the historic village centre, Abbey Meads, and the expanding developments toward Tadpole Garden Village. Our engineers are familiar with the full range of drainage types in the area — from older clay systems in the village to modern drainage on the newer estates."
      }
    ],
    caseStudy: `Call-out to a property in Abbey Meads, Blunsdon: The homeowners had noticed that the kitchen drain was slow and the dishwasher was not draining properly. A standard camera inspection of the kitchen drain revealed the immediate cause — a significant fat and food waste blockage approximately 4 metres from the kitchen entry point. However, extending the survey further along the drain revealed a more significant issue: where the modern Abbey Meads estate drainage connected to the older pipe from the original Blunsdon village network, there was a significant diameter change and a step in the pipe invert that was acting as a chronic debris trap. High-pressure jetting cleared the immediate blockage, and we recommended a regular annual jetting programme to manage the transition point until a permanent solution can be incorporated into future drainage works. Result: immediate drainage restored, long-term management plan agreed. Tip: where new development drainage connects to existing older networks, transition points can create chronic debris accumulation — annual jetting is a cost-effective way to manage these problem areas.`
  },

  "stratton-saint-margaret": {
    landmarks: [
      "Stratton Saint Margaret Village Hall",
      "All Saints Church Stratton",
      "Swindon Junction (A419/A361)",
      "Commonhead Roundabout",
      "Haydon Wick boundary",
      "Stanton Park"
    ],
    drainageProfile: `Stratton Saint Margaret is a large parish northeast of Swindon that has been substantially absorbed into the Swindon urban area through decades of residential development. The original village core around All Saints Church retains some character as a distinct settlement, but is now surrounded by extensive housing estates that form a continuous urban area with the rest of Swindon.

The parish sits on clay vale soils that are typical of the area northeast of Swindon — similar geology to Haydon Wick and the northern Swindon suburbs. The clay soils produce the seasonal shrink-swell movement that stresses buried drainage pipes, and the area's extensive post-war housing development means a significant proportion of the drainage infrastructure dates from the 1960s through 1980s — the era when pitch fibre pipes were widely used.

The area has been subject to substantial infill development and redevelopment in more recent decades, particularly along the A419 and A361 corridors. This has created a patchwork of drainage infrastructure from different eras, connecting to the Swindon network in various ways that can complicate problem diagnosis.

The flat topography characteristic of the clay vale northeast of Swindon provides limited natural drainage gradient, making the area more susceptible to the effects of pipe sagging and settling than hillier parts of the service area.`,
    localFAQs: [
      {
        question: "Is Stratton Saint Margaret affected by the same pitch fibre pipe problems as other parts of Swindon?",
        answer: "Yes. Stratton Saint Margaret's substantial development during the 1960s and 1970s means that pitch fibre drainage is present across many properties in the parish. The same deformation and collapse problems found in Penhill, Pinehurst, and other parts of north Swindon occur in Stratton Saint Margaret, and a CCTV survey is the most reliable way to determine whether pitch fibre deformation is affecting your drainage."
      },
      {
        question: "What are the main drainage problems in the area?",
        answer: "The most common drainage problems in Stratton Saint Margaret are pitch fibre deformation in older estate properties, root ingress in areas with mature street trees, fat and grease blockages in properties with original kitchen drainage, and the gradual joint failure associated with clay soil movement. The flat topography also means that pipe settlement creates more significant problems here than in hillier areas."
      },
      {
        question: "How quickly can you reach Stratton Saint Margaret?",
        answer: "Stratton Saint Margaret is adjacent to the Swindon urban area and we can typically reach properties in the parish within 45 to 60 minutes for emergency callouts. We cover all parts of the parish including the village centre, Kingshill, and properties along the A419 and A361 corridors."
      }
    ],
    caseStudy: `Call-out to a 1970s semi-detached property in Stratton Saint Margaret: The owner reported that the garden was occasionally waterlogged in an area that seemed unrelated to the weather — even after dry spells there was a persistent damp patch near the side of the house. Investigation with a CCTV camera revealed a hairline crack in the underground soil pipe running along the side of the property — the crack was large enough to allow slow seepage but not visible from the surface. The crack had been caused by a combination of root pressure from a mature conifer nearby and the seasonal clay movement that is common in the area's soils. A localised patch repair sealed the crack from inside without any excavation. Result: the damp patch in the garden disappeared within a few weeks as the surrounding soil dried out. Tip: persistent damp patches in gardens that don't correspond to rainfall patterns often indicate a cracking drain pipe nearby — CCTV investigation is far less disruptive than digging to find the source.`
  }
};

export function getLocationHubContent(slug: string): LocationHubContent | null {
  return LOCATION_HUB_CONTENT[slug] || null;
}
