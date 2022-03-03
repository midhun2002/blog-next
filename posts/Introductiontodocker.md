---
title: Introduction to Docker.
date : "Feb 27,2021"
tags : ["Docker","Docker"]
readtime: 3 min read
cover_image : '/images/blog1/img_avatar.png'
excerpt : "Docker is an open source container engine which is very powerful for deploying modern day apps.
"
---

# Introduction to Docker
###### Brief Intro to Docker

#### Brief History before Docker



 First of all, before getting into the details of Docker and its usage, let us understand why we need it in the first place. If a company wants to run its application it must deployed in server. But a server has some constraints such as responding to requests per second, internal hard ware etc. This really affects the end user experience when there is a huge network traffic concentrated at the server.
 
  
One of the solutions is to deploy other application instance on another server. This was the case at 80–90s.But there is a huge wastage of resources, capital unless the traffic is heavy. So we must find a solution where resources should not get wasted and to increase the performance of the application.



The better solution was implemented by the Company VM Ware.VM Ware comes up with the solution where multiple application instances can run on single server through the concept of Virtualization. Virtualization enables to run multiple Virtual OSs on a server where each Virtual OSs run each of the application instances. Even though it was a major breakthrough, for a virtual OS to run on the server, allocation of memory is necessary irrespective of the application's usage. For example, if the application needs 200MB RAM but the allocated RAM for Virtual OS is 2GB.Almost 1.8GB gets wasted, because of the isolated of OS from other OSs for security purposes.



Although many companies follow different models for deploying. Google team created "THE LINUX CONTAINERS" where the container is the minimalistic OS which contains application specific resources. Since Google is a private corporate, much developments were not made. Later Google made the Linux containers open source. Huge developments occurred and Docker came into the spot light. Today most of the companies uses docker for deployment. It is really useful for all developers since it is platform independent(Actually it depends on Linux).Now lets go to the deep dive in Docker.

#### What is Docker?
