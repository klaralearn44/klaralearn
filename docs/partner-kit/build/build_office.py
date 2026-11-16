"""Word terms, the partner briefing, and the two working spreadsheets."""

from __future__ import annotations

from pathlib import Path

from openpyxl import Workbook
from openpyxl.chart.shapes import GraphicalProperties
from openpyxl.formatting.rule import FormulaRule
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation
from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.oxml.ns import qn
from pptx.util import Emu, Inches, Pt
from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn as dqn
from docx.shared import Cm, Pt as DocPt, RGBColor as DocRGB

from kit_content import (
    ACCOUNTS,
    BOARDS,
    COMPANY,
    GOALS,
    HOURS,
    NOTES,
    POSITIONS,
    SIGNUP,
    SITE,
    SUBJECTS,
    SUPPORT,
    TERMS,
    VERSION,
    WHENS,
    YEARS,
    advise,
    rule_rows,
)

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"

NAVY = "1B3D5C"
TEAL = "00A896"
ORANGE = "E05C2A"
MIST = "F4F8F8"
AMBER = "FFF6F2"
WHITE = "FFFFFF"
INK = "1B3D5C"


def fill(hex_color: str) -> PatternFill:
    return PatternFill("solid", fgColor=hex_color)


def font(size=11, bold=False, color=INK, name="Calibri"):
    return Font(name=name, size=size, bold=bold, color=color)


THIN = Border(
    left=Side(style="thin", color="E2E8EE"),
    right=Side(style="thin", color="E2E8EE"),
    top=Side(style="thin", color="E2E8EE"),
    bottom=Side(style="thin", color="E2E8EE"),
)


def set_col_widths(ws, widths):
    for i, width in enumerate(widths, 1):
        ws.column_dimensions[get_column_letter(i)].width = width


def paint(cell, text, *, size=11, bold=False, color=INK, bg=None, align="left", wrap=True):
    cell.value = text
    cell.font = font(size, bold, color)
    cell.alignment = Alignment(horizontal=align, vertical="center", wrap_text=wrap)
    if bg:
        cell.fill = fill(bg)
    return cell


def header_bar(ws, title, subtitle, last_col):
    ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=last_col)
    ws.merge_cells(start_row=2, start_column=1, end_row=2, end_column=last_col)
    paint(ws.cell(1, 1), title, size=20, bold=True, color=WHITE, bg=NAVY)
    paint(ws.cell(2, 1), subtitle, size=11, color=WHITE, bg=TEAL)
    ws.row_dimensions[1].height = 28
    ws.row_dimensions[2].height = 32
    for col in range(1, last_col + 1):
        ws.cell(1, col).fill = fill(NAVY)
        ws.cell(2, col).fill = fill(TEAL)


def dropdown(ws, cell_range, options, name):
    formula = '"' + ",".join(options) + '"'
    dv = DataValidation(type="list", formula1=formula, allow_blank=True)
    dv.error = "Choose a value from the list."
    dv.errorTitle = name
    dv.add(cell_range)
    ws.add_data_validation(dv)


def build_recommendation():
    wb = Workbook()
    advise_ws = wb.active
    advise_ws.title = "Advise"
    lists = wb.create_sheet("Lists")
    rules = wb.create_sheet("Week plans")
    readme = wb.create_sheet("How to use", 0)

    header_bar(
        readme,
        "KlaraLearn advisor tool",
        "Earn 5% when a new parent goes on to book paid lessons. This sheet only helps you recommend a subject and a week plan.",
        2,
    )
    lines = [
        (4, "1. Open the Advise tab. Yellow cells are the ones you fill."),
        (5, "2. Read the plan in the teal box aloud. Then open the page it names and book the free 15-minute trial."),
        (6, "3. The paper questionnaire in the partner kit asks the same questions, if you are not at a laptop."),
        (7, "4. Do not promise a grade, a grammar place, a DBS check, or a price. The rate is on the tutor profile."),
        (8, "5. Signup link for a new parent: " + SIGNUP),
        (9, "6. The 5% rate covers the first six months of paid lessons. Later rates are in the programme terms."),
        (11, COMPANY),
        (12, VERSION + " · " + SUPPORT),
    ]
    for row, text in lines:
        paint(readme.cell(row, 1), text, size=13 if row < 11 else 10, wrap=True)
        readme.merge_cells(start_row=row, start_column=1, end_row=row, end_column=2)
        readme.row_dimensions[row].height = 22
    set_col_widths(readme, [120, 30])
    readme.page_setup.orientation = "landscape"
    readme.page_setup.fitToPage = True
    readme.page_setup.fitToWidth = 1
    readme.page_setup.fitToHeight = 1
    readme.sheet_properties.pageSetUpPr.fitToPage = True
    readme.oddHeader.left.text = "KlaraLearn"
    readme.oddFooter.left.text = VERSION
    readme.oddFooter.right.text = "Advisor tool"
    readme.print_title_rows = "1:2"
    readme.page_setup.paperSize = readme.PAPERSIZE_A4
    readme.sheet_view.showGridLines = False
    readme.freeze_panes = "A4"

    list_cols = [
        ("Years", YEARS),
        ("Goals", GOALS),
        ("Subjects", SUBJECTS),
        ("Whens", WHENS),
        ("Positions", POSITIONS),
        ("Hours", HOURS),
        ("Boards", BOARDS),
        ("Notes", NOTES),
        ("Accounts", ACCOUNTS),
    ]
    for idx, (title, values) in enumerate(list_cols, 1):
        paint(lists.cell(1, idx), title, bold=True, color=WHITE, bg=NAVY)
        for r, value in enumerate(values, 2):
            lists.cell(r, idx, value)
        lists.column_dimensions[get_column_letter(idx)].width = 28
    lists.auto_filter.ref = "A1:I1"
    lists.freeze_panes = "A2"
    lists.auto_filter.ref = "A1:I20"
    lists.oddFooter.left.text = VERSION

    paint(rules.cell(1, 1), "Key", bold=True, color=WHITE, bg=NAVY)
    paint(rules.cell(1, 2), "Weekly pattern", bold=True, color=WHITE, bg=NAVY)
    for r, (key, text) in enumerate(rule_rows(), 2):
        rules.cell(r, 1, key)
        rules.cell(r, 2, text)
        rules.cell(r, 2).alignment = Alignment(wrap_text=True, vertical="center")
    rules.column_dimensions["A"].width = 28
    rules.column_dimensions["B"].width = 110
    rules.auto_filter.ref = f"A1:B{1 + len(rule_rows())}"
    rules.freeze_panes = "A2"
    rules.auto_filter.ref = f"A1:B{1 + len(rule_rows())}"
    rules.oddFooter.left.text = "Week plans · " + VERSION

    header_bar(
        advise_ws,
        "Recommend a tutor plan",
        "Fill the yellow cells. Read the plan back to the parent, then book the free 15-minute trial.",
        4,
    )
    fields = [
        (4, "Partner name", None),
        (5, "Parent first name", None),
        (6, "School year", "Years"),
        (7, "Result they care about", "Goals"),
        (8, "One subject", "Subjects"),
        (9, "When is the exam or deadline?", "Whens"),
        (10, "Where is the child now?", "Positions"),
        (11, "Time they can give each week", "Hours"),
        (12, "Exam board", "Boards"),
        (13, "Note for the trial", "Notes"),
        (14, "Already has a KlaraLearn account?", "Accounts"),
    ]
    paint(advise_ws.cell(3, 1), "Ask", bold=True, color=WHITE, bg=NAVY)
    paint(advise_ws.cell(3, 2), "Answer", bold=True, color=WHITE, bg=NAVY)
    for row, label, _list in fields:
        paint(advise_ws.cell(row, 1), label, bold=True, bg=MIST)
        paint(advise_ws.cell(row, 2), "", bg="FFF4D6")
        advise_ws.cell(row, 2).border = Border(
            left=Side(style="medium", color=ORANGE),
            right=Side(style="medium", color=ORANGE),
            top=Side(style="medium", color=ORANGE),
            bottom=Side(style="medium", color=ORANGE),
        )
        advise_ws.row_dimensions[row].height = 20
    dropdown(advise_ws, "B6", YEARS, "Year")
    dropdown(advise_ws, "B7", GOALS, "Goal")
    dropdown(advise_ws, "B8", SUBJECTS, "Subject")
    dropdown(advise_ws, "B9", WHENS, "When")
    dropdown(advise_ws, "B10", POSITIONS, "Position")
    dropdown(advise_ws, "B11", HOURS, "Hours")
    dropdown(advise_ws, "B12", BOARDS, "Board")
    dropdown(advise_ws, "B13", NOTES, "Note")
    dropdown(advise_ws, "B14", ACCOUNTS, "Account")

    # Representative defaults so the sheet is readable before anyone types.
    defaults = {
        6: "Y5",
        7: "11 Plus",
        8: "11 Plus mix",
        9: "This school year",
        10: "Parent is not sure",
        11: "About 1 hour",
        12: "No exam board",
        13: "None to flag",
        14: "No",
    }
    for row, value in defaults.items():
        advise_ws.cell(row, 2).value = value

    paint(advise_ws.cell(16, 1), "Say this plan", bold=True, color=WHITE, bg=TEAL)
    advise_ws.merge_cells("A16:B16")
    outputs = [
        (17, "Focus", '=IF(B6="","Fill the yellow cells",IFS(OR(B7="11 Plus",B8="11 Plus mix"),IF(OR(B6="Y7",B6="Y8",B6="Y9",B6="Y10",B6="Y11",B6="Y12",B6="Y13"),"Pause and confirm the goal","11 Plus"),B7="KS2 SATs",IF(B8="English","KS2 English",IF(B8="Science","KS2 maths, unless science is the real gap","KS2 maths")),B8="Science","Science",B8="English","English",AND(B8="Maths",B7="GCSE",OR(B6="Y10",B6="Y11")),"GCSE maths",B8="Maths","Maths",TRUE,"One subject, chosen with the parent"))'),
        (18, "Open this page", '=IF(B6="","",IFS(B17="11 Plus","https://www.klaralearn.com/subjects/11-plus",B17="GCSE maths","https://www.klaralearn.com/subjects/gcse-maths",OR(B17="Maths",B17="KS2 maths",B17="KS2 maths, unless science is the real gap"),"https://www.klaralearn.com/subjects/maths",OR(B17="English",B17="KS2 English"),"https://www.klaralearn.com/subjects/english",B17="Science","https://www.klaralearn.com/subjects/science",TRUE,"https://www.klaralearn.com/find-a-tutor"))'),
        (19, "Weekly pattern", '=IF(B6="","",IFERROR(VLOOKUP(IFS(B6="Younger than Y3","Early",OR(B6="Y3",B6="Y4"),"Y3–Y4",B6="Y5","Y5",B6="Y6","Y6",OR(B6="Y7",B6="Y8",B6="Y9"),"Y7–Y9",B6="Y10","Y10",B6="Y11","Y11",B6="Y12","Y12",B6="Y13","Y13",TRUE,"Unclear")&"|"&IFS(B7="11 Plus","11 Plus",B7="KS2 SATs","SATs",B7="GCSE","GCSE",B7="A level","A level",TRUE,"Support")&"|"&IF(OR(B9="This term",B9="Next term",AND(OR(B6="Y11",B6="Y13"),B9="This school year")),"High","Standard"),\'Week plans\'!A:B,2,FALSE),"Check the year and the goal."))'),
        (20, "Question for the trial", '=IF(B6="","",IFS(B7="11 Plus","Which paper does your area use, and can we use the 15-minute trial to see if this tutor teaches that paper?",B7="KS2 SATs","Can we use the trial to see how you would practise the one skill my child finds hardest?",B7="GCSE","Can we look at one exam-style question in the trial? "&IF(OR(B12="Not sure",B12="No exam board"),"The parent is not sure of the exam board, so ask them to check it with school.",IF(B12="","","Do you teach "&B12&" "&LOWER(B8)&"?")),B7="A level","Do you teach "&LOWER(B8)&" at A level? "&IF(OR(B12="Not sure",B12="No exam board"),"Ask the school which exam board it is.",IF(B12="","","Do you teach "&B12&"?")),TRUE,"Can we use the trial to see how you explain one topic my child is stuck on?"))'),
        (21, "Also say", '=IF(B6="","",TEXTJOIN(" ",TRUE,"Read the hourly rate, the subjects and the experience on the current profile.",IF(AND(B11="Under 1 hour",ISNUMBER(SEARCH("Two lessons",B19))),"The child can spare less than an hour, so start with one lesson a week.",""),IF(AND(B10="More than one grade below",OR(B7="GCSE",B7="A level",B7="KS2 SATs")),"Stay on one subject until the trial tutor and the parent agree a plan.",""),IF(AND(B7="GCSE",B8="Maths"),"Ask whether the school has entered the child for foundation or higher. Foundation maths stops at grade 5.",""),IF(B8="Science","Ask which science: biology, chemistry, physics, or combined science.",""),IF(B13="Extra time in exams","Mention extra time in the trial. Do not describe the tutor as a SEN specialist.",""),IF(B13="English as an additional language","Ask for clear, steady English, and a check that the child understood the question.",""),IF(B13="Anxious about tests","The trial is 15 minutes and the child can stop.",""),IF(B13="Wants a patient pace","A patient pace is something you judge in the trial, not a badge.",""),IF(B14="Yes","They already have an account. Do not claim commission on it.",""),IF(B14="Not sure","Ask if they have used KlaraLearn before. Commission is for a new parent.","")))'),
        (22, "Next step", '=IF(B6="","",IF(B14="Yes","Ask them to sign in at https://app.klaralearn.com/?view=login and book the free 15-minute trial.","Send https://app.klaralearn.com?view=signup and book the free 15-minute trial before the conversation ends."))'),
    ]
    for row, label, formula in outputs:
        paint(advise_ws.cell(row, 1), label, bold=True, color=WHITE, bg=NAVY)
        cell = advise_ws.cell(row, 2, formula)
        cell.font = font(12, bold=(row == 17), color=INK)
        cell.alignment = Alignment(wrap_text=True, vertical="center")
        cell.fill = fill("E7F7F4")
        advise_ws.row_dimensions[row].height = 48 if row in (19, 20, 21) else 28
    advise_ws.row_dimensions[21].height = 72

    set_col_widths(advise_ws, [42, 88, 18, 18])
    advise_ws.row_dimensions[16].height = 24
    advise_ws.freeze_panes = "A4"
    advise_ws.page_setup.orientation = "landscape"
    advise_ws.page_setup.fitToPage = True
    advise_ws.page_setup.fitToWidth = 1
    advise_ws.page_setup.fitToHeight = 1
    advise_ws.page_setup.paperSize = advise_ws.PAPERSIZE_A4
    advise_ws.sheet_properties.pageSetUpPr.fitToPage = True
    advise_ws.print_title_rows = "1:2"
    advise_ws.oddFooter.left.text = "KlaraLearn advisor tool · " + VERSION
    advise_ws.oddFooter.right.text = "5% for the first six months of paid lessons"
    advise_ws.page_setup.horizontalCentered = True
    advise_ws.sheet_view.showGridLines = False
    advise_ws.sheet_view.zoomScale = 120
    advise_ws.auto_filter.ref = "A3:B3"
    advise_ws.oddHeader.left.text = "KlaraLearn"

    # A worked example, stored as values, so a partner can see a finished plan without Excel calculation.
    example = advise("Y5", "11 Plus", "11 Plus mix", "This school year", "Parent is not sure", "About 1 hour", "No exam board", "None to flag", "No")
    paint(advise_ws.cell(24, 1), "Worked example, already calculated", bold=True, color=WHITE, bg=ORANGE)
    advise_ws.merge_cells("A24:B24")
    example_lines = [
        (25, "Example answers", "Year 5 · 11 Plus · 11 Plus mix · this school year · about 1 hour · new to KlaraLearn"),
        (26, "Example focus", example["focus"]),
        (27, "Example page", example["page_url"]),
        (28, "Example week", example["pattern"]),
        (29, "Example question", example["question"]),
        (30, "Example next step", example["action"]),
    ]
    for row, label, text in example_lines:
        paint(advise_ws.cell(row, 1), label, bold=True, bg=AMBER)
        paint(advise_ws.cell(row, 2), text, bg=AMBER)
        advise_ws.row_dimensions[row].height = 32
    paint(
        advise_ws.cell(32, 1),
        "The teal box updates when the file is opened in Excel. The orange example stays put, so you can check the tool against a known Year 5 plan.",
        size=10,
    )
    advise_ws.merge_cells("A32:B32")

    path = ROOT / "KlaraLearn-Advisor-Recommendation-Tool.xlsx"
    wb.save(path)
    return path


def build_tracker():
    wb = Workbook()
    how = wb.active
    how.title = "How to use"
    pipe = wb.create_sheet("Pipeline")
    fees = wb.create_sheet("Monthly fees")
    score = wb.create_sheet("Friday scorecard")
    rates = wb.create_sheet("Rate schedule")

    header_bar(how, "Funnel and commission tracker", "Log every parent the day you speak to them. Read the Friday scorecard before you finish the week.", 2)
    how_lines = [
        "Pipeline: one row per parent. Status moves from New lead to Paying, or to Lost.",
        "Monthly fees: one row per parent per month, after a paid lesson. Commission uses the schedule.",
        "Friday scorecard: counts and conversion, between the two dates you type.",
        "Rate schedule: 5% for months 1–6, then 2.5%, then 1%. An illustration sits underneath. It is not a quote.",
        "A parent already on KlaraLearn is not a new introduction. Leave commission blank for that row.",
        "Signup link: " + SIGNUP,
        COMPANY,
        VERSION + " · " + SUPPORT,
    ]
    for i, line in enumerate(how_lines, 4):
        paint(how.cell(i, 1), line, size=13 if i < 10 else 10)
        how.merge_cells(start_row=i, start_column=1, end_row=i, end_column=2)
        how.row_dimensions[i].height = 22
    set_col_widths(how, [120, 24])
    how.freeze_panes = "A4"
    how.sheet_view.showGridLines = False
    how.page_setup.fitToPage = True
    how.page_setup.fitToWidth = 1
    how.page_setup.fitToHeight = 1
    how.page_setup.paperSize = how.PAPERSIZE_A4
    how.sheet_properties.pageSetUpPr.fitToPage = True
    how.print_title_rows = "1:2"
    how.oddFooter.left.text = VERSION
    how.oddFooter.right.text = "5% headline rate"

    headers = [
        "Partner",
        "Parent first name",
        "Email",
        "Child year",
        "Goal",
        "Subject advised",
        "First spoken",
        "Account created",
        "Trial booked",
        "Trial date",
        "Trial attended",
        "First paid lesson",
        "Status",
        "Lost reason",
        "Next follow-up",
        "Notes",
    ]
    header_bar(pipe, "Parent pipeline", "One row per family. Record the email before the account is created.", len(headers))
    for c, name in enumerate(headers, 1):
        paint(pipe.cell(3, c), name, bold=True, color=WHITE, bg=NAVY, size=10)
    pipe.row_dimensions[3].height = 22
    pipe.auto_filter.ref = "A3:P203"
    pipe.freeze_panes = "A4"
    pipe.auto_filter.ref = "A3:P203"
    widths = [16, 18, 28, 14, 22, 18, 14, 16, 14, 14, 16, 16, 16, 28, 15, 40]
    set_col_widths(pipe, widths)
    statuses = ["New lead", "Link sent", "Account created", "Trial booked", "Trial attended", "Paying", "Paused", "Lost"]
    lost = [
        "Price",
        "Timing",
        "Chose another tutor",
        "Wanted in-person lessons",
        "Wanted a DBS certificate",
        "No suitable profile that day",
        "Trial was not the right fit",
        "Stopped replying",
        "Other",
    ]
    dropdown(pipe, "D4:D203", YEARS, "Year")
    dropdown(pipe, "E4:E203", GOALS, "Goal")
    dropdown(pipe, "H4:H203", ["No", "Yes"], "Account")
    dropdown(pipe, "I4:I203", ["No", "Yes"], "Trial booked")
    dropdown(pipe, "K4:K203", ["No", "Yes"], "Trial attended")
    dropdown(pipe, "M4:M203", statuses, "Status")
    dropdown(pipe, "N4:N203", lost, "Lost reason")
    for col in (7, 10, 12, 15):
        for row in range(4, 204):
            pipe.cell(row, col).number_format = "DD MMM YYYY"
    example = [
        "EXAMPLE",
        "Example Parent",
        "example.parent@example.com",
        "Y5",
        "11 Plus",
        "11 Plus mix",
        None,
        "Yes",
        "Yes",
        None,
        "No",
        None,
        "Trial booked",
        None,
        None,
        "Delete this row when you add a real family. It is only here to show the columns.",
    ]
    for c, value in enumerate(example, 1):
        cell = pipe.cell(4, c, value)
        cell.font = font(10, color="7A4B2A")
        cell.fill = fill(AMBER)
    pipe.conditional_formatting.add("M4:M203", FormulaRule(formula=['$M4="Paying"'], fill=fill("E7F7F4")))
    pipe.conditional_formatting.add("M4:M203", FormulaRule(formula=['$M4="Lost"'], fill=fill("F3F4F6")))
    pipe.conditional_formatting.add("M4:M203", FormulaRule(formula=['$M4="Trial booked"'], fill=fill("E8F1FB")))
    pipe.page_setup.orientation = "landscape"
    pipe.page_setup.fitToPage = True
    pipe.page_setup.fitToWidth = 1
    pipe.page_setup.fitToHeight = 0
    pipe.page_setup.paperSize = pipe.PAPERSIZE_A4
    pipe.sheet_properties.pageSetUpPr.fitToPage = True
    pipe.print_title_rows = "1:3"
    pipe.oddFooter.left.text = "KlaraLearn pipeline · " + VERSION
    pipe.oddFooter.right.text = "Page &P"
    pipe.page_setup.horizontalCentered = True
    pipe.auto_filter.ref = "A3:P203"
    pipe.sheet_view.zoomScale = 110

    fee_headers = [
        "Parent email",
        "Statement month",
        "First paid lesson",
        "Fees paid £",
        "Refunds £",
        "Eligible £",
        "Commission month",
        "Rate",
        "Commission £",
    ]
    header_bar(fees, "Monthly commission", "5% in months 1–6. The rate column applies 2.5% and 1% from the schedule.", len(fee_headers))
    for c, name in enumerate(fee_headers, 1):
        paint(fees.cell(3, c), name, bold=True, color=WHITE, bg=NAVY, size=10)
    for row in range(4, 204):
        fees.cell(row, 6, f'=IF(D{row}="","",D{row}-IF(E{row}="",0,E{row}))')
        fees.cell(row, 7, f'=IF(OR(B{row}="",C{row}=""),"",DATEDIF(DATE(YEAR(C{row}),MONTH(C{row}),1),DATE(YEAR(B{row}),MONTH(B{row}),1),"M")+1)')
        fees.cell(row, 8, f'=IF(OR(G{row}="",G{row}<1),"",IF(G{row}<=6,0.05,IF(G{row}<=12,0.025,0.01)))')
        fees.cell(row, 9, f'=IF(OR(F{row}="",H{row}=""),"",F{row}*H{row})')
        fees.cell(row, 2).number_format = "MMM YYYY"
        fees.cell(row, 3).number_format = "DD MMM YYYY"
        for col in (4, 5, 6, 9):
            fees.cell(row, col).number_format = '£#,##0.00'
        fees.cell(row, 8).number_format = "0.0%"
    from datetime import date

    fees.cell(4, 1, "example.parent@example.com")
    fees.cell(4, 2, date(2026, 11, 1))
    fees.cell(4, 3, date(2026, 11, 16))
    fees.cell(4, 4, 160)
    fees.cell(4, 5, 0)
    paint(fees.cell(4, 1), "example.parent@example.com", bg=AMBER)
    for coord in ("B4", "C4", "D4", "E4"):
        fees[coord].fill = fill(AMBER)
    set_col_widths(fees, [32, 18, 20, 14, 14, 14, 20, 12, 16])
    fees.freeze_panes = "A4"
    fees.auto_filter.ref = "A3:I203"
    fees.page_setup.orientation = "landscape"
    fees.page_setup.fitToWidth = 1
    fees.page_setup.fitToHeight = 0
    fees.page_setup.paperSize = fees.PAPERSIZE_A4
    fees.page_setup.fitToPage = True
    fees.sheet_properties.pageSetUpPr.fitToPage = True
    fees.print_title_rows = "1:3"
    fees.oddFooter.left.text = "Commission · 5% then 2.5% then 1% · " + VERSION
    fees.oddFooter.right.text = "Eligible fees are after refunds"

    header_bar(score, "Friday scorecard", "Type the week you are reviewing. Counts ignore the EXAMPLE row.", 2)
    paint(score.cell(4, 1), "Week starts", bold=True, bg=MIST)
    paint(score.cell(5, 1), "Week ends", bold=True, bg=MIST)
    paint(score.cell(4, 2), "", bg="FFF4D6")
    paint(score.cell(5, 2), "", bg="FFF4D6")
    score["B4"].number_format = "DD MMM YYYY"
    score["B5"].number_format = "DD MMM YYYY"
    metrics = [
        (7, "Conversations", '=COUNTIFS(Pipeline!G:G,">="&B4,Pipeline!G:G,"<="&B5,Pipeline!A:A,"<>EXAMPLE")'),
        (8, "Accounts created", '=COUNTIFS(Pipeline!G:G,">="&B4,Pipeline!G:G,"<="&B5,Pipeline!H:H,"Yes",Pipeline!A:A,"<>EXAMPLE")'),
        (9, "Trials booked", '=COUNTIFS(Pipeline!G:G,">="&B4,Pipeline!G:G,"<="&B5,Pipeline!I:I,"Yes",Pipeline!A:A,"<>EXAMPLE")'),
        (10, "Trials attended", '=COUNTIFS(Pipeline!G:G,">="&B4,Pipeline!G:G,"<="&B5,Pipeline!K:K,"Yes",Pipeline!A:A,"<>EXAMPLE")'),
        (11, "First paid lessons", '=COUNTIFS(Pipeline!L:L,">="&B4,Pipeline!L:L,"<="&B5,Pipeline!A:A,"<>EXAMPLE")'),
        (13, "Account rate", '=IF(B7=0,"",B8/B7)'),
        (14, "Trial booked rate", '=IF(B8=0,"",B9/B8)'),
        (15, "Trial attended rate", '=IF(B9=0,"",B10/B9)'),
        (16, "Paid after attended", '=IF(B10=0,"",B11/B10)'),
    ]
    for row, label, formula in metrics:
        paint(score.cell(row, 1), label, bold=True, bg=MIST if row < 13 else "E7F7F4")
        cell = score.cell(row, 2, formula)
        cell.font = font(14, bold=True, color=NAVY)
        cell.alignment = Alignment(horizontal="center")
        if row >= 13:
            cell.number_format = "0%"
    paint(score.cell(18, 1), "Starter goals you can edit", bold=True, color=WHITE, bg=ORANGE)
    score.merge_cells("A18:B18")
    goals = [(19, "Conversations", 20), (20, "Accounts", 8), (21, "Trials booked", 5), (22, "Trials attended", 3), (23, "First paid lessons", 2)]
    for row, label, value in goals:
        paint(score.cell(row, 1), label, bg="FFF4D6")
        cell = score.cell(row, 2, value)
        cell.fill = fill("FFF4D6")
        cell.font = font(12, bold=True)
    paint(score.cell(25, 1), "These starter goals are a planning aid. Replace them with the numbers you and KlaraLearn agree.", size=10)
    score.merge_cells("A25:B25")
    set_col_widths(score, [28, 22])
    score.freeze_panes = "A4"
    score.sheet_view.showGridLines = False
    score.page_setup.fitToPage = True
    score.page_setup.fitToWidth = 1
    score.page_setup.fitToHeight = 1
    score.page_setup.paperSize = score.PAPERSIZE_A4
    score.sheet_properties.pageSetUpPr.fitToPage = True
    score.print_title_rows = "1:2"
    score.oddFooter.left.text = "Friday scorecard · " + VERSION

    header_bar(rates, "Commission rate schedule", "Lead with 5%. The rest of the schedule is here so statements stay consistent.", 3)
    for c, name in enumerate(["Months from first paid lesson", "Rate", "What it applies to"], 1):
        paint(rates.cell(4, c), name, bold=True, color=WHITE, bg=NAVY)
    schedule = [
        ("1 to 6", 0.05, "Eligible paid lesson fees"),
        ("7 to 12", 0.025, "Eligible paid lesson fees"),
        ("13 onwards", 0.01, "Eligible paid lesson fees, while the parent continues to pay"),
    ]
    for i, (label, rate, basis) in enumerate(schedule, 5):
        paint(rates.cell(i, 1), label, bold=True, bg="E7F7F4" if i == 5 else MIST, size=14)
        cell = rates.cell(i, 2, rate)
        cell.number_format = "0.0%"
        cell.font = font(16, bold=True, color=ORANGE if i == 5 else NAVY)
        paint(rates.cell(i, 3), basis)
        rates.row_dimensions[i].height = 24
    paint(rates.cell(9, 1), "Illustration, not a quote", bold=True, color=WHITE, bg=ORANGE)
    rates.merge_cells("A9:C9")
    paint(rates.cell(10, 1), "Sample hourly rate on a profile", bg=MIST)
    rates["B10"] = 40
    rates["B10"].number_format = '"£"#,##0'
    paint(rates.cell(11, 1), "Paid lessons in the month", bg=MIST)
    rates["B11"] = 4
    paint(rates.cell(12, 1), "Eligible fees", bg=MIST)
    rates["B12"] = "=B10*B11"
    rates["B12"].number_format = '"£"#,##0.00'
    paint(rates.cell(13, 1), "Commission at 5% (months 1–6)", bg="E7F7F4")
    rates["B13"] = "=B12*0.05"
    rates["B13"].number_format = '"£"#,##0.00'
    paint(rates.cell(14, 1), "Commission at 2.5% (months 7–12)", bg=MIST)
    rates["B14"] = "=B12*0.025"
    rates["B14"].number_format = '"£"#,##0.00'
    paint(rates.cell(15, 1), "Commission at 1% (month 13 onwards)", bg=MIST)
    rates["B15"] = "=B12*0.01"
    rates["B15"].number_format = '"£"#,##0.00'
    paint(rates.cell(17, 1), "Change the sample rate and the lesson count. The parent’s real rate is the one on their tutor’s profile.", size=10)
    rates.merge_cells("A17:C17")
    set_col_widths(rates, [46, 18, 62])
    rates.freeze_panes = "A4"
    rates.sheet_view.showGridLines = False
    rates.page_setup.fitToPage = True
    rates.page_setup.fitToWidth = 1
    rates.page_setup.fitToHeight = 1
    rates.page_setup.paperSize = rates.PAPERSIZE_A4
    rates.sheet_properties.pageSetUpPr.fitToPage = True
    rates.print_title_rows = "1:2"
    rates.oddFooter.left.text = "Rate schedule · " + VERSION
    rates.oddFooter.right.text = "Headline rate 5%"

    path = ROOT / "KlaraLearn-Funnel-and-Commission-Tracker.xlsx"
    wb.save(path)
    return path


def shade_cell(cell, hex_color):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(dqn("w:fill"), hex_color)
    shd.set(dqn("w:val"), "clear")
    tcPr.append(shd)


def set_run_font(run, size, bold=False, color=None, name="Calibri"):
    run.font.name = name
    run._element.rPr.rFonts.set(dqn("w:eastAsia"), name)
    run.font.size = DocPt(size)
    run.bold = bold
    if color:
        run.font.color.rgb = DocRGB.from_string(color)


def add_para(doc, text, size=11, bold=False, color=NAVY, space_after=8, space_before=0):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = DocPt(space_after)
    p.paragraph_format.space_before = DocPt(space_before)
    p.paragraph_format.line_spacing = 1.12
    run = p.add_run(text)
    set_run_font(run, size, bold, color)
    return p


def build_terms_docx():
    doc = Document()
    section = doc.sections[0]
    section.page_width = Cm(21.0)
    section.page_height = Cm(29.7)
    section.left_margin = Cm(1.7)
    section.right_margin = Cm(1.7)
    section.top_margin = Cm(1.6)
    section.bottom_margin = Cm(1.6)
    header = section.header
    header.is_linked_to_previous = False
    hp = header.paragraphs[0]
    hp.alignment = WD_ALIGN_PARAGRAPH.LEFT
    run = hp.add_run("KlaraLearn  ·  Partner programme terms")
    set_run_font(run, 10, True, TEAL)
    footer = section.footer
    fp = footer.paragraphs[0]
    run = fp.add_run(VERSION + "  ·  " + SUPPORT)
    set_run_font(run, 9, False, "5C6B7A")

    table = doc.add_table(rows=1, cols=1)
    cell = table.cell(0, 0)
    shade_cell(cell, NAVY)
    cell.text = ""
    p = cell.paragraphs[0]
    run = p.add_run("KLARALEARN PARTNER PROGRAMME")
    set_run_font(run, 11, True, "4DE1C1")
    p2 = cell.add_paragraph()
    run = p2.add_run("Earn 5%")
    set_run_font(run, 28, True, WHITE)
    p3 = cell.add_paragraph()
    run = p3.add_run("For the first six months of paid lessons. The full schedule is clause 3.")
    set_run_font(run, 12, False, "E7EEF3")

    add_para(doc, COMPANY, size=10, color="3E5163", space_before=10)
    add_para(
        doc,
        "Sign this copy and return it to " + SUPPORT + ". A PDF of the same clauses is in the partner kit.",
        size=11,
        space_before=4,
    )
    for index, (title, body) in enumerate(TERMS, 1):
        add_para(doc, f"{index}. {title}", size=14, bold=True, space_before=12, space_after=4)
        add_para(doc, body, size=11)

    add_para(doc, "Signature", size=14, bold=True, space_before=14)
    sig = doc.add_table(rows=4, cols=3)
    labels = ["", "Partner", "For KlaraLearn"]
    for i, label in enumerate(labels):
        sig.cell(0, i).text = ""
        run = sig.cell(0, i).paragraphs[0].add_run(label)
        set_run_font(run, 11, True, WHITE)
        shade_cell(sig.cell(0, i), NAVY)
    for r, label in enumerate(["Name", "Date", "Signature"], 1):
        run = sig.cell(r, 0).paragraphs[0].add_run(label)
        set_run_font(run, 11, True, NAVY)
        shade_cell(sig.cell(r, 0), MIST)
    path = ROOT / "KlaraLearn-Partner-Programme-Terms.docx"
    doc.save(path)
    return path


def rgb(value: str) -> RGBColor:
    return RGBColor.from_string(value)


def add_shape_text(slide, left, top, width, height, text, *, size=18, bold=False, color=NAVY, align=PP_ALIGN.LEFT, font="Calibri"):
    box = slide.shapes.add_textbox(left, top, width, height)
    tf = box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.alignment = align
    run = p.add_run()
    run.text = text
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.color.rgb = rgb(color)
    run.font.name = font
    return box


def rect(slide, left, top, width, height, color):
    shape = slide.shapes.add_shape(1, left, top, width, height)  # MSO_SHAPE.RECTANGLE = 1
    shape.fill.solid()
    shape.fill.fore_color.rgb = rgb(color)
    shape.line.fill.background()
    # Remove the default shadow-looking line
    shape.shadow.inherit = False
    return shape


def new_slide(prs, dark=False):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    rect(slide, 0, 0, prs.slide_width, prs.slide_height, NAVY if dark else WHITE)
    if not dark:
        rect(slide, 0, 0, prs.slide_width, Inches(0.12), TEAL)
    return slide


def footer_slide(slide, prs, text):
    add_shape_text(
        slide,
        Inches(0.5),
        prs.slide_height - Inches(0.38),
        Inches(10),
        Inches(0.28),
        text,
        size=11,
        color="8A96A3",
    )


def build_pptx():
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    logo_white = str(ASSETS / "logo-white-on-navy.png")
    logo = str(ASSETS / "logo-full.png")

    s = new_slide(prs, dark=True)
    s.shapes.add_picture(logo_white, Inches(0.6), Inches(0.4), height=Inches(0.62))
    rect(s, Inches(0.65), Inches(2.15), Inches(1.4), Inches(0.08), ORANGE)
    add_shape_text(s, Inches(0.6), Inches(2.4), Inches(11), Inches(1.6), "Help a parent start.", size=48, bold=True, color=WHITE)
    add_shape_text(s, Inches(0.6), Inches(4.15), Inches(10), Inches(0.8), "Then earn 5% of the lesson fees they pay.", size=24, color="E7EEF3")
    pill = rect(s, Inches(0.65), Inches(5.15), Inches(4.4), Inches(0.58), ORANGE)
    add_shape_text(s, Inches(0.65), Inches(5.22), Inches(4.4), Inches(0.45), "Earn 5%  ·  first six months", size=18, bold=True, color=WHITE, align=PP_ALIGN.CENTER)
    add_shape_text(s, Inches(0.6), Inches(6.7), Inches(10), Inches(0.3), "Partner briefing  ·  " + VERSION, size=12, color="C5D4DE")

    s = new_slide(prs)
    s.shapes.add_picture(logo, Inches(0.5), Inches(0.28), height=Inches(0.42))
    add_shape_text(s, Inches(0.5), Inches(0.9), Inches(12), Inches(0.6), "Your job has four moves", size=32, bold=True)
    steps = [
        ("1", "Listen", "Year group, the result they care about, and one subject."),
        ("2", "Advise", "A weekly pattern from the questionnaire. One subject only."),
        ("3", "Sign up", "The parent creates the account. You stay with them."),
        ("4", "Book", "A free 15-minute trial, before the conversation ends."),
    ]
    for i, (n, title, body) in enumerate(steps):
        left = Inches(0.5 + i * 3.2)
        rect(s, left, Inches(2.0), Inches(3.0), Inches(3.6), MIST)
        rect(s, left, Inches(2.0), Inches(3.0), Inches(0.12), TEAL)
        add_shape_text(s, left + Inches(0.2), Inches(2.3), Inches(2.6), Inches(0.5), n, size=28, bold=True, color=ORANGE)
        add_shape_text(s, left + Inches(0.2), Inches(2.9), Inches(2.6), Inches(0.5), title, size=22, bold=True)
        add_shape_text(s, left + Inches(0.2), Inches(3.5), Inches(2.6), Inches(1.6), body, size=16)
    footer_slide(s, prs, "The trial pays no commission. 5% starts with paid lessons.")

    s = new_slide(prs)
    s.shapes.add_picture(logo, Inches(0.5), Inches(0.28), height=Inches(0.42))
    add_shape_text(s, Inches(0.5), Inches(0.95), Inches(12), Inches(0.6), "What you can say with confidence", size=32, bold=True)
    lefts = [
        ("One to one, online", "The lesson uses the Zoom or Google Meet link saved in KlaraLearn."),
        ("You can watch", "KlaraLearn Notetaker joins. Parents can watch the video for 30 days."),
        ("A real process", "Identity is checked. Tutors are interviewed. Curriculum knowledge is assessed."),
        ("The rate is visible", "Compare the hourly rate on the profile. The trial is free."),
    ]
    for i, (title, body) in enumerate(lefts):
        top = Inches(1.8 + (i % 4) * 1.2) if False else Inches(1.85)
        left = Inches(0.5 + i * 3.2)
        rect(s, left, Inches(1.9), Inches(3.0), Inches(4.2), MIST)
        rect(s, left, Inches(1.9), Inches(0.1), Inches(4.2), ORANGE)
        add_shape_text(s, left + Inches(0.25), Inches(2.2), Inches(2.6), Inches(1.3), title, size=20, bold=True)
        add_shape_text(s, left + Inches(0.25), Inches(3.6), Inches(2.6), Inches(2.0), body, size=16)
    footer_slide(s, prs, "DBS is a UK process. It is not run on tutors who live outside the UK.")

    s = new_slide(prs)
    s.shapes.add_picture(logo, Inches(0.5), Inches(0.28), height=Inches(0.42))
    add_shape_text(s, Inches(0.5), Inches(0.95), Inches(12), Inches(0.55), "Plans you can say in one breath", size=32, bold=True)
    rows = [
        ("Year 5, 11 Plus", "Two lessons a week if the test is soon. Open 11 Plus tutors."),
        ("Year 6, SATs", "One lesson a week until May, in maths or English."),
        ("Year 11, GCSE maths", "One hour a week. Ask foundation or higher. Foundation stops at grade 5."),
        ("Year 13, A level", "One hour a week. Predicted grades come from the school."),
        ("Catch-up", "One hour a week, one subject, any year."),
    ]
    for i, (title, body) in enumerate(rows):
        top = Inches(1.7 + i * 0.95)
        rect(s, Inches(0.5), top, Inches(12.3), Inches(0.85), MIST if i % 2 == 0 else "E7F7F4")
        add_shape_text(s, Inches(0.7), top + Inches(0.18), Inches(3.2), Inches(0.5), title, size=18, bold=True, color=NAVY)
        add_shape_text(s, Inches(4.1), top + Inches(0.18), Inches(8.3), Inches(0.5), body, size=18)
    footer_slide(s, prs, "The questionnaire and the spreadsheet use these same plans.")

    s = new_slide(prs)
    s.shapes.add_picture(logo, Inches(0.5), Inches(0.28), height=Inches(0.42))
    add_shape_text(s, Inches(0.5), Inches(0.95), Inches(12), Inches(0.6), "Words that keep trust", size=32, bold=True)
    rect(s, Inches(0.5), Inches(1.9), Inches(6.0), Inches(4.6), "E7F7F4")
    rect(s, Inches(6.8), Inches(1.9), Inches(6.0), Inches(4.6), "FDECEA")
    add_shape_text(s, Inches(0.75), Inches(2.1), Inches(5.5), Inches(0.5), "Say", size=22, bold=True, color=TEAL)
    add_shape_text(
        s,
        Inches(0.75),
        Inches(2.7),
        Inches(5.5),
        Inches(3.4),
        "Identity checked.\nInterviewed.\nCurriculum assessed.\nLessons recorded.\nFree 15-minute trial.\nRate on the profile.",
        size=20,
    )
    add_shape_text(s, Inches(7.05), Inches(2.1), Inches(5.5), Inches(0.5), "Leave out with a parent", size=22, bold=True, color=ORANGE)
    add_shape_text(
        s,
        Inches(7.05),
        Inches(2.7),
        Inches(5.5),
        Inches(3.4),
        "A guaranteed grade or place.\nDBS-checked or vetted.\nSEN specialist.\nA KlaraLearn price.\nHome visits.\nYour commission.",
        size=20,
    )
    footer_slide(s, prs, "Parents hear the process. They do not hear a badge we do not issue.")

    s = new_slide(prs)
    s.shapes.add_picture(logo, Inches(0.5), Inches(0.28), height=Inches(0.42))
    add_shape_text(s, Inches(0.5), Inches(0.95), Inches(12), Inches(0.6), "The week, from a performance point of view", size=30, bold=True)
    items = [
        ("Same day", "Log the email and the plan."),
        ("Before you hang up", "Account created, trial booked."),
        ("Day before", "One reminder."),
        ("Day after", "Did they book, or do they want another tutor?"),
        ("Friday", "Scorecard: conversations, accounts, trials, paid lessons."),
    ]
    for i, (title, body) in enumerate(items):
        left = Inches(0.45 + i * 2.55)
        rect(s, left, Inches(2.1), Inches(2.4), Inches(3.8), MIST)
        rect(s, left, Inches(2.1), Inches(2.4), Inches(0.1), TEAL)
        add_shape_text(s, left + Inches(0.15), Inches(2.4), Inches(2.1), Inches(1.2), title, size=18, bold=True)
        add_shape_text(s, left + Inches(0.15), Inches(3.7), Inches(2.1), Inches(1.8), body, size=16)
    footer_slide(s, prs, "Starter goals in the tracker are editable. They are not a target KlaraLearn has set for you.")

    s = new_slide(prs, dark=True)
    s.shapes.add_picture(logo_white, Inches(0.55), Inches(0.35), height=Inches(0.5))
    add_shape_text(s, Inches(0.55), Inches(1.2), Inches(12), Inches(0.4), "COMMISSION SCHEDULE", size=14, bold=True, color="4DE1C1")
    add_shape_text(s, Inches(0.55), Inches(1.6), Inches(12), Inches(0.8), "5% for the first six months.", size=36, bold=True, color=WHITE)
    add_shape_text(
        s,
        Inches(0.55),
        Inches(2.8),
        Inches(11.5),
        Inches(2.4),
        "Months 1 to 6: 5% of eligible paid lesson fees.\nMonths 7 to 12: 2.5%.\nMonth 13 onwards, while the parent continues to pay: 1%.\n\nThe free trial is not included. Refunds reduce the fee. One partner per new parent. The programme terms are the document you sign.",
        size=20,
        color="E7EEF3",
    )
    add_shape_text(s, Inches(0.55), Inches(6.3), Inches(12), Inches(0.5), SIGNUP, size=16, bold=True, color="4DE1C1")
    footer_slide(s, prs, SUPPORT)

    path = ROOT / "KlaraLearn-Partner-Briefing.pptx"
    prs.save(path)
    return path


def main():
    print(build_recommendation())
    print(build_tracker())
    print(build_terms_docx())
    print(build_pptx())


if __name__ == "__main__":
    main()
