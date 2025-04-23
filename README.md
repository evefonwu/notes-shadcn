# Learning Libraries Series - Shadcn UI

Learning Notes -

"This is not a component library. It is how you build your component library."

https://ui.shadcn.com/docs

# next.js app, install shadcn

installed shadcn on a next.js app
https://ui.shadcn.com/docs/installation/next

resolve React19 dependency warning:

using React18, which is compatible

pnpm install react@18 react-dom@18

pnpm dlx shadcn@latest init

https://ui.shadcn.com/docs/react-19

# bring in some component code

pnpm dlx shadcn@latest add label

- label
- input
- button
- ?
- card
- form

# adding a contact us form

- adding a contact form with validation of user input: name, email, message fields

"They are one of the most common things you'll build in a web application, but also one of the most complex. In this guide, we will take a look at building forms with react-hook-form and zod.

https://ui.shadcn.com/docs/components/form

- adding a buttons page to show the variants and sizes for buttons

- changing button styles across the site - what's the smallest change I can make? removed rounded corner styling from base button

# notes

It's like having a friend who just gave you a mega set of customizable, well-designed component files written with the Radix Primitive library for fully accessible components adhering to WAI-ARIA design patterns.

It becomes your component library, literally within your own codebase.

Your code, your freedom, your component library, and your responsibility.

With primitives, the changes made are on the component-level when you customize a component. You import a button and customize its style, and to make another one, you'd copy and paste? you'd extract the styles into a classname and reuse custom classnames? you'd wrap around the button with a wrapper component to offer defaults and variants?

With shadcn, the changes made to components can be site-wide. Customize a component, change the code in ONE place, because you have the actual source code, and then import it everywhere else in your application.

For example, buttons - you can modify the Button file to change the styles and functionality to meet the requirements of your specific application. Then import the customized Button everywhere in the application for consistent button style and functionality across the site.

# zod, react-hook-form, resolvers

What is zod -

"Zod is a TypeScript-first schema declaration and validation library.
With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. Concise, chainable interface..."

https://zod.dev/?id=introduction

react-hook-forms -
"Performant, flexible and extensible forms with easy-to-use validation."

https://react-hook-form.com/

react hook form resolvers - "function allows you to use any external validation library such as Yup, Zod, Joi, Vest, Ajv and many others. The goal is to make sure you can seamlessly integrate whichever validation library you prefer.

https://www.npmjs.com/package/@hookform/resolvers

resolving can't find module errors -

using the latest versions cleared the errors

error: Cannot find module 'react-hook-form' or its corresponding type declarations

pnpm install react-hook-form@latest

pnpm install @hookform/resolvers@latest
