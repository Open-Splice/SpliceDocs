# Installing Splice

This guide explains how to install and build **Splice**, a lightweight embedded-ready programming language runtime.

Splice runs on:

- macOS
- Linux
- Windows
- Embedded systems (manual builds)

---

## 1. Clone the Repository

First download the source code.

    git clone https://github.com/Open-Splice/Splice.git
    cd Splice

---

## 2. Build Splice

Compile using `./build.sh --force`.

    ./build.sh --force

After compilation the runtime binary will appear as:

    ./splice

---

## 3. Run Splice

Start the interpreter:

    ./splice

Run a program:

    ./splice hello.spl

---

## 4. Example Program

Create a file called `hello.spl`.

    print("Hello from Splice!")

Run it:

    ./splice hello.spl

---

## 5. Requirements

Minimum requirements:

| Tool | Requirement |
|-----|-------------|
| Compiler | GCC or Clang (C99 compatible) |
| Build Tool | ./build.sh --force |
| RAM | ~1–10 MB |

Optional tools:

| Tool | Purpose |
|------|--------|
| Git | Cloning repository |
| C./build.sh --force | Alternative build system |

---

## 6. macOS Setup

Install developer tools:

    xcode-select --install

Then build:

    ./build.sh --force

---

## 7. Linux Setup

Install build tools.

Ubuntu / Debian:

    sudo apt install build-essential

Fedora:

    sudo dnf groupinstall "Development Tools"

Arch:

    sudo pacman -S base-devel

Then build:

    ./build.sh --force

---

## 8. Windows Setup

You can build Splice using:

- MinGW
- MSYS2
- Windows Subsystem for Linux (WSL)

Example using MSYS2:

    pacman -S mingw-w64-x86_64-gcc ./build.sh --force
    ./build.sh --force

---

## 9. Embedded Builds

Splice is designed to run on constrained systems.

Typical embedded workflow:

1. Cross-compile the runtime
2. Link with firmware
3. Run Splice scripts inside device firmware

More details will be added in the **embedded documentation**.

---

## 10. Verifying Installation

Run:

    ./splice

You should see the Splice runtime start successfully.

---

## 11. Next Steps

- Read the language guide
- Write your first program
- Explore the Splice standard library

Project repository:

<https://github.com/Open-Splice/Splice>
