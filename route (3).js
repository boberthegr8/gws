import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Install Hush & Fix TiviMate — GWS",
  description:
    "Step-by-step guide to install Hush and fix TiviMate playback for Great White Streams.",
};

function Step({ n, title, children }) {
  return (
    <div className="card" style={{ display: "flex", gap: 18 }}>
      <div
        className="ico"
        style={{ flex: "0 0 46px", fontWeight: 800, fontSize: 18 }}
      >
        {n}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function InstallPage() {
  return (
    <>
      <Nav />

      <header className="hero" style={{ padding: "70px 0 30px" }}>
        <div className="container">
          <span className="eyebrow">Setup &amp; troubleshooting</span>
          <h1 style={{ fontSize: "clamp(34px,5vw,56px)", margin: "18px 0 14px" }}>
            Install Hush &amp; Fix TiviMate
          </h1>
          <p className="hero-sub" style={{ maxWidth: 640 }}>
            Two quick walkthroughs. Placeholder steps below — swap in your exact
            instructions, links, and screenshots any time. (Edit{" "}
            <code>app/install/page.jsx</code>.)
          </p>
          <div className="hero-cta">
            <a href="#install-hush" className="btn btn-primary">
              Install Hush
            </a>
            <a href="#tivimate" className="btn btn-ghost">
              Fix TiviMate
            </a>
          </div>
        </div>
      </header>

      {/* INSTALL HUSH */}
      <section id="install-hush" className="section-pad">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">🦈 Hush</span>
            <h2>Install Hush — fresh setup</h2>
            <p>Follow these in order. Whole thing takes about five minutes.</p>
          </div>
          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Prepare your device">
              [Placeholder] Note which device you&apos;re on — Firestick,
              Android TV box, phone, etc. Make sure it&apos;s on Wi-Fi and
              you&apos;ve got your GWS login from your welcome email.
            </Step>
            <Step n="2" title="Allow app installs">
              [Placeholder] Enable installs from unknown sources for the
              sideload app (e.g. Downloader). Add your exact toggle path here.
            </Step>
            <Step n="3" title="Download the Hush app">
              [Placeholder] Drop your official Hush download link or code here so
              members grab the right build.
            </Step>
            <Step n="4" title="Enter your credentials">
              [Placeholder] Open Hush, enter the username/password (or M3U /
              Xtream details) from your welcome email, and let it load the
              playlist.
            </Step>
            <Step n="5" title="Confirm playback">
              [Placeholder] Open a channel to confirm it&apos;s streaming. If
              anything looks off, jump to the TiviMate fixes below or contact
              support.
            </Step>
          </div>
        </div>
      </section>

      {/* FIX TIVIMATE */}
      <section id="tivimate" className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <span className="eyebrow">🛠️ TiviMate</span>
            <h2>Fix TiviMate (Hush)</h2>
            <p>
              Playlist won&apos;t load, EPG missing, or buffering? Work through
              these.
            </p>
          </div>
          <div className="grid" style={{ gap: 16 }}>
            <Step n="1" title="Refresh the playlist">
              [Placeholder] TiviMate → Settings → Playlists → select your GWS
              playlist → Update / Reload.
            </Step>
            <Step n="2" title="Re-add the source if needed">
              [Placeholder] If updating fails, remove the playlist and re-add it
              with your current GWS URL/credentials. Add the exact field values
              here.
            </Step>
            <Step n="3" title="Fix the EPG / guide">
              [Placeholder] Settings → EPG → set the correct EPG URL and force a
              refresh. Drop your EPG link here.
            </Step>
            <Step n="4" title="Clear buffering">
              [Placeholder] Lower the buffer/decoder settings, switch to a
              closer server if offered, and test on a wired connection.
            </Step>
            <Step n="5" title="Still stuck?">
              Reach out and we&apos;ll sort it.{" "}
              <Link href="/#contact">Contact support →</Link>
            </Step>
          </div>

          <div className="band" style={{ marginTop: 40 }}>
            <h2>Need a hand?</h2>
            <p>
              Send us a message or jump into the Telegram chat — we&apos;ll walk
              you through it.
            </p>
            <Link href="/#contact" className="btn btn-primary">
              Contact support →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
