import { MetherHero } from "@/components/hero/MetherHero";
import { MetherCore } from "@/components/sections/MetherCore";
import MetherProducts from "@/components/sections/Products/MetherProducts";
import MetherTechnologies from "@/components/sections/Technologies/MetherTechnologies";

export default function Home() {
  return (
    <>
      <MetherHero />
      <MetherCore />
      <MetherProducts />
      <MetherTechnologies />
    </>
  );
}
