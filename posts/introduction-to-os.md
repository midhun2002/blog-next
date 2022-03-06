---
title: Introduction to Operating Systems.
date : "Mar 6,2021"
tags : ["Operating Systems"]
readtime: 3 min read
cover_image : '/images/introduction-to-os/OS_photo.jpg'
excerpt : "Operating Systems is the most basic and important concept in the field of
Computer Science and Engineering."
---




Lets discuss about the operating system and its functionalities….


### What is an Operating System?


Operating System is a piece of software which acts as an interface between user applications and hard ware devices( CPU, ram, disk, I/0). In the early days in order to perform a task you need to load the code in machine language for every hardware device. If the task becomes complex, it requires multiple hard ware to access/write/read to complete the task. And what if there is an I/O operation…CPU remains idle until the I/O operation completes. What if there are multiple tasks which performs I/O operations…..It is distressing right?


Here comes the need of a logical entity which can manage the hardware and performs the tasks efficiently and correctly. That is called OPERATING SYSTEM. Operating systems provide convenience(easy to operate) and throughput(completes tasks very fast).Now lets discuss about the functionalities of the Operating system which made this software special.

### Functionalities of an Operating System


Here are the list of main functionalities that OS provides….


1. Resource Management(Threading)
2. Storage Management(File System)
3. Task Management(CPU Scheduling)
4. Process Management (RAM)
5. Security(Password, Isolation of processes)

We will discuss these functionalities and the algorithms behind it in depth in future.


Actually, this is a generalized Version of Operating System like our Computers at present. Many Operating Systems are evolved depending  on the importance, efficiency ,the speed to perform…Operating Systems are mainly classified into 7 types.


1. Batch Operating Systems
2. Multi Programming Systems
3. Multi tasking (General)
4. Real time OS (Missile Systems)
5. Distributed (Facebook Servers)
6. Clustered (Cloud)
7. Embedded (IoT devices)


As you can see we Use VSCode,Chrome etc.. at the same time right? So how OS runs and manages the applications.Coming to that...
In OS world we consider the applications tasks as process.

### What is Process ?

A process is the instance of a computer program that is being executed by one or many threads.
When we run the program,the program code gets loaded into memory(RAM).Now it is the Process.

when a program is loaded into the memory.OS gives the resources for the program to run in the system.

1.Stack (local variabes,function params(temp variables))\
2.heap(dynamically allocated memory)\
3.Data(global and static)\
4.Text(Program counter,register's data)

Text saves the contents of processors register and the value of Program counter

#### Program Counter: 
Program counter stores the memory address (RAM address) of the next instruction to be 
executed.

#### Registers:
registers are the storage elements in the cpu
that helps to store program counter,temp vars and accumulators etc..


#### Process States
A process passes mainly through five different states
1.Start
2.Ready
3.Running
4.Wait
5.Terminated.

<img src="/images/introduction-to-os/process_state.jpg" alt="Process_states" width="100%"/> 

When Process goes through different states the its state must be preserved.Process Control Block(PCB) is a data structure maintained by Operating System for every Process.

PCB stores the essential data to keep track  of a process when passes through different states.

PCB stores process id,state,privilege,program counter,registers,Pointer to parents process,accounting,memory,scheduling and I/O information.

<img src="/images/introduction-to-os/Process-Control-Block.jpg" alt="PCB" width="100%"/>

