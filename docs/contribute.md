# Contributing to Splice

Thank you for your interest in contributing to **Splice**.

Splice is an open project and contributions are welcome. This guide explains the workflow used to safely add changes to the project.

---

## Development Workflow

Splice uses a simple two-branch workflow.

main  
Stable production code.

Test  
Development branch where all new changes are submitted and tested.

All contributors push changes to the **Test branch first**. After review and testing, maintainers move the code to **main**.

Workflow:

Developer → Test branch → Pull Request Review → Merge to main

---

## Important Rule

Never push changes directly to **main**.

All development happens in the **Test branch**.

---

## Contribution Process

Follow these steps to contribute.

---

### 1. Clone the Repository

``` bash
git clone https://github.com/Open-Splice/Splice.git
cd Splice
```

---

### 2. Switch to the Test Branch

Before making changes, switch to the Test branch.

``` bash
git checkout Test
```

If the branch is not local yet:

``` bash
git checkout -b Test origin/Test
```

---

### 3. Make Your Changes

Examples of contributions:

• improving the runtime  
• fixing bugs  
• improving documentation  
• adding examples  
• improving the SDK  

Make sure your changes compile and run correctly.

---

### 4. Commit Your Changes

Use clear commit messages.

``` bash
git add .
git commit -m "Fix: correct arithmetic behavior"
```

---

### 5. Push to the Test Branch

Push your changes directly to the Test branch.

``` bash
git push origin Test
```

---

### 6. Open a Pull Request

Create a **Pull Request from `Test` to `main`**.

A maintainer will review the changes before merging them.

During review we check:

• code correctness  
• stability  
• compatibility with the runtime  
• documentation updates if needed

---

### 7. Merge to Main

After approval and testing, maintainers merge the code:

``` text
Test → main
```

This promotes the changes to the stable branch.

---

## Code Style

General guidelines:

• keep code simple and readable  
• follow the style used in existing files  
• keep the runtime portable  
• avoid unnecessary dependencies

The Splice runtime is written in **C**, so contributions should maintain portability across systems.

---

## Documentation Contributions

Documentation improvements are encouraged.

You can contribute by:

• improving explanations  
• adding examples  
• fixing typos  
• expanding the language guide

Documentation is located in:

``` text
docs/
```

---

## Reporting Issues

If you find a bug, please open a GitHub issue and include:

• description of the problem  
• steps to reproduce it  
• expected behavior  
• platform information

---

## Thank You

Contributions help improve Splice and make the project stronger for everyone.
