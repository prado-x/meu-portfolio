# PROFESSIONAL CONTEXT & ARCHITECT SKILLS

## User Profile: Senior Engineering Productivity & Quality Architect (10+ Years Experience)
- **Current Core Focus:** Concurrency & Performance (Java 21 Virtual Threads, Parallel Execution Services), Platform Engineering, Cloud Reliability Quality (CRQ), Advanced Observability (Datadog Workflows), and Enterprise GenAI Engineering (Agents, MCP, StackSpot, Devin.AI).

## Core Technical Achievements to Leverage:
1. **Concurrency & Performance Orchestration (2025-2026):**
   - Engineered a complex Full-Stack Data Generation Platform mitigating environment downtime.
   - Built an API Gateway & High-Performance Backend utilizing **Java 21, Virtual Threads (VT), and Parallel Execution Services (PES)** to orchestrate complex payloads hitting between 25 to 37 downstream banking microservices.
   - Reduced data orchestration latency from **3-5 minutes down to an average of 7 seconds** (a ~95%+ speed improvement) running on AWS ECS Fargate.
   - Solved a 29-second API Gateway timeout constraint by architecting an asynchronous cache-polling mechanism (POST/GET mesh pattern) for smooth web-UI streaming feel.

2. **Enterprise GenAI & Agentic Workflows (2025-2026):**
   - Headed early-discovery and implementation playbooks for **Devin.AI and GitHub Copilot (Agent Mode)**, defining corporate playbooks for massive unit testing and mutation test scaling.
   - Designed and shipped a production-ready custom Chatbot UI utilizing backend connections to StackSpot AI Agents with curated knowledge sources.
   - Advanced knowledge in **Model Context Protocol (MCP)** and specialized Prompt Engineering / System Skills for development acceleration.
   - Currently pursuing a Post-Graduate Specialization in Generative AI.

3. **Advanced Observability & Incident Response (Shift-Right SRE):**
   - Leading the "First Responder" bank-wide initiative using **Datadog Workflows**, ServiceNow APIs, and custom Javascript steps to automate root-cause analysis alerts. 
   - Orchestrated automated alert routing triggering automated incident parsing (Bits SRE) and multi-channel notification layout limits (<10k chars) via MS Teams & Power Automate to streamline midnight on-call shifts.
   - Launching project **Lighthouse**: A centralized Observability and SRE hub embedding complex Datadog Dashboards and AWS QuickSight Embedded charts within a highly responsive, custom UI.

4. **Community Metrics & Shift-Left (2024):**
   - Drove a banking community-wide Testing Marathon across Java, Kotlin, Python, Swift, and Angular, increasing absolute code coverage by over 40% across all squads.
   - Scaled individual application coverages from under 10% to over 95%.
   - Built custom CLI tools distributed via Artifactory to allow developers to bootstrap automated testing specs, Mock servers (Wiremock), LocalStack setups, and architecture schemas (SDD).
   - Engineered service virtualization layer to detach test data generation from unstable pre-production staging environments.

5. **Legacy & Infrastructure Migration (2020-2023):**
   - Migrated 115 heavy repositories from legacy AWS CodeBuild infrastructure to a modern CI/CD Pipeline 2.0 framework within a single week.
   - Background in backend testing and development involving IBM Mainframes (Cobol), Message Queues (MQ, Kafka, SQS), and AWS Cloud.

---

# FRONTEND & ARCHITECTURE AGENT SKILLS

### 1. Vercel React Best Practices
- **Server Components (RSC) by Default:** Every page and major visual section must be rendered on the server to optimize Core Web Vitals, maximize SEO, and reduce the JavaScript payload sent to the client.
- **Isolated Client Components (`'use client'`):** Move interactivity (state, local filters, language switches) down to the leaf nodes of the component tree. Keep root components clean and server-driven.
- **Strict TypeScript:** Eliminate the use of `any`. Define strong interfaces and types for all component props, dictionaries, and API responses.
- **Performance-First Design:** Avoid unnecessary re-renders. Utilize efficient layouts and native Next.js link routing.

### 2. Web Design & Frontend Guidelines
- **Premium Minimalist Dark Mode:** The core palette must default to deep dark tones (`bg-zinc-950` and text `text-zinc-50`). High-contrast, publication-grade layout styled for executive visibility.
- **Typography and Hierarchy:** Utilize big, bold, editorial headlines with compact line heights (e.g., `text-7xl` with `leading-[1.05]`) contrasted against clean, readable description text (`text-zinc-400`).
- **Mobile-First Responsiveness:** Build layouts defensively with fluid utilities (e.g., full-width buttons on mobile, structured layout containers on desktop).
- **Subtle Visual Anchors:** Use elegant glassmorphism effects (`backdrop-blur-md bg-zinc-950/75`), very thin container borders (`border-zinc-800/50`), and micro-interactions for links and buttons.