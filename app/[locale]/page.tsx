import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("home");
  return (
    <main className="py-8">
      <h1 className="text-3xl">{t("popular-companions")}</h1>

      <section className="home-section">
        <CompanionCard
          id="001"
          name="Nova the Star Seeker"
          topic="Formation and Lifecycle of Stars"
          subject="Astronomy"
          duration={20}
          color="#82c8ff"
        />
        <CompanionCard
          id="002"
          name="Devia the Debugging Wizard"
          topic="Debugging Techniques and IDE Tools"
          subject="Software Engineering"
          duration={60}
          color="#87ffdf"
        />
        <CompanionCard
          id="003"
          name="Cybera the Security Sentinel"
          topic="Basics of Cybersecurity and Encryption"
          subject="Information Technology"
          duration={45}
          color="#dabfff"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title={t("table-title")}
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
