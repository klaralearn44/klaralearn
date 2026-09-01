---
name: Tutor claim boundaries
description: Rules for keeping KlaraLearn marketing claims aligned with the live available-profile feed.
---

Static marketing copy and structured data must not unconditionally promise subject-specific tutor availability, a minimum price, exam-board coverage, qualifications, reviews, vetting, DBS checks, safeguarding verification, or lesson recording unless the live inventory contract explicitly guarantees that fact.

**Why:** Search pages can be indexed when no matching profile exists, and optional profile fields do not establish platform-wide facts. Unsupported rich-result metadata is as risky as unsupported visible copy.

**How to apply:** Use comparison language and tell parents to verify the rate, availability, subjects, experience, and other details shown on each current profile. Generate inventory-specific claims only from validated live data.

The live `publictutorcard` feed is the source of available directory inventory, and every complete record it returns should remain discoverable at its stated rate and under both its exact subjects and relevant umbrella category (for example, Biology under Science). The feed does not currently carry per-profile safeguarding or qualification status.

**Why:** Applying an unrelated marketing-price floor or inferring verification fields silently hides valid live profiles and makes subject landing pages disagree with the production directory.

**How to apply:** Keep availability filtering limited to public-profile completeness and valid positive rates. Present platform safeguarding processes separately from tutor-record badges unless the feed contract later adds explicit status fields.