import { FC, PropsWithChildren } from "react";
import { Card } from "@/components/ui/card";

type Props = PropsWithChildren & {
  title: string;
  description: string;
};

export const FeatureCard: FC<Props> = ({ title, description, children }) => {
  return (
    <Card className="h-full w-full relative">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:5px_5px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"/>

      <div className="p-6">
        {children}
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mb-6 text-sm text-gray-400">{description}</p>
      </div>
    </Card>
  );
};
