import { LegalDocument, LegalTable, PolicyLink } from '@/components/legal/LegalDocument';

export function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Notice"
      description="How KlaraLearn collects and uses personal information about parents, guardians and the children they book lessons for."
      path="/legal/privacy"
    >
      <p>This notice explains how KlaraLearn collects and uses personal information about parents, guardians and the children they book lessons for.</p>

      <section>
        <h2>1. Who we are</h2>
        <p>KlaraLearn is a trading name of EDUBRIDGE GLOBAL LEARNING LIMITED, a company registered in England and Wales (company number 17011141). Our registered office is 167–169 Great Portland Street, London, England, W1W 5PF.</p>
        <p>We are the data controller for the information described in this notice. Our ICO registration number will be published on this page when it is issued. If you have any question about your data, email support@klaralearn.com with “Privacy” in the subject line.</p>
      </section>

      <section>
        <h2>2. How KlaraLearn works</h2>
        <p>KlaraLearn is an online marketplace that connects parents with independent tutors, most of whom are based in Nigeria and Ghana. Parents hold the account, book lessons and communicate with tutors. Children take part only in the lessons themselves, which happen on Zoom or Google Meet.</p>
      </section>

      <section>
        <h2>3. The information we collect</h2>
        <LegalTable
          headers={['About', 'Information', 'Where it comes from']}
          rows={[
            ['You (parent or guardian)', 'Name, email address, password, country, phone number (if given)', 'You, when you sign up'],
            ['Your child', 'First name, age or year group, school (optional), subjects and learning goals', 'You, when you add your child to your profile'],
            ['Bookings', 'Lesson dates, tutor, subject, lesson status, payment status', 'Created when you book'],
            ['Messages', 'Messages between you and your child’s tutor on KlaraLearn', 'You and the tutor'],
            ['Payments', 'Amount, date, last four digits of your card, payment status. We never see or store your full card number.', 'Stripe, our payment provider'],
            ['Lesson recordings', 'Video recordings and written transcripts of each lesson', 'Our recording service, which joins each lesson automatically'],
            ['Safety reports', 'Details of any concern you or a tutor reports to us', 'You or the tutor'],
            ['Agreements', 'Which version of our policies you accepted, and when', 'Created when you accept'],
            ['Technical data', 'IP address, browser, device, and how you use our website', <>Your device, through cookies (see our <PolicyLink href="/legal/cookies">Cookie Policy</PolicyLink>)</>],
          ]}
        />
      </section>

      <section>
        <h2>4. Why we use it, and our lawful basis</h2>
        <LegalTable
          headers={['Purpose', 'Lawful basis']}
          rows={[
            ['Running your account, arranging lessons, taking payment, connecting you with tutors', 'Contract: we need it to provide the service you asked for'],
            ['Recording and transcribing lessons, to keep children safe, check teaching quality and resolve disputes', 'Legitimate interests: safeguarding children and protecting everyone using the platform'],
            ['Responding to safety concerns and sharing information with authorities when a child may be at risk', 'Legitimate interests, and legal obligation where the law requires it'],
            ['Keeping payment and tax records', 'Legal obligation'],
            ['Preventing fraud and keeping the platform secure', 'Legitimate interests'],
            ['Sending you tips, news and offers by email', 'Consent: only if you opt in, and you can unsubscribe at any time'],
            ['Non-essential cookies on our website', 'Consent, through our cookie banner'],
          ]}
        />
        <p>We do not make decisions about you or your child using fully automated processes, and we never sell personal information or use it for advertising profiles.</p>
      </section>

      <section>
        <h2>5. Lesson recordings</h2>
        <p>Every lesson is recorded and transcribed. Our <PolicyLink href="/legal/session-recording">Session Recording Policy</PolicyLink> explains this in full. In short:</p>
        <ul>
          <li>You can watch your child’s lesson videos for 30 days after each lesson.</li>
          <li>The tutor can read the written transcript of their own lessons, but cannot watch the video.</li>
          <li>A small number of KlaraLearn staff can access recordings only to handle a safety concern, complaint or request from you.</li>
          <li>Videos are deleted after 30 days and transcripts after 6 months, unless they are needed for an open safety concern or complaint.</li>
        </ul>
      </section>

      <section>
        <h2>6. Who we share information with</h2>
        <ul>
          <li>Your child’s tutor: your name, your child’s first name, age or year group, subjects, learning goals, your messages, and transcripts of their own lessons.</li>
          <li>Service providers acting on our instructions, under contracts that require them to protect your data:
            <ul>
              <li>Bubble: hosts the KlaraLearn app</li>
              <li>Vercel: hosts our website</li>
              <li>Cloudflare: secure storage for recordings and transcripts</li>
              <li>Recall.ai: records and transcribes lessons</li>
              <li>Stripe: processes payments</li>
              <li>Our email provider: sends account and booking emails</li>
              <li>Our analytics provider: website analytics, only if you accept analytics cookies</li>
            </ul>
          </li>
          <li>Zoom and Google provide the video calls. They process call data under their own privacy policies.</li>
          <li>Authorities: the police, children’s social care or regulators, when the law requires it or when we believe a child is at risk of harm.</li>
          <li>Professional advisers such as lawyers and accountants, when needed.</li>
        </ul>
      </section>

      <section>
        <h2>7. International transfers</h2>
        <p>Some of our service providers process data in the United States, and most of our tutors are based in Nigeria and Ghana. When personal information leaves the UK, we protect it using safeguards approved under UK law, such as the UK International Data Transfer Agreement or Addendum, or the UK–US data bridge where the recipient is certified. Tutors receive only the information they need to teach, and must agree to protect it. You can ask us for a copy of these safeguards.</p>
      </section>

      <section>
        <h2>8. How long we keep information</h2>
        <LegalTable
          headers={['Information', 'How long']}
          rows={[
            ['Lesson videos', '30 days after the lesson'],
            ['Lesson transcripts', '6 months after the lesson'],
            ['Your account and your child’s details', 'Until you close your account, or 12 months after your last login (we email you first)'],
            ['Messages', 'Until your account closes, plus 1 year'],
            ['Payment and tax records', '6 years, as required by law'],
            ['Safety reports about a child', 'Until the child turns 25'],
            ['Complaints', '3 years after the complaint is closed'],
          ]}
        />
        <p>If information is needed for an open safety concern, complaint or legal claim, we keep it until that matter is resolved.</p>
      </section>

      <section>
        <h2>9. Your rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>ask for a copy of the information we hold about you or your child</li>
          <li>ask us to correct anything that is wrong</li>
          <li>ask us to delete information, unless we must keep it by law or for safeguarding</li>
          <li>ask us to restrict or stop using your information, or object to how we use it</li>
          <li>ask for your information in a portable format</li>
          <li>withdraw consent you have given, such as for marketing emails</li>
        </ul>
        <p>Email support@klaralearn.com to use any of these rights. We will reply within one month. Children can also exercise their own rights; we will usually involve the parent who holds the account. The <PolicyLink href="/legal/young-people">Notice for Young People</PolicyLink> explains this in language for children.</p>
      </section>

      <section>
        <h2>10. Keeping information secure</h2>
        <p>We use access controls, encryption in transit, two-factor authentication on our systems, and access logs for lesson recordings. Only people who need information for their role can see it.</p>
      </section>

      <section>
        <h2>11. Complaints</h2>
        <p>Please contact us first so we can try to put things right. You can also use our <PolicyLink href="/legal/complaints">Complaints Policy</PolicyLink>. You have the right to complain to the Information Commissioner’s Office at ico.org.uk or on 0303 123 1113.</p>
      </section>

      <section>
        <h2>12. Changes to this notice</h2>
        <p>If we make an important change, we will tell you by email or in the app before it takes effect.</p>
      </section>
    </LegalDocument>
  );
}
