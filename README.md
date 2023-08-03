# Recruitment task for company X

## You can find task instruction below my comment 👇

## My comment:

To finish this task with "production code quality" I would need to spend a lot of time. I decided that should be fair to spend around 6 hours, that means I can focus on basic functionality without any extra features. My goal was to improve code quality, and make as much a possible.

### What I actually did

 1. I have started with big refactor, codebase looked messy so I wanted to make it a little bit more clear. I've started with running prettier on whole project, and later checking all eslint / ts errors.
 2. After that I was still continue refactor, I've checked every components inside, and fix problems that I could notice.
 3. After that I was checking code of page generation and data model I have improved it. Now app should work faster after implementing generating pages on build, not on every request.
 4. Finally I have started to work with design to make it more similar and also responsive. Because of complexity of all previous tasks I wasn't able to make this perfect but should be good enough. Ex. I have only implemented only one breakpoint (partially also because also design had only one breakpoint).


### What I actually could do if I had more time

1. I could add visual effects (nice but time consuming)
2. Tests - that could be nice, I could present my test knowledge. From the second side this fron-end is mostly about displaying things. I think that with this basic interactions tests wouldn't add much value (on this stage project). (and also would need to spend a little bit more time on this)
3. Documentation of your components on Storybook, similar situation like with test, that could be nice, but actually wouldn't add much value on this stage of this project, but would more time consuming.

### How to run the app

In the project directory, you can run:

#### `npm run dev`

I have also deployed the app to vercel, you can check it here:

#### [#](#)

#### env variables

This project needs env variables to work. Please check `.env.example` and add it.

## Task instruction:

### Original link to task - [https://github.com/KajBialas/fe-code-challenge/](https://github.com/KajBialas/fe-code-challenge/)

### Gigaclear Code Challenge - Frontend NextJs

The main objective of this challenge is to test your skills in Frontend Development using Next.js. As part of the review and the following discussion, we will be paying attention to:

- Your coding style
- Your knowledge of frameworks and other technologies
- Your adherence to best practices
- Your UI/UX skills

### Setup

After clone/download project execute:

```
yarn
```

or

```
npm install
```

Once modules installations finish you can start develpoment proccess by executing:

```
yarn dev
```

or

```
npm run dev
```

You can execute storybook in a second terminal

```
yarn storybook
```

or

```
npm run storybook
```

### The Challenge

The following [Figma](https://www.figma.com/file/6Lqq3DipyAvKRaXzHqm7os/gigaclear-frontend-challenge?node-id=0%3A1 'Figma') layout needs to be developed using Next.js based on the project skeleton we have provided.

Please consider the Figma as a prototype; we would also like to see your ability to propose improvements, features and new contributions to the product's UI!💄

These could include:

- Adding new functionalities
- Creating animations
- Developing visual optimizations

If you decide to do so, please let us know what changes you are proposing to introduce alongside the submission.

### Using the project skeleton

Alongside this README is a project skeleton from which to build your submission.

It is adapted from a standard Next.js template, with some additional contents to get you started (see the `src/components` folder). It also includes a Storybook extension (https://storybook.js.org).

To run this project, run

`yarn`

to install the dependencies, then

`yarn dev`

to spin up the application and

`yarn storybook`

from a separate terminal to spin up the storybook.

### About the API

To mock the API, you can create a JSON file with the data you will need. You could for instance assume that the content is coming from a headless CMS such as Strapi.

### About the project

You **SHOULD** develop:

- A page with all post cards sorted by post date
- Dynamic navigation when clicking on post cards

If you have additional time, you **COULD** develop:

- Tests
- Documentation of your components on Storybook

### Sending

After finishing the challenge, please upload your submission to a GitHub repository; the person in charge of recruitment will let you know who to share it with.
