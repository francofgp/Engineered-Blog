---
title: 'How to Measure Software Performance'
date: 2022-07-16T17:24:00.000-03:00
image: "/uploads/post/how-to-measure-performance/tape-measure.jpg"
description: You want to measure software delivery performance, but don't know how?. Do you want to know if your team is performing well? Don't you know what to do to remain competitive? The answers to these and many more questions will be answered in this post.
categories:
- Engineering
tags:
- DevOps
type: post
draft: false
---

You want to **measure software delivery performance**, but don't know how?. Do you want to know if **your team is performing well?** Don't you know what to do to remain competitive? The answers to these and many more questions will be answered in this post.

Measure software performance isn't an easy task, organizations  in  all  industries are  using  small  teams  that  work  in  short  cycles  and  measure  feedback  from users  to  build  products  and  services  that  delight  their  customers  and  rapidly deliver  value  to  their  organizations. These  high  performers  are  working to  get  better  at  what  they  do, about how they may achieve their goals.

**Disclaimer:** This post has been adapted from [**Accelerate: The Science of Lean Software and DevOps**](https://en.wikipedia.org/wiki/Accelerate_(book)) by Nicole Forsgren, PhD, Jez Humble, and Gene Kim.

## How to remain competitive?

To remain competitive and succeed in the market, organizations must *accelerate:*

- **Delight customers** through the delivery of goods and services.
- **Engagement with the market** to detect and understand customer demand.
- **Anticipation of compliance** and regulatory changes that impact their systems.
- **Response to potential risks**, such as changes in the economy.
  
> At the heart of this acceleration is software.

## What to do to deliver software to win in the market?

Technology leaders need to deliver software quickly and reliably to win in the market. The key to successful change is measuring and understanding the right things with a **focus on capabilities and not on maturity**.

![delivery-man](/uploads/post/how-to-measure-performance/delivery-man.jpg)

Shifting to a capabilities model of measurement is essential for organizations wanting to accelerate software delivery. This is due to **four factors**.

| Maturity Models | Capabilities Models|
| --------------- | ----------- |
| Focus on helping an organization **arrive** at a mature state. | Focus on helping an organization continually improve and progress. |
| Similar set of technologies, or capabilities for every set of teams and organizations to progress through.   | Allow different parts of the organization to take a customized approach to improvement, taking into account short and long-term goals.|
|They are output based.| They are outcome based.|
|Define a static level of process, and organizational abilities to achieve.|Allow for dynamically changing environments and allow teams and organizations to focus on developing the skills and capabilities needed to remain competitive.|

*By focusing on a capabilities paradigm, organizations can continuously drive improvement. And by focusing on the right capabilities, organizations can drive improvements in their outcomes*

## What factors *do not* predict performance?

There are a couple of factors that people believe drive software delivery performance, but in fact, none of the following factors are predictors of performance

- **Age and technology** used for the application.
- Whether operations teams or development teams performed deployments.
- Whether a **change approval board** (CAB) is implemented.

## How DevOps fits into all of this.

Software is transforming and accelerating organizations of all kinds. The practices and capabilities we talked here give rise to what is known as  the **DevOps movement**, and they are transforming industries everywhere.

DevOps emerged from a small number of organizations facing a evil problem: how to build secure, resilient, rapidly evolving distributed systems at scale.

**In order to remain competitive, organizations must learn how to solve these problems.**


![measuring something](/uploads/post/how-to-measure-performance/measuring.jpg)
### The value of DevOps

Some of the advantages of adopting DevOps lead to:

- **Increased deployment frequency**
- Faster lead time form commit to deploy
- Faster mean time ti recover from dowtime
- **Decreased change failure rate**

There is a need to measure DevOps capabilities accurately and to communicate these measurement results to leaders, who can use them to make decisions and inform strategy about their organization’s technology posture.

## Why is hard to measure performance?

Measuring performance in the domain of software is hard, the  way  work is broken down is  arbitrary, and the design and delivery activities happen at the same time. 

Indeed, it’s expected that we will change and evolve our design based on what we learn by trying to implement it. So it is necessary to define a valid, reliable measure of software delivery performance.

![measuring instruments](/uploads/post/how-to-measure-performance/measuring-instruments.jpg)

### Previous attempts to measure performance

There were several methods to measure performance, but I am going to focus on just three:

- **Lines of Code:** Rewarding  developers  for  writing  lines  of code leads to bloated software that incurs higher maintenance costs and higher cost  of  change.
- **Velocity:** Velocity  is  designed  to  be  used  as  a capacity planning tool, nonetheless some managers have also used it as a way to measure team productivity, or to compare teams. Velocity has several flaws. First, velocity is a relative and team-dependent measure, not an absolute one; Second, when velocity is used as a productivity measure, teams inevitably work to game their velocity.
- **Utilization:** The  problem  with  this  method  is  that  high  utilization  is  only  good  up  to  a point. Once utilization gets above a certain level, there is no spare capacity or slack to absorb unplanned work, changes to the plan, or improvement work.
This results in longer lead times to complete work.

## What should have a *successful* metric of performance?

A *successful measure of performance* should have two key characteristics. 
- It should **focus on a global outcome** to ensure that teams do not play against each other.  
- Our measure should **focus on outcomes not output**: it must help achieve organizational goals.

## What are these successful metric of performance?

Metric of delivery performance that meet these criteria are:

### Delivery Lead Time

It is the time to implement, test, and deliver code for a feature.

Shorter  product  delivery  lead  times  are  better  since:
- They  enable  **faster feedback** on what we are building and allow us to course correct more quickly.
- When  there  is  a  defect and  we need to **deliver a fix rapidly** and with high confidence.

### Deployment Frequency

It is the number of deployments in a given duration of time. By deployment I mean a software deployment to production or to an app store.
Shorter deployment frequency are better since:

- Reduces  cycle times and variability in flow.
- Accelerates feedback
- **Reduces risk** and overhead
- **Improves efficiency**
- Increases motivation and urgency, 
- **Reduces costs** and schedule growth.

![deployment](/uploads/post/how-to-measure-performance/deployment.jpg)

### Mean Time to Recovery

It is the time it takes to restore service after production failure.
The key question is: **How quickly can service be restored?** How long it takes to restore service when a service incident occurs.

### Change Fail Rate

It is the percentage of failed changes over all changes.

Look at what percentage of changes for the primary application or service you work on either results in degraded service or requires remediation.

## How delivery performance impacts on organizations performance

High  performers  do  better  at  all  of  these  measures, but much dogma in our industry still rests on the false assumption that moving faster means trading off against other performance goals, rather than enabling and reinforcing them

High-performing  organizations  are  twice  as  likely  to exceed  these  goals  as  low  performers.  Therefore  your organization’s  software  delivery  capability  can  in  fact  provide  a  competitive advantage to your business.

![increasing](/uploads/post/how-to-measure-performance/increasing.jpg)

Whether you’re trying to generate  profits  or  not,  any  organization  today  depends  on  technology  to achieve its mission and provide value to its customers or stakeholders quickly, reliably,  and  securely.

The following diagram shows how Software Delivery Performance *drives* Organizational Performance and Noncommercial Performance.

```goat

                                    .---> Organizational Performance
                                    |
Software Delivery Performance    ---+
                                    |
                                    .---> Noncommercial Performance
```

## Conclusion

We learned how to make our organization remain competitive in the market, how to measure software performance, what makes a measure good and what doesn't, and which ones we can use.

Finally, we talked about the importance of how Software Delivery Performance drives organizational performance and Noncommercial performance, helping achieve the organizational goals.
