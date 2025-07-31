import Footer from './_components/footer';
import Heading from './_components/heading';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex text-center md:justify-center gap-y-8 items-center flex-col justify-start flex-1 px-6 pb-10">
        <Heading />
      </div>
      <Footer />
    </div>
  );
}
