import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Reach Out
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Dive into the realm of connectivity and harness the power of code to
            shape digital landscapes. Whether you are seeking to collaborate on
            projects, troubleshoot challenges, or simply exchange ideas, your
            messages are the keystrokes that propel us forward. Utilize the form
            below to transmit your queries through the digital ether, and
            anticipate the response of innovation.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
