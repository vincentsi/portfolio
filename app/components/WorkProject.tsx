import Link from "next/link";
import Image from "next/image";

export type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

export const WorkProject = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <Image
          src={props.image}
          alt={props.title}
          width={32}
          height={32}
          className="object-contain"
        />
      </span>
      <div className="flex-1">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
}; 