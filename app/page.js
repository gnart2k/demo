import React from "react";

// Reusable component for image elements
const Image = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

// Navigation Menu Item
const MenuItem = ({ children }) => (
  <div className="grow whitespace-nowrap">{children}</div>
);

const GameWebsite = () => {
  const menuItems = ["Trang chủ", "Tải game", "Diễn đàn", "Cộng đồng"];
  const bannerImage = [
    "/sv-dragon.png",
    "/sv-quyenvuong.png",
    "/sv-thiensu.png",
    "/sv-phoenix.png",
    "/sv-kundun.png",
    "/sv-ht.png",
  ];
  return (
    <main className="bg-stone-950">
      <video autoPlay loop muted className="absolute top-0 left-0">
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <section className="flex overflow-hidden relative flex-col items-center px-16 pt-8 pb-12 w-full min-h-[1073px] md:px-5 md:max-w-full">
        <nav className="flex relative flex-col items-center mb-12 w-full max-w-[1178px] md:mb-10">
          <div className="flex gap-4 self-end justify-center py-1 pl-4 pr-2 text-sm text-white border border-red-600 border-solid bg-black bg-opacity-70 rounded-[60px] md:pr-5">
            {menuItems.map((item, index) => (
              <MenuItem key={index}>{item}</MenuItem>
            ))}
          </div>
        </nav>
        <div className="flex items-center justify-center mt-[247px] w-full ">
          {bannerImage.map((item, index) => (
            <div
              key={index}
              className="flex relative ml-[-85px] hover:brightness-200"
            >
              <Image
                src={item}
                alt="Game Banner"
                className="w-full mt-10 md:max-w-full"
              />
              <Image
                src="/server-space.png"
                alt="Game Banner"
                className="z-10 ml-[-85px] w-5/12 mt-10"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-10 w-[134px]">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f588e6edf4cffb191fa6ae50d660bf8cb7c412ff109c2960038e56f78169b51?apiKey=79ab781845974dc18291963ef620887d&"
            alt="Game Character"
            className="flex-1 shrink-0 object-contain w-6/12 aspect-square"
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/280194a71870fdadfb86669d04b9a8f406989d83f4eb83a415e6d28c65fa1650?apiKey=79ab781845974dc18291963ef620887d&"
            alt="Game Scene"
            className="flex-1 object-contain w-6/12 mt-2.5 aspect-[1.22]"
          />
        </div>

        <div className="mt-2 text-sm font-bold text-center text-white whitespace-nowrap">
          MU Hà Nội 2009
        </div>
        <div className="text-sm text-center whitespace-nowrap text-neutral-400">
          Tượng Đài MuOnline Số 1 Việt Nam
        </div>
        <div className="mt-1.5 text-sm text-center text-yellow-500">
          www.mu-hanoi.net
        </div>
      </section>
    </main>
  );
};

export default GameWebsite;
