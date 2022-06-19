import { Service } from "components";
const Services = () => {
  const services = [
    {
      id: 1,
      image: "/landing-camera.jpg",
      title: "Design only",
      desc: "We will supply a document that includes every detail covered in the consultation",
      url: "",
    },
    {
      id: 2,
      image: "/landing-camera.jpg",
      title: "Design and Installation",
      desc: "We will supply a document that includes every detail covered in the consultation",
      url: "",
    },
    {
      id: 3,
      image: "/landing-camera.jpg",
      title: "Design and Management",
      desc: "We will supply a document that includes every detail covered in the consultation",
      url: "",
    },
  ];

  return (
    <div>
      <div className="max-w-7xl  mx-auto  text-film-light py-[10vh] px-2 flex flex-col md:flex-row items-center gap-20">
        <div className="px-5 py-3 sm:py-5 sm:px-10 md:p-0 md:min-h-[80vh] sm:flex  items-center  bg-film-primary">
          <h3 className="whitespace-nowrap md:-rotate-90 font-bold text-3xl tracking-wider uppercase md:-mx-14">
            Our Services
          </h3>
        </div>
        <div className="mx-auto min-h-[60vh] max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <Service key={service.id.toString()} item={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

Services.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
