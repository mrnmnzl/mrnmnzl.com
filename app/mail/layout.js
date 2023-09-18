import { MailLayoutMobile } from "@/components/MailComponents/MailLayoutMobile";
import { MailLayoutDesktop } from "@/components/MailComponents/MailLayoutDesktop";

function MailLayout({ children }) {
  const emails = [
    {
      address: "spaceparty@outerspace.com",
      date: "02.09.2023",
      subject: "Intergalactic Fiesta - RSVP Required!",
      text: `Greetings Earthling,\n\nYou are cordially invited to an out-of-this-world extravaganza on our home planet Zogon-9. Prepare for zero-gravity dance floors, alien delicacies, and a meteor shower display you won't forget!\n\nRSVP by sending a holographic transmission confirming your attendance. Light years away, but worth the journey!\n\nWarmest regards,\nZogonians`,
    },
    {
      address: "mermaidsandpirates@oceanadventures.com",
      date: "15.08.2023",
      subject: "Dive into the Deep with Us!",
      text: `Ahoy Matey!\n\nGet ready to dive into an underwater escapade like no other! Join us for a treasure hunt in the lost city of Atlantis, followed by a feast fit for a kraken.\n\nSecure your spot by replying with your best sea shanty. Bring your flippers and your sense of humor!\n\nBubbles of excitement,\nCaptain Neptune`,
    },
    {
      address: "paradoxparty@timetravelers.org",
      date: "04.05.2023",
      subject: "RSVP: Party Across Dimensions!",
      text: `Greetings Temporal Traveler,\n\nYou're cordially invited to a party that spans centuries! Rub elbows with famous historical figures, and enjoy futuristic cocktails served by robots. Dress code: Anything but the obvious.\n\nKindly RSVP by sending a message via your preferred era's communication device. Time travel is optional but highly encouraged!\n\nBest wishes,\nDr. Chrono`,
    },
    {
      address: "cozydreams@email.com",
      date: "29.02.2023",
      subject: "Pillow Fight RSVP!",
      text: `Dear Slumber Party Enthusiast,\n\nBreak out your comfiest PJs and fluffiest pillows - it's time for an epic pillow fight showdown! Don't forget your favorite teddy bear for moral support.\n\nConfirm your presence by responding with your most embarrassing childhood bedtime story. Let the giggles and games commence!\n\nWarm and fuzzy regards,\nSnuggle Squad`,
    },
    {
      address: "spacepets@email.com",
      date: "31.10.2022",
      subject: "Alien Pets Unite!",
      text: `Greetings Cosmic Critter Lover,\n\nThis Halloween, it's not just humans who get to have all the fun! Dress up your interstellar pet in their finest extraterrestrial garb for a chance to win cosmic prizes.\n\nSend us a photo of your pet in costume to secure your spot in the competition. May the best-dressed alien pet prevail!\n\nCosmically yours,\nCaptain Nebula`,
    },
  ];

  return (
    <>
      <MailLayoutDesktop mailData={emails}>{children}</MailLayoutDesktop>
      <MailLayoutMobile mailData={emails} />
    </>
  );
}

export default MailLayout;
