import { Layout } from "@/components/layout/Layout";
import { LocationsGrid } from "@/components/sections/LocationsGrid";
import { CTASection } from "@/components/sections/CTASection";
import { RouteSEOHead } from "@/components/seo/RouteSEOHead";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Breadcrumbs } from "@/components/nav/Breadcrumbs";
import { BRAND } from "@/config/brand";
import { LOCATIONS } from "@/config/locations";
import { generateLocalBusinessSchema, generateLocationsListSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";

const breadcrumbItems = [{ label: "Areas We Cover" }];

const Locations = () => {
  return (
    <Layout>
      <RouteSEOHead />
      <SchemaScript schema={[
        generateLocalBusinessSchema(),
        generateLocationsListSchema(LOCATIONS),
        generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Areas We Cover", url: "/locations" },
        ]),
      ]} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay py-16 md:py-20">
          <div className="container-wide px-4 text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Areas We Cover</h1>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Professional Drainage Services Across Swindon &amp; Surrounding Areas
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-wide px-4">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
              {BRAND.brandName} is proud to serve homeowners and businesses throughout {BRAND.serviceAreaLabel} and the surrounding villages. Whether you're dealing with a blocked drain in central Swindon or need emergency drainage services in Royal Wootton Bassett, our experienced team is just a phone call away.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer fast response times across all our service areas, with most call-outs attended within 1-2 hours. Our local knowledge means we understand the specific drainage challenges faced by properties in different parts of {BRAND.serviceAreaLabel}.
            </p>
          </div>
        </div>
      </section>

      {/* Swindon Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Swindon</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As our home base, Swindon is at the heart of everything we do. From the town centre to the surrounding residential areas including Old Town, Walcot, Stratton, and Gorse Hill, we provide comprehensive drainage solutions for properties of all sizes. Our team has extensive experience working with both Victorian terraces and modern developments, understanding the unique drainage systems each presents.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Swindon's mix of older clay pipes and modern plastic drainage means you need a team that can handle any situation. Whether it's tree root ingress in an older property or a simple blockage in a new build, we've got the equipment and expertise to resolve it quickly.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link 
                to="/location/swindon/blocked-drains" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Blocked Drains Swindon</h3>
                <p className="text-sm text-muted-foreground mt-2">Fast unblocking for homes &amp; businesses across Swindon</p>
              </Link>
              
              <Link 
                to="/location/swindon/cctv-drain-surveys" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">CCTV Surveys Swindon</h3>
                <p className="text-sm text-muted-foreground mt-2">Professional drain inspections with detailed reports</p>
              </Link>
              
              <Link 
                to="/location/swindon/emergency-drain-services" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Emergency Services Swindon</h3>
                <p className="text-sm text-muted-foreground mt-2">24/7 emergency drainage call-outs available</p>
              </Link>
            </div>

            <Link 
              to="/location/swindon" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all Swindon drainage services →
            </Link>
          </div>
        </div>
      </section>

      {/* Royal Wootton Bassett Section */}
      <section className="section-padding">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Royal Wootton Bassett</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Royal Wootton Bassett is a historic market town with a charming High Street and a wonderful community spirit. We're proud to serve residents and businesses throughout the town, from the older properties around the High Street to the newer developments on the outskirts.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The town's growth over recent years means a mix of drainage systems, and we're fully equipped to handle everything from traditional clay pipe repairs to modern drainage installations. Our local presence means rapid response times for Royal Wootton Bassett residents – usually within the hour for emergencies.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link 
                to="/location/royal-wootton-bassett/blocked-drains" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Blocked Drains RWB</h3>
                <p className="text-sm text-muted-foreground mt-2">Professional drain clearance throughout the town</p>
              </Link>
              
              <Link 
                to="/location/royal-wootton-bassett/cctv-drain-surveys" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">CCTV Surveys RWB</h3>
                <p className="text-sm text-muted-foreground mt-2">Detailed drain inspections for homebuyers &amp; landlords</p>
              </Link>
              
              <Link 
                to="/location/royal-wootton-bassett/emergency-drain-services" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Emergency Services RWB</h3>
                <p className="text-sm text-muted-foreground mt-2">Fast emergency response across Royal Wootton Bassett</p>
              </Link>
            </div>

            <Link 
              to="/location/royal-wootton-bassett" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all Royal Wootton Bassett drainage services →
            </Link>
          </div>
        </div>
      </section>

      {/* Highworth Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Highworth</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Perched on a hill northeast of Swindon, Highworth is a picturesque market town with a rich history dating back centuries. We're proud to serve this charming community, from the historic High Street properties to the surrounding farmhouses and newer residential developments.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Highworth's elevated position and mix of older stone buildings mean drainage systems here face unique challenges. Our team understands the local infrastructure and can quickly diagnose and resolve issues, whether it's a blocked kitchen drain or a more complex sewage problem.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link 
                to="/location/highworth/blocked-drains" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Blocked Drains Highworth</h3>
                <p className="text-sm text-muted-foreground mt-2">Fast drain clearance for Highworth homes</p>
              </Link>
              
              <Link 
                to="/location/highworth/cctv-drain-surveys" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">CCTV Surveys Highworth</h3>
                <p className="text-sm text-muted-foreground mt-2">Professional inspections with video reports</p>
              </Link>
              
              <Link 
                to="/location/highworth/emergency-drain-services" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Emergency Services Highworth</h3>
                <p className="text-sm text-muted-foreground mt-2">24/7 emergency call-outs available</p>
              </Link>
            </div>

            <Link 
              to="/location/highworth" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all Highworth drainage services →
            </Link>
          </div>
        </div>
      </section>

      {/* Purton Section */}
      <section className="section-padding">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Purton</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Purton is one of Wiltshire's largest villages, known for its friendly community and beautiful countryside setting. Located just northwest of Swindon, we provide comprehensive drainage services to residents throughout the village and surrounding rural properties.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Many Purton properties rely on older drainage systems, and some rural homes have septic tanks or private sewage treatment plants. Our experienced team can handle all types of drainage work, from simple unblocking to more specialist septic tank services.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link 
                to="/location/purton/blocked-drains" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Blocked Drains Purton</h3>
                <p className="text-sm text-muted-foreground mt-2">Reliable drain unblocking for Purton</p>
              </Link>
              
              <Link 
                to="/location/purton/cctv-drain-surveys" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">CCTV Surveys Purton</h3>
                <p className="text-sm text-muted-foreground mt-2">Detailed drain camera inspections</p>
              </Link>
              
              <Link 
                to="/location/purton/emergency-drain-services" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Emergency Services Purton</h3>
                <p className="text-sm text-muted-foreground mt-2">Rapid emergency response available</p>
              </Link>
            </div>

            <Link 
              to="/location/purton" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all Purton drainage services →
            </Link>
          </div>
        </div>
      </section>

      {/* Cricklade Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Cricklade</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Cricklade holds the distinction of being Wiltshire's oldest borough, with a history stretching back to Saxon times. This charming town on the upper Thames is home to beautiful period properties and a strong sense of community. We're delighted to serve Cricklade residents with professional drainage solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The town's proximity to the River Thames means some properties face particular drainage challenges, especially during wet weather. Our team has the expertise to deal with everything from routine blockages to more complex flood-related drainage issues.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link 
                to="/location/cricklade/blocked-drains" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Blocked Drains Cricklade</h3>
                <p className="text-sm text-muted-foreground mt-2">Expert drain clearance in Cricklade</p>
              </Link>
              
              <Link 
                to="/location/cricklade/cctv-drain-surveys" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">CCTV Surveys Cricklade</h3>
                <p className="text-sm text-muted-foreground mt-2">Comprehensive drain inspections</p>
              </Link>
              
              <Link 
                to="/location/cricklade/emergency-drain-services" 
                className="p-4 bg-background rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Emergency Services Cricklade</h3>
                <p className="text-sm text-muted-foreground mt-2">24/7 emergency drainage help</p>
              </Link>
            </div>

            <Link 
              to="/location/cricklade" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all Cricklade drainage services →
            </Link>
          </div>
        </div>
      </section>

      {/* Wroughton Section */}
      <section className="section-padding">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Wroughton</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Wroughton is a large village on the southern edge of Swindon, nestled at the foot of the Marlborough Downs. With its mix of traditional cottages and modern housing estates, Wroughton has a diverse range of drainage systems that we're well-equipped to service.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From the older properties in the village centre to the newer developments, our team provides fast, professional drainage services throughout Wroughton. We're familiar with the local infrastructure and can respond quickly to any drainage emergency.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link 
                to="/location/wroughton/blocked-drains" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Blocked Drains Wroughton</h3>
                <p className="text-sm text-muted-foreground mt-2">Quick drain unblocking in Wroughton</p>
              </Link>
              
              <Link 
                to="/location/wroughton/cctv-drain-surveys" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">CCTV Surveys Wroughton</h3>
                <p className="text-sm text-muted-foreground mt-2">Professional drain camera surveys</p>
              </Link>
              
              <Link 
                to="/location/wroughton/emergency-drain-services" 
                className="p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors group"
              >
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Emergency Services Wroughton</h3>
                <p className="text-sm text-muted-foreground mt-2">Fast emergency response times</p>
              </Link>
            </div>

            <Link 
              to="/location/wroughton" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View all Wroughton drainage services →
            </Link>
          </div>
        </div>
      </section>

      {/* Other Areas Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Areas We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Beyond our main service areas, we cover numerous villages and towns across {BRAND.serviceAreaLabel}. Click on any location below to see our full range of services available in your area.
            </p>
          </div>
        </div>
        <LocationsGrid showAll />
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Choose a Local Drainage Company?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Faster Response Times</h3>
                  <p className="text-muted-foreground">Being based in {BRAND.serviceAreaLabel} means we can reach you quickly – often within the hour for emergencies.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Local Knowledge</h3>
                  <p className="text-muted-foreground">We understand the specific drainage systems and common issues in properties across {BRAND.serviceAreaLabel}.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">No Call-Out Charges</h3>
                  <p className="text-muted-foreground">As a local company, we don't charge excessive call-out fees. You only pay for the work we do.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Building Local Trust</h3>
                  <p className="text-muted-foreground">Our reputation is built on recommendations from satisfied customers in your community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/5">
        <div className="container-wide px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Your Drains Sorted?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Whether you're in Swindon, Royal Wootton Bassett, or the surrounding villages, our local team is just a phone call away.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call us now on {BRAND.phone}
            </Link>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide px-4 text-center">
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="text-primary hover:underline">
              Home
            </Link>
            {" · "}
            <Link to="/services" className="text-primary hover:underline">
              All Services
            </Link>
            {" · "}
            <Link to="/contact" className="text-primary hover:underline">
              Contact Us
            </Link>
            {" · "}
            <Link to="/faq" className="text-primary hover:underline">
              FAQs
            </Link>
          </p>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Locations;
