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

- So I started thinking about how I would go about testing my code. I picked Jest pretty much right off the bat and I was reading about Selenium when I came across Puppeteer. I had read a little about it but never really got into it.
- The issue with selenium is that it's flaky, it's not really designed for dynamic content like the webapp that my team owns (`ng-if` galore) and doesn't scale to us being able to run across all our regions and hosts.
- Downside with puppeteer was that it was Chrome specific but I decided to give it a shot anyway.
- **Slide break**
- Docker came later into the picture. Working for a service that offers cloud hosted Docker, I've gotten in the mindset of using Docker for most of my personal projects and my team used all 3 OSes so Docker would also help level the playing field.
- If I can run a project on Docker, then I can run it on my service for pretty cheap.
- I knew Chrome could run out of a container and I saw that if you pull down the Puppeteer NPM package, it installs Chromium. The only other thing left to do was to make sure that Chromium had all of it's dependencies in the container. Easily solved by running a `sudo apt-get install` as part of the Dockerfile!
- Another caveat about this is that Chromium can't run as the root process in the container, Docker provides a `--init` flag while running a container that solves that problem for us too!
- **Slide break**
- So now I had Jest, Puppeteer, and Docker! I thought, "Excellent, let's get started". So I took some time to write tests against the production code and found that I could write tests using my stack a lot faster than I could using the internal AWS integration testing stack.
- Since I was just using this to do acceptance testing when we would deploy new features, we didn't have to replace our existing infrastructure, just augment it with the testing code that I was writing.
- I take my science project to work, I show it off, people think it's a pretty great idea and while running deployments, my team started using it. It cut down up to 30 minutes of acceptance testing per region and covered more cases.
- Think about that, 30 minutes per region, 18 regions, that's 9 hours. That's a whole work day back to the developer so they can focus on their work rather than click buttons manually.

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
