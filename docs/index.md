# Splice Programming Language

**Splice** is a lightweight, embeddable programming language designed for portability, simplicity, and small runtime environments. It is built in C and designed to run on a wide range of systems, including desktop computers, embedded devices, and custom operating systems.

Splice aims to provide a simple and predictable scripting environment while remaining small enough to integrate directly into system software and firmware.

---

## History of Splice

Splice was created as an experiment in building a programming language that could bridge the gap between traditional scripting languages and low-level system programming.

Many popular embedded languages today fall into two categories:

• **Low-level languages** like C and C++ that provide high performance but can be difficult to learn and maintain.  
• **High-level scripting languages** like Python or JavaScript that are easier to write but often require large runtimes and significant system resources.

Splice was created to explore a different design approach: a **small, portable scripting language with predictable execution and minimal runtime overhead**.

The project began as a learning and research effort focused on:

- understanding how programming languages work internally
- designing a small virtual machine
- experimenting with custom bytecode execution
- creating a scripting language that could run across many environments

Over time, the project evolved into a full language runtime with components such as:

- a lexer and parser
- a bytecode instruction system
- a virtual machine runtime
- a small standard runtime library

Splice continues to evolve as the language design and runtime implementation improve.

---

## Design Goals

Splice focuses on several core principles.

### Small Runtime

The runtime is intentionally lightweight so it can run in constrained environments such as embedded systems or experimental operating systems.

### Portability

Because the runtime is written in C, Splice programs can run anywhere the runtime can be compiled.

### Predictable Execution

Splice avoids heavy background systems and complex runtime behavior. Programs execute in a clear and deterministic way.

### Easy Embedding

Splice can be integrated into other software projects, allowing developers to add scripting capabilities to existing applications.

---

## Features

Some of the core features of Splice include:

- Simple syntax designed to be easy to read and write
- Lightweight runtime written in C
- Portable across operating systems and hardware platforms
- Script execution using a custom virtual machine
- Suitable for experimentation with language and VM design

---

## Hello World Example

A simple Splice program:

``` splice
print("Hello, Splice!")
```

Save the file as:

``` text
hello.spl
```

Run it using the runtime:

``` bash
./splice hello.spl
```

---

## Learning Splice

To start learning the language, see the **Learn Splice** section of the documentation.

Topics include:

- Running Splice programs
- Variables
- Input and output
- Arithmetic
- Conditional statements
- Loops
- Functions
- Error handling

---

## Project Repository

Splice is open source and available on GitHub:

[Link to page](https://github.com/Open-Splice/Splice)

Contributions, experiments, and improvements are welcome.
