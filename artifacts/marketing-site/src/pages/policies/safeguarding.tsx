import { LegalDocument, LegalTable, PolicyLink } from '@/components/legal/LegalDocument';

export function SafeguardingPolicyPage() {
  return (
    <LegalDocument
      title="Safeguarding Policy"
      description="KlaraLearn’s safeguarding policy: how concerns are reported, who to contact, and how tutor allegations are handled."
      path="/legal/safeguarding"
    >
      <p>The welfare of the child always comes first. This policy applies to everyone who works on or for KlaraLearn, wherever they are based, including tutors and staff. A shorter explanation for parents is on the <PolicyLink href="/safeguarding">safeguarding overview</PolicyLink>.</p>

      <section>
        <h2>1. Key contacts</h2>
        <LegalTable
          headers={['Who', 'How to reach them']}
          rows={[
            ['Designated Safeguarding Lead', 'support@klaralearn.com with “Safeguarding” in the subject'],
            ['Child in immediate danger (UK)', 'Call 999'],
            ['NSPCC Helpline (adults with concerns about a child)', '0808 800 5000'],
            ['Childline (for children)', '0800 1111'],
            ['Online sexual abuse or grooming', 'Report to CEOP at ceop.police.uk'],
          ]}
        />
      </section>

      <section>
        <h2>2. How KlaraLearn keeps children safe</h2>
        <ul>
          <li>Identity checks: every tutor’s identity is checked before they can teach.</li>
          <li>Every lesson is recorded. A notetaker records and transcribes each lesson, and parents can watch their child’s lessons for 30 days. See the <PolicyLink href="/legal/session-recording">Session Recording Policy</PolicyLink>.</li>
          <li>Parents hold the account. Tutors communicate only with parents, only through KlaraLearn. Tutors must never contact children directly.</li>
          <li>Fixed lesson links. Lessons take place only on the Zoom or Google Meet link saved in KlaraLearn.</li>
          <li>A <PolicyLink href="/legal/tutor-code-of-conduct">Tutor Code of Conduct</PolicyLink> that every tutor must accept, with clear rules on boundaries and behaviour.</li>
          <li>Easy reporting. Anyone can raise a concern using “Report a concern” in the app.</li>
        </ul>
      </section>

      <section>
        <h2>3. What counts as a concern</h2>
        <p>Any sign that a child may be harmed or at risk, including physical, emotional or sexual abuse, neglect, grooming, online exploitation, bullying, self-harm or radicalisation. It also includes any behaviour by a tutor that breaks the Code of Conduct in a way that could harm a child, such as trying to contact a child outside lessons.</p>
      </section>

      <section>
        <h2>4. If a child tells you something worrying</h2>
        <ul>
          <li>Stay calm, listen, and let them speak in their own words. Don’t ask leading questions.</li>
          <li>Never promise to keep it secret. Explain that you need to tell someone whose job is to keep them safe.</li>
          <li>Don’t investigate or contact the person the child is talking about.</li>
          <li>Write down what the child said, in their own words, with the date and time, as soon as you can.</li>
        </ul>
      </section>

      <section>
        <h2>5. How to report a concern</h2>
        <ol>
          <li>If a child is in immediate danger, call 999 (or emergency services where the child is), then tell the Designated Safeguarding Lead.</li>
          <li>For any other concern, report to the Designated Safeguarding Lead within 1 hour, using “Report a concern” in the app or by emailing support@klaralearn.com with “Safeguarding” in the subject. Include the lesson date if it relates to a lesson.</li>
          <li>The Designated Safeguarding Lead decides within 24 hours what to do. This may include contacting the parent, referring to children’s social care where the child lives, contacting the police, or recording the concern and keeping watch.</li>
          <li>The Designated Safeguarding Lead records every concern, the decision made and the reason, even when no referral is needed.</li>
        </ol>
        <p>Parents can report a concern the same way, at any time.</p>
      </section>

      <section>
        <h2>6. Concerns or allegations about a tutor</h2>
        <ul>
          <li>The tutor’s profile is paused immediately while the concern is looked into. This protects everyone and is not a finding of guilt.</li>
          <li>The Designated Safeguarding Lead makes sure the relevant lesson recordings, transcripts and messages are kept and not deleted.</li>
          <li>The Designated Safeguarding Lead contacts the Local Authority Designated Officer (LADO) for the child’s area and follows their advice before taking further action.</li>
          <li>If a tutor is removed because they harmed or may harm a child, we will consider a referral to the Disclosure and Barring Service, and inform the authorities in the tutor’s country where appropriate.</li>
        </ul>
      </section>

      <section>
        <h2>7. Recordings and safeguarding</h2>
        <p>Lesson recordings are not routinely watched. They are reviewed when a concern or complaint is raised. Anyone who sees something worrying in a recording must report it under section 5.</p>
      </section>

      <section>
        <h2>8. Confidentiality and information sharing</h2>
        <p>Safeguarding information is shared only with people who need to know, such as the parent, the authorities, or the LADO. Protecting a child always takes priority over confidentiality.</p>
      </section>

      <section>
        <h2>9. Review</h2>
        <p>This policy is reviewed at least once a year and after any serious incident.</p>
      </section>
    </LegalDocument>
  );
}
