import { AsideMenu } from "@/components/BurgerMenu";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  const LinkSection: FC<{ link: string; title: string }> = ({
    link,
    title,
  }) => {
    return (
      <div className="mb-2">
        <Link
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
          href={link}
        >
          {title}
        </Link>
      </div>
    );
  };

  return (
    <div className="flex">
      <AsideMenu>
        <nav className="p-4">
          <LinkSection link="/" title="Music" />
          <LinkSection link="/" title="Games" />
          <LinkSection link="/" title="Movies" />
          <LinkSection link="/" title="Books" />
        </nav>
      </AsideMenu>
      {children}
    </div>
  );
};

export default ContentLayout;
