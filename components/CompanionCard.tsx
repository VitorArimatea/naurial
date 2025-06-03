import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  const t = useTranslations("companionCard");

  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image
            src="/icons/bookmark.svg"
            alt="bookmark"
            width={13}
            height={14}
          />
        </button>
      </div>

      <h2 className="text-2xl items-center font-bold">{name}</h2>
      <p className="text-sm">
        {t("topic")} {topic}
      </p>
      <div className="flex gap-2">
        <Image src="/icons/clock.svg" alt="clock" width={12.5} height={12.5} />
        <p className="text-sm">
          {duration} {t("minutes")}
        </p>
      </div>

      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
          {t("button")}
        </button>
      </Link>
    </article>
  );
};
export default CompanionCard;
