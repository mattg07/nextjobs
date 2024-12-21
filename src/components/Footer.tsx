import Image from "next/image";

export default function Footer(){
    return(
        <footer className="relative w-full text-black flex flex-col items-center justify-center mt-24 py-16  bg-gradient-to-br from-orange-400 to-amber-700">
           <div className="flex items-center justify-between">
            <Image src="/world.png" width={50}height={50} alt="company logo" />
            <h1 className="text-2xl text-center font-semibold font-poppins">Mundo JOBS</h1>
           </div>
            <div className=" flex flex-row gap-4 font-poppins pt-4">
                <p>Carreers</p>
                <p>Blog</p>
                <p>Privacy</p>
                <p>Terms and Conditions</p>
                <p>Salaries Benchmarks</p>
            </div>
            <div className="absolute inset-0  overflow-hidden pointer-events-none">
     


   
      </div>
        </footer>
    )
}