import React from "react";
import SectionHeader from "./ui/SectionHeader";
import Section from "./ui/Section";
import Reveal from "./animated/Reveal";
import ContactForm from "./ContactForm";
import { MovingBorderWrap } from "./animated/MovingBorder";

function Contact() {
  return (
    <Section id="contact">
      <SectionHeader>
        <Reveal type="text">
          <MovingBorderWrap
            borderRadius="10px"
            containerClassName=" h-[60px] p-1  rounded-[10px] m-auto w-[250px]"
            borderClassName="bg-[radial-gradient(var(--green-500)_40%,transparent_60%)] rounded-[10px]"
          >
            <h4 className="text-xl">Get in Touch</h4>
          </MovingBorderWrap>
        </Reveal>
      </SectionHeader>
      <ContactForm />
    </Section>
  );
}

export default Contact;
