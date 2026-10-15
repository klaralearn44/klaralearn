import { LegalDocument, PolicyLink } from '@/components/legal/LegalDocument';

export function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Service"
      description="The terms that apply to everyone who uses KlaraLearn, including accounts, bookings, recordings and liability."
      path="/legal/terms"
    >
      <p>These terms apply to everyone who uses KlaraLearn. Please read them before you create an account. Tutors also agree to the <PolicyLink href="/legal/tutor-agreement">Tutor Agreement</PolicyLink>, which takes priority for tutors where the two differ.</p>

      <section>
        <h2>1. About us</h2>
        <p>KlaraLearn is a trading name of EDUBRIDGE GLOBAL LEARNING LIMITED, registered in England and Wales (company number 17011141), 167–169 Great Portland Street, London, England, W1W 5PF. Contact: support@klaralearn.com.</p>
        <p>In these terms, “we” and “us” means KlaraLearn, “you” means the person using the platform, and “your child” means any child you book lessons for.</p>
      </section>

      <section>
        <h2>2. What KlaraLearn is</h2>
        <p>2.1 KlaraLearn is an online marketplace. We connect parents and guardians with independent tutors and provide the tools to book, pay for and record lessons.</p>
        <p>2.2 Tutors are independent professionals, not our employees. When you book a lesson, your agreement for the tutoring itself is with the tutor. We act as the tutor’s agent to arrange the booking and collect payment, and we are responsible for running the platform, handling payments and refunds under our <PolicyLink href="/legal/refunds">Cancellation & Refund Policy</PolicyLink>, and dealing with complaints.</p>
        <p>2.3 We check each tutor’s identity before they can teach. We do not guarantee any particular exam result or progress.</p>
      </section>

      <section>
        <h2>3. Your account</h2>
        <p>3.1 You must be 18 or over to create an account. Accounts are for parents and guardians; children do not have their own accounts.</p>
        <p>3.2 You must give accurate information and keep your login details private. You are responsible for activity on your account.</p>
        <p>3.3 You may only book lessons for a child you are the parent or legal guardian of, or have the parent’s permission to book for.</p>
      </section>

      <section>
        <h2>4. Booking and paying for lessons</h2>
        <p>4.1 Lessons are booked one at a time. Each tutor sets their own hourly price, which is at least £10 per hour. The price shown when you book is the full amount you pay. We are not registered for VAT, so no VAT is added.</p>
        <p>4.2 You pay in full by card when you book. Payments are processed securely by Stripe. A booking is confirmed when payment succeeds and you receive a confirmation email.</p>
        <p>4.3 The tutor adds a Zoom or Google Meet link to the lesson in KlaraLearn. Your child joins the lesson using that link only.</p>
      </section>

      <section>
        <h2>5. Lesson recordings</h2>
        <p>Every lesson is recorded and transcribed for safeguarding, quality and dispute resolution, as described in our <PolicyLink href="/legal/session-recording">Session Recording Policy</PolicyLink>. Recording is a condition of using KlaraLearn. You can watch your child’s lesson videos for 30 days.</p>
      </section>

      <section>
        <h2>6. Your responsibilities</h2>
        <p>6.1 Make sure your child joins from a suitable, quiet space, ideally a shared room rather than a bedroom.</p>
        <p>6.2 For children under 11, a parent or responsible adult should be nearby during lessons.</p>
        <p>6.3 All communication with tutors must take place through KlaraLearn messaging. Do not share personal contact details with tutors or arrange lessons or payments outside KlaraLearn.</p>
        <p>6.4 Follow our <PolicyLink href="/legal/acceptable-use">Acceptable Use Policy</PolicyLink>.</p>
      </section>

      <section>
        <h2>7. Cancellations and refunds</h2>
        <p>Cancellations, no-shows and refunds are covered by our <PolicyLink href="/legal/refunds">Cancellation & Refund Policy</PolicyLink>, which forms part of these terms. Nothing in these terms affects your legal rights as a consumer, including your right to cancel within 14 days of booking.</p>
      </section>

      <section>
        <h2>8. Safeguarding</h2>
        <p>We take children’s safety seriously. Our <PolicyLink href="/legal/safeguarding">Safeguarding Policy</PolicyLink> explains how we handle concerns. If you are worried about your child’s safety, use “Report a concern” in the app or email support@klaralearn.com. If a child is in immediate danger, call 999.</p>
      </section>

      <section>
        <h2>9. Suspending or closing accounts</h2>
        <p>9.1 You can close your account at any time by contacting us.</p>
        <p>9.2 We may suspend or close an account if it breaks these terms or our <PolicyLink href="/legal/acceptable-use">Acceptable Use Policy</PolicyLink>, if we suspect fraud, or if we need to protect a child. If we close your account and it was not your fault, we will refund any lessons that have not yet taken place.</p>
      </section>

      <section>
        <h2>10. Our responsibility to you</h2>
        <p>10.1 We will provide the platform with reasonable care and skill. We are responsible for loss or damage you suffer that is a foreseeable result of us breaking these terms or failing to use reasonable care.</p>
        <p>10.2 We are not responsible for loss that was not foreseeable, for business losses, or for problems caused by Zoom, Google Meet, your internet connection or events outside our reasonable control.</p>
        <p>10.3 Except as set out in 10.4, our total liability to you is limited to the amount you paid us in the 12 months before the claim.</p>
        <p>10.4 Nothing in these terms limits our liability for death or personal injury caused by our negligence, for fraud, or for anything else that cannot be limited by law, including your rights under the Consumer Rights Act 2015.</p>
      </section>

      <section>
        <h2>11. Complaints</h2>
        <p>If you are unhappy, please follow our <PolicyLink href="/legal/complaints">Complaints Policy</PolicyLink> so we can try to put things right.</p>
      </section>

      <section>
        <h2>12. Changes to these terms</h2>
        <p>We may update these terms. We will tell you about important changes before they take effect, and ask you to accept the new version when you next sign in. Lessons already booked follow the terms in place when you booked.</p>
      </section>

      <section>
        <h2>13. Law and courts</h2>
        <p>These terms are governed by the law of England and Wales. You can bring a claim in the courts of England and Wales, or, if you live in Scotland or Northern Ireland, in the courts of the place where you live.</p>
      </section>
    </LegalDocument>
  );
}
