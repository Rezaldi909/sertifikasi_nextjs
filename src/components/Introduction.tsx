import Image from 'next/image';

export default function Introduction() {
  return (
    <div className="w-screen h-[500px] bg-slate-800">
      <div className="flex justify-between items-center mx-16 py-5">
        <div>
          <p className="text-white text-2xl font-bold my-5">Teknik Informatika</p>
          <h2 className="text-[#D2E0FB] text-4xl">Hello, I&apos;m</h2>
          <h2 className="text-[#D2E0FB] text-6xl">Rezaldi Muhammad Jantri</h2>
          <div className="my-8">
            <p className="text-white max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe impedit numquam odit, amet suscipit
              iusto similique repudiandae quod illo ea cupiditate mollitia itaque error? Sequi, nobis quisquam? Modi,
              odio!
            </p>
          </div>
        </div>

        <div className="relative w-96 h-96 mt-8 overflow-hidden">
          <Image
            src="/img/profile.jpg"
            alt="Profile"
            fill
            priority
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
