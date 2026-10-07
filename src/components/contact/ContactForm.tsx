"use client";

import { SiteLink as Link } from "@/components/ui/SiteLink";
import { useId, useState, useSyncExternalStore, type FormEvent } from "react";
import type { Dict } from "@/content";
import { mailLink, whatsappLink } from "@/lib/site";
import { ArrowRight } from "@/components/ui/Icons";

type Field = "name" | "phone" | "topic" | "message" | "consent";
type Errors = Partial<Record<Field, string>>;

interface ContactFormProps {
  form: Dict["contact"]["form"];
  /** Same order as form.topics, minus the trailing "not sure" option. */
  topicIds: string[];
  privacyHref: string;
}

const FIELD_ORDER: Field[] = ["name", "phone", "topic", "message", "consent"];

/**
 * Static-site contact flow: no server, no stored data. A valid submission opens
 * WhatsApp (or the mail app) with the message pre-written. The visitor sends it.
 */
export function ContactForm({ form, topicIds, privacyHref }: ContactFormProps) {
  const uid = useId();
  const id = (field: Field) => `${uid}-${field}`;

  const [values, setValues] = useState({ name: "", phone: "", topic: "", message: "", consent: false });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  // Deep link from the civil-law page: /?tema=<service-id>#contacto. Read through
  // useSyncExternalStore so the server render (no URL) and the first client
  // render agree, then the preselected topic appears without a hydration mismatch.
  const urlTopic = useSyncExternalStore(
    () => () => {},
    () => new URLSearchParams(window.location.search).get("tema") ?? "",
    () => "",
  );
  const urlTopicIndex = urlTopic ? topicIds.indexOf(urlTopic) : -1;
  const topic = values.topic !== "" ? values.topic : urlTopicIndex >= 0 ? String(urlTopicIndex) : "";
  const current = { ...values, topic };

  const validate = (v = current): Errors => {
    const next: Errors = {};
    if (!v.name.trim()) next.name = form.errors.name;
    if (v.phone.replace(/\D/g, "").length < 10) next.phone = form.errors.phone;
    if (v.topic === "") next.topic = form.errors.topic;
    if (!v.message.trim()) next.message = form.errors.message;
    if (!v.consent) next.consent = form.errors.consent;
    return next;
  };

  const setField = <K extends keyof typeof values>(key: K, value: (typeof values)[K]) => {
    const next = { ...current, [key]: value };
    setValues(next);
    setSent(false);
    // Re-validate a field that already shows an error, so it clears as soon as it is fixed.
    if (errors[key as Field]) setErrors((e) => ({ ...e, [key]: validate(next)[key as Field] }));
  };

  const blur = (key: Field) => setErrors((e) => ({ ...e, [key]: validate()[key] }));

  const compose = () => {
    const topicLabel = form.topics[Number(topic)] ?? form.topics[form.topics.length - 1];
    return [
      `${form.whatsappGreeting} ${values.name.trim()}. ${form.whatsappTopic}: ${topicLabel}.`,
      "",
      values.message.trim(),
      "",
      `${form.whatsappPhone}: ${values.phone.trim()}`,
    ].join("\n");
  };

  const guard = (): boolean => {
    const found = validate();
    setErrors(found);
    const first = FIELD_ORDER.find((f) => found[f]);
    if (first) {
      document.getElementById(id(first))?.focus();
      return false;
    }
    return true;
  };

  const sendWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    if (!guard()) return;
    const url = whatsappLink(compose());
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url;
    setSent(true);
  };

  const sendEmail = () => {
    if (!guard()) return;
    window.location.href = mailLink(form.emailSubject, compose());
    setSent(true);
  };

  const err = (f: Field) => (errors[f] ? `${id(f)}-error` : undefined);

  return (
    <form className="form-panel" onSubmit={sendWhatsApp} noValidate>
      <h3 className="form-panel__title">{form.title}</h3>

      <div className="form-row form-row--2">
        <div className={`field${errors.name ? " field--error" : ""}`}>
          <label className="field__label" htmlFor={id("name")}>
            {form.name} <span className="req" aria-hidden>*</span>
          </label>
          <input
            id={id("name")}
            className="input"
            type="text"
            name="name"
            autoComplete="name"
            required
            value={values.name}
            aria-invalid={!!errors.name}
            aria-describedby={err("name")}
            onChange={(e) => setField("name", e.target.value)}
            onBlur={() => blur("name")}
          />
          {errors.name && (
            <p className="field__error" id={err("name")}>
              {errors.name}
            </p>
          )}
        </div>

        <div className={`field${errors.phone ? " field--error" : ""}`}>
          <label className="field__label" htmlFor={id("phone")}>
            {form.phone} <span className="req" aria-hidden>*</span>
          </label>
          <input
            id={id("phone")}
            className="input"
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            required
            value={values.phone}
            aria-invalid={!!errors.phone}
            aria-describedby={err("phone")}
            onChange={(e) => setField("phone", e.target.value)}
            onBlur={() => blur("phone")}
          />
          {errors.phone && (
            <p className="field__error" id={err("phone")}>
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className={`field${errors.topic ? " field--error" : ""}`}>
        <label className="field__label" htmlFor={id("topic")}>
          {form.topic} <span className="req" aria-hidden>*</span>
        </label>
        <select
          id={id("topic")}
          className="select"
          name="topic"
          required
          value={topic}
          aria-invalid={!!errors.topic}
          aria-describedby={err("topic")}
          onChange={(e) => setField("topic", e.target.value)}
          onBlur={() => blur("topic")}
        >
          <option value="" disabled>
            {form.topicDefault}
          </option>
          {form.topics.map((label, i) => (
            <option key={label} value={String(i)}>
              {label}
            </option>
          ))}
        </select>
        {errors.topic && (
          <p className="field__error" id={err("topic")}>
            {errors.topic}
          </p>
        )}
      </div>

      <div className={`field${errors.message ? " field--error" : ""}`}>
        <label className="field__label" htmlFor={id("message")}>
          {form.message} <span className="req" aria-hidden>*</span>
        </label>
        <textarea
          id={id("message")}
          className="textarea"
          name="message"
          required
          value={values.message}
          aria-invalid={!!errors.message}
          aria-describedby={err("message")}
          onChange={(e) => setField("message", e.target.value)}
          onBlur={() => blur("message")}
        />
        {errors.message && (
          <p className="field__error" id={err("message")}>
            {errors.message}
          </p>
        )}
      </div>

      <div className={`field${errors.consent ? " field--error" : ""}`}>
        <label className={`check${errors.consent ? " field--error" : ""}`} htmlFor={id("consent")}>
          <input
            id={id("consent")}
            type="checkbox"
            name="consent"
            checked={values.consent}
            aria-invalid={!!errors.consent}
            aria-describedby={err("consent")}
            onChange={(e) => setField("consent", e.target.checked)}
          />
          <span>
            {form.consentPrefix}{" "}
            <Link href={privacyHref} className="text-link" target="_blank">
              {form.consentLink}
            </Link>{" "}
            {form.consentSuffix}
          </span>
        </label>
        {errors.consent && (
          <p className="field__error" id={err("consent")}>
            {errors.consent}
          </p>
        )}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn--primary btn--block">
          {form.submit}
          <ArrowRight />
        </button>
        <button type="button" className="link-arrow form-alt" onClick={sendEmail}>
          {form.emailInstead}
        </button>
        <p className="form-note">{form.note}</p>
      </div>

      <div role="status" aria-live="polite">
        {sent && <p className="form-status">{form.sent}</p>}
      </div>
    </form>
  );
}
