# e2e & unit testing demo

This section provides a demo for end-to-end and unit testing for frontend project.

## Run the project and tests

Instructions on how to run the project and execute tests.

### Install pnpm

To manage packages, first install pnpm.

```bash
npm install -g pnpm
```

### Install dependencies

Install all the required dependencies for the project.

```bash
pnpm install # or pnpm i
```

### Run development server

Start the development server if needed.

```bash
pnpm run dev
```

### Run test

Execute the unit tests.

```bash
pnpm run test
```

### See coverage

Check the code coverage of the tests.

```bash
pnpm run coverage
```

## Set up python env and run e2e tests

Instructions on how to set up a Python environment to run end-to-end tests.

### Change to e2e directory

Navigate to the directory containing the end-to-end tests.

```bash
cd e2e
```

### Install pip

Install pip, the Python package installer. More details can be found in the [pip instalation docs](https://pypi.org/project/pip/)

### Create virtual env

Create a Python virtual environment to manage dependencies.

```bash
pip3 install virtualenv 
```

### get in the virtenv

Activate the virtual environment.

```bash
make env1
```

### run the e2e tests

Finally execute the end-to-end tests.

```bash
meke run
```
