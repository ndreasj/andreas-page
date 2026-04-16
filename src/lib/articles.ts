export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readingTime: string;
}

export const articles: Article[] = [
  {
    slug: "on-simplicity",
    title: "On Simplicity",
    date: "2026-04-10",
    excerpt:
      "Simplicity is not the absence of complexity — it is the result of deliberate choices. Good design asks what can be removed, not what can be added.",
    readingTime: "4 min read",
    content: `Simplicity is not the absence of complexity — it is the result of deliberate choices. Good design asks what can be removed, not what can be added.

We live in a world that rewards addition. More features, more options, more content. But the things that endure are often defined by what they choose to leave out. A well-edited essay. A sparse room. A minimal interface.

## The Cost of Complexity

Every element added to a system has a cost. It demands attention, creates dependencies, and introduces the possibility of failure. The more you add, the harder it becomes to understand, maintain, and change.

Complexity also compounds. Two moving parts create more than twice the potential interactions of one. Three creates more than three times. This is why large systems become hard to reason about — not because any one part is incomprehensible, but because the space of interactions grows faster than intuition can track.

## Earning Complexity

This does not mean simplicity is always the answer. Some problems are genuinely complex, and the right response is complexity that matches the problem — no more, no less.

The discipline is to distinguish between complexity that is intrinsic to the problem and complexity we introduce accidentally. Much of what we call "necessary" complexity is actually the result of habit, inertia, or a failure to ask better questions.

## Removing as a Practice

The hardest editorial skill is cutting. It is easier to add a hedge than to remove a weak sentence. It is easier to add a feature than to reconsider the underlying need.

But removal is where clarity lives. When you force yourself to cut, you have to decide what actually matters. And in that decision, you often discover something worth keeping.`,
  },
  {
    slug: "early-mornings",
    title: "Early Mornings",
    date: "2026-03-28",
    excerpt:
      "There is a particular quality to the light before the city fully wakes. A stillness that makes thinking feel different — less crowded, more patient.",
    readingTime: "3 min read",
    content: `There is a particular quality to the light before the city fully wakes. A stillness that makes thinking feel different — less crowded, more patient.

I have been waking up earlier than I need to for a few months now. Not dramatically early — just an hour before anything demands attention. The change has been subtle but real.

## What the morning offers

The early hour has no weight of accumulated decisions. The day has not yet begun to pull in different directions. There are no emails asking for responses, no tasks that have had time to become urgent.

In that window, thinking tends to be more exploratory. Ideas surface without the usual pressure to evaluate them immediately. You can follow a thread without needing it to go anywhere useful.

## Routine as container

The structure I have found useful is minimal. Coffee. A notebook. Sometimes a walk if the weather allows. The specifics matter less than the consistency — having a container that signals to the brain that this time is different.

Habits work by reducing the cost of starting. When you have done the same thing enough times, beginning becomes automatic. The decision to sit down and think is already made.

## The evening trade-off

Going to bed earlier is the obvious cost. There is a version of the evening — later, more expansive — that disappears when you commit to early mornings. Whether the trade is worth it depends on what you actually use each end of the day for.

For me, the mornings have proven more generative. But this is not a universal prescription. It is simply an observation about what works in one particular life.`,
  },
  {
    slug: "notes-on-reading",
    title: "Notes on Reading",
    date: "2026-03-05",
    excerpt:
      "Reading is a practice that rewards consistency more than intensity. A few pages a day, over years, accumulates into something surprising.",
    readingTime: "5 min read",
    content: `Reading is a practice that rewards consistency more than intensity. A few pages a day, over years, accumulates into something surprising.

I spent a long time treating books as things to finish rather than things to inhabit. I would push through chapters to reach the end, as if completion were the point. It took a while to understand that this was the wrong model.

## Against finishing

There is something to be said for leaving books unfinished. Not all books are worth completing. Some deliver their core idea early and then repeat it. Some start well and lose coherence. Finishing these out of obligation is a tax on your reading time.

Permission to stop is permission to start more freely. When you know you can quit, you will try things you would otherwise skip. And some of those things will surprise you.

## Annotation as dialogue

Marking a book — underlining, writing in margins, folding pages — changes the reading experience. You are no longer just receiving; you are responding. The act of annotation forces a kind of evaluation: is this interesting enough to mark? What does it connect to?

Reading your own annotations later is its own kind of text. The moments you chose to mark tell you something about what you were thinking when you read.

## What stays

Most of what you read will be forgotten. This is less troubling than it sounds. The point is not perfect retention but the cumulative effect — the way reading slowly reshapes how you think, the categories you use, the questions you find interesting.

Books do not leave individual memories so much as they leave sediment. Over years, the sediment builds.`,
  },
];

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
