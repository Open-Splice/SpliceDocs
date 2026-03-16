# Splice API Guide

This document explains how to use the **Splice runtime API** from C or C++.

The API allows developers to:

• embed the Splice runtime inside applications  
• execute compiled `.spc` bytecode  
• expose native C functions to Splice programs  
• build native modules using the Splice SDK  

Splice is designed so the same runtime works on **desktop systems, embedded devices, and microcontrollers**.

---

## Embedding Splice in a Host Program

Splice can be embedded inside any C or C++ application.

The runtime implementation is contained in:

```
src/splice.h
```

A host program loads compiled bytecode (`.spc`) into memory and executes it.

---

## Desktop Embedding

On desktop systems the host program simply loads a compiled `.spc` file and executes it.

Minimal example:

```
#define SPLICE_NO_INLINE_MEMREADER

#include "src/splice.h"
#include "src/sdk.h"

int main(void)
{
    unsigned char *buf = ...;   // load .spc file into memory
    size_t size = ...;

    if (!splice_execute_bytecode(buf, size)) {
        return 1;
    }

    return 0;
}
```

The host application is responsible for reading the `.spc` bytecode into memory.

Execution begins when:

```
splice_execute_bytecode(buf, size)
```

is called.

---

## Embedded Systems

On embedded platforms the runtime is typically started using:

```
splice_run_embedded_program(...)
```

Example Arduino-style host:

```
#define SPLICE_PLATFORM_ARDUINO 1

extern "C" {
#include "src/splice.h"
}

extern "C" void splice_embed_print(const char *s) { Serial.print(s ? s : ""); }
extern "C" void splice_embed_println(const char *s) { Serial.println(s ? s : ""); }
extern "C" void splice_embed_delay_ms(unsigned long ms) { delay(ms); }
extern "C" int splice_embed_input_available(void) { return Serial.available(); }
extern "C" int splice_embed_input_read(void) { return Serial.read(); }

static const unsigned char program[] = { /* compiled .spc bytes */ };

void setup()
{
    Serial.begin(115200);
    splice_run_embedded_program(program, sizeof(program));
}

void loop() {}
```

Embedded hosts provide platform-specific hooks for:

• printing text  
• delays  
• input handling  

---

## Registering Native Functions

Splice allows native C functions to be exposed directly to scripts.

Native functions are registered using:

```
Splice_register_native(...)
```

These functions become callable inside Splice programs.

---

## Writing Native Modules

Native modules allow developers to extend Splice using C code.

Example native function:

```
#include "sdk.h"

static Value my_add(int argc, Value *argv)
{
    if (argc < 2) return value_number(0.0);

    if (argv[0].type != VAL_NUMBER || argv[1].type != VAL_NUMBER) {
        return value_number(0.0);
    }

    return value_number(argv[0].number + argv[1].number);
}
```

This function:

• receives arguments from the Splice runtime  
• validates the argument types  
• returns a `Value` back to the VM  

---

## Registering the Module

Modules register functions during initialization.

```
__attribute__((constructor))
static void init_module(void)
{
    Splice_register_native("my_add", my_add);
}
```

When the module loads, the function `my_add` becomes available inside Splice.

---

## Using the Module in Splice

Example Splice script:

```
import "native_math.c"

print(my_add(2, 3))
```

Output:

```
5
```

---

## Splice Value System

Native functions communicate with the VM using the `Value` type.

Common helper constructors:

```
value_number(...)
value_string(...)
value_bool(...)
```

Values returned from native functions become the result visible in Splice scripts.

---

## Execution Flow

Typical flow when embedding Splice:

1. Host application loads `.spc` bytecode
2. Optional native functions are registered
3. Runtime executes bytecode
4. Scripts call native functions when needed

```
Host Application
       |
       v
Load .spc bytecode
       |
       v
Register native functions
       |
       v
splice_execute_bytecode(...)
       |
       v
Splice VM runs program
```

---

## When to Use Native Modules

Native modules are useful when:

• accessing hardware  
• interacting with operating system APIs  
• implementing performance-critical code  
• extending Splice with custom functionality  

---

## Summary

The Splice API enables:

• embedding the runtime in applications  
• executing compiled bytecode  
• extending the language using native C modules  

Because the runtime is written in C, it can run on nearly any platform where a C compiler is available.