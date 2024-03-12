import React from "react";
import SectionHeader from "./ui/SectionHeader";
import Section from "./ui/Section";
import Reveal from "./animated/Reveal";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <Section id="contact">
      <SectionHeader>
        <Reveal type="text">
          {" "}
          <h4>Get in Touch</h4>
        </Reveal>
      </SectionHeader>
      <ContactForm />
    </Section>
  );
}

export default Contact;
