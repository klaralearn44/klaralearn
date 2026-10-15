import { LegalDocument } from '@/components/legal/LegalDocument';

export function YoungPeoplePage() {
  return (
    <LegalDocument
      title="Notice for Young People"
      description="A short explanation for children of how KlaraLearn looks after their information and who can see lesson recordings."
      path="/legal/young-people"
    >
      <p>Hi! This page explains how KlaraLearn looks after information about you. Your parent or carer set up your KlaraLearn account. You join your lessons with your tutor on Zoom or Google Meet.</p>

      <section>
        <h2>What we know about you</h2>
        <ul>
          <li>Your first name</li>
          <li>How old you are, or your school year</li>
          <li>The subjects you’re learning and what you’d like to get better at</li>
          <li>When your lessons are</li>
        </ul>
      </section>

      <section>
        <h2>Your lessons are recorded</h2>
        <p>A helper called “KlaraLearn Notetaker” joins every lesson. It records the video and writes down what is said. We do this to help keep you safe and to make sure lessons are good.</p>
      </section>

      <section>
        <h2>Who can see it</h2>
        <ul>
          <li>Your parent or carer can watch your lesson videos for 30 days.</li>
          <li>Your tutor can read what was said in your lessons, but can’t watch the video.</li>
          <li>A few KlaraLearn staff can look at it only if someone is worried about something.</li>
          <li>Nobody else.</li>
        </ul>
        <p>We delete lesson videos after 30 days and the written notes after 6 months.</p>
      </section>

      <section>
        <h2>Things we promise</h2>
        <ul>
          <li>We never sell information about you.</li>
          <li>We never use it for adverts.</li>
          <li>Your tutor should only ever talk to your parent or carer outside lessons, not to you. If a tutor asks you for your phone number, social media or to talk somewhere else, tell your parent or carer straight away.</li>
        </ul>
      </section>

      <section>
        <h2>You’re in charge too</h2>
        <p>You can ask what we know about you, or ask us to fix or delete something. Ask your parent or carer to help, or email support@klaralearn.com.</p>
      </section>

      <section>
        <h2>If something worries you</h2>
        <p>If anything in a lesson makes you feel worried, scared or uncomfortable:</p>
        <ul>
          <li>tell your parent or carer, or another adult you trust</li>
          <li>or email support@klaralearn.com and write “Safeguarding” in the subject. Our safeguarding lead will read it.</li>
          <li>You can also call Childline free on 0800 1111, any time, about anything.</li>
        </ul>
        <p>If you are in danger right now, call 999.</p>
      </section>
    </LegalDocument>
  );
}
