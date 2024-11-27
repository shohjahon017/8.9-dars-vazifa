import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="ml-[64px] mt-10">
        <img className="ml-[59px] mb-3" src="/logo.svg" alt="" />
        <h4 className="max-w-[214px] font-semibold text-[14px] text-center">
          Давлат хизматининг ягона электрон ахборот-таҳлил тизими
        </h4>
      </div>
      <div>
        <h3 className="max-w-[624px] font-semibold text-3xl text-center">
          Республика Ассессмент маркази онлайн платформаси
        </h3>
      </div>
      <div className="mr-[64px]">
        <img src="/number.svg" alt="" />
      </div>
    </div>
  );
};

export default Header;
