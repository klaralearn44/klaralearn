import { LegalDocument, LegalTable, PolicyLink } from '@/components/legal/LegalDocument';

export function RefundsPage() {
  return (
    <LegalDocument
      title="Cancellation & Refund Policy"
      description="How to cancel a KlaraLearn lesson, the 14-day legal cancellation right, and what happens if a lesson is missed."
      path="/legal/refunds"
    >
      <p>Cancel more than 24 hours before a lesson for a full refund. This policy explains what happens when a lesson is cancelled or missed, and your legal right to cancel. It forms part of our <PolicyLink href="/legal/terms">Terms of Service</PolicyLink>.</p>

      <section>
        <h2>1. How to cancel</h2>
        <p>Cancel a lesson in the app from your bookings, or email support@klaralearn.com. The time we receive your cancellation is the time we use.</p>
      </section>

      <section>
        <h2>2. Your legal right to cancel within 14 days</h2>
        <p>UK law gives you 14 days from the day you book a lesson to cancel it for any reason.</p>
        <ul>
          <li>If the lesson hasn’t taken place yet, you get a full refund, even if it is less than 24 hours away.</li>
          <li>If you asked for the lesson to take place within those 14 days and it has taken place, you can no longer cancel it for a refund. At checkout we ask you to confirm you are happy for your lesson to happen within 14 days.</li>
        </ul>
        <p>To use this right, cancel in the app or email us a clear statement that you want to cancel. You don’t need to give a reason.</p>
      </section>

      <section>
        <h2>3. Our cancellation rules</h2>
        <p>When the 14-day right no longer applies (more than 14 days have passed since you booked), these rules apply:</p>
        <LegalTable
          headers={['What happens', 'What you pay or get back']}
          rows={[
            ['You cancel more than 24 hours before the lesson', 'Full refund'],
            ['You cancel less than 24 hours before the lesson', '50% refund (you pay half the lesson price)'],
          ]}
        />
        <p>These apply whenever the lesson was booked:</p>
        <LegalTable
          headers={['What happens', 'What you pay or get back']}
          rows={[
            ['Your child doesn’t join within 15 minutes of the start time', 'No refund; the tutor waited and is paid'],
            ['Your internet or device fails and the lesson can’t go ahead', 'Treated as a missed lesson, unless the tutor confirms they could not have taught either'],
            ['The tutor cancels, at any notice', 'Full refund, or free rebooking if you prefer'],
            ['The tutor doesn’t join within 15 minutes of the start time', 'Full refund, plus a free lesson credit worth up to the same amount'],
            ['A problem on KlaraLearn’s side stops the lesson', 'Full refund or free rebooking'],
            ['The KlaraLearn Notetaker doesn’t join', 'No effect; the lesson goes ahead and is charged as normal'],
          ]}
        />
      </section>

      <section>
        <h2>4. Lesson credit</h2>
        <p>Lesson credit can be used for any tutor on KlaraLearn and expires 6 months after it is issued. Credit has no cash value.</p>
      </section>

      <section>
        <h2>5. How refunds are paid</h2>
        <p>Refunds go back to the card you paid with, within 14 days of being agreed. Depending on your bank, it may take a few extra days to appear.</p>
      </section>

      <section>
        <h2>6. If you disagree with a charge</h2>
        <p>Email support@klaralearn.com within 14 days of the lesson. We will look at the booking record and, where relevant, the lesson recording, and reply within 5 working days. If you’re still unhappy, you can use our <PolicyLink href="/legal/complaints">Complaints Policy</PolicyLink>.</p>
        <p>Nothing in this policy affects your legal rights as a consumer.</p>
      </section>
    </LegalDocument>
  );
}
