import Image from "next/image";

export default function InfoSection() {
  return (
    <div className="min-h-[300px] mt-28 bg-opacity-20 w-full bg-[#F6F3EF] py-4 text-white">
      <div className="flex flex-col items-center gap-4">
        <Image
          className="mt-2"
          src={"/deskilustration.svg"}
          width={385}
          height={385}
          alt="image of guy sitting in front of a desk"
        />
        <h2 className="text-lg font-semibold">
          Because we care about your professional life
        </h2>
        <h3 className="text-black text-md">Take a quick quizz to find your perfect job!</h3>
      </div>
    </div>
  );
}
