import React, { useState } from "react";
import { siteConfig } from "../../config/site";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { Modal } from "../modals/Modal";

export const Footer: React.FC = () => {
  const [modal, setModal] = useState<"privacy" | "terms" | null>(null);
  const close = () => setModal(null);

  return (
    <footer className="border-t border-line bg-alt">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Logo />
          <p className="text-sm text-ink-soft">Prove your idea. Grow your business.</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">{siteConfig.email}</a>
          <button onClick={() => setModal("privacy")} className="hover:text-ink">Privacy</button>
          <button onClick={() => setModal("terms")} className="hover:text-ink">Terms</button>
        </div>
      </Container>

      <div className="border-t border-line py-5 text-center font-mono text-xs text-ink-mute">
        © {new Date().getFullYear()} {siteConfig.name.toUpperCase()} · {siteConfig.domain}
      </div>

      <Modal title="Privacy" open={modal === "privacy"} onClose={close}>
        <p>We only use the details you send through this site to reply to you.</p>
        <p>We never sell or share your information, and we don't add you to marketing lists.</p>
        <p>Questions? Write to {siteConfig.email}.</p>
      </Modal>

      <Modal title="Terms" open={modal === "terms"} onClose={close}>
        <p>This website describes what we do. It isn't a contract or a guarantee.</p>
        <p>Every project runs under its own written agreement that covers scope, timeline, price and ownership.</p>
      </Modal>
    </footer>
  );
};
