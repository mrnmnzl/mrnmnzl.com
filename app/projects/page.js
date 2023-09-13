import { fetchCodingExp } from "@/sanity/utils/fetchCodingExp";
import { PortableText } from "@portabletext/react";
import { TopBar } from "@/components/ProjectComponents/TopBar";
import { Title } from "@/components/ProjectComponents/Title";
import { Subtitle } from "@/components/ProjectComponents/Subtitle";
import { List } from "@/components/ProjectComponents/List";

export default async function Page() {
  const data = await fetchCodingExp();

  const components = {
    block: {
      h2: ({ children }) => <Subtitle>{children}</Subtitle>,
      normal: ({ children }) => <p className="mb-4">{children}</p>,
    },
  };

  return (
    <div className="flex flex-col h-full ">
      <TopBar title={data.title} icon={data.icon} />
      <div className="flex flex-col items-center w-full overflow-y-scroll">
        <div className="max-w-[800px] w-full px-8 pb-12 mt-28">
          <Title title={data.title} />
          <PortableText value={data.introduction} components={components} />
          <Subtitle>{data.expConfident.title}</Subtitle>
          <List technologies={data.expConfident.technologies} />
          <Subtitle>{data.expFigureOut.title}</Subtitle>
          <List technologies={data.expFigureOut.technologies} />
          <Subtitle>{data.expTeach.title}</Subtitle>
          <List technologies={data.expTeach.technologies} />
          <Subtitle>{data.expUniversity.title}</Subtitle>
          <List technologies={data.expUniversity.technologies} />
          <Subtitle>{data.expLearn.title}</Subtitle>
          <List technologies={data.expLearn.technologies} />
        </div>
      </div>
    </div>
  );
}
