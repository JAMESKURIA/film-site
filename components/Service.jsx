import Image from "next/image";

const Service = ({ item }) => {
  return (
    <div className=" px-2 pb-5 group space-y-3 overflow-hidden select-none">
      <Image
        src={"/landing-camera.jpg"}
        width={300}
        height={300}
        alt="Black and white camera"
        className="group-hover:scale-105 transform ease-in-out duration-200"
      />

      <div className="leading-7 space-y-3 text-film-accent max-w-xs">
        <h3 className="text-xl font-bold tracking-wide text-film-light">
          {item.title}
        </h3>
        <p className="font-light">{item.desc}</p>
        <button className="py-1 group-hover:border-b hover:text-film-light cursor-pointer transform ease-in-out duration-200">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Service;
