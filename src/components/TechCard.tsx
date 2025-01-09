import Image from 'next/image'

type TechCard = {
    imageURL: string
    techStack: string
}

export default function TechCard( {imageURL, techStack}: TechCard ) {
  return (
    <>
        <div className='w-48 h-48 flex justify-center items-center shadow-lg drop-shadow overflow-hidden rounded-3xl bg-[#72BF78] bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 flex-col mx-2 hover:bg-[#72BF78] hover:bg-opacity-20 hover:scale-125'>
            <div className="object-cover w-20 h-20 relative">
                <Image src={imageURL} alt='' fill={true}/>
            </div>
            <p className='text-white text-center text-base leading-4 mt-4'>{techStack}</p>
        </div>

    </>
  );
}
