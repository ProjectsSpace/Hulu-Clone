const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:px-10 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest uppercase hidden lg:inline-block">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
