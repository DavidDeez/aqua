# 🌊 AquaFHIR: AI-Powered One Health Interoperability

**AquaFHIR** is a modern, AI-powered interoperability bridge built for the **OneAquaHealth IEEE Global Hackathon**. It transforms unstructured, natural-language citizen science observations of urban water ecosystems into standardized **HL7 FHIR (Fast Healthcare Interoperability Resources)** risk alerts for public health dashboards.

By bridging the gap between environmental monitoring and human health standards, AquaFHIR brings the **"One Health"** vision to life.

## 🚀 Features

* **Citizen Reporting Portal**: A mobile-friendly interface where citizens can report stream conditions using plain, natural language (e.g., "The water looks green and smells like sulfur").
* **AI NLP Engine**: Automatically analyzes the text, validates claims, and identifies critical environmental conditions (like Cyanobacteria blooms or waste pollution).
* **HL7 FHIR Interoperability**: Converts subjective environmental text into a standardized digital health `Observation` resource (using LOINC code `92831-7` for Water quality assessment).
* **Public Health Dashboard**: A command center for city officials to visualize real-time FHIR environmental data, empowering rapid response and resilience planning.

## 🛠️ Tech Stack

* **Frontend**: Next.js (React), Tailwind CSS, Lucide Icons
* **Backend**: Next.js API Routes (Node.js)
* **AI**: NLP Simulation / LLM Integration
* **Standards**: HL7 FHIR, LOINC

## 🏃‍♂️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎯 Hackathon Tracks Addressed

1. **Track 3: AI-Supported Assessment** - Using AI to validate and standardize citizen observations.
2. **Track 7: Digital Health Standards** - Proving that FHIR interoperability can be extended to environmental use cases.
3. **Track 2: Data-to-Insight** - Turning citizen data into actionable One Health dashboards.

---
*Built with ❤️ for the IEEE OneAquaHealth Hackathon*
