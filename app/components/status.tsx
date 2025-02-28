import { Section } from "./section";
import { Card } from "../../components/ui/card";
import { ArrowUpRight, Code, LucideIcon, MessageCircle, Rss } from "lucide-react";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[2] flex flex-col gap-2">
        <Card>
          <div className="font-semibold leading-none tracking-tight">
            Side Project
          </div>
          <div className="flex flex-col gap-2">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                logo={project.logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-1">
        <Card>
          <div className="font-semibold leading-none tracking-tight">Work</div>
          {WORKS.map((work, index) => (
            <WorkProject
              key={index}
              image={work.image}
              title={work.title}
              role={work.role}
              date={work.date}
              url="/"
            />
          ))}
        </Card>
        <Card>
          <p className="font-semibold leading-none tracking-tight">
            Contact me
          </p>
          <ContactCard
            name="Vincent Simonpieri"
            image="e"
            mediumImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fphotos-vecteurs-libre%2Fx-logo&psig=AOvVaw2TbMXaKEdM_WnWi7VQ07qH&ust=1740842312550000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCw7o7V5osDFQAAAAAdAAAAABAE"
            description="06 25 22 61 88"
          />
          <ContactCard
            name="Vincent Simonpieri"
            image="e"
            mediumImage="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            description="Depuis linkedin "
          />
        </Card>
      </div>
    </Section>
  );
};

const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group mt-4">
      <div className="relative flex items-center gap-4">
        <img
          src={props.image}
          alt={props.name}
          className="w-12 h-12 rounded-full"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-8 h-8 rounded-full"
        />
      </div>
      <div className="flex-1">
        <p className="text-lg font-semibold">{props.name}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16} />
    </Card>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    logo: Code,
    title: "codeline",
    description: "Details about the side project.",
    url: "/",
  },
  {
    logo: Rss,
    title: "Work",
    description: "Details about work.",
    url: "/",
  },
  {
    logo: MessageCircle,
    title: "Contact Me",
    description: "Details about how to contact me.",
    url: "/",
  },
];

type SideProjectProps = {
  logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <a
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </a>
  );
};

const WORKS: WorkProps[] = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/110px-Flag_of_France.svg.png",
    title: "Developpeur chez corsca linea",
    role: "Developpeur Full Stack",
    date: "2022-2023",
    url: "/",
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

const WorkProject = (props: WorkProps) => {
  return (
    <a
      href={props.url}
      className="flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <img
          src={props.image}
          alt={props.title}
          className="w-8 h-8 object-contain"
        />
      </span>
      <div className="flex-1">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div>
    </a>
  );
};
