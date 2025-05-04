export const metadata = {
  title: "Главная — b24.kaymak.pro",
  description: "b24.kaymak.pro — интеграция, автоматизация и поддержка CRM Битрикс24 для бизнеса в Кыргызстане."
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
