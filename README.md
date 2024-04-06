# Microfrontend React App

[![Node CI](https://github.com/dim2k2006/microfrontend-react-app/actions/workflows/nodejs.yml/badge.svg)](https://github.com/dim2k2006/microfrontend-react-app/actions/workflows/nodejs.yml)

## Table of Contents

- [Task](#task)
- [Requirements](#requirements)
- [Installation and usage](#installation-and-usage)
- [Application overview](#application-overview)
- [Technologies](#technologies)
- [Further improvements](#further-improvements)

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

The project requires Node.js version 18 or higher. To install the project, follow these steps:

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

The is one more screen called **Split view** that shows how two remote applications (user form and users list) can communicate in real time.

<img src="./docs/images/screen-split-view.png" alt="Split view" />

#### Links to the deployed applications

Link to the shell (host) application: https://layers-shell-host-omega.vercel.app/

Link to the user form (remote) application: https://layers-user-form-remote-ten.vercel.app/

Link to the users list (remote) application: https://layers-users-list-remote.vercel.app/

## Technologies
