import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';

function LegalPage({
  title,
  description,
  path,
  updated,
  children,
}: {
  title: string;
  description: string;
  path: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <SEOHead title={`${title} | KlaraLearn`} description={description} path={path} />
      <main className="bg-slate-50 py-16 sm:py-24">
        <article className="container mx-auto max-w-3xl px-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">KlaraLearn legal</p>
            <h1 className="mb-3 text-4xl font-bold text-secondary">{title}</h1>
            <p className="mb-10 text-sm text-slate-500">Last updated: {updated}</p>
            <div className="space-y-8 text-slate-700 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-secondary [&_p]:leading-7 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
              {children}
            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How KlaraLearn handles personal information when parents and learners use its website and tutoring platform."
      path="/legal/privacy"
      updated="29 August 2026"
    >
      <section>
        <h2>What this policy covers</h2>
        <p>This policy explains the types of personal information KlaraLearn may process when you browse our website, create an account, review tutor profiles, contact us, or use tutoring services.</p>
      </section>
      <section>
        <h2>Information we may collect</h2>
        <ul>
          <li>Account and contact information you provide.</li>
          <li>Learning preferences, enquiries, bookings, and service communications.</li>
          <li>Technical information such as device, browser, and website usage data.</li>
          <li>Payment-related records supplied by payment providers; KlaraLearn does not need to store full card details.</li>
        </ul>
      </section>
      <section>
        <h2>How information may be used</h2>
        <p>Information may be used to provide the service, respond to enquiries, administer bookings, improve the platform, prevent misuse, meet legal obligations, and communicate important service information.</p>
      </section>
      <section>
        <h2>Sharing and retention</h2>
        <p>Information may be shared with service providers or tutors where necessary to deliver a requested service, and with authorities where required by law. Records are retained only for as long as needed for the purpose collected or to meet legal requirements.</p>
      </section>
      <section>
        <h2>Your choices and rights</h2>
        <p>Depending on the circumstances, you may ask for access, correction, deletion, restriction, or a copy of your personal information, or object to certain processing. Use the contact details provided within the KlaraLearn platform to make a privacy request.</p>
      </section>
      <section>
        <h2>Changes to this policy</h2>
        <p>We may update this policy as the service or legal requirements change. The latest version and its update date will be published on this page.</p>
      </section>
    </LegalPage>
  );
}

export function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="Terms that apply when using the KlaraLearn website and accessing its online tutoring platform."
      path="/legal/terms"
      updated="29 August 2026"
    >
      <section>
        <h2>Using KlaraLearn</h2>
        <p>These terms apply when you use the KlaraLearn website or follow links to its tutoring platform. By using the service, you agree to use it lawfully and to provide accurate information where requested.</p>
      </section>
      <section>
        <h2>Accounts and parent responsibility</h2>
        <p>Parents and guardians are responsible for supervising a child’s use of the service, protecting account access, reviewing tutor profile information, and deciding whether a tutor is suitable for their family’s needs.</p>
      </section>
      <section>
        <h2>Tutor profiles and learning outcomes</h2>
        <p>Profile information helps families compare available tutors, but availability, suitability, teaching outcomes, examination results, and school admission cannot be guaranteed. Parents should make their own checks before booking.</p>
      </section>
      <section>
        <h2>Bookings, prices, and payments</h2>
        <p>Current prices, booking details, cancellation conditions, and any applicable payment terms are shown in the tutoring platform during the booking process. Review those details before confirming a purchase.</p>
      </section>
      <section>
        <h2>Acceptable use</h2>
        <p>You must not misuse the service, attempt unauthorised access, interfere with its operation, copy protected content without permission, or use it to harm another person.</p>
      </section>
      <section>
        <h2>Service changes and liability</h2>
        <p>We may update, suspend, or change parts of the service. Nothing in these terms excludes liability that cannot lawfully be excluded. Otherwise, use of the website is at your own discretion and subject to applicable UK law.</p>
      </section>
    </LegalPage>
  );
}