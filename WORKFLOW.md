# AI Development Workflow: Round 1 vs Round 2

## Overview

For the RideSync bus-search feature, I compared two AI-assisted development approaches. In Round 1, I used a deliberately vague prompt asking the AI to improve the bus search feature. In Round 2, I used a precise prompt with specific file references, requirements, constraints, edge cases, and verification steps.

## Round 1: Vague Prompt

The first prompt gave the AI freedom to decide what should be improved. It inspected the existing frontend and made several changes, including route-aware searching, optional time filters, autocomplete improvements, a swap control, inline validation, improved result cards, sorting, booking updates, and persistent conductor messages.

The result was functional, but the scope was broad. Because several improvements were made together, reviewing exactly why each change was necessary required more effort. The AI also made assumptions about which improvements were most useful rather than following a clearly defined requirement.

## Round 2: Precise Prompt

For Round 2, I started from a separate branch and used a fresh AI conversation. I referenced the relevant RideSync files and specified the expected behaviour, constraints, accessibility requirements, edge cases, and verification tests. The AI first created a plan and then implemented the planned hub-transfer feature.

The improvement was more focused. The implementation reused the existing `tripForSearch` logic and added one-transfer itineraries through Vyttilla Hub and Kadavanthra. I verified Petta → Kadavanthra, Petta → Thirupunithura, and Petta → Puthotta. The transfer results showed the two legs, transfer hub, waiting time, fare, and booking options.

## Comparison

The main difference was control. Round 1 demonstrated that a vague prompt can produce a useful result, but it may also expand the scope beyond the most important problem. Round 2 required more planning before coding, but the resulting changes were easier to understand and verify because the expected behaviour was defined in advance.

One AI mistake/issue I caught was that the initial search model only handled single-bus trips, so valid journeys requiring a transfer returned no results. This led to the hub-transfer improvement in Round 2.

## What I Learned

I learned that AI coding quality depends heavily on how clearly I define the problem. File references, constraints, examples, edge cases, and explicit verification steps make the AI more predictable and make reviewing its work easier. For future RideSync work, I will use a plan → build → test → review workflow instead of relying on a single broad prompt.