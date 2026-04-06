import { useParams } from "react-router-dom";
import { contentData } from "./data";

const HelpContent = () => {
  const { id } = useParams();
  const item = contentData.find((item) => item.id === id);
  if (!item) return <p>Help subject not found.</p>;

  return (
    <>
      <h1 className="text-4xl mt-2">{item.title}</h1>
      <section className="mt-20 p-4 grid max-w-800 rounded-sm border border-amber-400">
        <p>{item.desc}</p>
      </section>
    </>
  );
};

export default HelpContent;
