import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { WorkGrid } from "@/components/work-grid";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";

export default function Home(): React.ReactElement {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <WorkGrid />
        <About />
        <Services />
      </main>
      <SiteFooter />
    </>
  );
}
