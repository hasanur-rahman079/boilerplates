import PortableText from "react-portable-text";

export default function BodyText(props) {
  return (
    <>
      <PortableText
        // Pass in block content straight from Sanity.io
        content={props.text}
        serializers={{
          h1: (props) => <h1 style={{ color: "red" }} {...props} />,
          p: (props) => <p className="mb-4 text-neutral-200" {...props} />,
          li: ({ children }) => (
            <li className="special-list-item">{children}</li>
          ),
        }}
      />
    </>
  );
}
