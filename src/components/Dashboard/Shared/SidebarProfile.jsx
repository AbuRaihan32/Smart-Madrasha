'use client'
import Image from 'next/image';
import { PuffLoader } from 'react-spinners';

const SidebarProfile = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 ">
        <Image
          src="/final-profile.jpg"
          alt="Profile"
          width={100}
          height={100}
          className="w-28 h-28 rounded-full border-4 mt-2 z-50"
        />
        <div className="absolute top-[14px] z-0">
          <PuffLoader
            color="lime"
            size={140}
            speedMultiplier={0.5}
            loading={true}
          />
        </div>
        <p className="text-[14px]">আবু রায়হান মাহফুজ</p>
      </div>
    );
};

export default SidebarProfile;