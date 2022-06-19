import { Button, SocialIcons } from "components";
import Image from "next/image";
import FloatingLabelInput from "react-floating-label-input";
const Contact = () => {
  return (
    <div className=" px-6 pt-10 flex  gap-14  w-full items-center sm:min-h-[100vh]">
      <div className="sm:w-1/2">
        <h3 className="text-2xl uppercase font-bold tracking-wide">
          Get in contact with us
        </h3>

        <form className="flex flex-col gap-14 py-10">
          <FloatingLabelInput
            id="name"
            label="Name"
            type="text"
            //   onBlur={action('onBlur')}
            //   onChange={action('onChange')}
            //   onFocus={action('onFocus')}
            //   value={value}
            className="bg-film-dark text-film-light"
          />
          <FloatingLabelInput
            id="email"
            label="Email"
            type="email"
            //   onBlur={action('onBlur')}
            //   onChange={action('onChange')}
            //   onFocus={action('onFocus')}
            //   value={value}
            className="bg-film-dark text-film-light"
          />
          <FloatingLabelInput
            id="password"
            label="Password"
            type="password"
            //   onBlur={action('onBlur')}
            //   onChange={action('onChange')}
            //   onFocus={action('onFocus')}
            //   value={value}
            className="bg-film-dark text-film-light"
          />
          <div className="flex flex-row items-end justify-between">
            <Button
              type="submit"
              text="Book consultation"
              className="w-fit mt-14"
            />
            <SocialIcons />
          </div>
        </form>
      </div>
      <div className="w-1/2 hidden sm:block">
        <Image
          src={"/landing-camera.jpg"}
          width={980}
          height={1200}
          alt="Black and white camera"
        />
      </div>
    </div>
  );
};

export default Contact;

Contact.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
