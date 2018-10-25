# Canaries and Acceptance Testing Using Docker

Each of these headings generally refer to a group of slides, slide breaks are noted.

## "Something you should know"

We figured out a long time ago, as a people, that pictures are worth a thousand words so the presentation deck that goes with this outline contains a lot of pictures. Some are helpful, some are memes. Oh, and emoji, the presentation makes tasteful use of emoji.

## Intro

Yash Kulshrestha
@yashdalfthegray on Twitter and Github

## Cloud emoji

I work for Amazon Web Services. My team manages the Elastic Container Service console. It's a relatively complex webapp and as some of you might be familiar, AWS is a regional service. ECS, my service, exists in 18 regions. This will become important later in the story.

## Agenda

- Grandma finds the internet - where we were as a team, how did the project get started
- Thumbs up - where we are now that the project is live
- To infinity and beyond - where I envision the project to go

## Inception

- Summer 2018
- The feature release process at AWS follows the usual planning, development, testing and release process. We figure out what we need to ship, get some engineers to work on it, get a product manager to test that the feature meets their requirements (this is what we call acceptance testing) and then we release it to all of our users.
- That’s the ideal situation, what ends up happening more often than not is that the product managers give us requirements and we test to make sure that those requirements match what we developed. This usually happens because our project managers are juggling multiple projects at once.
- **Slide break**
- My team was particularly frustrated with our acceptance testing process because as we worked on the feature and it started to take shape, more user stories would inevitably come up that we didn’t account for.
- There are integration (or end-to-end) testing tools that exist at AWS that my team uses but we often don’t get enough time to develop testing around all of the user stories that we should be testing for.
- Okay, no big deal, my team keeps our unit testing coverage decently high, we can release, test things by hand and things should work, right?
- The idea works...until on release day, 1 hour before public release, your integration tests are failing and there is a moment of panic - did I miss something in my feature that should be there or are the tests failing because the test runner quit unexpectedly?
- Another dimension where this idea doesn’t work is scale. AWS is all about massive scale. We test, by hand, deployments to 18 regions; this would take anywhere from 45 minutes to an hour per region over 5 days. That's half a developer week, gone.
- Having been through this experience more times that I am willing to accept; I can confidently say, it’s not a good look.
- The tooling was also using deprecated dependencies. When you do actually determine that the tests are the culprit and your feature code is working as expected, trying to figure out what went wrong is usually comprised of looking at old StackOverflow posts and even older Github issues!
- **Slide break**
- #ThereHasToBeABetterWay
- I started to wonder, what if we could use tools that were maintained and preferred by the Javascript community to do our acceptance testing for us!
- We could start with something that requires minimal setup for now to ease the pain and figure out how to integrate it into our infrastructure later.
- We were mostly doing acceptance testing on our development machines anyway so it wouldn't need to integrate with our infrastructure yet and anything’s better than testing things BY HAND!

## Current state

- So I started thinking about how I would go about testing my code if this was a personal project. I pulled together some requirements - 1) I wanted to get up and running quickly, 2) I wanted something that would click and scroll and type things in our production webapp just like a user would and 3) it should require minimal effort to set up on another machine.
- **Slide break**
- I picked Jest, a testing framework by Facebook because it was quickly becoming the community favorite. I wanted to do browser testing which isn’t specifically what Jest is designed for but I knew it had a large and active community behind it which meant I could get support and it also meant that a variety of teams had used it for a variety of things and my idea was probably already explored. Up and running quickly, check.
- **Slide break**
- I initially thought of going with Selenium having used it in the past and also because Selenium also has a large community that’s active around it.
- The issue with Selenium is that it has difficulty working with dynamic content - pages that hide and show information based on user actions and asynchronous events like your data loading from the server.
- It becomes more difficult to model user behavior with Selenium as the page gets more complex (things on the page have to be manually waited on to become available) so I started looking for alternatives and I came across a relatively new project called Puppeteer done by the Google Chrome team.
- Puppeteer was pretty strictly tied to Google Chrome but it presented actions like click and type, which I could use to simulate user behavior easier than having to adjust my test code to account for dynamic content. Model the user, check.
- **Slide break**
- Docker came later into the picture. Working for a service that offers cloud hosted Docker, I've gotten in the mindset of using Docker for most of my personal projects and my team used all 3 OSes so Docker would also help level the playing field.
- Furthermore, if I can run a project on Docker, I can run it on my AWS service, ECS as well!
- I knew Chrome could run out of a container and I saw that if you pull down the Puppeteer NPM package, it installs Chromium. The only other thing left to do was to make sure that Chromium had all of its dependencies in the container. This was easily solved by running a `sudo apt-get install` as part of the Dockerfile!
- Another caveat about this is that Chromium can't run as the root process in the container, Docker provides a `--init` flag while running a container that solves that problem for us too! Minimal setup time, check!
- **Slide break**
- So now I had Jest, Puppeteer, and Docker! I thought, "Excellent, let's get started". So I took some time to write tests against the production code and found that I could write tests using my stack a lot faster than I could using the internal AWS integration testing stack.
- Since I was just using this to do acceptance testing when we would deploy new features, we didn't have to replace our existing infrastructure, just augment it with the testing code that I was writing.
- I took my science project to work and I showed it off; my teammates thought it was a pretty great idea and while running deployments, my team started using it. It cut down as much as 30 minutes of acceptance testing per region and covered more of the use cases.
- Think about that, 30 minutes per region, 18 regions, that's 9 hours. That's a whole work day back to the developer so they can focus on their work rather than click buttons manually.

## Canaries are the future

- Right now, this testing that we're doing is pretty manual - we release changes, we run this tool and we verify that there hasn't been any regression; your basic acceptance testing.
- What I want to do, and it is related to the second part of my talk - canaries. I don't just want to find potential issues when I'm looking for it, given that we've created a significant amount of integ tests for our app, I want them to run constantly and break and tell me when there has been an error that we might have missed or when there is a dependency of our web app that isn't working well.
- **Slide break**
- This is what's called a canary. It's a set of forever running tests that access and walk through your application to catch issues potentially before any customer does. Canaries at AWS are a pretty standard thing, all services are required to have them.
- The word comes from the phrase "canary in a coal mine". Coal miners would keep a canary bird around to detect poisonous gasses. When the canary stopped singing, it was time to leave the mine. Similarly, when our digital canary stops singing (working as expected), we know something's wrong
- My team and I are still working on integrating this type of testing with the rest of our infrastructure. Because of that, I've spent a whole lot of time thinking about, how it can work.
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

- [Todos demo app](https://github.com/YashdalfTheGray/todos)
- [Todos demo app integration tests](https://github.com/YashdalfTheGray/todos-tester)

## Resources

- [Presentation notes](https://yashdalfthegray.github.io/talks/canary/outline)
- [Presentation](https://yashdalfthegray.github.io/talks/canary/)
- [Twitter link](https://twitter.com/yashdalfthegray)
- [Github link](https://github.com/YashdalfTheGray)
- [Website link](https://yashdalfthegray.github.io)

## Thanks
