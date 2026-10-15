import { LegalDocument, PolicyLink } from '@/components/legal/LegalDocument';

export function AcceptableUsePage() {
  return (
    <LegalDocument
      title="Acceptable Use Policy"
      description="How parents, guardians and children should use KlaraLearn, and what happens if the rules are broken."
      path="/legal/acceptable-use"
    >
      <p>Use KlaraLearn respectfully, honestly and safely. This policy applies to parents and guardians, and to children during lessons. Parents are responsible for how their account is used. Tutors follow the <PolicyLink href="/legal/tutor-code-of-conduct">Tutor Code of Conduct</PolicyLink>.</p>

      <section>
        <h2>Please do</h2>
        <ul>
          <li>Give accurate information about yourself and your child.</li>
          <li>Keep your login private and don’t let anyone else use your account.</li>
          <li>Make sure your child joins lessons from a suitable, quiet space, ideally a shared room.</li>
          <li>Have a parent or responsible adult nearby during lessons for children under 11.</li>
          <li>Use “Report a concern” or email support@klaralearn.com if anything worries you.</li>
        </ul>
      </section>

      <section>
        <h2>Please don’t</h2>
        <ul>
          <li>Share personal contact details (phone number, social media, home address) with a tutor, or ask for theirs.</li>
          <li>Let your child contact a tutor outside lessons.</li>
          <li>Arrange lessons or payments with a tutor outside KlaraLearn.</li>
          <li>Record, screenshot, download or share lessons, recordings, transcripts or tutors’ teaching materials.</li>
          <li>Remove the KlaraLearn Notetaker from a lesson, or ask the tutor to.</li>
          <li>Send or post anything abusive, threatening, discriminatory, sexual or illegal.</li>
          <li>Try to access other people’s accounts or data, or interfere with how the platform works.</li>
          <li>Use KlaraLearn for anything other than arranging and taking part in tutoring.</li>
        </ul>
      </section>

      <section>
        <h2>If these rules are broken</h2>
        <p>Depending on what happened, we may give a warning, suspend or close the account, and report illegal content or safeguarding concerns to the authorities. If we close an account, we refund any lessons that have not yet taken place, unless the account was closed for fraud. Safety concerns are handled under the <PolicyLink href="/legal/safeguarding">Safeguarding Policy</PolicyLink>.</p>
      </section>
    </LegalDocument>
  );
}
