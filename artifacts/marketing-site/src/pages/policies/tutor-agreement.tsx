import { LegalDocument, LegalTable, PolicyLink } from '@/components/legal/LegalDocument';

export function TutorAgreementPage() {
  return (
    <LegalDocument
      title="Tutor Agreement"
      description="The agreement between independent tutors and KlaraLearn covering lessons, commission, recordings and safeguarding."
      path="/legal/tutor-agreement"
    >
      <p>This agreement is between you, the tutor, and EDUBRIDGE GLOBAL LEARNING LIMITED, trading as KlaraLearn, registered in England and Wales (company number 17011141), 167–169 Great Portland Street, London, England, W1W 5PF (“KlaraLearn”, “we”, “us”). You accept it when you tick the agreement box during onboarding. The <PolicyLink href="/legal/terms">Terms of Service</PolicyLink>, <PolicyLink href="/legal/tutor-code-of-conduct">Tutor Code of Conduct</PolicyLink>, <PolicyLink href="/legal/safeguarding">Safeguarding Policy</PolicyLink> and <PolicyLink href="/legal/session-recording">Session Recording Policy</PolicyLink> also apply to you and form part of this agreement.</p>

      <section>
        <h2>1. Your status</h2>
        <p>1.1 You are an independent, self-employed tutor. You are not an employee, worker or partner of KlaraLearn.</p>
        <p>1.2 You decide when you are available, which bookings to accept and how to teach, as long as you follow this agreement and our policies.</p>
        <p>1.3 You are responsible for your own taxes, social security contributions and any registrations required in the country where you live.</p>
      </section>

      <section>
        <h2>2. Joining KlaraLearn</h2>
        <p>2.1 Before your profile goes live you must:</p>
        <ul>
          <li>complete your profile honestly and accurately</li>
          <li>pass our identity check, including a photo or video check matching your face to your identity document</li>
          <li>accept this agreement and the policies listed above</li>
        </ul>
        <p>2.2 We decide whether to approve your profile, and may refuse or pause it at any time if we are concerned about children’s safety.</p>
        <p>2.3 You must tell us within 48 hours if you are arrested, charged, convicted or investigated for any offence, or if anything else happens that could affect your suitability to teach children.</p>
      </section>

      <section>
        <h2>3. Lessons</h2>
        <p>3.1 Lessons are booked by parents through KlaraLearn, one lesson at a time.</p>
        <p>3.2 For each lesson you must create a Zoom or Google Meet link from an account that allows external participants, and add it to the lesson in KlaraLearn before the start time. Never send a link any other way.</p>
        <p>3.3 Every lesson is recorded and transcribed. A notetaker called “KlaraLearn Notetaker” joins each lesson. You must admit it straight away and accept any recording prompt. You must never remove it, block it or restart the call without it.</p>
        <p>3.4 Join every lesson on time and teach the full booked length.</p>
      </section>

      <section>
        <h2>4. Prices and payment</h2>
        <p>4.1 You set your own hourly rate, which must be at least £10 per hour. Prices are shown to parents in GBP.</p>
        <p>4.2 We act as your commercial agent to collect payment from parents. Payment we receive on your behalf counts as payment to you.</p>
        <p>4.3 We charge a commission of 20% of the lesson price. You receive the remaining 80%.</p>
        <p>4.4 We pay you for each completed lesson. The payout schedule is shown in your tutor account. You must give us accurate payout details. Any transfer fees charged by your bank or payment provider are your responsibility.</p>
        <p>4.5 How cancellations affect what you are paid:</p>
        <LegalTable
          headers={['Situation', 'What you are paid']}
          rows={[
            ['Lesson completed', '80% of the lesson price'],
            ['Parent cancels with more than 24 hours’ notice, or within their legal 14-day cancellation right', 'Nothing'],
            ['Parent cancels with less than 24 hours’ notice (and the 14-day right does not apply)', '80% of the late-cancellation fee the parent pays'],
            ['Student does not join within 15 minutes and you waited', '80% of the lesson price'],
            ['You cancel the lesson, at any notice', 'Nothing'],
            ['You do not join within 15 minutes', 'Nothing'],
            ['Lesson refunded because of a fault on KlaraLearn’s side', '80% of the lesson price'],
          ]}
        />
        <p>4.6 Cancelling often or failing to attend may lead to your profile being paused.</p>
      </section>

      <section>
        <h2>5. Working with families</h2>
        <p>5.1 Communicate only with the parent or guardian, and only through KlaraLearn messaging. Do not message or contact the child outside lessons.</p>
        <p>5.2 Non-circumvention. While you teach on KlaraLearn, and for 12 months after you stop, you must not offer or accept lessons or payment outside KlaraLearn with any family you met through the platform.</p>
      </section>

      <section>
        <h2>6. Protecting children’s and families’ information</h2>
        <p>6.1 You may use information about families only to prepare for and teach their lessons.</p>
        <p>6.2 You must not record, screenshot, photograph, download or copy lessons, transcripts or family information, or share it with anyone.</p>
        <p>6.3 Keep your KlaraLearn login private and use a secure device.</p>
        <p>6.4 Tell us straight away at support@klaralearn.com if you think family information has been lost, seen by someone else or misused.</p>
        <p>6.5 When you stop teaching on KlaraLearn, delete any family information you hold outside the platform.</p>
        <p>6.6 Our <PolicyLink href="/legal/tutor-privacy">Tutor Privacy Notice</PolicyLink> explains how we use your own information.</p>
      </section>

      <section>
        <h2>7. Your profile and teaching materials</h2>
        <p>7.1 You own the teaching materials you create.</p>
        <p>7.2 You give us permission to display your name, photo, bio, subjects, country, rate and reviews on klaralearn.com and in our marketing while you teach on KlaraLearn.</p>
        <p>7.3 Your profile must be truthful. Do not claim qualifications or experience you don’t have.</p>
      </section>

      <section>
        <h2>8. Safeguarding</h2>
        <p>8.1 You must follow the <PolicyLink href="/legal/safeguarding">Safeguarding Policy</PolicyLink> and <PolicyLink href="/legal/tutor-code-of-conduct">Tutor Code of Conduct</PolicyLink> at all times.</p>
        <p>8.2 You must report any safeguarding concern to our Designated Safeguarding Lead within 1 hour, using “Report a concern” in the app or by emailing support@klaralearn.com with “Safeguarding” in the subject.</p>
        <p>8.3 If a concern or allegation is raised about you, we will pause your profile immediately while it is looked into. This is a protective step, not a finding against you. We may share information with the authorities in the UK and in your country.</p>
      </section>

      <section>
        <h2>9. Ending this agreement</h2>
        <p>9.1 You may end this agreement at any time by giving us 14 days’ notice. You must teach any lessons already booked in that time, unless the parent agrees otherwise.</p>
        <p>9.2 We may end this agreement with 14 days’ notice, or immediately if you seriously or repeatedly break it, if there is a safeguarding concern, or if you give false information.</p>
        <p>9.3 When this agreement ends, we will pay you for completed lessons, less any amounts you owe us. Sections 5.2 and 6 continue to apply.</p>
      </section>

      <section>
        <h2>10. Responsibility</h2>
        <p>10.1 You are responsible for your own teaching and conduct.</p>
        <p>10.2 Our liability to you is limited to the commission we received from your lessons in the 12 months before the claim. Nothing limits liability for death or personal injury caused by negligence, for fraud, or anything else that cannot be limited by law.</p>
      </section>

      <section>
        <h2>11. Changes</h2>
        <p>We may update this agreement. We will give you at least 14 days’ notice of important changes and ask you to accept the new version. If you do not accept it, you may end this agreement.</p>
      </section>

      <section>
        <h2>12. Law</h2>
        <p>This agreement is governed by the law of England and Wales, and the courts of England and Wales have jurisdiction.</p>
      </section>
    </LegalDocument>
  );
}
