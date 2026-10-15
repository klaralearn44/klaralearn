import { LegalDocument, LegalTable, PolicyLink } from '@/components/legal/LegalDocument';

export function TutorPrivacyPage() {
  return (
    <LegalDocument
      title="Tutor Privacy Notice"
      description="How KlaraLearn collects and uses personal information about tutors who apply to or teach on the platform."
      path="/legal/tutor-privacy"
    >
      <p>This notice explains how KlaraLearn collects and uses personal information about tutors who apply to or teach on our platform.</p>

      <section>
        <h2>1. Who we are</h2>
        <p>KlaraLearn is a trading name of EDUBRIDGE GLOBAL LEARNING LIMITED, registered in England and Wales (company number 17011141), 167–169 Great Portland Street, London, England, W1W 5PF. We are the data controller for your information. Our ICO registration number will be published on this page when it is issued.</p>
        <p>Contact us at support@klaralearn.com with “Privacy” in the subject line.</p>
      </section>

      <section>
        <h2>2. The information we collect</h2>
        <LegalTable
          headers={['Information', 'Why']}
          rows={[
            ['Name, email address, password, phone number, country', 'To create and run your tutor account'],
            ['Identity document (passport or national ID) and a photo or video check matching your face to it', 'To confirm you are who you say you are before you teach children'],
            ['Qualifications, teaching experience, subjects, bio and profile photo', 'To review your application and build your tutor profile'],
            ['Hourly rate and availability', 'To let parents book you'],
            ['Payout details (such as bank or payment account details)', 'To pay you'],
            ['Messages with parents on KlaraLearn', 'To arrange lessons and keep a record for safeguarding'],
            ['Lesson recordings and transcripts', 'Safeguarding, quality checks and resolving disputes'],
            ['Reviews, complaints and safety reports involving you', 'Quality and safeguarding'],
            ['Records of which policies you accepted, and when', 'To show what you agreed to'],
            ['Technical data (IP address, device, browser)', 'Security and fraud prevention'],
          ]}
        />
      </section>

      <section>
        <h2>3. Your public profile</h2>
        <p>Once your application is approved, your first name and surname, photo, bio, subjects, country, rate and reviews are shown publicly on klaralearn.com so parents can find you. Your contact details, identity documents and payout details are never shown publicly. If your profile is paused or your account ends, your public profile is removed.</p>
      </section>

      <section>
        <h2>4. Our lawful basis</h2>
        <ul>
          <li>Contract: to run your account and pay you under the <PolicyLink href="/legal/tutor-agreement">Tutor Agreement</PolicyLink>.</li>
          <li>Legitimate interests: checking your identity, recording lessons, and handling complaints and safety concerns, because KlaraLearn connects adults with children and must keep them safe.</li>
          <li>Legal obligation: keeping payment records for tax, and sharing information with authorities when the law requires it.</li>
        </ul>
      </section>

      <section>
        <h2>5. Lesson recordings</h2>
        <p>Every lesson is recorded and transcribed by our recording service, which joins your Zoom or Google Meet lesson as “KlaraLearn Notetaker”. The parent can watch the video for 30 days. You can read the transcript of your own lessons. KlaraLearn staff access recordings only to handle a safety concern, complaint or request. Full details are in the <PolicyLink href="/legal/session-recording">Session Recording Policy</PolicyLink>.</p>
      </section>

      <section>
        <h2>6. Who we share information with</h2>
        <ul>
          <li>Parents who view your profile or book you see your public profile, and the parents you teach can see lesson videos you appear in.</li>
          <li>Service providers acting on our instructions: Bubble (app hosting), Vercel (website hosting), Cloudflare (recording storage), Recall.ai (recording and transcription), Stripe (payments), our email provider (emails), and any identity-check provider we use.</li>
          <li>Authorities: police, children’s social care, the Local Authority Designated Officer or regulators in the UK, and where appropriate authorities in your country, when the law requires it or a child may be at risk.</li>
        </ul>
      </section>

      <section>
        <h2>7. International transfers</h2>
        <p>Your information is processed in the UK, and some of our providers process data in the United States. We use UK-approved safeguards such as the UK International Data Transfer Agreement or the UK–US data bridge.</p>
      </section>

      <section>
        <h2>8. How long we keep information</h2>
        <LegalTable
          headers={['Information', 'How long']}
          rows={[
            ['Identity documents', 'Deleted 6 months after your application decision; we keep a record that the check was done'],
            ['Application details if not approved', '12 months after the decision'],
            ['Tutor account and profile', 'While you teach on KlaraLearn, then 6 years after you leave'],
            ['Payment records', '6 years, as required by law'],
            ['Lesson videos and transcripts', '30 days (videos) and 6 months (transcripts)'],
            ['Allegations or safeguarding concerns involving you', '10 years, or longer if the authorities advise'],
          ]}
        />
      </section>

      <section>
        <h2>9. Your rights</h2>
        <p>You can ask to access, correct or delete your information, restrict or object to how we use it, or receive a copy in a portable format. Email support@klaralearn.com; we reply within one month. Some information, such as safeguarding records, may be kept even if you ask us to delete it, where the law or child safety requires it.</p>
      </section>

      <section>
        <h2>10. Complaints</h2>
        <p>Contact us first. You can also use our <PolicyLink href="/legal/complaints">Complaints Policy</PolicyLink>, or complain to the Information Commissioner’s Office at ico.org.uk.</p>
      </section>

      <section>
        <h2>11. Changes</h2>
        <p>We will tell you about important changes by email or in the app before they take effect.</p>
      </section>
    </LegalDocument>
  );
}
