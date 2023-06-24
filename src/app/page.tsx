import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-halloween bg-no-repeat bg-center bg-cover">
      <article className="bg-slate-700 rounded-md p-10 text-center text-white text-xl">
        <div className="flex justify-center">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            className="rounded-full"
            width={240}
            height={24}
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl mt-4">Luca Agosta</h2>
          <p>Java Application Developer at IBM | AWS Certified</p>
          <p>More info on the links below:</p>
          
          <div className="mx-auto bg-yellow-300 h-2 w-80 max-w-[70vw] my-4">
    </div>
          <div className="flex justify-center">
            <a href="https://www.linkedin.com/in/lucaagosta/">
              <Image
                src="/linkedin.png"
                alt="Linkedin"
                className="rounded-full d-inline mx-1 duration-200 hover:scale-110"
                width={100}
                height={24}
              />
            </a>
            <a href="https://github.com/agostaxyz">
              <Image
                src="/github.png"
                alt="Github"
                className="rounded-full d-inline mx-1 duration-200 hover:scale-110"
                width={100}
                height={24}
              />
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
