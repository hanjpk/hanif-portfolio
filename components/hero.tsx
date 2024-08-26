"use client"

import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { TypeAnimation } from 'react-type-animation';
import { Image, Link } from "@nextui-org/react";

export const Hero = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-left justify-center">
          <h1 className={title()}>Meet&nbsp;</h1>
          <h1 className={title({ color: "foreground" })}>Hanip.&nbsp;</h1>
          <br />
          <h1 className={title()}>
            I develop digital things and make it&nbsp;
          </h1>
          <h1 className={title({ color: "blue" })}>
            beautiful.
          </h1>
          <div className="my-5" />
          {/* <Link
            role="button"
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/blog"
          >
            <SearchIcon size={20} />
            Explore
          </Link> */}
        </div>
        <Image
          isBlurred
          width={240}
          src="/images/me.png"
          alt="NextUI Album Cover"
          className="m-5"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 my-8">

      </div>
    </section >
  );
}