import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with privacy in mind. © {new Date().getFullYear()}{" "}
          <span className="font-semibold">LuminaWallet</span>
        </p>
        <nav className="flex items-center space-x-6">
          {[
            { text: "Privacy Policy", link: "/privacy-policy" },
            { text: "Terms of Service", link: "/terms-of-service" },
            {
              text: "GitHub",
              link: "https://github.com/mbramani/lumina-wallet",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-sm font-medium transition-colors hover:text-primary hover:underline underline-offset-4"
              {...(item.text === "GitHub"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
