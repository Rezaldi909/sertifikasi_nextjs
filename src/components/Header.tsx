export default function Header() {
  return (

      <div className="bg-slate-900 flex p-4 justify-between items-center ">
        <div>
          <p className="text-white font-bold text-2xl mx-2">Rezaldi Muhammad Jantri</p>
        </div>
        <div>
          <ul className="flex space-x-4 mx-8">
            <li className="text-white text-lg">Home</li>
            <li className="text-white text-lg">Techs</li>
            <li className="text-white text-lg">Biography</li>
            <li className="text-white text-lg">Contact</li>
          </ul>
        </div>
      </div>    
  );
}
