# Canaries and Acceptance Testing Using Docker

Each of these headings will eventually turn into a a group of slides, slide break noted.

## Intro

Yash Kulshrestha
@yashdalfthegray on Twitter and Github

## Cloud emoji

I work for Amazon Web Services. My team manages the Elastic Container Service console. It's a relatively complex webapp and as some of you might be familiar, AWS is a regional service. ECS, my service, exists in 18 regions. This will become important later in the story.

## Agenda

This slide will have a bunch of pictures in list form, mostly to signify what I'm going to be talking about later in the talk.

## Inception

- Summer 2018
- My team was particularly frustrated with our acceptance testing framework
- Framework was pretty unreliable, every so often, tests would fail for seemingly no reason
- It was also based on projects with are now, for all intents and purposes, abandoned by the authors and the community so it was hard to get support for them
- Further complicating the problem was this Amazon-internal wrapper around these tools which was also difficult to get support on
- **Slide break**
- #ThereHasToBeABetterWay
- I started to wonder, what if we could use community accepted tooling for now to ease the pain and figure out how to integrate it into our infrastructure later.
- We were mostly doing acceptance testing on our development machines anyway so it wouldn't need to integrate with our infrastructure yet
- We were testing, by hand, deployments to 18 regions, which would take anywhere from 45 minutes to an hour per region over 5 days. That's half a developer week, gone.

## Current state

- So I started thinking about how I would go about testing my code. I picked Jest pretty much right off the bat and I was reading about Selenium when I came across Puppeteer.
- I had read a little about it but never really got into it.

## Canaries are the future

## Tech stack

## Demos

- React/Redux todo demo link
- Integration tests using the same stack for todo app link

## Resources

- Presentation notes
- Presentation
- Twitter link
- Github link
- Website link

## Thanks
