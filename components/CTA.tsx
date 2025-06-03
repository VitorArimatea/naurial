import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CTA = () => {
  const t = useTranslations("cta");
  return (
    <section className="cta-section">
      <div className="cta-badge">{t("cta-badge")}</div>
      <h2 className="text-3xl font-bold">{t("cta-title")}</h2>
      <p>{t("cta-text")}</p>
      <Image src="/images/cta.svg" alt="cta" width={362} height={232} />
      <button className="btn-primary w-full flex items-center justify-center">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new-companion">{t("cta-button")}</Link>
      </button>
    </section>
  );
};
export default CTA;
