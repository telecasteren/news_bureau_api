import type { Route } from "./+types/help";
import { Link } from "react-router";
import { SearchBar } from "../../components/search/SearchBar";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "Help - The News Bureau" },
    {
      name: "description",
      content: "A guide for how to use The News Bureau application.",
    },
  ];
};

const HelpPage = () => {
  return (
    <>
      <h1 className="text-4xl mt-2">How to use this application</h1>

      <SearchBar />

      <section className="mt-20 p-4 grid max-w-800 rounded-sm border border-amber-400">
        <ul className="grid gap-2 p-4 list-disc text-xl w-fit">
          <li className=" hover:underline cursor-pointer">
            <Link to="/help/need-account">
              Do I need an account to see articles?
            </Link>
          </li>
          <li className=" hover:underline cursor-pointer">
            <Link to="/help/create-account">How to create an account</Link>
          </li>
          <li className=" hover:underline cursor-pointer">
            <Link to="/help/find-users">How to find other users</Link>
          </li>
          <li className=" hover:underline cursor-pointer">
            <Link to="/help/create-article">How to create an article</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default HelpPage;
