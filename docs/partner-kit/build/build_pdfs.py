"""Render the branded KlaraLearn partner PDFs and print them with Chrome."""

from __future__ import annotations

import html
import subprocess
from pathlib import Path

from kit_content import COMPANY, SIGNUP, SITE, SUPPORT, VERSION, advise

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
HTML_DIR = ROOT / "build" / "html"
OUT = ROOT

NAVY = "#1B3D5C"
TEAL = "#00A896"
ORANGE = "#E05C2A"


def e(value: str) -> str:
    return html.escape(value, quote=True)


CSS = f"""
@font-face {{ font-family: "Playfair Display"; src: url("{ASSETS / "fonts" / "PlayfairDisplay-SemiBold.ttf"}") format("truetype"); font-weight: 600; }}
@font-face {{ font-family: "Playfair Display"; src: url("{ASSETS / "fonts" / "PlayfairDisplay-Bold.ttf"}") format("truetype"); font-weight: 700; }}
@font-face {{ font-family: "Source Sans 3"; src: url("{ASSETS / "fonts" / "SourceSans3-Regular.ttf"}") format("truetype"); font-weight: 400; }}
@font-face {{ font-family: "Source Sans 3"; src: url("{ASSETS / "fonts" / "SourceSans3-Semibold.ttf"}") format("truetype"); font-weight: 600; }}
@font-face {{ font-family: "Source Sans 3"; src: url("{ASSETS / "fonts" / "SourceSans3-Bold.ttf"}") format("truetype"); font-weight: 700; }}
@font-face {{ font-family: "Source Sans 3"; src: url("{ASSETS / "fonts" / "SourceSans3-Italic.ttf"}") format("truetype"); font-weight: 400; font-style: italic; }}
@page {{ size: A4; margin: 0; }}
* {{ box-sizing: border-box; }}
html, body {{ margin: 0; padding: 0; }}
body {{
  font-family: "Source Sans 3", sans-serif;
  color: {NAVY};
  font-size: 10.5pt;
  line-height: 1.45;
}}
h1, h2, h3 {{ font-family: "Playfair Display", serif; font-weight: 600; margin: 0; letter-spacing: -0.02em; }}
a {{ color: {TEAL}; text-decoration: none; }}
.kicker {{
  font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
  color: {TEAL}; font-size: 9pt; margin: 0 0 6px;
}}
.foot {{
  border-top: 2.5px solid {TEAL}; padding-top: 2mm; margin-top: 4mm;
  display: flex; justify-content: space-between; gap: 12px;
  font-size: 8pt; color: #6B7C8A;
}}
.sheet {{ page-break-after: always; padding: 14mm 14mm 12mm; }}
.terms p {{ margin-bottom: 5px; }}
.terms h3 {{ margin: 7px 0 2px; }}
.sheet:last-child {{ page-break-after: auto; }}
.cover {{
  page-break-after: always;
  width: 210mm; height: 297mm; margin: 0;
  background: {NAVY}; color: white; padding: 16mm 16mm 18mm;
  position: relative; overflow: hidden;
}}
.cover .kicker {{ color: #4DE1C1; }}
.cover h1 {{ font-size: 42pt; line-height: 1.02; color: white; max-width: 160mm; }}
.rule {{ height: 4px; width: 42mm; background: {ORANGE}; border-radius: 4px; margin: 16px 0; }}
.lede {{ font-size: 16pt; line-height: 1.35; color: white; max-width: 155mm; }}
.rate {{
  display: inline-block; margin-top: 22px; background: {ORANGE}; color: white;
  font-weight: 700; font-size: 18pt; padding: 8px 16px; border-radius: 999px;
}}
.cover .sub {{ margin-top: 14px; color: #D5E2EA; font-size: 12pt; max-width: 150mm; }}
.cover .logo {{ height: 54px; width: auto; }}
.meta {{ position: absolute; left: 16mm; right: 16mm; bottom: 16mm; color: #C5D4DE; font-size: 9.5pt; }}
h2 {{ font-size: 20pt; line-height: 1.15; margin: 2px 0 10px; }}
h3 {{ font-size: 13.5pt; margin: 12px 0 4px; }}
p {{ margin: 0 0 8px; }}
.grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 8px 12px; }}
.grid3 {{ display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }}
.card {{
  background: #F4F8F8; border-radius: 12px; padding: 10px 12px;
  border-top: 3px solid {TEAL};
}}
.card strong {{ display: block; margin-bottom: 2px; }}
.num {{
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px; border-radius: 50%; background: {ORANGE}; color: white;
  font-weight: 700; font-size: 11px; margin-right: 6px;
}}
table {{ width: 100%; border-collapse: collapse; margin: 6px 0 10px; }}
th {{ background: {NAVY}; color: white; text-align: left; font-weight: 600; font-size: 9pt; padding: 6px 8px; }}
td {{ padding: 5px 8px; vertical-align: top; border-bottom: 1px solid #E2E8EE; font-size: 9.5pt; }}
tr:nth-child(even) td {{ background: #F7FAFB; }}
.note {{
  background: #FFF6F2; border-left: 4px solid {ORANGE}; padding: 8px 12px; border-radius: 0 10px 10px 0;
  font-size: 10pt; margin: 8px 0;
}}
.fine {{
  font-size: 9pt; color: #3E5163; background: #F4F7F8; padding: 10px 12px; border-radius: 10px;
}}
.fine h3 {{ font-family: "Source Sans 3", sans-serif; font-size: 10.5pt; letter-spacing: 0; }}
ul {{ margin: 4px 0 8px; padding-left: 16px; }}
li {{ margin: 0 0 3px; }}
.logo-line img {{ height: 36px; }}
.say {{ display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }}
.say div {{ border-radius: 12px; padding: 10px 12px; }}
.yes {{ background: #E7F7F4; }}
.no {{ background: #FDECEA; }}
.tiny {{ font-size: 8.5pt; color: #5C6B7A; }}
.boxline {{ border: 1.5px solid #D5DEE6; border-radius: 8px; min-height: 22px; margin-top: 3px; }}
.q {{ margin-bottom: 8px; }}
.q b {{ display: block; }}
.checks span {{ display: inline-block; margin: 2px 8px 2px 0; }}
.box {{ display: inline-block; width: 11px; height: 11px; border: 1.4px solid {NAVY}; border-radius: 2px; margin-right: 4px; vertical-align: -1px; }}
.url {{
  font-weight: 700; color: {NAVY}; background: white; border-radius: 8px;
  padding: 6px 8px; display: inline-block;
}}
.quote {{ font-size: 11.5pt; font-style: italic; }}
"""


def page(body: str, footer: str) -> str:
    foot = (
        f'<div class="foot"><span>KlaraLearn · {e(VERSION)}</span><span>{e(footer)}</span></div>'
    )
    parts = body.split("</section>")
    rebuilt = []
    for part in parts[:-1]:
        if 'class="cover"' in part:
            rebuilt.append(part + "</section>")
        else:
            rebuilt.append(part + foot + "</section>")
    rebuilt.append(parts[-1])
    return f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><style>{CSS}</style></head>
<body>
{''.join(rebuilt)}
</body></html>"""


def cover(kicker: str, title: str, lede: str, rate: str | None, sub: str) -> str:
    logo = ASSETS / "logo-white-on-navy.png"
    rate_html = f'<div class="rate">{e(rate)}</div>' if rate else ""
    return f"""
<section class="cover">
  <img class="logo" src="{logo}" alt="KlaraLearn">
  <p class="kicker" style="margin-top:28px">{e(kicker)}</p>
  <h1>{title}</h1>
  <div class="rule"></div>
  <p class="lede">{lede}</p>
  {rate_html}
  <p class="sub">{sub}</p>
  <div class="meta">{e(COMPANY)}<br>{e(SUPPORT)} · {e(VERSION)}</div>
</section>
"""


def logo_bar() -> str:
    return f'<div class="logo-line"><img src="{ASSETS / "logo-full.png"}" alt="KlaraLearn"></div>'


def write_html(name: str, content: str) -> Path:
    HTML_DIR.mkdir(parents=True, exist_ok=True)
    path = HTML_DIR / name
    path.write_text(content, encoding="utf-8")
    return path


def print_pdf(html_path: Path, pdf_name: str) -> None:
    out = OUT / pdf_name
    subprocess.run(
        [
            "/opt/google/chrome/chrome",
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage",
            "--no-first-run",
            "--no-default-browser-check",
            "--no-pdf-header-footer",
            f"--user-data-dir=/tmp/klara-pdf-{pdf_name}",
            f"--print-to-pdf={out}",
            html_path.as_uri(),
        ],
        check=True,
        capture_output=True,
        timeout=45,
    )


def start_here() -> str:
    cards = [
        ("1. Partner briefing", "The presentation for a new partner. It opens on the 5% rate and ends with the full schedule."),
        ("2. Programme guide", "The branded overview partners keep. What the parent gets, how a referral is counted, and the rate schedule."),
        ("3. Programme terms", "The Word document partners sign. The same clauses are in the terms PDF."),
        ("4. On-the-call playbook", "The script, the objections, the messages, and what to do if a child is unsafe."),
        ("5. Parent leaflet", "A two-page sheet for the parent. It has no commission language. It has the signup link and a QR code."),
        ("6. Advisor questionnaire", "A paper form for a conversation, with the short decision tree on the back."),
        ("7. Recommendation tool", "The spreadsheet version of the questionnaire. Enter the answers and read the plan aloud."),
        ("8. UK schools knowledge base", "11 Plus through A level, in the language a marketer can use with a parent."),
        ("9. Funnel and commission tracker", "Every parent, every trial, the Friday scorecard, and a commission illustration."),
    ]
    items = "".join(f"<div class='card'><strong>{e(t)}</strong>{e(d)}</div>" for t, d in cards)
    return page(
        cover(
            "Partner kit",
            "Start here.",
            "Everything a partner needs to help a parent create an account and book a free 15-minute trial.",
            "Earn 5%",
            "Use the files in this order. The parent-facing leaflet never mentions commission.",
        )
        + f"""
<section class="sheet">
  {logo_bar()}
  <p class="kicker">How to use this kit</p>
  <h2>Nine documents, one job</h2>
  <p>The job is a parent account and a booked 15-minute trial. Paid lessons, and the 5% that follows them, come after the parent has met a tutor and chosen to continue.</p>
  <div class="grid">{items}</div>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">Working rules</p>
  <h2>Keep the first month simple</h2>
  <div class="grid">
    <div class="card"><strong>Same day</strong>Log the parent’s name, email and the plan you advised.</div>
    <div class="card"><strong>Before you finish</strong>Send {e(SIGNUP)} and book the trial if the parent is ready.</div>
    <div class="card"><strong>Day before</strong>One reminder. The trial is 15 minutes and it is free.</div>
    <div class="card"><strong>Day after</strong>Ask whether they booked a paid lesson, or want another tutor.</div>
    <div class="card"><strong>Friday</strong>Read the scorecard: conversations, accounts, trials booked, trials attended, first paid lessons.</div>
    <div class="card"><strong>Words</strong>Identity is checked. Tutors are interviewed. Lessons are recorded. The rate is on the profile.</div>
  </div>
  <div class="note">The 5% rate applies for the first six months of paid lessons. Months 7 to 12 are 2.5%, and month 13 onwards is 1%. The programme terms set this out in full. The parent leaflet does not.</div>
  <p class="tiny">{e(COMPANY)}</p>
</section>
""",
        "Partner kit index",
    )


def guide() -> str:
    return page(
        cover(
            "Partner programme",
            "Help a parent start.",
            "You introduce families to one-to-one online tutoring, and you earn when they book paid lessons.",
            "Earn 5%",
            "5% of the lesson fees a parent pays, for the first six months. The later rates are in the programme terms at the end of this guide.",
        )
        + f"""
<section class="sheet">
  {logo_bar()}
  <p class="kicker">The job</p>
  <h2>Four moves, then the parent decides</h2>
  <div class="grid">
    <div class="card"><strong><span class="num">1</span>Listen</strong>School year, the result they care about, and the one subject that would change the week.</div>
    <div class="card"><strong><span class="num">2</span>Advise</strong>Use the questionnaire. Name one subject and a realistic number of lessons. Open the matching tutor page with them.</div>
    <div class="card"><strong><span class="num">3</span>Sign up</strong>The parent creates the account at the signup link. They choose the profile and read the hourly rate.</div>
    <div class="card"><strong><span class="num">4</span>Book the trial</strong>A free 15-minute trial with that tutor, before you finish the conversation.</div>
  </div>
  <h3>What the parent is buying</h3>
  <p>A one-to-one lesson with a tutor they have met. The trial comes first. Paid lessons are booked after the trial if the match feels right. There is no package they must take.</p>
  <p>Lessons run on the Zoom or Google Meet link saved in KlaraLearn. KlaraLearn Notetaker joins the call. Parents can watch the video for 30 days.</p>
  <div class="note">You earn 5% of eligible paid lesson fees for the first six months after the parent’s first paid lesson. The trial itself pays no commission.</div>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">The parent journey</p>
  <h2>What happens after they say yes</h2>
  <table>
    <tr><th>Step</th><th>Where</th><th>What you do</th></tr>
    <tr><td>Create the account</td><td>{e(SIGNUP)}</td><td>Let the parent type the details. Stay while they do it.</td></tr>
    <tr><td>Compare profiles</td><td>Subject pages on klaralearn.com, then the app</td><td>Read subject, school stage, experience and the hourly rate with them.</td></tr>
    <tr><td>Free 15-minute trial</td><td>Booked in the account</td><td>The child meets the tutor. The parent asks the question from the questionnaire.</td></tr>
    <tr><td>Paid lessons</td><td>Booked after the trial</td><td>Check in the next day. Another trial is available if the first tutor is not the fit.</td></tr>
  </table>
  <h3>A referral that counts</h3>
  <ul>
    <li>The parent did not already have a KlaraLearn account.</li>
    <li>You recorded their name and email before the account was created.</li>
    <li>One partner is attached to that parent: the first complete record.</li>
  </ul>
  <p>Sign-in for a parent who already has an account: {e("https://app.klaralearn.com/?view=login")}</p>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">Language that stays accurate</p>
  <h2>Say the process. Leave the badge.</h2>
  <div class="say">
    <div class="yes"><strong>Say this</strong>
      <ul>
        <li>Identity is checked before a tutor teaches.</li>
        <li>Tutors are interviewed, and their curriculum knowledge is assessed for the subjects they want to teach.</li>
        <li>Lessons are recorded. Parents can watch for 30 days.</li>
        <li>The trial is free and lasts 15 minutes.</li>
        <li>The rate to compare is the rate on the profile.</li>
        <li>UK 11 Plus tutoring is often quoted at £35–£80 an hour, and GCSE maths often at £30–£55. That is the wider market, from our cost guide.</li>
      </ul>
    </div>
    <div class="no"><strong>Leave this out</strong>
      <ul>
        <li>A promised grade, place, or predicted grade.</li>
        <li>DBS-checked, vetted, or SEN specialist.</li>
        <li>A KlaraLearn price, or “from £15”.</li>
        <li>A named tutor who will definitely be free.</li>
        <li>Lessons at the kitchen table. Lessons are online.</li>
        <li>Your commission, when you are speaking to the parent.</li>
      </ul>
    </div>
  </div>
  <p style="margin-top:10px">DBS does not apply to tutors who live outside the UK. Say that plainly if a parent asks. Point them to {e(SITE)}/safeguarding.</p>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">Commission schedule</p>
  <h2>5% for the first six months</h2>
  <p>The front of this programme is the starting rate: <strong>5% of the lesson fees the parent pays</strong>, for the first six months.</p>
  <div class="fine">
    <h3>Full rate schedule</h3>
    <p>Month 1 is the calendar month of the first paid lesson. Months 1 to 6 are at 5%. Months 7 to 12 are at 2.5%. From month 13, while that parent continues to pay for lessons, the rate is 1%.</p>
    <p>Refunds reduce the fee the percentage is applied to. The free trial is outside the calculation. The clock does not restart after a pause. One partner per parent. An account that already existed, and an account the partner controls, do not qualify.</p>
    <p>KlaraLearn confirms eligible fees in a monthly statement and pays commission by bank transfer after that statement is confirmed. Partners are independent introducers and handle their own tax.</p>
    <p>Illustration, using a sample profile rate of £40 an hour and four paid lessons in a month (£160). Month 1 to 6 would be £8. Month 7 to 12 would be £4. From month 13 it would be £1.60. This is not a quote and not a typical earning. The parent’s own profile rate is the one that counts.</p>
    <p>The Partner Programme Terms are the document to sign. Parent rights sit on klaralearn.com, including {e(SITE)}/legal/refunds.</p>
  </div>
  <p style="margin-top:12px">{e(COMPANY)}<br>Questions: {e(SUPPORT)}</p>
</section>
""",
        "Partner programme guide",
    )


def playbook() -> str:
    return page(
        cover(
            "On the call",
            "Book the trial before you finish.",
            "A short conversation, one subject, and a free 15-minute trial on the calendar.",
            None,
            "Keep the questionnaire beside you. The recommendation tool gives the same plan if you prefer the spreadsheet.",
        )
        + f"""
<section class="sheet">
  {logo_bar()}
  <p class="kicker">Open</p>
  <h2>Ninety seconds</h2>
  <p class="quote">“KlaraLearn is one-to-one tutoring online. You can meet a tutor for 15 minutes, free, before you pay for any lesson. If I understand the year group and the one subject that matters, I can show you the right page and we can book that trial now.”</p>
  <h3>Then ask only these</h3>
  <div class="grid">
    <div class="card"><strong>Year group</strong>Year 3 through Year 13.</div>
    <div class="card"><strong>The result</strong>11 Plus, SATs, a GCSE, an A level, or a calmer week of homework.</div>
    <div class="card"><strong>One subject</strong>Maths, English, science, or the 11 Plus mix.</div>
    <div class="card"><strong>When</strong>This term, this school year, or further away.</div>
    <div class="card"><strong>Time they can give</strong>Under an hour, one hour, or two.</div>
    <div class="card"><strong>Account</strong>Have they used KlaraLearn before?</div>
  </div>
  <p>Exam board, foundation or higher, and anything about pace can wait until you are booking the trial. Ask them then.</p>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">Advise in one line</p>
  <h2>The plan you can say aloud</h2>
  <table>
    <tr><th>If you hear</th><th>You say</th></tr>
    <tr><td>Year 5, 11 Plus, this term or next</td><td>Two lessons a week, one maths and one English or reasoning. Open the 11 Plus tutors page. Ask which paper the area uses. If the test is later, start with one lesson a week.</td></tr>
    <tr><td>Year 4, 11 Plus, next year</td><td>One lesson a week on maths and English. Add reasoning later.</td></tr>
    <tr><td>Year 6, SATs this term</td><td>One lesson a week in the weaker of maths or English until May. School runs the tests.</td></tr>
    <tr><td>Year 11, GCSE maths</td><td>One hour a week. Ask foundation or higher. Foundation stops at grade 5. Open GCSE maths tutors.</td></tr>
    <tr><td>Year 13, one A level</td><td>One hour a week on that subject. Confirm the exam board in the trial. Predicted grades come from school.</td></tr>
    <tr><td>Catch-up, any year</td><td>One hour a week on one subject. The trial is where you test the pace.</td></tr>
  </table>
  <div class="note">England has 163 state grammar schools. Kent has 36, and the Kent Test uses GL Assessment. Dates and papers differ by area. Ask the parent to check the local admissions page for this year.</div>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">Close</p>
  <h2>Book it while you are still talking</h2>
  <ol>
    <li>Open {e(SIGNUP)} and let the parent create the account.</li>
    <li>Open the tutor page the plan named. Read one profile together: subject, stage, experience, hourly rate.</li>
    <li>Book the free 15-minute trial on a day the child can sit down.</li>
    <li>Read the trial question once: it is printed on the questionnaire.</li>
    <li>Log the email, the plan and the trial date in the tracker before you move on.</li>
  </ol>
  <h3>Messages you can send</h3>
  <p><strong>Straight after.</strong> “Your KlaraLearn trial is booked. It is 15 minutes and it is free. The signup page, if you still need it, is {e(SIGNUP)}. Have a look at the tutor’s rate on the profile before you join.”</p>
  <p><strong>The day before.</strong> “Tomorrow is the 15-minute trial. Your child only needs a quiet spot and the Zoom or Google Meet link in your KlaraLearn account. KlaraLearn Notetaker will join so you can watch the lesson afterwards.”</p>
  <p><strong>The day after.</strong> “How did the trial feel? You can book paid lessons with that tutor, or meet another tutor the same way. I can stay on a call while you choose.”</p>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">If they hesitate</p>
  <h2>Answers that stay inside the facts</h2>
  <table>
    <tr><th>They say</th><th>You say</th></tr>
    <tr><td>It might be expensive.</td><td>The trial is free. After that you pay per lesson, and the hourly rate is on the profile. Local 11 Plus tutoring is often £35–£80 an hour. Compare the profile with that, then decide.</td></tr>
    <tr><td>We want someone DBS-checked.</td><td>DBS cannot be run on tutors who live outside the UK. KlaraLearn checks identity, interviews the tutor and assesses curriculum knowledge. Lessons are recorded and you can watch for 30 days. The trial comes before any paid lesson.</td></tr>
    <tr><td>Can you get us a grade 7, or a grammar place?</td><td>The tutor prepares the work. The school and the exam board award the grade, and the grammar school applies its own admissions rules.</td></tr>
    <tr><td>Can the tutor come to the house?</td><td>Lessons are online, on the Zoom or Google Meet link saved in KlaraLearn.</td></tr>
    <tr><td>What if we need to cancel?</td><td>The written rules are at klaralearn.com/legal/refunds. After the 14-day right, more than 24 hours’ notice is a full refund and under 24 hours is half.</td></tr>
    <tr><td>We already have an account.</td><td>Sign in at the login link and book the trial. Tell them you will not treat an existing account as a new introduction.</td></tr>
  </table>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">If something feels unsafe</p>
  <h2>Stop the sales conversation</h2>
  <div class="card"><strong>Immediate danger</strong>Call 999. Then email {e(SUPPORT)} with “Safeguarding” in the subject.</div>
  <div class="card" style="margin-top:8px"><strong>Any other concern</strong>Report it within one hour, to the same email or with “Report a concern” in the app. Include the lesson date if there is one.</div>
  <ul>
    <li>Listen. Let them use their own words. Do not ask leading questions.</li>
    <li>Do not promise to keep it a secret.</li>
    <li>Do not investigate, and do not contact the person they are talking about.</li>
    <li>Write down the words, with the date and time, as soon as you can.</li>
  </ul>
  <p>NSPCC helpline for adults: 0808 800 5000. Childline, for the child: 0800 1111. You are not the designated safeguarding lead. The lead reads the email.</p>
  <p class="tiny">Record the parent’s name, email and the plan you advised. Do not store card details, and do not keep a child’s fuller story in a personal chat.</p>
</section>
""",
        "Partner playbook",
    )


def leaflet() -> str:
    qr = ASSETS / "signup-qr.png"
    return page(
        f"""
<section class="sheet">
  <div style="background:{NAVY}; color:white; margin:-14mm -14mm 8mm; padding:14mm 14mm 10mm; border-bottom:6px solid {ORANGE};">
    <img src="{ASSETS / "logo-white-on-navy.png"}" alt="KlaraLearn" style="height:48px">
    <p class="kicker" style="color:#4DE1C1; margin-top:16px">For parents</p>
    <h2 style="color:white; font-size:32pt">Start with a free<br>15-minute trial.</h2>
    <p style="color:#E7EEF3; font-size:13pt; max-width:150mm">One tutor. One child. Online. You meet the tutor before you pay for a lesson.</p>
  </div>
  <div class="grid">
    <div class="card"><strong><span class="num">1</span>Create your account</strong>Use the link or the QR code on the next page. It takes a few minutes.</div>
    <div class="card"><strong><span class="num">2</span>Read a profile</strong>Look at the subject, the school stage, the experience and the hourly rate.</div>
    <div class="card"><strong><span class="num">3</span>Meet for 15 minutes</strong>Your child meets the tutor. You ask how they would teach the topic that matters.</div>
    <div class="card"><strong><span class="num">4</span>Book lessons if it fits</strong>Pay per lesson. If the first tutor is not the fit, you can meet another.</div>
  </div>
  <h3>A useful first question</h3>
  <p class="quote">“Can we use these 15 minutes to try one topic my child is stuck on?”</p>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">How a lesson works</p>
  <h2>You can see what happened</h2>
  <p>Lessons use the Zoom or Google Meet link saved in your KlaraLearn account. A notetaker called KlaraLearn Notetaker joins the call. You can watch your child’s video for 30 days.</p>
  <p>Before a tutor teaches, KlaraLearn checks their identity, interviews them, and assesses curriculum knowledge for the UK subjects they want to teach. A DBS check cannot be run on tutors who live outside the UK.</p>
  <div style="display:grid; grid-template-columns: 42mm 1fr; gap:14px; align-items:center; margin-top:8px;">
    <img src="{qr}" alt="QR code for parent signup" style="width:42mm; height:42mm">
    <div>
      <p class="kicker">Create your account</p>
      <div class="url">{e(SIGNUP)}</div>
      <p class="tiny" style="margin-top:6px">Already registered? Sign in at https://app.klaralearn.com/?view=login</p>
    </div>
  </div>
  <h3>Worth reading</h3>
  <ul>
    <li>How a lesson runs: {e(SITE)}/how-it-works</li>
    <li>Safeguarding: {e(SITE)}/safeguarding</li>
    <li>What tutoring costs in the UK market: {e(SITE)}/blog/how-much-does-tutoring-cost</li>
    <li>Cancellation and refunds: {e(SITE)}/legal/refunds</li>
  </ul>
  <p class="tiny">{e(COMPANY)} · {e(SUPPORT)}</p>
</section>
""",
        "Parent trial leaflet",
    )


def questionnaire() -> str:
    def checks(options: list[str]) -> str:
        return "".join(f'<span><i class="box"></i>{e(opt)}</span>' for opt in options)

    return page(
        cover(
            "Advisor questionnaire",
            "One subject. One plan.",
            "Fill this in with the parent. It takes about four minutes. Then read the matching line on the back.",
            None,
            "The spreadsheet does the same job if you are at a laptop. Same questions. Same plans.",
        )
        + f"""
<section class="sheet">
  {logo_bar()}
  <p class="kicker">With the parent</p>
  <h2>Tick one in each line</h2>
  <div class="q"><b>Parent name and email</b><div class="boxline"></div></div>
  <div class="q"><b>Partner and today’s date</b><div class="boxline"></div></div>
  <div class="q"><b>1. School year</b><div class="checks">{checks(["Y3","Y4","Y5","Y6","Y7","Y8","Y9","Y10","Y11","Y12","Y13","Younger","Not sure"])}</div></div>
  <div class="q"><b>2. The result they care about</b><div class="checks">{checks(["11 Plus","KS2 SATs","GCSE","A level","Catch-up or confidence","Homework support"])}</div></div>
  <div class="q"><b>3. One subject</b><div class="checks">{checks(["Maths","English","Science","11 Plus mix","Not sure"])}</div></div>
  <div class="q"><b>4. When is the exam or the deadline?</b><div class="checks">{checks(["This term","Next term","This school year","More than a year away","Not sure"])}</div></div>
  <div class="q"><b>5. Where is the child now?</b><div class="checks">{checks(["Above target","On track","About one grade below","More than one grade below","Not sure"])}</div></div>
  <div class="q"><b>6. Time they can give each week</b><div class="checks">{checks(["Under 1 hour","About 1 hour","About 2 hours","3 hours or more"])}</div></div>
  <div class="q"><b>7. Exam board, if there is one</b><div class="checks">{checks(["Not sure","AQA","Edexcel","OCR","WJEC or Eduqas","No exam board"])}</div></div>
  <div class="q"><b>8. Anything the tutor should hear in the trial</b><div class="checks">{checks(["Nothing to flag","Extra time","English as an additional language","Anxious about tests","Wants a patient pace"])}</div></div>
  <div class="q"><b>9. Do they already have a KlaraLearn account?</b><div class="checks">{checks(["No","Yes","Not sure"])}</div></div>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">Read the matching line</p>
  <h2>Then book the trial</h2>
  <table>
    <tr><th>Year and goal</th><th>Plan to recommend</th><th>Page to open</th></tr>
    <tr><td>Y4 or younger, 11 Plus</td><td>One 45–60 minute lesson a week, maths and English.</td><td>11 Plus tutors</td></tr>
    <tr><td>Y5, 11 Plus, test soon</td><td>Two lessons a week: maths, plus English or reasoning.</td><td>11 Plus tutors</td></tr>
    <tr><td>Y6, 11 Plus</td><td>One or two lessons a week on the local paper. Applications usually close on 31 October.</td><td>11 Plus tutors</td></tr>
    <tr><td>Y6, SATs</td><td>One lesson a week in the weaker of maths or English, until May.</td><td>Maths or English tutors</td></tr>
    <tr><td>Y7–Y9, catch-up</td><td>One hour a week on one subject.</td><td>That subject’s page</td></tr>
    <tr><td>Y10, GCSE</td><td>One hour a week on the subject furthest from the hoped-for grade.</td><td>Subject page. Maths: GCSE maths tutors</td></tr>
    <tr><td>Y11, GCSE, this year</td><td>One hour a week. A second hour only if school work still gets done.</td><td>Subject page</td></tr>
    <tr><td>Y12, A level</td><td>One hour a week. Confirm the exam board in the trial.</td><td>Subject page</td></tr>
    <tr><td>Y13, A level, exam soon</td><td>One hour a week on the nearest exam. Predicted grades come from school.</td><td>Subject page</td></tr>
  </table>
  <div class="note">Always add this sentence: “We’ll read the rate and the experience on the profile, and use the free 15-minute trial to see if the teaching suits your child.” Extra time, a patient pace, or English as an additional language is mentioned in the trial. It is not a specialist badge.</div>
  <p>GCSE maths: ask foundation or higher. Foundation stops at grade 5. Science: name biology, chemistry, physics, or combined science.</p>
  <p><strong>New parent:</strong> {e(SIGNUP)}<br><strong>Existing account:</strong> https://app.klaralearn.com/?view=login</p>
</section>
""",
        "Advisor questionnaire",
    )


def knowledge() -> str:
    return page(
        cover(
            "Knowledge base",
            "From the 11 Plus to A level.",
            "A plain account of how English schools are organised, so you can advise a timetable without guessing.",
            None,
            "Scotland and Northern Ireland run different exams. This pack follows England, which is the system KlaraLearn parents are usually navigating.",
        )
        + f"""
<section class="sheet">
  {logo_bar()}
  <p class="kicker">The map</p>
  <h2>Age, year, and what the year is for</h2>
  <table>
    <tr><th>Age on 31 Aug</th><th>Year</th><th>Stage</th><th>What parents usually mean</th></tr>
    <tr><td>7–8</td><td>Y3</td><td>KS2</td><td>Primary. Early 11 Plus habits can start later, not a full test plan.</td></tr>
    <tr><td>8–9</td><td>Y4</td><td>KS2</td><td>A calm start for 11 Plus: one lesson a week.</td></tr>
    <tr><td>9–10</td><td>Y5</td><td>KS2</td><td>The main 11 Plus preparation year. Registration often opens in the summer.</td></tr>
    <tr><td>10–11</td><td>Y6</td><td>KS2</td><td>11 Plus is usually sat in the autumn. SATs are in May. Secondary offers are in March.</td></tr>
    <tr><td>11–14</td><td>Y7–Y9</td><td>KS3</td><td>Secondary. No national exam at the end for most schools. Options for GCSE are chosen around Y9.</td></tr>
    <tr><td>14–15</td><td>Y10</td><td>KS4</td><td>GCSE courses begin in earnest.</td></tr>
    <tr><td>15–16</td><td>Y11</td><td>KS4</td><td>GCSE exams, mostly in the summer.</td></tr>
    <tr><td>16–17</td><td>Y12</td><td>KS5</td><td>First year of A level, usually three subjects.</td></tr>
    <tr><td>17–18</td><td>Y13</td><td>KS5</td><td>A level exams. University applications have already gone in.</td></tr>
  </table>
  <p class="tiny">A child’s year is set by the English school year, which runs from September. Ask “what year are they in?” rather than working it out from age alone.</p>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">Grades, in one conversation</p>
  <h2>What a number or a letter means</h2>
  <h3>Primary</h3>
  <p>Year 6 SATs give a scaled score. 100 is the expected standard. Scores run from 80 to 120. The tests the child sits are reading, maths, and grammar, punctuation and spelling. Writing is judged by the teacher. The school administers SATs. A tutor can practise the skills beforehand.</p>
  <h3>GCSE</h3>
  <p>GCSEs are graded 9 to 1. 9 is the highest. 7 is broadly the old A. 4 is a standard pass and 5 is a strong pass. English and maths at grade 4 are the results colleges and employers most often ask about. These are the child’s grades. Progress 8 is a measure for the school, not a grade on a report.</p>
  <h3>A level</h3>
  <p>A levels are graded A* to E. The school, not the tutor, issues predicted grades for university applications. UCAS points used on applications are A* 56, A 48, B 40, C 32, D 24 and E 16. Many students take three A levels.</p>
  <div class="note">A tutor helps the child prepare. The exam board marks the paper and the school submits the entry and any predicted grade.</div>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">11 Plus</p>
  <h2>A test for a grammar place, not a national exam</h2>
  <p>The 11 Plus is a selective test used by grammar schools and some independent schools. There are 163 state grammar schools in England. They do not charge tuition fees. Kent has 36 of them, more than any other county, and the Kent Test uses GL Assessment.</p>
  <p>Papers can include English, maths, verbal reasoning and non-verbal reasoning. The mix depends on the area. Many areas use GL Assessment. Some schools set their own papers. Ask the parent which area, and look at that area’s admissions page for this year’s date. Do not assume every area uses the same paper.</p>
  <table>
    <tr><th>Usual point in the year</th><th>What families are doing</th></tr>
    <tr><td>Year 5, summer</td><td>Registration for several tests, including the Kent Test, often opens around June and July.</td></tr>
    <tr><td>Start of Year 6</td><td>Many 11 Plus tests are sat in September. Results follow in the autumn.</td></tr>
    <tr><td>31 October, Year 6</td><td>The usual deadline for state secondary applications in England.</td></tr>
    <tr><td>1 March, Year 6</td><td>National offer day for secondary places.</td></tr>
  </table>
  <p>Preparation that starts in Year 4 or Year 5 gives a calmer run-up, because the test itself is early in Year 6. A child sitting the test this term needs papers from their own area, not a generic workbook.</p>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">GCSE, the details that change the plan</p>
  <h2>Tier, science route, and two Englishes</h2>
  <div class="grid">
    <div class="card"><strong>Maths tier</strong>Foundation papers award up to grade 5. Higher papers are for grades above that, and the school decides the tier. A hope for a grade 6 needs a higher-tier entry.</div>
    <div class="card"><strong>Science route</strong>Combined science is a double award. Triple science is biology, chemistry and physics as separate GCSEs. Ask which one the child sits.</div>
    <div class="card"><strong>English</strong>English Language and English Literature are separate GCSEs. Ask which paper is the worry.</div>
    <div class="card"><strong>Exam board</strong>AQA, Edexcel, OCR, and WJEC or Eduqas set different papers. The parent can ask the school. The tutor is asked in the trial.</div>
  </div>
  <h3>A level timing</h3>
  <p>A levels are linear: the exams that decide the grade are at the end of Year 13. Year 12 is for building the content. The UCAS deadline for most courses is in January of Year 13. Medicine, Oxford and Cambridge, and some other courses, use 15 October in Year 13. The tutor does not set the predicted grade those applications use.</p>
  <p>T Levels and BTECs sit alongside A levels in many colleges. KlaraLearn’s published pages are for 11 Plus, maths, English and science. If a parent names another course, look for a current profile that lists it, and say so if you cannot see one.</p>
</section>
<section class="sheet">
  {logo_bar()}
  <p class="kicker">Which page to open</p>
  <h2>Match the goal to a list of profiles</h2>
  <table>
    <tr><th>The parent is talking about</th><th>Open</th></tr>
    <tr><td>11 Plus, grammar, Kent, GL, reasoning</td><td>{e(SITE)}/subjects/11-plus</td></tr>
    <tr><td>Maths, including A level maths</td><td>{e(SITE)}/subjects/maths</td></tr>
    <tr><td>GCSE maths specifically</td><td>{e(SITE)}/subjects/gcse-maths</td></tr>
    <tr><td>English</td><td>{e(SITE)}/subjects/english</td></tr>
    <tr><td>Biology, chemistry, physics, combined science</td><td>{e(SITE)}/subjects/science</td></tr>
    <tr><td>What a lesson is like</td><td>{e(SITE)}/how-it-works</td></tr>
    <tr><td>Price, compared with the UK market</td><td>{e(SITE)}/blog/how-much-does-tutoring-cost</td></tr>
    <tr><td>Safety and recording</td><td>{e(SITE)}/safeguarding</td></tr>
  </table>
  <div class="note">Profiles change. You recommend a page and a weekly pattern. The parent chooses a person after reading the rate, the subjects and the experience, and after the free 15-minute trial.</div>
  <p>Signup for a new parent: {e(SIGNUP)}</p>
</section>
""",
        "UK schools knowledge base",
    )


def terms_pdf() -> str:
    from kit_content import TERMS

    blocks = []
    for title, body in TERMS:
        blocks.append(f"<h3>{e(title)}</h3><p>{e(body)}</p>")
    # Split roughly in half for two content pages plus cover
    mid = 6
    first = "".join(blocks[:mid])
    second = "".join(blocks[mid:])
    return page(
        cover(
            "Partner programme terms",
            "5% for the first six months.",
            "The commercial arrangement for partners who introduce parents to KlaraLearn.",
            "Earn 5%",
            "The full schedule, including 2.5% and 1%, is clause 3. Please read it before you sign the Word copy.",
        )
        + f"""
<section class="sheet terms">
  {logo_bar()}
  <p class="kicker">{e(VERSION)}</p>
  <h2>Partner programme terms</h2>
  <p>Between the partner named in the signature block and KlaraLearn, a trading name of EDUBRIDGE GLOBAL LEARNING LIMITED.</p>
  {first}
</section>
<section class="sheet terms">
  {logo_bar()}
  {second}
</section>
<section class="sheet terms">
  {logo_bar()}
  <p class="kicker">Sign and return</p>
  <h2>Signature</h2>
  <p>Sign this page and email it to {e(SUPPORT)}. The Word document in this kit is the same agreement, if you prefer to sign there.</p>
  <table>
    <tr><th></th><th>Partner</th><th>For KlaraLearn</th></tr>
    <tr><td>Name</td><td style="height:28px"></td><td></td></tr>
    <tr><td>Date</td><td style="height:28px"></td><td></td></tr>
    <tr><td>Signature</td><td style="height:36px"></td><td></td></tr>
  </table>
  <p class="tiny">{e(COMPANY)}</p>
</section>
""",
        "Partner programme terms",
    )


def main() -> None:
    import qrcode

    qr = qrcode.QRCode(border=1, box_size=10)
    qr.add_data(SIGNUP)
    qr.make(fit=True)
    img = qr.make_image(fill_color=NAVY, back_color="white")
    img.save(ASSETS / "signup-qr.png")

    docs = {
        "start-here.html": (start_here(), "KlaraLearn-Partner-Kit-Start-Here.pdf"),
        "guide.html": (guide(), "KlaraLearn-Partner-Programme-Guide.pdf"),
        "playbook.html": (playbook(), "KlaraLearn-Partner-Playbook.pdf"),
        "leaflet.html": (leaflet(), "KlaraLearn-Parent-Trial-Leaflet.pdf"),
        "questionnaire.html": (questionnaire(), "KlaraLearn-Advisor-Questionnaire.pdf"),
        "knowledge.html": (knowledge(), "KlaraLearn-UK-Schools-Knowledge-Base.pdf"),
        "terms.html": (terms_pdf(), "KlaraLearn-Partner-Programme-Terms.pdf"),
    }
    for name, (content, pdf) in docs.items():
        path = write_html(name, content)
        print_pdf(path, pdf)
        print("wrote", pdf)


if __name__ == "__main__":
    main()
