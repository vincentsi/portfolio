import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ContactCardProps = {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
};

export const ContactCard = (props: ContactCardProps) => {
  const CardContent = () => (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group mt-4">
      <div className="relative flex items-center gap-4">
        <Image
          src={props.mediumImage}
          alt={props.name}
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <p className="text-lg font-semibold">{props.name}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight
        className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
        size={16}
      />
    </Card>
  );

  if (props.url) {
    return (
      <Link href={props.url}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};
