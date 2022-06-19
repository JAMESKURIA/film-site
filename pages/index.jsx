import { Button, SocialIcons } from "components";
import Image from "next/image";

const Home = () => {
  return (
    <div className=" flex flex-col  text-film-light">
      <div>
        <Image
          src={"/landing-camera.jpg"}
          width={1920}
          height={1026}
          alt="Black and white camera"
        />
      </div>
      <div className="py-10 px-6 space-y-5 leading-10">
        <h3 className="text-4xl sm:text-5xl font-bold tracking-wide ">
          Innovative ideas, stylish designs
        </h3>
        <h4 className="text-lg sm:text-xl font-thin py-3">
          Interior design service for home & business
        </h4>

        <div className="flex sm:flex-row flex-col gap-10 md:items-end  justify-between pt-8 md:pt-14">
          <Button type="submit" text="Book consultation" className="w-fit " />

          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
