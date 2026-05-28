# WEB102 Lab 4 – *Cap!*

Submitted by: **Yumin Jang**  
Z Number: **Z23655899**

**Cap** is a React app that generates website screenshots using the ApiFlash API. The user enters a URL and selects options like image format, size, ad blocking, and cookie banner removal. After submitting, the screenshot is shown on the page and saved in a gallery so all previously generated images can be viewed. The app also makes a second API call to display how many requests are left and shows the remaining quota at the top of the page.

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

* [X] Allow the user to add at least three parameters to a query to the ApiFlash API
* [X] Display the screenshot returned by the ApiFlash call on the page
* [X] On a separate part of the page, display all the images the user has queried thus far

## Stretch Features

The following **stretch** functionality is implemented:

* [X] Display whether or not your web app has hit the maximum number of queries allowed using another API call  

## Video Walkthrough

Here's a walkthrough of the fully completed Timetabled calendar:

<img src="Cap.gif" title="Video Walkthrough" alt="Video Walkthrough" />

GIF created with **Snipping Tool**

## What I've done and learned

What I’ve done in this lab is build a React app that takes user input, calls the ApiFlash API, and shows the generated screenshot along with a gallery of previous screenshots. I also added a quota tracker using a second API call and organized the layout with separate components and Flexbox. In the lab I learned how to create dynamic API queries, use fetch with async/await, manage multiple pieces of state, use conditional rendering to display data, and structure a React project into reusable components.

## License

    Copyright 2026 Yumin Jang

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
