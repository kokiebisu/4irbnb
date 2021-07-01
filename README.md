<p align="center">
    <img src="https://user-images.githubusercontent.com/43525282/86524021-e1d52400-be29-11ea-9943-6affd2b8038c.png" alt="airbnb" width="100" />
</p>

<br/>

<p align="center">
  <a href="https://circleci.com/gh/kokiebisu/airbnb">
    <img src="https://circleci.com/gh/kokiebisu/airbnb.svg?style=svg" alt="Build Status on CircleCI" />
  </a>
  <a href="https://nextbnb-storybook.vercel.app">
    <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg" alt="Build Status on CircleCI" />
  </a>
  <br/>
</p>

This is my second iteration creating a replica of Airbnb.
The goal for this project is to migrate into using Golang and follow the test driven development approach.

## Intro

I created a replica called nextbnb in the past and now I am starting a new one by taking approaches I have regretted not taking for the past project. I have experienced numerous pain points as the project got bigger. Some of the pain points were the following:

- [ ] Creating duplicate components unnecessarily
- [ ] Gathering all the code in one file for multiple purposes (this can result in slow performance on the browser)
- [ ] Not using React hooks effectively for optimized performance

To fix these problems I decided to take a complete different development flow. I focused into component driven development and a more test driven approach.

## Table of contents

- ✌️ &nbsp;[Getting Started](#getting-started)
- ❄️ &nbsp;[Aspects](#aspects)
  - 🛠 &nbsp;[Landing](#landing)
- 👏 &nbsp;[Development](#technology)
  - 💻 &nbsp;[Hashtags](#hashtags)
  - 💵 &nbsp;[Stack](#backers)

## Getting Started

It's really easy. But you must have docker installed.:

```sh
docker-compose build
```

## Design System

Check it out [here](https://airbnb-storybook.netlify.app/)

## Docs

https://kokiebisu.github.io/nextbnb/

## References

- [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Design System for Developers](https://www.learnstorybook.com/design-systems-for-developers/)

### Keywords

- [x] Component Driven Development

### Naming

- can~: Criterias to do a certain task. If False then disabled. (Ex. canProceedToNextPage)
- handle~: Used for functions triggered in Segments blocks. (Ex. handleRedirectToNextPage)
- is~: Variable name used for boolean type props (Ex. isExpanded)

### Tech Stacks

| Stacks                                       |                                          |
| -------------------------------------------- | ---------------------------------------- |
| [Typescript](https://www.typescriptlang.org) | Superset of Javascript                   |
| [React](https://reactjs.org)                 | Library to create reusable UI components |
| [Storybook](https://storybook.js.org)        | Design System tool                       |
