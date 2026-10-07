import type { Dict } from "@/content";
import { mailLink, routes, site, telLink, whatsappLink } from "@/lib/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { ArrowRight, Clock, Mail, Phone, Pin, WhatsApp } from "@/components/ui/Icons";

export function Contact({ d, topicIds }: { d: Dict["contact"]; topicIds: string[] }) {
  const a = site.address;

  return (
    <section className="section section--ink contact" id="contacto" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro" data-reveal>
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 id="contact-title" className="contact__title">
            {d.title}
          </h2>
          <p className="lead">{d.lede}</p>

          <div className="wa">
            <a
              href={whatsappLink(d.whatsapp.message)}
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp />
              {d.whatsapp.label}
              <ArrowRight />
            </a>
            <p className="wa__hint">{d.whatsapp.hint}</p>
          </div>

          <ul className="contact__list">
            <li className="contact-item">
              <span className="contact-item__icon">
                <Phone />
              </span>
              <div>
                <span className="contact-item__label">{d.labels.phone}</span>
                <p className="contact-item__value">
                  <a href={telLink}>{site.phone.display}</a>
                </p>
              </div>
            </li>
            <li className="contact-item">
              <span className="contact-item__icon">
                <Mail />
              </span>
              <div>
                <span className="contact-item__label">{d.labels.email}</span>
                <p className="contact-item__value">
                  <a href={mailLink()}>{site.email}</a>
                </p>
              </div>
            </li>
            <li className="contact-item">
              <span className="contact-item__icon">
                <Pin />
              </span>
              <div>
                <span className="contact-item__label">{d.labels.address}</span>
                <div className="contact-item__value">
                  <address style={{ fontStyle: "normal" }}>
                    {a.street}, {a.neighborhood}
                    <br />
                    {a.postalCode} {a.city}, {a.regionCode}
                  </address>
                </div>
              </div>
            </li>
            <li className="contact-item">
              <span className="contact-item__icon">
                <Clock />
              </span>
              <div>
                <span className="contact-item__label">{d.labels.hours}</span>
                <p className="contact-item__value">{d.hours}</p>
              </div>
            </li>
          </ul>

        </div>

        <div data-reveal style={{ "--i": 1 } as React.CSSProperties}>
          <ContactForm form={d.form} topicIds={topicIds} privacyHref={routes.es.privacy} />
        </div>
      </div>

    </section>
  );
}
