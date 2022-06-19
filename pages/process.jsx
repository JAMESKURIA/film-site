import Image from "next/image";

const Process = () => {
  return (
    <div className="md:min-h-[100vh] flex items-center ">
      <div className="text-film-accent flex flex-col md:flex-row  md:min-h-[90vh] items-center gap-8">
        {/* image */}
        <div className="pb-5 md:py-0">
          <Image
            src={"/landing-camera.jpg"}
            width={500}
            height={600}
            alt="Black and white camera"
          />
        </div>

        {/* Separator */}
        <aside className=" md:pt-0 w-5/6 md:min-h-[70vh] mx-auto  md:w-24 flex flex-col items-center justify-around">
          <div className="hidden md:block border  px-10 -rotate-90" />
          <h2 className="uppercase whitespace-nowrap  md:-rotate-90 py-4 px-6 text-3xl font-bold tracking-wide text-center bg-film-primary md:bg-transparent text-film-light">
            How it works
          </h2>
          <div className="hidden md:block border px-10 -rotate-90" />
        </aside>

        {/* content */}
        <div className="space-y-10 px-6 leading-8 max-w-md pb-14">
          <div>
            <h3 className="font-bold text-xl">
              <span className="mr-2 text-2xl tracking-widest">01</span> A
              friendly conversation
            </h3>
            <p className="pt-2">
              Step 1 is a chat in store, where we will get to know your tastes,
              initial ideas and lifestyle demands.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl">
              <span className="mr-2 text-2xl tracking-widest">02</span>{" "}
              Designing your space
            </h3>
            <p className="pt-2">
              Step 1 is a chat in store, where we will get to know your tastes,
              initial ideas and lifestyle demands.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl">
              <span className="mr-2 text-2xl tracking-widest">03</span> From
              vision to reality
            </h3>
            <p className="pt-2">
              Step 1 is a chat in store, where we will get to know your tastes,
              initial ideas and lifestyle demands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

Process.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
