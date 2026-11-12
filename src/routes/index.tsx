import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowDown, ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import portrait from "@/assets/sayonara-portrait.webp.asset.json";
import listening from "@/assets/sayonara-escuta.webp.asset.json";
import reflection from "@/assets/sayonara-reflexao.webp.asset.json";

const WHATSAPP = "https://wa.me/5565992720544";
const INSTAGRAM = "https://www.instagram.com/sayonara.psi";
const navigation = [
  { label: "Sobre mim", href: "#sobre" },
  { label: "Meu trabalho", href: "#meu-trabalho" },
  { label: "O processo", href: "#processo" },
  { label: "Dúvidas", href: "#duvidas" },
];
const pillars = [
  { title: "Identidade", text: "Reconhecer quem você é, compreender sua história e fortalecer sua relação consigo mesma." },
  { title: "Propósito", text: "Refletir sobre suas escolhas, reconhecer seus valores e construir caminhos mais alinhados com quem você deseja ser." },
  { title: "Maturidade emocional", text: "Desenvolver uma relação mais consciente com suas emoções, respeitando seus sentimentos e sua própria trajetória." },
];
const steps = [
  { title: "Primeiro contato", text: "Entre em contato para conhecer o atendimento e esclarecer suas dúvidas." },
  { title: "Agendamento", text: "Vamos encontrar um horário adequado para iniciar seu acompanhamento." },
  { title: "Sua jornada", text: "Um espaço de escuta, reflexão e cuidado, respeitando sua história e seu próprio tempo." },
];
const questions = [
  { question: "Como funciona a primeira consulta?", answer: "A primeira consulta é um momento para nos conhecermos. Você pode compartilhar o que a trouxe até aqui, falar sobre suas expectativas e esclarecer suas dúvidas, respeitando o que se sentir confortável em dividir." },
  { question: "Preciso estar passando por um momento difícil para fazer terapia?", answer: "Não. A psicoterapia também pode ser um espaço para se conhecer melhor, refletir sobre suas escolhas e compreender sua relação com as emoções. Seu desejo de olhar para si já merece acolhimento." },
  { question: "Como posso agendar meu atendimento?", answer: "Você pode entrar em contato comigo pelo WhatsApp. Por lá, vamos conversar sobre o atendimento, esclarecer suas dúvidas e verificar os horários disponíveis." },
  { question: "Quanto tempo dura uma sessão?", answer: "Para conhecer a duração das sessões e os detalhes do acompanhamento, converse comigo pelo WhatsApp. Assim, você recebe as informações sobre o atendimento antes de agendar." },
  { question: "O atendimento é online ou presencial?", answer: "Entre em contato pelo WhatsApp para consultar as modalidades de atendimento e entender qual possibilidade faz sentido para você." },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sayonara | Psicologia para mulheres que querem se reencontrar" },
      { name: "description", content: "Um espaço de escuta, acolhimento e autoconhecimento com Sayonara, psicóloga CRP 18/7468. Identidade, propósito e maturidade emocional. Agende pelo WhatsApp." },
      { property: "og:title", content: "Sayonara | Psicologia para mulheres" },
      { property: "og:description", content: "Psicologia para mulheres que querem se reencontrar. Conheça o trabalho de Sayonara e entre em contato para agendar seu atendimento." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.7Z" /><path d="M8.1 7.8c.4-.5.8-.4 1.1.2l.9 1.8c.2.4-.5.9-.7 1.1.7 1.5 1.8 2.6 3.4 3.2.3-.4.8-1.2 1.2-1l1.8.9c.6.3.6.7.2 1.2-.7.9-1.6 1-2.7.6-2.8-1-5.1-3.2-6-5.9-.3-.9 0-1.5.8-2.1Z" /></svg>;
}

function Appointment({ children = "Agende sua consulta", ivory = false, className = "" }: { children?: ReactNode; ivory?: boolean; className?: string }) {
  return <Button asChild variant={ivory ? "ivory" : "appointment"} className={className}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />{children}<ArrowUpRight /></a></Button>;
}

function Wordmark() {
  return <a href="#inicio" className="wordmark" aria-label="Sayonara, início"><span>Sayonara</span><small>Psicologia para mulheres</small></a>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-wait");
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach((element) => { element.classList.add("reveal-wait"); observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <header className="site-header" id="inicio">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((link) => <a key={link.href} href={link.href} className="nav-link">{link.label}</a>)}
          <Appointment className="header-cta" />
        </nav>
        <Button className="mobile-menu-toggle shrink-0" variant="ghost" size="icon" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        {menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Navegação móvel">
          {navigation.map((link) => <a key={link.href} href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>{link.label}</a>)}
          <Appointment />
        </nav>}
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img src={portrait.url} className="hero-photo" alt="Sayonara, psicóloga, sentada em uma poltrona em seu retrato profissional" width="768" height="768" fetchPriority="high" />
          <div className="hero-photo-blend" />
          <div className="hero-inner"><div className="hero-copy">
            <span className="eyebrow">Um olhar para dentro. Um novo encontro.</span>
            <h1 id="hero-title">Psicologia para<br />mulheres que querem<br /><em>se reencontrar.</em></h1>
            <p className="hero-description">Um espaço de acolhimento e autoconhecimento para mulheres que desejam compreender sua história, reconhecer sua identidade e construir novos caminhos.</p>
            <p className="brand-pillars">Identidade • Propósito • Maturidade emocional</p>
            <div className="hero-actions"><Appointment /><Button variant="editorial" asChild><a href="#sobre">Conheça meu trabalho <ArrowDown /></a></Button></div>
            <p className="professional">Psicóloga | CRP 18/7468</p>
          </div></div>
          <a href="#sobre" className="hero-bottom">Seu tempo. Sua história. <ArrowDown size={14} /></a>
        </section>
        <div className="intro-line"><span>Escuta</span><span className="dot" /><span>Acolhimento</span><span className="dot" /><span>Autoconhecimento</span></div>

        <section className="section" id="sobre" aria-labelledby="about-title">
          <div className="content-width editorial-grid reveal">
            <figure className="m-0 min-w-0"><img className="about-photo" src={listening.url} alt="Sayonara em um momento de escuta e acolhimento" width="768" height="1020" loading="lazy" /><figcaption className="photo-caption"><span>Sayonara · Psicóloga</span><span>CRP 18/7468</span></figcaption></figure>
            <div className="section-copy min-w-0"><span className="eyebrow">Prazer, sou Sayonara</span><h2 id="about-title">Um espaço para<br />você <em>se reencontrar.</em></h2>
              <p>Acredito que cada mulher carrega uma história que merece ser escutada com atenção, sensibilidade e respeito.</p>
              <p>No meu trabalho como psicóloga, ofereço um espaço de acolhimento para que você possa olhar para si, compreender suas emoções e reconhecer o que faz sentido na sua própria trajetória.</p>
              <p>Mais do que encontrar respostas prontas, nosso encontro é um convite à reflexão. Um cuidado construído com escuta, respeitando a sua singularidade e o seu tempo.</p>
              <div className="signature-name">Sayonara</div><p className="professional">Psicóloga | CRP 18/7468</p>
              <Button variant="editorial" asChild><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Vamos conversar? <ArrowUpRight /></a></Button>
            </div>
          </div>
        </section>

        <section className="section pillar-section" id="meu-trabalho" aria-labelledby="pillars-title"><div className="content-width reveal">
          <div className="section-intro"><span className="eyebrow">O que nos guia</span><h2 id="pillars-title">Reconhecer-se. Escolher. <em>Amadurecer.</em></h2><p>Três pilares para uma relação mais consciente com você mesma.</p></div>
          <div className="pillar-grid">{pillars.map((pillar, index) => <article className="pillar" key={pillar.title}><span className="number">0{index + 1}</span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}</div>
        </div></section>

        <section className="section reflection" aria-labelledby="reflection-title"><div className="content-width editorial-grid reveal">
          <div className="section-copy min-w-0"><span className="eyebrow">Um convite ao autoconhecimento</span><h2 id="reflection-title">Você não precisa<br />se perder de si mesma<br />para continuar<br /><em>seguindo em frente.</em></h2><p>Às vezes, é preciso parar, olhar para dentro e reconhecer aquilo que merece atenção. A psicoterapia pode ser um espaço para compreender sentimentos, refletir sobre sua história e construir uma relação mais consciente consigo mesma.</p><Button variant="editorial" asChild><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Permita-se esse encontro <ArrowUpRight /></a></Button></div>
          <img className="reflection-photo" src={reflection.url} alt="Retrato de Sayonara em uma postura reflexiva" width="768" height="960" loading="lazy" />
        </div></section>

        <section className="section process" id="processo" aria-labelledby="process-title"><div className="content-width reveal">
          <div className="section-intro"><span className="eyebrow">Como começamos</span><h2 id="process-title">Cada jornada começa<br />com <em>um primeiro passo.</em></h2></div>
          <div className="pillar-grid">{steps.map((step, index) => <article className="pillar" key={step.title}><span className="number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          <Appointment className="process-cta">Quero conversar</Appointment>
        </div></section>

        <section className="signature-band" aria-label="Uma reflexão"><div className="reveal"><h2>Reencontrar-se também<br />é um ato de <em>coragem.</em></h2><span /></div></section>

        <section className="section" id="duvidas" aria-labelledby="faq-title"><div className="content-width faq-grid reveal">
          <div className="faq-intro min-w-0"><span className="eyebrow">Antes do nosso encontro</span><h2 id="faq-title">Talvez você<br /><em>esteja se perguntando.</em></h2><p>Algumas respostas para acolher suas primeiras dúvidas.</p><Button variant="editorial" asChild><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Tem outra dúvida? Vamos conversar <ArrowUpRight /></a></Button></div>
          <Accordion type="single" collapsible className="min-w-0">{questions.map((item, index) => <AccordionItem value={`question-${index}`} key={item.question}><AccordionTrigger className="faq-trigger">{item.question}</AccordionTrigger><AccordionContent className="faq-answer">{item.answer}</AccordionContent></AccordionItem>)}</Accordion>
        </div></section>

        <section className="final-contact" id="contato" aria-labelledby="contact-title"><div className="reveal"><span className="eyebrow">O primeiro passo pode ser hoje</span><h2 id="contact-title">Que tal começar a olhar para<br />você com <em>mais carinho?</em></h2><p>Seu processo de reencontro começa quando você se permite dar o primeiro passo.</p><Appointment ivory>Agende sua consulta pelo WhatsApp</Appointment></div></section>
      </main>
      <footer className="site-footer"><div className="content-width"><div className="footer-main"><Wordmark /><div className="footer-links"><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><Instagram size={14} /> Instagram <ArrowUpRight size={12} /></a><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={12} /></a></div></div><div className="footer-bottom"><span>© 2026 Sayonara. Todos os direitos reservados.</span><span>Psicóloga | CRP 18/7468</span></div></div></footer>
      <Button variant="appointment" asChild className="floating-contact"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Conversar com Sayonara pelo WhatsApp" title="Conversar pelo WhatsApp"><WhatsAppIcon /></a></Button>
    </>
  );
}
