export const Footer = ({ className = "" }) => {
  const currentYear = new Date().getFullYear().toString();
  const URL = "https://telecasternilsen.com/en";

  return (
    <footer className={`text-center pb-2 ${className}`}>
      {currentYear} &copy; -{" "}
      <a
        href={URL}
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tele Caster Nilsen
      </a>
    </footer>
  );
};
