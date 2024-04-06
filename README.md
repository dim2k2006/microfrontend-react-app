# Microfrontend React App

[![Node CI](https://github.com/dim2k2006/microfrontend-react-app/actions/workflows/nodejs.yml/badge.svg)](https://github.com/dim2k2006/microfrontend-react-app/actions/workflows/nodejs.yml)

## Table of Contents

- [Task](#task)
- [Requirements](#requirements)
- [Installation and usage](#installation-and-usage)
- [Application overview](#application-overview)
- [Technologies](#technologies)
- [Further improvements](#further-improvements)
- [FAQ](#faq)

## Task

You are tasked with creating a way for many teams to work on the same single page web app. To
do this you are to build a microfrontend platform.

## Requirements

The application should have the following features:
- **A menu**: with links to the different microfrontends (MFE) available
- **Main area**: where the MFE renders to
- **Routing logic:** such that the MFE can be switched out without reloading.

Things to take into account:
- Create at least two microfrontends you can demonstrate switching between them.
- Using `single-spa` probably solves too much of the problem for your solution.
- Apply creative and useful approaches to the problem.
- Do not spend time on "busy work", for example, adding a few jest test-cases just because.
- Put thought into every line of code.
- Minimalism is a good thing.
- We encourage you to use the most bleeding edge functionality of the web platform (as long you
  tell us which browser to test in :)
- Feel free to try approaches which would be impractical in practice, but could be interesting from a theoretical perspective.

## Installation and usage

The project requires Node.js version 18.18.0 or higher. To install the project, follow these steps:

- `git clone git@github.com:dim2k2006/microfrontend-react-app.git`
- `cd microfrontend-react-app`
- `make install`

To run the project, use the following command:

#### Shell (host) application:

To run the project, use the following command:

- `make develop-shell`

To build the project, use the following command:

- `make build-shell`

#### User Form (remote) application:

To run the project, use the following command:

- `make develop-user-form`

To build the project, use the following command:

- `make build-user-form`

#### Users List (remote) application:

To run the project, use the following command:

- `make develop-users-list`

To build the project, use the following command:

- `make build-users-list`

### CI commands

To run linting, use the following command:

- `make lint`

To run prettier check, use the following command:

- `make prettier`

To run tests, use the following command:

- `make test`

## Application overview

The project consists of three applications:

- **Shell application**: the main application that contains the menu and the main area where the microfrontends are rendered.

<img src="./docs/images/screen-shell.png" alt="Shell application" />

- **User Form application**: the first microfrontend that contains a form to create a new user.

<img src="./docs/images/screen-user-form.png" alt="User Form application" />

- **Users List application**: the second microfrontend that contains a list of created users.

<img src="./docs/images/screen-users-list.png" alt="Users List application" />

There is one more screen called **Split view** that shows how two remote applications (user form and users list) can communicate in real-time.

<img src="./docs/images/screen-split-view.png" alt="Split view" />

#### Links to the deployed applications

Link to the shell (host) application: https://layers-shell-host-omega.vercel.app/

Link to the user form (remote) application: https://layers-user-form-remote-ten.vercel.app/

Link to the users list (remote) application: https://layers-users-list-remote.vercel.app/

## Technologies

### Clean architecture

The project is built on two pillars: architecture and technology.

The application is built using simple yet very powerful principles from the world of clean architecture (Clean Architecture: A Craftsman's Guide to Software Structure and Design by Robert Martin https://www.amazon.se/-/en/Martin-Robert/dp/0134494164).

According to these architectural principles, all implementation details are hidden behind the abstract interfaces and can be replaced at any time.

In the code, we reference only these abstract interfaces instead of concrete implementations which allows us to easily replace the implementation details without changing the core logic of the application.

Business logic is pure and does not depend on any external libraries or frameworks. All low-level details depend on the business logic.

In our case, we have the next structure:

- Users Repository - does not depend on anything except the abstract interface.
- Users Service - depends on the Users Repository.
- Users Service Provider - depends on the Users Service.
- Users List application - depends on the Users Service Provider.
- User Form application - depends on the Users Service Provider.
- Shell application - depends on the Users Service Provider.

### Build system

To effectively implement the above principles, I used a very powerful build tool called NX https://github.com/nrwl/nx.

With NX, we can easily create a monorepo with multiple applications and libraries. It allows us to share code between applications and libraries, and to build, test, and deploy them in a very efficient way.

NX also provides us with a very useful eslint rule called *enforce-module-boundaries* that allows us to define the rules for the dependencies between the applications and libraries to be able to follow the clean architecture principles.

Finally, NX has out-of-the-box tools for building microfrontends using webpack module federation plugin.

## Further improvements

As an example of further improvements, I would like to mention the following:
- i18n support
- error monitoring (e.g. Sentry)
- adding some basic tests

## FAQ

#### What if we completely forego build tooling?

I believe it should be possible to build the project without build tooling, but it can bring an additional burden of managing the dependencies between the applications and libraries and will also require additional time to properly maintain the project which means that less time will be spent on delivering real value to the end users.

#### Can we use ESM?

Yes, we can use ESM and dynamic import to load the remote applications. This was my initial approach to the problem, but I could not achieve the proper bundle configuration with Webpack to make it work.

#### Can we isolate the CSS of the different MFEs somehow?

Yes, we can isolate the CSS of the different MFEs by using CSS modules or CSS-in-JS libraries like styled-components or emotion.

#### Are there clever ways to test the shell itself?

Yes, we will first need to mock the remote applications and then apply e2e or component testing to test the functionality that relates only to the shell application.

#### What can we do to test the MFE themselves?

With the MFE applications, it is even easier. We can leverage the component testing approach to test the functionality of the MFE applications.

#### Are there up and coming options for build tooling that we can consider?

There are a lot of up and coming options for build tooling that we can consider. For example, `single-spa`, `Vite`, or bare `Webpack Module Federation`.

#### Is a view library (e.g. React) really necessary?

No, a view library is not necessary. We can use vanilla JavaScript to build the applications, but it will require more time to implement the same functionality that we can achieve with React in a very efficient way.

#### Could be Web components be applied?

Probably yes, but it might require more time to implement the same functionality.

#### How to prevent CSS from leaking from one MFE to another?

We can prevent CSS from leaking from one MFE to another by using CSS modules or CSS-in-JS libraries like styled-components or emotion.
