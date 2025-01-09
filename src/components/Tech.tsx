import TechCard from './TechCard';

export default function Tech() {
  return (
    <>
        <div className="bg-slate-800 w-screen min-h-[300px] p-8">
        <h1 className="text-4xl text-white font-bold mb-4">Techs</h1>
        <div className="w-32 border-2 mb-8" />
        
        <div className="flex items-center justify-center w-full flex-wrap gap-4">
            <TechCard imageURL="/img/php.jpg" techStack="PHP" />
            <TechCard imageURL="/img/pyhton.jpg" techStack="Python" />
            <TechCard imageURL="/img/js.jpg" techStack="JavaScript" />
        </div>
        </div>
    </>
  );
}
