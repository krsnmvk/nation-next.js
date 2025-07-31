import Image from 'next/image';

export default function Logo() {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={30}
        height={30}
        className="dark:hidden"
      />
      <span className="font-medium">Notion</span>
    </div>
  );
}
