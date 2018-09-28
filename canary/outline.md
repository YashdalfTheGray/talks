# Canaries and Acceptance Testing Using Docker

Each of these headings will eventually turn into a group of slides, slide break noted.

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
- I knew Chrome could run out of a container and I saw that if you pull down the Puppeteer NPM package, it installs Chromium. The only other thing left to do was to make sure that Chromium had all of its dependencies in the container. Easily solved by running a `sudo apt-get install` as part of the Dockerfile!
- Another caveat about this is that Chromium can't run as the root process in the container, Docker provides a `--init` flag while running a container that solves that problem for us too!
- **Slide break**
- So now I had Jest, Puppeteer, and Docker! I thought, "Excellent, let's get started". So I took some time to write tests against the production code and found that I could write tests using my stack a lot faster than I could using the internal AWS integration testing stack.
- Since I was just using this to do acceptance testing when we would deploy new features, we didn't have to replace our existing infrastructure, just augment it with the testing code that I was writing.
- I take my science project to work, I show it off, people think it's a pretty great idea and while running deployments, my team started using it. It cut down up to 30 minutes of acceptance testing per region and covered more cases.
- Think about that, 30 minutes per region, 18 regions, that's 9 hours. That's a whole work day back to the developer so they can focus on their work rather than click buttons manually.

## Canaries are the future

- Right now, this testing that we're doing is pretty manual - we release changes, we run this tool and we verify that there hasn't been any regression; your basic acceptance testing.
- What I want to do, and it related to the second part of my talk - canaries. I don't just want to find potential issues when I'm looking for it, given that we've created a significant amount of integ tests for our app, I want them to run constantly and break and tell me when there has been an error that we might have missed or when there is a dependency of our web app that isn't working well.
- **Slide break**
- This is what's called a canary. It's a set of forever running tests that access and walk through your application to catch issues potentially before any customer does. Canaries at Amazon are a pretty standard thing, all services are required to have them.
- The word comes from the phrase "canary in a coal mine". Coal miners would keep a canary bird around to detect poisonous gasses. When the canary stopped singing, it was time to leave the mine. Similarly, when our digital canary stops singing (working as expected), we know something's wrong
- My team and I are still working on integrating this type of testing with the rest of our infrastructure. Because of that, I've spent a whole lot of time thinking about how it can work.
- The idea to take this further is simple, integrate with something like AWS CloudWatch Events and create events for each success and failure and have the failure email you that something's wrong.

## Tech stack

- This serves as the perfect segue to talking about the stack. I've talked a little about it during my first few slides but I wanted to have a slide dedicated to it so that we can talk about how all the bits and pieces fit together.
- **Slide break**
- First is Jest and Puppeteer. I write some Jest code and use the Puppeteer page object to get access to the browser and code up a workflow, for example creating a todo. I then use Jest's assertions to make sure that there was no error displayed on the page, validation or otherwise.
- **Slide break**
- Then we add Docker. Not only does this give us the ability to run this suite of tests across Windows, macOS and Linux, it also lets us run this on any cloud hosted container platform or even on our own pre-prod servers just by downloading Docker.
- **Slide break**
- This is one of the key takeaways today, the whole stack, Chromium + Jest + Puppeteer runs on Docker which can then be run pretty much anywhere. It's truly, write once, run anywhere code. As an example, I can run this suite of tests on my personal computer, on my work computer, across my team's computers, on our servers and even under AWS's hosted container offering, Elastic Container Service. All so that I know that the code that I'm shipping is doing what I intended it to and that outages in my service aren't being communicated to me by my customers but by my canary. Happy developers, happy customers.
- **Slide break**
- The last part of the stack focuses on the canary piece. We want these tests to run constantly, over and over and inform us of any issues that happen when something goes, not as planned. We already have the tests, we can use something like an ECS Service or a cronjob or a process manager to run these things over and over again.
- The notification system is also simple. We can integrate the tests with CloudWatch events, every time a test runs, we fire off an event that says what platform it was running on and what was the result. We can then use an SNS topic as the target of the CloudWatch Event to send us emails every time something fails and where the failure happened, whether in preprod, staging or prod.
- Gotta admit, that sounds like pretty good coverage for your service. And it's all enabled by containerizing our tests - a simple but very effective mechanism to generalize your tests!

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
