import Image from "next/image";

export function TulaundryLogo() {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <div className="relative h-12 w-12">
        <Image
          src="/images/logo.svg"
          width={100}
          height={100}
          alt="Tulaundry logo"
          className="h-12 w-12"
        />
      </div>
      <span className="text-lg font-semibold text-primary">TULAUNDRY</span>
    </div>
  );
}
