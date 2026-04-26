# GudFood Vdoma — Redesigning a frozen food marketplace to keep customers coming back

**Tags:** Product Design · FoodTech · Mobile App Redesign  
**Year:** 2024

---

## Metrics

| 7 | 4 | ~2 months | Real client |
|---|---|-----------|-------------|
| User interviews | Key barriers identified | Design timeline | Presented to GudFood team |

---

## Project Metadata

| Field | Value |
|-------|-------|
| Role | Product Designer — Solo |
| Team | 1 Designer, 1 Mentor, GudFood stakeholders |
| Timeline | September – November 2024 |
| Scope | Stakeholder Interviews, UX Research, Hypothesis Generation, UI Redesign, Prototyping |
| Platform | iOS |

---

## Background

GudFood Vdoma is a Ukrainian frozen food delivery service — both a D2C brand and a restaurant marketplace — delivering to 26 cities across Ukraine. The product had an existing iOS app but was struggling with retention. Customers ordered once or twice and didn't come back.

Before talking to users, I met with the GudFood product team to understand the business context and eliminate assumptions before defining my research questions. The team knew users were churning. They had no structured data on why. No feedback mechanism existed in the app — no ratings, no reviews, no complaint resolution. The business was making product decisions without any signal from its customers.

That gap defined the project.

---

## Discovery

I interviewed 7 participants — a deliberate mix of GudFood customers, competitors' customers, and non-users of frozen food delivery. Existing users adapt to friction over time. Non-users show you what's actually blocking growth. The most valuable insights came from people who had never ordered from GudFood at all.

**Four barriers to reordering emerged:**

1. **Delivery cost friction** — 100–150₴ delivery on a single 200₴ item feels disproportionate. The math doesn't justify a casual purchase.
2. **Offline alternatives win** — Halya Baluvan is physically nearby. No planning, no waiting, no delivery fee. Convenience beats everything.
3. **Trust gap** — Users doubt that a frozen dish reheated at home will match restaurant quality at a similar price. The uncertainty kills the decision.
4. **Shrinking assortment** — Marketplace items were decreasing. Not all dishes ship outside Kyiv.

**Scoping the problem:**
Barriers one and four — delivery cost and shrinking assortment — are operations problems. Design can't fix pricing models or logistics coverage. Those were noted and handed back to the business.

Barriers two and three were addressable through design. The offline alternative problem pointed to a trust and value perception issue. The trust gap pointed directly at the absence of social proof and user feedback in the app.

**The critical gap:**
No feedback mechanism existed anywhere in the product. One respondent had submitted a complaint through Glovo and never received any acknowledgment. Another was promised a bonus item that never arrived — with no channel to follow up. Users had no voice, and the business had no data. Without a feedback loop, there was no way to identify which dishes underperformed, which restaurant partners had quality issues, or what specifically drove churn.

**Hypothesis:**
If we implement a structured feedback system — post-order ratings, dish-level reviews, complaint resolution — retention will improve. The business gains actionable data to fix quality issues. Users feel heard, which increases trust and willingness to reorder.

---

## Solution

**Feedback system — closing the loop that didn't exist**

The core intervention was a three-touchpoint feedback loop designed to work for both users and the business simultaneously.

*Post-order rating* — A bottom sheet appears after delivery: star rating, quick-feedback tags (Clear communications, Fast resolution, Smooth experience), and an optional text field. Under 10 seconds to complete. Low friction was non-negotiable — a complex feedback form gets ignored.

*Dish-level reviews* — Each product page surfaces reviews from other customers: name, rating, comment. This directly addresses the trust gap. Users unsure whether a frozen dish will taste as good as the restaurant version now have social proof to inform that decision.

*Aggregated restaurant ratings* — Marketplace restaurant cards display ratings calculated from individual dish reviews. This gives users a reliable quality signal when browsing and creates accountability pressure on underperforming partners.

**Supporting redesign — rebuilding trust through the full experience**

The feedback system only works if users trust the app enough to engage with it. The full UI redesign brought the experience in line with what users expect from mature delivery platforms like Glovo and Bolt Food — without erasing GudFood's own identity.

*Homepage* — Location confirmation, search, and category chips at the top. Promotional banners, own-brand products, and marketplace bestsellers below. Structured around what a new user needs to see first.

*Product detail* — Rating, weight, prep time, and calories visible immediately. Three tabs — Ingredients, Recipe, Reviews — give users everything needed to make a confident purchase decision. Cross-sell section at the bottom drives average order value.

*Orders & Tracking* — 4-step progress bar with estimated arrival. Past orders include "Rate order" and "Order again" as primary actions — closing the feedback loop directly from order history.

*Profile & Personal Cabinet* — Expanded beyond order history: favorites, discounts with expiry timers, referral program, payment methods, and direct support access. Each element targets a specific retention signal.

*Support* — Dedicated section with recent orders, help topics, and live chat. Closes the complaint loop that users previously had no way to complete.

---

## Result

**The primary metric this design targets is repeat order rate.**

GudFood's core problem was users ordering once or twice and not returning. Every design decision in this project maps back to moving that number.

The feedback system is the primary lever. Dish-level reviews and aggregated restaurant ratings close the trust gap that was blocking reorders — users can now make confident purchase decisions based on other customers' experience. Post-order ratings give the business the data it needs to identify and fix quality issues that were previously invisible.

The hypothesis: a structured feedback loop, combined with a modernized UI that meets user expectations from mature delivery platforms, drives a **10-15% improvement in repeat order rate within the first 90 days post-launch.**

The concept was presented to the GudFood Vdoma product team and validated as aligned with their product roadmap. Not shipped into production — but the direction was confirmed as the right next step.

---

## Key Learnings

**The absence of a feature is itself a finding**  
The biggest design opportunity wasn't something broken — it was something that didn't exist. No feedback system meant no data, no accountability, and no trust loop. Sometimes the most important question is: what's missing entirely?

**Retention isn't solved by one feature — it's an ecosystem**  
The feedback system is the core intervention, but it only works in context. A cleaner UI builds trust. Visible discounts create urgency. Favorites reduce decision fatigue. Support closes complaint loops. Every element reinforces the same message: this app pays attention to you.

**Interview non-users, not just customers**  
Two of my most valuable respondents had never used GudFood. They revealed barriers that existing users had already normalized — the trust gap between frozen and fresh, the dominance of offline alternatives. Current users adapt. Non-users show you what's actually blocking growth.
