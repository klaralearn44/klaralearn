import { LegalDocument, LegalTable, PolicyLink } from '@/components/legal/LegalDocument';

export function CookiePolicyPage() {
  return (
    <LegalDocument
      title="Cookie Policy"
      description="The cookies used on klaralearn.com and app.klaralearn.com, and how to accept or reject non-essential cookies."
      path="/legal/cookies"
    >
      <p>We only use non-essential cookies if you say yes. This policy explains the cookies used on klaralearn.com and app.klaralearn.com, run by EDUBRIDGE GLOBAL LEARNING LIMITED, trading as KlaraLearn.</p>

      <section>
        <h2>What cookies are</h2>
        <p>Cookies are small files saved on your device when you visit a website. Some are needed for the site to work. Others help us understand how the site is used.</p>
      </section>

      <section>
        <h2>The cookies we use</h2>
        <LegalTable
          headers={['Type', 'What they do', 'Set by', 'Need your consent?']}
          rows={[
            ['Strictly necessary', 'Keep you signed in, keep your account secure, and remember your cookie choices', 'KlaraLearn (via Bubble and our website)', 'No, the site can’t work without them'],
            ['Payment and fraud prevention', 'Process card payments securely and help prevent fraud at checkout', 'Stripe', 'No, needed to take payment safely'],
            ['Analytics', 'Tell us how many people visit, which pages they use and where they came from, so we can improve the site', 'Our analytics provider', 'Yes'],
          ]}
        />
        <p>We do not use advertising or tracking cookies.</p>
        <p>The exact names and lifetimes of each cookie are listed in our cookie settings panel.</p>
      </section>

      <section>
        <h2>Your choices</h2>
        <ul>
          <li>When you first visit, our banner lets you accept or reject non-essential cookies. Rejecting is as easy as accepting.</li>
          <li>You can change your mind at any time using “Cookie settings” in the footer of our website.</li>
          <li>You can also block or delete cookies in your browser settings, but parts of KlaraLearn, such as signing in, may stop working.</li>
        </ul>
      </section>

      <section>
        <h2>More information</h2>
        <p>Our <PolicyLink href="/legal/privacy">Privacy Notice</PolicyLink> explains how we use personal information more generally. Questions: support@klaralearn.com.</p>
      </section>
    </LegalDocument>
  );
}
