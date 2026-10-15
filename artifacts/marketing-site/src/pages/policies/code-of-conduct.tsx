import { LegalDocument, PolicyLink } from '@/components/legal/LegalDocument';

export function TutorCodeOfConductPage() {
  return (
    <LegalDocument
      title="Tutor Code of Conduct"
      description="The conduct rules every KlaraLearn tutor accepts before their first lesson, including recordings, contact and reporting."
      path="/legal/tutor-code-of-conduct"
    >
      <p>Every tutor agrees to this code before their first lesson. It works alongside the <PolicyLink href="/legal/safeguarding">Safeguarding Policy</PolicyLink>. Breaking it can lead to suspension or removal from KlaraLearn.</p>

      <section>
        <h2>Before and during lessons</h2>
        <ul>
          <li>Use only the Zoom or Google Meet link you created for that lesson and added to KlaraLearn. Never send a child or parent a different link.</li>
          <li>Admit “KlaraLearn Notetaker” as soon as it appears and accept any recording prompt. Never remove it, block it or restart the call without it.</li>
          <li>Join on time from a quiet, private space, with a plain or blurred background. Dress as you would in a classroom.</li>
          <li>Keep your camera on for the whole lesson.</li>
          <li>If a child joins from a bedroom or private space, politely ask for the lesson to move to a shared room, or for the camera to face a neutral wall.</li>
          <li>Never record, screenshot or photograph a child, or allow anyone else in your room to see or hear the lesson.</li>
          <li>Stay focused on learning. Do not discuss personal topics, relationships, politics or religion, and never try to persuade a child of personal beliefs.</li>
          <li>Use professional, encouraging language. Never shout, humiliate, threaten or use sexual, discriminatory or offensive language.</li>
        </ul>
      </section>

      <section>
        <h2>Communication</h2>
        <ul>
          <li>Communicate only with the parent or guardian, and only through KlaraLearn messaging.</li>
          <li>Never message, call, email or follow a child on any app or social media, during or after your time on KlaraLearn.</li>
          <li>Never ask for or share personal phone numbers, social media accounts or home addresses.</li>
          <li>Never give gifts, ask for gifts, or offer favours or private arrangements.</li>
        </ul>
      </section>

      <section>
        <h2>Business conduct</h2>
        <ul>
          <li>Never arrange or accept lessons or payment outside KlaraLearn with a family you met on the platform.</li>
          <li>Keep your profile truthful about your qualifications and experience.</li>
          <li>Treat all family information as confidential.</li>
        </ul>
      </section>

      <section>
        <h2>Your duties</h2>
        <ul>
          <li>Report any safeguarding concern to our Designated Safeguarding Lead within 1 hour, using “Report a concern” in the app or by emailing support@klaralearn.com with “Safeguarding” in the subject.</li>
          <li>Tell us within 48 hours of any arrest, charge, conviction or investigation.</li>
          <li>Keep your login secure and never let anyone else teach using your account.</li>
        </ul>
      </section>

      <section>
        <h2>If the code is broken</h2>
        <p>We review every possible breach. Depending on how serious it is, we may give a warning, pause your profile or remove you from KlaraLearn permanently. Serious safeguarding breaches lead to immediate suspension and may be reported to the authorities in the UK and in your country.</p>
      </section>
    </LegalDocument>
  );
}
