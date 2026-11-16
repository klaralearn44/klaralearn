"""Shared copy and the marketer recommendation rules for the KlaraLearn partner kit."""

VERSION = "Version 1.0 · November 2026"
COMPANY = (
    "KlaraLearn is a trading name of EDUBRIDGE GLOBAL LEARNING LIMITED, "
    "company number 17011141. Registered office: 167–169 Great Portland Street, "
    "London, England, W1W 5PF."
)
SUPPORT = "support@klaralearn.com"
SIGNUP = "https://app.klaralearn.com?view=signup"
LOGIN = "https://app.klaralearn.com/?view=login"
SITE = "https://www.klaralearn.com"

YEARS = [
    "Younger than Y3",
    "Y3",
    "Y4",
    "Y5",
    "Y6",
    "Y7",
    "Y8",
    "Y9",
    "Y10",
    "Y11",
    "Y12",
    "Y13",
    "Not sure",
]
GOALS = [
    "11 Plus",
    "KS2 SATs",
    "GCSE",
    "A level",
    "Catch-up or confidence",
    "Homework support",
]
SUBJECTS = ["Maths", "English", "Science", "11 Plus mix", "Not sure"]
WHENS = ["This term", "Next term", "This school year", "More than a year away", "Not sure"]
POSITIONS = [
    "Working above the target",
    "On track",
    "About one grade below",
    "More than one grade below",
    "Parent is not sure",
]
HOURS = ["Under 1 hour", "About 1 hour", "About 2 hours", "3 hours or more"]
BOARDS = ["Not sure", "AQA", "Edexcel", "OCR", "WJEC or Eduqas", "No exam board"]
NOTES = [
    "None to flag",
    "Extra time in exams",
    "English as an additional language",
    "Anxious about tests",
    "Wants a patient pace",
]
ACCOUNTS = ["No", "Yes", "Not sure"]

YEAR_BAND = {
    "Younger than Y3": "Early",
    "Y3": "Y3–Y4",
    "Y4": "Y3–Y4",
    "Y5": "Y5",
    "Y6": "Y6",
    "Y7": "Y7–Y9",
    "Y8": "Y7–Y9",
    "Y9": "Y7–Y9",
    "Y10": "Y10",
    "Y11": "Y11",
    "Y12": "Y12",
    "Y13": "Y13",
    "Not sure": "Unclear",
}
GOAL_GROUP = {
    "11 Plus": "11 Plus",
    "KS2 SATs": "SATs",
    "GCSE": "GCSE",
    "A level": "A level",
    "Catch-up or confidence": "Support",
    "Homework support": "Support",
}
BANDS = ["Early", "Y3–Y4", "Y5", "Y6", "Y7–Y9", "Y10", "Y11", "Y12", "Y13", "Unclear"]
GROUPS = ["11 Plus", "SATs", "GCSE", "A level", "Support"]


def intensity(when: str, year: str) -> str:
    if when in ("This term", "Next term"):
        return "High"
    if year in ("Y11", "Y13") and when == "This school year":
        return "High"
    return "Standard"


def focus_label(year: str, goal: str, subject: str) -> str:
    band = YEAR_BAND.get(year, "Unclear")
    if goal == "11 Plus" or subject == "11 Plus mix":
        if band in ("Y7–Y9", "Y10", "Y11", "Y12", "Y13"):
            return "Pause and confirm the goal"
        return "11 Plus"
    if goal == "KS2 SATs":
        if subject == "English":
            return "KS2 English"
        if subject == "Science":
            return "KS2 maths, unless science is the real gap"
        return "KS2 maths"
    if subject == "Science":
        return "Science"
    if subject == "English":
        return "English"
    if subject == "Maths" and goal == "GCSE" and band in ("Y10", "Y11"):
        return "GCSE maths"
    if subject == "Maths":
        return "Maths"
    return "One subject, chosen with the parent"


def page_for(label: str) -> tuple[str, str]:
    pages = {
        "11 Plus": ("11 Plus tutors", f"{SITE}/subjects/11-plus"),
        "GCSE maths": ("GCSE maths tutors", f"{SITE}/subjects/gcse-maths"),
        "Maths": ("Maths tutors", f"{SITE}/subjects/maths"),
        "KS2 maths": ("Maths tutors", f"{SITE}/subjects/maths"),
        "KS2 maths, unless science is the real gap": ("Maths tutors", f"{SITE}/subjects/maths"),
        "English": ("English tutors", f"{SITE}/subjects/english"),
        "KS2 English": ("English tutors", f"{SITE}/subjects/english"),
        "Science": ("Science tutors", f"{SITE}/subjects/science"),
    }
    return pages.get(label, ("Find a tutor", f"{SITE}/find-a-tutor"))


def weekly_pattern(year: str, goal: str, when: str) -> str:
    band = YEAR_BAND.get(year, "Unclear")
    group = GOAL_GROUP.get(goal, "Support")
    high = intensity(when, year) == "High"

    if group == "11 Plus":
        if band in ("Early", "Y3–Y4"):
            return "One 45–60 minute lesson a week, shared between maths and English. Add reasoning as Year 5 gets closer."
        if band == "Y5":
            if high:
                return "Two lessons a week: one maths, one English or reasoning. Use the paper the child’s area actually sets."
            return "One lesson a week on maths and English, with a little reasoning. Move to two lessons when the test date is fixed."
        if band == "Y6":
            return "One or two lessons a week on the paper this area sets. Secondary applications usually close on 31 October."
        if band == "Unclear":
            return "Ask the school year before you set a week plan. 11 Plus preparation sits in Year 4, Year 5 and the start of Year 6."
        return "The 11 Plus is a primary-school test for a Year 7 grammar place. Ask whether the parent means GCSE, A level, or catch-up, and use that plan."

    if group == "SATs":
        if band == "Y6":
            return "One lesson a week in the weaker of maths or English until the May SATs. The school runs the tests."
        if band in ("Y3–Y4", "Y5", "Early"):
            return "One lesson a week on the weak skill. SATs are in May of Year 6, so there is time to build the method."
        return "KS2 SATs are taken in Year 6. If this child is older, switch the plan to GCSE, A level, or catch-up."

    if group == "GCSE":
        if band == "Y11" or high:
            return "One hour a week on one GCSE subject. Add a second hour only if the child can keep up with school work."
        if band in ("Y10", "Y9"):
            return "One hour a week on the subject furthest from the grade the parent hopes for."
        if band == "Unclear":
            return "Ask the year group. A GCSE plan is usually one hour a week on one subject in Year 10 or Year 11."
        return "GCSE teaching is for Year 10 and Year 11. If the child is younger, use a catch-up plan on one subject."

    if group == "A level":
        if band == "Y13" or (band == "Y12" and high):
            return "One hour a week on the A level with the nearest exam. A second hour only if past papers are the work."
        if band in ("Y12", "Y11"):
            return "One hour a week. Confirm the exam board and that the profile lists this subject at A level."
        if band == "Unclear":
            return "Ask the year group. A level tutoring is for Year 12 and Year 13, one subject at a time."
        return "A levels are Year 12 and Year 13. If the child is younger, advise the GCSE or catch-up plan instead."

    # Support
    if band == "Unclear":
        return "Ask the school year, then one lesson a week on the single subject the parent most wants to change."
    if high:
        return "One hour a week on one subject until the trial tutor and the parent agree there is room for more."
    return "One hour a week on one subject. Keep the goal as understanding, not a pile of subjects."


def trial_question(goal: str, subject: str, board: str) -> str:
    group = GOAL_GROUP.get(goal, "Support")
    subject_name = {
        "Maths": "maths",
        "English": "English",
        "Science": "science",
        "11 Plus mix": "the 11 Plus mix",
        "Not sure": "the subject you agree",
    }.get(subject, "the subject")
    board_bit = ""
    if board not in ("Not sure", "No exam board", "", None) and group in ("GCSE", "A level"):
        board_bit = f" Do you teach {board} {subject_name}?"
    elif group in ("GCSE", "A level"):
        board_bit = " The parent is not sure of the exam board, so ask them to check it with school and ask the tutor in the trial."
    if group == "11 Plus":
        return "Which paper does your area use, and can we use the 15-minute trial to see if this tutor teaches that paper?"
    if group == "SATs":
        return "Can we use the trial to see how you would practise the one skill my child finds hardest?"
    if group == "GCSE":
        return f"Can we look at one exam-style {subject_name} question in the trial?{board_bit}"
    if group == "A level":
        return f"Do you teach {subject_name} at A level?{board_bit}"
    return f"Can we use the trial to see how you explain one {subject_name} topic my child is stuck on?"


def cautions(year: str, goal: str, subject: str, when: str, position: str, hours: str, note: str, account: str) -> list[str]:
    out = [
        "Read the hourly rate, the subjects and the experience on the current profile. Agree the fit in the free 15-minute trial.",
    ]
    band = YEAR_BAND.get(year, "Unclear")
    group = GOAL_GROUP.get(goal, "Support")
    if hours == "Under 1 hour" and "Two lessons" in weekly_pattern(year, goal, when):
        out.append("The child can spare less than an hour. Start with one lesson a week.")
    if position == "More than one grade below" and group in ("GCSE", "A level", "SATs"):
        out.append("Stay on one subject until the trial tutor and the parent agree a plan.")
    if group == "GCSE" and subject == "Maths":
        out.append("Ask whether the school has entered the child for foundation or higher. Foundation maths stops at grade 5.")
    if subject == "Science":
        out.append("Ask which science the child sits: biology, chemistry, physics, or combined science. The profile needs to list that science.")
    if note == "Extra time in exams":
        out.append("Mention extra time in the trial. Do not describe the tutor as a SEN specialist.")
    elif note == "English as an additional language":
        out.append("Ask for clear, steady English, and for the tutor to check the child understood the question.")
    elif note == "Anxious about tests":
        out.append("Tell the parent the trial is 15 minutes and the child can stop. Keep the first paid week to one lesson.")
    elif note == "Wants a patient pace":
        out.append("Say so in the trial, and judge the pace there. A patient pace is a fit question, not a badge on the profile.")
    if account == "Yes":
        out.append("This parent already has an account. They sign in and book a trial. Do not claim partner commission on an existing account.")
    elif account == "Not sure":
        out.append("Ask whether they have used KlaraLearn before. Commission is for a parent who is new to the platform.")
    if band == "Early" and group != "Support":
        out.append("KlaraLearn’s published tutoring is built around 11 Plus, SATs, GCSE and A level. Look for a profile that lists primary maths or English.")
    return out


def advise(year, goal, subject, when, position, hours, board, note, account) -> dict:
    label = focus_label(year, goal, subject)
    page_name, page_url = page_for(label)
    if account == "Yes":
        action = f"Ask them to sign in at {LOGIN} and book the free 15-minute trial."
    else:
        action = f"Send {SIGNUP} and book the free 15-minute trial before the conversation ends."
    return {
        "focus": label,
        "page_name": page_name,
        "page_url": page_url,
        "pattern": weekly_pattern(year, goal, when),
        "question": trial_question(goal, subject, board),
        "cautions": cautions(year, goal, subject, when, position, hours, note, account),
        "action": action,
        "year_band": YEAR_BAND.get(year, "Unclear"),
        "goal_group": GOAL_GROUP.get(goal, "Support"),
        "intensity": intensity(when, year),
    }


def rule_rows():
    """One row per year-band, goal and intensity, using a representative year and timing."""
    sample_year = {
        "Early": "Younger than Y3",
        "Y3–Y4": "Y4",
        "Y5": "Y5",
        "Y6": "Y6",
        "Y7–Y9": "Y8",
        "Y10": "Y10",
        "Y11": "Y11",
        "Y12": "Y12",
        "Y13": "Y13",
        "Unclear": "Not sure",
    }
    sample_goal = {
        "11 Plus": "11 Plus",
        "SATs": "KS2 SATs",
        "GCSE": "GCSE",
        "A level": "A level",
        "Support": "Catch-up or confidence",
    }
    rows = []
    for band in BANDS:
        for group in GROUPS:
            for level in ("High", "Standard"):
                when = "This term" if level == "High" else "More than a year away"
                text = weekly_pattern(sample_year[band], sample_goal[group], when)
                rows.append((f"{band}|{group}|{level}", text))
    return rows


TERMS = [
    (
        "Purpose",
        "This document sets the commercial arrangement between a partner and KlaraLearn. "
        "A partner introduces parents to KlaraLearn, helps them create an account, and helps them book a free 15-minute trial. "
        "The parent then compares tutor profiles and decides whether to book paid lessons.",
    ),
    (
        "The headline rate",
        "Partners earn 5% of eligible paid lesson fees for the first six months.",
    ),
    (
        "Full commission schedule",
        "The clock starts in the calendar month of the parent’s first paid lesson. That month is month 1, even if the lesson falls late in the month. "
        "Months 1 to 6: 5% of eligible paid lesson fees. "
        "Months 7 to 12: 2.5% of eligible paid lesson fees. "
        "Month 13 onwards, for as long as that parent continues to pay for lessons: 1% of eligible paid lesson fees. "
        "The clock does not restart if the parent pauses and later books again. "
        "The free 15-minute trial is not a paid lesson and carries no commission.",
    ),
    (
        "Eligible fees",
        "Eligible fees are the lesson charges the parent pays to KlaraLearn in that calendar month, minus refunds recorded against those lessons. "
        "Lesson credit has no cash value and is not an eligible fee. A fee becomes eligible when the parent pays it. "
        "The rate on a tutor profile is set by that tutor. Partners do not quote a KlaraLearn price, and they do not promise a rate.",
    ),
    (
        "Who counts as the partner’s parent",
        "A parent counts when three things are true. The parent did not already have a KlaraLearn account. "
        "The partner recorded the parent’s name and email with KlaraLearn before the account was created. "
        "The parent is attributed to only one partner, the first partner whose record is complete. "
        "A partner does not earn commission on an account the partner controls, or on a family the partner has entered in order to earn the commission themselves.",
    ),
    (
        "What the partner does",
        "Use the current parent signup link, https://app.klaralearn.com?view=signup. "
        "Use the advisor questionnaire before recommending a subject or a weekly pattern. "
        "Sit with the parent if they want help, and let the parent create the account and choose the tutor. "
        "Book the free 15-minute trial before the conversation ends, when the parent is ready. "
        "Log the conversation in the funnel tracker the same day.",
    ),
    (
        "What the partner must not say",
        "Do not promise a grammar school place, a GCSE grade, an A level grade, or a predicted grade. Predicted grades come from the child’s school. "
        "Do not say a tutor is DBS-checked. A DBS check is a UK process and is not run on tutors who live outside the UK. "
        "You may say that KlaraLearn checks a tutor’s identity, interviews the tutor, and assesses curriculum knowledge for the UK subjects they want to teach. "
        "Do not call a tutor vetted, approved, or a SEN specialist. "
        "Do not promise that a particular subject or a named tutor is available. The parent checks the current profiles. "
        "Do not say lessons take place in the parent’s home. Lessons use the Zoom or Google Meet link saved in KlaraLearn. "
        "Do not invent a KlaraLearn hourly rate. The parent reads the rate on the profile.",
    ),
    (
        "Lessons, recording and safeguarding",
        "Lessons are one to one and online. KlaraLearn Notetaker joins the lesson. Parents can watch their child’s video for 30 days. "
        "If a child may be in immediate danger, call 999, then email support@klaralearn.com with “Safeguarding” in the subject. "
        "For any other concern, report it within one hour to the same address or with “Report a concern” in the app. "
        "Listen, write down what was said, and do not promise to keep it a secret. Do not investigate it yourself.",
    ),
    (
        "Parent rights you should know",
        "Parents compare profiles, take the free trial, and book paid lessons only if the match is right. They can book another trial if the first tutor is not the right fit. "
        "Cancellation and refunds follow the Cancellation & Refund Policy at https://www.klaralearn.com/legal/refunds. "
        "After the 14-day cancellation right no longer applies: more than 24 hours’ notice is a full refund, and less than 24 hours is a 50% refund. "
        "Send parents to that policy rather than restating a different rule.",
    ),
    (
        "Statements and payment",
        "KlaraLearn confirms eligible paid lesson fees in a monthly statement. Commission is paid by bank transfer to the account the partner nominates, after that statement is confirmed. "
        "The partner is an independent introducer, not an employee or agent who can bind KlaraLearn. The partner is responsible for their own tax.",
    ),
    (
        "Parent information",
        "Record the parent’s name, email, the advice you gave, and the trial status. Do not take or store card details. "
        "Do not keep a child’s fuller story in a personal chat that you cannot delete. Share parent information only with KlaraLearn, for this programme.",
    ),
    (
        "Ending the arrangement",
        "Either party can end the arrangement by emailing support@klaralearn.com. New introductions stop. "
        "Commission on parents already attributed continues on the schedule while those parents pay, unless the partner misled a parent, invented a referral, or entered a family in order to earn commission. "
        "Those referrals do not earn commission, and KlaraLearn may withhold unpaid commission on them.",
    ),
    (
        "Order of documents",
        "If a parent’s rights and this document ever touch the same point, the parent’s Terms of Service and the policies on klaralearn.com govern the parent. "
        "This document governs the partner’s commission. It is governed by the law of England and Wales.",
    ),
]
