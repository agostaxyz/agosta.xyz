import Image from 'next/image';
import profile from '../../public/profile.webp'
import bg from '../../public/bg.webp'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image
                  src={bg}
                  alt="Halloween background"
                  className="min-h-screen max-h-screen bg-cover bg-no-repeat bg-center bg-cover object-cover
                  absolute z-0"
                  priority
                  placeholder="blur"
      
      ></Image>
      <article className="bg-slate-700 rounded-md p-10 text-center text-white text-xl aboslute z-10 mt-24">
        <div className="flex justify-center">
          <Image
            src={profile}
            alt="Profile"
            className="rounded-full"
            width={240}
            height={240}
            priority
            placeholder="blur"
          />
        </div>
        <div>
          <h2 className="text-2xl mt-4">Luca Agosta</h2>
          <p className="m-4">Hi there, I'm a Java Application Developer with AWS Certification looking for a new opportunity.</p>
          <p>More info on the links below:</p>
          
          <div className="mx-auto bg-yellow-300 h-2 w-80 max-w-[70vw] my-4">
    </div>
          <div className="flex justify-center items-center">
            <a href="https://www.linkedin.com/in/lucaagosta/">
              <Image
                src="/linkedin.png"
                alt="Linkedin"
                className="rounded-full d-inline mx-1 duration-200 hover:scale-110"
                width={100}
                height={100}
              />
            </a>
            <a href="https://github.com/agostaxyz">
              <Image
                src="/github.png"
                alt="Github"
                className="rounded-full d-inline mx-1 duration-200 hover:scale-110"
                width={100}
                height={100}
              />
            </a>
            <a href="https://www.salesforce.com/trailblazer/lucaagosta">
              <Image
                src="/trailhead.png"
                alt="Salesforce Trailhead"
                className="d-inline mx-1 duration-200 hover:scale-110"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
