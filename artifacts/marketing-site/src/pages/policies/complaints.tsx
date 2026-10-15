import { LegalDocument, PolicyLink } from '@/components/legal/LegalDocument';

export function ComplaintsPage() {
  return (
    <LegalDocument
      title="Complaints Policy"
      description="How to complain to KlaraLearn, the two review stages, and what happens if you are still unhappy."
      path="/legal/complaints"
    >
      <p>We reply to every complaint within 2 working days and aim to resolve it within 14 days. This policy applies to parents and tutors.</p>
      <p>Safety concerns about a child are not handled as complaints. Report them straight away using “Report a concern” in the app, or by emailing support@klaralearn.com with “Safeguarding” in the subject. If a child is in immediate danger, call 999. See the <PolicyLink href="/legal/safeguarding">Safeguarding Policy</PolicyLink>.</p>

      <section>
        <h2>How to make a complaint</h2>
        <p>Email support@klaralearn.com with “Complaint” in the subject. Please tell us:</p>
        <ul>
          <li>your name and the email address on your account</li>
          <li>the lesson date and tutor, if it’s about a lesson</li>
          <li>what happened</li>
          <li>what you would like us to do to put it right</li>
        </ul>
      </section>

      <section>
        <h2>What happens next</h2>
        <ol>
          <li>We acknowledge your complaint within 2 working days.</li>
          <li>Stage 1: we investigate. A member of our team looks into what happened. This may include checking the booking, messages and, where relevant, the lesson recording or transcript. We send you a written response within 14 days.</li>
          <li>Stage 2: review. If you’re unhappy with our Stage 1 response, reply within 14 days asking for a review. One of our founders who wasn’t involved will review it and respond within 14 days. This is our final response.</li>
        </ol>
        <p>If we need more time because a complaint is complex, we’ll tell you why and when to expect our reply.</p>
      </section>

      <section>
        <h2>Complaints about a tutor</h2>
        <p>We share the details of your complaint with the tutor, without your contact details, so they can respond. Complaints may lead to a tutor being paused or removed.</p>
      </section>

      <section>
        <h2>If you’re still unhappy</h2>
        <ul>
          <li>For advice about your consumer rights, contact Citizens Advice on 0808 223 1133 or at citizensadvice.org.uk.</li>
          <li>For concerns about how we handle your personal information, you can complain to the Information Commissioner’s Office at ico.org.uk or on 0303 123 1113. Our <PolicyLink href="/legal/privacy">Privacy Notice</PolicyLink> explains the information we hold.</li>
        </ul>
      </section>

      <section>
        <h2>What we record</h2>
        <p>We keep a record of each complaint, how it was resolved, and any changes we made as a result, for 3 years after it is closed. We use complaints to improve KlaraLearn.</p>
      </section>
    </LegalDocument>
  );
}
