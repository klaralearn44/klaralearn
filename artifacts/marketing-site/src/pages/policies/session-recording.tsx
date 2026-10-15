import { LegalDocument, LegalTable, PolicyLink } from '@/components/legal/LegalDocument';

export function SessionRecordingPage() {
  return (
    <LegalDocument
      title="Session Recording Policy"
      description="Why KlaraLearn records every lesson, who can see the video and transcript, and how long recordings are kept."
      path="/legal/session-recording"
    >
      <p>Every KlaraLearn lesson is recorded and transcribed. This policy explains why, how it works, who can see recordings and how long we keep them. It applies to parents, tutors and KlaraLearn staff.</p>

      <section>
        <h2>1. Why we record lessons</h2>
        <p>We record lessons to:</p>
        <ul>
          <li>keep children safe</li>
          <li>give parents visibility of their child’s lessons</li>
          <li>check teaching quality</li>
          <li>resolve complaints and disputes fairly</li>
        </ul>
        <p>We do not use recordings for advertising or marketing, and we do not use them to train artificial intelligence. If we ever want to use recordings in a new way, we will tell parents and tutors first.</p>
      </section>

      <section>
        <h2>2. How it works</h2>
        <ol>
          <li>When the tutor adds a Zoom or Google Meet link to a lesson, KlaraLearn schedules a notetaker to join at the start time.</li>
          <li>The notetaker appears in the call as “KlaraLearn Notetaker”, so everyone can see the lesson is being recorded. It is provided by our recording partner, Recall.ai.</li>
          <li>The tutor admits the notetaker and accepts any recording prompt.</li>
          <li>The notetaker records the video and produces a written transcript of what is said.</li>
          <li>After the lesson, the recording and transcript are stored securely, with access limited to the people in section 4.</li>
        </ol>
      </section>

      <section>
        <h2>3. Agreement to recording</h2>
        <ul>
          <li>Parents are told about recording before their first booking, and confirm they understand it at checkout. Recording is a condition of booking lessons on KlaraLearn.</li>
          <li>Tutors agree to recording in the <PolicyLink href="/legal/tutor-agreement">Tutor Agreement</PolicyLink>. A tutor who removes or refuses to admit the notetaker breaks the <PolicyLink href="/legal/tutor-code-of-conduct">Tutor Code of Conduct</PolicyLink>.</li>
        </ul>
      </section>

      <section>
        <h2>4. Who can see recordings</h2>
        <LegalTable
          headers={['Person', 'Video', 'Transcript']}
          rows={[
            ['The parent on the account', 'Their own child’s lessons, for 30 days', 'Yes, on request'],
            ['The tutor', 'No', 'Their own lessons, for 6 months'],
            ['Designated Safeguarding Lead', 'When a concern or complaint is raised', 'When a concern or complaint is raised'],
            ['Other KlaraLearn staff', 'Only to handle a specific complaint or request, and each access is logged', 'Same'],
          ]}
        />
        <p>Recordings are never shared outside KlaraLearn, except with the authorities when the law requires it or a child may be at risk.</p>
        <p>Recordings must not be downloaded, copied, screen-recorded or shared by anyone, including parents and tutors.</p>
      </section>

      <section>
        <h2>5. How long we keep recordings</h2>
        <LegalTable
          headers={['What', 'Kept for']}
          rows={[
            ['Lesson video', '30 days after the lesson, then deleted automatically'],
            ['Lesson transcript', '6 months after the lesson, then deleted automatically'],
            ['Recordings linked to an open safeguarding concern or complaint', <>Until the matter is closed, then as set out in our <PolicyLink href="/legal/privacy">Privacy Notice</PolicyLink></>],
          ]}
        />
      </section>

      <section>
        <h2>6. If the notetaker doesn’t join</h2>
        <p>If the notetaker fails to join, the lesson still goes ahead and is charged as normal. The tutor is alerted and must explain what happened. Repeated failures caused by a tutor are reviewed under the <PolicyLink href="/legal/tutor-code-of-conduct">Tutor Code of Conduct</PolicyLink>.</p>
      </section>

      <section>
        <h2>7. Your requests</h2>
        <p>Parents can ask for a copy of a transcript, or ask for a recording to be deleted early, by emailing support@klaralearn.com. We may not be able to delete a recording while a safeguarding concern or complaint is open; we will explain why if so.</p>
        <p>More detail on how we handle personal information is in our <PolicyLink href="/legal/privacy">Privacy Notice</PolicyLink> and <PolicyLink href="/legal/tutor-privacy">Tutor Privacy Notice</PolicyLink>.</p>
      </section>
    </LegalDocument>
  );
}
