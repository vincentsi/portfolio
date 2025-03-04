import { Section } from "./section";
import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
export const Contact  = () => {
  return (
    <Section id="contact" className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact me</Badge>
      <h2 className="pb-2 text-3xl front semibold tacking-tight first:mt-0">
        Je serais ravi de travailler avec vous.
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <ContactCard
          name="Vincent Simonpieri"
          image="e"
          mediumImage="data:image/png;base64,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"
          description="06 25 22 61 88"
        />
        <ContactCard
          url="https://www.linkedin.com/in/vincent-simonpieri-alternance-/"
          name="Vincent Simonpieri"
          image="e"
          mediumImage="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          description="Depuis linkedin "
        />
        <ContactCard
            url="mailto:vincent.simonpieri@gmail.com"
            name="vincent.simonpieri@gmail.com"
            image="e"
            mediumImage="https://img.freepik.com/vecteurs-premium/icones-google-icones-gmail-illustration-vectorielle-modifiable_981536-461.jpg?semt=ais_hybrid"
            description="Envoyer un mail pour me questionner ou me contacter"
          />

      </div>
    </Section>
  );
};
