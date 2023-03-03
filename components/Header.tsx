// Img
import Image from "next/image";

export const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/logo.svg"
          alt="Santiago Segurado"
          title="Full Stack Developer"
          width={150}
          height={150}
        />
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-base px-5 py-2.5 text-center mr-2 mb-2"
          >
            Trabajemos Juntos
          </button>
        </div>
      </div>
    </header>
  );
};
