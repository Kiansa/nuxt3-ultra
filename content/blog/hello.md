---
title: 'My awsome post title'
meta: 'This is the meta description'
date: 17 Jan 2023
img: https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
tags: ['Nuxt', 'Tailwind']
author: 'John Doe'
authorAvatar: https://i.pravatar.cc/300
---

# Hello.md

In this tutorial, we will be walking through the process of setting up Nuxt.js v3 and Tailwind CSS in Visual Studio Code.

Before we begin, make sure that you have Node.js and npm (Node Package Manager) installed on your computer. You can check if you have these by running the following commands in your command prompt or terminal:

```shell[sh]{} meta-info=val
node -v
```

```shell[sh]{} meta-info=val
npm -v
```

## Step 1: Create a new Nuxt.js project

First, we will create a new Nuxt.js project using the nuxi init tool. This tool will set up a new Nuxt.js project with a basic file structure and some default configurations.

Run the following command in your terminal:

```shell[sh]{} meta-info=val
npx nuxi init <projectname>
```

```shell[sh]{} meta-info=val
cd <projectname>
```

Replace `<projectname>` with the name of your project.

Install the dependencies:

```shell[sh]{} meta-info=val
npm install
```

## Step 2: Install Tailwind CSS

Next, we will install Tailwind CSS. Tailwind is a utility-first CSS framework that makes it easy to build custom designs without writing any CSS.

Run the following command in your terminal:

```shell[sh]{} meta-info=val
npm install -D tailwindcss postcss autoprefixer
```

then run the init command to generate a tailwind.config.js file:

```shell[sh]{} meta-info=val
npx tailwindcss init
```

## Step 3: Configure Tailwind CSS for Nuxt 3

In this step, we will configure Tailwind CSS to be used by Nuxt 3.

First, open the file in the root of your project called `tailwind.config.js`

Then, copy the following code into the file:

```javascript[tailwind.config.js]{} meta-info=val
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Now you need to add the Tailwind directives to your CSS.

Create an `./assets/css/main.css` file and add the `@tailwind` directives for each of Tailwind’s layers like this:

```css[./assets/css/main.css]{} meta-info=val
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 4: Configure Nuxt 3 to use Tailwind CSS

Next, we will add Tailwind CSS to Nuxt 3 to be used globally.

In your `nuxt.config.js` file, add the following code:

```typescript[nuxt.config.ts]{} meta-info=val
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
```

## Step 5: Start your build process and run your project

Now that we have added Tailwind CSS to our project, lets give it a try!

Run the dev command to test and view your changes as soon as you save a file:

```html[app.vue]{} meta-info=val
<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>
```

You have successfully set up Nuxt.js v3 and Tailwind CSS. Now, you can run your project using the following command:

```shell[sh]{} meta-info=val
npm run dev
```

With these steps, you should have a working Nuxt.js v3 project with Tailwind CSS integrated. You can now start building your website and take advantage of the power and flexibility of these two amazing tools.

Just keep in mind that this is a basic example, and you can customize and extend your tailwind config file as needed.

Happy coding!
