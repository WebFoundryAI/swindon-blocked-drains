import { BRAND } from './brand';

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "blocked-drains-swindon-common-causes",
    title: "Blocked Drains in Swindon: The Most Common Causes",
    metaTitle: "Blocked Drains in Swindon: Most Common Causes | Expert Guide",
    metaDescription: "Discover the most common causes of blocked drains in Swindon homes. From chalk geology to tree root ingress, learn what affects drainage in Wiltshire.",
    excerpt: "Swindon's unique geology and rapid expansion have created specific drainage challenges. Here are the most common causes of blocked drains across the town.",
    content: `Blocked drains are one of the most frequent plumbing problems faced by Swindon homeowners. Understanding why blockages happen can help you prevent them — and know when to call a professional.

## Swindon's Geology and Its Effect on Drains

Swindon sits on a complex geological foundation of chalk, greensand, and Jurassic clay. These ground conditions affect how drainage pipes behave over time. Chalk can dissolve and shift, greensand allows water movement that puts pressure on pipe joints, and clay areas are prone to ground movement that can crack older drainage pipes. Many homes in established areas like Penhill, Walcot, and Park South have clay or pitch fibre drainage systems now several decades old.

## Fat, Oil, and Grease Buildup

The single most common cause of kitchen drain blockages in Swindon — and across the UK — is the accumulation of fats, oils, and grease. When you pour cooking fat down the sink, it cools and solidifies on the pipe walls. Over months and years, this layer thickens and catches food particles, eventually causing a full blockage. The solution is simple: never pour cooking fat down the drain.

## Wet Wipes and Non-Flushable Items

Despite the labelling, most wet wipes do not break down in drains and sewers. Swindon's water company regularly highlights wet wipes as a leading cause of sewer blockages across the network. Baby wipes, cleaning wipes, cotton pads, and sanitary products should all go in the bin, never down the toilet.

## Tree Root Ingress

Swindon has many mature trees in its older residential areas, particularly in Old Town, Wroughton Road, and the Victorian terraces near the town centre. Tree roots naturally seek moisture, and if your drainage pipes have any cracks or loose joints, roots will find their way in. Over time, root masses can completely block a pipe and cause structural damage.

## Hair and Soap Residue

Bathroom drain blockages are almost always caused by hair combined with soap residue. As hair accumulates in shower and bath drains, it forms a fibrous mass that traps soap scum and other debris. A simple drain guard can prevent most bathroom blockages.

## Rapid Development and Infrastructure Age

Swindon has grown faster than almost any other town in the UK over the past 50 years. Many of the drainage systems serving housing estates built in the 1960s through 1990s are now reaching the end of their designed lifespan. Pitch fibre pipes, common in 1960s and 1970s developments across north Swindon, are known to collapse and deform as they age.

## What to Do About a Blocked Drain

If you notice slow drainage, gurgling sounds, or bad smells, don't wait for the problem to escalate. Our engineers at ${BRAND.brandName} can clear most blockages on the first visit using [high-pressure drain jetting](/services/drain-jetting/). For recurring problems, a [CCTV drain survey](/services/cctv-drain-surveys/) will identify the underlying cause.

Call us on ${BRAND.phoneFormatted} or [contact us online](/contact/) for fast, professional drainage help across [Swindon](/locations/swindon/) and surrounding Wiltshire areas.`,
    author: "Swindon",
    publishDate: "2026-01-20",
    category: "Drain Maintenance",
    tags: ["blocked drains", "Swindon", "drain problems", "Wiltshire"],
    readingTime: 5,
    featured: true
  },
  {
    slug: "emergency-drain-unblocking-swindon",
    title: "Emergency Drain Unblocking in Swindon: What to Expect",
    metaTitle: "Emergency Drain Unblocking Swindon | What Happens When You Call",
    metaDescription: "Experiencing a drain emergency in Swindon? Find out exactly what happens when you call Blocked Drains Swindon for emergency drainage help — step by step.",
    excerpt: "A drain emergency can be stressful. Knowing what to expect when you call for help can make the situation much easier to manage.",
    content: `A blocked drain emergency can strike without warning — flooding water, sewage backup, or a completely blocked toilet can turn a normal day into a crisis. Here is exactly what happens when you call ${BRAND.brandName} for emergency help in Swindon.

## Step 1: Your Call Is Answered Immediately

When you call ${BRAND.phoneFormatted}, you speak directly to our team — not a call centre or answering service. Our trained operators take the details of your emergency and dispatch the nearest available engineer straight away. We ask for your address, the nature of the problem, and any relevant access details.

## Step 2: Engineer Dispatched Rapidly

We aim to have an engineer with you within 60 to 90 minutes for emergency callouts across Swindon and the surrounding Wiltshire area. Our engineers are positioned across the service area to minimise travel times. If you are in central Swindon, we can often arrive faster.

## Step 3: Initial Assessment on Arrival

On arrival, our engineer assesses the situation quickly and professionally. They identify the source of the blockage or failure, check whether multiple drains are affected, and establish safe access to the drainage system. This assessment takes around 10 to 15 minutes and is provided free of charge.

## Step 4: Clear, Fixed Quote Before Work Begins

Before any work starts, you receive a clear, fixed-price quote. There are no hidden charges, no surprises, and no pressure to proceed. The price we quote is the price you pay.

## Step 5: Blockage Clearance or Emergency Repair

Our engineers carry high-pressure jetting equipment, CCTV cameras, drain rods, and emergency repair materials on every vehicle. Most emergency blockages are cleared using high-pressure water jetting, which breaks up the blockage and flushes it away completely. Where pipe damage is found, we can often carry out temporary repairs on the same visit.

## Step 6: Camera Inspection and Report

After clearing the blockage, we carry out a brief CCTV inspection to confirm the drain is fully clear and to check for any underlying damage. We provide a plain-English explanation of what caused the problem and how to prevent it happening again.

## What to Do While Waiting

- Stop using all water-dependent appliances
- Open windows if there is a sewage smell
- Keep children and pets away from affected areas
- Move valuables away from flooded areas
- Document damage with photos for insurance purposes

## Call for Emergency Help Now

If you are experiencing a drain emergency in [Swindon](/locations/swindon/) or surrounding Wiltshire areas, call us immediately on ${BRAND.phoneFormatted}. Our [emergency drain services](/services/emergency-drain-services/) team is available 24 hours a day, 365 days a year.`,
    author: "Swindon",
    publishDate: "2026-01-15",
    category: "Emergency Services",
    tags: ["emergency drains", "Swindon", "drain unblocking", "24/7"],
    readingTime: 6,
    featured: true
  },
  {
    slug: "swindon-chalk-geology-drainage-problems",
    title: "Swindon's Chalk Geology: Why It Causes So Many Drainage Problems",
    metaTitle: "Swindon Chalk Geology and Drainage Problems | Expert Explanation",
    metaDescription: "Why does Swindon have so many drainage problems? The answer lies beneath your feet. Learn how Swindon's chalk and greensand geology affects your drains.",
    excerpt: "Swindon sits on a fascinating but challenging mix of chalk, greensand, and Jurassic clay. Understanding the geology helps explain why drainage problems are so common here.",
    content: `Swindon's drainage challenges are not just a product of its rapid expansion — they are rooted in the geology beneath the town. Understanding how chalk, greensand, and clay interact with your drainage system explains why certain types of problems are so common in different parts of Swindon.

## The Geological Foundation of Swindon

Swindon sits at the junction of several distinct geological formations. The town centre and much of the built-up area sits on Upper Greensand and Gault Clay, while the ridges to the south and east are underlain by chalk from the Marlborough Downs. The Vale of White Horse to the north brings Jurassic Oxford Clay. This geological complexity means ground conditions vary enormously even between neighbouring streets.

## How Chalk Affects Drainage

Chalk is porous and permeable. It absorbs water readily, which means that during periods of heavy rainfall, the water table in chalk areas can rise significantly. When the water table rises above the invert level of drainage pipes, it can force water back through the system — causing what engineers call groundwater infiltration. Properties in the chalk-influenced areas to the south and east of Swindon are particularly susceptible to this phenomenon.

Chalk can also dissolve slowly in acidic water, creating voids and cavities beneath drainage pipes. Over decades, this can cause subsidence that shifts and cracks pipes — leading to joint displacement and root ingress opportunities.

## Gault Clay and Greensand Challenges

The Gault Clay beneath much of central Swindon is highly plastic — it swells when wet and shrinks when dry. This seasonal movement puts constant stress on buried drainage pipes. In dry summers followed by wet winters, the ground movement can be enough to crack clay pipes and displace joints. Many drainage problems in the older parts of Swindon — around the Old Town and Victoria Road areas — stem from this geological behaviour.

## The Impact of Rapid Development

Swindon expanded rapidly on land that geologists and engineers did not always fully assess for long-term drainage implications. Housing estates built across greensand ridges and clay valleys in the 1970s and 1980s were connected to drainage systems designed for the geological conditions of the day. Decades of ground movement, tree root growth, and infrastructure ageing have created a significant legacy of drainage problems across these areas.

## Practical Implications for Swindon Homeowners

Understanding your local geology helps explain why:

- Drains in Swindon may need jetting more frequently than the national average
- Tree roots cause more drain damage in areas with chalk bedrock
- Some properties in north Swindon are particularly prone to infiltration during wet winters
- Older properties in central Swindon have a higher rate of joint displacement

If you are experiencing persistent drainage problems and standard clearing does not resolve them, a [CCTV drain survey](/services/cctv-drain-surveys/) will reveal whether geological factors are affecting your pipes. Where survey results show cracked, displaced, or deformed pipes, our [drain repair and pipe relining service](/services/drain-repairs/) offers trenchless fixes that restore full pipe integrity without excavating your garden or driveway. Our engineers understand Swindon's ground conditions and can advise on the most appropriate long-term solution.

Call ${BRAND.brandName} on ${BRAND.phoneFormatted} for expert drainage advice across [Swindon](/locations/swindon/) and the surrounding Wiltshire area.`,
    author: "Swindon",
    publishDate: "2026-01-10",
    category: "Drain Surveys",
    tags: ["Swindon geology", "chalk", "drainage problems", "Wiltshire"],
    readingTime: 7
  },
  {
    slug: "cctv-drain-surveys-swindon",
    title: "CCTV Drain Surveys in Swindon: Do You Need One?",
    metaTitle: "CCTV Drain Surveys Swindon | When You Need One & What It Shows",
    metaDescription: "Considering a CCTV drain survey in Swindon? Find out when you need one, what it reveals, and how it can save you thousands on drain repairs.",
    excerpt: "A CCTV drain survey uses a small camera to inspect your pipes from the inside. Here is when Swindon homeowners need one and what to expect.",
    content: `A CCTV drain survey is one of the most useful diagnostic tools available to homeowners and property buyers. In Swindon, where the combination of geological movement and ageing infrastructure creates complex drainage problems, CCTV surveys are particularly valuable.

## What Is a CCTV Drain Survey?

A CCTV drain survey involves inserting a small, waterproof camera into your drainage system via an access point such as a manhole or drain opening. The camera records high-definition footage of the pipe interior as it travels through the system. Our engineers watch the footage in real time and can pause, zoom, and annotate areas of concern.

## When Do Swindon Homeowners Need a CCTV Survey?

### Before Buying a Property

This is the most important time to commission a drain survey. Standard homebuyer surveys and even full building surveys do not inspect underground drainage. A pre-purchase CCTV survey can reveal expensive problems the seller may not know about — or may not be disclosing.

In Swindon, we regularly survey properties before purchase and find issues including:

- Collapsed pitch fibre pipes in properties from the 1960s and 1970s
- Root intrusion in tree-lined streets near the Old Town and Highworth Road
- Joint displacement caused by clay shrinkage in central Swindon
- Incorrect connections and illegal drainage configurations in older properties

### For Recurring Blockages

If your drains block repeatedly despite regular clearing, there is usually an underlying structural problem. A CCTV survey identifies whether the cause is a buildup of scale and grease, root ingress, pipe deformation, joint displacement, or a combination of factors.

### For Persistent Smells

Unexplained sewage smells inside or outside a property usually indicate a cracked pipe, a collapsed section, or a displaced joint. A CCTV survey locates the problem precisely, avoiding unnecessary excavation.

### As Part of Planned Maintenance

Commercial property managers and landlords with multiple drainage systems often commission annual CCTV surveys as part of a planned maintenance programme. Catching problems early is far cheaper than emergency repairs.

## What a Survey Report Contains

After the survey, you receive a detailed report including:

- HD video footage of the complete pipe run
- Screenshots of any defects found
- A description of each defect with its location and severity
- Recommendations for remedial work
- A no-obligation quote for any repairs required

Where defects are found, we can often carry out [drain repairs and pipe relining](/services/drain-repairs/) on the same visit or at a follow-up appointment, using trenchless methods that avoid unnecessary excavation.

## Cost and Value

A residential CCTV survey typically costs £150 to £350. Against the potential cost of discovering a collapsed pipe or root-damaged drainage system after you have purchased a property, this investment is extremely worthwhile. Many of our Swindon customers have used survey results to negotiate significant price reductions on properties.

Book your [CCTV drain survey](/services/cctv-drain-surveys/) in [Swindon](/locations/swindon/) today by calling ${BRAND.phoneFormatted} or [contacting us online](/contact/).`,
    author: "Swindon",
    publishDate: "2026-01-05",
    category: "CCTV Surveys",
    tags: ["CCTV survey", "Swindon", "drain inspection", "pre-purchase survey"],
    readingTime: 7,
    featured: true
  },
  {
    slug: "drain-maintenance-tips-swindon",
    title: "Drain Maintenance Tips for Swindon Homeowners",
    metaTitle: "Drain Maintenance Tips for Swindon Homeowners | Prevent Blockages",
    metaDescription: "Keep your drains clear in Swindon with these expert maintenance tips. Learn how to prevent blockages and spot problems before they become emergencies.",
    excerpt: "Simple, regular maintenance can prevent most blocked drain emergencies. Here are the most effective drain care habits for Swindon homeowners.",
    content: `Preventing blocked drains is far easier and cheaper than dealing with them after they have blocked. These practical maintenance tips are particularly relevant for Swindon homeowners given the area's geology and the age of drainage infrastructure in many parts of the town.

## Kitchen Drain Maintenance

### Never Pour Fats Down the Sink

The single most effective thing you can do to protect your kitchen drain is to keep fats, oils, and grease out of it. Let cooking fat cool in the pan and scrape it into a sealed container for disposal in your household waste. Even small amounts of fat poured regularly down the sink will build up over time.

### Use a Sink Strainer

A simple stainless steel strainer over your kitchen plughole catches food particles before they enter the drain. Empty it after every washing-up session. This inexpensive device prevents a significant proportion of kitchen blockages.

### Hot Water Flush Weekly

Once a week, boil a kettle and pour the water slowly down your kitchen drain. The heat helps dissolve grease films that may be starting to build on the pipe walls.

## Bathroom Drain Maintenance

### Use a Hair Catcher

Hair is the leading cause of bathroom blockages. A simple silicone drain catcher sits over the shower or bath plughole and collects hair before it enters the pipe. Clear it after every shower — it takes seconds and prevents a significant problem.

### Avoid Chemical Drain Cleaners

Regular use of chemical drain cleaners damages pipes over time, particularly older clay and pitch fibre systems common in Swindon. If you have a slow drain, try plunging or a drain snake first.

## Outdoor Drain Maintenance

### Keep Gullies Clear

Surface water gullies around the outside of your property collect leaves, moss, and debris. Check them seasonally and clear any accumulation that could restrict water flow. Blocked gullies cause surface water to pond against walls, increasing damp risk.

### Check Manhole Covers

Accessible manhole covers on your property can be lifted to check whether drains are running freely. If you see debris or signs of backup, call a professional before it becomes a full blockage.

## Annual Professional Maintenance

### Consider Annual Drain Jetting

For properties with persistent drainage problems, or those with older drainage systems, an annual [drain jetting](/services/drain-jetting/) session clears accumulated deposits before they cause a blockage. For properties in clay soil areas of Swindon, this can be particularly valuable.

### Pre-Winter Check

Before autumn and winter, ensure gutters and downpipes are clear and that surface water drainage around your property is unobstructed. Swindon's clay soils can become waterlogged in wet winters, increasing pressure on drainage systems.

## When to Call a Professional

If you notice any of the following, contact ${BRAND.brandName} promptly:

- Slow drainage in multiple fixtures simultaneously
- Gurgling sounds from drains or toilets
- Sewage smells inside or outside the property
- Water backing up into sinks, baths, or showers
- Visible wet patches near drain runs in the garden

Our [blocked drain service](/services/blocked-drains/) is available 24/7 across [Swindon](/locations/swindon/) and the surrounding Wiltshire area. Call us on ${BRAND.phoneFormatted} or [request help online](/contact/).`,
    author: "Swindon",
    publishDate: "2025-12-28",
    category: "Drain Maintenance",
    tags: ["drain maintenance", "Swindon", "blocked drains", "prevention tips"],
    readingTime: 6
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  const categories = BLOG_POSTS.map((post) => post.category);
  return [...new Set(categories)];
}

export function getRecentPosts(count: number = 5): BlogPost[] {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
}

// Blog posts related to each service - used for cross-linking on service pages
export const SERVICE_BLOG_POSTS: Record<string, string[]> = {
  "blocked-drains": ["blocked-drains-swindon-common-causes", "drain-maintenance-tips-swindon"],
  "drain-unblocking": ["blocked-drains-swindon-common-causes", "drain-maintenance-tips-swindon"],
  "cctv-drain-surveys": ["cctv-drain-surveys-swindon", "swindon-chalk-geology-drainage-problems"],
  "drain-jetting": ["drain-maintenance-tips-swindon", "blocked-drains-swindon-common-causes"],
  "emergency-drain-services": ["emergency-drain-unblocking-swindon", "blocked-drains-swindon-common-causes"],
  "drain-repairs": ["cctv-drain-surveys-swindon", "swindon-chalk-geology-drainage-problems"],
};

export function getRelatedBlogPosts(serviceSlug: string): BlogPost[] {
  const relatedSlugs = SERVICE_BLOG_POSTS[serviceSlug] || [];
  return relatedSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== undefined);
}
