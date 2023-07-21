import React from "react";
import VideoBackground from "../components/VideoBackground";
import { motion } from "framer-motion";

function Story() {
  return (
    <>
      <VideoBackground src="https://res.cloudinary.com/dlanhtzbw/video/upload/v1689889582/bg-video-2_y3jwut_phra6x.mp4" />
      {/* <div className="clip-path bg-white p-[2px] w-fit h-fit mx-[10rem]"> */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{ delay: 2.7, duration: 0.5 }}
        className=" overflow-hidden bg-[#ffffff10] backdrop-blur-sm h-[60rem]   z-[-2] cut-card mx-[10rem] border-[10px]"
      >
        <motion.p
          initial={{ y: "90%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 60, repeat: "Infinity" }}
          className="flex flex-col gap-[2rem] cursor-default max-w-[80rem] mx-auto"
        >
          <span className="">
            In the year 2187, the world is engulfed in the dazzling neon-lit
            mega-city known as NeoTokyo. Technology has evolved far beyond
            imagination, and the city has become a mesmerizing blend of
            traditional Japanese culture and futuristic wonders. The once
            powerful Shogunate, led by an oppressive ruler, has been overthrown
            by a new order of cyber-enhanced warriors known as the "Ronin
            Syndicate.
          </span>
          <span className="">
            As a young protagonist, the player steps into the shoes of Hiro
            Takashi, a brilliant hacker and martial artist who recently lost his
            family to a devastating cyber-terrorism attack orchestrated by a
            mysterious figure known as "Black Lotus." Fueled by a thirst for
            vengeance, Hiro joins the Ronin Syndicate, a secretive group of
            rebels fighting against the corrupt Cyber Shogunate.
          </span>
          <span className="">
            The game begins with Hiro undergoing a cybernetic enhancement
            procedure that grants him extraordinary abilities, turning him into
            an enhanced warrior. The Ronin Syndicate, led by the enigmatic Kuma
            sensei, becomes his newfound family as they navigate the treacherous
            streets of NeoTokyo. Players will explore the dazzling cityscape
            filled with soaring skyscrapers, bustling markets, and hidden
            underground passages.
          </span>
          <span className="">
            As Hiro delves deeper into the conspiracy, he unravels a web of dark
            secrets about the Cyber Shogunate's oppressive rule and their ties
            to powerful corporations exploiting the people of NeoTokyo.
            Throughout the game, Hiro encounters a diverse cast of characters,
            from quirky hackers to honorable samurai, all with unique skills and
            backgrounds.
          </span>
          <span className="">
            The gameplay seamlessly blends elements of fast-paced combat,
            intricate hacking puzzles, and acrobatic parkour. Hiro will face
            formidable foes, both human and robotic, as he progresses through
            thrilling missions and side quests that reveal the true extent of
            NeoTokyo's corruption.
          </span>
          <span className="">
            The choices made by the player throughout the game will have a
            significant impact on the storyline, leading to multiple branching
            paths and endings. Each decision influences the relationships Hiro
            builds with other characters, and alliances formed will shape the
            destiny of NeoTokyo.
          </span>
          <span className="">
            {" "}
            As the conflict escalates, Hiro's journey takes him to the heart of
            the Cyber Shogunate, where he confronts the enigmatic and sinister
            Black Lotus. The final showdown tests Hiro's skills and beliefs,
            culminating in an epic battle that determines the fate of NeoTokyo
            and the world beyond.
          </span>
          <span className="">
            "NeoTokyo Chronicles: Rise of the Cyber Shogun" is a gripping tale
            of revenge, redemption, and resilience, set in a visually stunning
            and culturally rich cyberpunk world. It explores the fusion of
            ancient traditions and cutting-edge technology, reminding players of
            the importance of preserving humanity amidst a rapidly advancing
            future.
          </span>
        </motion.p>
      </motion.div>
      {/* </div> */}
    </>
  );
}

export default Story;
