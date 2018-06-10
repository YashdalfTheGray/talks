# Contributing to Open Source Software

## Introduction and Contact

* [Twitter](https://twitter.com/YashdalfTheGray)
* [Github](https://github.com/YashdalfTheGray)
* [Website](https://yashkulshrestha.carrd.co/)

## What is OSS?

According to the dictionary, open source software is anything for which the original source code is made freely available and may be redistributed and modified. Practically speaking, OSS is any software that you can go look at the inner workings of, allows you to go make copies and make changes and accepts contributions from sources other than the team of maintainers.

Even more practically, any software hosted publically on Github! 😃

## A bit of History

In the early 1970s, when software development was a relatively new practice, software and the exchange of software was free and open. Collaborators shared software like people share recipes. As the industry grew though, proprietary software that required a license for use became the default mode of operation.

Annoyed by this, Richard Stallman started the GNU project at MIT in 1984 (Apple Macintosh super bowl commercial) and a year later (same year the NES came out), the Free Software Foundation was created to house the funding for ht GNU project. The Free Software Foundation eventually combined with Linux and Stallman's free OS vision came to life.

In 1997 (year that Titanic came out), Eric Raymond writes [The Cathedral and The Bazaar](http://www.catb.org/esr/writings/homesteading/cathedral-bazaar/), the famous comparison between the development styles of GNU and Linux. He called GNU the Cathedral because the source code is written by a small group of people but distributed freely while he called Linux the Bazaar because it was developed over the internet, in public.

In 1998 (same year as Google being founded), Netscape open sources Netscape Communicator to mozilla.org (which was set up by Netscape for code) which leads to the creation of Firefox. This move was influenced by the Bazaar methodolody of developement. Same year, Raymond founds Open Source Initiative to grow the OSS community. Firefox goes on to become one of the most popular browsers in the 2000s.

While being developed, the Linux kernel moved from emailing patch files to the maintainers to using BitKeeper. After the free-to-use licensing for BitKeeper was revoked by the company, Linus Torvalds created Git in 2005 (Youtube founded in the same year). Git remains the most common source control tool and is also open source itself. It also is the basis of GitHub and Gitlab!

## Where we are now

Nowadays, companies are open sourcing more and more software, not only because it's the right thing to do but also because it forces the software to be worked on and improved by the community, ultimately improving the product that the company can deliver to end users.

According to data from GitHub, Microsoft, Google and RedHat are top contributors to the website. More and more, open source software is being used to drive compelling products and deliver rich useful experiences to customers. Some common open source products include Linux, Git, Google Chrome, Android, VSCode, React, .Net, Typescript, Docker and many many more with many more being open sourced daily!

## Getting involved

You might be wondering, with the open source software movement firmly taking hold of the software industry, how do I get involved? How do I get started? It can seem like a lot to go to the Typescript page on Github (or the Android repo on Google code) and get started contributing code to the project. The honest truth is, it can be a lot. Just like the friction that you experience when starting a new job, getting started contributing to open source will take a little time and effort.

Luckily, the open source community has already recognized and address this problem! Most common repositories out there have "newcommer issues" or "good first issue" to direct you to an issue that you can quickly ramp up on, solve and contribute. This gives the maintainers a way to introduce you to the project in the way that will lead to a high success rate as well as it's encouraging to you because it's something quick that you can solve.

In fact, there is a whole month long event called Hacktoberfest that is dedicated to encouraging all developers to start contributing to OSS and it is run by GitHub and DigitalOcean during the month of October every year.

## How I got started

But maybe, looking for "good first issues" is not something that you wanna do. We all develop in different ways afterall. This is where I was about 3 years ago. I had just agreed to join a team doing mobile development using Javascript while coming from an automation engineer position that was very hardware focused. To try and force myself to ramp up quickly, I started writing code (and open sourcing it) to solve problems around me. Some examples include,

* It would be cool if I had a web interface for a media organizer on my home server...write some code.
* It would be cool if I didn't have to set up my Windows computer every time I formatted it...write some code.
* Sometimes I wake up with a song stuck in my head and I wanna log them...write some code.

This way, I started creating these little helper scripts and programs for myself which helped me in my daily life as well helped me build confidence around my development skills.

## Where has all of this lead

All of this writing code to solve problems gave me a very pragmatic approach to development. I picked up computer science fundamentals naturally, like learning memoizing because I realized that the same data was requested often and it could be easily cached. Or learning about the time complexity of a function I wrote as a result of me wondering, "Hmmm...I wonder how I can quantify the performance of this API endpoint". All of this has lead to me developing,

* Two slack bots, one of which is named Atlas and runs the devices in my house
* An API on top of Phillips Hue which lets me (and Atlas) talk to the lights in my house
* A Web based UI for seeing Docker containers on a Docker host
* A lightwieght Slack approval app for new users
* A Webpack loader that automatically includes your AngularJS templates
* An app that I can allow guests to control the lights in the house using their phones

In general, I like to tinker, I like to break things so I can understand how they work and I keep writing these small apps and scripts that I use on a daily basis. All of this has taught me about so much in software development that I could take the rest of the time and the rest of the day to tell you and it wouldn't be enough. There is a lot out there to learn but creating and contributing to OSS has, in essence, sped up 10x my learning and I'm glad I started down this path!