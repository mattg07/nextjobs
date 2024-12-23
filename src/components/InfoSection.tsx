import Image from "next/image";
import { Button } from "./ui/button";

export default function InfoSection() {
  return (
    <div className="min-h-[300px] mt-28 bg-opacity-20 w-full pb-20 bg-[#F6F3EF] py-16 text-white">
      <div className="flex flex-col items-center gap-4">
        <Image
          className="mt-2"
          src={"/deskilustration.svg"}
          width={385}
          height={385}
          alt="image of guy sitting in front of a desk"
        />
        <h2 className="text-lg font-semibold text-black">
          Because we care about your professional life
        </h2>
        <h3 className="text-black text-md">Take a quick quizz to find your perfect job!</h3>
        <Button className="w-48 bg-amber-700">
          Take Quizz!
        </Button>
      </div>
    </div>
  );
}
