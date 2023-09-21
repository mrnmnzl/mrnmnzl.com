import { PortableText } from "@portabletext/react";

function CustomPortableText({ data }) {
  const components = {
    block: {
      h2: ({ children }) => (
        <h2 className="mt-6 mb-2 text-xl font-bold">{children}</h2>
      ),
      normal: ({ children }) => <p className="mb-4">{children}</p>,
    },
    list: {
      bullet: ({ children }) => <ul className="pl-6 mb-4">{children}</ul>,
    },
    listItem: {
      bullet: ({ children }) => <li className="list-disc">{children}</li>,
    },
  };

  return <PortableText value={data} components={components} />;
}

export { CustomPortableText };
