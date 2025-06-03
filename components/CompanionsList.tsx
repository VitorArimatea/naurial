import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn, getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames: string;
}

const CompanionsList = ({
  title,
  companions,
  classNames,
}: CompanionsListProps) => {
  const t = useTranslations("companionList");
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="text-3xl font-bold">{title}</h2>

      <Table>
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead className="w-2/3">{t("lessons")}</TableHead>
            <TableHead>{t("subject")}</TableHead>
            <TableHead>{t("duration")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({ id, name, topic, subject, duration }) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`/companions/${id}`}>
                  <div className="flex items-center gap-2">
                    <div
                      className="size=[72px] flex items-center justify-center rounded-lg p-2 max-md:hidden"
                      style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xl md:text-2xl font-bold">{name}</p>
                      <p className="text-lg">{topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="subject-badge w-fit p-2 max-md:hidden">
                  {subject}
                </div>
                <div
                  className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                  style={{ backgroundColor: getSubjectColor(subject) }}
                >
                  <Image
                    src={`/icons/${subject}.svg`}
                    alt={subject}
                    width={18}
                    height={18}
                  />
                </div>
              </TableCell>
              <TableCell>
                <p className="text-xl font-semibold">{duration} mins</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};
export default CompanionsList;
